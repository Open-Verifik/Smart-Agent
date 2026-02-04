export const renderNavbar = () => {
    return `
    <header>
        <div class="logo">
            <img src="./verifik-logo.svg" alt="Verifik Smart Agent" width="152" height="36" fetchpriority="high" decoding="async" style="height: 24px; width: auto" />
        </div>
        <nav aria-label="Primary">
            <a href="#capabilities">Capabilities</a>
            <a href="#gateway">Gateway</a>
            <a href="#integration">Integration</a>
        </nav>
    </header>
    `;
};
