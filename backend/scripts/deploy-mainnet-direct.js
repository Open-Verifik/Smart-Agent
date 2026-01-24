const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");
const solc = require("solc");
const dotenv = require("dotenv");

// Load backend .env manually to ensure we have the keys
const envPath = path.resolve(__dirname, "../.env");
dotenv.config({ path: envPath });

async function compileContract(fileName, contractPath) {
    console.log(`   Compiling ${fileName}...`);
    const contractSource = fs.readFileSync(contractPath, "utf8");
    const input = {
        language: "Solidity",
        sources: { [fileName]: { content: contractSource } },
        settings: {
            outputSelection: { "*": { "*": ["abi", "evm.bytecode"] } },
            optimizer: { enabled: true, runs: 200 },
        },
    };
    const output = JSON.parse(solc.compile(JSON.stringify(input)));
    if (output.errors) {
        const errors = output.errors.filter((e) => e.severity === "error");
        if (errors.length > 0) throw new Error(`Compilation errors: ${JSON.stringify(errors, null, 2)}`);
    }

    // Assume contract name matches file name without extension, or just take the first one
    const contractName = fileName.replace(".sol", "");
    const contract = output.contracts[fileName][contractName];

    if (!contract) {
        throw new Error(`Contract ${contractName} not found in output of ${fileName}`);
    }

    return { abi: contract.abi, bytecode: contract.evm.bytecode.object };
}

async function main() {
    console.log("🚀 Resuming Direct Mainnet Deployment to Avalanche C-Chain...\n");

    // Use Dedicated RPC if available, otherwise generic
    const rpcUrl = process.env.AVALANCHE_RPC_URL;

    const privateKey = process.env.X402_WALLET_PRIVATE_KEY;

    if (!privateKey) throw new Error("X402_WALLET_PRIVATE_KEY missing in .env");

    const provider = new ethers.JsonRpcProvider(rpcUrl);
    const wallet = new ethers.Wallet(privateKey, provider);

    console.log(`📡 Connected to: ${rpcUrl}`);
    console.log(`🔑 Deployer: ${wallet.address}`);

    const balance = await provider.getBalance(wallet.address);
    console.log(`💰 Balance: ${ethers.formatEther(balance)} AVAX`);

    const addresses = {};

    // 🛑 RECOVERED ADDRESSES FROM PREVIOUS RUN (To save gas)
    console.log("\n🔄 Using previously deployed registry contracts:");
    addresses.identityRegistry = "0xbcab451d6FEdc98f486E12e479287E3B67cbF9A1";
    addresses.reputationRegistry = "0x310247955605c357628F51e94b3E5A20225C71a4";
    addresses.validationRegistry = "0xAfCb9b9bEAe7395Af6920bbA597d9602995660c5";

    console.log(`   ✅ Identity Registry:   ${addresses.identityRegistry}`);
    console.log(`   ✅ Reputation Registry: ${addresses.reputationRegistry}`);
    console.log(`   ✅ Validation Registry: ${addresses.validationRegistry}`);

    // 4. Compile and Deploy Payment
    console.log("\n4️⃣  Compiling and Deploying VerifikPayment...");
    try {
        const paymentSourcePath = path.resolve(__dirname, "../contracts/VerifikPayment.sol");
        // Pass "VerifikPayment.sol" as filename, helper derives "VerifikPayment"
        const paymentArtifact = await compileContract("VerifikPayment.sol", paymentSourcePath);

        const PaymentFactory = new ethers.ContractFactory(paymentArtifact.abi, paymentArtifact.bytecode, wallet);
        const payment = await PaymentFactory.deploy();
        await payment.waitForDeployment();
        addresses.x402Payment = await payment.getAddress();
        console.log("   ✅ VerifikPayment:", addresses.x402Payment);
    } catch (err) {
        console.error("Failed to deploy VerifikPayment:", err);
        process.exit(1);
    }

    // Summary
    console.log("\n═══════════════════════════════════════════════════════════");
    console.log("✅ DEPLOYMENT COMPLETE");
    console.log("═══════════════════════════════════════════════════════════");
    console.log(`Identity Registry:   ${addresses.identityRegistry}`);
    console.log(`Reputation Registry: ${addresses.reputationRegistry}`);
    console.log(`Validation Registry: ${addresses.validationRegistry}`);
    console.log(`Payment Contract:    ${addresses.x402Payment}`);

    // Save deployment
    const outPath = path.resolve(__dirname, "../deployments/mainnet-direct.json");
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, JSON.stringify(addresses, null, 2));
    console.log(`\nSaved to ${outPath}`);

    console.log("\n⚠️  IMPORTANT: Please update your .env file with these new addresses!");
}

main().catch(console.error);
