import "./styles.css";
import { COPY, LINKS, META, VIDEOS } from "./i18n.js";
import { ICONS } from "./icons.js";
import { esc, renderA } from "./pageA.js";
import { buildBrief, renderB } from "./pageB.js";
import "./a.css";
import "./b.css";

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

	// Both variants follow the Figma file: A = "humanauthn.com V1.0 (A)", B = "humanauthn.com V1.0 (B)".
	document.body.classList.add("va");
	const page = state.variant === "a" ? renderA(state.lang, links).html : renderB(state.lang, links);
	document.getElementById("app").innerHTML = page + modal(t);
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

function downloadBrief(form) {
	const { file, text } = buildBrief(state.lang, form.focus.value, form.challenge.value, LINKS[state.lang].demo);
	const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
	const a = document.createElement("a");
	a.href = url;
	a.download = file;
	document.body.appendChild(a);
	a.click();
	a.remove();
	window.setTimeout(() => URL.revokeObjectURL(url), 1000);
	track("ha_demo_brief", { focus: form.focus.value });
}

function moveCarousel(direction) {
	const track_ = document.querySelector("[data-carousel-track]");
	const card = track_?.querySelector(".vb-sec__card");
	if (!card) return;
	track_.scrollBy({ left: direction * (card.offsetWidth + 24), behavior: "smooth" });
}

document.addEventListener("submit", (event) => {
	const brief = event.target.closest("[data-brief-form]");
	if (brief) {
		event.preventDefault();
		downloadBrief(brief);
		return;
	}
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
	const arrow = event.target.closest("[data-carousel]");
	if (arrow) moveCarousel(Number(arrow.dataset.carousel));

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
