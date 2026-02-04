# 🚀 Avalanche Mainnet Migration Plan

## Current State (Testnet - Fuji)

**Network:** Avalanche C-Chain Testnet (Fuji)
**Chain ID:** 43113
**RPC:** https://api.avax-test.network/ext/bc/C/rpc
**Explorer:** https://testnet.snowtrace.io

**Deployed Contracts:**

-   ERC8004_IDENTITY_REGISTRY: `0x7c6a168455C94092f8d51aBC515B73f4Ed9813a6`
-   ERC8004_REPUTATION_REGISTRY: `0xc8AF65010D6Bf85e4DC89D9D13E9cC185df919B1`
-   ERC8004_VALIDATION_REGISTRY: `0x10485d0aC4382c49E0d0583315C81fe15D92899d`
-   X402_CONTRACT_ADDRESS: `0x72Fdce477bBD9f322907b3b1C4a58bC4d5D64C3a`

---

## Target State (Mainnet)

**Network:** Avalanche C-Chain Mainnet
**Chain ID:** 43114
**RPC:** https://api.avax.network/ext/bc/C/rpc
**Explorer:** https://snowtrace.io

---

## 📋 Pre-Migration Checklist

### 1. **Audit & Security** ⚠️ CRITICAL

-   [ ] **Smart Contract Audit**: Get contracts audited by professional firm (e.g., CertiK, OpenZeppelin)
-   [ ] **Security Review**: Internal code review of all contracts
-   [ ] **Test Coverage**: Ensure 100% test coverage for all contracts
-   [ ] **Bug Bounty**: Consider running a bug bounty program before mainnet launch

### 2. **Testing** ✅

-   [ ] **Integration Tests**: Test all contract interactions end-to-end
-   [ ] **Load Testing**: Simulate high transaction volume
-   [ ] **Frontend Testing**: Test all UI flows with testnet contracts
-   [ ] **Payment Flow Testing**: Verify x402 payment flow works correctly
-   [ ] **Feedback System Testing**: Test reputation submission and retrieval

### 3. **Financial Preparation** 💰

-   [ ] **Mainnet AVAX**: Acquire sufficient AVAX for:
    -   Contract deployment (~0.5-1 AVAX per contract)
    -   Agent wallet operations (~5-10 AVAX for initial operations)
    -   Gas fee buffer (~10 AVAX reserve)
-   [ ] **Multi-sig Wallet**: Set up multi-sig for contract ownership (recommended)
-   [ ] **Treasury Wallet**: Separate wallet for collecting payments

### 4. **Data Migration Planning** 📊

-   [ ] **Export Testnet Data**:
    -   Agent identity data
    -   Reputation/feedback data
    -   Validation records
-   [ ] **Migration Scripts**: Prepare scripts to re-create data on mainnet
-   [ ] **Backup Strategy**: Document all testnet data for reference

---

## 🔄 Migration Strategy

### Option A: **Fresh Start** (Recommended for MVP)

**Best for:** Early stage, minimal testnet data

**Pros:**

-   ✅ Clean slate, no legacy issues
-   ✅ Simpler deployment process
-   ✅ Lower risk of data inconsistencies

**Cons:**

-   ❌ Lose testnet reputation/history
-   ❌ Need to re-register agent

**Steps:**

1. Deploy fresh contracts to mainnet
2. Register agent with new identity
3. Update frontend/backend configs
4. Announce mainnet launch

---

### Option B: **Data Migration** (For Established Projects)

**Best for:** Significant testnet usage, valuable reputation data

**Pros:**

-   ✅ Preserve reputation history
-   ✅ Maintain continuity for users
-   ✅ Keep validation records

**Cons:**

-   ❌ Complex migration scripts needed
-   ❌ Higher risk of errors
-   ❌ Requires careful coordination

**Steps:**

1. Deploy contracts to mainnet
2. Export all testnet data
3. Re-create data on mainnet via scripts
4. Verify data integrity
5. Switch over

---

