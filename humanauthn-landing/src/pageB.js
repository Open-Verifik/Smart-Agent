import { COPY_B } from "./copyB.js";
import { IA, esc, eyebrow, faq, footer, nav, resources } from "./pageA.js";

/* Landing B: built from the Figma page "humanauthn.com V1.0 (B)" (desktop frame of "Diseño de Home de HumanAuthn").
   Shares the .va base styles with landing A; B-only styles live in b.css under .vb. */

const s = (body, size = 20, sw = 1.7) =>
	`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

const IB = {
	sparkle: s('<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM18.5 15l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>', 20),
	smile: s('<circle cx="12" cy="12" r="8.5"/><path d="M9 10h.01M15 10h.01M8.5 14c1.9 2 5.1 2 7 0"/>', 24),
	checkBig: s('<path d="M5 12.5l4.5 4.5L19 7.5"/>', 24, 2),
	userPlus: s('<circle cx="10" cy="8" r="3.5"/><path d="M3.5 19.5c.8-3.3 3.3-5 6.5-5s5.7 1.7 6.5 5M18 7v5M15.5 9.5h5"/>', 22),
	shieldCheck: s('<path d="M12 3l7 3v5.5c0 4.4-3 8.3-7 9.5-4-1.2-7-5.1-7-9.5V6z"/><path d="M9 12l2 2 4-4"/>', 22),
	qr: s('<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><path d="M14 14h2v2h-2zM18 18h2v2h-2zM14 18h2M18 14h2"/>', 22),
	arrowL: s('<path d="M19 12H5M11 6l-6 6 6 6"/>', 18, 2),
	arrowR: s('<path d="M5 12h14M13 6l6 6-6 6"/>', 18, 2),
	unlink: s('<path d="M9.5 14.5l5-5M8 11l-2 2a3.5 3.5 0 0 0 5 5l2-2M16 13l2-2a3.5 3.5 0 0 0-5-5l-2 2M4 4l16 16"/>', 16),
	refresh: s('<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8M4 4v4h4M4 13a8 8 0 0 0 14.3 4.9L20 16M20 20v-4h-4"/>', 16),
	dbLock: s('<ellipse cx="10" cy="5.5" rx="6" ry="2.5"/><path d="M4 5.5v10c0 1.4 2.7 2.5 6 2.5M16 5.5v3.5M4 10.5c0 1.4 2.7 2.5 6 2.5"/><rect x="14" y="14" width="7" height="6" rx="1.2"/><path d="M15.8 14v-1.2a1.7 1.7 0 0 1 3.4 0V14"/>', 16),
	devices: s('<rect x="3" y="5" width="12" height="9" rx="1.5"/><rect x="16.5" y="9" width="4.5" height="9" rx="1"/><path d="M6 18h6"/>', 16),
	cloud: s('<path d="M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.5 1.5A3.3 3.3 0 0 0 7 18z"/>', 16),
	list: s('<path d="M10 7h9M10 12h9M10 17h9M5 7l1 1 2-2M5 12l1 1 2-2M5 17l1 1 2-2"/>', 18),
	download: s('<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>', 16),
	mail: s('<rect x="3.5" y="5.5" width="17" height="13" rx="2"/><path d="M4 7l8 6 8-6"/>', 16),
	idSmall: s('<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="11" r="2"/><path d="M14 10h4M14 13.5h3M6 16c.6-1.2 1.5-1.8 2.5-1.8s1.9.6 2.5 1.8"/>', 16),
	person: s('<circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-3.6 3.6-5.5 7-5.5s6.2 1.9 7 5.5"/>', 16),
	cube: `<svg width="46" height="46" viewBox="0 0 48 48" aria-hidden="true"><defs><linearGradient id="vbc1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#c4b5fd"/><stop offset="1" stop-color="#7c3aed"/></linearGradient></defs><path d="M24 4l17 9.5v21L24 44 7 34.5v-21z" fill="url(#vbc1)"/><path d="M24 4l17 9.5L24 23 7 13.5z" fill="#ede9fe" opacity=".9"/><path d="M24 23v21L7 34.5v-21z" fill="#a78bfa" opacity=".85"/></svg>`,
};

const LOGOS = {
	flit: `<span class="vb-logo vb-logo--flit"><svg width="26" height="14" viewBox="0 0 26 14" aria-hidden="true"><path d="M2 4h22M6 10h14M10 7h6" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg>flit</span>`,
	Didit: `<span class="vb-logo vb-logo--didit"><svg width="16" height="22" viewBox="0 0 16 22" aria-hidden="true"><rect x="1.5" y="1.5" width="13" height="19" rx="6.5" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>Didit</span>`,
	IDMERIT: `<span class="vb-logo vb-logo--idmerit">ID<b>MERIT</b></span>`,
	MONET: `<span class="vb-logo vb-logo--monet"><svg width="24" height="14" viewBox="0 0 24 14" aria-hidden="true"><circle cx="4" cy="9" r="3.5" fill="currentColor"/><path d="M8 13l5-11 5 11zM15 13l4-8 4 8z" fill="currentColor"/></svg><span>MONET<small>CRÉDITO PARA TODOS</small></span></span>`,
	cabify: `<span class="vb-logo vb-logo--cabify">cabify</span>`,
};

function hero(t) {
	const h = t.hero;
	const logos = [...t.logos, t.logos[0]];
	return `
	<section class="vb-hero">
		<div class="va-container vb-hero__inner">
			<img class="vb-hero__avatar vb-hero__avatar--r" src="/img/hero-avatar-r.webp" alt="" width="56" height="56" />
			<img class="vb-hero__avatar vb-hero__avatar--l" src="/img/hero-avatar-l.webp" alt="" width="48" height="48" />
			<p class="va-pill"><span class="va-pill__new">${esc(h.badgeNew)}</span>${IA.arrow}<span>${esc(h.badge)}</span></p>
			<h1 class="vb-hero__title"><span>${esc(h.title1)}</span><span>${esc(h.title2)}</span></h1>
			<p class="va-hero__sub">${esc(h.subtitle)}</p>
			<div class="va-ctas">
				<button type="button" class="va-btn va-btn--violet va-btn--lg" data-open-video data-track="see_how_it_works">${esc(h.ctaVideo)} ${IA.circleChevron}</button>
				<a class="va-btn va-btn--glass va-btn--lg" href="#plan" data-track="book_demo_hero">${esc(h.ctaDemo)} ${IA.circleChevron}</a>
			</div>
		</div>
		<div class="va-container vb-logos" aria-label="Customers">${logos.map((l) => LOGOS[l]).join("")}</div>
	</section>`;
}

function trioMock(card, i) {
	const m = card.mock;
	if (i === 0) {
		return `<div class="vb-mock">
			<div class="vb-mock__head"><span class="vb-mock__brand">${IB.sparkle}${esc(m.brand)}</span><span class="vb-mock__dot"></span></div>
			<div class="vb-mock__person"><img src="/img/avatar-man.webp" alt="" width="44" height="44" /><div><i></i><i></i><i></i></div></div>
			<p class="vb-mock__status">${IA.checkCircle}${esc(m.status)}</p>
		</div>`;
	}
	if (i === 1) {
		return `<div class="vb-mock">
			<div class="vb-mock__head"><span class="vb-mock__brand">${IB.sparkle}${esc(m.title)}</span><span class="vb-mock__dot"></span></div>
			<ul class="vb-mock__fields">${m.fields.map((f) => `<li><span class="vb-mock__ok">${IA.check}</span>${esc(f)}</li>`).join("")}</ul>
			<p class="vb-mock__status">${IA.checkCircle}${esc(m.status)}</p>
		</div>`;
	}
	return `<div class="vb-mock vb-mock--welcome">
		<img src="/img/avatar-welcome.webp" alt="" width="52" height="52" />
		<strong>${esc(m.title)}</strong>
		<span>${esc(m.sub)}</span>
		<p class="vb-mock__status">${IA.checkCircle}${esc(m.status)}</p>
	</div>`;
}

function trio(t) {
	const x = t.trio;
	return `
	<section class="va-section" id="experience">
		<div class="va-container">
			<div class="va-split va-split--end">
				<div>
					${eyebrow(x.eyebrow, "tint")}
					<h2 class="va-h2 vb-stack"><span>${esc(x.title1)}</span><span>${esc(x.title2)}</span></h2>
					<button type="button" class="va-btn va-btn--outline-dark vb-mt" data-open-video data-track="simulate_sign_in">${esc(x.cta)} ${IA.circleChevron}</button>
				</div>
				<p class="va-side">${esc(x.side)}</p>
			</div>
			<div class="va-grid3 vb-trio">
				${x.cards
					.map(
						(c, i) => `
					<article class="vb-trio__card">
						<div class="vb-trio__stage">${trioMock(c, i)}</div>
						<span class="vb-tag">${esc(c.tag)}</span>
						<h3>${esc(c.title)}</h3>
						<p>${esc(c.body)}</p>
					</article>`,
					)
					.join("")}
			</div>
		</div>
	</section>`;
}

function faceId(t) {
	const f = t.faceId;
	return `
	<section class="va-section vb-face" id="how">
		<div class="va-container vb-face__inner">
			<div class="vb-face__visual">
				<div class="vb-face__card">
					<div class="vb-face__photo"><img src="/img/face-verify.webp" alt="" width="700" height="612" loading="lazy" /></div>
					<strong>${esc(f.card.title)}</strong>
					<span>${esc(f.card.sub)}</span>
					<button type="button" class="va-btn va-btn--violet va-btn--block" data-open-video data-track="access_now">${esc(f.card.cta)}</button>
				</div>
			</div>
			<div>
				${eyebrow(f.eyebrow, "tint")}
				<h2 class="va-h2">${esc(f.title)}</h2>
				<p class="vb-body">${esc(f.body)}</p>
				<div class="vb-chips">
					<span class="vb-chip">${IB.qr}${esc(f.chips[0])}</span>
					<span class="vb-chip">${IA.passkey}${esc(f.chips[1])}</span>
					<span class="vb-chip">${IB.list}${esc(f.chips[2])}</span>
				</div>
				<a class="vb-square" href="#solutions" aria-label="${esc(f.next)}">${IA.chevronDown}</a>
			</div>
		</div>
	</section>`;
}

function products(t, links) {
	const p = t.products;
	return `
	<section class="vb-products" id="solutions">
		<div class="va-container">
			<div class="va-center">
				${eyebrow(p.eyebrow)}
				<h2 class="va-h2 va-h2--light vb-products__title">${esc(p.title)}</h2>
			</div>
			<div class="va-grid2 vb-products__grid">
				${p.cards
					.map(
						(c) => `
					<article class="vb-product">
						<img src="/img/${c.img}.webp" alt="" width="1000" height="560" loading="lazy" />
						<span class="vb-tag vb-tag--light">${esc(c.tag)}</span>
						<h3>${esc(c.title)}</h3>
						<p>${esc(c.body)}</p>
						<ul>${c.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
						<a class="va-btn va-btn--glass" href="${links.docs}" target="_blank" rel="noopener" data-track="explore_product">${esc(c.cta)} ${IA.circleChevron}</a>
					</article>`,
					)
					.join("")}
			</div>
		</div>
	</section>`;
}

function custody(t) {
	const c = t.custody;
	const icons = { doc: IA.doc, smile: IB.smile, checkBig: IB.checkBig };
	return `
	<section class="va-section" id="self-custody">
		<div class="va-container vb-two">
			<div class="vb-panel">
				${c.rows
					.map(
						(r) => `
					<div class="vb-row">
						<span class="vb-row__icon">${icons[r.icon]}</span>
						<div><span class="vb-row__tag">${esc(r.tag)}</span><strong>${esc(r.title)}</strong><span>${esc(r.body)}</span></div>
					</div>`,
					)
					.join("")}
			</div>
			<div>
				${eyebrow(c.eyebrow, "tint")}
				<h2 class="va-h2 vb-stack"><span>${esc(c.title1)}</span><span>${esc(c.title2)}</span></h2>
				<p class="vb-body">${esc(c.p1)}</p>
				<p class="vb-body">${esc(c.p2)}</p>
				<a class="va-btn va-btn--violet va-btn--lg vb-mt" href="#building-blocks" data-track="building_blocks">${esc(c.cta)} ${IA.circleChevron}</a>
			</div>
		</div>
	</section>`;
}

function records(t) {
	const r = t.records;
	return `
	<section class="va-section va-section--tight" id="data-protection">
		<div class="va-container vb-two vb-two--records">
			<div>
				${eyebrow(r.eyebrow, "tint")}
				<h2 class="va-h2">${esc(r.title)}</h2>
				<p class="vb-body">${esc(r.body)}</p>
			</div>
			<div class="vb-panel vb-records">
				${r.rows
					.map(
						([label, value, hash]) => `
					<div class="vb-record">
						<div class="vb-record__field"><span class="vb-record__label">${esc(label)}</span><strong>${esc(value)}</strong></div>
						<div class="vb-record__hash">${esc(hash)}</div>
					</div>`,
					)
					.join("")}
			</div>
		</div>
	</section>`;
}

function standards(t, links) {
	const st = t.standards;
	const b = t.blocks;
	return `
	<section class="va-section" id="integration">
		<div class="va-container">
			<div class="va-panel vb-std">
				<div class="va-split va-split--end">
					<div>
						${eyebrow(st.eyebrow, "tint")}
						<h2 class="va-h2 vb-stack"><span>${esc(st.title1)}</span><span>${esc(st.title2)}</span></h2>
						<a class="va-btn va-btn--outline-dark vb-mt" href="${links.docs}" target="_blank" rel="noopener" data-track="docs_standards">${esc(st.cta)} ${IA.circleChevron}</a>
					</div>
					<p class="va-side">${esc(st.side)}</p>
				</div>
				<div class="va-grid3 va-int-cards">
					${st.cards
						.map(
							(c) => `
						<article class="va-int">
							<span class="vb-int__icon">${IA[c.icon]}</span>
							<span class="va-int__tag">→ ${esc(c.tag)}</span>
							<h3>${esc(c.title)}</h3>
							<p>${esc(c.body)}</p>
						</article>`,
						)
						.join("")}
				</div>
			</div>
			<div class="vb-blocks" id="building-blocks">
				<p class="va-eyebrow va-eyebrow--tint"><span class="va-pill__new">${esc(b.badgeNew)}</span>${IA.arrow}<span>${esc(b.eyebrow)}</span></p>
				<h2 class="va-h2">${esc(b.title)}</h2>
				<div class="vb-blocks__grid">
					${b.cols
						.map(
							(c) => `
						<div class="vb-block">
							<span class="vb-int__icon">${IB[c.icon]}</span>
							<span class="va-int__tag">${esc(c.tag)}</span>
							<h3>${esc(c.title)}</h3>
							<ul>${c.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
						</div>`,
						)
						.join("")}
				</div>
			</div>
		</div>
	</section>`;
}

function compareB(t) {
	const c = t.compare;
	const oktaMark = `<svg width="16" height="18" viewBox="0 0 16 18" aria-hidden="true"><path d="M8 1l6.5 2.6v5.2C14.5 13 11.8 16 8 17 4.2 16 1.5 13 1.5 8.8V3.6z" fill="currentColor"/><path d="M5 8.5l2 2 4-4" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
	const haMark = `<b class="vb-hamark">H/</b>`;
	return `
	<section class="va-compare vb-compare" id="compare">
		<div class="va-container">
			<div class="va-center">
				${eyebrow(c.eyebrow)}
				<h2 class="va-h2 va-h2--light va-h2--center">${esc(c.title)}</h2>
				<p class="va-lead va-lead--light va-lead--center">${esc(c.intro)}</p>
			</div>
			<div class="va-cmp">
				<div class="va-cmp__scroll">
					<table class="va-table vb-table">
						<thead><tr><th>${esc(c.head[0])}</th><th>${oktaMark} ${esc(c.head[1])}</th><th class="vb-ha">${haMark} ${esc(c.head[2])}</th></tr></thead>
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
			</div>
		</div>
	</section>`;
}

