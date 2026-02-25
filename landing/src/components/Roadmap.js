export const renderRoadmap = () => {
    return `
    <section id="roadmap" aria-labelledby="roadmap-heading">
        <div class="roadmap-header">
            <span class="section-label" style="color: #4ade80">THE PATH FORWARD</span>
            <h2 id="roadmap-heading">2026 Roadmap</h2>
            <p style="color: #a1a1aa; font-size: 1.1rem; margin-top: 1rem">
                From mainnet to the trust standard for the autonomous economy.
            </p>
        </div>

        <div class="timeline">
            <!-- Q1 2026 -->
            <div class="timeline-item left">
                <div class="timeline-content">
                    <span class="quarter-badge">Q1 2026</span>
                    <h3>Foundation & Launch</h3>
                    <ul class="timeline-list">
                        <li><strong>Mainnet Deployment:</strong> x402 Gateway and ERC-8004 contracts live on Avalanche C-Chain.</li>
                        <li><strong>VK Utility Token:</strong> 1:1 USD stable-credit for consumption; staking for cost reduction.</li>
                        <li><strong>Smart Agent Chat:</strong> Natural language interface for x402 verifications.</li>
                        <li><strong>API Explorer:</strong> Browser-based endpoint testing with real-time responses.</li>
                        <li><strong>llms.txt Standard:</strong> Machine-readable service documentation for AI agents.</li>
                        <li><strong>Build Games:</strong> Avalanche flagship builder competition entry.</li>
                    </ul>
                </div>
            </div>

            <!-- Q2 2026 -->
            <div class="timeline-item right q2-dot">
                <div class="timeline-content">
                    <span class="quarter-badge q2-badge">Q2 2026</span>
                    <h3>Scale & Compliance</h3>
                    <ul class="timeline-list q2-list">
                        <li><strong>T-REX Protocol (ERC-3643):</strong> Permissioned token integration for regulated asset compliance.</li>
                        <li><strong>Developer SDK 2.0:</strong> Python and Go libraries for agent-native integration.</li>
                        <li><strong>Security Audits:</strong> External audit of all smart contracts and token logic.</li>
                        <li><strong>SmartBatch x402:</strong> Bulk verification with crypto payments for enterprise agents.</li>
                        <li><strong>Asian Expansion:</strong> Initial government registry integrations in Southeast Asia.</li>
                    </ul>
                </div>
            </div>

            <!-- Q3 2026 -->
            <div class="timeline-item left q3-dot">
                <div class="timeline-content">
                    <span class="quarter-badge q3-badge">Q3 2026</span>
                    <h3>Ecosystem & Rewards</h3>
                    <ul class="timeline-list q3-list">
                        <li><strong>User Rewards:</strong> AVAX/VK incentives for users who verify their own identity on-chain.</li>
                        <li><strong>DeFi Integrations:</strong> Reputation-based access for lending protocols and DAOs.</li>
                        <li><strong>Identity Subnet:</strong> Dedicated Avalanche Subnet for identity operations at scale.</li>
                        <li><strong>Data Marketplace:</strong> Privacy-preserving protocol for users to monetize verified data.</li>
                    </ul>
                </div>
            </div>

            <!-- Q4 2026 -->
            <div class="timeline-item right q4-dot">
                <div class="timeline-content">
                    <span class="quarter-badge q4-badge">Q4 2026</span>
                    <h3>Decentralization & Global</h3>
                    <ul class="timeline-list q4-list">
                        <li><strong>DAO Governance:</strong> Community voting on new registry integrations and protocol parameters.</li>
                        <li><strong>European Expansion:</strong> eIDAS compatibility pilots for EU identity standards.</li>
                        <li><strong>AI Fraud Detection:</strong> On-chain anomaly detection for suspicious agent behavior.</li>
                        <li><strong>Cross-Chain Bridge:</strong> Interoperability with Ethereum, Solana, and other L1s.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    `;
};