## 📝 Step-by-Step Migration Process

### Phase 1: Preparation (1-2 weeks)

#### 1.1 Contract Preparation

```bash
# Review and finalize all contracts
cd /Users/miguel/Smart-Agent/backend/contracts

# Run security checks
npm run lint
npm run test
npm run coverage

# Generate deployment report
npm run compile
```

#### 1.2 Create Mainnet Deployment Scripts

```javascript
// scripts/deploy-mainnet.js
const { ethers } = require("hardhat");

async function main() {
	console.log("🚀 Deploying to Avalanche Mainnet...");

	// Deploy Identity Registry
	const IdentityRegistry = await ethers.getContractFactory("ERC8004IdentityRegistry");
	const identityRegistry = await IdentityRegistry.deploy();
	await identityRegistry.waitForDeployment();
	console.log("✅ Identity Registry:", await identityRegistry.getAddress());

	// Deploy Reputation Registry
	const ReputationRegistry = await ethers.getContractFactory("ERC8004ReputationRegistry");
	const reputationRegistry = await ReputationRegistry.deploy(await identityRegistry.getAddress());
	await reputationRegistry.waitForDeployment();
	console.log("✅ Reputation Registry:", await reputationRegistry.getAddress());

	// Deploy Validation Registry
	const ValidationRegistry = await ethers.getContractFactory("ERC8004ValidationRegistry");
	const validationRegistry = await ValidationRegistry.deploy(await identityRegistry.getAddress());
	await validationRegistry.waitForDeployment();
	console.log("✅ Validation Registry:", await validationRegistry.getAddress());

	// Deploy X402 Payment Contract
	const VerifikPayment = await ethers.getContractFactory("VerifikPayment");
	const payment = await VerifikPayment.deploy();
	await payment.waitForDeployment();
	console.log("✅ X402 Payment:", await payment.getAddress());

	// Save addresses
	const addresses = {
		identityRegistry: await identityRegistry.getAddress(),
		reputationRegistry: await reputationRegistry.getAddress(),
		validationRegistry: await validationRegistry.getAddress(),
		x402Payment: await payment.getAddress(),
	};

	console.log("\n📋 Update your .env with these addresses:");
	console.log(`ERC8004_IDENTITY_REGISTRY=${addresses.identityRegistry}`);
	console.log(`ERC8004_REPUTATION_REGISTRY=${addresses.reputationRegistry}`);
	console.log(`ERC8004_VALIDATION_REGISTRY=${addresses.validationRegistry}`);
	console.log(`X402_CONTRACT_ADDRESS=${addresses.x402Payment}`);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
```

#### 1.3 Create Environment Config

```bash
# Create .env.mainnet
cp backend/.env backend/.env.mainnet

# Edit .env.mainnet with mainnet settings
```

---

### Phase 2: Deployment (1 day)

#### 2.1 Deploy Contracts to Mainnet

```bash
# Set up Hardhat for mainnet
# Edit hardhat.config.js to add mainnet network

# Deploy
npx hardhat run scripts/deploy-mainnet.js --network avalanche-mainnet

# Verify contracts on Snowtrace
npx hardhat verify --network avalanche-mainnet <CONTRACT_ADDRESS>
```

#### 2.2 Register Agent Identity

```bash
# Run agent registration script
node scripts/register-agent.js --network mainnet
```

#### 2.3 Test Mainnet Contracts

```bash
# Test basic functions
node scripts/test-mainnet-contracts.js
```

---

### Phase 3: Backend Migration (1 day)

#### 3.1 Update Configuration

