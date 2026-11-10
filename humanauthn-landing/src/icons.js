const svg = (body, size = 24, extra = "") =>
	`<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra}>${body}</svg>`;

/** Simple face illustration used for the floating hero avatars. */
const avatar = (skin, hair, shirt) => `
<svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
	<rect width="64" height="64" rx="14" fill="#efeaff"/>
	<path d="M10 64c2-12 11-18 22-18s20 6 22 18z" fill="${shirt}"/>
	<circle cx="32" cy="30" r="12" fill="${skin}"/>
	<path d="M20 28c0-9 6-14 12-14s12 5 12 14c-3-5-8-7-12-7s-9 2-12 7z" fill="${hair}"/>
	<circle cx="27.5" cy="31" r="1.4" fill="#1d1b3a"/><circle cx="36.5" cy="31" r="1.4" fill="#1d1b3a"/>
	<path d="M28 36.5c2.4 2 5.6 2 8 0" stroke="#1d1b3a" stroke-width="1.5" fill="none" stroke-linecap="round"/>
</svg>`;

export const ICONS = {
	logo: `<svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true"><defs><linearGradient id="hag" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#8b5cf6"/><stop offset="1" stop-color="#5b2cf5"/></linearGradient></defs><rect width="32" height="32" rx="9" fill="url(#hag)"/><path d="M10 9v14M22 9v14M10 16h12" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/></svg>`,
	globe: svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z"/>', 20),
	menu: svg('<path d="M4 7h16M4 12h16M4 17h16"/>', 22),
	close: svg('<path d="M6 6l12 12M18 6L6 18"/>', 22),
	arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>', 14),
	circleChevron: svg('<circle cx="12" cy="12" r="9"/><path d="M10.5 8.5L14 12l-3.5 3.5"/>', 20),
	play: `<svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg>`,
	check: svg('<path d="M5 12.5l4.5 4.5L19 7.5"/>', 18),
	plus: svg('<path d="M12 5v14M5 12h14"/>', 20, ' class="faq__icon"'),
	shield: svg('<path d="M12 3l7 3v5.5c0 4.4-3 8.3-7 9.5-4-1.2-7-5.1-7-9.5V6z"/><path d="M9 12l2 2 4-4"/>'),
	scan: svg('<path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="11" r="3"/><path d="M7.5 17c1-2 2.6-3 4.5-3s3.5 1 4.5 3"/>'),
	key: svg('<circle cx="8" cy="15" r="4"/><path d="M11 12l8-8M16 7l2 2M14 9l2 2"/>'),
	device: svg('<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><circle cx="12" cy="6" r="0.8" fill="currentColor"/><path d="M10.5 18.5h3"/>'),
	avatarA: avatar("#f2c7a5", "#3b2a20", "#7c3aed"),
	avatarB: avatar("#8d5a3b", "#1c1410", "#22c55e"),
};
