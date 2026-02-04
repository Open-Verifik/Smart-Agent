# 🚀 Quick Start Guide - Secure Contracts

## Overview

All security vulnerabilities have been fixed! Here's how to use the new secure contracts.

---

## 📦 Installation

```bash
# Install OpenZeppelin contracts (required)
npm install @openzeppelin/contracts@4.9.0

# Compile contracts
npx hardhat compile
```

---

## 🔑 Key Differences from Original

### 1. **Role-Based Access Control**

**Before:**

```javascript
// Only owner could do everything
await contract.registerAgent(...);  // Must be owner
```

**After:**

```javascript
// Multiple roles with specific permissions
await contract.grantRole(REGISTRAR_ROLE, registrarAddress);
await contract.grantRole(ADMIN_ROLE, adminAddress);
await contract.grantRole(VALIDATOR_ROLE, validatorAddress);
```

### 2. **Pagination Required**

**Before:**

```javascript
// Could fail with too many items
const feedbacks = await contract.getAgentFeedbacks(agentTokenId);
```

**After:**

```javascript
// Use pagination
const feedbacks = await contract.getAgentFeedbacks(
	agentTokenId,
	0, // offset
	10 // limit
);

// Get total count
const total = await contract.getAgentFeedbackCount(agentTokenId);
```

### 3. **Validator Authorization**

**Before:**

```javascript
// Anyone could record validations
await contract.recordValidation(...);
```

**After:**

```javascript
// Must authorize validators first
await contract.authorizeValidator(agentTokenId, validatorAddress);

// Then validator can record
await contract.recordValidation(...);
```

---

## 🎯 Common Operations

### Deploy Contracts

```javascript
const { ethers } = require("hardhat");

async function main() {
	// 1. Deploy Identity Registry
	const IdentityRegistry = await ethers.getContractFactory("ERC8004IdentityRegistry");
	const identityRegistry = await IdentityRegistry.deploy();
	await identityRegistry.waitForDeployment();

	// 2. Deploy Reputation Registry
	const ReputationRegistry = await ethers.getContractFactory("ERC8004ReputationRegistry");
	const reputationRegistry = await ReputationRegistry.deploy(await identityRegistry.getAddress());
	await reputationRegistry.waitForDeployment();

	// 3. Deploy Validation Registry
	const ValidationRegistry = await ethers.getContractFactory("ERC8004ValidationRegistry");
	const validationRegistry = await ValidationRegistry.deploy(await identityRegistry.getAddress());
	await validationRegistry.waitForDeployment();

	// 4. Deploy Payment Contract
	const VerifikPayment = await ethers.getContractFactory("VerifikPayment");
	const payment = await VerifikPayment.deploy();
	await payment.waitForDeployment();

	console.log("Identity Registry:", await identityRegistry.getAddress());
	console.log("Reputation Registry:", await reputationRegistry.getAddress());
	console.log("Validation Registry:", await validationRegistry.getAddress());
	console.log("Payment Contract:", await payment.getAddress());
}
```

### Setup Roles

```javascript
const ADMIN_ROLE = ethers.keccak256(ethers.toUtf8Bytes("ADMIN_ROLE"));
const REGISTRAR_ROLE = ethers.keccak256(ethers.toUtf8Bytes("REGISTRAR_ROLE"));
const VALIDATOR_ROLE = ethers.keccak256(ethers.toUtf8Bytes("VALIDATOR_ROLE"));
const VERIFIER_ROLE = ethers.keccak256(ethers.toUtf8Bytes("VERIFIER_ROLE"));

// Grant roles
await identityRegistry.grantRole(ADMIN_ROLE, adminAddress);
await identityRegistry.grantRole(REGISTRAR_ROLE, registrarAddress);
await validationRegistry.grantRole(VALIDATOR_ROLE, validatorAddress);
await reputationRegistry.grantRole(VERIFIER_ROLE, verifierAddress);
```

### Register Agent

```javascript
const tx = await identityRegistry.registerAgent(agentAddress, "Verifik AI Agent", "AI-powered identity validation agent", "ipfs://QmAgentCard...", [
	"identity-validation",
	"document-ocr",
	"biometric-verification",
]);

const receipt = await tx.wait();
console.log("Agent registered with token ID:", receipt.events[0].args.tokenId);
```

### Authorize Validator

```javascript
// Agent owner or admin must authorize validators
await validationRegistry.authorizeValidator(agentTokenId, validatorAddress);
```

### Record Validation

```javascript
// Must be authorized validator
const taskId = `task_${Date.now()}`;
const outputHash = ethers.keccak256(ethers.toUtf8Bytes(JSON.stringify(result)));
const proofHash = ethers.keccak256(ethers.toUtf8Bytes(paymentTx));

await validationRegistry.recordValidation(
	agentTokenId,
	taskId,
	outputHash,
	proofHash,
	ethers.ZeroAddress, // self-validation
	0, // ValidationType.NONE
	true, // isValid
	"" // metadataURI
);
```

### Submit Feedback