```bash
# Update backend/.env
X402_RPC_URL=https://api.avax.network/ext/bc/C/rpc
X402_CHAIN_ID=43114
X402_NETWORK_NAME=avalanche-mainnet

# Update contract addresses (from deployment)
ERC8004_IDENTITY_REGISTRY=<NEW_MAINNET_ADDRESS>
ERC8004_REPUTATION_REGISTRY=<NEW_MAINNET_ADDRESS>
ERC8004_VALIDATION_REGISTRY=<NEW_MAINNET_ADDRESS>
X402_CONTRACT_ADDRESS=<NEW_MAINNET_ADDRESS>
ERC8004_AGENT_TOKEN_ID=<NEW_TOKEN_ID>

# Update wallet (IMPORTANT: Use new mainnet wallet)
X402_WALLET_PRIVATE_KEY=<NEW_MAINNET_WALLET_PRIVATE_KEY>
```

#### 3.2 Test Backend

```bash
# Start backend with mainnet config
cd backend
npm start

# Test API endpoints
curl http://localhost:3060/api/agent/info
```

---

### Phase 4: Frontend Migration (1 day)

#### 4.1 Update Frontend Config

```typescript
// frontend/src/environments/environment.prod.ts
export const environment = {
	production: true,
	baseUrl: "https://verifik.app",
	smartAgentUrl: "https://agent.verifik.app",

	// Avalanche Mainnet
	avalanche: {
		chainId: 43114,
		chainName: "Avalanche C-Chain",
		rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
		blockExplorer: "https://snowtrace.io",
		nativeCurrency: {
			name: "AVAX",
			symbol: "AVAX",
			decimals: 18,
		},
	},

	// Contract addresses
	contracts: {
		identityRegistry: "<NEW_MAINNET_ADDRESS>",
		reputationRegistry: "<NEW_MAINNET_ADDRESS>",
		validationRegistry: "<NEW_MAINNET_ADDRESS>",
		x402Payment: "<NEW_MAINNET_ADDRESS>",
	},
};
```

#### 4.2 Update Wallet Service

```typescript
// Update AgentWalletService to use mainnet
// Ensure all contract ABIs are correct
// Test wallet connection flow
```

---

### Phase 5: Testing & Validation (2-3 days)

#### 5.1 End-to-End Testing

-   [ ] Test agent info retrieval
-   [ ] Test payment flow (small amounts first!)
-   [ ] Test tool execution with payment
-   [ ] Test feedback submission
-   [ ] Test validation recording
-   [ ] Test conversation persistence

#### 5.2 Monitoring Setup

```bash
# Set up monitoring for:
- Contract events
- Transaction failures
- Gas usage
- Payment collection
- Error rates
```

---

### Phase 6: Launch (1 day)

#### 6.1 Soft Launch

-   Deploy to staging environment first
-   Test with internal team
-   Invite beta users
-   Monitor for 24-48 hours

#### 6.2 Public Launch

-   Update DNS/domains
-   Deploy to production
-   Announce on social media
-   Monitor closely for first week

---

## 🔧 Configuration Changes Summary

### Backend (.env)

```bash
# BEFORE (Testnet)
X402_RPC_URL=https://api.avax-test.network/ext/bc/C/rpc
X402_CHAIN_ID=43113
X402_NETWORK_NAME=avalanche-fuji-testnet

# AFTER (Mainnet)
X402_RPC_URL=https://api.avax.network/ext/bc/C/rpc
X402_CHAIN_ID=43114
X402_NETWORK_NAME=avalanche-mainnet
```

### Frontend (environment.prod.ts)

```typescript
// Update chainId: 43113 → 43114
// Update RPC URL
// Update contract addresses
// Update block explorer URLs
```

---

## 💰 Cost Estimation

### One-Time Costs

-   Contract Deployment: ~2-4 AVAX ($80-160)
-   Agent Registration: ~0.1 AVAX ($4)
-   Testing Transactions: ~1 AVAX ($40)
-   **Total:** ~3-5 AVAX ($120-200)

### Ongoing Costs

-   Agent Operations: ~0.01 AVAX per validation recording
-   Feedback Submissions: ~0.01 AVAX per feedback (user pays)
-   Monthly Buffer: ~10 AVAX ($400)

### Revenue

-   Service Fees: $0.20 per API call
-   Break-even: ~600-1000 API calls

---

