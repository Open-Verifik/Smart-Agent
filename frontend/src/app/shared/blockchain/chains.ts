/**
 * EVM chain registry used by the wallet service.
 *
 * Mirrors the backend registry at `backend/src/config/chains.js`. Only chains
 * the backend will accept as `x-payment-chain-id` should appear here. Solana
 * is intentionally excluded because it cannot use `window.ethereum`; if/when
 * Solana payments are wired through Sponge, they go through a separate
 * wallet-adapter path (Phantom etc.) outside this service. The Solana USDC
 * SPL mint is exported separately as `SOLANA_USDC_MINT` for that future
 * track.
 *
 * Each chain may carry a `usdcAddress` so clients can pay in USDC (1:1 USD,
 * 6 decimals) — this is the same asset Sponge Gateway uses for `payment_scheme: "exact"`.
 */

import { environment } from 'environments/environment';

export interface ChainInfo {
    /** Decimal chain id. */
    chainId: number;
    /** Hex chain id with `0x` prefix (used by `wallet_switchEthereumChain`). */
    hex: string;
    key: string;
    name: string;
    isTestnet: boolean;
    nativeSymbol: string;
    nativeName: string;
    nativeDecimals: number;
    rpcUrls: string[];
    blockExplorerUrl: string;
    /** Optional `payForService(...)` contract; null when payments fall back to EOA native transfer. */
    paymentContract: string | null;
    /** Optional VKA-equivalent ERC-20 if deployed on this chain. */
    vkaTokenAddress: string | null;
    /** Canonical USDC ERC-20 on this chain (1:1 USD, 6 decimals). */
    usdcAddress: string | null;
    /** Decimals for the USDC contract (Circle USDC is always 6). */
    usdcDecimals: number;
}

const AVALANCHE_RPC =
    environment.rpcUrl || 'https://api.avax.network/ext/bc/C/rpc';

export const CHAINS: Record<number, ChainInfo> = {
    43114: {
        chainId: 43114,
        hex: '0xa86a',
        key: 'avalanche',
        name: 'Avalanche C-Chain',
        isTestnet: false,
        nativeSymbol: 'AVAX',
        nativeName: 'Avalanche',
        nativeDecimals: 18,
        rpcUrls: [AVALANCHE_RPC],
        blockExplorerUrl: 'https://snowtrace.io',
        paymentContract: environment.x402PaymentContract || null,
        vkaTokenAddress: environment.vkaContractAddress || null,
        usdcAddress: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
        usdcDecimals: 6,
    },
    43113: {
        chainId: 43113,
        hex: '0xa869',
        key: 'avalanche-fuji',
        name: 'Avalanche Fuji Testnet',
        isTestnet: true,
        nativeSymbol: 'AVAX',
        nativeName: 'Avalanche',
        nativeDecimals: 18,
        rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
        blockExplorerUrl: 'https://testnet.snowtrace.io',
        paymentContract: null,
        vkaTokenAddress: null,
        usdcAddress: '0x5425890298aed601595a70AB815c96711a31Bc65',
        usdcDecimals: 6,
    },
    8453: {
        chainId: 8453,
        hex: '0x2105',
        key: 'base',
        name: 'Base',
        isTestnet: false,
        nativeSymbol: 'ETH',
        nativeName: 'Ether',
        nativeDecimals: 18,
        rpcUrls: ['https://mainnet.base.org'],
        blockExplorerUrl: 'https://basescan.org',
        paymentContract: null,
        vkaTokenAddress: null,
        usdcAddress: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        usdcDecimals: 6,
    },
    196: {
        chainId: 196,
        hex: '0xc4',
        key: 'xlayer',
        name: 'X Layer',
        isTestnet: false,
        nativeSymbol: 'OKB',
        nativeName: 'OKB',
        nativeDecimals: 18,
        rpcUrls: ['https://rpc.xlayer.tech'],
        blockExplorerUrl: 'https://www.oklink.com/xlayer',
        paymentContract: null,
        vkaTokenAddress: null,
        usdcAddress: '0x74b7F16337b8972027F6196A17a631aC6dE26d22',
        usdcDecimals: 6,
    },
};

/**
 * Canonical Solana USDC SPL token mint. Documented for the deferred Solana
 * payment track; not used by this EVM-only wallet service.
 */
export const SOLANA_USDC_MINT = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v';
export const SOLANA_USDC_DECIMALS = 6;

/** Default chain — Avalanche unless `environment.chainId` overrides. */
export const DEFAULT_CHAIN_ID: number =
    typeof environment.chainId === 'number' && CHAINS[environment.chainId]
        ? environment.chainId
        : 43114;

export const getChain = (chainId: number): ChainInfo | null => {
    return CHAINS[chainId] || null;
};

export const getChainByHex = (hex: string): ChainInfo | null => {
    const lower = hex?.toLowerCase();
    return Object.values(CHAINS).find((c) => c.hex.toLowerCase() === lower) || null;
};

/** Build an explorer URL for a tx hash; returns the bare explorer when txHash is empty. */
export const explorerTxUrl = (chainId: number, txHash?: string): string => {
    const c = getChain(chainId);
    if (!c) return '';
    return txHash ? `${c.blockExplorerUrl}/tx/${txHash}` : c.blockExplorerUrl;
};
