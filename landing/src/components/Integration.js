export const renderIntegration = () => {
    return `
    <section id="integration" class="content-section">
        <div class="integration-header center-text">
            <span class="section-badge">INTERFACES</span>
            <h2>Consume the Trust Layer.</h2>
            <p class="subtitle">
                We provide native interfaces for every type of actor in the economy—from human developers to autonomous agents.
            </p>
        </div>

        <div class="feature-rows">
            <!-- 1. API Explorer (formerly Postman) -->
            <div class="feature-row explorer-row">
                <div class="feature-text">
                    <h3>Start in Seconds with API Explorer</h3>
                    <p>
                        Test our endpoints directly from your browser. Our intuitive API Explorer allows you to explore every capability, 
                        customize parameters, and see real-time responses with a single click.
                    </p>
                    <a href="https://x402-agent.verifik.co/postman" class="text-link">Explore API -></a>
                </div>
                <div class="feature-visual">
                    <div class="mini-ui api-explorer-ui">
                        <div class="explorer-sidebar">
                            <div class="sidebar-head">API Explorer</div>
                            <div class="sidebar-search">
                                <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="5" r="3"/><path d="m11 11-3-3"/></svg>
                                <span>Search endpoints...</span>
                            </div>
                            <div class="sidebar-section">
                                <div class="section-label">BUSINESS</div>
                                <div class="endpoint-item active"><span class="meth get">GET</span> Colombia - Company Reg...</div>
                                <div class="endpoint-item"><span class="meth get">GET</span> Colombia - Tax Informa...</div>
                                <div class="endpoint-item"><span class="meth get">GET</span> Colombia - Data Verific...</div>
                            </div>
                            <div class="sidebar-section">
                                <div class="section-label">CERTIFICATES</div>
                                <div class="endpoint-item"><span class="meth get">GET</span> Colombia - Labor Certi...</div>
                                <div class="endpoint-item"><span class="meth get">GET</span> Colombia - Health Reco...</div>
                            </div>
                        </div>
                        <div class="explorer-main">
                            <div class="country-tabs">
                                <span class="flag-icon active">🇨🇴</span>
                                <span class="flag-icon">🌎</span>
                                <span class="flag-icon">🇵🇪</span>
                                <span class="flag-icon">🇺🇸</span>
                                <span class="flag-icon">🇲🇽</span>
                                <span class="flag-icon">🇨🇱</span>
                                <span class="flag-icon">🇪🇨</span>
                            </div>
                            <div class="endpoint-header">
                                <h4>Colombia - Company Registration Verification</h4>
                                <p>Verify company registration through Colombia's RUES (Registro Único Empresarial y Social) system.</p>
                            </div>
                            <div class="request-bar">
                                <div class="url-box">
                                    <span class="meth get">GET</span>
                                    <span class="url-path">https://verifik.app/v2/co/rues</span>
                                </div>
                                <button class="send-btn-explorer">Send</button>
                            </div>
                            <div class="params-section">
                                <div class="params-tabs">
                                    <span class="p-tab active">Params</span>
                                    <span class="p-tab">Headers</span>
                                </div>
                                <div class="param-row">
                                    <div class="p-key">documentType</div>
                                    <div class="p-val">NIT</div>
                                    <div class="p-desc">Pick a value from [T]</div>
                                </div>
                                <div class="param-row">
                                    <div class="p-key">documentNumber</div>
                                    <div class="p-val-empty">Value</div>
                                    <div class="p-desc">Description</div>
                                </div>
                                <button class="add-param-btn">+ Add Param</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2. Smart Agent Chat (Looping History) -->
            <div class="feature-row reverse">
                <div class="feature-visual large-visual">
                     <div class="mini-ui chat-flow-ui" id="chat-ui-container">
                        <!-- Content will be injected and looped via JS -->
                     </div>
                </div>
                <div class="feature-text">
                    <h3>Smart Agent Interface</h3>
                    <p>
                        Experience the x402 flow natively. The agent identifies paid endpoints, 
                        requests authorization via wallet signature, and executes the verification on-chain.
                        A complete "Payment-for-Truth" loop without leaving the chat.
                    </p>
                    <a href="https://x402-agent.verifik.co/chat" class="text-link">Try the Agent -></a>
                </div>
            </div>

            <!-- 3. Direct API -->
            <div class="feature-row">
                <div class="feature-text">
                    <h3>Direct REST API</h3>
                    <p>
                        Built for scale. Integrate standard RESTful JSON APIs into your existing stack with zero friction.
                        Features include robust error handling (x402), granular permissions, and high-throughput limits.
                    </p>
                    <a href="https://docs.verifik.co" class="text-link">Read Documentation -></a>
                </div>
                <div class="feature-visual">
                    <div class="mini-ui term-ui">
                        <div class="term-header">
                            <div class="dots"><span></span><span></span><span></span></div>
                            <div class="title">index.ts</div>
                        </div>
                        <div class="code-content">
                            <div class="code-line"><span class="k">const</span> response = <span class="k">await</span> client.kyc.check({</div>
                            <div class="code-line indent"><span class="p">document:</span> <span class="s">'1067402672'</span>,</div>
                            <div class="code-line indent"><span class="p">country:</span> <span class="s">'CO'</span></div>
                            <div class="code-line">});</div>
                            <div class="code-line"><br/></div>
                            <div class="code-line c-comment">// Returns full background check</div>
                            <div class="code-line">console.<span class="f">log</span>(response.<span class="p">data</span>);</div>
                            <div class="cursor">|</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 4. SmartBatch -->
            <div class="feature-row reverse">
                <div class="feature-visual">
                    <div class="mini-ui batch-ui">
                        <div class="upload-zone">
                            <div class="file-card">
                                <span class="f-icon">📊</span>
                                <div class="f-info">
                                    <div class="f-name">database_users_2026.csv</div>
                                    <div class="f-size">120 MB • 2.5M Rows</div>
                                </div>
                            </div>
                        </div>
                        <div class="process-status">
                            <div class="p-header">
                                <span>Processing...</span>
                                <span class="p-perc">64%</span>
                            </div>
                            <div class="p-track">
                                <div class="p-bar"></div>
                            </div>
                            <div class="p-log">
                                <div>✓ Validated rows: 1,600,102</div>
                                <div>⚠ Flagged: 89</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="feature-text">
                    <h3>SmartBatch Processing</h3>
                    <p>
                        Need to validate millions of users?
                        Upload CSV or Excel files directly. 
                        Our agent swarm processes records in parallel, cleaning your database and 
 enrichment it with verified government data overnight.
                    </p>
                    <a href="#" class="text-link">Start a Batch Job -></a>
                </div>
            </div>
        </div>
    </section>

    <style>
        /* Shared */
        .feature-rows { display: flex; flex-direction: column; gap: 8rem; margin-top: 4rem; }
        .feature-row { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .feature-row.explorer-row { grid-template-columns: 0.6fr 1.4fr; gap: 6rem; }
        .feature-row.reverse { display: flex; flex-direction: row-reverse; } 
        .feature-visual { position: relative; }
        .feature-visual.large-visual { width: 100%; }
        .feature-text { display: flex; flex-direction: column; align-items: flex-start; gap: 1.5rem; }
        .feature-text h3 { font-size: 2.2rem; font-weight: 700; color: #fff; line-height: 1.1; }
        .feature-text p { font-size: 1.1rem; color: #a1a1aa; line-height: 1.6; }
        .text-link { color: #60a5fa; font-weight: 600; text-decoration: none; }
        .icon-box { width: 56px; height: 56px; border-radius: 14px; display: flex; align-items: center; justify-content: center; transform: rotate(-3deg); }
        .icon-box.orange { background: rgba(249, 115, 22, 0.1); color: #f97316; }
        .icon-box.blue { background: rgba(59, 130, 246, 0.1); color: #3b82f6; }
        .icon-box.green { background: rgba(34, 197, 94, 0.1); color: #22c55e; }
        .icon-box.purple { background: rgba(168, 85, 247, 0.1); color: #a855f7; }
        .center-text { text-align: center; max-width: 800px; margin: 0 auto 4rem auto; }
        .section-badge { display: inline-block; padding: 4px 12px; border-radius: 20px; background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); color: #60a5fa; font-size: 0.75rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 1rem; }
        .subtitle { font-size: 1.125rem; color: #94a3b8; line-height: 1.6; margin-top: 1rem; }
        
        @media (max-width: 900px) {
            .feature-row, .feature-row.reverse { display: flex; flex-direction: column-reverse; gap: 2rem; }
            .feature-visual { width: 100%; }
        }

        .mini-ui { background: #09090b; border: 1px solid #27272a; border-radius: 20px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5); }
        
        /* API Explorer UI */
        .api-explorer-ui {
            height: 500px;
            display: grid;
            grid-template-columns: 220px 1fr;
            background: #fff;
            color: #1e293b;
            font-family: 'Inter', sans-serif;
        }
        
        @media (max-width: 1100px) {
            .api-explorer-ui { grid-template-columns: 150px 1fr; }
            .explorer-response { display: none; }
        }

        .explorer-sidebar { background: #f8fafc; border-right: 1px solid #e2e8f0; padding: 16px; font-size: 0.8rem; overflow-y: auto; }
        .sidebar-head { font-weight: 800; color: #0f172a; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; }
        .sidebar-search { background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 6px 10px; display: flex; align-items: center; gap: 8px; color: #64748b; margin-bottom: 20px; }
        .section-label { font-weight: 700; color: #94a3b8; font-size: 0.7rem; margin-bottom: 8px; margin-top: 16px; }
        .endpoint-item { padding: 8px; border-radius: 4px; color: #475569; display: flex; align-items: center; gap: 6px; cursor: pointer; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .endpoint-item.active { background: #eff6ff; color: #1e40af; font-weight: 600; }
        .meth { font-weight: 800; font-size: 0.65rem; }
        .get { color: #22c55e; }

        .explorer-main { padding: 0 24px 32px 24px; overflow-y: auto; }
        .country-tabs { padding: 16px 0; display: flex; gap: 12px; border-bottom: 1px solid #f1f5f9; margin-bottom: 24px; }
        .flag-icon { font-size: 1.2rem; cursor: pointer; opacity: 0.5; }
        .flag-icon.active { opacity: 1; position: relative; }
        .flag-icon.active::after { content: ''; position: absolute; bottom: -18px; left: 0; width: 100%; height: 2px; background: #6366f1; }
        .endpoint-header h4 { font-size: 1.1rem; font-weight: 700; color: #0f172a; margin-bottom: 8px; }
        .endpoint-header p { font-size: 0.85rem; color: #64748b; margin-bottom: 20px; line-height: 1.4; }
        .request-bar { display: flex; gap: 12px; margin-bottom: 24px; height: 42px; }
        .url-box { flex-grow: 1; background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; display: flex; align-items: center; gap: 10px; padding: 0 16px; font-family: monospace; font-size: 0.85rem; }
        .url-path { color: #334155; }
        .send-btn-explorer { background: #3b82f6; color: #fff; border: none; border-radius: 8px; padding: 0 32px; font-weight: 800; cursor: pointer; text-transform: uppercase; font-size: 0.82rem; letter-spacing: 0.5px; transition: background 0.2s; }
        .send-btn-explorer:hover { background: #2563eb; }
        .params-section { margin-top: 8px; }
        .params-tabs { display: flex; gap: 30px; border-bottom: 2px solid #eff6ff; margin-bottom: 20px; }
        .p-tab { padding-bottom: 10px; font-size: 0.85rem; color: #94a3b8; font-weight: 700; cursor: pointer; }
        .p-tab.active { color: #6366f1; border-bottom: 2px solid #6366f1; margin-bottom: -2px; }
        .param-row { display: grid; grid-template-columns: 140px 140px 1fr; gap: 0; margin-bottom: -1px; font-size: 0.8rem; }
        .p-key, .p-val, .p-val-empty, .p-desc { 
            border: 1px solid #e2e8f0; 
            padding: 8px 12px; 
            display: flex; 
            align-items: center; 
            min-height: 38px;
            background: #fff;
        }
        .p-key { 
            font-weight: 700; 
            color: #475569; 
            background: #f8fafc;
            border-right: none;
            border-radius: 4px 0 0 4px;
        }
        .p-val, .p-val-empty {
            border-right: none;
        }
        .p-val { color: #1e293b; font-weight: 500; }
        .p-val-empty { color: #cbd5e1; }
        .p-desc { 
            color: #64748b; 
            font-size: 0.75rem;
            border-radius: 0 4px 4px 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .add-param-btn { 
            background: #fff; 
            border: 1px solid #e2e8f0; 
            border-radius: 6px; 
            padding: 8px 14px; 
            font-size: 0.7rem; 
            font-weight: 800; 
            color: #64748b; 
            cursor: pointer; 
            text-transform: uppercase; 
            letter-spacing: 0.5px; 
            transition: all 0.2s; 
            margin-top: 16px; 
        }
        .add-param-btn:hover { background: #f8fafc; border-color: #cbd5e1; color: #334155; }


        /* CHAT UI */
        .chat-flow-ui {
            height: 550px;
            display: flex; flex-direction: column;
            background: #0f172a; border: 1px solid #1e293b;
        }
        .chat-header {
            padding: 16px 20px; border-bottom: 1px solid #1e293b; background: #0f172a;
            display: flex; align-items: center; justify-content: space-between; z-index: 10;
        }
        .chat-avatar { width: 32px; height: 32px; background: #000; color: #fff; border-radius: 50%; display: grid; place-items: center; font-weight: bold; }
        .chat-title { font-size: 0.95rem; color: #f1f5f9; font-weight: 600; display: flex; align-items: center; gap: 10px; }
        .badge-proto { font-size: 0.7rem; background: #eff6ff; color: #3b82f6; padding: 2px 8px; border-radius: 4px; font-weight: 700; }
        .status-dot { width: 8px; height: 8px; background: #22c55e; border-radius: 50%; box-shadow: 0 0 10px #22c55e; }
        
        .chat-body-scroll {
            flex-grow: 1; padding: 24px;
            display: flex; flex-direction: column; gap: 24px;
            overflow-y: auto; position: relative;
            scroll-behavior: smooth;
        }
        
        /* Hide Scrollbar */
        .chat-body-scroll::-webkit-scrollbar { width: 6px; }
        .chat-body-scroll::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }

        /* Messages */
        .msg-container { display: flex; flex-direction: column; opacity: 0; animation: fadeSlideUp 0.5s ease-out forwards; height: auto; flex-shrink: 0; }
        .msg-row { display: flex; gap: 12px; width: 100%; }
        .user-row { justify-content: flex-end; }
        .agent-row { justify-content: flex-start; }

        /* Bubbles */
        .bubble { padding: 16px 20px; font-size: 0.95rem; line-height: 1.5; max-width: 80%; position: relative; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
        .user-bubble { color: #fff; border: 1px solid #1e293b; border-radius: 12px 12px 0 12px; background: #111827; }
        .avatar-user { width: 32px; height: 32px; background: #334155; border-radius: 50%; color: #fff; display: grid; place-items: center; margin-top: auto; font-size: 12px; }
        .white-bubble { background: #ffffff; color: #1e293b; border-radius: 12px 12px 12px 0; border: 1px solid #e2e8f0; width: 340px; }
        .avatar-sm { width: 32px; height: 32px; background: #000; color: #fff; border-radius: 50%; display: grid; place-items: center; margin-top: 6px; font-size: 12px; flex-shrink: 0; }

        /* Pay Card Design */
        .pay-card-inner { margin-top: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; }
        .pay-head { display: flex; align-items: center; gap: 8px; font-weight: 700; color: #0f172a; font-size: 0.9rem; margin-bottom: 8px; }
        .bolt { color: #eab308; }
        .pay-amt { font-size: 1.6rem; font-weight: 800; color: #0f172a; letter-spacing: -0.5px; }
        .pay-to { font-family: monospace; color: #64748b; font-size: 0.75rem; margin-bottom: 16px; background: #e2e8f0; padding: 4px 8px; border-radius: 4px; display: inline-block; }
        .pay-btn-glim { width: 100%; background: #6366f1; color: white; border: none; padding: 10px; border-radius: 6px; font-weight: 600; cursor: pointer; box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3); }

        /* Success Bubble */
        .success-bubble { background: #ffffff; width: 100%; max-width: 400px; border-radius: 8px; border: 1px solid #e2e8f0; padding: 0; overflow: hidden; }
        .s-head { background: #f0fdf4; padding: 12px 16px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #dcfce7; }
        .s-check { width: 20px; height: 20px; background: #22c55e; color: white; border-radius: 50%; display: grid; place-items: center; font-size: 12px; font-weight: 900; }
        .s-head strong { color: #166534; font-size: 0.9rem; }
        .badge-vka { background: #e2e8f0; color: #64748b; font-size: 0.7rem; font-weight: 700; padding: 2px 6px; border-radius: 4px; margin-left: auto; }
        .badge-conf { background: #dcfce7; color: #166534; font-size: 0.7rem; padding: 2px 8px; border-radius: 12px; font-weight: 600; border: 1px solid #bbf7d0; }
        .s-body { padding: 16px; display: flex; justify-content: space-between; align-items: center; }
        .amt-lg { font-size: 1.2rem; font-weight: 800; color: #0f172a; }
        .s-foot { padding: 10px 16px; background: #f8fafc; border-top: 1px solid #f1f5f9; display: flex; align-items: center; gap: 10px; font-size: 0.8rem; }
        .hash-txt { font-family: monospace; color: #64748b; }
        .view-link { margin-left: auto; color: #22c55e; text-decoration: none; font-weight: 700; font-size: 0.7rem; }

        /* Code Bubble */
        .code-bubble { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; width: 100%; padding: 16px; }
        .code-head { font-size: 0.85rem; color: #64748b; margin-bottom: 12px; }
        .code-raw { background: #f8fafc; padding: 12px; border-radius: 8px; font-family: 'Geist Mono', monospace; font-size: 0.85rem; color: #334155; line-height: 1.6; border: 1px solid #f1f5f9; }
        .chain-tag { margin-top: 12px; display: inline-flex; align-items: center; gap: 6px; background: #f0fdf4; color: #166534; padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; }

        /* Typing & Animation Delays */
        .typing-dots { background: #e2e8f0; padding: 12px 16px; border-radius: 12px 12px 12px 0; display: inline-flex; gap: 4px; align-items: center; height: 40px; }
        .typing-dots span { width: 6px; height: 6px; background: #64748b; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out; }
        .typing-dots span:nth-child(1) { animation-delay: -0.32s; }
        .typing-dots span:nth-child(2) { animation-delay: -0.16s; }
        @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
        @keyframes fadeSlideUp { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }

        /* Sequencing */
        .anim-delay-0 { animation-delay: 0.5s; }
        .anim-typing-1 { animation: fadeSlideUp 0.3s 1.5s forwards, collapseQuick 0.2s 2.8s forwards; display: flex; }
        .anim-delay-2 { animation-delay: 2.9s; }
        .anim-delay-5 { animation-delay: 5.5s; }
        .anim-typing-2 { animation: fadeSlideUp 0.3s 7.0s forwards, collapseQuick 0.2s 8.5s forwards; display: flex; }
        .anim-delay-8 { animation-delay: 8.6s; }

        @keyframes collapseQuick { to { opacity: 0; max-height: 0; margin: 0; padding: 0; transform: scale(0.9); display: none; } }

        /* Term/Batch Styles (kept) */
        .mini-ui.term-ui { background: #0f0f11; }
        .term-header { background: #18181b; padding: 10px 16px; display:flex; align-items:center; gap: 16px; border-bottom: 1px solid #27272a; }
        .dots { display:flex; gap:6px; } .dots span { width:10px; height:10px; border-radius:50%; background:#27272a; } 
        .dots span:nth-child(1) { background:#ef4444; } .dots span:nth-child(2) { background:#f59e0b; } .dots span:nth-child(3) { background:#10b981; } .title { font-family: monospace; font-size: 0.8rem; color: #71717a; }
        .code-content { padding: 20px; font-family: 'Fira Code', 'Geist Mono', monospace; font-size: 0.9rem; color: #e4e4e7; position: relative; }
        .code-line { line-height: 1.6; } .c-comment { color: #5c6370; font-style: italic; } .cursor { display: inline-block; width: 2px; height: 1.2em; background: #528bff; vertical-align: middle; animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        
        .batch-ui { padding: 24px; background: #0f0f11; }
        .upload-zone { border: 2px dashed #3f3f46; border-radius: 12px; padding: 20px; display: flex; justify-content: center; background: rgba(255,255,255,0.02); margin-bottom: 20px; }
        .file-card { display: flex; align-items: center; gap: 12px; background: #27272a; padding: 10px 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.2); animation: slideDown 0.5s ease-out; }
        .f-icon { font-size: 1.5rem; } .f-name { font-size: 0.9rem; font-weight: 500; color: #fff; } .f-size { font-size: 0.75rem; color: #a1a1aa; }
        .process-status { background: #18181b; padding: 16px; border-radius: 12px; border: 1px solid #27272a; }
        .p-track { height: 6px; background: #27272a; border-radius: 3px; overflow: hidden; margin-bottom: 12px; }
        .p-bar { height: 100%; width: 64%; background: linear-gradient(90deg, #a855f7, #3b82f6); border-radius: 3px; animation: progressGrow 3s ease-in-out infinite; }
        .p-log { font-family: monospace; font-size: 0.75rem; color: #a1a1aa; display: flex; flex-direction: column; gap: 4px; }
        @keyframes slideDown { from { opacity:0; transform: translateY(-10px); } to { opacity:1; transform: translateY(0); } }
        @keyframes progressGrow { 0% { width: 10%; } 50% { width: 70%; } 100% { width: 100%; } }
        .k { color: #c678dd; } .s { color: #98c379; } .p { color: #e06c75; } .f { color: #61afef; }
    </style>
    `;
};

