/**
 * Deploy VerifikPayment to any EVM chain in the registry.
 *
 * Reads the chain entry from [config/chains.js](../src/config/chains.js)
 * (RPC, name, explorer) and uses the deployer key from `X402_WALLET_PRIVATE_KEY`.
 * Writes the resulting address to `backend/deployments/<chainKey>.json` and
 * prints the env var the runtime expects (`X402_BASE_CONTRACT`,
 * `X402_XLAYER_CONTRACT`, etc.).
 *
 * Usage:
 *   node scripts/deploy-payment-multichain.js --chain base
 *   node scripts/deploy-payment-multichain.js --chain 8453
 *   node scripts/deploy-payment-multichain.js --chain xlayer --rpc https://my-rpc
 *   node scripts/deploy-payment-multichain.js --chain avalanche --dry-run
 *
 * Why a separate script:
 *   - `deploy-mainnet.js` assumes hardhat + Avalanche mainnet.
 *   - `deploy-mainnet-direct.js` is hard-coded to AVAX RPC + recovered
 *     ERC8004 addresses.
 *   - This script is purely the per-chain payment contract. Run it once
 *     per chain you want to enable for native x402.
 *
 * The deployed contract has the same ABI on every chain, so the frontend
 * `payForService(serviceId, requestId)` call works unchanged on Base, X
 * Layer, etc. once the address is configured.
 */

const fs = require("fs");
const path = require("path");
const { ethers } = require("ethers");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const { CHAINS, getChain } = require("../src/config/chains");

const CONTRACT_FILE = "VerifikPayment.sol";
const CONTRACT_NAME = "VerifikPayment";
const CONTRACT_PATH = path.resolve(__dirname, "../contracts", CONTRACT_FILE);

/**
 * Map chain key -> env var the runtime reads. Matches the overrides defined
 * in `chains.js` so a deploy directly informs the operator what to set.
 */
const ENV_VAR_BY_CHAIN_KEY = {
    avalanche: "X402_AVAX_CONTRACT",
    "avalanche-fuji": "X402_AVAX_FUJI_CONTRACT",
    base: "X402_BASE_CONTRACT",
    xlayer: "X402_XLAYER_CONTRACT",
};

/**
 * @param {string[]} argv
 * @returns {Record<string, string|boolean>}
 */
const parseArgs = (argv) => {
    const out = {};
    for (let i = 0; i < argv.length; i++) {
        const a = argv[i];
        if (!a.startsWith("--")) continue;
        const key = a.slice(2);
        const next = argv[i + 1];
        if (!next || next.startsWith("--")) {
            out[key] = true;
        } else {
            out[key] = next;
            i++;
        }
    }
    return out;
};

/**
 * @param {string|number|undefined} input chain id (decimal) or key
 * @returns {import('../src/config/chains').ChainConfig}
 */
const resolveChain = (input) => {
    if (!input) {
        throw new Error("Missing --chain. Pass a chain id (e.g. 8453) or key (e.g. base).");
    }
    const asNumber = Number(input);
    if (Number.isFinite(asNumber)) {
        const c = getChain(asNumber);
        if (c) return c;
    }
    const lowered = String(input).toLowerCase();
    const match = Object.values(CHAINS).find((c) => c.key === lowered);
    if (!match) {
        const known = Object.values(CHAINS)
            .map((c) => `${c.key} (${c.chainId})`)
            .join(", ");
        throw new Error(`Unknown chain '${input}'. Known: ${known}`);
    }
    return match;
};

/**
 * @returns {{ abi: any[], bytecode: string }}
 */
const compileContract = () => {
    let solc;
    try {
        solc = require("solc");
    } catch (err) {
        throw new Error("solc not installed. Run: npm install --save-dev solc");
    }
    const source = fs.readFileSync(CONTRACT_PATH, "utf8");
    const input = {
        language: "Solidity",
        sources: { [CONTRACT_FILE]: { content: source } },
        settings: {
            optimizer: { enabled: true, runs: 200 },
            outputSelection: { "*": { "*": ["abi", "evm.bytecode"] } },
        },
    };
    const output = JSON.parse(solc.compile(JSON.stringify(input)));
    const errors = (output.errors || []).filter((e) => e.severity === "error");
    if (errors.length) {
        const message = errors.map((e) => e.formattedMessage || e.message).join("\n");
        throw new Error(`Compilation errors:\n${message}`);
    }
    const compiled = output.contracts[CONTRACT_FILE][CONTRACT_NAME];
    if (!compiled) throw new Error(`Compilation produced no artifact for ${CONTRACT_NAME}`);
    return { abi: compiled.abi, bytecode: compiled.evm.bytecode.object };
};

