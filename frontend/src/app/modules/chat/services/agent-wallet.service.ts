import { Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { BehaviorSubject } from 'rxjs';
import { WalletEncryptionService } from 'app/core/services/wallet-encryption.service';

@Injectable({
  providedIn: 'root',
})
export class AgentWalletService {
  private provider: ethers.providers.JsonRpcProvider;

  // Balance Subject for reactive UI updates
  private balanceSubject = new BehaviorSubject<string>('0.00');
  public balance$ = this.balanceSubject.asObservable();

  // Avalanche C-Chain - Fuji Testnet
  private readonly RPC_URL = 'https://api.avax-test.network/ext/bc/C/rpc';

  constructor(private _encryptionService: WalletEncryptionService) {
    this.provider = new ethers.providers.StaticJsonRpcProvider(this.RPC_URL);
    this.provider.pollingInterval = 2000; // Poll every 2 seconds

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
            window.location.reload();
          }
        }
      });
    }
  }

  /**
   * Get the active wallet address
   * Returns the authenticated user's address (x402_agent_address)
   */
  getAddress(): string {
    return localStorage.getItem('x402_agent_address') || '';
  }

  /**
   * Get the balance of the active wallet
   */
  async getBalance(): Promise<string> {
    const authAddress = this.getAddress();
    if (!authAddress) return '0.00';

    const balance = await this.provider.getBalance(authAddress);
    return ethers.utils.formatEther(balance);
  }

  /**
   * Get the appropriate signer (MetaMask or Encrypted Agent Wallet)
   */
  private async getSigner(): Promise<ethers.Signer> {
    const walletType = localStorage.getItem('x402_wallet_type');
    let encryptionMethod = this._encryptionService.getEncryptionMethod();

    // Auto-detect encryption method if missing but wallet data exists
    if (!encryptionMethod && this._encryptionService.isWalletEncrypted()) {
      if (localStorage.getItem('x402_credential_id')) {
        encryptionMethod = 'passkey';
      } else if (localStorage.getItem('x402_encryption_salt')) {
        encryptionMethod = 'pin';
      }
    }

    // 1. Encrypted Agent Wallet
    if (encryptionMethod) {
      let privateKey: string | null = null;

      if (encryptionMethod === 'passkey') {
        // Triggers browser's Passkey prompt
        privateKey = await this._encryptionService.decryptWithPasskeys();
      } else if (encryptionMethod === 'pin') {
        // Fallback UI for PIN
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
      await this.switchToAvalancheFuji();
      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
      await provider.send('eth_requestAccounts', []);
      return provider.getSigner();
    }

    throw new Error(
      'No valid wallet connected. Please sign in with your Agent Wallet or MetaMask.',
    );
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
  ): Promise<{ tx: ethers.providers.TransactionResponse; signerAddress: string }> {
    const signer = await this.getSigner();
    const signerAddress = await signer.getAddress();

    // Verify if the target address is actually a contract
    const code = await this.provider.getCode(contractAddress);

    // If code is '0x', it's an EOA (User Address), not a contract.
    // This happens if the backend is misconfigured and returns the wallet address instead of the payment contract.
    // In this case, we fallback to the x402 payment contract to allow the flow to proceed/test.
    if (code === '0x') {
      console.warn(`Target ${contractAddress} is not a contract (EOA). Using fallback contract.`);
      // Fallback to x402 Payment Contract (Fuji)
      contractAddress = '0x72Fdce477bBD9f322907b3b1C4a58bC4d5D64C3a';
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
    const tx = await contract['payForService'](serviceId, requestId, txOptions);
    return { tx, signerAddress };
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

    // Use paymentTxHash directly if valid, otherwise HashZero
    // We do NOT hash the tx hash again, otherwise the link to explorer breaks
    const paymentProof =
      paymentTxHash && ethers.utils.isHexString(paymentTxHash)
        ? paymentTxHash
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

  /**
   * Enforce network switch to Avalanche Fuji Testnet
   */
  private async switchToAvalancheFuji() {
    if (!(window as any).ethereum) return;

    // Fuji Testnet Chain ID ('0xa869' = 43113)
    const chainId = '0xa869';

    try {
      await (window as any).ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId }],
      });
    } catch (switchError: any) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await (window as any).ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId,
                chainName: 'Avalanche Fuji Testnet',
                nativeCurrency: {
                  name: 'Avalanche',
                  symbol: 'AVAX',
                  decimals: 18,
                },
                rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
                blockExplorerUrls: ['https://testnet.snowtrace.io/'],
              },
            ],
          });
        } catch (addError) {
          console.error('Failed to add network:', addError);
        }
      }
    }
  }

  resetWallet() {
    this._encryptionService.clearEncryptionData();
    localStorage.removeItem('x402_agent_address');
    localStorage.removeItem('x402_wallet_type');
    window.location.reload();
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

  /**
   * Get payment history from the VerifikPayment contract
   * @param contractAddress - Contract address to query
   */
  async getPaymentHistory(
    contractAddress: string = '0x72Fdce477bBD9f322907b3b1C4a58bC4d5D64C3a',
  ): Promise<any[]> {
    const walletAddress = this.getAddress();
    if (!walletAddress) return [];

    // ABI for the event
    const ABI = [
      'event PaymentReceived(address indexed payer, string serviceId, string requestId, uint256 amount)',
    ];
    const contract = new ethers.Contract(contractAddress, ABI, this.provider);

    // Filter for PaymentReceived events where payer is current wallet
    console.log('Fetching payment history for:', walletAddress, 'on contract:', contractAddress);
    const filter = contract.filters['PaymentReceived'](walletAddress);

    // Get current block to limit range (optimization)
    const currentBlock = await this.provider.getBlockNumber();
    const fromBlock = Math.max(0, currentBlock - 2000000); // Look back ~46 days (2s block time)

    // Query logs
    const logs = await contract.queryFilter(filter, fromBlock);

    // Parse logs - optimization: reverse to show newest first
    const reversedLogs = logs.slice().reverse();

    return Promise.all(
      reversedLogs.map(async (log) => {
        const parsed = contract.interface.parseLog(log);
        // We fetching block timestamp might be slow for many logs.
        // For now, let's fetch it. If slow, we can optimize.
        const block = await log.getBlock();

        return {
          transactionHash: log.transactionHash,
          blockNumber: log.blockNumber,
          timestamp: block.timestamp * 1000,
          serviceId: parsed.args['serviceId'],
          requestId: parsed.args['requestId'],
          amount: ethers.utils.formatEther(parsed.args['amount']),
        };
      }),
    );
  }
  /**
   * Fetch transaction details for verification
   */
  async getTransactionDetails(txHash: string) {
    try {
      const tx = await this.provider.getTransaction(txHash);
      if (!tx) return null;

      const receipt = await this.provider.getTransactionReceipt(txHash);
      const block = await this.provider.getBlock(tx.blockNumber!); // blockNumber should be present if mined

      return {
        hash: tx.hash,
        from: tx.from,
        to: tx.to,
        value: ethers.utils.formatEther(tx.value),
        gasUsed: receipt.gasUsed.toString(),
        status: receipt.status === 1 ? 'Success' : 'Failed',
        timestamp: block.timestamp * 1000, // Convert to ms
        blockNumber: tx.blockNumber,
      };
    } catch (error) {
      console.error('Error fetching tx details:', error);
      return null;
    }
  }
}
