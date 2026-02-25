export const renderNavbar = () => {
    return `
    <header>
        <div class="logo">
            <img src="./verifik-logo.svg" alt="Verifik Smart Agent" width="152" height="36" fetchpriority="high" decoding="async" style="height: 24px; width: auto" />
        </div>
        <nav aria-label="Primary" id="main-nav">
            <a href="#vision">Problem</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#gateway">How it Works</a>
            <a href="#why-avalanche">Why Avalanche</a>
            <a href="#integration">Integration</a>
            <a href="#roadmap">Roadmap</a>
        </nav>
        <button class="mobile-menu-toggle" id="mobile-menu-btn" aria-label="Toggle navigation menu" aria-expanded="false">
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
        </button>
    </header>
    `;
};

export const initNavbar = () => {
    const btn = document.getElementById("mobile-menu-btn");
    const nav = document.getElementById("main-nav");
    if (!btn || !nav) return;

    btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!expanded));
        nav.classList.toggle("nav-open");
        btn.classList.toggle("active");
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("nav-open");
            btn.classList.remove("active");
            btn.setAttribute("aria-expanded", "false");
        });
    });
};
