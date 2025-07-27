import { Heart, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-floral-bg.jpg";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  // Timer logic
  const [elapsed, setElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date("2025-03-21T17:00:00");
    const updateElapsed = () => {
      const now = new Date();
      let diff = Math.max(0, now.getTime() - startDate.getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);
      const seconds = Math.floor(diff / 1000);
      setElapsed({ days, hours, minutes, seconds });
    };
    updateElapsed();
    const interval = setInterval(updateElapsed, 1000);
    return () => clearInterval(interval);
  }, []);

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

          {/* Timeline/Milestone Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex flex-col items-center space-y-1">
              <span className="text-2xl font-bold text-[#2d1a23]">
                {elapsed.days} days {elapsed.hours} hrs {elapsed.minutes} min
              </span>
              <span className="text-2xl font-bold text-[#2d1a23]">
                {elapsed.seconds} sec{" "}
                <span className="text-xl text-pink-600 align-middle">♥</span>
                <span className="text-xl font-semibold text-[#2d1a23] ml-2">
                  and still counting...
                </span>
              </span>
            </div>
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
