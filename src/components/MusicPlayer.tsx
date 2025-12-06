import { useEffect, useRef, useState } from "react";
import { Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import musica from "@/assets/musica.mp3";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Tenta reproduzir automaticamente com volume mais baixo
    if (audioRef.current) {
      audioRef.current.volume = 0.4; 
      
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Autoplay bloqueado (esperando interação do usuário):", error);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <audio ref={audioRef} src={musica} loop />
      <Button
        onClick={togglePlay}
        variant="outline"
        size="icon"
        className={`rounded-full w-12 h-12 shadow-lg backdrop-blur-sm border-2 transition-all duration-300 ${
          isPlaying 
            ? "bg-primary/20 border-primary text-primary hover:bg-primary/30" 
            : "bg-background/50 border-muted-foreground/30 text-muted-foreground hover:bg-background/80"
        }`}
      >
        <Music className={`w-6 h-6 ${isPlaying ? "animate-pulse" : ""}`} />
      </Button>
    </div>
  );
};

export default MusicPlayer;
