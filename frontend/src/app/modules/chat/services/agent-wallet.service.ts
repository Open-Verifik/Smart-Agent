import { Injectable, inject } from '@angular/core';
import { SessionService } from 'app/core/services/session.service';
import { WalletEncryptionService } from 'app/core/services/wallet-encryption.service';
import { ethers } from 'ethers';
import { BehaviorSubject } from 'rxjs';

import { environment } from 'environments/environment';

/** Avalanche C-Chain Mainnet: 43114 decimal = 0xa86a hex */
const AVALANCHE_CHAIN_ID = '0xa86a';

/**
 * Service for managing wallet operations including MetaMask and encrypted agent wallets.
 * Handles blockchain transactions, token transfers, and balance queries on Avalanche C-Chain.
 */
@Injectable({
    providedIn: 'root',
})
export class AgentWalletService {
    private provider: ethers.providers.JsonRpcProvider;

    private balanceSubject = new BehaviorSubject<string>('0.00');
    /** Observable stream of the current AVAX balance */
    public balance$ = this.balanceSubject.asObservable();

    private tokenBalanceSubject = new BehaviorSubject<string>('0.00');
    /** Observable stream of the current VKA token balance */
    public tokenBalance$ = this.tokenBalanceSubject.asObservable();

    private readonly RPC_URL = environment.rpcUrl || 'https://api.avax.network/ext/bc/C/rpc';
    /** The VKA token contract address on Avalanche */
    public readonly VKA_CONTRACT_ADDRESS = environment.vkaContractAddress;

    private _sessionService = inject(SessionService);

