export const renderHero = () => {
    return `
    <section class="hero-section" aria-labelledby="hero-title">
        <div class="hero-content">
        <div class="hero">
            <p class="status-indicator" aria-hidden="true"><span class="dot"></span> Live on Avalanche C-Chain</p>
            <h1 id="hero-title">THE TRUST LAYER<br />FOR AI AGENTS</h1>
            <p id="hero-desc">Verify the humans and companies behind autonomous agents. Powered by 14+ government database integrations and the x402 payment protocol.</p>

            <div class="protocols" role="list">
                <div class="protocol-card" role="listitem">
                    <h3>x402</h3>
                    <span>Payment Protocol</span>
                </div>
                <div class="protocol-card" role="listitem">
                    <h3>ERC-8004</h3>
                    <span>Agent Standard</span>
                </div>
            </div>
            <p style="display: flex; gap: 1rem; justify-content: start;">
                <a id="explore-btn" href="https://x402-agent.verifik.co" target="_blank" rel="noopener noreferrer" class="hero-cta-button">Start Integration</a>
            </p>
        </div>
        </div>

        <div id="stats-panel" role="region" aria-label="Key metrics">
            <div class="stat-item">
                <span class="label">Identities Verified</span>
                <span class="value" id="nodes-count">23M+</span>
            </div>
            <div class="stat-item">
                <span class="label">Enterprise Clients</span>
                <span class="value">45</span>
            </div>
            <div class="stat-item">
                <span class="label">Government Sources</span>
                <span class="value">14+</span>
            </div>
            <div class="stat-item">
                <span class="label">Countries</span>
                <span class="value">20+</span>
            </div>
        </div>
    </section>
    `;
};
