import "./styles.css";
import { COPY, LINKS, META, VIDEOS } from "./i18n.js";
import { ICONS } from "./icons.js";
import { renderA } from "./pageA.js";
import "./a.css";

const VARIANT_COOKIE = "ha_variant";
const LANG_KEY = "ha_lang";
const VARIANTS = ["a", "b"];

/* ---------- storage helpers (never let storage errors break the page) ---------- */

function readCookie(name) {
	try {
		const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
		return match ? decodeURIComponent(match[1]) : null;
	} catch {
		return null;
	}
}

function writeCookie(name, value, days) {
	try {
		const expires = new Date(Date.now() + days * 864e5).toUTCString();
		document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
	} catch {
		/* ignore */
	}
}

function readStorage(key) {
	try {
		return window.localStorage.getItem(key);
	} catch {
		return null;
	}
}

function writeStorage(key, value) {
	try {
		window.localStorage.setItem(key, value);
	} catch {
		/* ignore */
	}
}

/* ---------- A/B variant ---------- */

/**
 * Resolves the A/B variant: ?v=a|b, then /a or /b, then the sticky cookie, then a 50/50 draw.
 * Forced variants (query or path) are not written to the cookie, so QA links don't skew the split.
 */
function resolveVariant() {
	const params = new URLSearchParams(window.location.search);
	const fromQuery = (params.get("v") || params.get("variant") || "").toLowerCase();
	if (VARIANTS.includes(fromQuery)) return { variant: fromQuery, forced: true };

	const fromPath = window.location.pathname.replace(/\/+$/, "").split("/").pop()?.toLowerCase();
	if (VARIANTS.includes(fromPath)) return { variant: fromPath, forced: true };

	const fromCookie = readCookie(VARIANT_COOKIE);
	if (VARIANTS.includes(fromCookie)) return { variant: fromCookie, forced: false };

	const drawn = Math.random() < 0.5 ? "a" : "b";
	writeCookie(VARIANT_COOKIE, drawn, 90);
	return { variant: drawn, forced: false };
}

/* ---------- language ---------- */

function resolveLang() {
	const params = new URLSearchParams(window.location.search);
	const fromQuery = (params.get("lang") || "").toLowerCase();
	if (fromQuery === "es" || fromQuery === "en") return fromQuery;

	const firstSegment = window.location.pathname.split("/").filter(Boolean)[0];
	if (firstSegment === "es" || firstSegment === "en") return firstSegment;

	const stored = readStorage(LANG_KEY);
	if (stored === "es" || stored === "en") return stored;

	const browser = (navigator.languages?.[0] || navigator.language || "en").toLowerCase();
	return browser.startsWith("es") ? "es" : "en";
}

/* ---------- analytics hook (GTM / GA4 if present) ---------- */

function track(event, data = {}) {
	const payload = { event, ...data, ha_variant: state.variant, ha_lang: state.lang };
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push(payload);
	if (typeof window.gtag === "function") window.gtag("event", event, payload);
}

/* ---------- rendering ---------- */

const state = { ...resolveVariant(), lang: resolveLang() };

const esc = (value) =>
	String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function navbar(t, links) {
	return `
	<header class="nav" id="top">
		<div class="container nav__inner">
			<a class="logo" href="#top" aria-label="HumanAuthn">${ICONS.logo}<span>Human<span class="logo__accent">Authn</span></span></a>
			<nav class="nav__links" aria-label="Main">
				<a href="#why">${esc(t.nav.product)}</a>
				<a href="#how">${esc(t.nav.how)}</a>
				<a href="#use-cases">${esc(t.nav.useCases)}</a>
				<a href="#developers">${esc(t.nav.developers)}</a>
				<a href="#faq">${esc(t.nav.faq)}</a>
			</nav>
			<div class="nav__actions">
				<div class="lang" role="group" aria-label="${esc(t.nav.langLabel)}">
					${ICONS.globe}
					<button type="button" class="lang__btn${state.lang === "es" ? " is-active" : ""}" data-lang="es" aria-pressed="${state.lang === "es"}">ES</button>
					<button type="button" class="lang__btn${state.lang === "en" ? " is-active" : ""}" data-lang="en" aria-pressed="${state.lang === "en"}">EN</button>
				</div>
				<a class="btn btn--ghost btn--sm hide-sm" href="${links.login}" data-track="login">${esc(t.nav.login)}</a>
				<a class="btn btn--primary btn--sm" href="${links.trial}" data-track="free_trial_nav">${esc(t.nav.trial)}</a>
				<button type="button" class="nav__burger" aria-label="${esc(t.nav.menu)}" aria-expanded="false" data-menu>${ICONS.menu}</button>
			</div>
		</div>
		<div class="nav__mobile" data-mobile-menu hidden>
			<a href="#why">${esc(t.nav.product)}</a>
			<a href="#how">${esc(t.nav.how)}</a>
			<a href="#use-cases">${esc(t.nav.useCases)}</a>
			<a href="#developers">${esc(t.nav.developers)}</a>
			<a href="#faq">${esc(t.nav.faq)}</a>
			<a href="${links.login}" data-track="login">${esc(t.nav.login)}</a>
		</div>
	</header>`;
}

