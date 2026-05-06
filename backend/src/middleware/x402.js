const { ethers } = require("ethers");
const config = require("../config");
const { isUsed, markUsed } = require("../utils/txTracker");
const toolsManifest = require("../config/tools-manifest.json");
const { getNativePrice } = require("../utils/pricing");
const {
    getChain,
    isChainActive,
    resolveChainFromHeaders,
    listAcceptedChains,
} = require("../config/chains");

/**
 * x402 native payment middleware.
 *
 * This middleware only governs payments that hit Smart Agent directly —
 * Sponge Gateway purchases use Sponge's own facilitator and arrive here
 * already-paid via the upstream proxy chain (see [proxy.js](../routes/proxy.js)).
 *
 * Multi-chain rules (see [config/chains.js](../config/chains.js)):
 *   - Clients pick a chain via `x-payment-chain-id` (decimal or hex).
 *   - Default chain is `config.x402.defaultChainId` (Avalanche).
 *   - Each chain has its own RPC, oracle ticker, optional payment contract,
 *     and (optionally) a VKA-equivalent ERC-20.
 *   - Solana is not validated here; it must use Sponge until we ship a
 *     dedicated verifier.
 *
 * Payment challenges use **x402 v2** JSON (`x402Version: 2`, CAIP-2 `eip155:*`
 * networks in `accepts[]`, `amount`, `extensions.bazaar.schema`) so
 * AgentCash / x402scan can index resources. Top-level `price`, `amount`,
 * `receiver_address`, etc. remain for the Smart Agent web wallet.
 */

/** @type {Map<number, ethers.JsonRpcProvider>} */
const providerCache = new Map();

/**
 * @param {{ chainId: number, rpcUrl: string }} chain
 * @returns {ethers.JsonRpcProvider}
 */
const getProviderForChain = (chain) => {
    let provider = providerCache.get(chain.chainId);
    if (!provider) {
        provider = new ethers.JsonRpcProvider(chain.rpcUrl);
        providerCache.set(chain.chainId, provider);
    }
    return provider;
};

let agentAddress = null;
if (config.x402.walletPrivateKey) {
    try {
        const key = config.x402.walletPrivateKey.trim();
        if (key.includes(" ")) {
            agentAddress = ethers.HDNodeWallet.fromPhrase(key).address;
        } else {
            agentAddress = new ethers.Wallet(key).address;
        }
        console.log(`[x402] Agent Payment Address: ${agentAddress}`);
    } catch (e) {
        console.error("[x402] Failed to derive agent address:", e);
    }
}

/**
 * Convert a USD price to the native amount on a given chain.
 * @param {number} priceUsd
 * @param {{ priceTicker: string, priceFallbackUsd: number }} chain
 * @returns {Promise<{ amountWei: bigint, amountStr: string }>}
 */
const computeNativeAmount = async (priceUsd, chain) => {
    const tickerUsd = await getNativePrice(chain.priceTicker);
    const safe = tickerUsd > 0 ? tickerUsd : chain.priceFallbackUsd;
    const precision = 100000; // 5-decimal display, rounded UP to cover dust
    const float = Math.ceil((priceUsd / safe) * precision) / precision;
    const amountStr = float.toFixed(5);
    return { amountWei: ethers.parseEther(amountStr), amountStr };
};

/**
 * Compute the required USDC amount (smallest unit) for a given USD price.
 * USDC is a 1:1 USD stablecoin with 6 decimals.
 *
 * @param {number} priceUsd
 * @param {{ usdcDecimals: number }} chain
 * @returns {{ amountUnits: bigint, amountStr: string }}
 */
const computeUsdcAmount = (priceUsd, chain) => {
    const decimals = chain.usdcDecimals || 6;
    const amountStr = priceUsd.toFixed(decimals);
    const amountUnits = ethers.parseUnits(amountStr, decimals);
    return { amountUnits, amountStr };
};

