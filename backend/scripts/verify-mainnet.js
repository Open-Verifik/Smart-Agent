const { ethers } = require("hardhat");
const fs = require("fs");
const path = require("path");

/**
 * Verify deployed contracts on Snowtrace
 * Run with: npx hardhat run scripts/verify-mainnet.js --network avalanche-mainnet
 */
async function main() {
	console.log("\n🔍 Verifying contracts on Snowtrace...\n");

	// Load deployment info
	const deploymentPath = path.join(__dirname, "../deployments/mainnet.json");
	if (!fs.existsSync(deploymentPath)) {
		console.error("❌ Deployment file not found. Please deploy contracts first.");
		process.exit(1);
	}

	const deployment = JSON.parse(fs.readFileSync(deploymentPath, "utf8"));
	const { contracts } = deployment;

	console.log("📋 Contracts to verify:");
	console.log("   Identity Registry:   ", contracts.identityRegistry);
	console.log("   Reputation Registry: ", contracts.reputationRegistry);
	console.log("   Validation Registry: ", contracts.validationRegistry);
	console.log("   X402 Payment:        ", contracts.x402Payment);
	console.log("");

	// Verify Identity Registry
	console.log("1️⃣  Verifying Identity Registry...");
	try {
		await hre.run("verify:verify", {
			address: contracts.identityRegistry,
			constructorArguments: [],
		});
		console.log("   ✅ Verified!");
	} catch (error) {
		if (error.message.includes("Already Verified")) {
			console.log("   ℹ️  Already verified");
		} else {
			console.error("   ❌ Error:", error.message);
		}
	}
	console.log("");

	// Verify Reputation Registry
	console.log("2️⃣  Verifying Reputation Registry...");
	try {
		await hre.run("verify:verify", {
			address: contracts.reputationRegistry,
			constructorArguments: [contracts.identityRegistry],
		});
		console.log("   ✅ Verified!");
	} catch (error) {
		if (error.message.includes("Already Verified")) {
			console.log("   ℹ️  Already verified");
		} else {
			console.error("   ❌ Error:", error.message);
		}
	}
	console.log("");

	// Verify Validation Registry
	console.log("3️⃣  Verifying Validation Registry...");
	try {
		await hre.run("verify:verify", {
			address: contracts.validationRegistry,
			constructorArguments: [contracts.identityRegistry],
		});
		console.log("   ✅ Verified!");
	} catch (error) {
		if (error.message.includes("Already Verified")) {
			console.log("   ℹ️  Already verified");
		} else {
			console.error("   ❌ Error:", error.message);
		}
	}
	console.log("");

	// Verify X402 Payment
	console.log("4️⃣  Verifying X402 Payment Contract...");
	try {
		await hre.run("verify:verify", {
			address: contracts.x402Payment,
			constructorArguments: [],
		});
		console.log("   ✅ Verified!");
	} catch (error) {
		if (error.message.includes("Already Verified")) {
			console.log("   ℹ️  Already verified");
		} else {
			console.error("   ❌ Error:", error.message);
		}
	}
	console.log("");

	console.log("═══════════════════════════════════════════════════════════");
	console.log("✅ VERIFICATION COMPLETE!");
	console.log("═══════════════════════════════════════════════════════════");
	console.log("");
	console.log("🔍 View on Snowtrace:");
	console.log(`   https://snowtrace.io/address/${contracts.identityRegistry}#code`);
	console.log(`   https://snowtrace.io/address/${contracts.reputationRegistry}#code`);
	console.log(`   https://snowtrace.io/address/${contracts.validationRegistry}#code`);
	console.log(`   https://snowtrace.io/address/${contracts.x402Payment}#code`);
	console.log("");
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error("\n❌ Verification failed:");
		console.error(error);
		process.exit(1);
	});
