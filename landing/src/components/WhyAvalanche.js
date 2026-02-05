export const renderWhyAvalanche = () => {
    return `
    <section id="why-avalanche" class="why-avalanche-section" aria-labelledby="why-avalanche-heading">
        <!-- Animated background glow -->
        <div class="avax-bg-glow" aria-hidden="true"></div>

        <div class="why-avalanche-content">
            <!-- Hero block with logo -->
            <div class="avax-hero-block">
                <div class="avax-logo-container">
                    <div class="avax-logo-pulse" aria-hidden="true"></div>
                    <div class="avax-logo-pulse delay" aria-hidden="true"></div>
                    <svg class="avax-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1503 1504" fill="none" aria-hidden="true">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1024.44 872.462C1052.95 822.406 1097.09 822.406 1125.6 872.462L1292.78 1166.02C1321.29 1216.08 1299.22 1256.61 1241.68 1256.61H905.653C848.583 1256.61 826.52 1216.08 855.028 1166.02L1024.44 872.462ZM702.87 322.304C731.378 272.249 775.053 272.249 803.561 322.304L846.806 398.346L953.179 587.074C976.179 631.191 976.179 683.717 953.179 727.834L677.401 1212.5C649.365 1254.15 603.451 1280.34 552.461 1280.34H270.749C213.207 1280.34 191.144 1240.28 219.652 1190.22L702.87 322.304Z" fill="#E84142"/>
                    </svg>
                </div>
                <div class="avax-hero-text">
                    <span class="section-label" style="color: #E84142">WHY AVALANCHE</span>
                    <h2 id="why-avalanche-heading">Built for agents.<br/>Built for speed.</h2>
                </div>
            </div>

            <!-- Stats row -->
            <div class="avax-stats-row">
                <div class="avax-stat">
                    <span class="avax-stat-value">&lt;1s</span>
                    <span class="avax-stat-label">Finality</span>
                </div>
                <div class="avax-stat-divider"></div>
                <div class="avax-stat">
                    <span class="avax-stat-value">$0.02</span>
                    <span class="avax-stat-label">Avg tx cost</span>
                </div>
                <div class="avax-stat-divider"></div>
                <div class="avax-stat">
                    <span class="avax-stat-value">4,500</span>
                    <span class="avax-stat-label">TPS capacity</span>
                </div>
                <div class="avax-stat-divider"></div>
                <div class="avax-stat">
                    <span class="avax-stat-value">∞</span>
                    <span class="avax-stat-label">Subnet scale</span>
                </div>
            </div>

            <!-- Bento grid -->
            <div class="avax-bento-grid">
                <!-- Large card: Subnets -->
                <div class="avax-bento-card avax-card-large">
                    <div class="avax-card-header">
                        <div class="avax-card-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                <polyline points="2 17 12 22 22 17"></polyline>
                                <polyline points="2 12 12 17 22 12"></polyline>
                            </svg>
                        </div>
                        <span class="avax-card-tag">ROADMAP</span>
                    </div>
                    <h3>Identity Subnet</h3>
                    <p>App-specific chains with custom rules. A verification subnet could handle identity checks at massive scale—separate consensus, shared security. We start on C-Chain; subnets are the upgrade path.</p>
                    
                </div>

                <!-- Right card 1: Finality -->
                <div class="avax-bento-card avax-card-right">
                    <div class="avax-card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                    </div>
                    <h3>Sub-second finality</h3>
                    <p>No waiting. The agent pays, gets proof, continues.</p>
                    <div class="finality-demo" aria-hidden="true">
                        <div class="finality-bar">
                            <div class="finality-fill"></div>
                        </div>
                        <span class="finality-label">~0.8s avg</span>
                    </div>
                </div>

                <!-- Right card 2: Fees -->
                <div class="avax-bento-card avax-card-right">
                    <div class="avax-card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                        </svg>
                    </div>
                    <h3>Micropayment-friendly</h3>
                    <p>Fractions of a cent per tx. Affordable at any scale.</p>
                </div>

                <!-- Right card 3: Native -->
                <div class="avax-bento-card avax-card-right">
                    <div class="avax-card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1503 1504" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1024.44 872.462C1052.95 822.406 1097.09 822.406 1125.6 872.462L1292.78 1166.02C1321.29 1216.08 1299.22 1256.61 1241.68 1256.61H905.653C848.583 1256.61 826.52 1216.08 855.028 1166.02L1024.44 872.462ZM702.87 322.304C731.378 272.249 775.053 272.249 803.561 322.304L846.806 398.346L953.179 587.074C976.179 631.191 976.179 683.717 953.179 727.834L677.401 1212.5C649.365 1254.15 603.451 1280.34 552.461 1280.34H270.749C213.207 1280.34 191.144 1240.28 219.652 1190.22L702.87 322.304Z" fill="#E84142"/>
                        </svg>
                    </div>
                    <h3>Native AVAX</h3>
                    <p>Direct crypto payments. No credit cards—just x402.</p>
                </div>
            </div>

            <!-- Footer -->
            <div class="avax-section-footer">
                <p>Settlement on <strong>Avalanche C-Chain</strong> · x402 protocol · ERC-8004 proofs</p>
            </div>
        </div>
    </section>

    <style>
        .why-avalanche-section {
            padding: 8rem 8vw;
            background: #050505;
            position: relative;
            z-index: 10;
            overflow: hidden;
        }

        .avax-bg-glow {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 800px;
            height: 800px;
            background: radial-gradient(circle, rgba(232, 65, 66, 0.08) 0%, transparent 70%);
            transform: translate(-50%, -50%);
            pointer-events: none;
        }

        .why-avalanche-content {
            position: relative;
            z-index: 2;
            max-width: 1100px;
            margin: 0 auto;
        }

        /* Hero block */
        .avax-hero-block {
            display: flex;
            align-items: center;
            gap: 3rem;
            margin-bottom: 4rem;
        }

        .avax-logo-container {
            position: relative;
            width: 120px;
            height: 120px;
            flex-shrink: 0;
        }

        .avax-logo {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 2;
            filter: drop-shadow(0 0 30px rgba(232, 65, 66, 0.4));
        }

        .avax-logo-pulse {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            border: 2px solid rgba(232, 65, 66, 0.4);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: avaxPulse 3s ease-out infinite;
        }

        .avax-logo-pulse.delay {
            animation-delay: 1.5s;
        }

        @keyframes avaxPulse {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
            100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
        }

        .avax-hero-text .section-label {
            font-size: 0.9rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            display: block;
            margin-bottom: 0.75rem;
        }

        .avax-hero-text h2 {
            font-size: 3rem;
            font-weight: 700;
            color: #fff;
            line-height: 1.15;
        }

        /* Stats row */
        .avax-stats-row {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3rem;
            padding: 2rem 3rem;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 16px;
            margin-bottom: 3rem;
        }

        .avax-stat {
            text-align: center;
        }

        .avax-stat-value {
            display: block;
            font-size: 2.5rem;
            font-weight: 700;
            color: #E84142;
            font-family: 'Outfit', monospace;
            line-height: 1;
        }

        .avax-stat-label {
            font-size: 0.85rem;
            color: #71717a;
            margin-top: 0.5rem;
            display: block;
        }

        .avax-stat-divider {
            width: 1px;
            height: 50px;
            background: rgba(255, 255, 255, 0.1);
        }

        /* Bento grid */
        .avax-bento-grid {
            display: grid;
            grid-template-columns: 1.4fr 1fr;
            grid-template-rows: repeat(3, auto);
            gap: 1.25rem;
        }

        .avax-bento-card {
            padding: 2rem;
            border-radius: 20px;
            border: 1px solid rgba(232, 65, 66, 0.12);
            background: linear-gradient(145deg, rgba(232, 65, 66, 0.04) 0%, rgba(0, 0, 0, 0.5) 100%);
            position: relative;
            overflow: hidden;
            transition: border-color 0.2s, background 0.2s;
        }

        .avax-bento-card:hover {
            border-color: rgba(232, 65, 66, 0.25);
            background: linear-gradient(145deg, rgba(232, 65, 66, 0.08) 0%, rgba(0, 0, 0, 0.5) 100%);
        }

        .avax-card-large {
            grid-row: 1 / 4; /* Span all 3 rows */
            display: flex;
            flex-direction: column;
        }

        .avax-card-large .avax-card-visual {
            margin-top: auto; /* Push to bottom and fill remaining space */
            flex: 1;
            min-height: 120px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .avax-card-right {
            /* Right column cards */
        }

        .avax-card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1.5rem;
        }

        .avax-card-icon {
            color: #E84142;
            margin-bottom: 1rem;
        }

        .avax-card-tag {
            font-size: 0.7rem;
            letter-spacing: 1px;
            color: #71717a;
            background: rgba(255, 255, 255, 0.05);
            padding: 0.3rem 0.6rem;
            border-radius: 4px;
        }

        .avax-bento-card h3 {
            font-size: 1.4rem;
            font-weight: 600;
            color: #fff;
            margin-bottom: 0.75rem;
        }

        .avax-bento-card p {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #a1a1aa;
        }

        /* Subnet visual */
        .avax-card-visual {
            margin-top: 2rem;
            padding-top: 1.5rem;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .avax-visual-label {
            font-size: 0.75rem;
            letter-spacing: 1px;
            color: #71717a;
            text-transform: uppercase;
            display: block;
            margin-bottom: 1rem;
        }

        .subnet-diagram {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1.25rem 1.5rem;
            background: rgba(0, 0, 0, 0.35);
            border-radius: 12px;
            border: 1px solid rgba(232, 65, 66, 0.15);
            width: fit-content;
        }

        .subnet-node {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            background: #E84142;
            box-shadow: 0 0 20px rgba(232, 65, 66, 0.45);
            flex-shrink: 0;
        }

        .subnet-node.main {
            width: 36px;
            height: 36px;
            box-shadow: 0 0 25px rgba(232, 65, 66, 0.6);
        }

        .subnet-node.sub1, .subnet-node.sub2 {
            width: 20px;
            height: 20px;
            background: rgba(232, 65, 66, 0.75);
        }

        .subnet-node.sub3 {
            width: 16px;
            height: 16px;
            background: rgba(232, 65, 66, 0.5);
        }

        .subnet-line {
            width: 32px;
            height: 3px;
            background: linear-gradient(90deg, #E84142, rgba(232, 65, 66, 0.4));
            border-radius: 2px;
            flex-shrink: 0;
        }

        .subnet-line.short {
            width: 20px;
        }

        /* Finality demo */
        .finality-demo {
            margin-top: 1.5rem;
        }

        .finality-bar {
            height: 8px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            overflow: hidden;
        }

        .finality-fill {
            width: 85%;
            height: 100%;
            background: linear-gradient(90deg, #E84142, #f87171);
            border-radius: 4px;
            animation: fillBar 2s ease-out infinite;
        }

        @keyframes fillBar {
            0% { width: 0%; }
            60% { width: 85%; }
            100% { width: 85%; }
        }

        .finality-label {
            font-size: 0.8rem;
            color: #71717a;
            margin-top: 0.5rem;
            display: block;
        }

        /* Footer */
        .avax-section-footer {
            text-align: center;
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .avax-section-footer p {
            font-size: 0.9rem;
            color: #71717a;
        }

        .avax-section-footer strong {
            color: #E84142;
        }

        /* Responsive */
        @media (max-width: 900px) {
            .avax-hero-block {
                flex-direction: column;
                text-align: center;
            }

            .avax-logo-container {
                width: 80px;
                height: 80px;
            }

            .avax-stats-row {
                flex-wrap: wrap;
                gap: 1.5rem;
                padding: 1.5rem;
            }

            .avax-stat-value {
                font-size: 1.8rem;
            }

            .avax-stat-divider {
                display: none;
            }

            .avax-bento-grid {
                grid-template-columns: 1fr;
                grid-template-rows: auto;
            }

            .avax-card-large {
                grid-row: auto;
            }

            .avax-hero-text h2 {
                font-size: 2rem;
            }
        }
    </style>
    `;
};