const getChatTemplate = () => `
    <div class="chat-header">
        <div class="chat-avatar">AI</div>
        <div class="chat-title">
        Verifik Agent <span class="badge-proto">x402</span>
        <span class="status-dot"></span>
        </div>
    </div>
    <div class="chat-body-scroll" id="chat-scroller">
        
        <!-- 1. User Message (0s) -->
        <div class="msg-container anim-delay-0">
            <div class="msg-row user-row">
                <div class="bubble user-bubble">
                    Can you please find the identity of this ID from Colombia CC: 1067402672
                </div>
                <div class="avatar-user">U</div>
            </div>
        </div>

        <!-- 2. Typing Indicator (1s -> 2s) -->
        <div class="msg-container anim-typing-1">
            <div class="msg-row agent-row">
                <div class="avatar-sm">AI</div>
                <div class="typing-dots"><span></span><span></span><span></span></div>
            </div>
        </div>

        <!-- 3. Payment Request (2s) -->
        <div class="msg-container anim-delay-2">
            <div class="msg-row agent-row">
                <div class="avatar-sm">AI</div>
                <div class="bubble white-bubble">
                    I need to perform a paid action. Please confirm payment.
                    
                    <div class="pay-card-inner">
                        <div class="pay-head">
                            <span class="bolt">⚡</span> Payment Required
                        </div>
                        <div class="pay-amt">0.01965 AVAX</div>
                        <div class="pay-to">To: 0x5e3C...DfCD</div>
                        <button class="pay-btn-glim">Pay & Proceed</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- 4. Success (5s) -->
        <div class="msg-container anim-delay-5">
            <div class="msg-row agent-row">
                <div class="avatar-sm">AI</div>
                <div class="bubble success-bubble">
                    <div class="s-head">
                        <div class="s-check">✓</div>
                        <strong>Payment Confirmation</strong>
                        <span class="badge-vka">VKA</span>
                        <span class="badge-conf">Confirmed</span>
                    </div>
                    <div class="s-body">
                        Payment transaction submitted successfully.
                        <div class="amt-lg">0.2</div>
                    </div>
                    <div class="s-foot">
                        <div class="hash-icon">📄</div>
                        <div class="hash-txt">0xd386de57...83c8</div>
                        <a href="#" class="view-link">VIEW ON SNOWTRACE ↗</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- 5. Typing Indicator 2 (7.5s) -->
        <div class="msg-container anim-typing-2">
            <div class="msg-row agent-row">
                <div class="avatar-sm">AI</div>
                <div class="typing-dots"><span></span><span></span><span></span></div>
            </div>
        </div>

        <!-- 6. Result (8.5s) -->
            <div class="msg-container anim-delay-8">
            <div class="msg-row agent-row">
                <div class="avatar-sm">AI</div>
                <div class="bubble code-bubble">
                    <div class="code-head">Tool executed successfully.</div>
                    <div class="code-raw">
{
"data": {
"firstName": "JAVIER",
"lastName": "MONTES",
"status": "VALID"
},
"proof": "0x8d5f...3b5f9"
}
                    </div>
                    <div class="chain-tag">
                        <span>✓</span> Validated On-Chain
                    </div>
                </div>
            </div>
        </div>
        
        <div style="height: 20px;"></div>
    </div>
`;

export const initIntegration = () => {
    const container = document.getElementById("chat-ui-container");
    if (!container) return;

    const startCycle = () => {
        container.innerHTML = getChatTemplate();

        // Reset cycle after 15 seconds (total animation is ~10s + 5s pause)
        setTimeout(() => {
            startCycle();
        }, 15000);
    };

    startCycle();
};
