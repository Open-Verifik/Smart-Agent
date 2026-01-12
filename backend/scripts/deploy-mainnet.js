const { ethers } = require("hardhat");
const fs = require("fs");
const path = require("path");

/**
 * Deploy all Smart Agent contracts to Avalanche Mainnet
 * Run with: npx hardhat run scripts/deploy-mainnet.js --network avalanche-mainnet
 */
async function main() {
	console.log("\n🚀 Starting Mainnet Deployment to Avalanche C-Chain...\n");

	const [deployer] = await ethers.getSigners();
	const balance = await ethers.provider.getBalance(deployer.address);

	console.log("📋 Deployment Details:");
	console.log("   Deployer Address:", deployer.address);
	console.log("   Deployer Balance:", ethers.formatEther(balance), "AVAX");
	console.log("   Network:", (await ethers.provider.getNetwork()).name);
	console.log("   Chain ID:", (await ethers.provider.getNetwork()).chainId);
	console.log("");

	// Confirm before proceeding
	if (balance < ethers.parseEther("5")) {
		console.warn("⚠️  WARNING: Low balance. Recommended minimum: 5 AVAX");
		console.warn("   Current balance:", ethers.formatEther(balance), "AVAX");
		console.log("");
	}

	const addresses = {};

	// 1. Deploy Identity Registry
	console.log("1️⃣  Deploying ERC8004 Identity Registry...");
	const IdentityRegistry = await ethers.getContractFactory("ERC8004IdentityRegistry");
	const identityRegistry = await IdentityRegistry.deploy();
	await identityRegistry.waitForDeployment();
	addresses.identityRegistry = await identityRegistry.getAddress();
	console.log("   ✅ Identity Registry deployed:", addresses.identityRegistry);
	console.log("");

	// 2. Deploy Reputation Registry
	console.log("2️⃣  Deploying ERC8004 Reputation Registry...");
	const ReputationRegistry = await ethers.getContractFactory("ERC8004ReputationRegistry");
	const reputationRegistry = await ReputationRegistry.deploy(addresses.identityRegistry);
	await reputationRegistry.waitForDeployment();
	addresses.reputationRegistry = await reputationRegistry.getAddress();
	console.log("   ✅ Reputation Registry deployed:", addresses.reputationRegistry);
	console.log("");

	// 3. Deploy Validation Registry
	console.log("3️⃣  Deploying ERC8004 Validation Registry...");
	const ValidationRegistry = await ethers.getContractFactory("ERC8004ValidationRegistry");
	const validationRegistry = await ValidationRegistry.deploy(addresses.identityRegistry);
	await validationRegistry.waitForDeployment();
	addresses.validationRegistry = await validationRegistry.getAddress();
	console.log("   ✅ Validation Registry deployed:", addresses.validationRegistry);
	console.log("");

	// 4. Deploy X402 Payment Contract
	console.log("4️⃣  Deploying X402 Payment Contract...");
	const VerifikPayment = await ethers.getContractFactory("VerifikPayment");
	const payment = await VerifikPayment.deploy();
	await payment.waitForDeployment();
	addresses.x402Payment = await payment.getAddress();
	console.log("   ✅ X402 Payment deployed:", addresses.x402Payment);
	console.log("");

	// Save deployment info
	const deploymentInfo = {
		network: "avalanche-mainnet",
		chainId: 43114,
		deployer: deployer.address,
		timestamp: new Date().toISOString(),
		contracts: addresses,
		blockExplorer: "https://snowtrace.io",
	};

	const outputPath = path.join(__dirname, "../deployments/mainnet.json");
	fs.mkdirSync(path.dirname(outputPath), { recursive: true });
	fs.writeFileSync(outputPath, JSON.stringify(deploymentInfo, null, 2));

	console.log("📄 Deployment info saved to:", outputPath);
	console.log("");

	// Print summary
	console.log("═══════════════════════════════════════════════════════════");
	console.log("✅ DEPLOYMENT SUCCESSFUL!");
	console.log("═══════════════════════════════════════════════════════════");
	console.log("");
	console.log("📋 Contract Addresses:");
	console.log("   Identity Registry:   ", addresses.identityRegistry);
	console.log("   Reputation Registry: ", addresses.reputationRegistry);
	console.log("   Validation Registry: ", addresses.validationRegistry);
	console.log("   X402 Payment:        ", addresses.x402Payment);
	console.log("");
	console.log("🔍 Verify on Snowtrace:");
	console.log(`   https://snowtrace.io/address/${addresses.identityRegistry}`);
	console.log(`   https://snowtrace.io/address/${addresses.reputationRegistry}`);
	console.log(`   https://snowtrace.io/address/${addresses.validationRegistry}`);
	console.log(`   https://snowtrace.io/address/${addresses.x402Payment}`);
	console.log("");
	console.log("📝 Update your .env.mainnet file:");
	console.log(`   ERC8004_IDENTITY_REGISTRY=${addresses.identityRegistry}`);
	console.log(`   ERC8004_REPUTATION_REGISTRY=${addresses.reputationRegistry}`);
	console.log(`   ERC8004_VALIDATION_REGISTRY=${addresses.validationRegistry}`);
	console.log(`   X402_CONTRACT_ADDRESS=${addresses.x402Payment}`);
	console.log("");
	console.log("🔐 Next Steps:");
	console.log("   1. Verify contracts on Snowtrace");
	console.log("   2. Register your agent identity");
	console.log("   3. Update backend .env with new addresses");
	console.log("   4. Update frontend environment.prod.ts");
	console.log("   5. Test all flows on mainnet");
	console.log("");
	console.log("═══════════════════════════════════════════════════════════");
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error("\n❌ Deployment failed:");
		console.error(error);
		process.exit(1);
	});
