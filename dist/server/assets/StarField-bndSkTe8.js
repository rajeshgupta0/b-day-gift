import { jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
function StarField({ density = 1, className = "" }) {
  const ref = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const colorPalette = [
      { hue: 340, name: "Rose Pink" },
      // #FF4D8D
      { hue: 270, name: "Lavender" },
      // #A855F7
      { hue: 190, name: "Sky Cyan" },
      // #67E8F9
      { hue: 50, name: "Soft Gold" }
      // #FBBF24
    ];
    const count = Math.floor(window.innerWidth * window.innerHeight / 5e3 * density);
    const stars = Array.from({ length: count }, () => {
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        z: Math.random() * 0.8 + 0.2,
        r: Math.random() * 1.5 + 0.3,
        hue: color.hue,
        tw: Math.random() * Math.PI * 2,
        speed: 1e-3 + Math.random() * 3e-3
      };
    });
    let shootTimer = 0;
    const shooters = [];
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);
    resize();
    let last = performance.now();
    const tick = (now) => {
      const dt = Math.min(50, now - last);
      last = now;
      ctx.clearRect(0, 0, w, h);
      const grd1 = ctx.createRadialGradient(w * 0.3, h * 0.2, 0, w * 0.3, h * 0.2, Math.max(w, h) * 0.6);
      grd1.addColorStop(0, "rgba(255, 77, 141, 0.08)");
      grd1.addColorStop(0.5, "rgba(168, 85, 247, 0.04)");
      grd1.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grd1;
      ctx.fillRect(0, 0, w, h);
      const grd2 = ctx.createRadialGradient(w * 0.7, h * 0.6, 0, w * 0.7, h * 0.6, Math.max(w, h) * 0.5);
      grd2.addColorStop(0, "rgba(103, 232, 249, 0.06)");
      grd2.addColorStop(0.7, "rgba(255, 77, 141, 0.02)");
      grd2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grd2;
      ctx.fillRect(0, 0, w, h);
      const grd3 = ctx.createRadialGradient(w * 0.5, h * 0.8, 0, w * 0.5, h * 0.8, Math.max(w, h) * 0.4);
      grd3.addColorStop(0, "rgba(251, 191, 36, 0.04)");
      grd3.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grd3;
      ctx.fillRect(0, 0, w, h);
      for (const s of stars) {
        s.tw += dt * s.speed;
        const alpha = 0.3 + Math.sin(s.tw) * 0.4;
        const px = s.x + mouse.current.x * 30 * s.z;
        const py = s.y + mouse.current.y * 30 * s.z;
        ctx.beginPath();
        ctx.shadowBlur = 10 * s.z;
        ctx.shadowColor = `hsla(${s.hue}, 85%, 65%, ${alpha * 0.8})`;
        ctx.fillStyle = `hsla(${s.hue}, 85%, 70%, ${alpha})`;
        ctx.arc(px, py, s.r * s.z, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.shadowBlur = 4 * s.z;
        ctx.fillStyle = `hsla(${s.hue}, 90%, 85%, ${alpha * 0.6})`;
        ctx.arc(px, py, s.r * s.z * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      shootTimer -= dt;
      if (shootTimer <= 0) {
        shootTimer = 3e3 + Math.random() * 5e3;
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        shooters.push({
          x: Math.random() * w * 0.7,
          y: Math.random() * h * 0.4,
          vx: 0.7 + Math.random() * 0.5,
          vy: 0.3 + Math.random() * 0.3,
          life: 1,
          hue: color.hue
        });
      }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const sh = shooters[i];
        sh.x += sh.vx * dt;
        sh.y += sh.vy * dt;
        sh.life -= dt * 15e-4;
        if (sh.life <= 0 || sh.x > w + 100 || sh.y > h + 100) {
          shooters.splice(i, 1);
          continue;
        }
        const tailX = sh.x - sh.vx * 80;
        const tailY = sh.y - sh.vy * 80;
        const lg = ctx.createLinearGradient(tailX, tailY, sh.x, sh.y);
        lg.addColorStop(0, `hsla(${sh.hue}, 85%, 65%, 0)`);
        lg.addColorStop(0.3, `hsla(${sh.hue}, 85%, 65%, ${sh.life * 0.6})`);
        lg.addColorStop(1, `hsla(${sh.hue}, 85%, 70%, ${sh.life})`);
        ctx.strokeStyle = lg;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(sh.x, sh.y);
        ctx.stroke();
        ctx.beginPath();
        ctx.fillStyle = `hsla(${sh.hue}, 90%, 75%, ${sh.life * 0.8})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `hsla(${sh.hue}, 90%, 65%, ${sh.life})`;
        ctx.arc(sh.x, sh.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      if (Math.random() < 0.05) {
        const particleCount = Math.floor(Math.random() * 3) + 1;
        for (let p = 0; p < particleCount; p++) {
          ctx.beginPath();
          ctx.fillStyle = `hsla(${colorPalette[Math.floor(Math.random() * colorPalette.length)].hue}, 80%, 70%, 0.3)`;
          ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
    };
  }, [density]);
  return /* @__PURE__ */ jsx(
    "canvas",
    {
      ref,
      className: `pointer-events-none absolute inset-0 h-full w-full ${className}`,
      "aria-hidden": true
    }
  );
}
export {
  StarField as S
};
