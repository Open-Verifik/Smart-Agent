import { COPY_A, SOLUTION_KEYS } from "./copyA.js";

/* Landing A: built from the Figma frame "humanauthn.com V1.0 (A)". Styles live in a.css under .va. */

const BLOG = { en: "https://verifik.co/blog/", es: "https://verifik.co/blog/" };
const SOCIAL = [
	["facebook", "https://www.facebook.com/verifik.co", "Facebook"],
	["instagram", "https://www.instagram.com/verifik.co/", "Instagram"],
	["linkedin", "https://www.linkedin.com/company/verifik/", "LinkedIn"],
	["youtube", "https://www.youtube.com/@Verifik", "YouTube"],
];

const s = (body, size = 20, sw = 1.7) =>
	`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

export const IA = {
	chevron: s('<path d="M9.5 6.5L15 12l-5.5 5.5"/>', 14, 2),
	chevronDown: s('<path d="M6.5 9.5L12 15l5.5-5.5"/>', 16, 2),
	circleChevron: s('<circle cx="12" cy="12" r="9"/><path d="M10.5 8.5L14 12l-3.5 3.5"/>', 18),
	arrow: s('<path d="M5 12h14M13 6l6 6-6 6"/>', 12, 2),
	arrowR: s('<path d="M5 12h14M13 6l6 6-6 6"/>', 14, 2),
	globe: s('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/>', 22),
	menu: s('<path d="M4 7h16M4 12h16M4 17h16"/>', 22),
	check: s('<path d="M5 12.5l4.5 4.5L19 7.5"/>', 14, 2.4),
	checkCircle: s('<circle cx="12" cy="12" r="9"/><path d="M8 12.3l2.7 2.7L16 9.6"/>', 18, 2),
	minus: s('<path d="M6 12h12"/>', 18),
	plus: s('<path d="M12 6v12M6 12h12"/>', 18),
	browser: s('<rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M3.5 9h17M7 6.8h.01M9.5 6.8h.01"/>', 18),
	openid: s('<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17M3.5 12h17"/>', 18),
	passkey: s('<circle cx="8" cy="12" r="3.5"/><path d="M11.5 12H20M17 12v3M20 12v2"/>', 18),
	credential: s('<circle cx="12" cy="10" r="5.5"/><path d="M9.5 10l1.8 1.8 3.2-3.3M9 15l-1.5 5.5L12 18.5l4.5 2L15 15"/>', 18),
	phone: s('<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>', 20),
	faceScan: s('<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><path d="M9 9.5v1M15 9.5v1M12 9.5v3.5h-1M9.5 16c1.5 1 3.5 1 5 0"/>', 22),
	idCard: s('<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="8.5" cy="11" r="2"/><path d="M5.8 16c.6-1.4 1.6-2 2.7-2s2.1.6 2.7 2M14 10h4M14 13h3M10 5V3.5h4V5"/>', 24),
	faceCursor: s('<circle cx="10" cy="10" r="6.5"/><path d="M8 9h.01M12 9h.01M7.8 11.8c1.3 1 3.1 1 4.4 0M14.5 14.5l6 2.2-2.6 1.2-1.2 2.6z"/>', 24),
	hashLock: s('<path d="M8 3.5L6.5 20.5M14 3.5l-1 8M3.5 8.5h13M3 15h7"/><rect x="13" y="14" width="8" height="6.5" rx="1.5"/><path d="M15 14v-1.5a2 2 0 0 1 4 0V14"/>', 24),
	user: s('<circle cx="12" cy="8" r="4"/><path d="M5 20.5c0-3.6 3.1-6 7-6s7 2.4 7 6c-1.8.8-4.3 1.2-7 1.2s-5.2-.4-7-1.2z"/>', 30, 1.6),
	doc: s('<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M9 8h6M9 12h6M9 16h3.5"/>', 30, 1.6),
	checkSquare: s('<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M8.3 12.2l2.6 2.6 4.9-5.4"/>', 30, 1.6),
	play: `<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg>`,
	facebook: `<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-1.6 19.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 12 2z"/></svg>`,
	instagram: s('<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.2 6.8h.01"/>', 20, 1.9),
	linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM3.3 9h3.4v11.5H3.3zM9 9h3.3v1.6c.5-.9 1.7-1.9 3.5-1.9 3.6 0 4.3 2.4 4.3 5.4v6.4h-3.4v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.8H9z"/></svg>`,
	youtube: `<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.8 2.6 2.6 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.8zM10 15V9l5.2 3z"/></svg>`,
	zelf: `<svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true"><path fill="#f26b3a" d="M16 3l4 7.5L28 12l-6 5.8 1.4 8.2L16 22l-7.4 4 1.4-8.2L4 12l8-1.5z"/><path fill="#ffb199" d="M16 9l2.2 4.2 4.6.8-3.3 3.2.8 4.6L16 19.6l-4.1 2.2.8-4.6-3.3-3.2 4.6-.8z"/></svg>`,
};

