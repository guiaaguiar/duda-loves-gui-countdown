import foto1 from "@/assets/foto1.jpg";
import foto2 from "@/assets/foto2.jpg";
import foto3 from "@/assets/foto3.jpg";
import foto4 from "@/assets/foto4.png";
import foto5 from "@/assets/foto5.png";
import foto6 from "@/assets/foto6.png";

const PhotoGallery = () => {
  const photos = [
    { src: foto1, label: "Noite especial" },
    { src: foto2, label: "Gui e Pipoca" },
    { src: foto3, label: "Praia juntos" },
    { src: foto4, label: "Beijo no São João" },
    { src: foto5, label: "Festa em família" },
    { src: foto6, label: "Minha princesa" },
  ];

  return (
    <section className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6 lg:gap-8 my-10 md:my-16 max-w-4xl mx-auto px-2 sm:px-0">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="photo-frame aspect-square rounded-xl sm:rounded-2xl md:rounded-3xl p-1 sm:p-1.5 md:p-2 transition-all duration-500 float-animation-delayed flex flex-col items-center justify-center cursor-pointer overflow-hidden"
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <img 
            src={photo.src} 
            alt={photo.label}
            className="w-full h-full object-cover rounded-lg sm:rounded-xl md:rounded-2xl"
          />
        </div>
      ))}
    </section>
  );
};

export default PhotoGallery;
