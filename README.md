# Verifik Smart Agent

## Short Description

Verifik Smart Agent is an autonomous AI identity expert built on the Avalanche blockchain using the **x402 (Action-Based Payments)** protocol. It bridges the gap between Web2 identity verification services (Verifik.co) and Web3 payments, allowing users to pay for premium data validation using crypto (AVAX) on a pay-per-request basis. Features include a secure non-custodial agent wallet (Passkey/PIN), on-chain reputation via **ERC-8004**, and a dual-mode interface supporting both traditional credits and blockchain payments.

## Full Description

Verifik Smart Agent revolutionizes how AI agents consume paid APIs by implementing the **x402 Protocol** on the Avalanche network. In traditional Web2, accessing premium data services requires API keys, subscriptions, and centralized billing. Our Smart Agent enables a seamless **Pay-per-Action** model for premium identity verification tools (National IDs, Criminal Records, Vehicle Data, Sanctions Lists) using cryptocurrency.

The platform empowers users to interact with high-value/premium APIs through a natural language interface, where the AI Agent acts as an intermediary that understands user intent, selects the appropriate verification tool, and facilitates the crypto payment process transparently.

### Key Innovations

1.  **x402 Protocol Implementation**: A middleware layer that enforces on-chain payment for off-chain API execution. Services are gated not by API keys, but by proof of valid blockchain transactions.
2.  **Embedded Agent Wallet**: To improve UX, we built a non-custodial wallet directly into the application. It uses **WebAuthn (Passkeys)** and **AES-GCM encryption** (PIN) to securely manage keys in the browser, removing the friction of external wallet extensions for casual users.
3.  **ERC-8004 Agent Identity & Reputation**: The Agent is a registered entity on-chain. User feedback and ratings are recorded as blockchain transactions, building an immutable and transparent reputation history for the AI service.
4.  **Hybrid Web2/Web3 Gateway**: The system supports "Dual Mode", allowing users to switch seamlessly between using traditional Web2 Credits (JWT) and Web3 Crypto Payments (x402), making it a perfect bridge for transitioning users to blockchain.

## Technical Details

### How it's Made configuration

We built the Verifik Smart Agent using a modern stack designed for performance, security, and Web3 integration.

**Tech Stack**:

-   **Frontend**: Angular 18 + TailwindCSS. We used **Standalone Components** and **Signals** for reactive state management.
-   **Backend**: Node.js with Koa.js. Selected for its lightweight middleware architecture, essential for our custom x402 enforcement layer.
-   **Blockchain**: Avalanche C-Chain (Fuji Testnet). Interaction via `ethers.js` v6.
-   **AI**: Google Gemini 1.5 Flash. Used for natural language processing and tool selection (Agentic capabilities).

**Integrations**:

-   **Verifik API**: The core source of premium identity data.
-   **Avalanche Network**: For settlement of micro-payments.
-   **Snowtrace**: For verification links and transaction exploring.
-   **ERC-8004 Registry**: For decentralized agent identity and reputation scoring.

**Innovative & "Hacky" Solutions**:

1.  **The Middleware Enforcer**: Instead of rewriting the entire API for Web3, we built a non-intrusive **x402 Proxy**. It intercepts standard REST calls, checks for a specific payment header (`x-payment-tx`), verifies it on-chain in milliseconds, and _dynamically_ injects a high-privilege Service Token to forward the request to the legacy Web2 backend. This allows us to "crypto-enable" any traditional API without changing its core logic.
2.  **Browser-Native Agent Wallet**: We realized asking users to install MetaMask for every micro-transaction causes churn. We built a **Non-Custodial Embedded Wallet** using AES-GCM encryption. The private key is generated locally, encrypted with a user's PIN or Biometric Passkey, and stored in `localStorage`. This gives the sleek UX of a Web2 app with the self-sovereignty of Web3.

## How it Works

1.  **User Request**: The user asks the agent to "Validate ID 12345678 in Colombia".
2.  **Tool Selection**: The Agent (Gemini) identifies the correct tool (`colombia_api_identity_lookup`) and its price (e.g., 0.01 AVAX).
3.  **Payment Prompt**: The frontend intercepts the tool call and presents a Payment Confirmation Modal.
4.  **Transaction Signing**: The user signs the transaction using the embedded Agent Wallet (Biometric/PIN) or MetaMask.
5.  **Execution**: The transaction hash (`txHash`) is sent as a header (`x-payment-tx`) to the backend.
6.  **Validation**: The backend verifies the transaction on-chain. If valid, it forwards the request to the Verifik API.
7.  **Result**: The verified data is returned to the user, and the agent interprets the results.
8.  **Reputation**: The user rates the interaction, and the feedback is verified and stored on-chain (ERC-8004).

## Project Continuity & Development

**What was built during the hackathon?**
Everything in this repository (Frontend, Backend Middleware, Smart Contract interactions) is **100% new code** developed specifically for the Avalanche Hackathon.

**Pre-existing vs New**:

-   **Verifik API (Pre-existing)**: Our connection to government databases (for ID validation) is part of Verifik's existing Web2 "niche" business. Due to strict security and compliance requirements, the code managing these direct government connections cannot be made public.
-   **Smart Agent Layer (New)**: The innovation presented here is the **x402 Layer** built _on top_ of that legacy infrastructure. We built the autonomous agent, the embedded wallet, and the payment enforcement gateway to allow unrestricted, decentralized access to these previously siloed APIs using cryptocurrency.
