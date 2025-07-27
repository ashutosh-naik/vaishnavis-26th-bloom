import { Heart, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-floral-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-rose animate-pulse-soft" size={32} />
            <Heart className="text-primary animate-float" size={24} />
            <Sparkles className="text-lavender animate-pulse-soft" size={32} />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-[#3b1f2b] leading-tight drop-shadow-lg">
            Happy 25th Birthday!
          </h1>
          <div className="mb-8">
            <span className="text-3xl md:text-4xl font-semibold text-foreground animate-float pacifico-font">
              Vaishnavi ✨
            </span>
          </div>

          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-glow max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
              "On this special day, the world shines brighter because it's the
              day you were born. Thank you for being the light in my life. Happy
              25th Birthday, my dearest friend!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