/**
 * x402 v1 (legacy): `accepts[0].outputSchema.input` / `.output`.
 * x402 v2 + AgentCash / x402scan indexing: `extensions.bazaar.schema` with nested
 * `input.properties.queryParams` or `.body` and `output.properties.example`.
 *
 * @param {{ parameters?: object } | null | undefined} tool Manifest endpoint or null
 * @returns {{ input: object, output: object }}
 */
const buildAcceptOutputSchema = (tool) => {
    const fallbackInput = {
        type: "object",
        properties: {},
        additionalProperties: true,
        description: "Request parameters; see /openapi.json for this path and method.",
    };
    const input =
        tool &&
            tool.parameters &&
            typeof tool.parameters === "object" &&
            tool.parameters.type === "object"
            ? tool.parameters
            : fallbackInput;
    const output = {
        type: "object",
        description: "Verifik API JSON response (typically data and signature).",
        additionalProperties: true,
    };
    return { input, output };
};

/**
 * @param {string} httpMethod
 * @param {{ input: object, output: object }} acceptOutputSchema
 * @returns {object}
 */
const buildBazaarExtensionsSchema = (httpMethod, acceptOutputSchema) => {
    const m = (httpMethod || "GET").toUpperCase();
    const usesQuery = m === "GET" || m === "DELETE" || m === "HEAD";
    const inputBranch = usesQuery
        ? { queryParams: acceptOutputSchema.input }
        : { body: acceptOutputSchema.input };
    return {
        type: "object",
        properties: {
            input: {
                type: "object",
                properties: inputBranch,
            },
            output: {
                type: "object",
                properties: {
                    example: acceptOutputSchema.output,
                },
            },
        },
    };
};

/**
 * @param {object} opts
 * @param {number} opts.requiredPriceUsd
 * @param {() => Array<object>} opts.listChainsFn
 * @param {(id: number) => object | null} opts.getChainFn
 * @param {string | null} opts.agentAddress
 * @returns {Promise<object[]>}
 */
const buildV2Accepts = async (opts) => {
    const { requiredPriceUsd, listChainsFn, getChainFn, agentAddress } = opts;
    /** @type {object[]} */
    const accepts = [];
    for (const c of listChainsFn()) {
        const full = getChainFn(c.chainId);
        if (!full) continue;
        const target = c.paymentContract || agentAddress;
        if (!target) continue;
        const { amountWei } = await computeNativeAmount(requiredPriceUsd, full);
        accepts.push({
            scheme: "exact",
            network: `eip155:${c.chainId}`,
            amount: amountWei.toString(),
            asset: c.nativeSymbol,
            payTo: target,
            maxTimeoutSeconds: 300,
        });
        if (c.usdcAddress) {
            const { amountUnits } = computeUsdcAmount(requiredPriceUsd, {
                usdcDecimals: c.usdcDecimals || 6,
            });
            accepts.push({
                scheme: "exact",
                network: `eip155:${c.chainId}`,
                amount: amountUnits.toString(),
                asset: c.usdcAddress,
                payTo: target,
                maxTimeoutSeconds: 300,
                extra: { name: "USDC", decimals: c.usdcDecimals || 6 },
            });
        }
    }
    return accepts;
};