const esc = (value) =>
	String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

/** "@docs" style hrefs point at LINKS entries; "#x" stays an in-page anchor. */
const href = (target, links) => (target.startsWith("@") ? links[target.slice(1)] || "#" : target);
const ext = (target) => (target.startsWith("@") ? ' target="_blank" rel="noopener"' : "");

const logo = `<span class="va-logo__text">Human<span class="va-logo__lambda">Λ</span>uthn</span>`;

function eyebrow(text, tone = "light") {
	return `<p class="va-eyebrow va-eyebrow--${tone}">${IA.arrow}<span>${esc(text)}</span></p>`;
}

function nav(t, lang, links) {
	const items = t.nav.items
		.map(
			(item, i) => `
		<div class="va-nav__item">
			<button type="button" class="va-nav__trigger" aria-expanded="false" aria-controls="va-menu-${i}" data-dropdown>${esc(item.label)} ${IA.chevron}</button>
			<div class="va-nav__menu" id="va-menu-${i}">
				${item.links.map(([label, target]) => `<a href="${href(target, links)}"${ext(target)}>${esc(label)}</a>`).join("")}
			</div>
		</div>`,
		)
		.join("");
	return `
	<header class="va-nav" id="top">
		<div class="va-container va-nav__inner">
			<a class="va-logo" href="#top" aria-label="HumanAuthn">${logo}</a>
			<nav class="va-nav__links" aria-label="Main">${items}</nav>
			<div class="va-nav__actions">
				<div class="va-lang">
					<button type="button" class="va-lang__btn" aria-label="${esc(t.nav.langLabel)}" aria-expanded="false" data-dropdown>${IA.globe}<span class="va-lang__code">${lang.toUpperCase()}</span></button>
					<div class="va-nav__menu va-nav__menu--right">
						<button type="button" data-lang="es" class="${lang === "es" ? "is-active" : ""}">Español</button>
						<button type="button" data-lang="en" class="${lang === "en" ? "is-active" : ""}">English</button>
					</div>
				</div>
				<a class="va-btn va-btn--outline va-btn--sm va-hide-sm" href="${links.login}" data-track="login">${esc(t.nav.login)}</a>
				<a class="va-btn va-btn--violet va-btn--sm va-hide-xs" href="#demo" data-track="demo_nav">${esc(t.nav.demo)} ${IA.circleChevron}</a>
				<button type="button" class="va-nav__burger" aria-label="${esc(t.nav.menu)}" aria-expanded="false" data-menu>${IA.menu}</button>
			</div>
		</div>
		<div class="va-nav__mobile" data-mobile-menu hidden>
			${t.nav.items
				.map(
					(item) =>
						`<p>${esc(item.label)}</p>${item.links.map(([label, target]) => `<a href="${href(target, links)}"${ext(target)}>${esc(label)}</a>`).join("")}`,
				)
				.join("")}
			<div class="va-nav__mobile-ctas">
				<a class="va-btn va-btn--outline" href="${links.login}" data-track="login">${esc(t.nav.login)}</a>
				<a class="va-btn va-btn--violet" href="#demo" data-track="demo_nav">${esc(t.nav.demo)}</a>
			</div>
		</div>
	</header>`;
}