function securityArt(card) {
	if (card.art === "tokens") {
		return `<div class="vb-sec__mock">
			<div class="vb-sec__top"><span></span></div>
			<div class="vb-mock__person"><img src="/img/avatar-man.webp" alt="" width="44" height="44" /><div><i></i><i></i><i></i></div><span class="vb-sec__ok">${IA.checkCircle}</span></div>
			<div class="vb-sec__icons"><span>${IB.unlink}</span><span>${IB.shieldCheck}</span><span>${IB.refresh}</span><span>${IB.dbLock}</span></div>
		</div>`;
	}
	if (card.art === "keys") {
		return `<div class="vb-sec__flow"><span class="vb-sec__node">${IB.devices}</span><i></i><span class="vb-sec__node vb-sec__node--big">${IB.shieldCheck}</span><i></i><span class="vb-sec__node">${IB.cloud}</span></div>`;
	}
	if (card.art === "portability") {
		return `<div class="vb-sec__flow vb-sec__flow--data">
			<div class="vb-sec__doc"><span class="vb-sec__doc-icon">${IB.list}</span><i></i><i></i><i></i></div>
			<i></i>
			<div class="vb-sec__pkg"><span class="vb-sec__dl">${IB.download}</span>${IB.cube}<span>${esc(card.label)}</span></div>
		</div>`;
	}
	return `<div class="vb-sec__mock vb-sec__mock--private">
		<p class="vb-sec__ptitle">${IB.shieldCheck}${esc(card.label)}</p>
		${[IB.person, IB.idSmall, IB.mail].map((ic) => `<div class="vb-sec__prow">${ic}<span></span></div>`).join("")}
		<p class="vb-mock__status">${IA.checkCircle}${esc(card.status)}</p>
	</div>`;
}

