import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";
import floralFrame from "@/assets/floral-frame.jpg";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.jpg";

const photos = [
  { id: 1, url: photo1, caption: "Your beautiful smile" },
  { id: 2, url: photo2, caption: "Always so graceful" },
  { id: 3, url: photo3, caption: "Radiating joy" },
  { id: 4, url: photo4, caption: "Natural beauty" },
  { id: 5, url: photo5, caption: "Elegant as always" },
];

export const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-gradient-soft flex items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="text-primary animate-float" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Beautiful Memories
          </h2>
          <p className="text-xl text-muted-foreground">
            A collection of moments that make you shine ✨
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="flex items-center justify-center">
            <button
              onClick={prevPhoto}
              className="absolute left-4 z-30 p-3 bg-card/80 backdrop-blur-sm rounded-full shadow-soft text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-float"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="relative mx-20">
              {/* Polaroid Style Frame */}
              <div className="bg-card p-4 rounded-lg shadow-glow transform hover:scale-105 transition-transform duration-300 max-w-md mx-auto">
                <div className="relative">
                  <img
                    src={photos[currentIndex].url}
                    alt={photos[currentIndex].caption}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  {/* Floral border overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 rounded-lg mix-blend-multiply"
                    style={{ backgroundImage: `url(${floralFrame})` }}
                  />
                </div>
                <p className="text-center mt-4 text-foreground font-medium">
                  {photos[currentIndex].caption}
                </p>
              </div>
            </div>

            <button
              onClick={nextPhoto}
              className="absolute right-4 z-30 p-3 bg-card/80 backdrop-blur-sm rounded-full shadow-soft text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-float"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-2xl mx-auto">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative group overflow-hidden rounded-lg transition-all duration-300 ${
                index === currentIndex
                  ? "ring-4 ring-primary shadow-glow transform scale-105"
                  : "hover:scale-105 shadow-soft"
              }`}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-20 object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
