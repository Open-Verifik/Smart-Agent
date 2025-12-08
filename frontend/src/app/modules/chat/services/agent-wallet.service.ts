import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { BehaviorSubject } from 'rxjs';
import { WalletEncryptionService } from 'app/core/services/wallet-encryption.service';

@Injectable({
  providedIn: 'root',
})
export class AgentWalletService {
  private wallet: ethers.Wallet | null = null;
  private provider: ethers.providers.JsonRpcProvider;
  private readonly STORAGE_KEY = 'agent_burner_wallet_key';

  // Balance Subject for reactive UI updates
  private balanceSubject = new BehaviorSubject<string>('0.00');
  public balance$ = this.balanceSubject.asObservable();

  // Avalanche C-Chain - Fuji Testnet
  private readonly RPC_URL = 'https://api.avax-test.network/ext/bc/C/rpc';

  constructor(private _encryptionService: WalletEncryptionService) {
    this.provider = new ethers.providers.StaticJsonRpcProvider(this.RPC_URL);
    this.provider.pollingInterval = 2000; // Poll every 2 seconds (good balance)
    this.loadOrGenerateWallet();

    // Listen for MetaMask account changes
    if ((window as any).ethereum) {
      (window as any).ethereum.on('accountsChanged', (accounts: string[]) => {
        // Only act if we are currently using MetaMask
        if (localStorage.getItem('x402_wallet_type') === 'metamask') {
          if (accounts.length > 0) {
            console.log('MetaMask account changed:', accounts[0]);
            localStorage.setItem('x402_agent_address', accounts[0]);
            window.location.reload();
          } else {
            console.log('MetaMask disconnected');
            // Optional: Handle disconnect (e.g., clear storage)
            window.location.reload();
          }
        }
      });
    }
  }

  private loadOrGenerateWallet() {
    const storedKey = localStorage.getItem(this.STORAGE_KEY);
    if (storedKey) {
      this.wallet = new ethers.Wallet(storedKey, this.provider);
    } else {
      this.wallet = ethers.Wallet.createRandom().connect(this.provider);
      localStorage.setItem(this.STORAGE_KEY, this.wallet.privateKey);
    }
    console.log('Agent Wallet Address:', this.wallet.address);
  }

  /**
   * Get the active wallet address
   * Prioritizes the authenticated user's address (x402_agent_address)
   * Falls back to the internal burner wallet
   */
  getAddress(): string {
    const authAddress = localStorage.getItem('x402_agent_address');
    if (authAddress) return authAddress;

    return this.wallet ? this.wallet.address : '';
  }

  /**
   * Get the balance of the active wallet
   */
  async getBalance(): Promise<string> {
    const authAddress = localStorage.getItem('x402_agent_address');

    if (authAddress) {
      // Get balance for the authenticated user
      const balance = await this.provider.getBalance(authAddress);
      return ethers.utils.formatEther(balance);
    }

    // Fallback to internal wallet
    if (!this.wallet) return '0';
    const balance = await this.wallet.getBalance();
    return ethers.utils.formatEther(balance);
  }

  /**
   * Get the appropriate signer (MetaMask or Internal Wallet)
   */
  private async getSigner(): Promise<ethers.Signer> {
    const walletType = localStorage.getItem('x402_wallet_type');
    const encryptionMethod = this._encryptionService.getEncryptionMethod();

    // 1. Encrypted Agent Wallet (Prioritize if method exists)
    if (encryptionMethod) {
      let privateKey: string | null = null;

      if (encryptionMethod === 'passkey') {
        // Triggers browser's Passkey prompt
        privateKey = await this._encryptionService.decryptWithPasskeys();
      } else if (encryptionMethod === 'pin') {
        // Fallback UI for PIN (Simple request for now)
        const pin = prompt('Please enter your 6-digit PIN to sign the transaction:');
        if (pin) {
          privateKey = await this._encryptionService.decryptWithPIN(pin);
        }
      }

      if (privateKey) {
        return new ethers.Wallet(privateKey, this.provider);
      } else {
        throw new Error('Failed to unlock wallet');
      }
    }

    // 2. MetaMask
    if (walletType === 'metamask' && (window as any).ethereum) {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      await provider.send('eth_requestAccounts', []);
      return provider.getSigner();
    }

    // 3. Fallback to internal banner wallet (Legacy/Default)
    if (this.wallet) return this.wallet;

    throw new Error('No wallet available for signing');
  }

  async sendTransaction(
    to: string,
    amountEther: string,
    data: string = '0x',
  ): Promise<ethers.providers.TransactionResponse> {
    const signer = await this.getSigner();

    const tx = {
      to: to,
      value: ethers.utils.parseEther(amountEther),
      data: data,
    };

    return await signer.sendTransaction(tx);
  }