function security(t, links) {
	const sc = t.security;
	return `
	<section class="va-section vb-sec" id="security">
		<div class="va-container">
			${eyebrow(sc.eyebrow, "tint")}
			<div class="va-split va-split--end">
				<div>
					<h2 class="va-h2">${esc(sc.title)}</h2>
					<p class="vb-body vb-body--narrow">${esc(sc.intro)}</p>
				</div>
				<div class="vb-arrows">
					<button type="button" class="vb-arrow" data-carousel="-1" aria-label="${esc(sc.prev)}">${IB.arrowL}</button>
					<button type="button" class="vb-arrow" data-carousel="1" aria-label="${esc(sc.next)}">${IB.arrowR}</button>
				</div>
			</div>
		</div>
		<div class="vb-sec__track" data-carousel-track>
			${sc.cards
				.map(
					(c) => `
				<article class="vb-sec__card">
					<div class="vb-sec__stage">${securityArt(c)}</div>
					<span class="vb-tag">${esc(c.tag)}</span>
					<h3>${esc(c.title)}</h3>
					<p>${esc(c.body)}</p>
				</article>`,
				)
				.join("")}
		</div>
		<div class="va-center"><a class="va-btn va-btn--outline-dark" href="${links.docs}" target="_blank" rel="noopener" data-track="security_privacy">${esc(sc.cta)} ${IA.circleChevron}</a></div>
	</section>`;
}

