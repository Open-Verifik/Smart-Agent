/**
 * Copy for landing A ("humanauthn.com V1.0 (A)" / "HumanAuthn Homepage v3" in Figma).
 * English is the Figma text; Spanish is our translation of it.
 */

const SOLUTION_KEYS = ["digitalId", "ciam", "data"];

export const COPY_A = {
	en: {
		nav: {
			items: [
				{
					label: "Products",
					links: [
						["Single Sign On (SSO)", "#integration"],
						["ID issuance", "#solutions"],
						["Verifiable credentials", "#solutions"],
						["Data encryption", "#solutions"],
						["Face recognition", "#how"],
					],
				},
				{
					label: "Solutions",
					links: [
						["Digital ID", "#solutions"],
						["Customer IAM", "#solutions"],
						["Data protection", "#solutions"],
						["Okta / Auth0 alternative", "#compare"],
					],
				},
				{
					label: "Resources",
					links: [
						["Developer docs", "@docs"],
						["Articles", "#resources"],
						["FAQ", "#faq"],
					],
				},
				{
					label: "Company",
					links: [
						["About Verifik", "@about"],
						["Contact", "@contact"],
					],
				},
			],
			login: "Log in",
			demo: "Request a demo",
			langLabel: "Language",
			menu: "Menu",
		},
		hero: {
			badgeNew: "New",
			badge: "Beyond passwords, passkeys and Face ID",
			title: "Know it's your customer, on any device, without storing their face.",
			subtitle:
				"Passwords prove a secret. Passkeys and Face ID prove someone can unlock a phone. HumanAuthn turns a live face into a cryptographic key, so you know it's the customer you enrolled, and no face is stored anywhere.",
			ctaVideo: "See how it works",
			ctaDemo: "Book a Demo",
		},
		trust: {
			title: "Already proving real people in production",
			caseName: "Zelf",
			caseBody:
				"Crypto wallet, password manager and 2FA where users sign in and recover access with a face scan instead of a seed phrase.",
			builtBy: "Built by Verifik, the identity verification company behind HumanAuthn.",
			stackTitle: "Drops into the login stack you already run",
			stack: [
				{ icon: "browser", title: "SAML 2.0", body: "Plug into your enterprise SSO" },
				{ icon: "openid", title: "OpenID Connect", body: "Add face login to any web or mobile app" },
				{ icon: "passkey", title: "Passkeys (FIDO2 / WebAuthn)", body: "Keep passkeys, add a check of the person" },
				{ icon: "credential", title: "W3C Verifiable Credentials", body: "Issue IDs other systems can verify" },
			],
		},
		stats: [
			{ value: "0", label: "face images stored" },
			{ value: "1:1", label: "match against your customer, never a face search" },
			{ value: "Any", label: "device with a camera, no extra hardware" },
		],
		why: {
			eyebrow: "Why HumanAuthn",
			title: "Passwords prove a secret. Passkeys prove a phone. HumanAuthn proves the person.",
			intro: "That gap is where account takeover, shared accounts and fake identities get in. HumanAuthn closes it in three ways.",
			cards: [
				{
					title: "Checks the person, not the device",
					body: "A live 1:1 face match with liveness detection confirms that the enrolled customer is there. A borrowed phone or a stolen passkey won't get anyone in.",
					note: "Passkeys and MFA apps let in whoever holds the device.",
				},
				{
					title: "No face database to breach",
					body: "HumanAuthn keeps no face images and no templates. A live face and stored random data rebuild the key at login, and the face data is then discarded.",
					note: "Other face logins keep templates on a server or chip. If those leak, nobody can reset a face.",
				},
				{
					title: "No lockouts",
					body: "Identity isn't tied to a phone. A customer with a new phone signs in with their face and keeps their account and digital ID. No seed phrases, no support tickets.",
					note: "With device-bound logins, a lost phone means a recovery ticket for your team.",
				},
			],
		},
		how: {
			eyebrow: "How it works",
			title: "The person is the root of trust",
			intro:
				"Passwords made a secret the root of trust. Passkeys made it the device. HumanAuthn makes it the person. A new implementation of fuzzy extractors rebuilds a cryptographic key from a live face, so no face template is ever stored.",
			steps: [
				{
					label: "01 · Enroll",
					chips: ["Live face", "Random data"],
					result: "Protected token",
					body: "A live face sample is combined with high-entropy random data to create a protected token. The face image and template are discarded.",
				},
				{
					label: "02 · Sign in",
					chips: ["Live face + liveness"],
					result: "Key rebuilt",
					body: "Only the enrolled customer's live face can rebuild the key from the token. A photo, a screen or a different face can't.",
				},
				{
					label: "03 · Prove",
					chips: ["Key"],
					result: "Login · ID · Data",
					accent: true,
					body: "The key opens what you protect: a sign-in, a digital ID or an encrypted record. Your app learns only yes or no.",
				},
			],
			facts: [
				{
					title: "Revocable face tokens",
					body: "Tokens are irreversible and can't be linked across services. If one is exposed, issue a new one. The face never has to change.",
				},
				{ title: "Liveness on every check", body: "Each face match checks for a live person, to stop photos, screens, masks and replays." },
				{
					title: "Data rights",
					body: "HumanAuthn authenticates customers who ask to export or transfer their data, supporting GDPR Article 20 requests.",
				},
			],
		},
		versus: {
			eyebrow: "HumanAuthn vs phone face unlock",
			title: "Facial authentication that knows your customer, not just the phone's owner",
			subtitle: "Same gesture. A different question.",
			intro:
				"Your customers already unlock their phones with a glance. Apple's Face ID, which uses TrueDepth and the Secure Enclave, does that job well, but it only tells your app that the phone's owner unlocked it. It can't tell you who that person is. HumanAuthn keeps the same gesture and checks the face against the customer enrolled in your service.",
			phone: {
				title: "Phone face unlock",
				question: "“Is this the phone's owner?”",
				rows: [
					["What your app learns", "A yes from the phone. Not who unlocked it."],
					["Where it works", "Only on the phone it was set up on."],
					["New or lost phone", "Start over. Your app can't link the new phone to the same customer."],
					["What it protects", "A key stored on that one phone."],
				],
			},
			ha: {
				title: "HumanAuthn",
				question: "“Is this the customer enrolled in your service?”",
				rows: [
					["What your app learns", "That your specific customer is present, proven by a 1:1 face match with liveness."],
					["Where it works", "Any phone, tablet or laptop with a camera, in your app or on the web."],
					["New or lost phone", "Same face, same customer identity, on the new device."],
					["What it protects", "Logins, credential presentation, sensitive actions and encrypted customer data, across all your channels."],
				],
			},
			note: "HumanAuthn is not affiliated with Apple. Face ID is a trademark of Apple Inc.",
			cta: "See how it works",
		},
		solutions: {
			eyebrow: "One product. Three uses.",
			title: "Digital ID, customer login and data protection",
			intro: "Use HumanAuthn to issue IDs, to sign customers in, or to protect the personal data you already hold. Start with one and add the others later.",
			cards: {
				digitalId: {
					tag: "Digital ID",
					title: "Issue portable digital IDs people control",
					body: "Issue digitally signed IDs to citizens, students, patients or members. Each ID holds public claims and encrypted attributes, travels as a QR code and is backed up by default. The holder proves it's theirs with a 1:1 face check.",
					bullets: ["Digital ID and eID issuance", "Verifiable credentials", "Self-custody, self-sovereign identity", "QR-based credential presentation"],
					for: "For governments, universities, hospitals and enterprises",
				},
				ciam: {
					tag: "Customer IAM",
					title: "Passwordless login for your customers",
					body: "Customers sign in with a passkey and a face check against their enrolled identity. HumanAuthn passes the result to your apps over SAML or OpenID Connect.",
					bullets: ["Single sign-on (SSO)", "Passkey-compatible", "Fresh authentication for payments and sensitive actions", "Works on any device with a camera"],
					for: "For fintechs, marketplaces, SaaS and online services",
				},
				data: {
					tag: "Data protection",
					title: "Encrypt personal data to its owner",
					body: "Names, ID numbers and contact details in your database stay encrypted until the right customer's face is verified. Stolen records stay unreadable, and verified data can be reused instead of repeating eKYC.",
					bullets: ["Personal-data encryption", "Reusable eKYC", "Data portability", "Public key infrastructure (PKI)"],
					for: "For banks, healthcare and any app holding personal data.",
				},
			},
			usedIn: "Used in",
			industries: ["Banking", "Fintech", "Government", "Healthcare", "Education", "Crypto and Web3", "Gaming", "E-commerce", "Ticketing"],
		},
		integration: {
			eyebrow: "Integration",
			title: "Add face-verified SSO with SAML or OpenID Connect",
			cta: "Read the developer docs",
			intro:
				"HumanAuthn acts as your identity provider. Your apps keep the SAML or OpenID Connect flow they already use. Start with one login flow, then roll out to more apps. A REST API and a Node.js SDK are available.",
			steps: [
				{
					icon: "user",
					tag: "01 → AUTHENTICATE",
					title: "Passkey + face check",
					body: "The user signs in with a passkey, and HumanAuthn confirms the enrolled person with a 1:1 face match and liveness check.",
				},
				{ icon: "doc", tag: "02 → FEDERATE", title: "SAML / OpenID Connect", body: "HumanAuthn sends the verified result to your application." },
				{
					icon: "checkSquare",
					tag: "03 → AUTHORIZE",
					title: "Your application",
					body: "Your app validates the result and applies its own permissions, transaction checks and business rules.",
				},
			],
		},
		compare: {
			eyebrow: "Compare",
			title: "An Okta and Auth0 alternative that checks the person",
			intro: "Okta and Auth0 are identity platforms that check passwords, devices and passkeys. HumanAuthn checks that the right person is there, and it can run on its own or next to them.",
			head: ["Perspective", "Okta / Auth0", "HumanAuthn"],
			rows: [
				["Product focus", "Identity platforms for workforce and customer apps", "Digital ID, customer IAM and data protection, with face verification"],
				["What a login proves", "The user holds the right password, MFA factor or passkey", "The enrolled person is present: passkey plus a 1:1 face match with liveness"],
				["Biometrics", "Used locally on the user's device to unlock a factor", "Checked against the person enrolled in your service, with no biometric database"],
				["Portable digital ID", "Focus is on accounts and access", "Issues signed IDs as verifiable credentials, carried by QR code"],
				["What to evaluate", "Breadth of integrations and identity operations", "Credential portability, enrolled-person verification, custody and protection of personal attributes"],
				["App integration", "SAML, OpenID Connect and a large app catalog", "SAML and OpenID Connect"],
			],
			note: "Already on Okta or Auth0? Add HumanAuthn as the step that checks the person. Replacing workforce IAM needs a separate look at provisioning, governance and lifecycle management.",
			cta: "Talk to us about your setup",
		},
		resources: {
			eyebrow: "HumanAuthn Resources",
			title: "Ideas for a more secure and connected digital identity.",
			intro: "Explore key concepts for creating portable digital identities, authenticating users, and protecting their information in your applications.",
			filters: { all: "All", identity: "Digital Identity", auth: "Authentication", data: "Data Protection", more: "More" },
			read: "Read article",
			posts: [
				{
					art: "portable",
					cat: "identity",
					kicker: "Digital identity · Colombia",
					title: "KYC Colombia API (2026): 10 Verifications to Validate ID, Background, and PEP Status",
					body: "Learn about the validation methods you can integrate to strengthen your customer understanding processes.",
				},
				{
					art: "card",
					cat: "auth",
					kicker: "Digital identity · Mexico",
					title: "API para validar INE en México (2026): verifica la credencial para votar con 1 solo identificador",
					body: "Find out how to integrate INE data into your digital workflows using an API.",
				},
				{
					art: "phone",
					cat: "data",
					kicker: "Vehicle inspection · Colombia",
					title: "API consulta SOAT y tecnomecánica en Colombia (2026): controla la vigencia de tu flota con 3 parámetros",
					body: "Learn about the validation methods you can integrate to strengthen your customer understanding processes.",
				},
			],
			date: "Nov. 3, 2026 · Johan",
		},
		faq: {
			eyebrow: "A few good questions",
			title: "Clarity builds trust.",
			side: "Straight answers on how HumanAuthn checks the person, what it stores and how it fits into your stack.",
			items: [
				{
					q: "What is HumanAuthn?",
					a: "HumanAuthn is an authentication technology that checks the person, not the device. A live face check produces cryptographic proof that the enrolled customer is there, and no biometric data is stored. You can use it for digital IDs, customer login and personal-data protection.",
				},
				{
					q: "How is HumanAuthn different from passkeys?",
					a: "A passkey proves that the right device or credential is present, and it can be unlocked with a face, a fingerprint or a PIN. HumanAuthn adds a separate face match against the customer enrolled in your service, so you know who is there, not just which phone.",
				},
				{
					q: "Is HumanAuthn Apple's Face ID?",
					a: "No. Face ID is Apple's hardware-backed system, using TrueDepth and the Secure Enclave on supported Apple devices. HumanAuthn has its own architecture for digital credentials and customer authentication, and works on any device with a camera. HumanAuthn is not affiliated with Apple.",
				},
				{
					q: "Does HumanAuthn store our customers' faces?",
					a: "No. HumanAuthn keeps no face images or biometric templates. A live face sample and stored random data recreate a key, and the face sample is discarded after the check.",
				},
				{
					q: "Is biometric authentication secure?",
					a: "It depends on where the biometric data lives. A stored face template can be stolen, and a face can't be reset. HumanAuthn stores no template, checks liveness every time and uses revocable tokens, so there is no face database to breach.",
				},
				{
					q: "What is 1:1 face verification?",
					a: "It compares a live face with one specific enrolled identity to answer “is this the right person?” It never searches a crowd or a database of faces.",
				},
				{
					q: "What does self-custody mean here?",
					a: "The individual holds their credential and takes part in proving their identity, instead of an organization holding it for them. Who controls keys, storage, backup and recovery is set for each deployment, and that decides how far self-custody goes.",
				},
				{
					q: "What happens if a customer loses their phone?",
					a: "They sign in on a new device with their face. Digital IDs are backed up by default, so the customer gets them back without a seed phrase or a support ticket.",
				},
				{
					q: "Is HumanAuthn an Okta or Auth0 alternative?",
					a: "For customer identity and access management (CIAM) and digital ID, yes. It can also run next to an existing Okta or Auth0 setup as the step that checks the person.",
				},
				{
					q: "Does HumanAuthn make us GDPR compliant?",
					a: "HumanAuthn supports privacy by design and data-portability requests. Full GDPR compliance also depends on how your organization collects and processes personal data.",
				},
			],
		},
		final: {
			eyebrow: "Identity starts with a human",
			title1: "Stop proving devices.",
			title2: "Start proving people.",
			body: "Your brand. Your applications. A stronger connection to your customers. See HumanAuthn on your own login flow in a 30-minute demo.",
			docs: "Read the developer docs",
			form: {
				title: "Request a demo",
				email: "Work email",
				emailPh: "you@company.com",
				company: "Company",
				companyPh: "Company name",
				interest: "Interested in",
				options: ["Digital ID", "Customer IAM", "Data protection", "Not sure yet"],
				problem: "What identity problem are you solving? (optional)",
				problemPh: "For example: portable customer IDs and passwordless login across our apps.",
				submit: "Request my demo",
				sent: "Thanks. We're opening the calendar so you can pick a time.",
			},
		},
		footer: {
			brand: "Authentication that checks the person, not the device. Built by Verifik.",
			cols: [
				{
					title: "Products",
					groups: [
						["Identity & Access Management", ["Single Sign On (SSO)", "ID Issuance", "Verifiable Credential", "Self-sovereign Identity"]],
						["Security", ["Data Encryption", "Data Portability", "Public Key Infrastructure (PKI)"]],
						["Capabilities", ["Face Recognition", "Biometric Authentication", "Data Minimization"]],
					],
				},
				{
					title: "Solutions",
					groups: [
						["By identity type", ["Customer IAM", "Workforce IAM", "Digital Identity eID"]],
						["By security", ["Encryption", "Personal Data Security", "Authorization", "Digital Signature"]],
						["By industry", ["Banking", "Fintech", "Ticketing", "Crypto", "Gaming & Casinos", "Cybersecurity", "E-commerce"]],
					],
				},
				{ title: "Resources", links: [["Developer docs", "@docs"], ["Articles", "#resources"], ["FAQ", "#faq"], ["Pricing", "@pricing"]] },
				{ title: "Company", links: [["About Verifik", "@about"], ["Contact", "@contact"], ["Log in", "@login"]] },
			],
			rights: "All rights reserved.",
			legal: "Face ID is a trademark of Apple Inc. Okta and Auth0 are trademarks of Okta, Inc. HumanAuthn is not affiliated with either company.",
		},
		modal: { close: "Close video", videoTitle: "HumanAuthn: how it works" },
	},

	es: {
		nav: {
			items: [
				{
					label: "Productos",
					links: [
						["Inicio de sesión único (SSO)", "#integration"],
						["Emisión de identidades", "#solutions"],
						["Credenciales verificables", "#solutions"],
						["Cifrado de datos", "#solutions"],
						["Reconocimiento facial", "#how"],
					],
				},
				{
					label: "Soluciones",
					links: [
						["Identidad digital", "#solutions"],
						["IAM de clientes", "#solutions"],
						["Protección de datos", "#solutions"],
						["Alternativa a Okta / Auth0", "#compare"],
					],
				},
				{
					label: "Recursos",
					links: [
						["Documentación", "@docs"],
						["Artículos", "#resources"],
						["Preguntas frecuentes", "#faq"],
					],
				},
				{
					label: "Compañía",
					links: [
						["Sobre Verifik", "@about"],
						["Contacto", "@contact"],
					],
				},
			],
			login: "Ingresar",
			demo: "Solicitar demo",
			langLabel: "Idioma",
			menu: "Menú",
		},
		hero: {
			badgeNew: "Nuevo",
			badge: "Más allá de contraseñas, passkeys y Face ID",
			title: "Sabe que es tu cliente, en cualquier dispositivo, sin guardar su rostro.",
			subtitle:
				"Las contraseñas prueban un secreto. Las passkeys y Face ID prueban que alguien puede desbloquear un teléfono. HumanAuthn convierte un rostro en vivo en una llave criptográfica, para que sepas que es el cliente que registraste, sin guardar ningún rostro en ninguna parte.",
			ctaVideo: "Mira cómo funciona",
			ctaDemo: "Agenda una demo",
		},
		trust: {
			title: "Ya verifica personas reales en producción",
			caseName: "Zelf",
			caseBody:
				"Billetera cripto, gestor de contraseñas y 2FA donde los usuarios ingresan y recuperan su acceso con un escaneo facial en lugar de una frase semilla.",
			builtBy: "Creado por Verifik, la compañía de verificación de identidad detrás de HumanAuthn.",
			stackTitle: "Se integra al stack de login que ya usas",
			stack: [
				{ icon: "browser", title: "SAML 2.0", body: "Conéctalo a tu SSO empresarial" },
				{ icon: "openid", title: "OpenID Connect", body: "Agrega login facial a cualquier app web o móvil" },
				{ icon: "passkey", title: "Passkeys (FIDO2 / WebAuthn)", body: "Mantén las passkeys y suma una verificación de la persona" },
				{ icon: "credential", title: "Credenciales verificables W3C", body: "Emite identidades que otros sistemas pueden verificar" },
			],
		},
		stats: [
			{ value: "0", label: "imágenes de rostros guardadas" },
			{ value: "1:1", label: "comparación con tu cliente, nunca una búsqueda de rostros" },
			{ value: "Cualquier", label: "dispositivo con cámara, sin hardware adicional" },
		],
		why: {
			eyebrow: "Por qué HumanAuthn",
			title: "Las contraseñas prueban un secreto. Las passkeys prueban un teléfono. HumanAuthn prueba a la persona.",
			intro: "Por esa brecha entran la toma de cuentas, las cuentas compartidas y las identidades falsas. HumanAuthn la cierra de tres formas.",
			cards: [
				{
					title: "Verifica a la persona, no el dispositivo",
					body: "Una comparación facial 1:1 en vivo con detección de vida confirma que el cliente registrado está ahí. Un teléfono prestado o una passkey robada no le dan acceso a nadie.",
					note: "Las passkeys y las apps de MFA dejan entrar a quien tenga el dispositivo.",
				},
				{
					title: "Sin base de datos de rostros que filtrar",
					body: "HumanAuthn no guarda imágenes ni plantillas faciales. Un rostro en vivo y datos aleatorios guardados reconstruyen la llave al ingresar, y luego se descartan los datos del rostro.",
					note: "Otros logins faciales guardan plantillas en un servidor o un chip. Si se filtran, nadie puede cambiar su rostro.",
				},
				{
					title: "Sin bloqueos de cuenta",
					body: "La identidad no depende de un teléfono. Un cliente con un teléfono nuevo ingresa con su rostro y conserva su cuenta y su identidad digital. Sin frases semilla ni tickets de soporte.",
					note: "Con logins atados al dispositivo, un teléfono perdido es un ticket de recuperación para tu equipo.",
				},
			],
		},
		how: {
			eyebrow: "Cómo funciona",
			title: "La persona es la raíz de confianza",
			intro:
				"Las contraseñas hicieron de un secreto la raíz de confianza. Las passkeys, del dispositivo. HumanAuthn la pone en la persona. Una nueva implementación de extractores difusos (fuzzy extractors) reconstruye una llave criptográfica a partir de un rostro en vivo, así que nunca se guarda una plantilla facial.",
			steps: [
				{
					label: "01 · Registro",
					chips: ["Rostro en vivo", "Datos aleatorios"],
					result: "Token protegido",
					body: "Una muestra del rostro en vivo se combina con datos aleatorios de alta entropía para crear un token protegido. La imagen y la plantilla del rostro se descartan.",
				},
				{
					label: "02 · Ingreso",
					chips: ["Rostro en vivo + prueba de vida"],
					result: "Llave reconstruida",
					body: "Solo el rostro en vivo del cliente registrado puede reconstruir la llave a partir del token. Una foto, una pantalla u otro rostro no pueden.",
				},
				{
					label: "03 · Prueba",
					chips: ["Llave"],
					result: "Login · ID · Datos",
					accent: true,
					body: "La llave abre lo que proteges: un inicio de sesión, una identidad digital o un registro cifrado. Tu app solo recibe un sí o un no.",
				},
			],
			facts: [
				{
					title: "Tokens faciales revocables",
					body: "Los tokens son irreversibles y no se pueden vincular entre servicios. Si uno queda expuesto, se emite uno nuevo. El rostro nunca tiene que cambiar.",
				},
				{
					title: "Prueba de vida en cada verificación",
					body: "Cada comparación facial confirma que hay una persona viva, para frenar fotos, pantallas, máscaras y repeticiones.",
				},
				{
					title: "Derechos sobre los datos",
					body: "HumanAuthn autentica a los clientes que piden exportar o transferir sus datos, en apoyo de las solicitudes del Artículo 20 del GDPR.",
				},
			],
		},
		versus: {
			eyebrow: "HumanAuthn vs. desbloqueo facial del teléfono",
			title: "Autenticación facial que conoce a tu cliente, no solo al dueño del teléfono",
			subtitle: "El mismo gesto. Otra pregunta.",
			intro:
				"Tus clientes ya desbloquean su teléfono con una mirada. Face ID de Apple, que usa TrueDepth y el Secure Enclave, hace bien ese trabajo, pero solo le dice a tu app que el dueño del teléfono lo desbloqueó. No te dice quién es esa persona. HumanAuthn mantiene el mismo gesto y compara el rostro con el cliente registrado en tu servicio.",
			phone: {
				title: "Desbloqueo facial del teléfono",
				question: "“¿Es el dueño del teléfono?”",
				rows: [
					["Lo que sabe tu app", "Un sí del teléfono. No quién lo desbloqueó."],
					["Dónde funciona", "Solo en el teléfono donde se configuró."],
					["Teléfono nuevo o perdido", "Empezar de cero. Tu app no puede vincular el teléfono nuevo con el mismo cliente."],
					["Lo que protege", "Una llave guardada en ese único teléfono."],
				],
			},
			ha: {
				title: "HumanAuthn",
				question: "“¿Es el cliente registrado en tu servicio?”",
				rows: [
					["Lo que sabe tu app", "Que tu cliente específico está presente, probado con una comparación facial 1:1 con prueba de vida."],
					["Dónde funciona", "Cualquier teléfono, tablet o portátil con cámara, en tu app o en la web."],
					["Teléfono nuevo o perdido", "El mismo rostro, la misma identidad del cliente, en el dispositivo nuevo."],
					["Lo que protege", "Logins, presentación de credenciales, acciones sensibles y datos cifrados de clientes, en todos tus canales."],
				],
			},
			note: "HumanAuthn no está afiliado con Apple. Face ID es una marca registrada de Apple Inc.",
			cta: "Mira cómo funciona",
		},
		solutions: {
			eyebrow: "Un producto. Tres usos.",
			title: "Identidad digital, login de clientes y protección de datos",
			intro: "Usa HumanAuthn para emitir identidades, para que tus clientes ingresen o para proteger los datos personales que ya tienes. Empieza con uno y suma los otros después.",
			cards: {
				digitalId: {
					tag: "Identidad digital",
					title: "Emite identidades digitales portables que la gente controla",
					body: "Emite identidades firmadas digitalmente para ciudadanos, estudiantes, pacientes o miembros. Cada identidad tiene datos públicos y atributos cifrados, viaja como un código QR y tiene respaldo por defecto. El titular prueba que es suya con una verificación facial 1:1.",
					bullets: ["Emisión de identidad digital y eID", "Credenciales verificables", "Autocustodia e identidad autosoberana", "Presentación de credenciales con QR"],
					for: "Para gobiernos, universidades, hospitales y empresas",
				},
				ciam: {
					tag: "IAM de clientes",
					title: "Login sin contraseña para tus clientes",
					body: "Tus clientes ingresan con una passkey y una verificación facial contra su identidad registrada. HumanAuthn envía el resultado a tus apps por SAML u OpenID Connect.",
					bullets: ["Inicio de sesión único (SSO)", "Compatible con passkeys", "Reautenticación para pagos y acciones sensibles", "Funciona en cualquier dispositivo con cámara"],
					for: "Para fintechs, marketplaces, SaaS y servicios en línea",
				},
				data: {
					tag: "Protección de datos",
					title: "Cifra los datos personales para su dueño",
					body: "Los nombres, números de documento y datos de contacto de tu base de datos siguen cifrados hasta que se verifica el rostro del cliente correcto. Los registros robados siguen ilegibles, y los datos verificados se pueden reutilizar en vez de repetir el eKYC.",
					bullets: ["Cifrado de datos personales", "eKYC reutilizable", "Portabilidad de datos", "Infraestructura de llave pública (PKI)"],
					for: "Para bancos, salud y cualquier app que maneje datos personales.",
				},
			},
			usedIn: "Se usa en",
			industries: ["Banca", "Fintech", "Gobierno", "Salud", "Educación", "Cripto y Web3", "Gaming", "E-commerce", "Ticketing"],
		},
		integration: {
			eyebrow: "Integración",
			title: "Agrega SSO con verificación facial por SAML u OpenID Connect",
			cta: "Lee la documentación",
			intro:
				"HumanAuthn funciona como tu proveedor de identidad. Tus apps mantienen el flujo SAML u OpenID Connect que ya usan. Empieza con un flujo de login y luego extiéndelo a más apps. Hay una API REST y un SDK de Node.js.",
			steps: [
				{
					icon: "user",
					tag: "01 → AUTENTICAR",
					title: "Passkey + verificación facial",
					body: "El usuario ingresa con una passkey y HumanAuthn confirma a la persona registrada con una comparación facial 1:1 y prueba de vida.",
				},
				{ icon: "doc", tag: "02 → FEDERAR", title: "SAML / OpenID Connect", body: "HumanAuthn envía el resultado verificado a tu aplicación." },
				{
					icon: "checkSquare",
					tag: "03 → AUTORIZAR",
					title: "Tu aplicación",
					body: "Tu app valida el resultado y aplica sus propios permisos, controles de transacciones y reglas de negocio.",
				},
			],
		},
		compare: {
			eyebrow: "Compara",
			title: "Una alternativa a Okta y Auth0 que verifica a la persona",
			intro: "Okta y Auth0 son plataformas de identidad que verifican contraseñas, dispositivos y passkeys. HumanAuthn verifica que la persona correcta esté ahí, y puede funcionar sola o junto a ellas.",
			head: ["Perspectiva", "Okta / Auth0", "HumanAuthn"],
			rows: [
				["Foco del producto", "Plataformas de identidad para apps de empleados y clientes", "Identidad digital, IAM de clientes y protección de datos, con verificación facial"],
				["Qué prueba un login", "Que el usuario tiene la contraseña, el factor MFA o la passkey correctos", "Que la persona registrada está presente: passkey más una comparación facial 1:1 con prueba de vida"],
				["Biometría", "Se usa localmente en el dispositivo del usuario para desbloquear un factor", "Se compara con la persona registrada en tu servicio, sin base de datos biométrica"],
				["Identidad digital portable", "El foco está en cuentas y accesos", "Emite identidades firmadas como credenciales verificables, que se presentan con QR"],
				["Qué evaluar", "Amplitud de integraciones y operaciones de identidad", "Portabilidad de credenciales, verificación de la persona registrada, custodia y protección de atributos personales"],
				["Integración con apps", "SAML, OpenID Connect y un catálogo grande de apps", "SAML y OpenID Connect"],
			],
			note: "¿Ya usas Okta o Auth0? Agrega HumanAuthn como el paso que verifica a la persona. Reemplazar el IAM de empleados requiere revisar aparte el aprovisionamiento, la gobernanza y la gestión del ciclo de vida.",
			cta: "Cuéntanos de tu configuración",
		},
		resources: {
			eyebrow: "Recursos de HumanAuthn",
			title: "Ideas para una identidad digital más segura y conectada.",
			intro: "Explora conceptos clave para crear identidades digitales portables, autenticar usuarios y proteger su información en tus aplicaciones.",
			filters: { all: "Todos", identity: "Identidad digital", auth: "Autenticación", data: "Protección de datos", more: "Más" },
			read: "Leer artículo",
			posts: [
				{
					art: "portable",
					cat: "identity",
					kicker: "Identidad digital · Colombia",
					title: "API KYC Colombia (2026): 10 verificaciones para validar identidad, antecedentes y PEP",
					body: "Conoce los métodos de validación que puedes integrar para fortalecer tus procesos de conocimiento del cliente.",
				},
				{
					art: "card",
					cat: "auth",
					kicker: "Identidad digital · México",
					title: "API para validar INE en México (2026): verifica la credencial para votar con 1 solo identificador",
					body: "Descubre cómo integrar los datos del INE en tus flujos digitales usando una API.",
				},
				{
					art: "phone",
					cat: "data",
					kicker: "Inspección vehicular · Colombia",
					title: "API consulta SOAT y tecnomecánica en Colombia (2026): controla la vigencia de tu flota con 3 parámetros",
					body: "Conoce los métodos de validación que puedes integrar para fortalecer tus procesos de conocimiento del cliente.",
				},
			],
			date: "3 nov. 2026 · Johan",
		},
		faq: {
			eyebrow: "Algunas buenas preguntas",
			title: "La claridad genera confianza.",
			side: "Respuestas directas sobre cómo HumanAuthn verifica a la persona, qué guarda y cómo encaja en tu stack.",
			items: [
				{
					q: "¿Qué es HumanAuthn?",
					a: "HumanAuthn es una tecnología de autenticación que verifica a la persona, no el dispositivo. Una verificación facial en vivo produce una prueba criptográfica de que el cliente registrado está ahí, y no se guardan datos biométricos. Puedes usarla para identidades digitales, login de clientes y protección de datos personales.",
				},
				{
					q: "¿En qué se diferencia HumanAuthn de las passkeys?",
					a: "Una passkey prueba que el dispositivo o la credencial correctos están presentes, y se puede desbloquear con un rostro, una huella o un PIN. HumanAuthn agrega una comparación facial aparte contra el cliente registrado en tu servicio, para que sepas quién está ahí y no solo qué teléfono.",
				},
				{
					q: "¿HumanAuthn es el Face ID de Apple?",
					a: "No. Face ID es el sistema de Apple basado en hardware, que usa TrueDepth y el Secure Enclave en dispositivos Apple compatibles. HumanAuthn tiene su propia arquitectura para credenciales digitales y autenticación de clientes, y funciona en cualquier dispositivo con cámara. HumanAuthn no está afiliado con Apple.",
				},
				{
					q: "¿HumanAuthn guarda los rostros de nuestros clientes?",
					a: "No. HumanAuthn no guarda imágenes faciales ni plantillas biométricas. Una muestra del rostro en vivo y datos aleatorios guardados recrean una llave, y la muestra del rostro se descarta después de la verificación.",
				},
				{
					q: "¿La autenticación biométrica es segura?",
					a: "Depende de dónde estén los datos biométricos. Una plantilla facial guardada se puede robar, y un rostro no se puede cambiar. HumanAuthn no guarda plantillas, verifica la prueba de vida cada vez y usa tokens revocables, así que no hay una base de datos de rostros que filtrar.",
				},
				{
					q: "¿Qué es la verificación facial 1:1?",
					a: "Compara un rostro en vivo con una identidad registrada específica para responder “¿es la persona correcta?”. Nunca busca en una multitud ni en una base de datos de rostros.",
				},
				{
					q: "¿Qué significa autocustodia aquí?",
					a: "La persona tiene su credencial y participa en probar su identidad, en lugar de que una organización la guarde por ella. Quién controla las llaves, el almacenamiento, el respaldo y la recuperación se define en cada implementación, y eso decide hasta dónde llega la autocustodia.",
				},
				{
					q: "¿Qué pasa si un cliente pierde su teléfono?",
					a: "Ingresa en un dispositivo nuevo con su rostro. Las identidades digitales tienen respaldo por defecto, así que el cliente las recupera sin frase semilla ni ticket de soporte.",
				},
				{
					q: "¿HumanAuthn es una alternativa a Okta o Auth0?",
					a: "Para gestión de identidad y acceso de clientes (CIAM) e identidad digital, sí. También puede funcionar junto a una configuración de Okta o Auth0 existente, como el paso que verifica a la persona.",
				},
				{
					q: "¿HumanAuthn nos hace cumplir con el GDPR?",
					a: "HumanAuthn apoya la privacidad desde el diseño y las solicitudes de portabilidad de datos. El cumplimiento completo del GDPR también depende de cómo tu organización recolecta y procesa los datos personales.",
				},
			],
		},
		final: {
			eyebrow: "La identidad empieza con un humano",
			title1: "Deja de probar dispositivos.",
			title2: "Empieza a probar personas.",
			body: "Tu marca. Tus aplicaciones. Una conexión más fuerte con tus clientes. Mira HumanAuthn en tu propio flujo de login en una demo de 30 minutos.",
			docs: "Lee la documentación",
			form: {
				title: "Solicita una demo",
				email: "Correo de trabajo",
				emailPh: "tu@empresa.com",
				company: "Empresa",
				companyPh: "Nombre de la empresa",
				interest: "Me interesa",
				options: ["Identidad digital", "IAM de clientes", "Protección de datos", "Aún no sé"],
				problem: "¿Qué problema de identidad quieres resolver? (opcional)",
				problemPh: "Por ejemplo: identidades portables para clientes y login sin contraseña en nuestras apps.",
				submit: "Solicitar mi demo",
				sent: "Gracias. Te abrimos el calendario para que elijas una hora.",
			},
		},
		footer: {
			brand: "Autenticación que verifica a la persona, no el dispositivo. Creado por Verifik.",
			cols: [
				{
					title: "Productos",
					groups: [
						["Gestión de identidad y acceso", ["Inicio de sesión único (SSO)", "Emisión de identidades", "Credencial verificable", "Identidad autosoberana"]],
						["Seguridad", ["Cifrado de datos", "Portabilidad de datos", "Infraestructura de llave pública (PKI)"]],
						["Capacidades", ["Reconocimiento facial", "Autenticación biométrica", "Minimización de datos"]],
					],
				},
				{
					title: "Soluciones",
					groups: [
						["Por tipo de identidad", ["IAM de clientes", "IAM de empleados", "Identidad digital eID"]],
						["Por seguridad", ["Cifrado", "Seguridad de datos personales", "Autorización", "Firma digital"]],
						["Por industria", ["Banca", "Fintech", "Ticketing", "Cripto", "Gaming y casinos", "Ciberseguridad", "E-commerce"]],
					],
				},
				{ title: "Recursos", links: [["Documentación", "@docs"], ["Artículos", "#resources"], ["Preguntas frecuentes", "#faq"], ["Precios", "@pricing"]] },
				{ title: "Compañía", links: [["Sobre Verifik", "@about"], ["Contacto", "@contact"], ["Ingresar", "@login"]] },
			],
			rights: "Todos los derechos reservados.",
			legal: "Face ID es una marca registrada de Apple Inc. Okta y Auth0 son marcas registradas de Okta, Inc. HumanAuthn no está afiliado con ninguna de las dos.",
		},
		modal: { close: "Cerrar video", videoTitle: "HumanAuthn: cómo funciona" },
	},
};

export { SOLUTION_KEYS };
