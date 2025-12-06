import { useEffect } from "react";

interface HeartExplosionProps {
  trigger: boolean;
}

const HeartExplosion = ({ trigger }: HeartExplosionProps) => {
  useEffect(() => {
    if (!trigger) return;

    const hearts = ["❤️", "💖", "💕", "💗", "💓", "💝", "♥️", "💘"];
    const colors = ["hsl(344 100% 50%)", "hsl(51 100% 50%)"];

    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const heart = document.createElement("div");
        heart.className = "heart-explosion";
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2000);
      }, i * 100);
    }
  }, [trigger]);

  return null;
};

export default HeartExplosion;
