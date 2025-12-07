import { useState } from "react";
import { Button } from "@/components/ui/button";

interface LoveCardProps {
  onSurpriseClick: () => void;
}

const LoveCard = ({
  onSurpriseClick
}: LoveCardProps) => {
  const [showSpecialMessage, setShowSpecialMessage] = useState(false);
  const handleSurpriseClick = () => {
    setShowSpecialMessage(true);
    onSurpriseClick();
  };
  return (
    <main className="glass-card rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 my-6 md:my-10 text-center float-animation mx-2 sm:mx-0">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text-gold mb-6 md:mb-10">
        Minha Alma Gêmea 💕
      </h2>

      <div className="text-base sm:text-lg md:text-xl text-silver font-light leading-relaxed mb-8 md:mb-12 message-glow px-2">
        <p>
          Maria, você é a mulher mais incrível que já conheci. Eu te amo tanto e sou tão louco por você que minha vida não faz mais sentido sem ter você comigo, cada dia se tornou mais , mais com mais significado, mais propósito. Minha oração sempre vai ser para que possamos viver sempre a vontade do Senhor no nosso casamento e vida todinha juntos ❣️
        </p>
        <br />
        <p>
          Dividir a vida com você é um privilégio! Contigo descobri que o amor verdadeiro não é apenas um sentimento, é uma decisão. É, na verdade, a certeza de que encontrei minha pessoa para sempre! ❤️
        </p>
      </div>

      <Button onClick={handleSurpriseClick} className="btn-glow shine-effect text-foreground font-semibold text-xs xs:text-sm sm:text-lg md:text-xl px-4 xs:px-6 sm:px-10 md:px-14 py-3 xs:py-4 sm:py-6 md:py-7 rounded-full cursor-pointer transition-all duration-300 my-6 md:my-10 whitespace-normal text-center leading-tight">
        ✨ Uma Surpresa Especial Para Você ✨
      </Button>

      <div className={`special-message-card rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-12 mt-6 md:mt-10 border-2 border-primary/30 transition-all duration-700 relative overflow-hidden ${showSpecialMessage ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-90 pointer-events-none h-0 p-0 mt-0 border-0"}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-[message-wave_4s_ease-in-out_infinite]" />
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text-special mb-4 md:mb-8 relative z-10">
          💖 Do Fundo Do Meu Coração 💖
        </h3>
        <p className="text-silver text-sm sm:text-base md:text-lg leading-relaxed text-center font-light relative z-10">
          Maria Eduarda, você é a resposta da minha oração mais secreta. Que ninguém nunca ouviu além do Senhor. Você é sal e luz nesse mundo! Só a tua presença muda o ambiente, e eu amo muito e adimiro isso você.
        </p>
        <br />
        <p className="text-silver text-sm sm:text-base md:text-lg leading-relaxed text-center font-light relative z-10">
          Obrigado por ser minha companheira, louvo a Deus pela sua vida! Minha parceira pavidatoda, minha melhor amiga e meu grande amor. Comemorando hoje 10 meses juntos, quero que saiba disso: você é tudo que sempre sonhei e muito mais! 💝
        </p>
      </div>
    </main>
  );
};

export default LoveCard;
