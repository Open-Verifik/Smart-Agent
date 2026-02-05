export const renderVision = () => {
    return `
    <section id="vision" class="vision-section" aria-labelledby="vision-heading">
        <div class="vision-header">
            <span class="section-label" style="color: #71717a">WHY IT MATTERS</span>
            <h2 id="vision-heading">The agent economy runs on trust.</h2>
        </div>

        <div class="vision-arc">
            <div class="vision-block stakes-block">
                <div class="vision-block-icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                </div>
                <h3>Without verification</h3>
                <p>Any agent can claim to be anyone. Sybil attacks, impersonation, and fraud scale with the economy. You can’t know if the “company” on the other side is real, or if the “human” is a bot. The more valuable the autonomous economy becomes, the more dangerous unverified agents are.</p>
            </div>

            <div class="vision-connector" aria-hidden="true">
                <span class="vision-arrow">→</span>
            </div>

            <div class="vision-block promise-block">
                <div class="vision-block-icon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                </div>
                <h3>The Trust Layer</h3>
                <p>Verify the human or company behind every agent. Official, authorized API access to government databases; cryptographic proof; pay-per-verification. One standard for the autonomous economy: if an agent is verified, you know who stands behind it.</p>
            </div>
        </div>
    </section>

    <style>
        .vision-section {
            padding: 8rem 8vw;
            background: #050505;
            position: relative;
            z-index: 10;
        }

        .vision-header {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 4rem;
        }

        .vision-header .section-label {
            font-size: 0.9rem;
            letter-spacing: 2px;
            text-transform: uppercase;
            display: block;
            margin-bottom: 1rem;
        }

        .vision-header h2 {
            font-size: 2.5rem;
            font-weight: 700;
            color: #fff;
            line-height: 1.2;
        }

        .vision-arc {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 2rem;
            align-items: stretch;
            max-width: 1100px;
            margin: 0 auto;
        }

        .vision-block {
            padding: 2.5rem;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            flex-direction: column;
        }

        .stakes-block {
            background: linear-gradient(145deg, rgba(239, 68, 68, 0.06) 0%, rgba(0, 0, 0, 0.4) 100%);
            border-color: rgba(239, 68, 68, 0.15);
        }

        .stakes-block .vision-block-icon {
            color: #f87171;
        }

        .promise-block {
            background: linear-gradient(145deg, rgba(74, 222, 128, 0.06) 0%, rgba(0, 0, 0, 0.4) 100%);
            border-color: rgba(74, 222, 128, 0.2);
        }

        .promise-block .vision-block-icon {
            color: #4ade80;
        }

        .vision-block-icon {
            margin-bottom: 1.25rem;
        }

        .vision-block h3 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #fff;
            margin-bottom: 1rem;
        }

        .vision-block p {
            font-size: 1.05rem;
            line-height: 1.7;
            color: #a1a1aa;
        }

        .vision-connector {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .vision-arrow {
            font-size: 2rem;
            color: #52525b;
            font-weight: 300;
        }

        @media (max-width: 768px) {
            .vision-arc {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }

            .vision-connector {
                transform: rotate(90deg);
            }

            .vision-header h2 {
                font-size: 2rem;
            }
        }
    </style>
    `;
};
