const isLocalVerifikApp = () =>
    typeof window !== 'undefined' && window.location.hostname === 'verifik.app';

const localDefaults = {
    production: false,
    thisUrl: 'http://localhost:4201',
    baseUrl: 'http://localhost:3006',
    smartAgentUrl: 'http://localhost:3060',
    apiUrl: 'https://verifik.app',
    documentationBaseUrl: 'https://docs.verifik.co',
    appUrl: 'http://localhost:3006',
    projectId: '6332941ccde4f719d9c00f9e',
    loginProjectFlowId: '6332941ccde4f719d9c00f9f',
    kycBaseUrl: 'https://access.app',
    rpcUrl: 'https://wild-bitter-meadow.avalanche-mainnet.quiknode.pro/e2565749ca44c2873fe2a0a747f5ac68ae7eb14f/ext/bc/C/rpc/',
    vkaContractAddress: '0x8fc4b00689812f449723CB473E0A7C060b10eD3f',
    tokenTicker: 'VKA',
    x402PaymentContract: '0x5e3C7c44e5d76fa5517378582B824046cBDcFfCD',
    reputationRegistryContract: '0x310247955605c357628F51e94b3E5A20225C71a4',
    priorityFeeTipGwei: '5',
    chainId: 43114,
    isTestnet: false,
};

const verifikAppOverrides = {
    get thisUrl(): string {
        return 'https://verifik.app';
    },
    get baseUrl(): string {
        return 'https://verifik.app';
    },
    get apiUrl(): string {
        return 'https://verifik.app';
    },
    get appUrl(): string {
        return 'https://verifik.app';
    },
    smartAgentUrl: 'http://localhost:3060',
    kycBaseUrl: 'https://access.app',
};

export const environment = new Proxy(localDefaults, {
    get(target, prop, receiver) {
        if (isLocalVerifikApp() && prop in verifikAppOverrides) {
            return Reflect.get(verifikAppOverrides, prop, receiver);
        }

        return Reflect.get(target, prop, receiver);
    },
});