## ⚠️ Risk Mitigation

### 1. **Smart Contract Risks**

-   ✅ **Audit before deployment**
-   ✅ **Use multi-sig for ownership**
-   ✅ **Implement emergency pause mechanism**
-   ✅ **Set up monitoring/alerts**

### 2. **Financial Risks**

-   ✅ **Start with small payment amounts**
-   ✅ **Regular withdrawal schedule**
-   ✅ **Separate hot/cold wallets**
-   ✅ **Insurance consideration**

### 3. **Operational Risks**

-   ✅ **Comprehensive testing**
-   ✅ **Rollback plan**
-   ✅ **24/7 monitoring**
-   ✅ **Support team ready**

---

## 🔄 Rollback Plan

If issues arise:

1. **Immediate Actions:**

    - Pause new user registrations
    - Switch frontend to "maintenance mode"
    - Stop processing new payments

2. **Revert to Testnet:**

    - Update .env to testnet configs
    - Restart backend
    - Redeploy frontend with testnet config
    - Communicate with users

3. **Post-Mortem:**
    - Document what went wrong
    - Fix issues
    - Re-test thoroughly
    - Plan new launch date

---

## 📊 Success Metrics

Track these metrics post-launch:

-   ✅ Contract deployment success
-   ✅ Agent registration success
-   ✅ First successful payment
-   ✅ First successful validation
-   ✅ First user feedback
-   ✅ Zero critical bugs in first week
-   ✅ 99.9% uptime
-   ✅ Average response time < 2s

---

## 🎯 Recommended Timeline

| Phase                  | Duration      | Description                 |
| ---------------------- | ------------- | --------------------------- |
| **Preparation**        | 1-2 weeks     | Audits, testing, scripts    |
| **Deployment**         | 1 day         | Deploy contracts to mainnet |
| **Backend Migration**  | 1 day         | Update configs, test        |
| **Frontend Migration** | 1 day         | Update configs, test        |
| **Testing**            | 2-3 days      | E2E testing, validation     |
| **Soft Launch**        | 2-3 days      | Internal testing            |
| **Public Launch**      | 1 day         | Go live!                    |
| **Total**              | **2-3 weeks** |                             |

---

## 📞 Support & Resources

### Avalanche Resources

-   Docs: https://docs.avax.network
-   Discord: https://discord.gg/avalancheavax
-   Forum: https://forum.avax.network

### Monitoring Tools

-   Snowtrace: https://snowtrace.io
-   Dune Analytics: https://dune.com
-   Tenderly: https://tenderly.co

### Security

-   OpenZeppelin: https://openzeppelin.com
-   CertiK: https://certik.com
-   Trail of Bits: https://trailofbits.com

---

## ✅ Final Checklist

Before going live:

-   [ ] All contracts audited
-   [ ] All tests passing
-   [ ] Mainnet AVAX acquired
-   [ ] Backup wallet secured
-   [ ] Monitoring set up
-   [ ] Support team briefed
-   [ ] Documentation updated
-   [ ] Announcement prepared
-   [ ] Rollback plan tested
-   [ ] Team aligned on launch

---

## 🚀 Launch Day Checklist

**T-24 hours:**

-   [ ] Final code review
-   [ ] Deploy to staging
-   [ ] Test all flows

**T-12 hours:**

-   [ ] Team standup
-   [ ] Monitor setup verification
-   [ ] Support channels ready

**T-1 hour:**

-   [ ] Deploy contracts
-   [ ] Verify on Snowtrace
-   [ ] Update configs
-   [ ] Deploy backend
-   [ ] Deploy frontend

**T-0 (Launch):**

-   [ ] Announce on Twitter/Discord
-   [ ] Monitor transactions
-   [ ] Watch for errors
-   [ ] Celebrate! 🎉

**T+24 hours:**

-   [ ] Review metrics
-   [ ] Address any issues
-   [ ] Collect feedback
-   [ ] Plan improvements

---

**Good luck with your mainnet launch! 🚀**
