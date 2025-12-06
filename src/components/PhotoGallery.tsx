const PhotoGallery = () => {
  const photos = [
    { emoji: "📸", label: "Foto 1" },
    { emoji: "💕", label: "Foto 2" },
    { emoji: "🌹", label: "Foto 3" },
    { emoji: "✨", label: "Foto 4" },
    { emoji: "💖", label: "Foto 5" },
    { emoji: "🥰", label: "Foto 6" },
  ];

  return (
    <section className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6 lg:gap-8 my-10 md:my-16 max-w-4xl mx-auto px-2 sm:px-0">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="photo-frame aspect-square rounded-xl sm:rounded-2xl md:rounded-3xl p-1.5 sm:p-2 md:p-3 transition-all duration-500 float-animation-delayed flex flex-col items-center justify-center cursor-pointer"
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <span className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl">{photo.emoji}</span>
          <small className="text-silver/80 text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2">
            {photo.label}
          </small>
        </div>
      ))}
    </section>
  );
};

export default PhotoGallery;
