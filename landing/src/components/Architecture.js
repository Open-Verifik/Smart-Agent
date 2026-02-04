export const renderArchitecture = () => {
    return `
    <section id="architecture">
        <div class="arch-header">
            <span class="section-label" style="color: #ef4444">THE INFRASTRUCTURE</span>
            <h2 style="font-size: 3rem; font-weight: 700; color: #fff; margin-bottom: 1rem">Hybrid Web2 / Web3 Gateway.</h2>
            <p style="color: #a1a1aa; font-size: 1.1rem">
                A decentralized monetization layer sitting in front of 14+ government registries.
            </p>
        </div>

        <div class="arch-container">
            <!-- SVG Connecting Lines (Absolute Overlay) -->
            <svg class="pipeline-overlay" viewBox="0 0 1400 600" preserveAspectRatio="none">
                <!-- Lines from Left (Data) to Center (Agent) -->
                <path class="pipe-line" d="M300 150 C 500 150, 500 300, 700 300" />
                <path class="pipe-flow" d="M300 150 C 500 150, 500 300, 700 300" />

                <path class="pipe-line" d="M300 450 C 500 450, 500 300, 700 300" />
                <path class="pipe-flow" d="M300 450 C 500 450, 500 300, 700 300" />

                <!-- Lines from Center (Agent) to Right (Chain) -->
                <path class="pipe-line" d="M700 300 C 900 300, 900 150, 1100 150" />
                <path class="pipe-flow" d="M700 300 C 900 300, 900 150, 1100 150" />

                <!-- Return Path (Validation) -->
                <path class="pipe-line" d="M1100 450 C 900 450, 900 300, 700 300" />
                <path class="pipe-flow reverse" d="M1100 450 C 900 450, 900 300, 700 300" />
            </svg>

            <!-- Column 1: Sources (Web2) -->
            <div style="display: flex; flex-direction: column; gap: 2rem">
                <div class="arch-node">
                    <div class="arch-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" width="32" height="32">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h3>Web2 Registries</h3>
                    <p>Identity, Tax & Asset Registries</p>
                </div>
                <div class="arch-node">
                    <div class="arch-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" width="32" height="32">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                    </div>
                    <h3>Verifik</h3>
                    <p>Data Normalization Engine</p>
                </div>
            </div>

            <!-- Column 2: The Gateway (Agent API) -->
            <div class="arch-node gateway-node">
                <div class="gateway-core">
                    <div class="core-pulse"></div>
                    <div class="core-solid">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#4ade80" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                </div>
                <h3 style="color: #4ade80">Smart Agent Proxy</h3>
                <p style="margin-bottom: 1rem">Localhost Gateway</p>
                <div style="text-align: left; background: rgba(0, 0, 0, 0.3); padding: 1rem; border-radius: 8px; font-family: monospace; font-size: 0.8rem; color: #a1a1aa; width: 100%;">
                    <div>1. Intercept Request</div>
                    <div>2. Check x-payment-tx</div>
                    <div style="color: #ef4444">3. 402 Payment Required</div>
                    <div style="color: #4ade80">4. Validate Proof</div>
                </div>
            </div>

            <!-- Column 3: The Chain (Web3) -->
            <div style="display: flex; flex-direction: column; gap: 2rem">
                <div class="arch-node" style="border-color: rgba(239, 68, 68, 0.3)">
                    <div class="arch-icon" style="color: #ef4444">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" width="32" height="32">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3>Avalanche C-Chain</h3>
                    <p>Payment Settlement</p>
                </div>
                <div class="arch-node" style="border-color: rgba(239, 68, 68, 0.3)">
                    <div class="arch-icon" style="color: #ef4444">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" width="32" height="32">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h3>ERC-8004 Registry</h3>
                    <p>On-Chain Validation Proofs</p>
                </div>
            </div>
        </div>
    </section>
    `;
};
