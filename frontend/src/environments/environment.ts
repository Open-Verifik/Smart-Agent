export const environment = {
    production: false,
    thisUrl: 'http://localhost:4201',
    baseUrl: 'http://localhost:3006',
    smartAgentUrl: 'http://localhost:3060',
    apiUrl: 'https://verifik.app',
    appUrl: 'http://localhost:3006',
    projectId: '6266193db77ccc8111730c90',
    loginProjectFlowId: '658ed28b0990f300134d7b78',
    kycBaseUrl: 'https://access.app',
    // Blockchain Config
    rpcUrl: 'https://wild-bitter-meadow.avalanche-mainnet.quiknode.pro/e2565749ca44c2873fe2a0a747f5ac68ae7eb14f/ext/bc/C/rpc/',
    vkaContractAddress: '0x8fc4b00689812f449723CB473E0A7C060b10eD3f',
    tokenTicker: 'VKA',
    // Mainnet Contracts
    x402PaymentContract: '0x5e3C7c44e5d76fa5517378582B824046cBDcFfCD',
    reputationRegistryContract: '0x310247955605c357628F51e94b3E5A20225C71a4',
    priorityFeeTipGwei: '5',
    // Network Configuration
    chainId: 43114, // Avalanche Mainnet (43113 = Fuji Testnet)
    isTestnet: false, // Explicitly set to false for mainnet
};