function hero(t, links) {
	const h = t.hero[state.variant];
	return `
	<section class="hero hero--${state.variant}">
		<div class="hero__glow" aria-hidden="true"></div>
		<div class="hero__dots" aria-hidden="true"></div>
		<div class="container hero__inner">
			<div class="hero__avatar hero__avatar--left" aria-hidden="true">${ICONS.avatarA}</div>
			<div class="hero__avatar hero__avatar--right" aria-hidden="true">${ICONS.avatarB}</div>
			<p class="pill"><span class="pill__new">${esc(h.badgeNew)}</span>${ICONS.arrow}<span>${esc(h.badge)}</span></p>
			<h1 class="hero__title"><span>${esc(h.title1)}</span><span>${esc(h.title2)}</span></h1>
			<p class="hero__subtitle">${esc(h.subtitle)}</p>
			<div class="hero__ctas">
				<button type="button" class="btn btn--primary btn--lg" data-open-video data-track="see_how_it_works">${esc(t.hero.ctaVideo)} ${ICONS.circleChevron}</button>
				<a class="btn btn--dark btn--lg" href="${links.demo}" data-track="book_demo_hero">${esc(t.hero.ctaDemo)} ${ICONS.circleChevron}</a>
			</div>
		</div>
		<div class="container stats">
			${t.stats.map((s) => `<div class="stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join("")}
		</div>
	</section>`;
}

function why(t) {
	return `
	<section class="section" id="why">
		<div class="container">
			<header class="section__head">
				<p class="eyebrow">${esc(t.why.eyebrow)}</p>
				<h2>${esc(t.why.title)}</h2>
				<p class="section__lead">${esc(t.why.subtitle)}</p>
			</header>
			<div class="grid grid--4">
				${t.why.cards
					.map(
						(c) => `
					<article class="card">
						<span class="card__icon">${ICONS[c.icon]}</span>
						<h3>${esc(c.title)}</h3>
						<p>${esc(c.body)}</p>
					</article>`,
					)
					.join("")}
			</div>
		</div>
	</section>`;
}

function how(t) {
	return `
	<section class="section section--dark" id="how">
		<div class="hero__glow hero__glow--soft" aria-hidden="true"></div>
		<div class="container how">
			<div>
				<p class="eyebrow eyebrow--light">${esc(t.how.eyebrow)}</p>
				<h2>${esc(t.how.title)}</h2>
				<ol class="steps">
					${t.how.steps
						.map(
							(s, i) => `
						<li class="step">
							<span class="step__num">${i + 1}</span>
							<div><h3>${esc(s.title)}</h3><p>${esc(s.body)}</p></div>
						</li>`,
						)
						.join("")}
				</ol>
			</div>
			<button type="button" class="video-card" data-open-video data-track="see_how_it_works_section" aria-label="${esc(t.how.play)}">
				<img src="https://i.ytimg.com/vi/${videoId()}/hqdefault.jpg" alt="${esc(t.how.videoTitle)}" loading="lazy" />
				<span class="video-card__play">${ICONS.play}</span>
				<span class="video-card__label">${esc(t.how.videoTitle)}</span>
			</button>
		</div>
	</section>`;
}

function useCases(t) {
	return `
	<section class="section" id="use-cases">
		<div class="container">
			<header class="section__head">
				<p class="eyebrow">${esc(t.useCases.eyebrow)}</p>
				<h2>${esc(t.useCases.title)}</h2>
			</header>
			<div class="grid grid--3">
				${t.useCases.items
					.map(
						(u) => `
					<article class="usecase">
						<h3>${esc(u.title)}</h3>
						<p>${esc(u.body)}</p>
					</article>`,
					)
					.join("")}
			</div>
		</div>
	</section>`;
}

function developers(t, links) {
	return `
	<section class="section section--tint" id="developers">
		<div class="container dev">
			<div>
				<p class="eyebrow">${esc(t.dev.eyebrow)}</p>
				<h2>${esc(t.dev.title)}</h2>
				<p class="section__lead">${esc(t.dev.body)}</p>
				<ul class="checks">${t.dev.bullets.map((b) => `<li>${ICONS.check}<span>${esc(b)}</span></li>`).join("")}</ul>
				<a class="btn btn--primary" href="${links.docs}" data-track="docs">${esc(t.dev.cta)} ${ICONS.circleChevron}</a>
			</div>
			<pre class="code" aria-label="Code sample"><code><span class="c">// 1:1 face match with liveness.</span>
<span class="c">// "enrolled" comes from the person's HumanID proof, not your database.</span>
<span class="k">const</span> res = <span class="k">await</span> fetch(<span class="s">"https://api.verifik.co/v2/face-recognition/compare-with-liveness"</span>, {
  method: <span class="s">"POST"</span>,
  headers: { Authorization: <span class="s">\`Bearer \${TOKEN}\`</span> },
  body: JSON.stringify({ probe: selfie, gallery: [enrolled] })
});

<span class="k">const</span> { data } = <span class="k">await</span> res.json();
<span class="c">// No face image or template is stored</span></code></pre>
		</div>
	</section>`;
}

function faq(t) {
	return `
	<section class="section" id="faq">
		<div class="container faq">
			<header class="section__head">
				<p class="eyebrow">${esc(t.faq.eyebrow)}</p>
				<h2>${esc(t.faq.title)}</h2>
			</header>
			<div class="faq__list">
				${t.faq.items
					.map(
						(f) => `
					<details class="faq__item">
						<summary>${esc(f.q)}${ICONS.plus}</summary>
						<p>${esc(f.a)}</p>
					</details>`,
					)
					.join("")}
			</div>
		</div>
	</section>`;
}

function ctaBand(t, links) {
	return `
	<section class="cta">
		<div class="hero__glow hero__glow--soft" aria-hidden="true"></div>
		<div class="container cta__inner">
			<h2>${esc(t.cta.title)}</h2>
			<p>${esc(t.cta.body)}</p>
			<div class="hero__ctas">
				<a class="btn btn--primary btn--lg" href="${links.trial}" data-track="free_trial_cta">${esc(t.cta.trial)} ${ICONS.circleChevron}</a>
				<a class="btn btn--dark btn--lg" href="${links.demo}" data-track="book_demo_cta">${esc(t.cta.demo)} ${ICONS.circleChevron}</a>
			</div>
		</div>
	</section>`;
}

function footer(t, links) {
	const year = new Date().getFullYear();
	return `
	<footer class="footer">
		<div class="container footer__inner">
			<div class="footer__brand">
				<a class="logo" href="#top">${ICONS.logo}<span>Human<span class="logo__accent">Authn</span></span></a>
				<p>${esc(t.footer.tagline)}</p>
			</div>
			<div class="footer__col">
				<h4>${esc(t.footer.product)}</h4>
				<a href="#why">${esc(t.nav.product)}</a>
				<a href="#how">${esc(t.nav.how)}</a>
				<a href="#use-cases">${esc(t.nav.useCases)}</a>
				<a href="${links.pricing}">${esc(t.footer.pricing)}</a>
			</div>
			<div class="footer__col">
				<h4>${esc(t.footer.resources)}</h4>
				<a href="${links.docs}">${esc(t.footer.docs)}</a>
				<a href="${links.login}">${esc(t.footer.dashboard)}</a>
				<a href="#faq">${esc(t.nav.faq)}</a>
			</div>
			<div class="footer__col">
				<h4>${esc(t.footer.company)}</h4>
				<a href="${links.about}">${esc(t.footer.about)}</a>
				<a href="${links.contact}">${esc(t.footer.contact)}</a>
			</div>
		</div>
		<div class="container footer__bottom">© ${year} HumanAuthn · Verifik. ${esc(t.footer.rights)}</div>
	</footer>`;
}

function modal(t) {
	return `
	<div class="modal" data-modal hidden role="dialog" aria-modal="true" aria-label="${esc(t.how.videoTitle)}">
		<div class="modal__backdrop" data-close-video></div>
		<div class="modal__body">
			<button type="button" class="modal__close" data-close-video aria-label="${esc(t.modal.close)}">${ICONS.close}</button>
			<div class="modal__frame" data-frame></div>
		</div>
	</div>`;
}

function videoId() {
	return VIDEOS[state.lang] || VIDEOS.es;
}

function render() {
	const t = COPY[state.lang];
	const links = LINKS[state.lang];
	const meta = META[state.lang];

	document.documentElement.lang = state.lang;
	document.documentElement.dataset.variant = state.variant;
	document.title = meta.title;
	document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
	document.querySelector('meta[property="og:title"]')?.setAttribute("content", meta.title);
	document.querySelector('meta[property="og:description"]')?.setAttribute("content", meta.description);

	document.body.classList.toggle("va", state.variant === "a");
	if (state.variant === "a") {
		// Variant A follows the Figma frame "humanauthn.com V1.0 (A)".
		document.getElementById("app").innerHTML = renderA(state.lang, links).html + modal(t);
		return;
	}

	const body = [useCases(t), how(t), why(t), developers(t, links), faq(t)];

	document.getElementById("app").innerHTML = [
		navbar(t, links),
		`<main>${hero(t, links)}${body.join("")}${ctaBand(t, links)}</main>`,
		footer(t, links),
		modal(t),
	].join("");
}

/* ---------- interactions ---------- */

function openVideo() {
	const modalEl = document.querySelector("[data-modal]");
	const frame = modalEl.querySelector("[data-frame]");
	frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${videoId()}?autoplay=1&rel=0&hl=${state.lang}" title="${esc(
		COPY[state.lang].how.videoTitle,
	)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
	modalEl.hidden = false;
	document.body.classList.add("no-scroll");
	modalEl.querySelector(".modal__close").focus();
}

function closeVideo() {
	const modalEl = document.querySelector("[data-modal]");
	if (!modalEl || modalEl.hidden) return;
	modalEl.querySelector("[data-frame]").innerHTML = "";
	modalEl.hidden = true;
	document.body.classList.remove("no-scroll");
}

function setLang(lang) {
	if (lang === state.lang) return;
	state.lang = lang;
	writeStorage(LANG_KEY, lang);
	const url = new URL(window.location.href);
	url.searchParams.set("lang", lang);
	window.history.replaceState(null, "", url);
	track("ha_language_change");
	render();
}

function closeDropdowns(except) {
	document.querySelectorAll("[data-dropdown][aria-expanded='true']").forEach((btn) => {
		if (btn !== except) btn.setAttribute("aria-expanded", "false");
	});
}

function applyFilter(button) {
	const filter = button.dataset.filter;
	document.querySelectorAll("[data-filter]").forEach((b) => {
		b.classList.toggle("is-active", b === button);
		b.setAttribute("aria-pressed", String(b === button));
	});
	document.querySelectorAll(".va-post").forEach((post) => {
		post.hidden = filter !== "all" && post.dataset.cat !== filter;
	});
}

document.addEventListener("submit", (event) => {
	const form = event.target.closest("[data-demo-form]");
	if (!form) return;
	event.preventDefault();
	if (!form.reportValidity()) return;
	// No backend yet: record the intent (no personal data) and send people to the booking calendar.
	track("ha_demo_request", { interest: form.interest.value });
	form.querySelector("[data-form-sent]").hidden = false;
	window.setTimeout(() => window.open(LINKS[state.lang].demo, "_blank", "noopener"), 600);
});

document.addEventListener("click", (event) => {
	const dropdown = event.target.closest("[data-dropdown]");
	closeDropdowns(dropdown);
	if (dropdown) {
		dropdown.setAttribute("aria-expanded", String(dropdown.getAttribute("aria-expanded") !== "true"));
		return;
	}
	const filterBtn = event.target.closest("[data-filter]");
	if (filterBtn) applyFilter(filterBtn);

	const target = event.target.closest("[data-lang],[data-open-video],[data-close-video],[data-menu],[data-track],.nav__mobile a,.va-nav__mobile a");
	if (!target) return;

	if (target.dataset.track) track("ha_cta_click", { cta: target.dataset.track });
	if (target.dataset.lang) setLang(target.dataset.lang);
	if (target.hasAttribute("data-open-video")) openVideo();
	if (target.hasAttribute("data-close-video")) closeVideo();

	const menu = document.querySelector("[data-mobile-menu]");
	if (target.hasAttribute("data-menu")) {
		menu.hidden = !menu.hidden;
		target.setAttribute("aria-expanded", String(!menu.hidden));
	} else if (target.closest(".nav__mobile, .va-nav__mobile")) {
		menu.hidden = true;
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		closeVideo();
		closeDropdowns();
	}
});

render();
track("ha_variant_view", { forced: state.forced });
