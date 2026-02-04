import { CompanyParticles } from "./company-particles.js";
import "./styles/architecture.css";
import "./styles/base.css";
import "./styles/capabilities.css";
import "./styles/customers.css";
import "./styles/footer.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/integration.css";
import "./styles/roadmap.css";

// Components
import { renderArchitecture } from "./components/Architecture.js";
import { renderCapabilities } from "./components/Capabilities.js";
import { renderCustomers } from "./components/Customers.js";
import { renderFooter } from "./components/Footer.js";
import { renderHero } from "./components/Hero.js";
import { initIntegration, renderIntegration } from "./components/Integration.js";
import { renderNavbar } from "./components/Navbar.js";
import { renderProtocol } from "./components/Protocol.js";
import { renderRoadmap } from "./components/Roadmap.js";

// Inject HTML
document.getElementById("navbar-container").innerHTML = renderNavbar();
document.getElementById("hero-container").innerHTML = renderHero();
document.getElementById("customers-container").innerHTML = renderCustomers();
document.getElementById("capabilities-container").innerHTML = renderCapabilities();
document.getElementById("architecture-container").innerHTML = renderArchitecture();
document.getElementById("protocol-container").innerHTML = renderProtocol();
document.getElementById("integration-container").innerHTML = renderIntegration();
initIntegration(); // Initialize chat scroll
document.getElementById("roadmap-container").innerHTML = renderRoadmap();
document.getElementById("footer-container").innerHTML = renderFooter();

// Initialize Planet 3D (dynamic import so Three.js is code-split and loaded on demand)
import("./components/Planet.js").then(({ initPlanet }) => initPlanet());

// Initialize Company Particles (2D Canvas) - Must run AFTER injection
if (document.getElementById("particles-companies")) {
    new CompanyParticles("particles-companies");
}
