# 🚀 Hack2Build: Payments x402 Edition

**AI-Powered Identity Validation Agent with Blockchain Payments**

Join us for an incredible 2.5 weeks long hackathon where developers, product designers, and entrepreneurs come together to build the next generation of AI+Blockchain interactions using the **x402 protocol** (HTTP 402 Payment Required) on Avalanche.

## 🎯 Hackathon Goals

- **Innovation**: Breakthrough ideas that push the boundaries of what's possible
- **Technical Excellence**: Well-architected, secure, and scalable solutions
- **User Experience**: Applications that are intuitive and accessible to everyone
- **Real-World Impact**: Solutions that solve actual problems and create value

## 📋 Project Overview

This project demonstrates an **AI Agent** that can validate identities and perform other tasks, seamlessly integrated with blockchain payments using the **x402 protocol** on Avalanche C-Chain. The agent uses Google Gemini for natural language understanding and can automatically handle payment flows when accessing paid APIs.

### What We Built

A conversational AI agent that:
- 🤖 Understands natural language requests (powered by Google Gemini)
- 💬 Maintains conversation context and history
- 🔧 Can call external APIs as "tools" based on user requests
- 💰 Automatically handles blockchain payments via x402 protocol
- 🔐 Uses a built-in burner wallet for seamless payment experience
- ⚡ Integrates with Avalanche C-Chain for fast, low-cost transactions

## ✨ What We Achieved

### ✅ Core Features Implemented

1. **AI Agent Backend**
   - ✅ Google Gemini integration for natural language processing
   - ✅ Tool/function calling system for API integration
   - ✅ Conversation history management
   - ✅ Payment flow detection and handling
   - ✅ Automatic retry with payment proof

2. **Smart Contract Integration**
   - ✅ x402 payment protocol implementation
   - ✅ Smart contract deployment on Avalanche C-Chain
   - ✅ Payment verification system
   - ✅ Service ID and Request ID tracking

3. **Frontend Application**
   - ✅ Modern Angular 21 application
   - ✅ Real-time chat interface
   - ✅ Built-in burner wallet (auto-generated)
   - ✅ Wallet balance display
   - ✅ Payment confirmation flow
   - ✅ Transaction status tracking

4. **Payment Flow**
   - ✅ Automatic payment detection from API responses (402 status)
   - ✅ Smart contract function calls (`payForService`)
   - ✅ Gas estimation with 20% buffer
   - ✅ Transaction confirmation waiting
   - ✅ Automatic retry with payment transaction hash

5. **Developer Experience**
   - ✅ Clean architecture with separation of concerns
   - ✅ TypeScript for type safety
   - ✅ Error handling and user feedback
   - ✅ Console logging for debugging

### 🎨 Technical Highlights

