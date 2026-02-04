export const renderRoadmap = () => {
    return `
    <section id="roadmap">
        <div class="roadmap-header">
            <span class="section-label" style="color: #4ade80">THE PATH FORWARD</span>
            <h2>2026 Roadmap</h2>
            <p style="color: #a1a1aa; font-size: 1.1rem; margin-top: 1rem">
                Executing our vision for a decentralized, agent-driven economy.
            </p>
        </div>

        <div class="timeline">
            <!-- Q1 2026 -->
            <div class="timeline-item left">
                <div class="timeline-content">
                    <span class="quarter-badge">Q1 2026</span>
                    <h3>Foundation & Launch</h3>
                    <ul class="timeline-list">
                        <li><strong>Mainnet Launch:</strong> Deployment on Avalanche C-Chain.</li>
                        <li><strong>Verifik Token (VK):</strong> Staking mechanism for cost reduction (0.20 → 0.02 credits).</li>
                        <li><strong>Utility Token Launch:</strong> 1:1 USD equivalent stable-credit for consumption.</li>
                        <li><strong>Smart Agent Chat:</strong> Multiple concurrent request handling.</li>
                        <li><strong>Data Tools:</strong> PDF Export via Webhooks & Bulk processing (Excel/CSV/JSON).</li>
                        <li>
                            <strong>Audit Monitor:</strong> Blockchain-based tracking for vehicle/company changes (for Banking clients).
                        </li>
                        <li><strong>Expansion:</strong> 5+ new validation endpoints for LATAM.</li>
                    </ul>
                </div>
            </div>

            <!-- Q2 2026 -->
            <div class="timeline-item right q2-dot">
                <div class="timeline-content">
                    <span class="quarter-badge q2-badge">Q2 2026</span>
                    <h3>Scale & Integration</h3>
                    <ul class="timeline-list q2-list">
                        <li><strong>Migration:</strong> Full customer transition to Utility Token model.</li>
                        <li><strong>Global Reach:</strong> Expansion into Asian markets and registries.</li>
                        <li><strong>T-REX Protocol:</strong> On-chain identity layer integration with Zelf technology.</li>
                        <li><strong>Zero-Biometric KYC:</strong> Compliant verification without storing sensitive biometric data.</li>
                        <li><strong>Developer SDK 2.0:</strong> New Python & Go libraries for seamless agent integration.</li>
                        <li><strong>Security Audits:</strong> Comprehensive external audits of all token contracts.</li>
                    </ul>
                </div>
            </div>

            <!-- Q3 2026 -->
            <div class="timeline-item left q3-dot">
                <div class="timeline-content">
                    <span class="quarter-badge q3-badge">Q3 2026</span>
                    <h3>Rewards & Ecosystem</h3>
                    <ul class="timeline-list q3-list">
                        <li><strong>User Rewards:</strong> USDC/Token incentives for users validating their own data.</li>
                        <li>
                            <strong>Integrate inside Zelf Name Service:</strong> Consumer app for managing identity assets and rewards.
                        </li>
                        <li><strong>DeFi Partnerships:</strong> Integration with lending protocols for reputation-based access.</li>
                        <li><strong>Data Marketplace:</strong> Protocol for users to monetize specific data points privately.</li>
                    </ul>
                </div>
            </div>

            <!-- Q4 2026 -->
            <div class="timeline-item right q4-dot">
                <div class="timeline-content">
                    <span class="quarter-badge q4-badge">Q4 2026</span>
                    <h3>Decentralization & AI</h3>
                    <ul class="timeline-list q4-list">
                        <li><strong>DAO Governance:</strong> Community voting on new registry integrations and protocol parameters.</li>
                        <li><strong>European Expansion:</strong> Initial pilots for eIDAS compatibility.</li>
                        <li><strong>AI Fraud Layer:</strong> Decentralized machine learning nodes for anomaly detection.</li>
                        <li><strong>Cross-Chain Bridge:</strong> Interoperability with other major L1 networks.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    `;
};
