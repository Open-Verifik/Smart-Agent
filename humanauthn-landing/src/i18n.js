/**
 * Copy for the HumanAuthn landing, in English and Spanish.
 * Keys under `hero.a` / `hero.b` belong to each A/B variant; the rest is shared.
 */
export const META = {
	en: {
		title: "Face Verification Without a Face Database | HumanAuthn",
		description:
			"Add face verification to any app with our API and SDK. 1:1 match with liveness, no face images or templates stored, works on any device with a camera.",
	},
	es: {
		title: "Verificación facial sin base de datos de rostros | HumanAuthn",
		description:
			"Agrega verificación facial a cualquier app con nuestra API y SDK. Comparación 1:1 con prueba de vida, sin guardar imágenes ni plantillas faciales, en cualquier dispositivo con cámara.",
	},
};

export const COPY = {
	en: {
		nav: {
			product: "Product",
			how: "How it works",
			useCases: "Use cases",
			developers: "Developers",
			faq: "FAQ",
			login: "Log in",
			trial: "Free trial",
			langLabel: "Change language",
			menu: "Open menu",
		},
		hero: {
			a: {
				badgeNew: "New",
				badge: "Face verification, zero face storage",
				title1: "Know it's your customer.",
				title2: "Without storing their face.",
				subtitle:
					"Add face verification to any app with our API and SDK. 1:1 match with liveness, no face images or templates stored, and it works on any device with a camera.",
			},
			b: {
				badgeNew: "New",
				badge: "The human layer of digital identity",
				title1: "Self-custody identity.",
				title2: "Human-powered access.",
				subtitle:
					"Secure your customer journeys with portable digital IDs, facial verification, and passwordless authentication. HumanAuthn helps connect access credentials to the enrolled person, while your business stays in control of access decisions.",
			},
			ctaVideo: "See how it works",
			ctaDemo: "Book a Demo",
		},
		stats: [
			{ value: "1:1", label: "Face match with liveness" },
			{ value: "0", label: "Face images or templates stored" },
			{ value: "+10M", label: "Validations processed by Verifik" },
			{ value: "Web + mobile", label: "Any device with a camera" },
		],
		why: {
			eyebrow: "Why HumanAuthn",
			title: "Biometric certainty without the biometric liability.",
			subtitle:
				"Traditional face verification keeps a database of faces you have to protect forever. HumanAuthn verifies the person and lets the biometric data go.",
			cards: [
				{
					icon: "shield",
					title: "No face database",
					body: "Face images and templates are never stored. There is nothing to leak, breach, or delete later.",
				},
				{
					icon: "scan",
					title: "1:1 match with liveness",
					body: "Each check confirms a real, present person and matches them to the enrolled identity, blocking photos, screens and masks.",
				},
				{
					icon: "key",
					title: "Self-custody HumanID",
					body: "The identity proof is encrypted and portable. The person carries it, your business decides who gets access.",
				},
				{
					icon: "device",
					title: "Works on any device",
					body: "Web, iOS and Android. If it has a camera, it can verify. No special hardware or app downloads.",
				},
			],
		},
		how: {
			eyebrow: "How it works",
			title: "From selfie to verified access in seconds.",
			steps: [
				{
					title: "Enroll once",
					body: "The person takes a selfie with liveness. HumanAuthn binds it to their identity as an encrypted HumanID proof.",
				},
				{
					title: "Verify anywhere",
					body: "On login, recovery or a sensitive action, a new selfie is matched 1:1 against the proof the person presents.",
				},
				{
					title: "Decide access",
					body: "Your app gets a clear result and stays in control of the access decision. No face data is kept.",
				},
			],
			videoTitle: "Watch HumanAuthn in action",
			play: "Play video",
		},
		useCases: {
			eyebrow: "Use cases",
			title: "One human check for every critical moment.",
			items: [
				{ title: "Passwordless login", body: "Replace passwords and OTPs with a face the person always has with them." },
				{ title: "Account recovery", body: "Stop SIM-swap and social engineering takeovers by asking for the real person, not a code." },
				{ title: "High-value transactions", body: "Step up authentication for payments, withdrawals and changes to sensitive data." },
				{ title: "Workforce access", body: "Confirm that the employee behind the session is the one who was onboarded." },
				{ title: "Returning customers", body: "Re-verify existing customers without asking them to repeat full KYC." },
				{ title: "Shared devices", body: "Know who is using a kiosk, tablet or point of sale before granting access." },
			],
		},
		dev: {
			eyebrow: "Developers",
			title: "API and SDK that fit into your stack.",
			body: "Integrate with a few lines of code using our REST API, web SDK or mobile SDKs. Test everything for free in the Verifik dashboard.",
			bullets: ["REST API and webhooks", "Web, iOS and Android SDKs", "Sandbox and free trial credits", "Hosted by Verifik, ISO-aligned security"],
			cta: "Read the docs",
		},
		faq: {
			eyebrow: "FAQ",
			title: "Frequently asked questions",
			items: [
				{
					q: "If you don't store faces, how do you verify the person?",
					a: "At enrollment HumanAuthn creates an encrypted HumanID proof bound to the person. At verification, a fresh selfie with liveness is matched 1:1 against that proof, and the images are discarded after the check.",
				},
				{
					q: "What devices are supported?",
					a: "Any device with a camera: desktop and mobile browsers, iOS and Android apps.",
				},
				{
					q: "How does liveness detection work?",
					a: "Every capture is checked to confirm a real, present person, rejecting printed photos, screens, videos and masks.",
				},
				{
					q: "Can I try it before buying?",
					a: "Yes. Create a free account in the Verifik dashboard to test HumanAuthn with trial credits, or book a demo with our team.",
				},
			],
		},
		cta: {
			title: "Bring human identity into your customer experience.",
			body: "Start for free or talk to our team about your use case.",
			trial: "Start free trial",
			demo: "Book a Demo",
		},
		footer: {
			tagline: "Face verification without a face database. A Verifik product.",
			product: "Product",
			resources: "Resources",
			company: "Company",
			docs: "Documentation",
			dashboard: "Dashboard",
			pricing: "Pricing",
			about: "About Verifik",
			contact: "Contact",
			rights: "All rights reserved.",
		},
		modal: { close: "Close video" },
	},
	es: {
		nav: {
			product: "Producto",
			how: "Cómo funciona",
			useCases: "Casos de uso",
			developers: "Desarrolladores",
			faq: "Preguntas",
			login: "Iniciar sesión",
			trial: "Prueba gratis",
			langLabel: "Cambiar idioma",
			menu: "Abrir menú",
		},
		hero: {
			a: {
				badgeNew: "Nuevo",
				badge: "Verificación facial sin guardar rostros",
				title1: "Confirma que es tu cliente.",
				title2: "Sin guardar su rostro.",
				subtitle:
					"Agrega verificación facial a cualquier app con nuestra API y SDK. Comparación 1:1 con prueba de vida, sin guardar imágenes ni plantillas faciales, en cualquier dispositivo con cámara.",
			},
			b: {
				badgeNew: "Nuevo",
				badge: "La capa humana de la identidad digital",
				title1: "Identidad bajo tu custodia.",
				title2: "Acceso impulsado por personas.",
				subtitle:
					"Protege los recorridos de tus clientes con identidades digitales portables, verificación facial y autenticación sin contraseñas. HumanAuthn conecta las credenciales de acceso con la persona registrada, mientras tu negocio mantiene el control de las decisiones de acceso.",
			},
			ctaVideo: "Mira cómo funciona",
			ctaDemo: "Agenda una demo",
		},
		stats: [
			{ value: "1:1", label: "Comparación facial con prueba de vida" },
			{ value: "0", label: "Imágenes o plantillas faciales guardadas" },
			{ value: "+10M", label: "Validaciones procesadas por Verifik" },
			{ value: "Web y móvil", label: "Cualquier dispositivo con cámara" },
		],
		why: {
			eyebrow: "Por qué HumanAuthn",
			title: "Certeza biométrica sin el riesgo de guardar biometría.",
			subtitle:
				"La verificación facial tradicional mantiene una base de datos de rostros que debes proteger para siempre. HumanAuthn verifica a la persona y deja ir los datos biométricos.",
			cards: [
				{
					icon: "shield",
					title: "Sin base de datos de rostros",
					body: "Nunca se guardan imágenes ni plantillas faciales. No hay nada que filtrar, vulnerar ni borrar después.",
				},
				{
					icon: "scan",
					title: "Comparación 1:1 con prueba de vida",
					body: "Cada validación confirma que hay una persona real y presente, y la compara con la identidad registrada. Bloquea fotos, pantallas y máscaras.",
				},
				{
					icon: "key",
					title: "HumanID bajo custodia propia",
					body: "La prueba de identidad está cifrada y es portable. La persona la lleva consigo y tu negocio decide quién accede.",
				},
				{
					icon: "device",
					title: "Funciona en cualquier dispositivo",
					body: "Web, iOS y Android. Si tiene cámara, puede verificar. Sin hardware especial ni descargas.",
				},
			],
		},
		how: {
			eyebrow: "Cómo funciona",
			title: "De la selfie al acceso verificado en segundos.",
			steps: [
				{
					title: "Registra una vez",
					body: "La persona se toma una selfie con prueba de vida. HumanAuthn la vincula a su identidad como una prueba HumanID cifrada.",
				},
				{
					title: "Verifica donde sea",
					body: "Al iniciar sesión, recuperar la cuenta o hacer una acción sensible, una nueva selfie se compara 1:1 con la prueba que presenta la persona.",
				},
				{
					title: "Decide el acceso",
					body: "Tu app recibe un resultado claro y mantiene el control de la decisión. No se guardan datos faciales.",
				},
			],
			videoTitle: "Mira HumanAuthn en acción",
			play: "Reproducir video",
		},
		useCases: {
			eyebrow: "Casos de uso",
			title: "Una validación humana para cada momento crítico.",
			items: [
				{ title: "Inicio de sesión sin contraseña", body: "Reemplaza contraseñas y códigos OTP por un rostro que la persona siempre lleva consigo." },
				{ title: "Recuperación de cuentas", body: "Frena el robo de cuentas por SIM swap e ingeniería social pidiendo a la persona real, no un código." },
				{ title: "Transacciones de alto valor", body: "Refuerza la autenticación en pagos, retiros y cambios de datos sensibles." },
				{ title: "Acceso de colaboradores", body: "Confirma que el empleado detrás de la sesión es el mismo que se vinculó." },
				{ title: "Clientes recurrentes", body: "Vuelve a verificar clientes existentes sin pedirles repetir todo el KYC." },
				{ title: "Dispositivos compartidos", body: "Sabe quién usa un kiosco, tablet o punto de venta antes de dar acceso." },
			],
		},
		dev: {
			eyebrow: "Desarrolladores",
			title: "API y SDK que se integran a tu stack.",
			body: "Intégralo con pocas líneas de código usando nuestra API REST, el SDK web o los SDK móviles. Prueba todo gratis en el panel de Verifik.",
			bullets: ["API REST y webhooks", "SDK para web, iOS y Android", "Sandbox y créditos de prueba gratis", "Infraestructura de Verifik con seguridad alineada a ISO"],
			cta: "Ver la documentación",
		},
		faq: {
			eyebrow: "Preguntas",
			title: "Preguntas frecuentes",
			items: [
				{
					q: "Si no guardan rostros, ¿cómo verifican a la persona?",
					a: "En el registro, HumanAuthn crea una prueba HumanID cifrada y vinculada a la persona. En la verificación, una selfie nueva con prueba de vida se compara 1:1 con esa prueba, y las imágenes se descartan al terminar.",
				},
				{
					q: "¿Qué dispositivos son compatibles?",
					a: "Cualquier dispositivo con cámara: navegadores de escritorio y móviles, y apps de iOS y Android.",
				},
				{
					q: "¿Cómo funciona la prueba de vida?",
					a: "Cada captura se valida para confirmar que hay una persona real y presente, y rechaza fotos impresas, pantallas, videos y máscaras.",
				},
				{
					q: "¿Puedo probarlo antes de comprar?",
					a: "Sí. Crea una cuenta gratis en el panel de Verifik para probar HumanAuthn con créditos de prueba, o agenda una demo con nuestro equipo.",
				},
			],
		},
		cta: {
			title: "Lleva la identidad humana a la experiencia de tus clientes.",
			body: "Empieza gratis o habla con nuestro equipo sobre tu caso de uso.",
			trial: "Empezar prueba gratis",
			demo: "Agenda una demo",
		},
		footer: {
			tagline: "Verificación facial sin base de datos de rostros. Un producto de Verifik.",
			product: "Producto",
			resources: "Recursos",
			company: "Compañía",
			docs: "Documentación",
			dashboard: "Panel",
			pricing: "Precios",
			about: "Sobre Verifik",
			contact: "Contacto",
			rights: "Todos los derechos reservados.",
		},
		modal: { close: "Cerrar video" },
	},
};

/** Per-language destinations. */
export const LINKS = {
	en: {
		login: "https://ai.verifik.co/human-authn",
		trial: "https://ai.verifik.co/human-authn",
		pricing: "https://ai.verifik.co/human-authn/plans",
		demo: "https://verifik.co/en/book-meeting",
		docs: "https://docs.verifik.co/",
		about: "https://verifik.co/en/",
		contact: "https://verifik.co/en/book-meeting",
	},
	es: {
		login: "https://ai.verifik.co/human-authn",
		trial: "https://ai.verifik.co/human-authn",
		pricing: "https://ai.verifik.co/human-authn/plans",
		demo: "https://verifik.co/agendar-sesion/",
		docs: "https://docs.verifik.co/verifik-es/intro/",
		about: "https://verifik.co/acerca-de-verifik/",
		contact: "https://verifik.co/agendar-sesion/",
	},
};

/**
 * "See how it works" videos (YouTube ids). Spanish was shared by Johan on 2026-11-09.
 * When the English upload exists, put its id in `en`; until then the Spanish one is used.
 */
export const VIDEOS = {
	es: "PQpyeU0Bgcl",
	en: "",
};
