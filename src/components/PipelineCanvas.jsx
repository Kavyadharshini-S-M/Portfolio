import { useEffect, useRef } from 'react';

export default function PipelineCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animId;
        let nodes = [];
        let particles = [];
        let width, height;

        function resize() {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
            createNodes();
        }

        function createNodes() {
            const count = Math.floor((width * height) / 25000);
            nodes = [];
            for (let i = 0; i < count; i++) {
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 2 + 1,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    pulse: Math.random() * Math.PI * 2,
                });
            }
            particles = [];
            for (let i = 0; i < Math.floor(count / 3); i++) {
                spawnParticle();
            }
        }

        function spawnParticle() {
            if (!nodes.length) return;
            const s = nodes[Math.floor(Math.random() * nodes.length)];
            const e = nodes[Math.floor(Math.random() * nodes.length)];
            if (s === e) return;
            particles.push({
                x: s.x, y: s.y,
                tx: e.x, ty: e.y,
                progress: 0,
                speed: 0.003 + Math.random() * 0.008,
                size: Math.random() * 2 + 1,
            });
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);
            const maxDist = 150;

            // Connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < maxDist) {
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(0,212,170,${(1 - dist / maxDist) * 0.08})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // Nodes
            const t = Date.now() * 0.001;
            nodes.forEach((n) => {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0) n.x = width;
                if (n.x > width) n.x = 0;
                if (n.y < 0) n.y = height;
                if (n.y > height) n.y = 0;

                const pulse = Math.sin(t + n.pulse) * 0.5 + 0.5;
                const r = n.radius + pulse * 0.8;

                ctx.beginPath();
                ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0,212,170,0.35)';
                ctx.fill();

                ctx.beginPath();
                ctx.arc(n.x, n.y, r + 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0,212,170,${0.03 * pulse})`;
                ctx.fill();
            });

            // Particles
            particles.forEach((p) => {
                p.progress += p.speed;
                if (p.progress >= 1) {
                    const s = nodes[Math.floor(Math.random() * nodes.length)];
                    const e = nodes[Math.floor(Math.random() * nodes.length)];
                    p.x = s.x; p.y = s.y;
                    p.tx = e.x; p.ty = e.y;
                    p.progress = 0;
                    p.speed = 0.003 + Math.random() * 0.008;
                    return;
                }
                const cx = p.x + (p.tx - p.x) * p.progress;
                const cy = p.y + (p.ty - p.y) * p.progress;

                ctx.beginPath();
                ctx.arc(cx, cy, p.size + 2, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0,212,170,0.15)';
                ctx.fill();

                ctx.beginPath();
                ctx.arc(cx, cy, p.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0,255,200,0.8)';
                ctx.fill();
            });

            animId = requestAnimationFrame(draw);
        }

        resize();
        draw();

        window.addEventListener('resize', resize);

        const onVisibility = () => {
            if (document.hidden) cancelAnimationFrame(animId);
            else draw();
        };
        document.addEventListener('visibilitychange', onVisibility);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
            document.removeEventListener('visibilitychange', onVisibility);
        };
    }, []);

    return <canvas ref={canvasRef} className="hero-canvas" />;
}