module.exports = async (ctx, next) => {
    if (ctx.method === "OPTIONS") return next();

    // 1. Determine Required Price
    let requiredPriceUsd = 0.05;

    // Resolve the path to match against manifest tools.
    // Postman /api/proxy passes the real Verifik path via x-target-url;
    // new public /api/* routes need to match by public pathname OR verifikPath;
    // legacy /v2/* and /v3/* continue to match by URL suffix (verifikPath).
    let pathToMatch = ctx.path;
    if (ctx.path === "/api/proxy" && ctx.header["x-target-url"]) {
        try {
            const targetUrl = new URL(ctx.header["x-target-url"]);
            pathToMatch = targetUrl.pathname;
        } catch (e) {
            if (ctx.header["x-target-url"].startsWith("/")) {
                pathToMatch = ctx.header["x-target-url"];
            }
        }
    }

    /**
     * Match a manifest tool against pathToMatch.
     * Priority:
     *  1. Public URL pathname == pathToMatch  (new /api/* routes)
     *  2. verifikPath == pathToMatch          (legacy /v2 /v3 and Postman x-target-url)
     *  3. url.endsWith(pathToMatch)           (legacy suffix fallback for orphan entries)
     */
    const matchTool = (t) => {
        try {
            if (new URL(t.url).pathname === pathToMatch) return true;
        } catch { /* skip malformed url */ }
        if (t.verifikPath && t.verifikPath === pathToMatch) return true;
        return t.url.endsWith(pathToMatch);
    };
    const matchedTool = toolsManifest.endpoints.find(matchTool);
    if (matchedTool && typeof matchedTool.priceUsd === "number") {
        requiredPriceUsd = matchedTool.priceUsd;
    }

    // 2. Resolve which chain the caller wants to pay on
    const chain = resolveChainFromHeaders(ctx.header);
    const provider = getProviderForChain(chain);

    // 3. Convert USD → native using the chain's own oracle/fallback
    const { amountWei: requiredAmount, amountStr: requiredNativeStr } = await computeNativeAmount(
        requiredPriceUsd,
        chain,
    );

    // 4. Read payment proof header
    let paymentTx = ctx.header["x-payment-tx"];
    if (!paymentTx && ctx.header["authorization"] && ctx.header["authorization"].startsWith("L402 ")) {
        paymentTx = ctx.header["authorization"].replace("L402 ", "").trim();
    }

    // 5. Determine payment target — chain-specific contract, falling back to agent EOA
    const paymentTarget = chain.paymentContract || agentAddress;

    // 6. CREDITS MODE BYPASS — User Bearer token (not the service token) means
    //    the request is paying via Verifik credits, not on-chain.
    const authHeader = ctx.header["authorization"];
    const serviceToken = config.verifik?.serviceToken;
    const expectedServiceAuth = `Bearer ${serviceToken}`;
    console.log(`[x402] Checking Request: ${ctx.path} on chain ${chain.chainId} (${chain.key})`);
    if (authHeader && authHeader.startsWith("Bearer ") && authHeader !== expectedServiceAuth) {
        console.log(`[x402] Bypassing payment check for User Token (Credits Mode)`);
        return next();
    }

    if (!paymentTx) {
        ctx.status = 402;
        console.log(
            `[x402] 402 Payment Required for ${ctx.path}. Price: $${requiredPriceUsd} (~${requiredNativeStr} ${chain.nativeSymbol}) on ${chain.name}`,
        );

        ctx.set(
            "WWW-Authenticate",
            `L402 invoice="${paymentTarget}", price="${requiredNativeStr} ${chain.nativeSymbol}", chain="${chain.chainId}"`,
        );

        // Compute USDC amount for clients that prefer paying in stablecoin.
        const usdcDetails = chain.usdcAddress
            ? {
                usdcAddress: chain.usdcAddress,
                usdcDecimals: chain.usdcDecimals,
                priceUsdc: requiredPriceUsd.toFixed(chain.usdcDecimals || 6),
            }
            : null;

        // x402 v2 (CAIP-2 networks + `amount`) — required for AgentCash / x402scan resource indexing.
        // Legacy wallet UI still uses the top-level `price`, `amount`, `receiver_address`, etc.
        const resourceUrl = `${config.publicOrigin}${ctx.path}`;
        const acceptOutputSchema = buildAcceptOutputSchema(matchedTool);
        const v2Accepts = await buildV2Accepts({
            requiredPriceUsd,
            listChainsFn: listAcceptedChains,
            getChainFn: getChain,
            agentAddress,
        });

        ctx.body = {
            x402Version: 2,
            error: "X-PAYMENT-TX header is required",
            resource: {
                url: resourceUrl,
                description:
                    matchedTool?.description ||
                    `Verifik x402-gated proxy for ${ctx.method} ${ctx.path}`,
                mimeType: "application/json",
            },
            accepts: v2Accepts,
            extensions: {
                bazaar: {
                    schema: buildBazaarExtensionsSchema(ctx.method, acceptOutputSchema),
                },
            },
            // ── legacy / frontend convenience fields ──
            price: `${requiredNativeStr} ${chain.nativeSymbol}`,
            priceUsd: requiredPriceUsd,
            wallet: paymentTarget || "Server Configuration Error: No Payment Target",
            details:
                "Send payment on the indicated chain and pass the tx hash in 'x-payment-tx'. Use 'x-payment-chain-id' to switch chains (decimal or hex). Accepted assets: native, VKA (where deployed), USDC.",
            amount: requiredNativeStr,
            receiver_address: paymentTarget,
            chainId: chain.chainId,
            chainHex: chain.hex,
            chainName: chain.name,
            nativeSymbol: chain.nativeSymbol,
            isTestnet: chain.isTestnet,
            acceptedChains: listAcceptedChains(),
            ...(usdcDetails || {}),
        };
        return;
    }

    try {
        if (!paymentTarget) {
            throw new Error("Payment target not configured for chain " + chain.chainId);
        }

        // Replay protection (chain-scoped)
        if (isUsed(paymentTx, chain.chainId)) {
            console.warn(`[x402] Replay attempt with TX ${paymentTx} on chain ${chain.chainId}`);
            ctx.status = 402;
            ctx.body = { error: "Payment transaction already used.", chainId: chain.chainId };
            return;
        }

        const tx = await provider.getTransaction(paymentTx);

        if (!tx) {
            console.warn(`[x402] TX ${paymentTx} not found on chain ${chain.chainId}.`);
            ctx.status = 402;
            ctx.body = {
                error: "Transaction not found on network.",
                chainId: chain.chainId,
                hint: "Verify the tx exists on the chain you sent it to and that 'x-payment-chain-id' matches.",
            };
            return;
        }

        // Defensive: ethers may not populate chainId on every backend, but
        // when it does we double-check it matches the declared header.
        if (tx.chainId && Number(tx.chainId) !== chain.chainId) {
            console.warn(`[x402] TX chainId mismatch: tx=${tx.chainId} expected=${chain.chainId}`);
            ctx.status = 402;
            ctx.body = {
                error: "Transaction was sent on a different chain than declared.",
                expectedChainId: chain.chainId,
                actualChainId: Number(tx.chainId),
            };
            return;
        }

        // Detect native vs ERC-20 transfer
        const isNativeTransfer = tx.value > 0n;
        let paymentAmount = tx.value;
        let paymentToken = chain.nativeSymbol;
        let paymentDecimals = 18; // default for native EVM assets

        // ERC-20 transfer(address,uint256) — method id 0xa9059cbb
        if (!isNativeTransfer && tx.data && tx.data.startsWith("0xa9059cbb")) {
            try {
                const iface = new ethers.Interface(["function transfer(address to, uint256 amount)"]);
                const decoded = iface.parseTransaction({ data: tx.data });
                if (decoded) {
                    if (decoded.args[0].toLowerCase() !== paymentTarget.toLowerCase()) {
                        console.warn(`[x402] ERC20 Recipient mismatch: ${decoded.args[0]} vs ${paymentTarget}`);
                        ctx.status = 402;
                        ctx.body = {
                            error: `Transaction recipient mismatch. Expected ${paymentTarget}, got ${decoded.args[0]}`,
                            chainId: chain.chainId,
                        };
                        return;
                    }

                    paymentAmount = decoded.args[1];

                    // Identify which ERC-20 by comparing tx.to against the
                    // chain's known token contracts. USDC matches first
                    // because it's the cross-chain settlement asset; VKA is
                    // the Avalanche-only fallback.
                    const txToLower = (tx.to || "").toLowerCase();
                    const usdcLower = (chain.usdcAddress || "").toLowerCase();
                    const vkaLower = (chain.vkaTokenAddress || "").toLowerCase();
                    if (usdcLower && txToLower === usdcLower) {
                        paymentToken = "USDC";
                        paymentDecimals = chain.usdcDecimals || 6;
                    } else if (vkaLower && txToLower === vkaLower) {
                        paymentToken = "VKA";
                        paymentDecimals = 18;
                    } else {
                        console.warn(
                            `[x402] Unknown ERC-20 contract on ${chain.key}: ${tx.to}. Treating as VKA (legacy default).`,
                        );
                        paymentToken = "VKA";
                        paymentDecimals = 18;
                    }
                }
            } catch (decodeErr) {
                console.warn("[x402] Failed to decode ERC20 transaction", decodeErr);
            }
        } else if (isNativeTransfer) {
            if (tx.to.toLowerCase() !== paymentTarget.toLowerCase()) {
                console.warn(`[x402] Recipient mismatch: ${tx.to} vs ${paymentTarget}`);
                ctx.status = 402;
                ctx.body = {
                    error: `Transaction recipient mismatch. Expected ${paymentTarget}, got ${tx.to}`,
                    chainId: chain.chainId,
                };
                return;
            }
        }

        // Amount check (per asset)
        let isSufficient = false;
        let requiredStr = "";
        if (paymentToken === "USDC") {
            const { amountUnits: usdcRequired, amountStr: usdcRequiredStr } = computeUsdcAmount(
                requiredPriceUsd,
                chain,
            );
            isSufficient = paymentAmount >= usdcRequired;
            requiredStr = `${usdcRequiredStr} USDC`;
            console.log(
                `[x402] USDC Payment Check on ${chain.key}: Received ${ethers.formatUnits(paymentAmount, paymentDecimals)} USDC, Required ${usdcRequiredStr} USDC`,
            );
        } else if (paymentToken === "VKA") {
            // VKA pricing: 1 VKA = 1 USD across chains where VKA exists.
            const vkaRequired = ethers.parseEther(String(requiredPriceUsd));
            isSufficient = paymentAmount >= vkaRequired;
            requiredStr = `${requiredPriceUsd} VKA`;
            console.log(
                `[x402] VKA Payment Check on ${chain.key}: Received ${ethers.formatEther(paymentAmount)} VKA, Required ${requiredPriceUsd} VKA`,
            );
        } else {
            isSufficient = paymentAmount >= requiredAmount;
            requiredStr = `${requiredNativeStr} ${chain.nativeSymbol}`;
        }

        if (!isSufficient) {
            const receivedStr = ethers.formatUnits(paymentAmount, paymentDecimals);
            console.warn(
                `[x402] Insufficient amount. Received: ${receivedStr} ${paymentToken}, Required: ${requiredStr}`,
            );
            ctx.status = 402;
            ctx.body = {
                error: "Insufficient payment",
                received: `${receivedStr} ${paymentToken}`,
                required: requiredStr,
                chainId: chain.chainId,
            };
            return;
        }

        ctx.state.payment = {
            txHash: paymentTx,
            amount: paymentAmount.toString(),
            currency: paymentToken,
            decimals: paymentDecimals,
            sender: tx.from,
            priceUsd: requiredPriceUsd,
            chainId: chain.chainId,
            chainName: chain.name,
        };

        console.log(
            `[x402] Payment Validated on ${chain.key}: ${ethers.formatUnits(paymentAmount, paymentDecimals)} ${paymentToken} from ${tx.from} for ${ctx.path}`,
        );
        markUsed(paymentTx, chain.chainId);
        await next();
    } catch (err) {
        console.error("[x402] Validation Error:", err);
        ctx.status = 500;
        ctx.body = { error: "Payment Validation Error" };
    }
};
