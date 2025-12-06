import { Button } from "@/components/ui/button";

interface BlackFridaySectionProps {
  onButtonClick: () => void;
}

const BlackFridaySection = ({ onButtonClick }: BlackFridaySectionProps) => {
  return (
    <section className="my-16 text-center">
      <Button
        onClick={onButtonClick}
        className="btn-glow shine-effect text-foreground font-semibold text-lg md:text-xl px-10 md:px-14 py-6 md:py-7 rounded-full cursor-pointer transition-all duration-300"
      >
        Ainda não acabou? 🫢
      </Button>
    </section>
  );
};

export default BlackFridaySection;
