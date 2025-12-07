import { useState, useEffect } from "react";
import { Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CouponModalProps {
  isOpen: boolean;
  onClose: () => void;
  step: "announcement" | "coupon";
  onClaimClick: () => void;
}

const CouponModal = ({ isOpen, onClose, step, onClaimClick }: CouponModalProps) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 5, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          return prev;
        }
        
        if (prev.seconds === 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, "0");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="modal-card border-2 border-primary/40 max-w-[90vw] md:max-w-md mx-auto">
        {step === "announcement" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl md:text-3xl font-bold gradient-text-special text-center leading-tight">
                A BLACK FRIDAY AINDA NÃO ACABOU! CORRE QUE AINDA TEM CUPOM!
              </DialogTitle>
            </DialogHeader>
            <div className="flex justify-center mt-8">
              <Button
                onClick={onClaimClick}
                className="btn-glow shine-effect text-foreground font-semibold text-lg px-8 py-6 rounded-full cursor-pointer transition-all duration-300 flex items-center gap-3"
              >
                <Tag className="w-5 h-5" />
                Resgatar Cupom
              </Button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
            <DialogTitle className="text-xl md:text-2xl font-bold gradient-text-special text-center leading-tight">
                RESGATE AGORA SEU CUPOM DE -100% DE DESCONTO! POR TEMPO LIMITADO!
              </DialogTitle>
              <DialogDescription className="text-center mt-4">
                <div className="flex justify-center gap-2 text-2xl md:text-3xl font-bold text-gold">
                  <span className="bg-secondary/50 px-3 py-2 rounded-lg">
                    {formatTime(timeLeft.minutes)}
                  </span>
                  <span className="text-primary">:</span>
                  <span className="bg-secondary/50 px-3 py-2 rounded-lg">
                    {formatTime(timeLeft.seconds)}
                  </span>
                </div>
              </DialogDescription>
            </DialogHeader>

            <div className="flex justify-center mt-8">
              <div className="btn-coupon text-xl md:text-2xl font-bold px-8 py-4 rounded-full tracking-widest">
                UNOGOURMET07
              </div>
            </div>

            <p className="text-xs text-silver/50 text-center mt-8 leading-relaxed lowercase">
              *Esse cupom só é válido até a data de expiração do mesversário de 10 (dez) meses 
              de namoro de gui e duda, após esse prazo, a utilização do mesmo será inválida, 
              conforme o{" "}
              <a
                href=""
                className="text-primary hover:text-primary/80 underline transition-colors"
              >
                regulamento de contrato
              </a>
              .
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CouponModal;
