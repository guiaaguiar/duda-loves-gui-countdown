import { useState } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/Header";
import LoveCard from "@/components/LoveCard";
import PhotoGallery from "@/components/PhotoGallery";
import BlackFridaySection from "@/components/BlackFridaySection";
import Footer from "@/components/Footer";
import CouponModal from "@/components/CouponModal";
import HeartExplosion from "@/components/HeartExplosion";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState<"announcement" | "coupon">("announcement");
  const [triggerExplosion, setTriggerExplosion] = useState(false);

  const handleSurpriseClick = () => {
    setTriggerExplosion(true);
    setTimeout(() => setTriggerExplosion(false), 100);
  };

  const handleBlackFridayClick = () => {
    setModalStep("announcement");
    setShowModal(true);
  };

  const handleClaimCoupon = () => {
    setModalStep("coupon");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalStep("announcement");
  };

  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />
      <HeartExplosion trigger={triggerExplosion} />

      <div className="max-w-5xl mx-auto px-5 py-10 relative z-10">
        <Header />
        <LoveCard onSurpriseClick={handleSurpriseClick} />
        <PhotoGallery />
        <BlackFridaySection onButtonClick={handleBlackFridayClick} />
        <Footer />
      </div>

      <CouponModal
        isOpen={showModal}
        onClose={handleCloseModal}
        step={modalStep}
        onClaimClick={handleClaimCoupon}
      />
    </div>
  );
};

export default Index;
