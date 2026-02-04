export const renderGateway = () => {
    return `
    <section id="gateway" class="gateway-section" aria-labelledby="gateway-heading">
        <div class="gateway-header">
            <span class="section-label" style="color: #ef4444">THE GATEWAY</span>
            <h2 id="gateway-heading">Hybrid Web2/Web3 Infrastructure.<br/>Pay for Compute. Pay for Truth.</h2>
            <p class="gateway-subtitle">
                A monetization layer bridging 14+ official government registries (authorized API access) to autonomous agents via the <strong>x402 payment protocol</strong>.
            </p>
        </div>

        <!-- Interactive Flow Visualization -->
        <div class="flow-visualization">
            <div class="flow-track">
                <!-- Step 1: Agent Request -->
                <div class="flow-node" data-step="1">
                    <div class="node-icon agent-icon">
                        <!-- Terminal/CLI icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="4 17 10 11 4 5"></polyline>
                            <line x1="12" y1="19" x2="20" y2="19"></line>
                        </svg>
                    </div>
                    <div class="node-label">AI Agent</div>
                    <div class="node-detail">Requests /verify/person/123</div>
                </div>

                <!-- Arrow 1 -->
                <div class="flow-arrow">
                    <div class="arrow-line"></div>
                    <div class="arrow-pulse" data-direction="right"></div>
                    <span class="arrow-label">GET Request</span>
                </div>

                <!-- Step 2: Gateway (402) -->
                <div class="flow-node gateway-core-node" data-step="2">
                    <div class="node-icon gateway-icon">
                        <div class="gateway-pulse-ring"></div>
                        <!-- Server/Gateway icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                            <line x1="6" y1="6" x2="6.01" y2="6"></line>
                            <line x1="6" y1="18" x2="6.01" y2="18"></line>
                        </svg>
                    </div>
                    <div class="node-label">Smart Agent Proxy</div>
                    <div class="node-detail error-code">HTTP 402 Payment Required</div>
                </div>

                <!-- Arrow 2 -->
                <div class="flow-arrow">
                    <div class="arrow-line payment-arrow"></div>
                    <div class="arrow-pulse" data-direction="right"></div>
                    <span class="arrow-label">AVAX Payment</span>
                </div>

                <!-- Step 3: Blockchain -->
                <div class="flow-node" data-step="3">
                    <div class="node-icon chain-icon">
                        <!-- Official Avalanche Logo -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 1503 1504" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1024.44 872.462C1052.95 822.406 1097.09 822.406 1125.6 872.462L1292.78 1166.02C1321.29 1216.08 1299.22 1256.61 1241.68 1256.61H905.653C848.583 1256.61 826.52 1216.08 855.028 1166.02L1024.44 872.462ZM702.87 322.304C731.378 272.249 775.053 272.249 803.561 322.304L846.806 398.346L953.179 587.074C976.179 631.191 976.179 683.717 953.179 727.834L677.401 1212.5C649.365 1254.15 603.451 1280.34 552.461 1280.34H270.749C213.207 1280.34 191.144 1240.28 219.652 1190.22L702.87 322.304Z" fill="#E84142"/>
                        </svg>
                    </div>
                    <div class="node-label">Avalanche C-Chain</div>
                    <div class="node-detail">Payment Settlement</div>
                </div>

                <!-- Arrow 3 (return) -->
                <div class="flow-arrow return-arrow">
                    <div class="arrow-line verified-arrow"></div>
                    <div class="arrow-pulse" data-direction="left"></div>
                    <span class="arrow-label">Tx Confirmed</span>
                </div>

                <!-- Step 4: Gateway releases data -->
                <div class="flow-node" data-step="4">
                    <div class="node-icon success-icon">
                        <!-- Verified checkmark badge -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <div class="node-label">200 OK + Proof</div>
                    <div class="node-detail success-text">Verified identity data released</div>
                </div>
            </div>

            <!-- Data Sources (below flow) -->
            <div class="data-sources-strip">
                <div class="sources-label">Official government data sources (authorized API access)</div>
                <div class="sources-list">
                    <span class="source-tag">🇨🇴 RNEC</span>
                    <span class="source-tag">🇲🇽 INE</span>
                    <span class="source-tag">🇧🇷 TSE</span>
                    <span class="source-tag">🇦🇷 RENAPER</span>
                    <span class="source-tag">🇨🇱 SRCeI</span>
                    <span class="source-tag">🇵🇪 RENIEC</span>
                    <span class="source-tag">+8 more</span>
                </div>
            </div>
        </div>

        <!-- Why This Works -->
        <div class="gateway-stats-row">
            <div class="stat-block">
                <span class="stat-number">&lt;1s</span>
                <span class="stat-label">Payment finality on Avalanche</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-block">
                <span class="stat-number">$0.02</span>
                <span class="stat-label">Avg. transaction cost</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-block">
                <span class="stat-number">0</span>
                <span class="stat-label">Credit cards required</span>
            </div>
        </div>

        <div class="gateway-explainer">
            <div class="explainer-block code-block">
                <div class="code-header">
                    <span class="code-dot red"></span>
                    <span class="code-dot yellow"></span>
                    <span class="code-dot green"></span>
                    <span class="code-filename">agent-request.js</span>
                </div>
                <pre class="code-content"><code><span class="code-comment">// Agent requests identity verification</span>
const response = await fetch('/verify/co/cedula', {
  headers: { 'x-payment-tx': txHash }
});

<span class="code-comment">// If no payment: 402 Payment Required</span>
<span class="code-comment">// If paid: 200 OK + signed proof</span></code></pre>
            </div>
            <div class="explainer-text">
                <h3>HTTP 402 is a real status code.</h3>
                <p>Reserved since 1999 for "Payment Required" but never used—until now. When an agent hits a protected endpoint without payment, we return 402 with a price and wallet address. The agent pays, retries, gets data. No UI. No OAuth. No API keys.</p>
                <div class="explainer-detail">
                    <span class="detail-label">Returns</span>
                    <span class="detail-value">Signed JSON + optional ERC-8004 proof</span>
                </div>
            </div>
        </div>
    </section>

    <style>
        .gateway-section {
            position: relative;
            padding: 8rem 8vw;
            background: #050505;
            overflow: hidden;
        }

        .gateway-header {
            text-align: center;
            margin-bottom: 4rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        .gateway-header h2 {
            font-size: 2.8rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 1rem;
            line-height: 1.2;
        }

        .gateway-subtitle {
            color: #a1a1aa;
            font-size: 1.1rem;
            line-height: 1.6;
        }

        /* Flow Visualization */
        .flow-visualization {
            max-width: 1200px;
            margin: 0 auto 4rem;
        }

        .flow-track {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0;
            flex-wrap: wrap;
            padding: 2rem 0;
        }

        .flow-node {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 1.5rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            min-width: 140px;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .flow-node:hover {
            border-color: rgba(255, 255, 255, 0.3);
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .node-icon {
            width: 56px;
            height: 56px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 0.75rem;
            position: relative;
        }

        .agent-icon {
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(99, 102, 241, 0.05));
            border: 1px solid rgba(99, 102, 241, 0.3);
            color: #818cf8;
        }

        .gateway-icon {
            background: linear-gradient(135deg, rgba(74, 222, 128, 0.2), rgba(74, 222, 128, 0.05));
            border: 1px solid rgba(74, 222, 128, 0.4);
            color: #4ade80;
        }

        .gateway-pulse-ring {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 12px;
            border: 2px solid #4ade80;
            animation: gatewayPulse 2s ease-in-out infinite;
            opacity: 0.5;
        }

        @keyframes gatewayPulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.15); opacity: 0; }
        }

        .chain-icon {
            background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.05));
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #ef4444;
        }

        .success-icon {
            background: linear-gradient(135deg, rgba(74, 222, 128, 0.2), rgba(74, 222, 128, 0.05));
            border: 1px solid rgba(74, 222, 128, 0.4);
            color: #4ade80;
        }

        .gateway-core-node {
            border-color: rgba(74, 222, 128, 0.3);
            background: radial-gradient(circle at center, rgba(74, 222, 128, 0.05) 0%, rgba(0,0,0,0) 70%);
        }

        .node-label {
            font-size: 0.95rem;
            font-weight: 600;
            color: #fff;
            margin-bottom: 0.25rem;
        }

        .node-detail {
            font-size: 0.8rem;
            color: #71717a;
        }

        .error-code {
            color: #ef4444;
            font-family: monospace;
            font-weight: 500;
        }

        .success-text {
            color: #4ade80;
        }

        /* Flow Arrows */
        .flow-arrow {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 0.5rem;
            position: relative;
        }

        .arrow-line {
            width: 60px;
            height: 2px;
            background: linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.3), rgba(255,255,255,0.1));
            position: relative;
        }

        .payment-arrow {
            background: linear-gradient(90deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.5), rgba(239, 68, 68, 0.2));
        }

        .verified-arrow {
            background: linear-gradient(90deg, rgba(74, 222, 128, 0.2), rgba(74, 222, 128, 0.5), rgba(74, 222, 128, 0.2));
        }

        .arrow-pulse {
            position: absolute;
            width: 8px;
            height: 8px;
            background: #4ade80;
            border-radius: 50%;
            top: 50%;
            transform: translateY(-50%);
            animation: arrowFlow 2s linear infinite;
        }

        .arrow-pulse[data-direction="right"] {
            left: 0;
        }

        .arrow-pulse[data-direction="left"] {
            right: 0;
            animation-direction: reverse;
        }

        .payment-arrow + .arrow-pulse {
            background: #ef4444;
        }

        .verified-arrow + .arrow-pulse {
            background: #4ade80;
        }

        @keyframes arrowFlow {
            0% { left: 0; opacity: 1; }
            100% { left: calc(100% - 8px); opacity: 0.3; }
        }

        .arrow-label {
            font-size: 0.7rem;
            color: #52525b;
            margin-top: 0.5rem;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .return-arrow {
            margin-left: -20px;
        }

        /* Data Sources Strip */
        .data-sources-strip {
            text-align: center;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            margin-top: 2rem;
        }

        .sources-label {
            font-size: 0.8rem;
            color: #71717a;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 1rem;
        }

        .sources-list {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.75rem;
        }

        .source-tag {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.2);
            padding: 0.4rem 0.8rem;
            border-radius: 6px;
            font-size: 0.85rem;
            color: #fca5a5;
        }

        /* Stats Row */
        .gateway-stats-row {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3rem;
            max-width: 800px;
            margin: 0 auto 4rem;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 12px;
        }

        .stat-block {
            text-align: center;
        }

        .stat-number {
            display: block;
            font-size: 2.5rem;
            font-weight: 700;
            color: #fff;
            font-family: 'Outfit', monospace;
        }

        .stat-label {
            font-size: 0.85rem;
            color: #71717a;
        }

        .stat-divider {
            width: 1px;
            height: 50px;
            background: rgba(255, 255, 255, 0.1);
        }

        /* Explainer Section */
        .gateway-explainer {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            max-width: 1100px;
            margin: 0 auto;
            align-items: start;
        }

        .code-block {
            background: #0a0a0a;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            overflow: hidden;
        }

        .code-header {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 0.75rem 1rem;
            background: rgba(255, 255, 255, 0.03);
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .code-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
        }

        .code-dot.red { background: #ef4444; }
        .code-dot.yellow { background: #eab308; }
        .code-dot.green { background: #22c55e; }

        .code-filename {
            margin-left: 8px;
            font-size: 0.8rem;
            color: #71717a;
            font-family: monospace;
        }

        .code-content {
            padding: 1.5rem;
            margin: 0;
            font-size: 0.85rem;
            line-height: 1.7;
            color: #e4e4e7;
            font-family: 'SF Mono', 'Fira Code', monospace;
            overflow-x: auto;
        }

        .code-comment {
            color: #6b7280;
        }

        .explainer-text {
            padding-top: 1rem;
        }

        .explainer-text h3 {
            font-size: 1.4rem;
            color: #fff;
            margin-bottom: 1rem;
            font-weight: 600;
        }

        .explainer-text p {
            font-size: 1rem;
            color: #a1a1aa;
            line-height: 1.7;
            margin-bottom: 1.5rem;
        }

        .explainer-detail {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: rgba(74, 222, 128, 0.05);
            border: 1px solid rgba(74, 222, 128, 0.15);
            border-radius: 8px;
        }

        .detail-label {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #4ade80;
            font-weight: 600;
        }

        .detail-value {
            font-size: 0.9rem;
            color: #d4d4d8;
        }

        /* Responsive */
        @media (max-width: 1024px) {
            .gateway-explainer {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            .gateway-header h2 {
                font-size: 2rem;
            }

            .flow-track {
                flex-direction: column;
                gap: 1rem;
            }

            .flow-arrow {
                transform: rotate(90deg);
                padding: 0.5rem 0;
            }

            .arrow-label {
                transform: rotate(-90deg);
            }

            .gateway-stats-row {
                flex-direction: column;
                gap: 1.5rem;
            }

            .stat-divider {
                width: 50px;
                height: 1px;
            }

            .stat-number {
                font-size: 2rem;
            }
        }
    </style>
    `;
};

// Interactive flow animation initialization
export const initGateway = () => {
    const nodes = document.querySelectorAll('.flow-node');
    let currentStep = 0;

    const highlightStep = (step) => {
        nodes.forEach((node, index) => {
            if (index === step) {
                node.style.borderColor = 'rgba(74, 222, 128, 0.6)';
                node.style.boxShadow = '0 0 30px rgba(74, 222, 128, 0.2)';
            } else {
                node.style.borderColor = '';
                node.style.boxShadow = '';
            }
        });
    };

    // Auto-cycle through steps
    setInterval(() => {
        highlightStep(currentStep);
        currentStep = (currentStep + 1) % nodes.length;
    }, 2500);

    // Click to highlight
    nodes.forEach((node, index) => {
        node.addEventListener('click', () => {
            currentStep = index;
            highlightStep(index);
        });
    });
};
