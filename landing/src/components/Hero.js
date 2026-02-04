export const renderHero = () => {
    return `
    <section class="hero-section">
        <main>
            <div class="hero">
                <div class="status-indicator"><span class="dot"></span> Global Neural Network Online</div>
                <h1 id="hero-title">IDENTITY CHAIN<br />ON AVALANCHE</h1>
                <p id="hero-desc">The first specialized L1 for Identity. Validating people, companies, and assets for the Agentic Economy.</p>

                <div class="protocols">
                    <div class="protocol-card">
                        <h3>x402</h3>
                        <span>Payment Protocol</span>
                    </div>
                    <div class="protocol-card">
                        <h3>ERC-8004</h3>
                        <span>Agent Standard</span>
                    </div>
                </div>
                <div style="display: flex; gap: 1rem; justify-content: start;">
                    <button id="explore-btn" onclick="window.open('https://x402-agent.verifik.co', '_blank')">Start Integration</button>
                </div>
            </div>
        </main>

        <div id="stats-panel">
            <div class="stat-item">
                <span class="label">Total requests</span>
                <span class="value" id="nodes-count">23M</span>
            </div>
            <div class="stat-item">
                <span class="label">Total companies</span>
                <span class="value">45</span>
            </div>
            <div class="stat-item">
                <span class="label">Total countries</span>
                <span class="value">20+</span>
            </div>
        </div>
    </section>
    `;
};
