export const renderProtocol = () => {
    return `
    <section id="protocol" class="content-section">
        <div class="section-header">
            <span class="section-label" style="color: #ef4444">THE MECHANISM</span>
            <h2>Pay for Compute.<br />Pay for Truth.</h2>
            <p style="color: #a1a1aa; font-size: 1.1rem; max-width: 600px; margin-top: 1rem;">
                The agent economy runs on micropayments. We leverage the <strong>HTTP 402 Payment Required</strong> standard to allow autonomous agents to pay for data verification on-demand.
            </p>
        </div>

        <div class="protocol-showcase">
            <!-- Left: The Flow -->
            <div class="protocol-card flow-card">
                <h3>The x402 Flow</h3>
                <div class="step-list">
                    <div class="step-item">
                        <div class="step-num">01</div>
                        <div class="step-content">
                            <h4>Request</h4>
                            <p>Agent requests data (e.g., /verify/person/123)</p>
                        </div>
                    </div>
                    <div class="step-connector">↓</div>
                    <div class="step-item active">
                        <div class="step-num">02</div>
                        <div class="step-content">
                            <h4 style="color: #ef4444">402 Payment Required</h4>
                            <p>Gateway responds with price & payment address.</p>
                        </div>
                    </div>
                    <div class="step-connector">↓</div>
                    <div class="step-item">
                        <div class="step-num">03</div>
                        <div class="step-content">
                            <h4>Settlement (AVAX / Token)</h4>
                            <p>Agent sends payment via Avalanche C-Chain.</p>
                        </div>
                    </div>
                    <div class="step-connector">↓</div>
                    <div class="step-item complete">
                        <div class="step-num">04</div>
                        <div class="step-content">
                            <h4 style="color: #4ade80">200 OK + Proof</h4>
                            <p>Data released with cryptographic proof.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right: The Value Prop -->
            <div class="protocol-info-grid">
                <div class="protocol-card highlight-glow">
                    <div class="icon-header">
                        <span class="icon">💸</span>
                        <h3>Native Currency</h3>
                    </div>
                    <p>
                        Pay directly with <strong>$AVAX</strong> or Verifik Credits. No credit cards, no friction for AI agents.
                    </p>
                </div>

                <div class="protocol-card highlight-glow">
                    <div class="icon-header">
                        <span class="icon">📈</span>
                        <h3>Volume Booster</h3>
                    </div>
                    <p>
                        Every identity check is a transaction. We are turning Identity Validation into a mass-volume DeFi use case for <strong>Avalanche</strong>.
                    </p>
                </div>

                <div class="protocol-card highlight-glow" style="grid-column: span 2">
                    <div class="icon-header">
                        <span class="icon">🤖</span>
                        <h3>Direct Agent Integration</h3>
                    </div>
                    <p>
                        Agents don't need UI. They need standard error codes. The <strong>x402 Protocol</strong> treats payment as a standard HTTP error handling flow.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <style>
        .protocol-showcase {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-top: 3rem;
        }

        @media (max-width: 900px) {
            .protocol-showcase {
                grid-template-columns: 1fr;
            }
        }

        .protocol-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 2rem;
            backdrop-filter: blur(10px);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .protocol-card:hover {
            border-color: rgba(239, 68, 68, 0.5);
            box-shadow: 0 0 30px rgba(239, 68, 68, 0.1);
        }

        .step-list {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .step-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            border-left: 3px solid #333;
        }

        .step-item.active {
            border-left-color: #ef4444;
            background: rgba(239, 68, 68, 0.1);
        }

        .step-item.complete {
            border-left-color: #4ade80;
            background: rgba(74, 222, 128, 0.05);
        }

        .step-num {
            font-family: monospace;
            color: #666;
            font-size: 1.2rem;
        }

        .step-content h4 {
            margin: 0;
            font-size: 1rem;
            color: #fff;
        }

        .step-content p {
            margin: 0;
            font-size: 0.9rem;
            color: #888;
        }

        .step-connector {
            text-align: center;
            color: #444;
            font-size: 1.2rem;
        }

        .protocol-info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            grid-auto-rows: min-content;
        }
        
        @media (max-width: 600px) {
            .protocol-info-grid {
                grid-template-columns: 1fr;
            }
            .protocol-card.highlight-glow[style] {
                grid-column: span 1 !important;
            }
        }

        .highlight-glow h3 {
            margin: 0.5rem 0;
            color: #eee;
        }
        
        .highlight-glow p {
            font-size: 0.95rem;
            color: #aaa;
            line-height: 1.5;
        }

        .icon-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
        }

        .icon {
            font-size: 1.5rem;
        }
    </style>
    `;
};
