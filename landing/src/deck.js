import "./styles/deck.css";

const slides = [
    // SLIDE 1 — Hook
    {
        id: "hook",
        html: `
            <div class="slide slide-hook">
                <div class="slide-badge">AVALANCHE BUILD GAMES 2026</div>
                <h1>By the end of this year,<br/>most API traffic will come from<br/><span class="highlight">AI agents</span> — not humans.</h1>
                <p class="slide-sub">They'll transact, sign contracts, access sensitive data.<br/>But nobody knows <strong>who's behind them</strong>.</p>
                <div class="slide-footer-hint">Press <kbd>→</kbd> or click to continue</div>
            </div>
        `,
    },

    // SLIDE 2 — The Problem
    {
        id: "problem",
        html: `
            <div class="slide slide-problem">
                <div class="slide-label">THE PROBLEM</div>
                <h2>The agentic economy is built on <span class="highlight-red">blind faith</span>.</h2>

                <div class="threat-stack">
                    <div class="threat-row">
                        <div class="threat-severity critical">CRITICAL</div>
                        <div class="threat-body">
                            <div class="threat-title">Identity Fabrication at Scale</div>
                            <div class="threat-detail">Any agent can claim any identity. One bad actor spins up 10,000 agents in minutes. No registry, no accountability, no way to trace back to a human. Sybil attacks become trivial.</div>
                        </div>
                    </div>
                    <div class="threat-row">
                        <div class="threat-severity high">HIGH</div>
                        <div class="threat-body">
                            <div class="threat-title">Invisible Operators</div>
                            <div class="threat-detail">An agent calls your API, pays with crypto, extracts sensitive data. Who sent it? A legitimate company? A sanctioned entity? A bot farm? In a trustless environment, you cannot tell.</div>
                        </div>
                    </div>
                    <div class="threat-row">
                        <div class="threat-severity medium">ELEVATED</div>
                        <div class="threat-body">
                            <div class="threat-title">Compliance Vacuum</div>
                            <div class="threat-detail">Regulators require KYC/AML. Agents have neither. Every unverified transaction is a liability. The bigger the autonomous economy grows, the larger the exposure.</div>
                        </div>
                    </div>
                </div>

                <div class="threat-footer">
                    <span class="threat-stat">By EOY 2026, majority of API traffic = autonomous agents</span>
                    <span class="threat-divider">/</span>
                    <span class="threat-stat">Zero standard for agent identity verification exists today</span>
                </div>
            </div>
        `,
    },

    // SLIDE 3 — Meet Verifik
    {
        id: "solution",
        html: `
            <div class="slide slide-solution">
                <div class="slide-label">THE SOLUTION</div>
                <div class="solution-header">
                    <img src="./verifik-logo.svg" alt="Verifik" class="deck-logo" />
                    <h2>The Trust Layer for AI Agents</h2>
                </div>
                <div class="product-grid">
                    <div class="product-card">
                        <div class="product-name">smartCHECK</div>
                        <p>100+ API endpoints across 20+ countries. Verify people, companies, vehicles, sanctions.</p>
                    </div>
                    <div class="product-card">
                        <div class="product-name">smartENROLL</div>
                        <p>KYC/KYB onboarding with document verification, biometrics, and AML checks.</p>
                    </div>
                    <div class="product-card">
                        <div class="product-name">smartACCESS</div>
                        <p>Passwordless authentication via OTP. Frictionless login for users and agents.</p>
                    </div>
                    <div class="product-card">
                        <div class="product-name">smartBATCH</div>
                        <p>Bulk validation of millions of records. CSV/Excel upload, parallel processing.</p>
                    </div>
                </div>
                <div class="solution-stat-row">
                    <div class="mini-stat"><span class="stat-val">14+</span><span class="stat-lbl">Gov Sources</span></div>
                    <div class="mini-stat"><span class="stat-val">100+</span><span class="stat-lbl">Endpoints</span></div>
                    <div class="mini-stat"><span class="stat-val">20+</span><span class="stat-lbl">Countries</span></div>
                    <div class="mini-stat"><span class="stat-val">&lt;1s</span><span class="stat-lbl">Response</span></div>
                </div>
            </div>
        `,
    },

    // SLIDE 4 — How x402 Works
    {
        id: "x402",
        html: `
            <div class="slide slide-x402">
                <div class="slide-label">HOW IT WORKS</div>
                <h2>The x402 Payment Protocol</h2>
                <div class="protocol-flow">
                    <div class="proto-node">
                        <div class="proto-num">1</div>
                        <div class="proto-label">REQUEST</div>
                        <div class="proto-code">
                            <span class="proto-method">GET</span> /v2/co/cedula
                        </div>
                    </div>
                    <div class="proto-connector">
                        <svg width="48" height="16" viewBox="0 0 48 16"><path d="M0 8h40M36 3l6 5-6 5" stroke="#6366f1" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>
                    </div>
                    <div class="proto-node proto-402">
                        <div class="proto-num">2</div>
                        <div class="proto-label">RESPONSE</div>
                        <div class="proto-code">
                            <span class="proto-status">402</span> Payment Required
                        </div>
                    </div>
                    <div class="proto-connector">
                        <svg width="48" height="16" viewBox="0 0 48 16"><path d="M0 8h40M36 3l6 5-6 5" stroke="#6366f1" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>
                    </div>
                    <div class="proto-node">
                        <div class="proto-num">3</div>
                        <div class="proto-label">PAY ON-CHAIN</div>
                        <div class="proto-code">
                            <span class="proto-val">0.02</span> AVAX <span class="proto-to">to 0x5e3C...fCD</span>
                        </div>
                    </div>
                    <div class="proto-connector">
                        <svg width="48" height="16" viewBox="0 0 48 16"><path d="M0 8h40M36 3l6 5-6 5" stroke="#4ade80" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>
                    </div>
                    <div class="proto-node proto-success">
                        <div class="proto-num">4</div>
                        <div class="proto-label">DATA RELEASED</div>
                        <div class="proto-code">
                            <span class="proto-ok">200</span> { "firstName": "JAVIER", "status": "VALID" }
                        </div>
                    </div>
                </div>
                <div class="x402-highlights">
                    <span>No API keys</span>
                    <span>No credit cards</span>
                    <span>No middlemen</span>
                    <span>Just pay and verify</span>
                </div>
            </div>
        `,
    },

    // SLIDE 5 — Why Avalanche
    {
        id: "avalanche",
        html: `
            <div class="slide slide-avalanche">
                <div class="slide-label">WHY AVALANCHE</div>
                <h2>Built for the Speed of Agents</h2>
                <div class="avax-grid">
                    <div class="avax-card">
                        <div class="avax-val">&lt;1s</div>
                        <div class="avax-lbl">Finality</div>
                        <p>Agents don't wait. Sub-second confirmation means real-time verification.</p>
                    </div>
                    <div class="avax-card">
                        <div class="avax-val">$0.02</div>
                        <div class="avax-lbl">Avg Tx Cost</div>
                        <p>Micropayment-friendly. Verification costs cents, not dollars.</p>
                    </div>
                    <div class="avax-card">
                        <div class="avax-val">4,500</div>
                        <div class="avax-lbl">TPS</div>
                        <p>High throughput for millions of concurrent agent verifications.</p>
                    </div>
                    <div class="avax-card">
                        <div class="avax-val">∞</div>
                        <div class="avax-lbl">Subnet Scale</div>
                        <p>Dedicated Identity Subnet as the trust layer grows.</p>
                    </div>
                </div>
            </div>
        `,
    },

    // SLIDE 6 — Traction
    {
        id: "traction",
        html: `
            <div class="slide slide-traction">
                <div class="orbit-field">
                    <div class="orbit-logo" style="--dur: 6s;  --delay: 0s;"><img src="./customers/mercado_libre.png" alt="Mercado Libre" /></div>
                    <div class="orbit-logo" style="--dur: 7s;  --delay: -1s;"><img src="./customers/LSE.png" alt="London Stock Exchange" /></div>
                    <div class="orbit-logo" style="--dur: 5s;  --delay: -2s;"><img src="./customers/Autonal.png" alt="Autonal" /></div>
                    <div class="orbit-logo" style="--dur: 8s;  --delay: -0.5s;"><img src="./customers/aleluya.png" alt="Aleluya" /></div>
                    <div class="orbit-logo" style="--dur: 6.5s;--delay: -3s;"><img src="./customers/huom.png" alt="HUOM" /></div>
                    <div class="orbit-logo" style="--dur: 7.5s;--delay: -1.5s;"><img src="./customers/Renti.png" alt="Renti" /></div>
                    <div class="orbit-logo" style="--dur: 5.5s;--delay: -2.5s;"><img src="./customers/tennis.png" alt="Tennis" /></div>
                    <div class="orbit-logo" style="--dur: 6s;  --delay: -0.8s;"><img src="./customers/juztp.png" alt="Juzto" /></div>
                    <div class="orbit-logo" style="--dur: 7s;  --delay: -3.5s;"><img src="./customers/Supre.png" alt="Supre" /></div>
                    <div class="orbit-logo" style="--dur: 5s;  --delay: -1.2s;"><img src="./customers/jardines-del-renacer.png" alt="Jardines del Renacer" /></div>
                    <div class="orbit-logo" style="--dur: 6s;  --delay: -2s;"><img src="./customers/lexin.png" alt="Lexin" /></div>
                    <div class="orbit-logo" style="--dur: 7.5s;--delay: -0.3s;"><img src="./customers/webdox.png" alt="Webdox" /></div>
                    <div class="orbit-logo" style="--dur: 5.5s;--delay: -1.8s;"><img src="./customers/didit.png" alt="Didit" /></div>
                    <div class="orbit-logo" style="--dur: 8s;  --delay: -2.8s;"><img src="./customers/idmerit.png" alt="IDMerit" /></div>
                    <div class="orbit-logo" style="--dur: 6.5s;--delay: -0.6s;"><img src="./customers/blue-dot.png" alt="BlueDot" /></div>
                    <div class="orbit-logo" style="--dur: 5s;  --delay: -3.2s;"><img src="./customers/green-star.png" alt="GreenStar" /></div>
                </div>

                <div class="traction-center">
                    <div class="slide-label">TRACTION</div>
                    <h2>This isn't a concept —<br/>it's <span class="highlight">live</span>.</h2>
                    <div class="traction-stats-inline">
                        <div class="t-stat">
                            <span class="t-val">23M+</span>
                            <span class="t-lbl">Identities</span>
                        </div>
                        <div class="t-divider"></div>
                        <div class="t-stat">
                            <span class="t-val">45</span>
                            <span class="t-lbl">Clients</span>
                        </div>
                        <div class="t-divider"></div>
                        <div class="t-stat">
                            <span class="t-val">$400</span>
                            <span class="t-lbl">Avg Ticket</span>
                        </div>
                        <div class="t-divider"></div>
                        <div class="t-stat">
                            <span class="t-val">100+</span>
                            <span class="t-lbl">Endpoints</span>
                        </div>
                        <div class="t-divider"></div>
                        <div class="t-stat">
                            <span class="t-val">20+</span>
                            <span class="t-lbl">Countries</span>
                        </div>
                    </div>
                    <div class="traction-note">
                        Live on Avalanche Mainnet &middot; ERC-8004 &middot; VK Token
                    </div>
                </div>
            </div>
        `,
    },

    // SLIDE 7 — Vision & Roadmap
    {
        id: "vision",
        html: `
            <div class="slide slide-vision">
                <div class="slide-label">VISION & ROADMAP</div>
                <h2>The Future of Agent Trust</h2>
                <div class="vision-pillars">
                    <div class="vision-pillar">
                        <div class="pillar-q">Q1 2026</div>
                        <h3>Foundation</h3>
                        <ul>
                            <li>Mainnet deployment</li>
                            <li>VK Token launch</li>
                            <li>Smart Agent Chat</li>
                            <li>Build Games entry</li>
                        </ul>
                    </div>
                    <div class="vision-pillar">
                        <div class="pillar-q">Q2 2026</div>
                        <h3>Compliance</h3>
                        <ul>
                            <li>T-REX Protocol (ERC-3643)</li>
                            <li>SDK 2.0 (Python + Go)</li>
                            <li>Security audits</li>
                            <li>Asian expansion</li>
                        </ul>
                    </div>
                    <div class="vision-pillar">
                        <div class="pillar-q">Q3 2026</div>
                        <h3>Ecosystem</h3>
                        <ul>
                            <li>User rewards (AVAX/VK)</li>
                            <li>DeFi integrations</li>
                            <li>Identity Subnet</li>
                            <li>Data marketplace</li>
                        </ul>
                    </div>
                    <div class="vision-pillar">
                        <div class="pillar-q">Q4 2026</div>
                        <h3>Decentralization</h3>
                        <ul>
                            <li>DAO governance</li>
                            <li>EU/eIDAS pilots</li>
                            <li>AI fraud detection</li>
                            <li>Cross-chain bridge</li>
                        </ul>
                    </div>
                </div>
                <div class="vision-statement">
                    Every AI agent gets a verifiable on-chain identity linked to a real human.
                </div>
            </div>
        `,
    },

    // SLIDE 8 — Close
    {
        id: "close",
        html: `
            <div class="slide slide-close">
                <img src="./verifik-logo.svg" alt="Verifik" class="close-logo" />
                <h1>The Trust Layer<br/>for AI Agents</h1>
                <p class="tagline">Verify the humans. Trust the machines.</p>
                <div class="close-protocols">
                    <span class="close-pill">x402 Payment Protocol</span>
                    <span class="close-pill">ERC-8004 Agent Standard</span>
                    <span class="close-pill">T-REX (ERC-3643)</span>
                </div>
                <div class="close-built">Built on Avalanche</div>
                <div class="close-links">
                    <a href="https://x402-agent.verifik.co" target="_blank" rel="noopener noreferrer">x402-agent.verifik.co</a>
                    <a href="https://docs.verifik.co" target="_blank" rel="noopener noreferrer">docs.verifik.co</a>
                </div>
            </div>
        `,
    },
];

let currentSlide = 0;

const renderSlide = (index) => {
    const app = document.getElementById("deck-app");
    app.innerHTML = `
        <div class="deck-progress">
            ${slides.map((_, i) => `<div class="progress-dot ${i === index ? "active" : ""} ${i < index ? "done" : ""}"></div>`).join("")}
        </div>
        <div class="deck-slide-wrapper" key="${index}">
            ${slides[index].html}
        </div>
        <div class="deck-nav">
            <span class="slide-counter">${index + 1} / ${slides.length}</span>
        </div>
    `;
};

const goTo = (index) => {
    if (index < 0 || index >= slides.length) return;
    currentSlide = index;
    renderSlide(currentSlide);
};

const next = () => goTo(currentSlide + 1);
const prev = () => goTo(currentSlide - 1);

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
    }
    if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
    }
    if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
    }
    if (e.key === "End") {
        e.preventDefault();
        goTo(slides.length - 1);
    }
});

document.addEventListener("click", (e) => {
    if (e.target.closest("a")) return;
    if (e.target.closest("button")) return;
    next();
});

renderSlide(0);
