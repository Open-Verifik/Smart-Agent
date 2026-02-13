# 🚀 Verifik AI Agent - ERC8004 Implementation

**AI Agent with On-Chain Identity, Reputation, and Validation**

This backend implements the **ERC8004 standard** for AI agent identity, reputation, and validation on-chain, powered by the x402 payment protocol on Avalanche.

## 📋 What is ERC8004?

ERC8004 is a proposed Ethereum standard that provides a trustless infrastructure for AI agents with three core components:

1. **Identity Registry** (ERC-721): Each AI agent gets a unique NFT representing its identity
2. **Reputation Registry**: On-chain feedback and ratings system for agents
3. **Validation Registry**: Cryptographic proofs of task completion and validation

## 🚀 Deployment Information

### Contract Addresses (Avalanche C-Chain Mainnet)

All contracts have been successfully deployed to **Avalanche C-Chain Mainnet** (Chain ID: 43114):

- **ERC8004IdentityRegistry**: `0xbcab451d6FEdc98f486E12e479287E3B67cbF9A1`
  - [View on Snowtrace](https://snowtrace.io/address/0xbcab451d6FEdc98f486E12e479287E3B67cbF9A1)

- **ERC8004ReputationRegistry**: `0x310247955605c357628F51e94b3E5A20225C71a4`
  - [View on Snowtrace](https://snowtrace.io/address/0x310247955605c357628F51e94b3E5A20225C71a4)

- **ERC8004ValidationRegistry**: `0xAfCb9b9bEAe7395Af6920bbA597d9602995660c5`
  - [View on Snowtrace](https://snowtrace.io/address/0xAfCb9b9bEAe7395Af6920bbA597d9602995660c5)

- **VerifikPayment (x402)**: `0x5e3C7c44e5d76fa5517378582B824046cBDcFfCD`
  - [View on Snowtrace](https://snowtrace.io/address/0x5e3C7c44e5d76fa5517378582B824046cBDcFfCD)

**Network**: Avalanche C-Chain Mainnet (Chain ID: 43114)  
**Agent Address**: `0x787389C8ec43D94362648310316F4348A4dE8C83`  
**Block Explorer**: [snowtrace.io](https://snowtrace.io)

### Contract Addresses (Fuji Testnet)

Contracts are also deployed on **Avalanche Fuji Testnet** (Chain ID: 43113) for development and testing:

- **ERC8004IdentityRegistry**: `0x7c6a168455C94092f8d51aBC515B73f4Ed9813a6`
- **ERC8004ReputationRegistry**: `0xc8AF65010D6Bf85e4DC89D9D13E9cC185df919B1`
- **ERC8004ValidationRegistry**: `0x10485d0aC4382c49E0d0583315C81fe15D92899d`

**Block Explorer**: [testnet.snowtrace.io](https://testnet.snowtrace.io)

### Configuration

Contract addresses are configured via environment variables in `src/config/index.js`. For **mainnet**, set in `.env`:

```bash
# Mainnet (Avalanche C-Chain)
X402_RPC_URL=https://api.avax.network/ext/bc/C/rpc
ERC8004_IDENTITY_REGISTRY=0xbcab451d6FEdc98f486E12e479287E3B67cbF9A1
ERC8004_REPUTATION_REGISTRY=0x310247955605c357628F51e94b3E5A20225C71a4
ERC8004_VALIDATION_REGISTRY=0xAfCb9b9bEAe7395Af6920bbA597d9602995660c5
X402_CONTRACT_ADDRESS=0x5e3C7c44e5d76fa5517378582B824046cBDcFfCD
ERC8004_AGENT_TOKEN_ID=1
```

For **Fuji testnet**, use the testnet addresses and RPC URL.

## ✨ What We've Built

### ✅ Smart Contracts

1. **ERC8004IdentityRegistry.sol**
   - ERC-721 based identity system
   - Each agent gets a unique NFT token
   - Stores agent metadata (name, description, capabilities, Agent Card URI)
   - Agent registration and management

2. **ERC8004ReputationRegistry.sol**
   - On-chain feedback system
   - Ratings (1-5 scale)
   - Tags and comments
   - Payment-proof linked feedback (prevents fake reviews)
   - Reputation summaries and statistics

3. **ERC8004ValidationRegistry.sol**
   - Stores validation proofs for completed tasks
   - Multiple validation types (re-execution, ZK proofs, consensus, oracle)
   - Task output hashing
   - Validation statistics

### ✅ Backend Integration

- **src/modules/erc8004.module.js**: Complete integration module for ERC8004 contracts
  - Agent registration checking
  - Reputation retrieval
  - Feedback submission
  - Validation recording
  - Statistics queries

### ✅ Agent Registration

- **Agent Address**: `0x787389C8ec43D94362648310316F4348A4dE8C83`
- **Token ID**: 1
- **Agent Card URI**: https://x402-agent.verifik.co/agent-card.json
- [View NFT on Snowtrace](https://snowtrace.io/token/0xbcab451d6FEdc98f486E12e479287E3B67cbF9A1?a=1)

### ✅ Agent Card

- **Location**: `frontend/public/agent-card.json`
- **Served at**: `https://x402-agent.verifik.co/agent-card.json` (via `/api/agent/agent-card.json`)
- Contains: Agent metadata, capabilities, endpoints, pricing, blockchain info

## 🏗️ Architecture

```
┌─────────────────────────────────┐
│      AI Agent (Backend)         │
│                                 │
│  ┌──────────────────────────┐  │
│  │   Agent Module            │  │
│  │  - Chat with users        │  │
│  │  - Execute tools          │  │
│  └──────────┬────────────────┘  │
│             │                    │
│  ┌──────────▼────────────────┐  │
│  │   ERC8004 Module          │  │
│  │  - Check registration     │  │
│  │  - Record validations     │  │
│  │  - Submit feedback        │  │
│  └──────────┬────────────────┘  │
└─────────────┼────────────────────┘
              │
              │ Blockchain Calls
              │
┌─────────────▼────────────────────┐
│   Avalanche C-Chain Mainnet      │
│                                   │
│  ┌─────────────────────────────┐ │
│  │ Identity Registry (ERC-721) │ │
│  └─────────────────────────────┘ │
│  ┌─────────────────────────────┐ │
│  │ Reputation Registry         │ │
│  └─────────────────────────────┘ │
│  ┌─────────────────────────────┐ │
│  │ Validation Registry         │ │
│  └─────────────────────────────┘ │
│  ┌─────────────────────────────┐ │
│  │ VerifikPayment (x402)       │ │
│  └─────────────────────────────┘ │
└───────────────────────────────────┘
```

## 📖 API Endpoints

| Endpoint | Method | Description |
|----------|--------|--------------|
| `/api/agent/chat` | POST | Chat with the AI agent |
| `/api/agent/info` | GET | Get agent identity and reputation |
| `/api/agent/agent-card.json` | GET | Get Agent Card (ERC8004 metadata) |
| `/api/x402/validate-id` | POST | Validate ID (requires x402 payment) |

## 🔐 Security Considerations

1. **Agent Registration**: Only contract owner can register agents initially
2. **Feedback Verification**: Link feedback to payment proofs to prevent fake reviews
3. **Validation Proofs**: Use cryptographic hashing for output verification
4. **Access Control**: Properly manage who can submit feedback and validations

## 📚 Resources

- [ERC8004 Specification](https://eips.ethereum.org/EIPS/eip-8004)
- [ERC8004 Awesome List](https://github.com/sudeepb02/awesome-erc8004)
- [Agentic Docs - Polygon](https://agentic-docs.polygon.technology/general/agent-integration/erc8004/)
- [Verifik Documentation](https://docs.verifik.co)
- [x402 Agent](https://x402.verifik.co)

## 🎉 MVP Status: **COMPLETE!**

All core ERC8004 features are implemented and working:
- ✅ Agent identity on-chain (ERC-721 NFT)
- ✅ Reputation system with on-chain feedback
- ✅ Validation proof recording
- ✅ Full frontend integration
- ✅ User feedback submission
- ✅ x402 payment protocol integration

---

**Built for Hack2Build: Payments x402 Edition - ERC8004 Implementation**

*Bringing trust and transparency to AI agents on-chain*
