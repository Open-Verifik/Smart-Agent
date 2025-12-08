import { CompanyParticles } from "./company-particles.js";
import "./styles/base.css";
import "./styles/header.css";
import "./styles/hero.css";
import "./styles/capabilities.css";
import "./styles/architecture.css";
import "./styles/customers.css";
import "./styles/integration.css";
import "./styles/roadmap.css";
import "./styles/footer.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Initialize Company Particles (2D Canvas)
new CompanyParticles("particles-companies");

// Constants
const RADIUS = 5;
const SEGMENTS = 64;

// Scene Setup
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 18);

// Renderer
const canvas = document.querySelector("canvas#webgl");
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	antialias: true,
	alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = false;
controls.autoRotate = false;

// Container
const worldContainer = new THREE.Group();
scene.add(worldContainer);

// Texture Loader
const textureLoader = new THREE.TextureLoader();

// ------------------------------------------------------------------
// DATA & UTILS
// ------------------------------------------------------------------
const latLonToVector3 = (lat, lon, radius) => {
	const phi = (90 - lat) * (Math.PI / 180);
	const theta = (lon + 180) * (Math.PI / 180);
	const x = -(radius * Math.sin(phi) * Math.cos(theta));
	const z = radius * Math.sin(phi) * Math.sin(theta);
	const y = radius * Math.cos(phi);
	return new THREE.Vector3(x, y, z);
};

const pings = [
	{ name: "Colombia", lat: 4.5709, lon: -74.2973, color: 0x4ade80 },
	{ name: "Argentina", lat: -38.4161, lon: -63.6167, color: 0x3b82f6 },
	{ name: "Brazil", lat: -14.235, lon: -51.9253, color: 0xfacc15 },
	{ name: "Mexico", lat: 23.6345, lon: -102.5528, color: 0xef4444 },
	{ name: "Chile", lat: -35.6751, lon: -71.543, color: 0xffffff },
	{ name: "Peru", lat: -9.19, lon: -75.0152, color: 0xa855f7 },
	{ name: "USA", lat: 37.0902, lon: -95.7129, color: 0x22d3ee },
	{ name: "Canada", lat: 56.1304, lon: -106.3468, color: 0xffffff },
	{ name: "Costa Rica", lat: 9.7489, lon: -83.7534, color: 0x4ade80 },
	{ name: "Ecuador", lat: -1.8312, lon: -78.1834, color: 0xfacc15 },
	{ name: "Dominican Rep", lat: 18.7357, lon: -70.1627, color: 0xef4444 },
	{ name: "El Salvador", lat: 13.7942, lon: -88.8965, color: 0x3b82f6 },
	{ name: "Guatemala", lat: 15.7835, lon: -90.2308, color: 0xa855f7 },
	{ name: "Honduras", lat: 15.2, lon: -86.2419, color: 0x22d3ee },
	{ name: "Panama", lat: 8.538, lon: -80.7821, color: 0xffffff },
	{ name: "Paraguay", lat: -23.4425, lon: -58.4438, color: 0xef4444 },
	{ name: "Bolivia", lat: -16.2902, lon: -63.5887, color: 0xfacc15 },
	{ name: "Spain", lat: 40.4637, lon: -3.7492, color: 0xf97316 },
];

const getGlowTexture = () => {
	const canvas = document.createElement("canvas");
	canvas.width = 32;
	canvas.height = 32;
	const context = canvas.getContext("2d");
	const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
	gradient.addColorStop(0, "rgba(255,255,255,1)");
	gradient.addColorStop(0.2, "rgba(255,255,255,0.8)");
	gradient.addColorStop(0.5, "rgba(255,255,255,0.2)");
	gradient.addColorStop(1, "rgba(97, 54, 54, 0)");
	context.fillStyle = gradient;
	context.fillRect(0, 0, 32, 32);
	const texture = new THREE.CanvasTexture(canvas);
	return texture;
};
const glowTexture = getGlowTexture();

// ------------------------------------------------------------------
// BUILD WORLD (Satellite Only)
// ------------------------------------------------------------------
const realisticGroup = new THREE.Group();
worldContainer.add(realisticGroup);

