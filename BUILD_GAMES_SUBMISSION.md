# Build Games 2026 — Stage 1: Idea Submission

## PROJECT OVERVIEW

**Project Name:** Verifik x402 — The Trust Layer for AI Agents

**One-sentence description (max 280 chars):**
Verifik verifies the humans and companies behind AI agents using 100+ government database integrations across 20+ countries, powered by x402 payments on Avalanche.

**Project Category:** Identity

**Is this an existing project?** Yes — existing project

---

## PROBLEM IDENTIFICATION

### What problem are you addressing?

As AI agents gain autonomy to transact, sign contracts, and access sensitive data, there is no standard way to verify who is behind them. In a trustless Web3 environment, any agent can call any API — but nobody knows if the human or company behind that agent is real, sanctioned, or even exists. This creates massive risk for fraud, Sybil attacks, money laundering, and regulatory non-compliance. By end of 2026, the majority of API traffic will come from autonomous agents, and without a trust layer, the entire agentic economy is built on blind faith.

### Who experiences this problem?

B2B and B2B2C. Primary users are: (1) DeFi protocols and DAOs that need to verify counterparties before lending or governance decisions, (2) AI agent developers who need to prove their agent is operated by a verified human or company, (3) Enterprises using AI agents for procurement, compliance, or hiring that require KYC/AML checks, and (4) Governments and regulators needing transparency into agentic transactions. The secondary user is the end-user whose identity is being verified — they benefit from a fast, privacy-respecting process that takes seconds instead of days.

### How is the problem currently solved (if at all)?

Identity verification today is done via centralized KYC providers (Jumio, Onfido, Persona) that are Web2-only, require manual human review, charge $2–5 per check, and have no on-chain presence. In Web3, Worldcoin offers biometric-only verification without document checks, Gitcoin Passport uses social attestations that aren't government-grade, and ENS provides naming without real identity. None of these solutions: (a) verify against official government registries with authorized API access, (b) support machine-to-machine verification via x402, (c) provide on-chain reputation for agents, or (d) cover 20+ countries with 100+ endpoints. The gap is a crypto-native, government-grade identity layer that AI agents can use autonomously and pay for per-request with crypto.

### What is your proposed solution?

Verifik is a trust layer with three core innovations: (1) x402 Payment Gateway — any AI agent can verify identities by simply paying with AVAX per request, no API keys or credit cards needed. The agent sends a request, gets an HTTP 402 response with the price, pays on-chain, and receives verified data instantly. (2) ERC-8004 Agent Standard — on-chain identity, reputation, and validation registries deployed on Avalanche so every agent has a verifiable track record as an NFT. (3) 100+ Government Database Integrations — real verification against DIAN, RUES, CURP, RENIEC, IRS, Interpol, OFAC, FBI, DEA, and more across 20+ countries in the Americas and beyond. We're also integrating the T-REX Protocol (ERC-3643) for permissioned token compliance, ensuring only verified agents can interact with regulated digital assets. The result: agents can autonomously verify people, companies, vehicles, and sanctions lists in under 1 second at ~$0.02 per check.

### What triggers an on-chain transaction in your project?

Three types of on-chain events: (1) x402 Payment — every time an AI agent requests identity verification, it sends AVAX to the VerifikPayment smart contract (0x5e3C7c44e5d76fa5517378582B824046cBDcFfCD) before receiving data. This is the core pay-per-verification mechanism. (2) Agent Registration — when a new agent is onboarded, an ERC-721 NFT is minted in the ERC8004IdentityRegistry (0xbcab451d6FEdc98f486E12e479287E3B67cbF9A1), establishing the agent's on-chain identity linked to a verified human or company. (3) Reputation Feedback — after each verification, the requester can submit on-chain ratings and reviews linked to the payment proof in the ERC8004ReputationRegistry (0x310247955605c357628F51e94b3E5A20225C71a4), building transparent trust scores. Future: T-REX (ERC-3643) token transfers will trigger compliance checks through our validation layer.

---

## VIDEO & PARTNERSHIPS

**2-Minute Pitch Video:** [Record using the web deck at /deck.html as visual guide — see script below]

---

## PITCH SCRIPT (2 minutes)

**[0:00–0:15 — Hook]**
"By the end of this year, the majority of API traffic will come from AI agents — not humans. They'll transact, sign contracts, access sensitive data. But here's the problem: nobody knows who's behind them."

**[0:15–0:30 — The Problem]**
"Today, any agent can call any API in a trustless environment. There's no way to verify if the human or company behind that agent is real, sanctioned, or even exists. This opens the door to fraud, Sybil attacks, and regulatory nightmares."

**[0:30–0:50 — Meet Verifik]**
"That's why we built Verifik — the trust layer for AI agents. We connect to 14+ official government databases across 20+ countries with over 100 verification endpoints. We verify people, companies, vehicles, criminal records, sanctions lists — all in under one second."

**[0:50–1:10 — How x402 Works]**
"Here's how it works. An AI agent needs to verify someone's identity. It sends a request and gets back an HTTP 402 — Payment Required. The agent pays 0.02 AVAX, the payment is verified on-chain, and the verified data is released instantly. No API keys. No credit cards. No middlemen. Just pay and verify."

**[1:10–1:25 — Why Avalanche]**
"We chose Avalanche because sub-second finality means agents don't wait. Micropayment-friendly fees mean verification costs cents, not dollars. And with infinite subnet scalability, we can build a dedicated identity subnet as we grow."

**[1:25–1:40 — Traction]**
"This isn't a concept — it's live. 23 million identities verified. 45 enterprise clients. $400 average monthly ticket with some clients paying over $2,000 a month. We're already deployed on Avalanche mainnet with our ERC-8004 agent identity standard and VK utility token."

**[1:40–1:55 — Vision]**
"Our vision: every AI agent gets a verifiable on-chain identity linked to a real human. We're integrating the T-REX Protocol for permissioned tokens, building a decentralized reputation system, and creating the compliance layer the agentic economy desperately needs."

**[1:55–2:00 — Close]**
"Verifik — the trust layer for AI agents. Verify the humans. Trust the machines. Built on Avalanche."