function plan(t) {
	const p = t.plan;
	return `
	<section class="va-section" id="plan">
		<div class="va-container vb-two vb-two--plan">
			<div>
				${eyebrow(p.eyebrow, "tint")}
				<h2 class="va-h2 vb-stack"><span>${esc(p.title1)}</span><span>${esc(p.title2)}</span></h2>
				<p class="vb-body">${esc(p.p1)}</p>
				<p class="vb-body">${esc(p.p2)}</p>
			</div>
			<div class="vb-panel vb-plan">
				<form class="vb-plan__form" data-brief-form>
					<label>${esc(p.explore)}<span class="va-select vb-plan__select"><select name="focus">${p.options.map((o) => `<option>${esc(o)}</option>`).join("")}</select>${IA.chevronDown}</span></label>
					<label>${esc(p.challenge)}<textarea name="challenge" rows="5" placeholder="${esc(p.placeholder)}"></textarea></label>
					<button type="submit" class="va-btn va-btn--violet va-btn--lg">${esc(p.cta)} ${IA.circleChevron}</button>
				</form>
			</div>
		</div>
	</section>`;
}

function finalB(t) {
	const f = t.final;
	return `
	<section class="vb-final" id="demo">
		<div class="va-container va-center">
			${eyebrow(f.eyebrow)}
			<h2 class="vb-final__title"><span>${esc(f.title1)}</span><span>${esc(f.title2)}</span></h2>
			<p>${esc(f.body)}</p>
			<a class="va-btn va-btn--violet va-btn--lg" href="#plan" data-track="plan_demo">${esc(f.cta)} ${IA.circleChevron}</a>
		</div>
	</section>`;
}

/** Builds the text brief that "Download demo brief" saves on the visitor's device. Nothing is sent anywhere. */
export function buildBrief(lang, focus, challenge, demoUrl) {
	const b = COPY_B[lang].plan.brief;
	const text = [
		b.heading,
		"=".repeat(b.heading.length),
		"",
		`${b.focus}: ${focus}`,
		"",
		`${b.challenge}:`,
		challenge.trim() || b.empty,
		"",
		`${b.next} ${demoUrl}`,
		"",
	].join("\n");
	return { file: b.file, text };
}

export function renderB(lang, links) {
	const t = COPY_B[lang];
	return [
		nav(t, lang, links, { label: t.nav.cta, href: links.trial, track: "free_trial_nav" }),
		`<main class="vb">${hero(t)}${trio(t)}${faceId(t)}${products(t, links)}${custody(t)}${records(t)}${standards(t, links)}${compareB(t)}${security(t, links)}${resources(t, lang, true)}${faq(t)}${plan(t)}${finalB(t)}</main>`,
		footer(t, links),
	].join("");
}