function hero(t, links) {
	const tr = t.trust;
	return `
	<section class="va-hero">
		<div class="va-container va-hero__inner">
			<p class="va-pill"><span class="va-pill__new">${esc(t.hero.badgeNew)}</span>${IA.arrow}<span>${esc(t.hero.badge)}</span></p>
			<h1 class="va-hero__title">${esc(t.hero.title)}</h1>
			<p class="va-hero__sub">${esc(t.hero.subtitle)}</p>
			<div class="va-ctas">
				<button type="button" class="va-btn va-btn--violet va-btn--lg" data-open-video data-track="see_how_it_works">${esc(t.hero.ctaVideo)} ${IA.circleChevron}</button>
				<a class="va-btn va-btn--glass va-btn--lg" href="#demo" data-track="book_demo_hero">${esc(t.hero.ctaDemo)} ${IA.circleChevron}</a>
			</div>
		</div>
		<div class="va-container">
			<div class="va-trust">
				<div class="va-trust__col">
					<h2 class="va-trust__title">${esc(tr.title)}</h2>
					<div class="va-trust__case">
						<span class="va-trust__logo">${IA.zelf}</span>
						<div><strong>${esc(tr.caseName)}</strong><p>${esc(tr.caseBody)}</p></div>
					</div>
					<p class="va-trust__built"><span class="va-trust__tick">${IA.check}</span>${esc(tr.builtBy)}</p>
				</div>
				<div class="va-trust__col">
					<h2 class="va-trust__title">${esc(tr.stackTitle)}</h2>
					<ul class="va-stack">
						${tr.stack
							.map(
								(x) =>
									`<li><span class="va-stack__icon">${IA[x.icon]}</span><div><strong>${esc(x.title)}</strong><span>${esc(x.body)}</span></div></li>`,
							)
							.join("")}
					</ul>
				</div>
			</div>
			<div class="va-stats">
				${t.stats.map((x) => `<div class="va-stat"><strong>${esc(x.value)}</strong><span>${esc(x.label)}</span></div>`).join("")}
			</div>
		</div>
	</section>`;
}

function why(t) {
	return `
	<section class="va-why" id="why">
		<div class="va-container">
			${eyebrow(t.why.eyebrow)}
			<h2 class="va-h2 va-h2--light va-why__title">${esc(t.why.title)}</h2>
			<p class="va-lead va-lead--light">${esc(t.why.intro)}</p>
			<div class="va-grid3 va-why__cards">
				${t.why.cards
					.map(
						(c, i) => `
					<article class="va-gcard">
						<span class="va-gcard__num">0${i + 1}</span>
						<h3>${esc(c.title)}</h3>
						<p>${esc(c.body)}</p>
						<p class="va-gcard__note">${esc(c.note)}</p>
					</article>`,
					)
					.join("")}
			</div>
		</div>
	</section>`;
}

function how(t) {
	return `
	<section class="va-section" id="how">
		<div class="va-container">
			<div class="va-split">
				<div>${eyebrow(t.how.eyebrow, "tint")}<h2 class="va-h2 va-h2--narrow">${esc(t.how.title)}</h2></div>
				<p class="va-side">${esc(t.how.intro)}</p>
			</div>
			<div class="va-grid3 va-steps">
				${t.how.steps
					.map(
						(st) => `
					<article class="va-step">
						<p class="va-step__label">${esc(st.label)}</p>
						<div class="va-flow">
							${st.chips.map((c) => `<span class="va-chip">${esc(c)}</span><span class="va-flow__op">→</span>`).join("")}
							<span class="va-chip va-chip--${st.accent ? "violet" : "navy"}">${esc(st.result)}</span>
						</div>
						<p>${esc(st.body)}</p>
					</article>`,
					)
					.join("")}
			</div>
			<div class="va-grid3 va-facts">
				${t.how.facts.map((f) => `<div class="va-fact"><h3>${esc(f.title)}</h3><p>${esc(f.body)}</p></div>`).join("")}
			</div>
		</div>
	</section>`;
}

function versusCard(c, kind) {
	return `
	<article class="va-vs va-vs--${kind}">
		<header class="va-vs__head"><span class="va-vs__icon">${kind === "ha" ? IA.faceScan : IA.phone}</span><h3>${esc(c.title)}</h3></header>
		<p class="va-vs__q">${esc(c.question)}</p>
		<dl>${c.rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
	</article>`;
}