/**
 * @param {string} privateKey
 * @param {ethers.JsonRpcProvider} provider
 */
const buildWallet = (privateKey, provider) => {
    const trimmed = privateKey.trim();
    if (trimmed.includes(" ")) {
        return ethers.HDNodeWallet.fromPhrase(trimmed).connect(provider);
    }
    return new ethers.Wallet(trimmed, provider);
};

const main = async () => {
    const args = parseArgs(process.argv.slice(2));
    const chain = resolveChain(args.chain);
    const rpcUrl = (typeof args.rpc === "string" && args.rpc) || chain.rpcUrl;
    const dryRun = Boolean(args["dry-run"]);

    const privateKey = process.env.X402_WALLET_PRIVATE_KEY;
    if (!privateKey) {
        throw new Error("X402_WALLET_PRIVATE_KEY missing in backend/.env");
    }

    const envVar = ENV_VAR_BY_CHAIN_KEY[chain.key] || `X402_${chain.key.toUpperCase()}_CONTRACT`;

    console.log("──────────────────────────────────────────────");
    console.log(`Deploying ${CONTRACT_NAME} to ${chain.name} (chainId ${chain.chainId})`);
    console.log(`RPC:        ${rpcUrl}`);
    console.log(`Explorer:   ${chain.blockExplorerUrl}`);
    console.log(`Native:     ${chain.nativeSymbol}`);
    console.log(`Env var:    ${envVar}`);
    if (dryRun) console.log("Mode:       DRY-RUN (no broadcast)");
    console.log("──────────────────────────────────────────────");

    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const wallet = buildWallet(privateKey, provider);
    const balance = await provider.getBalance(wallet.address);
    const balanceFormatted = ethers.formatEther(balance);
    console.log(`Deployer:   ${wallet.address}`);
    console.log(`Balance:    ${balanceFormatted} ${chain.nativeSymbol}`);

    const network = await provider.getNetwork();
    if (Number(network.chainId) !== chain.chainId) {
        throw new Error(
            `RPC reports chainId ${network.chainId} but registry expects ${chain.chainId}. ` +
                `Pass --rpc with the correct endpoint.`,
        );
    }

    if (parseFloat(balanceFormatted) <= 0) {
        throw new Error(`Deployer has 0 ${chain.nativeSymbol}; cannot pay gas.`);
    }
    if (parseFloat(balanceFormatted) < 0.01) {
        console.warn(`Warning: low balance (${balanceFormatted} ${chain.nativeSymbol}).`);
    }

    console.log("\nCompiling contract...");
    const { abi, bytecode } = compileContract();
    console.log(`  bytecode size: ${bytecode.length / 2} bytes`);

    if (dryRun) {
        console.log("\nDry-run complete. No transaction broadcast.");
        return;
    }

    console.log("\nDeploying...");
    const factory = new ethers.ContractFactory(abi, bytecode, wallet);
    const contract = await factory.deploy();
    const deployTx = contract.deploymentTransaction();
    console.log(`  tx hash: ${deployTx?.hash}`);
    console.log("  waiting for confirmation...");

    await contract.waitForDeployment();
    const address = await contract.getAddress();

    console.log("\n──────────────────────────────────────────────");
    console.log(`Deployed: ${address}`);
    console.log(`Explorer: ${chain.blockExplorerUrl}/address/${address}`);
    console.log("──────────────────────────────────────────────");

    const out = {
        chainId: chain.chainId,
        chainKey: chain.key,
        chainName: chain.name,
        rpcUrl,
        contract: CONTRACT_NAME,
        address,
        deployer: wallet.address,
        deployTxHash: deployTx?.hash,
        deployedAt: new Date().toISOString(),
        envVar,
    };

    const outDir = path.resolve(__dirname, "../deployments");
    fs.mkdirSync(outDir, { recursive: true });
    const outPath = path.join(outDir, `${chain.key}.json`);
    fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
    console.log(`\nSaved ${outPath}`);

    console.log("\nNext steps:");
    console.log(`  1. Add to backend/.env:`);
    console.log(`       ${envVar}=${address}`);
    console.log(`  2. Allow this chain in the runtime:`);
    console.log(`       X402_ACTIVE_CHAIN_IDS=...,${chain.chainId}`);
    console.log(`  3. Restart the Smart Agent backend.`);
};

main().catch((err) => {
    console.error("\nDeployment failed:", err.message || err);
    if (err && err.transaction) console.error("transaction:", err.transaction);
    if (err && err.receipt) console.error("receipt:", err.receipt);
    process.exit(1);
});