- **AI Model**: Google Gemini 2.5 Flash Lite (fast, cost-effective)
- **Blockchain**: Avalanche C-Chain (low fees, fast finality)
- **Payment Protocol**: x402 (HTTP 402 Payment Required standard)
- **Smart Contract**: Simple payment contract (not ERC8004 - we're using x402 protocol instead)
- **Frontend**: Angular 21 with standalone components
- **Wallet**: ethers.js v5.7.2 for blockchain interactions

## 🚧 What We Haven't Completed (Yet)

### 🔄 Future Enhancements

1. **Enhanced AI Capabilities**
   - ⏳ Multi-tool orchestration (calling multiple APIs in sequence)
   - ⏳ Better error recovery and retry logic
   - ⏳ Context-aware tool selection
   - ⏳ Support for more complex workflows

2. **Payment Features**
   - ⏳ Payment amount negotiation
   - ⏳ Payment refunds for failed operations
   - ⏳ Payment history and receipts
   - ⏳ Support for multiple payment tokens (not just AVAX)

3. **User Experience**
   - ⏳ Wallet import/export functionality
   - ⏳ Multiple wallet support
   - ⏳ Payment scheduling/pre-authorization
   - ⏳ Better error messages and user guidance
   - ⏳ Mobile-responsive design improvements

4. **Security & Production Readiness**
   - ⏳ Proper key management (not localStorage)
   - ⏳ Transaction signing with hardware wallets
   - ⏳ Rate limiting and abuse prevention
   - ⏳ Comprehensive error handling
   - ⏳ Unit and integration tests

5. **Advanced Features**
   - ⏳ Multi-chain support (beyond Avalanche)
   - ⏳ Payment subscriptions/recurring payments
   - ⏳ Agent memory persistence
   - ⏳ Custom tool definitions via UI
   - ⏳ Agent-to-agent communication

## 🏗️ Architecture

```
┌─────────────────┐
│   Frontend      │
│  (Angular App)  │
│                 │
│  - Chat UI      │
│  - Wallet Mgmt  │
└────────┬────────┘
         │
         │ HTTP + WebSocket
         │
┌────────▼────────┐
│   Backend       │
│  (Node.js)      │
│                 │
│  - Agent Logic  │
│  - Gemini API   │
│  - Tool Exec    │
└────────┬────────┘
         │
         │ API Calls
         │
┌────────▼────────┐
│  x402 Services │
│                 │
│  - ID Validation│
│  - Other APIs   │
└─────────────────┘

┌─────────────────┐
│  Blockchain      │
│  (Avalanche)     │
│                 │
│  - Smart Contract│
│  - Payments     │
└─────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- Node.js 24+
- npm or yarn
- Backend server running (see main repo)
- Smart contract deployed on Avalanche C-Chain
- Test AVAX for transactions

### Installation

1. **Clone the repository** and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open the app** at `http://localhost:4201/`

5. **Build for production** (optional):
   ```bash
   npm run build
   ```
   The output will be in the `dist/browser` folder.

### Configuration

API URLs and other environment variables are configured in:

- **Development**: `src/environments/environment.ts`
- **Production**: `src/environments/environment.prod.ts` (used when building with `--configuration=production`)

Key configuration options:

| Variable | Description |
|----------|-------------|
| `apiUrl` | Verifik API backend (e.g. `https://staging-api.verifik.co` for staging) |
| `smartAgentUrl` | Agent backend URL |
| `baseUrl` | App base URL |

For local development, `environment.ts` uses `https://verifik.app` as the API. For production builds, the app automatically uses `https://staging-api.verifik.co` when deployed at **x402.on-forge.com** (staging) and `https://prod.verifik.co` otherwise.

### Deployment

- **Staging** (`x402.on-forge.com`): Uses `https://staging-api.verifik.co` for all API requests. The same production build detects the host at runtime.
- **Production** (`x402-agent.verifik.co`): Uses `https://prod.verifik.co` for API requests.

## 📖 How It Works

1. **Wallet Setup**: On first load, a random wallet is generated and stored in localStorage
2. **Fund Wallet**: Send test AVAX to the displayed wallet address
3. **Chat**: Ask the agent to validate an ID (e.g., "Validate ID 12345678")
4. **AI Processing**: The agent uses Gemini to understand the request and determine which tool to call
5. **Payment Detection**: If the API requires payment, it returns a 402 status with payment details
6. **Payment Flow**: 
   - Agent requests payment confirmation
   - User approves
   - Smart contract function is called with proper gas estimation
   - Transaction is sent to Avalanche
7. **Retry**: Agent automatically retries the API call with payment transaction hash
8. **Result**: Validation results are displayed to the user

## 🔧 Technical Details

### Smart Contract Interaction

The agent calls the `payForService` function on the x402 contract:

```solidity
function payForService(string serviceId, string requestId) public payable
```

### Payment Flow

1. API returns `402 Payment Required` with:
   ```json
   {
     "error": "Payment Required",
     "details": {
       "receiver_address": "0x...",
       "amount": "0.001",
       "serviceId": "cedula-validation",
       "requestId": "req_1234567890"
     }
   }
   ```

2. Frontend calls contract:
   ```typescript
   contract.payForService(serviceId, requestId, { value: amount })
   ```

3. Backend verifies payment by checking transaction on-chain

### Gas Estimation

The wallet service includes smart gas estimation:
- Attempts to estimate gas for the contract call
- Adds 20% buffer for safety
- Falls back to 120k gas if estimation fails
- Handles both legacy and EIP-1559 transactions

### Note: x402 vs ERC8004

**We're using x402 (HTTP 402 Payment Required), not ERC8004.**

- **x402 Protocol**: HTTP status code 402 for payment-gated API access. Our implementation uses a simple smart contract to accept payments before providing API services.

- **ERC8004**: A different standard for AI agent identity, reputation, and validation on-chain (ERC-721 agent identities, reputation registry, validation proofs). We are **not** implementing ERC8004 in this project.

Our contract is a simple payment contract that follows the x402 pattern: API returns 402 → User pays via contract → API verifies payment → Service provided.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/
│   │   ├── core/                         # Auth, HTTP, services
│   │   ├── modules/
│   │   │   ├── chat/                     # Chat UI & agent wallet
│   │   │   ├── postman/                  # API testing
│   │   │   ├── smart-batch/              # Batch processing
│   │   │   └── ...
│   │   └── ...
│   ├── environments/
│   │   ├── environment.ts                # Development config
│   │   └── environment.prod.ts          # Production config
│   ├── index.html
│   └── main.ts
├── package.json
└── README.md
```

## 🧪 Development

```bash
# Run dev server with hot reload
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 🔐 Security Notes

⚠️ **Important**: This is a hackathon/demo project. For production use:

- **Never store private keys in localStorage** - Use proper key management
- **Implement proper authentication** - Don't expose sensitive endpoints
- **Add rate limiting** - Prevent abuse
- **Use hardware wallets** - For production transactions
- **Audit smart contracts** - Before deploying to mainnet

## 🎓 Learnings & Challenges

### What Went Well

- ✅ Seamless integration between AI and blockchain
- ✅ Clean separation of concerns
- ✅ Good user experience for payment flows
- ✅ Fast development with modern tools

### Challenges Faced

- ⚠️ Gas estimation issues (solved with manual estimation + buffer)
- ⚠️ TypeScript type safety with ethers.js contracts
- ⚠️ Handling async payment flows in UI
- ⚠️ Ensuring proper error handling across the stack

## 🤝 Contributing

This is a hackathon project, but contributions are welcome! Areas that need work:

- Better error handling
- More comprehensive tests
- UI/UX improvements
- Additional tool integrations
- Documentation improvements

## 📄 License

MIT

## 🙏 Acknowledgments

- **Avalanche** for the fast, low-cost blockchain
- **Google Gemini** for powerful AI capabilities
- **ethers.js** for excellent blockchain tooling
- **Angular** for the robust framework
- **Hack2Build organizers** for the opportunity

---

**Built with ❤️ for Hack2Build: Payments x402 Edition**

*Pushing the boundaries of AI + Blockchain integration*
