import foto1 from "@/assets/foto1.jpg";
import foto2 from "@/assets/foto2.jpg";
import foto3 from "@/assets/foto3.jpg";
import foto4 from "@/assets/foto4.jpg";
import foto5 from "@/assets/foto5.jpg";
import foto6 from "@/assets/foto6.jpg";
import foto7 from "@/assets/foto7.jpg";
import foto8 from "@/assets/foto8.jpg";
import foto9 from "@/assets/foto9.jpg";

const PhotoGallery = () => {
  const photos = [
    { src: foto1, label: "Buquê especial" },
    { src: foto2, label: "Nós dois" },
    { src: foto3, label: "Flores para você" },
    { src: foto4, label: "Barraca do beijo" },
    { src: foto5, label: "Stitch de pelúcia" },
    { src: foto6, label: "Minha princesa" },
    { src: foto7, label: "Nosso beijo" },
    { src: foto8, label: "Rosas lindas" },
    { src: foto9, label: "Girassóis" },
  ];

  return (
    <section className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-3 md:gap-6 lg:gap-8 my-8 md:my-16 max-w-4xl mx-auto px-1 xs:px-2 sm:px-4">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="photo-frame aspect-square rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-3xl p-0.5 xs:p-1 sm:p-1.5 md:p-2 transition-all duration-500 float-animation-delayed flex flex-col items-center justify-center cursor-pointer overflow-hidden"
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <img 
            src={photo.src} 
            alt={photo.label}
            className="w-full h-full object-cover rounded-md xs:rounded-lg sm:rounded-xl md:rounded-2xl"
          />
        </div>
      ))}
    </section>
  );
};

export default PhotoGallery;