```javascript
const tx = await reputationRegistry.submitFeedback(
	agentTokenId,
	5, // rating (1-5)
	["fast", "accurate", "helpful"], // tags (max 10)
	"Great service!", // comment (max 500 chars)
	paymentProofHash
);
```

### Get Paginated Feedbacks

```javascript
// Get first 10 feedbacks
const feedbacks = await reputationRegistry.getAgentFeedbacks(
	agentTokenId,
	0, // offset
	10 // limit
);

// Get next 10
const moreFeedbacks = await reputationRegistry.getAgentFeedbacks(
	agentTokenId,
	10, // offset
	10 // limit
);

// Get total count
const total = await reputationRegistry.getAgentFeedbackCount(agentTokenId);
console.log(`Showing ${feedbacks.length} of ${total} feedbacks`);
```

### Emergency Pause

```javascript
// Admin can pause in emergency
await identityRegistry.pause();

// Unpause when safe
await identityRegistry.unpause();
```

---

## 🔒 Security Best Practices

### 1. **Use Multi-Sig for Admin Role**

```javascript
// Use Gnosis Safe or similar
const GNOSIS_SAFE = "0x...";
await contract.grantRole(ADMIN_ROLE, GNOSIS_SAFE);
```

### 2. **Separate Hot/Cold Wallets**

```javascript
// Hot wallet for operations (small amounts)
const HOT_WALLET = "0x...";
await contract.grantRole(VALIDATOR_ROLE, HOT_WALLET);

// Cold wallet for admin (secure storage)
const COLD_WALLET = "0x...";
await contract.grantRole(ADMIN_ROLE, COLD_WALLET);
```

### 3. **Monitor Events**

```javascript
// Listen for critical events
contract.on("AgentDeactivated", (tokenId, address) => {
	console.warn(`ALERT: Agent ${tokenId} deactivated!`);
	// Send notification
});

contract.on("Paused", () => {
	console.error("EMERGENCY: Contract paused!");
	// Alert team
});
```

### 4. **Regular Withdrawals**

```javascript
// Don't let funds accumulate
const balance = await payment.getBalance();
if (balance > ethers.parseEther("10")) {
	await payment.withdraw();
}
```

---

## 📊 Gas Optimization Tips

### 1. **Batch Operations**

```javascript
// Instead of multiple calls
for (const validator of validators) {
	await contract.authorizeValidator(agentTokenId, validator);
}

// Create batch function (future improvement)
await contract.batchAuthorizeValidators(agentTokenId, validators);
```

### 2. **Use Pagination Wisely**

```javascript
// Good: Small batches
const feedbacks = await contract.getAgentFeedbacks(tokenId, 0, 20);

// Bad: Too large (could fail)
const feedbacks = await contract.getAgentFeedbacks(tokenId, 0, 1000);
```

---

## 🧪 Testing

### Unit Tests

```javascript
const { expect } = require("chai");

describe("ERC8004IdentityRegistry", function () {
    it("Should prevent unauthorized registration", async function () {
        const [owner, unauthorized] = await ethers.getSigners();

        await expect(
            contract.connect(unauthorized).registerAgent(...)
        ).to.be.revertedWith("AccessControl");
    });

    it("Should reject invalid inputs", async function () {
        await expect(
            contract.registerAgent(
                ethers.ZeroAddress,  // Invalid address
                "Name",
                "Description",
                "URI",
                ["capability"]
            )
        ).to.be.revertedWith("Invalid agent address");
    });
});
```

---

## 🚨 Error Messages Reference

| Error                                        | Meaning                           | Solution                          |
| -------------------------------------------- | --------------------------------- | --------------------------------- |
| `AccessControl: account ... is missing role` | Caller doesn't have required role | Grant appropriate role            |
| `Agent does not exist`                       | Invalid agent token ID            | Verify agent is registered        |
| `Pausable: paused`                           | Contract is paused                | Wait for unpause or contact admin |
| `Invalid agent address`                      | address(0) provided               | Provide valid address             |
| `Name cannot be empty`                       | Empty string provided             | Provide non-empty name            |
| `Too many tags`                              | More than 10 tags                 | Reduce to 10 or fewer             |
| `Comment too long`                           | More than 500 characters          | Shorten comment                   |
| `Not authorized to record validation`        | Not authorized validator          | Get authorization first           |

---

## 📞 Support

### Documentation

-   OpenZeppelin Docs: https://docs.openzeppelin.com
-   Hardhat Docs: https://hardhat.org/docs

### Audit Reports

-   See: `SECURITY_AUDIT_REPORT.md`
-   See: `SECURITY_FIXES_REPORT.md`

### Migration Guide

-   See: `MAINNET_MIGRATION_PLAN.md`

---

## ✅ Checklist Before Mainnet

-   [ ] All roles assigned
-   [ ] Multi-sig setup for admin
-   [ ] Validators authorized
-   [ ] All tests passing
-   [ ] Professional audit complete
-   [ ] Monitoring setup
-   [ ] Emergency contacts ready
-   [ ] Withdrawal schedule planned
-   [ ] Documentation complete
-   [ ] Team trained

---

**Ready to deploy? Follow the mainnet migration plan!**