    constructor(private _encryptionService: WalletEncryptionService) {
        this.provider = new ethers.providers.JsonRpcProvider(this.RPC_URL);
        this.provider.pollingInterval = 3600000; // Idle: 1 hour

        // Listen for MetaMask account changes and sync local state
        if ((window as any).ethereum) {
            (window as any).ethereum.on('accountsChanged', (accounts: string[]) => {
                if (localStorage.getItem('x402_wallet_type') === 'metamask') {
                    if (accounts.length > 0) {
                        localStorage.setItem('x402_agent_address', accounts[0]);
                    }
                    this._sessionService.safeReload();
                }
            });
        }
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Polling Control
    // ─────────────────────────────────────────────────────────────────────────────

    /**
     * Starts active polling (1.5s interval) for faster transaction confirmations.
     * Use when waiting for a transaction to be mined.
     */
    startActivePolling(): void {
        this.provider.pollingInterval = 1500;
    }

    /**
     * Pauses polling (1 hour interval) to reduce RPC calls when idle.
     * Call this after transaction confirmation or when not actively waiting.
     */
    pausePolling(): void {
        this.provider.pollingInterval = 3600000;
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Wallet State
    // ─────────────────────────────────────────────────────────────────────────────

    /**
     * Gets the current wallet address from local storage.
     * @returns The wallet address or empty string if not connected
     */
    getAddress(): string {
        return localStorage.getItem('x402_agent_address') || '';
    }

    /**
     * Fetches the native AVAX balance for the connected wallet.
     * @returns The balance formatted in AVAX (e.g., "1.5")
     */
    async getBalance(): Promise<string> {
        const address = this.getAddress();
        if (!address) return '0.00';

        const balance = await this.provider.getBalance(address);
        return ethers.utils.formatEther(balance);
    }

    /**
     * Fetches the ERC-20 token balance for the connected wallet.
     * @param tokenAddress - The token contract address (defaults to VKA)
     * @returns The token balance formatted with proper decimals
     */
    async getTokenBalance(tokenAddress: string = this.VKA_CONTRACT_ADDRESS): Promise<string> {
        const address = this.getAddress();
        if (!address) return '0.00';

        try {
            const abi = ['function balanceOf(address) view returns (uint256)', 'function decimals() view returns (uint8)'];
            const contract = new ethers.Contract(tokenAddress, abi, this.provider);
            const [balance, decimals] = await Promise.all([contract['balanceOf'](address), contract['decimals']()]);
            return ethers.utils.formatUnits(balance, decimals);
        } catch {
            return '0.00';
        }
    }

    /**
     * Refreshes both AVAX and VKA token balances and updates the observable streams.
     * Call this after transactions to update the UI.
     */
    async refreshBalance(): Promise<void> {
        try {
            this.balanceSubject.next(await this.getBalance());
            this.tokenBalanceSubject.next(await this.getTokenBalance());
        } catch {
            // Silent fail
        }
    }

    /**
     * Resets the wallet by clearing all encryption data and local storage.
     * Triggers a page reload to reset the application state.
     */
    resetWallet(): void {
        this._encryptionService.clearEncryptionData();
        localStorage.removeItem('x402_agent_address');
        localStorage.removeItem('x402_wallet_type');
        this._sessionService.safeReload();
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Signer Management
    // ─────────────────────────────────────────────────────────────────────────────

    /**
     * Gets the appropriate signer based on wallet type.
     * Supports encrypted agent wallets (passkey/PIN) and MetaMask.
     * @returns An ethers Signer instance for signing transactions
     * @throws Error if no valid wallet is connected or unlock fails
     */
    private async getSigner(): Promise<ethers.Signer> {
        const walletType = localStorage.getItem('x402_wallet_type');
        let encryptionMethod = this._encryptionService.getEncryptionMethod();

        // Auto-detect encryption method from stored credentials
        if (!encryptionMethod && this._encryptionService.isWalletEncrypted()) {
            encryptionMethod = localStorage.getItem('x402_credential_id') ? 'passkey' : 
                               localStorage.getItem('x402_encryption_salt') ? 'pin' : null;
        }

        // Encrypted Agent Wallet (passkey or PIN)
        if (encryptionMethod) {
            let privateKey: string | null = null;

            if (encryptionMethod === 'passkey') {
                privateKey = await this._encryptionService.decryptWithPasskeys();
            } else if (encryptionMethod === 'pin') {
                const pin = prompt('Please enter your 6-digit PIN to sign the transaction:');
                if (pin) privateKey = await this._encryptionService.decryptWithPIN(pin);
            }

            if (privateKey) return new ethers.Wallet(privateKey, this.provider);
            throw new Error('Failed to unlock wallet');
        }

        // MetaMask external wallet
        if (walletType === 'metamask' && (window as any).ethereum) {
            await this.switchToAvalancheMainnet();
            const provider = new ethers.providers.Web3Provider((window as any).ethereum);
            await provider.send('eth_requestAccounts', []);
            return provider.getSigner();
        }

        throw new Error('No valid wallet connected. Please sign in with your Agent Wallet or MetaMask.');
    }

    /**
     * Checks if the current wallet type is MetaMask.
     * @returns True if using MetaMask, false otherwise
     */
    private isMetaMaskAccount(): boolean {
        const type = localStorage.getItem('x402_wallet_type');
        return !!type && type.trim().toLowerCase() === 'metamask';
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Network Management
    // ─────────────────────────────────────────────────────────────────────────────

    /**
     * Switches MetaMask to Avalanche C-Chain mainnet.
     * If the network is not configured, it will be added automatically.
     * @throws Error if user rejects the network switch
     */
    private async switchToAvalancheMainnet(): Promise<void> {
        const ethereum = (window as any).ethereum;
        if (!ethereum) return;

        try {
            const currentChainId = await ethereum.request({ method: 'eth_chainId' });
            if (currentChainId === AVALANCHE_CHAIN_ID) return;

            await ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: AVALANCHE_CHAIN_ID }],
            });
        } catch (error: any) {
            // Chain not added to MetaMask - add it
            if (error.code === 4902) {
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [{
                        chainId: AVALANCHE_CHAIN_ID,
                        chainName: 'Avalanche C-Chain',
                        nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
                        rpcUrls: [environment.rpcUrl || 'https://api.avax.network/ext/bc/C/rpc'],
                        blockExplorerUrls: ['https://snowtrace.io/'],
                    }],
                });
            } else if (error.code === 4001) {
                throw new Error('User rejected the network switch request');
            } else {
                throw error;
            }
        }
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Token Registration
    // ─────────────────────────────────────────────────────────────────────────────

    /**
     * Manually triggers VKA token registration in MetaMask.
     * @param tokenAddress - Optional custom token address (defaults to VKA)
     */
    async registerVkaToken(tokenAddress?: string): Promise<void> {
        await this.ensureVkaTokenMetadata(tokenAddress);
    }

    /**
     * Ensures the VKA token is registered in MetaMask for proper display.
     * Fetches token metadata from the contract and prompts MetaMask to add it.
     * Registration is cached to avoid repeated prompts.
     * @param tokenAddress - The token contract address (defaults to VKA)
     */
    async ensureVkaTokenMetadata(tokenAddress: string = this.VKA_CONTRACT_ADDRESS): Promise<void> {
        if (!this.isMetaMaskAccount()) return;

        const address = tokenAddress || this.VKA_CONTRACT_ADDRESS;
        const flagKey = `vka_reg_${address.toLowerCase()}`;

        // Already registered
        if (localStorage.getItem(flagKey) === 'true') return;

        try {
            // Fetch token metadata from contract
            let symbol = environment.tokenTicker || 'VKA';
            let decimals = 18;

            try {
                const abi = ['function symbol() view returns (string)', 'function decimals() view returns (uint8)'];
                const contract = new ethers.Contract(address, abi, this.provider);
                [symbol, decimals] = await Promise.all([contract['symbol'](), contract['decimals']()]);
            } catch {
                // Use defaults if contract call fails
            }

            // Prompt MetaMask to add the token
            const wasAdded = await (window as any).ethereum.request({
                method: 'wallet_watchAsset',
                params: {
                    type: 'ERC20',
                    options: { address, symbol, decimals, image: 'https://verifik.app/vka-logo.png' },
                },
            });

            if (wasAdded) localStorage.setItem(flagKey, 'true');
        } catch {
            // Silent fail - user may have declined
        }
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Transactions
    // ─────────────────────────────────────────────────────────────────────────────

    /**
     * Sends a simple ETH/AVAX transaction.
     * @param to - Recipient address
     * @param amountEther - Amount in AVAX (e.g., "0.1")
     * @param data - Optional calldata (defaults to "0x")
     * @returns The transaction response
     */
    async sendTransaction(to: string, amountEther: string, data: string = '0x'): Promise<ethers.providers.TransactionResponse> {
        const signer = await this.getSigner();
        return signer.sendTransaction({ to, value: ethers.utils.parseEther(amountEther), data });
    }

    /**
     * Pays for a service using native AVAX via the x402 payment contract.
     * @param contractAddress - The payment contract address
     * @param serviceId - Identifier for the service being paid for
     * @param requestId - Unique request identifier for tracking
     * @param amountEther - Payment amount in AVAX
     * @returns Transaction response and signer address
     */
    async payForService(
        contractAddress: string,
        serviceId: string,
        requestId: string,
        amountEther: string
    ): Promise<{ tx: ethers.providers.TransactionResponse; signerAddress: string }> {
        const signer = await this.getSigner();
        const signerAddress = await signer.getAddress();

        // Fallback to default contract if target is not a contract
        const code = await this.provider.getCode(contractAddress);
        if (code === '0x') contractAddress = environment.x402PaymentContract;

        const abi = ['function payForService(string serviceId, string requestId) public payable'];
        const contract = new ethers.Contract(contractAddress, abi, signer);
        const args = [serviceId, requestId];
        const overrides = { value: ethers.utils.parseEther(amountEther) };

        const tx = this.isMetaMaskAccount()
            ? await this._executeMetaMaskTransaction(contract, 'payForService', args, overrides)
            : await this._executeInternalTransaction(contract, 'payForService', args, overrides, signerAddress);

        return { tx, signerAddress };
    }

    /**
     * Pays for a service using VKA tokens (ERC-20 transfer).
     * Ensures token is registered in MetaMask before transaction for proper display.
     * @param recipientAddress - Address to receive the tokens
     * @param tokenAddress - The token contract address
     * @param amountUnits - Amount in token units (e.g., "0.2" for 0.2 VKA)
     * @returns Transaction response and signer address
     */
    async payForServiceWithToken(
        recipientAddress: string,
        tokenAddress: string,
        amountUnits: string
    ): Promise<{ tx: ethers.providers.TransactionResponse; signerAddress: string }> {
        const signer = await this.getSigner();
        const signerAddress = await signer.getAddress();

        const abi = ['function transfer(address to, uint256 amount) public returns (bool)', 'function decimals() view returns (uint8)'];
        const contract = new ethers.Contract(tokenAddress, abi, this.provider);

        const decimals = await contract['decimals']();
        const amount = ethers.utils.parseUnits(amountUnits, decimals);
        const data = contract.interface.encodeFunctionData('transfer', [recipientAddress, amount]);

        let tx: ethers.providers.TransactionResponse;

        if (this.isMetaMaskAccount()) {
            // Register token first so MetaMask shows "VKA" instead of "Unknown"
            await this.ensureVkaTokenMetadata(tokenAddress);
            tx = await this._executeMetaMaskRaw(tokenAddress, data, ethers.BigNumber.from(0));
        } else {
            const signerContract = new ethers.Contract(tokenAddress, abi, signer);
            tx = await this._executeInternalTransaction(signerContract, 'transfer', [recipientAddress, amount], {}, signerAddress);
        }

        return { tx, signerAddress };
    }

    /**
     * Submits feedback for an AI agent to the reputation registry contract.
     * @param agentTokenId - The agent's NFT token ID
     * @param rating - Rating from 1-5
     * @param tags - Optional array of feedback tags
     * @param comment - Optional feedback comment
     * @param paymentTxHash - Optional payment transaction hash as proof
     * @returns The transaction response
     * @throws Error if rating is not between 1-5
     */
    async submitFeedback(
        agentTokenId: number,
        rating: number,
        tags: string[] = [],
        comment: string = '',
        paymentTxHash: string | null = null
    ): Promise<ethers.providers.TransactionResponse> {
        const signer = await this.getSigner();
        if (rating < 1 || rating > 5) throw new Error('Rating must be between 1 and 5');

        const abi = ['function submitFeedback(uint256 agentTokenId, uint8 rating, string[] memory tags, string memory comment, bytes32 paymentProof) external returns (uint256)'];
        const contract = new ethers.Contract(environment.reputationRegistryContract, abi, signer);
        const paymentProof = paymentTxHash && ethers.utils.isHexString(paymentTxHash) ? paymentTxHash : ethers.constants.HashZero;
        const args = [agentTokenId, rating, tags, comment, paymentProof];

        return this.isMetaMaskAccount()
            ? await this._executeMetaMaskTransaction(contract, 'submitFeedback', args)
            : await this._executeInternalTransaction(contract, 'submitFeedback', args, {}, await signer.getAddress());
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // MetaMask Transaction Execution
    // ─────────────────────────────────────────────────────────────────────────────

    /**
     * Executes a raw transaction via MetaMask using direct RPC calls.
     * Bypasses ethers.js transaction management to ensure the 'from' address
     * exactly matches MetaMask's active account (fixes "invalid sender" errors).
     * @param to - Target contract or recipient address
     * @param data - Encoded transaction data
     * @param value - Native currency value to send (0 for token transfers)
     * @returns The transaction response
     */
    private async _executeMetaMaskRaw(
        to: string,
        data: string,
        value: ethers.BigNumber = ethers.BigNumber.from(0)
    ): Promise<ethers.providers.TransactionResponse> {
        const ethereum = (window as any).ethereum;
        if (!ethereum) throw new Error('MetaMask not found');

        try {
            // Ensure correct network before transaction
            await this.switchToAvalancheMainnet();
            await this._delay(100);

            // Get fresh account list from MetaMask
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const activeAccount = accounts[0];
            if (!activeAccount) throw new Error('No active account in MetaMask');

            // Verify network after account fetch
            const chainId = await ethereum.request({ method: 'eth_chainId' });
            if (chainId !== AVALANCHE_CHAIN_ID) {
                await this.switchToAvalancheMainnet();
                await this._delay(200);
            }

            // Sync local state if account changed externally
            const storedAddress = this.getAddress();
            if (activeAccount.toLowerCase() !== storedAddress.toLowerCase()) {
                localStorage.setItem('x402_agent_address', activeAccount);
            }

            // Build minimal transaction params
            const txParams: any = { from: activeAccount, to, data };
            if (!value.isZero()) txParams.value = value.toHexString();

            // Send via raw RPC
            const txHash = await ethereum.request({ method: 'eth_sendTransaction', params: [txParams] });

            // Wait briefly for transaction to propagate
            await this._delay(500);
            const txResponse = await this.provider.getTransaction(txHash);

            return txResponse || { hash: txHash, wait: async () => this.provider.waitForTransaction(txHash) } as any;
        } catch (error: any) {
            // Provide user-friendly error messages
            if (error.code === 4001) throw new Error('Transaction was rejected by user');
            if (error.message?.includes('invalid sender')) {
                throw new Error('Invalid sender: Please ensure MetaMask is connected to Avalanche. Try reconnecting your wallet.');
            }
            if (error.message?.includes('insufficient funds')) {
                throw new Error('Insufficient funds: Make sure you have enough VKA tokens and AVAX for gas.');
            }
            throw error;
        }
    }

    /**
     * Executes a contract method via MetaMask by encoding the call and using raw RPC.
     * @param contract - The ethers Contract instance
     * @param methodName - Name of the contract method to call
     * @param args - Arguments for the method
     * @param overrides - Optional transaction overrides (value, gas, etc.)
     * @returns The transaction response
     */
    private async _executeMetaMaskTransaction(
        contract: ethers.Contract,
        methodName: string,
        args: any[],
        overrides: any = {}
    ): Promise<ethers.providers.TransactionResponse> {
        const data = contract.interface.encodeFunctionData(methodName, args);
        const value = overrides.value || ethers.BigNumber.from(0);
        return this._executeMetaMaskRaw(contract.address, data, value);
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Internal Wallet Transaction Execution
    // ─────────────────────────────────────────────────────────────────────────────

    /**
     * Executes a contract method using the internal encrypted wallet.
     * Includes gas optimization and priority fee configuration.
     * @param contract - The ethers Contract instance
     * @param methodName - Name of the contract method to call
     * @param args - Arguments for the method
     * @param overrides - Optional transaction overrides
     * @param signerAddress - The signer's address for gas estimation
     * @returns The transaction response
     */
    private async _executeInternalTransaction(
        contract: ethers.Contract,
        methodName: string,
        args: any[],
        overrides: any = {},
        signerAddress: string
    ): Promise<ethers.providers.TransactionResponse> {
        const txOptions = await this._prepareGasOptimizedTransaction(contract, methodName, args, overrides, signerAddress);
        return await contract[methodName](...args, txOptions);
    }

    /**
     * Prepares transaction options with optimized gas settings.
     * @param contract - The contract instance
     * @param methodName - Method to call
     * @param args - Method arguments
     * @param baseOptions - Base transaction options
     * @param signerAddress - Signer address for estimation
     * @returns Complete transaction options with gas settings
     */
    private async _prepareGasOptimizedTransaction(
        contract: ethers.Contract,
        methodName: string,
        args: any[],
        baseOptions: any,
        signerAddress: string
    ): Promise<any> {
        const gasLimit = await this._estimateGasWithBuffer(contract, methodName, args, baseOptions, signerAddress);
        return this._prepareInternalWalletOptions({ ...baseOptions, gasLimit }, signerAddress);
    }

    /**
     * Estimates gas for a transaction with a 20% buffer for safety.
     * @param contract - The contract instance
     * @param methodName - Method to estimate
     * @param args - Method arguments
     * @param baseOptions - Base options for estimation
     * @param signerAddress - Address to estimate from
     * @returns Gas limit with 20% buffer, or default 300k on failure
     */
    private async _estimateGasWithBuffer(
        contract: ethers.Contract,
        methodName: string,
        args: any[],
        baseOptions: any,
        signerAddress: string
    ): Promise<ethers.BigNumber> {
        try {
            const estimated = await contract.estimateGas[methodName](...args, { ...baseOptions, from: signerAddress });
            return estimated.mul(120).div(100);
        } catch {
            return ethers.BigNumber.from(300000);
        }
    }

    /**
     * Adds EIP-1559 priority fees to transaction options for faster inclusion.
     * @param txOptions - Transaction options to enhance
     * @param signerAddress - The signer's address
     * @returns Enhanced transaction options with fee configuration
     */
    private async _prepareInternalWalletOptions(txOptions: any, signerAddress: string): Promise<any> {
        txOptions.from = signerAddress;
        const feeData = await this.provider.getFeeData();
        const tip = ethers.utils.parseUnits(environment.priorityFeeTipGwei || '5', 'gwei');

        if (feeData.maxFeePerGas && feeData.maxPriorityFeePerGas) {
            txOptions.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas.add(tip);
            txOptions.maxFeePerGas = feeData.maxFeePerGas.mul(125).div(100).add(tip);
        } else if (feeData.gasPrice) {
            txOptions.gasPrice = feeData.gasPrice.mul(135).div(100);
        }

        return txOptions;
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Query Methods
    // ─────────────────────────────────────────────────────────────────────────────

    /**
     * Fetches payment history from the x402 payment contract.
     * Queries PaymentReceived events for the current wallet.
     * @param contractAddress - The payment contract to query (defaults to x402)
     * @returns Array of payment records sorted newest first
     */
    async getPaymentHistory(contractAddress: string = environment.x402PaymentContract): Promise<any[]> {
        const walletAddress = this.getAddress();
        if (!walletAddress) return [];

        const abi = ['event PaymentReceived(address indexed payer, string serviceId, string requestId, uint256 amount)'];
        const contract = new ethers.Contract(contractAddress, abi, this.provider);
        const filter = contract.filters['PaymentReceived'](walletAddress);

        // Look back ~46 days (2M blocks at 2s/block)
        const currentBlock = await this.provider.getBlockNumber();
        const fromBlock = Math.max(0, currentBlock - 2000000);
        const logs = await contract.queryFilter(filter, fromBlock);

        return Promise.all(
            logs.slice().reverse().map(async (log) => {
                const parsed = contract.interface.parseLog(log);
                const block = await log.getBlock();
                return {
                    transactionHash: log.transactionHash,
                    blockNumber: log.blockNumber,
                    timestamp: block.timestamp * 1000,
                    serviceId: parsed.args['serviceId'],
                    requestId: parsed.args['requestId'],
                    amount: ethers.utils.formatEther(parsed.args['amount']),
                };
            })
        );
    }

    /**
     * Fetches detailed information about a specific transaction.
     * @param txHash - The transaction hash to query
     * @returns Transaction details or null if not found
     */
    async getTransactionDetails(txHash: string): Promise<any | null> {
        try {
            const tx = await this.provider.getTransaction(txHash);
            if (!tx) return null;

            const [receipt, block] = await Promise.all([
                this.provider.getTransactionReceipt(txHash),
                this.provider.getBlock(tx.blockNumber!),
            ]);

            return {
                hash: tx.hash,
                from: tx.from,
                to: tx.to,
                value: ethers.utils.formatEther(tx.value),
                gasUsed: receipt.gasUsed.toString(),
                status: receipt.status === 1 ? 'Success' : 'Failed',
                timestamp: block.timestamp * 1000,
                blockNumber: tx.blockNumber,
            };
        } catch {
            return null;
        }
    }

    // ─────────────────────────────────────────────────────────────────────────────
    // Utilities
    // ─────────────────────────────────────────────────────────────────────────────

    /**
     * Simple promise-based delay utility.
     * @param ms - Milliseconds to wait
     */
    private _delay(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