function versus(t) {
	const v = t.versus;
	return `
	<section class="va-section va-section--tight" id="vs-face-unlock">
		<div class="va-container">
			<div class="va-split va-split--end">
				<div>
					${eyebrow(v.eyebrow, "tint")}
					<h2 class="va-h2 va-h2--wide">${esc(v.title)}</h2>
					<p class="va-sub">${esc(v.subtitle)}</p>
				</div>
				<p class="va-side va-side--wide">${esc(v.intro)}</p>
			</div>
			<div class="va-grid2 va-vs-grid">${versusCard(v.phone, "phone")}${versusCard(v.ha, "ha")}</div>
			<div class="va-rowend">
				<p class="va-fine">${esc(v.note)}</p>
				<button type="button" class="va-btn va-btn--navy" data-open-video data-track="see_how_it_works_vs">${esc(v.cta)} ${IA.circleChevron}</button>
			</div>
		</div>
	</section>`;
}

function solutions(t) {
	const so = t.solutions;
	const icons = { digitalId: IA.idCard, ciam: IA.faceCursor, data: IA.hashLock };
	return `
	<section class="va-solutions" id="solutions">
		<div class="va-container">
			<div class="va-center">
				${eyebrow(so.eyebrow)}
				<h2 class="va-h2 va-h2--light">${esc(so.title)}</h2>
				<p class="va-lead va-lead--light va-lead--center">${esc(so.intro)}</p>
			</div>
			<div class="va-grid3 va-sol-cards">
				${SOLUTION_KEYS.map((k) => {
					const c = so.cards[k];
					return `
					<article class="va-sol">
						<div class="va-sol__top"><span class="va-sol__icon">${icons[k]}</span><span class="va-sol__tag">${esc(c.tag)}</span></div>
						<h3>${esc(c.title)}</h3>
						<p>${esc(c.body)}</p>
						<ul>${c.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
						<p class="va-sol__for">${esc(c.for)}</p>
					</article>`;
				}).join("")}
			</div>
			<div class="va-used">
				<span>${esc(so.usedIn)}</span>
				${so.industries.map((x) => `<span class="va-used__chip">${esc(x)}</span>`).join("")}
			</div>
		</div>
	</section>`;
}

function integration(t, links) {
	const it = t.integration;
	return `
	<section class="va-section" id="integration">
		<div class="va-container">
			<div class="va-panel">
				<div class="va-split va-split--end">
					<div>
						${eyebrow(it.eyebrow, "tint")}
						<h2 class="va-h2 va-h2--wide">${esc(it.title)}</h2>
						<a class="va-btn va-btn--outline-dark" href="${links.docs}" target="_blank" rel="noopener" data-track="docs_integration">${esc(it.cta)} ${IA.circleChevron}</a>
					</div>
					<p class="va-side">${esc(it.intro)}</p>
				</div>
				<div class="va-grid3 va-int-cards">
					${it.steps
						.map(
							(st) => `
						<article class="va-int">
							<span class="va-int__icon">${IA[st.icon]}</span>
							<span class="va-int__tag">${esc(st.tag)}</span>
							<h3>${esc(st.title)}</h3>
							<p>${esc(st.body)}</p>
						</article>`,
						)
						.join("")}
				</div>
			</div>
		</div>
	</section>`;
}

function compare(t) {
	const c = t.compare;
	return `
	<section class="va-compare" id="compare">
		<div class="va-container">
			<div class="va-center">
				${eyebrow(c.eyebrow)}
				<h2 class="va-h2 va-h2--light va-h2--center">${esc(c.title)}</h2>
				<p class="va-lead va-lead--light va-lead--center">${esc(c.intro)}</p>
			</div>
			<div class="va-cmp">
				<div class="va-cmp__scroll">
					<table class="va-table">
						<thead><tr>${c.head.map((h, i) => `<th${i === 2 ? ' class="is-ha"' : ""}>${esc(h)}</th>`).join("")}</tr></thead>
						<tbody>
							${c.rows
								.map(
									([a, b, h]) =>
										`<tr><th scope="row">${esc(a)}</th><td>${esc(b)}</td><td class="is-ha"><span class="va-table__ok">${IA.checkCircle}</span>${esc(h)}</td></tr>`,
								)
								.join("")}
						</tbody>
					</table>
				</div>
				<div class="va-rowend va-rowend--cmp">
					<p>${esc(c.note)}</p>
					<a class="va-btn va-btn--navy" href="#demo" data-track="talk_setup">${esc(c.cta)} ${IA.circleChevron}</a>
				</div>
			</div>
		</div>
	</section>`;
}

/** Illustrations for the article cards (drawn here, the Figma uses raster renders). */
function art(kind, lang) {
	const label = lang === "es" ? "Identidad digital" : "Digital identity";
	if (kind === "portable") {
		return `<div class="va-art va-art--portable" aria-hidden="true">
			<div class="va-art__copy"><span class="va-art__tag">${label}</span><strong>${lang === "es" ? "Identidad digital portable" : "Portable digital identity"}</strong><small>${lang === "es" ? "Una credencial para diferentes experiencias" : "One credential for every experience"}</small></div>
			<div class="va-art__id va-art__id--sm"><span class="va-art__face"></span><i></i><i></i><span class="va-art__qr"></span></div>
			<span class="va-art__bubble va-art__bubble--a">${IA.check}</span>
			<span class="va-art__device va-art__device--phone"></span>
			<span class="va-art__device va-art__device--laptop"></span>
		</div>`;
	}
	if (kind === "card") {
		return `<div class="va-art va-art--card" aria-hidden="true">
			<span class="va-art__ring"></span>
			<span class="va-art__float va-art__float--1">${IA.browser}</span>
			<span class="va-art__float va-art__float--2">${IA.phone}</span>
			<span class="va-art__float va-art__float--3">${IA.user}</span>
			<div class="va-art__id"><span class="va-art__face va-art__face--m"></span><div><strong>${label}</strong><i></i><i></i></div><span class="va-art__shield">${IA.check}</span></div>
			<span class="va-art__stage"></span>
		</div>`;
	}
	return `<div class="va-art va-art--phone" aria-hidden="true">
		<span class="va-art__handset"><span class="va-art__ok">${IA.check}</span></span>
		<span class="va-art__float va-art__float--1">${IA.phone}</span>
		<span class="va-art__float va-art__float--3">${IA.user}</span>
		<div class="va-art__id va-art__id--over"><span class="va-art__face va-art__face--f"></span><div><strong>${label}</strong><i></i><i></i></div><span class="va-art__shield">${IA.check}</span></div>
	</div>`;
}

function resources(t, lang) {
	const r = t.resources;
	const posts = [...r.posts, r.posts[2], r.posts[0], r.posts[1]];
	return `
	<section class="va-section" id="resources">
		<div class="va-container">
			${eyebrow(r.eyebrow, "tint")}
			<h2 class="va-h2 va-h2--narrow-l">${esc(r.title)}</h2>
			<p class="va-lead va-lead--narrow">${esc(r.intro)}</p>
			<div class="va-filters" role="group">
				${["all", "identity", "auth", "data"]
					.map((f) => `<button type="button" class="va-filter${f === "all" ? " is-active" : ""}" data-filter="${f}" aria-pressed="${f === "all"}">${esc(r.filters[f])}</button>`)
					.join("")}
				<a class="va-filter va-filter--more" href="${BLOG[lang]}" target="_blank" rel="noopener">${esc(r.filters.more)} ${IA.circleChevron}</a>
			</div>
			<div class="va-grid3 va-posts">
				${posts
					.map(
						(p) => `
					<article class="va-post" data-cat="${p.cat}">
						${art(p.art, lang)}
						<p class="va-post__kicker">${IA.arrow}${esc(p.kicker)}</p>
						<h3>${esc(p.title)}</h3>
						<p class="va-post__body">${esc(p.body)}</p>
						<footer><span>${esc(r.date)}</span><a href="${BLOG[lang]}" target="_blank" rel="noopener">${esc(r.read)} ${IA.arrowR}</a></footer>
					</article>`,
					)
					.join("")}
			</div>
		</div>
	</section>`;
}

function faq(t) {
	const f = t.faq;
	return `
	<section class="va-section" id="faq">
		<div class="va-container">
			${eyebrow(f.eyebrow, "tint")}
			<div class="va-split va-split--end va-split--faq">
				<h2 class="va-h2">${esc(f.title)}</h2>
				<p class="va-side">${esc(f.side)}</p>
			</div>
			<div class="va-faq">
				${f.items
					.map(
						(item, i) => `
					<details class="va-faq__item" open>
						<summary><span class="va-faq__n">${String(i + 1).padStart(2, "0")}.</span><span class="va-faq__q">${esc(item.q)}</span><span class="va-faq__i va-faq__i--open">${IA.minus}</span><span class="va-faq__i va-faq__i--closed">${IA.plus}</span></summary>
						<p>${esc(item.a)}</p>
					</details>`,
					)
					.join("")}
			</div>
		</div>
	</section>`;
}

function finalCta(t, links) {
	const f = t.final;
	const fm = f.form;
	return `
	<section class="va-final" id="demo">
		<div class="va-container va-final__inner">
			<div class="va-final__copy">
				${eyebrow(f.eyebrow)}
				<h2 class="va-final__title"><span>${esc(f.title1)}</span><span>${esc(f.title2)}</span></h2>
				<p>${esc(f.body)}</p>
				<a class="va-btn va-btn--glass" href="${links.docs}" target="_blank" rel="noopener" data-track="docs_final">${esc(f.docs)} ${IA.circleChevron}</a>
			</div>
			<form class="va-form" data-demo-form novalidate>
				<h3>${esc(fm.title)}</h3>
				<label>${esc(fm.email)}<input type="email" name="email" required autocomplete="email" placeholder="${esc(fm.emailPh)}" /></label>
				<label>${esc(fm.company)}<input type="text" name="company" required autocomplete="organization" placeholder="${esc(fm.companyPh)}" /></label>
				<label>${esc(fm.interest)}<span class="va-select"><select name="interest">${fm.options.map((o) => `<option>${esc(o)}</option>`).join("")}</select>${IA.chevronDown}</span></label>
				<label>${esc(fm.problem)}<textarea name="problem" rows="3" placeholder="${esc(fm.problemPh)}"></textarea></label>
				<button type="submit" class="va-btn va-btn--violet va-btn--block">${esc(fm.submit)}</button>
				<p class="va-form__sent" data-form-sent hidden>${esc(fm.sent)}</p>
			</form>
		</div>
	</section>`;
}

function footer(t, links) {
	const year = new Date().getFullYear();
	const col = (c) => `
		<div class="va-foot__col">
			<h4>${esc(c.title)}</h4>
			${
				c.groups
					? c.groups
							.map(([g, items]) => `<p class="va-foot__group">${esc(g)}</p>${items.map((x) => `<a href="#solutions">${esc(x)}</a>`).join("")}`)
							.join("")
					: c.links.map(([label, target]) => `<a href="${href(target, links)}"${ext(target)}>${esc(label)}</a>`).join("")
			}
		</div>`;
	return `
	<footer class="va-foot">
		<div class="va-container va-foot__inner">
			<div class="va-foot__brand">
				<a class="va-logo va-logo--lg" href="#top">${logo}</a>
				<p>${esc(t.footer.brand)}</p>
				<div class="va-foot__social">${SOCIAL.map(([k, url, name]) => `<a href="${url}" target="_blank" rel="noopener" aria-label="${name}">${IA[k]}</a>`).join("")}</div>
			</div>
			<div class="va-foot__cols">${t.footer.cols.map(col).join("")}</div>
		</div>
		<div class="va-foot__bar">
			<div class="va-container va-foot__bar-inner"><span>© ${year} HumanAuthn. ${esc(t.footer.rights)}</span><span>${esc(t.footer.legal)}</span></div>
		</div>
	</footer>`;
}

export function renderA(lang, links) {
	const t = COPY_A[lang];
	return {
		html: [nav(t, lang, links), `<main>${hero(t, links)}${why(t)}${how(t)}${versus(t)}${solutions(t)}${integration(t, links)}${compare(t)}${resources(t, lang)}${faq(t)}${finalCta(t, links)}</main>`, footer(t, links)].join(""),
		modal: t.modal,
	};
}