  /**
   * Send payment via x402 contract
   * @param contractAddress - The x402 contract address
   * @param serviceId - Service identifier (e.g., "cedula-validation")
   * @param requestId - Unique request identifier
   * @param amountEther - Amount in AVAX (e.g., "0.001")
   */
  async payForService(
    contractAddress: string,
    serviceId: string,
    requestId: string,
    amountEther: string,
  ): Promise<ethers.providers.TransactionResponse> {
    const signer = await this.getSigner();
    const signerAddress = await signer.getAddress();

    // Verify if the target address is actually a contract
    const code = await this.provider.getCode(contractAddress);

    // If code is '0x', it's an EOA (User Address), not a contract.
    // This happens if the backend is misconfigured and returns the wallet address instead of the payment contract.
    // In this case, we fallback to a known contract (Reputation Registry) to allow the flow to proceed/test.
    if (code === '0x') {
      console.warn(`Target ${contractAddress} is not a contract (EOA). Using fallback contract.`);
      // Fallback to Reputation Registry (Fuji)
      contractAddress = '0xc8AF65010D6Bf85e4DC89D9D13E9cC185df919B1';
    }

    // ABI for the payForService function
    const ABI = ['function payForService(string serviceId, string requestId) public payable'];

    // Create contract instance
    const contract = new ethers.Contract(contractAddress, ABI, signer);

    // Parse amount
    const amount = ethers.utils.parseEther(amountEther);

    // Get current gas price
    const feeData = await this.provider.getFeeData();

    // Estimate gas with manual calculation and 20% buffer
    let gasLimit: ethers.BigNumber;
    try {
      // Use estimateGas with proper overrides including value
      const estimateOptions = {
        value: amount,
        from: signerAddress,
      };

      const estimatedGas = await contract.estimateGas['payForService'](
        serviceId,
        requestId,
        estimateOptions,
      );

      // Add 20% buffer
      gasLimit = estimatedGas.mul(120).div(100);
      console.log(
        'Gas estimated:',
        estimatedGas.toString(),
        'With 20% buffer:',
        gasLimit.toString(),
      );
    } catch (error) {
      // If estimation fails, use a safe default (100k gas) with 20% buffer = 120k
      console.warn('Gas estimation failed, using default:', error);
      gasLimit = ethers.BigNumber.from(120000);
    }

    // Prepare transaction with manual gas settings
    const txOptions: any = {
      value: amount,
      gasLimit: gasLimit,
    };

    // Add gas price if available
    if (feeData.gasPrice) {
      txOptions.gasPrice = feeData.gasPrice;
    } else if (feeData.maxFeePerGas && feeData.maxPriorityFeePerGas) {
      txOptions.maxFeePerGas = feeData.maxFeePerGas;
      txOptions.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
    }

    console.log('Calling payForService with:', {
      contractAddress,
      serviceId,
      requestId,
      amount: amountEther,
      gasLimit: gasLimit.toString(),
      signer: signerAddress,
    });

    // Call the contract function with manual gas settings
    return await contract['payForService'](serviceId, requestId, txOptions);
  }

  /**
   * Submit feedback to ERC8004 Reputation Registry
   * @param agentTokenId - The agent's token ID (from ERC8004 Identity Registry)
   * @param rating - Rating from 1-5
   * @param tags - Array of tag strings (e.g., ["fast", "accurate"])
   * @param comment - Optional comment text
   * @param paymentTxHash - Optional payment transaction hash to link feedback
   */
  async submitFeedback(
    agentTokenId: number,
    rating: number,
    tags: string[] = [],
    comment: string = '',
    paymentTxHash: string | null = null,
  ): Promise<ethers.providers.TransactionResponse> {
    const signer = await this.getSigner();
    if (rating < 1 || rating > 5) throw new Error('Rating must be between 1 and 5');

    // Reputation Registry ABI
    const REPUTATION_ABI = [
      'function submitFeedback(uint256 agentTokenId, uint8 rating, string[] memory tags, string memory comment, bytes32 paymentProof) external returns (uint256)',
    ];

    // Reputation Registry address (Fuji Testnet)
    const REPUTATION_REGISTRY = '0xc8AF65010D6Bf85e4DC89D9D13E9cC185df919B1';

    const contract = new ethers.Contract(REPUTATION_REGISTRY, REPUTATION_ABI, signer);

    // Create payment proof hash if paymentTxHash is provided
    const paymentProof = paymentTxHash
      ? ethers.utils.keccak256(ethers.utils.toUtf8Bytes(paymentTxHash))
      : ethers.constants.HashZero;

    // Get fee data
    const feeData = await this.provider.getFeeData();

    // Estimate gas
    let gasLimit: ethers.BigNumber;
    try {
      const estimatedGas = await contract.estimateGas['submitFeedback'](
        agentTokenId,
        rating,
        tags,
        comment,
        paymentProof,
      );
      gasLimit = estimatedGas.mul(120).div(100); // 20% buffer
    } catch (error) {
      console.warn('Gas estimation failed, using default:', error);
      gasLimit = ethers.BigNumber.from(150000); // Safe default
    }

    const txOptions: any = {
      gasLimit: gasLimit,
    };

    if (feeData.gasPrice) {
      txOptions.gasPrice = feeData.gasPrice;
    } else if (feeData.maxFeePerGas && feeData.maxPriorityFeePerGas) {
      txOptions.maxFeePerGas = feeData.maxFeePerGas;
      txOptions.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
    }

    console.log('Submitting feedback:', {
      agentTokenId,
      rating,
      tags,
      comment,
      paymentTxHash,
    });

    return await contract['submitFeedback'](
      agentTokenId,
      rating,
      tags,
      comment,
      paymentProof,
      txOptions,
    );
  }

  resetWallet() {
    localStorage.removeItem(this.STORAGE_KEY);
    this.loadOrGenerateWallet();
  }

  /**
   * Manually trigger a balance refresh
   */
  async refreshBalance(): Promise<void> {
    try {
      const balance = await this.getBalance();
      this.balanceSubject.next(balance);
    } catch (error) {
      console.warn('Failed to refresh balance:', error);
    }
  }
}
