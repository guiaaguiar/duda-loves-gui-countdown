import { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDuration = (Math.random() * 6 + 4) + "s";
      particle.style.animationDelay = Math.random() * 2 + "s";

      const colors = [
        "hsl(344 100% 50% / 0.8)",
        "hsl(344 100% 40% / 0.8)",
        "hsl(51 100% 50% / 0.6)",
        "hsl(0 0% 100% / 0.4)",
      ];
      particle.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent)`;

      container.appendChild(particle);
      setTimeout(() => particle.remove(), 10000);
    };

    // Create initial particles
    for (let i = 0; i < 15; i++) {
      setTimeout(() => createParticle(), i * 300);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-[1]"
      />
      <div className="wave-bg" />
    </>
  );
};

export default ParticlesBackground;
