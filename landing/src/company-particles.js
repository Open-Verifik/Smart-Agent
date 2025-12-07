export class CompanyParticles {
	constructor(canvasId) {
		this.canvas = document.getElementById(canvasId);
		if (!this.canvas) return;

		this.ctx = this.canvas.getContext("2d");
		this.points = [];
		this.width = this.canvas.width = this.canvas.offsetWidth;
		this.height = this.canvas.height = this.canvas.offsetHeight;
		this.frameCount = 0;

		// Configuration
		this.pointCount = 40; // Number of particles
		this.connectionDistance = 150;
		this.mouseDistance = 200;

		this.mouse = { x: null, y: null };

		this.init();
		this.animate();
		this.handleResize();
		this.handleMouseMove();
	}

	init() {
		this.points = [];
		for (let i = 0; i < this.pointCount; i++) {
			this.points.push({
				x: Math.random() * this.width,
				y: Math.random() * this.height,
				vx: (Math.random() - 0.5) * 0.5, // Slow horizontal drift
				vy: (Math.random() - 0.5) * 0.5, // Slow vertical drift
				size: Math.random() * 2 + 1,
			});
		}
	}

	animate() {
		this.ctx.clearRect(0, 0, this.width, this.height);

		// Update Points
		this.points.forEach((p) => {
			p.x += p.vx;
			p.y += p.vy;

			// Bounce off walls
			if (p.x < 0 || p.x > this.width) p.vx *= -1;
			if (p.y < 0 || p.y > this.height) p.vy *= -1;

			// Mouse interaction
			if (this.mouse.x != null) {
				const dx = this.mouse.x - p.x;
				const dy = this.mouse.y - p.y;
				const dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < this.mouseDistance) {
					const force = (this.mouseDistance - dist) / this.mouseDistance;
					p.x -= (dx / dist) * force * 1; // Repel slightly
					p.y -= (dy / dist) * force * 1;
				}
			}
		});

		// Draw Connections
		this.ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
		this.ctx.lineWidth = 1;

		for (let i = 0; i < this.points.length; i++) {
			for (let j = i + 1; j < this.points.length; j++) {
				const dx = this.points[i].x - this.points[j].x;
				const dy = this.points[i].y - this.points[j].y;
				const dist = Math.sqrt(dx * dx + dy * dy);

				if (dist < this.connectionDistance) {
					const opacity = 1 - dist / this.connectionDistance;
					this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.15})`;
					this.ctx.beginPath();
					this.ctx.moveTo(this.points[i].x, this.points[i].y);
					this.ctx.lineTo(this.points[j].x, this.points[j].y);
					this.ctx.stroke();
				}
			}
		}

		// Draw Points
		this.points.forEach((p) => {
			this.ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
			this.ctx.beginPath();
			this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
			this.ctx.fill();
		});

		requestAnimationFrame(this.animate.bind(this));
	}

	handleResize() {
		window.addEventListener("resize", () => {
			this.width = this.canvas.width = this.canvas.offsetWidth;
			this.height = this.canvas.height = this.canvas.offsetHeight;
			this.init(); // Re-init on resize to redistribute
		});
	}

	handleMouseMove() {
		// Track mouse relative to canvas
		const section = document.getElementById("inf_crsl-vk");
		if (section) {
			section.addEventListener("mousemove", (e) => {
				const rect = this.canvas.getBoundingClientRect();
				this.mouse.x = e.clientX - rect.left;
				this.mouse.y = e.clientY - rect.top;
			});
			section.addEventListener("mouseleave", () => {
				this.mouse.x = null;
				this.mouse.y = null;
			});
		}
	}
}
