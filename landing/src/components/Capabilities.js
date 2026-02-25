import "../styles/components/cards.css";

export const renderCapabilities = () => {
    return `
    <section id="capabilities" class="content-section">
        <div class="section-header">
            <span class="section-label" style="color: #4ade80">THE TRUST LAYER</span>
            <h2>Infrastructure for the<br />Autonomous Economy.</h2>
            <p style="color: #a1a1aa; font-size: 1.1rem; max-width: 600px; margin-top: 1rem;">
                To operate safely, AI agents need to verify the entities they interact with. Verifik provides the cryptographic proof of identity for every actor in the network.
            </p>
        </div>

        <div class="feature-grid">
            <!-- 1. PROOF OF HUMANITY -->
            <div class="feature-highlight">
                <div class="feature-content">
                    <h3>Proof of Humanity</h3>
                    <p>
                        Verify the human behind the agent. Official, authorized API access to government registries across 20+ countries to prevent Sybil attacks.
                    </p>
                    <a href="https://docs.verifik.co/intro" target="_blank" class="docs-link">
                        Explore Documentation ↗
                    </a>
                </div>

                <div class="marquee-container">
                    <div class="marquee-track">
                        <div class="country-pill">🇦🇷 Argentina</div>
                        <div class="country-pill">🇧🇴 Bolivia</div>
                        <div class="country-pill">🇧🇷 Brazil</div>
                        <div class="country-pill">🇨🇦 Canada</div>
                        <div class="country-pill">🇨🇱 Chile</div>
                        <div class="country-pill">🇨🇴 Colombia</div>
                        <div class="country-pill">🇨🇷 Costa Rica</div>
                        <div class="country-pill">🇲🇽 Mexico</div>
                        <div class="country-pill">🇺🇸 USA</div>
                        <!-- DUP -->
                        <div class="country-pill">🇦🇷 Argentina</div>
                        <div class="country-pill">🇧🇴 Bolivia</div>
                        <div class="country-pill">🇧🇷 Brazil</div>
                        <div class="country-pill">🇨🇦 Canada</div>
                        <div class="country-pill">🇨🇱 Chile</div>
                        <div class="country-pill">🇨🇴 Colombia</div>
                        <div class="country-pill">🇨🇷 Costa Rica</div>
                        <div class="country-pill">🇲🇽 Mexico</div>
                        <div class="country-pill">🇺🇸 USA</div>
                    </div>
                </div>
            </div>

            <!-- 2. ENTITY VERIFICATION -->
            <div class="feature-highlight">
                <div class="feature-content">
                    <h3>Entity Verification</h3>
                    <p>
                        Validate corporate existence and tax status on-chain. Instantly verify legal entities (DIAN/RUES).
                    </p>
                    <a href="https://docs.verifik.co/intro" target="_blank" class="docs-link">
                        Explore Documentation ↗
                    </a>
                </div>

                <div class="marquee-container">
                    <div class="marquee-track slow reverse">
                        <div class="country-pill">🇨🇴 DIAN/RUES</div>
                        <div class="country-pill">🇺🇸 IRS/State</div>
                        <div class="country-pill">🇨🇦 CRA</div>
                        <div class="country-pill">🇲🇽 SAT</div>
                        <div class="country-pill">🇧🇷 CNPJ</div>
                        <div class="country-pill">🇪🇸 CIF</div>
                        <!-- DUP -->
                        <div class="country-pill">🇨🇴 DIAN/RUES</div>
                        <div class="country-pill">🇺🇸 IRS/State</div>
                        <div class="country-pill">🇨🇦 CRA</div>
                        <div class="country-pill">🇲🇽 SAT</div>
                        <div class="country-pill">🇧🇷 CNPJ</div>
                        <div class="country-pill">🇪🇸 CIF</div>
                    </div>
                </div>
            </div>

            <!-- 3. REAL WORLD ASSETS (RWA) -->
            <div class="feature-highlight">
                <div class="feature-content">
                    <h3>Real World Assets</h3>
                    <p>
                        Bridge physical ownership to digital trust. Verify vehicle data (RUNT, SIMIT), real estate, and insurance.
                    </p>
                    <a href="https://docs.verifik.co/intro" target="_blank" class="docs-link">
                        Explore Documentation ↗
                    </a>
                </div>
                <div class="marquee-container">
                    <div class="marquee-track">
                        <div class="country-pill">🚗 Ownership</div>
                        <div class="country-pill">👮 Fines</div>
                        <div class="country-pill">📄 Insurance</div>
                        <div class="country-pill">🔧 Tech Review</div>
                        <div class="country-pill">💥 Accident History</div>
                        <!-- DUP -->
                        <div class="country-pill">🚗 Ownership</div>
                        <div class="country-pill">👮 Fines</div>
                        <div class="country-pill">📄 Insurance</div>
                        <div class="country-pill">🔧 Tech Review</div>
                        <div class="country-pill">💥 Accident History</div>
                    </div>
                </div>
            </div>

            <!-- 4. SOVEREIGN REPUTATION -->
            <div class="feature-highlight">
                <div class="feature-content">
                    <h3>Sovereign Reputation</h3>
                    <p>
                        Compliance and trust scores for autonomous actors. Check background history to whitelist safe agents.
                    </p>
                    <a href="https://docs.verifik.co/intro" target="_blank" class="docs-link">
                        Explore Documentation ↗
                    </a>
                </div>
                <div class="marquee-container">
                    <div class="marquee-track slow">
                        <div class="country-pill">🌐 Interpol</div>
                        <div class="country-pill">🇺🇸 OFAC</div>
                        <div class="country-pill">🇺🇸 FBI</div>
                        <div class="country-pill">⚖️ Judicial</div>
                        <div class="country-pill">🚫 AML/CFT</div>
                        <!-- DUP -->
                        <div class="country-pill">🌐 Interpol</div>
                        <div class="country-pill">🇺🇸 OFAC</div>
                        <div class="country-pill">🇺🇸 FBI</div>
                        <div class="country-pill">⚖️ Judicial</div>
                        <div class="country-pill">🚫 AML/CFT</div>
                    </div>
                </div>
            </div>

            <!-- 5. AGENT IDENTITY (ERC-8004) -->
            <div class="feature-highlight">
                <div class="feature-content">
                    <h3>Agent Identity (ERC-8004)</h3>
                    <p>
                        Every AI agent gets an on-chain identity linked to a verified human or company. Reputation, validation history, and trust scores -- all immutable on Avalanche.
                    </p>
                    <a href="https://docs.verifik.co/intro" target="_blank" class="docs-link">
                        Learn about ERC-8004 ↗
                    </a>
                </div>
                <div class="marquee-container">
                    <div class="marquee-track reverse">
                        <div class="country-pill">🤖 Agent NFT</div>
                        <div class="country-pill">👤 Human Link</div>
                        <div class="country-pill">⭐ Reputation</div>
                        <div class="country-pill">🔐 Validation</div>
                        <div class="country-pill">📜 Agent Card</div>
                        <!-- DUP -->
                        <div class="country-pill">🤖 Agent NFT</div>
                        <div class="country-pill">👤 Human Link</div>
                        <div class="country-pill">⭐ Reputation</div>
                        <div class="country-pill">🔐 Validation</div>
                        <div class="country-pill">📜 Agent Card</div>
                    </div>
                </div>
            </div>

            <!-- 6. T-REX PROTOCOL (ERC-3643) -->
            <div class="feature-highlight">
                <div class="feature-content">
                    <h3>T-REX Protocol (ERC-3643)</h3>
                    <p>
                        Permissioned tokens for the agentic economy. Only verified agents can hold, transfer, or interact with regulated digital assets. Compliance built into every transaction.
                    </p>
                    <a href="https://docs.verifik.co/intro" target="_blank" class="docs-link">
                        Explore T-REX ↗
                    </a>
                </div>
                <div class="marquee-container">
                    <div class="marquee-track slow">
                        <div class="country-pill">🔒 Permissioned</div>
                        <div class="country-pill">📋 Compliant</div>
                        <div class="country-pill">🏛️ Regulated</div>
                        <div class="country-pill">🌐 Cross-Chain</div>
                        <div class="country-pill">⚡ On-Chain KYC</div>
                        <!-- DUP -->
                        <div class="country-pill">🔒 Permissioned</div>
                        <div class="country-pill">📋 Compliant</div>
                        <div class="country-pill">🏛️ Regulated</div>
                        <div class="country-pill">🌐 Cross-Chain</div>
                        <div class="country-pill">⚡ On-Chain KYC</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
};
