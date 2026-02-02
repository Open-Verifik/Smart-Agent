import { Injectable } from '@angular/core';
import { ethers } from 'ethers';

@Injectable({
    providedIn: 'root',
})
export class AgentWalletService {
    private wallet: ethers.Wallet | ethers.HDNodeWallet | null = null;
    private provider: ethers.JsonRpcProvider;
    private readonly STORAGE_KEY = 'agent_burner_wallet_key';

    // Avalanche C-Chain - Fuji Testnet
    private readonly RPC_URL = 'https://api.avax-test.network/ext/bc/C/rpc';

    constructor() {
        this.provider = new ethers.JsonRpcProvider(this.RPC_URL);
        this.loadOrGenerateWallet();
    }

    private loadOrGenerateWallet() {
        const storedKey = localStorage.getItem(this.STORAGE_KEY);
        if (storedKey) {
            this.wallet = new ethers.Wallet(storedKey, this.provider);
        } else {
            this.wallet = ethers.Wallet.createRandom(this.provider);
            localStorage.setItem(this.STORAGE_KEY, this.wallet.privateKey);
        }
        console.log('Agent Wallet Address:', this.wallet.address);
    }

    getAddress(): string {
        return this.wallet ? this.wallet.address : '';
    }

    async getBalance(): Promise<string> {
        if (!this.wallet) return '0';
        const balance = await this.provider.getBalance(this.wallet.address);
        return ethers.formatEther(balance);
    }

    async sendTransaction(
        to: string,
        amountEther: string,
        data: string = '0x'
    ): Promise<ethers.TransactionResponse> {
        if (!this.wallet) throw new Error('Wallet not initialized');

        const tx = {
            to: to,
            value: ethers.parseEther(amountEther),
            data: data,
        };

        return await this.wallet.sendTransaction(tx);
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
        amountEther: string
    ): Promise<ethers.TransactionResponse> {
        if (!this.wallet) throw new Error('Wallet not initialized');

        // ABI for the payForService function
        const ABI = ['function payForService(string serviceId, string requestId) public payable'];

        // Create contract instance
        const contract = new ethers.Contract(contractAddress, ABI, this.wallet);

        // Parse amount
        const amount = ethers.parseEther(amountEther);

        // Get current gas price
        const feeData = await this.provider.getFeeData();

        // Estimate gas with manual calculation and 20% buffer
        let gasLimit: bigint;
        try {
            // Use estimateGas with proper overrides including value
            const estimateOptions = {
                value: amount,
                from: this.wallet.address,
            };

            // In v6, methods are available directly
            const estimatedGas = await contract.payForService.estimateGas(
                serviceId,
                requestId,
                estimateOptions
            );

            // Add 20% buffer (BigInt math)
            gasLimit = (estimatedGas * 120n) / 100n;
            console.log(
                'Gas estimated:',
                estimatedGas.toString(),
                'With 20% buffer:',
                gasLimit.toString()
            );
        } catch (error) {
            // If estimation fails, use a safe default (100k gas) with 20% buffer = 120k
            console.warn('Gas estimation failed, using default:', error);
            gasLimit = 120000n;
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
        });

        // Call the contract function with manual gas settings
        return await contract.payForService(serviceId, requestId, txOptions);
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
        paymentTxHash: string | null = null
    ): Promise<ethers.TransactionResponse> {
        if (!this.wallet) throw new Error('Wallet not initialized');
        if (rating < 1 || rating > 5) throw new Error('Rating must be between 1 and 5');

        // Reputation Registry ABI
        const REPUTATION_ABI = [
            'function submitFeedback(uint256 agentTokenId, uint8 rating, string[] memory tags, string memory comment, bytes32 paymentProof) external returns (uint256)',
        ];

        // Reputation Registry address (Fuji Testnet)
        const REPUTATION_REGISTRY = '0xc8AF65010D6Bf85e4DC89D9D13E9cC185df919B1';

        const contract = new ethers.Contract(REPUTATION_REGISTRY, REPUTATION_ABI, this.wallet);

        // Create payment proof hash if paymentTxHash is provided
        const paymentProof = paymentTxHash
            ? ethers.keccak256(ethers.toUtf8Bytes(paymentTxHash))
            : ethers.ZeroHash;

        // Get fee data
        const feeData = await this.provider.getFeeData();

        // Estimate gas
        let gasLimit: bigint;
        try {
            const estimatedGas = await contract.submitFeedback.estimateGas(
                agentTokenId,
                rating,
                tags,
                comment,
                paymentProof
            );
            gasLimit = (estimatedGas * 120n) / 100n; // 20% buffer
        } catch (error) {
            console.warn('Gas estimation failed, using default:', error);
            gasLimit = 150000n; // Safe default
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

        return await contract.submitFeedback(
            agentTokenId,
            rating,
            tags,
            comment,
            paymentProof,
            txOptions
        );
    }

    resetWallet() {
        localStorage.removeItem(this.STORAGE_KEY);
        this.loadOrGenerateWallet();
    }
}