const createRealisticEarth = () => {
	const geometry = new THREE.SphereGeometry(RADIUS, SEGMENTS, SEGMENTS);
	const material = new THREE.MeshPhongMaterial({
		map: textureLoader.load("./earth-day.jpg"),
		specularMap: textureLoader.load("./earth-specular.jpg"),
		normalMap: textureLoader.load("./earth-normal.jpg"),
		specular: new THREE.Color("grey"),
		shininess: 10,
	});
	const earth = new THREE.Mesh(geometry, material);
	realisticGroup.add(earth);

	// Atmosphere
	const vertexShader = `
        varying vec3 vNormal;
        void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;
	const fragmentShader = `
        varying vec3 vNormal;
        void main() {
            float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
            gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
        }
    `;
	const atmosGeo = new THREE.SphereGeometry(RADIUS + 0.2, SEGMENTS, SEGMENTS);
	const atmosMat = new THREE.ShaderMaterial({
		vertexShader,
		fragmentShader,
		blending: THREE.AdditiveBlending,
		side: THREE.BackSide,
		transparent: true,
	});
	const atmosphere = new THREE.Mesh(atmosGeo, atmosMat);
	realisticGroup.add(atmosphere);
};
createRealisticEarth();

const addMarkers = () => {
	const markers = new THREE.Group();
	pings.forEach((ping) => {
		const pos = latLonToVector3(ping.lat, ping.lon, RADIUS);

		// Core Dot
		const orbGeo = new THREE.SphereGeometry(0.04, 16, 16);
		const orbMat = new THREE.MeshBasicMaterial({ color: ping.color });
		const orb = new THREE.Mesh(orbGeo, orbMat);
		orb.position.copy(pos);
		markers.add(orb);

		// Star Trail (Invisible tube for calculation mostly, visually we use Sprite)
		const normal = pos.clone().normalize();
		const startPos = pos.clone().add(normal.multiplyScalar(3));

		const trailGeo = new THREE.BufferGeometry().setFromPoints([startPos, pos]);
		const trailMat = new THREE.LineBasicMaterial({
			color: ping.color,
			transparent: true,
			opacity: 0,
		});
		const trail = new THREE.Line(trailGeo, trailMat);

		trail.userData = {
			type: "starfall",
			start: startPos,
			end: pos,
			progress: Math.random(),
			speed: 0.5 + Math.random() * 0.5,
		};
		markers.add(trail);
	});
	realisticGroup.add(markers);
	return markers;
};
const markersGroup = addMarkers();

// Align Americas to Camera (Rotation 0)
worldContainer.rotation.y = 0;

// ------------------------------------------------------------------
// LIGHTS
// ------------------------------------------------------------------
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);
const sunLight = new THREE.DirectionalLight(0xffffff, 2);
sunLight.position.set(-5, 3, 10);
scene.add(sunLight);

// ------------------------------------------------------------------
// ANIMATION LOOP
// ------------------------------------------------------------------
const clock = new THREE.Clock();

const tick = () => {
	const elapsedTime = clock.getElapsedTime();
	controls.update();

	// Starfall Animation
	markersGroup.children.forEach((child) => {
		if (child.userData.type === "starfall") {
			child.userData.progress += child.userData.speed * 0.015;
			if (child.userData.progress > 1) {
				child.userData.progress = 0;
				child.userData.speed = 0.5 + Math.random() * 0.5;
			}

			const p = child.userData.progress;

			// Create head if missing
			if (!child.userData.head) {
				const headMat = new THREE.SpriteMaterial({
					map: glowTexture,
					color: child.material.color,
					transparent: true,
					blending: THREE.AdditiveBlending,
				});
				const head = new THREE.Sprite(headMat);
				head.scale.set(0.4, 0.4, 0.4);
				markersGroup.add(head);
				child.userData.head = head;
			}

			// Lerp position
			const start = child.userData.start;
			const end = child.userData.end;
			child.userData.head.position.lerpVectors(start, end, p * p);

			// Flash effect
			const impactZone = 0.95;
			if (p > impactZone) {
				const fade = (1 - p) / (1 - impactZone);
				child.userData.head.material.opacity = fade;
				child.userData.head.scale.setScalar(0.4 + (1 - fade) * 0.5);
			} else {
				child.userData.head.material.opacity = Math.min(p * 5, 1);
				child.userData.head.scale.set(0.4, 0.4, 0.4);
			}
		}
	});

	renderer.render(scene, camera);
	window.requestAnimationFrame(tick);
};
tick();

// Resize
window.addEventListener("resize", () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
