const isStaging = () =>
    typeof window !== 'undefined' && window.location?.hostname === 'x402.on-forge.com';

export const environment = {
    production: true,
    get baseUrl(): string {
        return isStaging() ? 'https://x402.on-forge.com' : 'https://prod.verifik.co';
    },
    get smartAgentUrl(): string {
        return isStaging() ? 'https://x402.on-forge.com' : 'https://x402-agent.verifik.co';
    },
    get apiUrl(): string {
        return isStaging() ? 'https://staging-api.verifik.co' : 'https://prod.verifik.co';
    },
    get appUrl(): string {
        return isStaging() ? 'https://x402.on-forge.com' : 'https://prod.verifik.co';
    },
    get projectId(): string {
        return isStaging() ? '6266193db77ccc8111730c90' : '6332941ccde4f719d9c00f9e';
    },
    get loginProjectFlowId(): string {
        return isStaging() ? '658ed28b0990f300134d7b78' : '6332941ccde4f719d9c00f9f';
    },
    get kycBaseUrl(): string {
        return isStaging() ? 'https://access.app' : 'https://access.verifik.co';
    },
    get documentationBaseUrl(): string {
        return 'https://docs.verifik.co';
    },
    // Blockchain Config
    rpcUrl: 'https://wild-bitter-meadow.avalanche-mainnet.quiknode.pro/e2565749ca44c2873fe2a0a747f5ac68ae7eb14f/ext/bc/C/rpc/',
    tokenTicker: 'VKA',
    vkaContractAddress: '0x8fc4b00689812f449723CB473E0A7C060b10eD3f',
    // Mainnet Contracts
    x402PaymentContract: '0x5e3C7c44e5d76fa5517378582B824046cBDcFfCD',
    reputationRegistryContract: '0x310247955605c357628F51e94b3E5A20225C71a4',
    priorityFeeTipGwei: '5',
    // Network Configuration
    chainId: 43114, // Avalanche Mainnet (43113 = Fuji Testnet)
    isTestnet: false, // Explicitly set to false for mainnet
};
