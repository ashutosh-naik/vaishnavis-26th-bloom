import { Gift, Flower2, Heart } from "lucide-react";
import decorativeFlowers from "@/assets/decorative-flowers.jpg";

export const BirthdayMessage = () => {
  return (
    <section className="py-20 px-6 bg-gradient-soft relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 opacity-30">
        <img
          src={decorativeFlowers}
          alt=""
          className="w-32 h-32 object-cover rounded-full animate-float"
        />
      </div>
      <div className="absolute bottom-10 right-10 opacity-30">
        <img
          src={decorativeFlowers}
          alt=""
          className="w-40 h-40 object-cover rounded-full animate-pulse-soft"
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-12 shadow-glow border border-border/50">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Gift className="text-primary animate-float" size={40} />
            <Flower2 className="text-rose animate-pulse-soft" size={32} />
            <Heart className="text-lavender animate-float" size={36} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            A Special Birthday Wish
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-foreground leading-relaxed">
            <p className="italic">
              "Here's to more laughter, late-night talks, and flower-filled
              memories. Happy Birthday once again 💐💖"
            </p>

            <div className="border-t border-border/30 pt-6">
              <p className="font-medium">
                May this new year of your life be filled with:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-base">
                <div className="bg-gradient-floral p-4 rounded-xl text-primary-foreground">
                  <strong>Joy & Laughter</strong>
                  <br />
                  <span className="text-sm opacity-90">Every single day</span>
                </div>
                <div className="bg-lavender p-4 rounded-xl text-card-foreground">
                  <strong>Beautiful Moments</strong>
                  <br />
                  <span className="text-sm opacity-90">
                    To treasure forever
                  </span>
                </div>
                <div className="bg-mint p-4 rounded-xl text-card-foreground">
                  <strong>Dreams Come True</strong>
                  <br />
                  <span className="text-sm opacity-90">
                    All your heart desires
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-2xl font-semibold text-primary">
                You deserve all the happiness in the world! 🌸✨
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-6">
            <div className="w-6 h-6 bg-rose rounded-full animate-pulse-soft" />
            <div className="w-4 h-4 bg-primary rounded-full animate-float" />
            <div className="w-8 h-8 bg-lavender rounded-full animate-pulse-soft" />
            <div className="w-5 h-5 bg-mint rounded-full animate-float" />
            <div className="w-6 h-6 bg-blush rounded-full animate-pulse-soft" />
          </div>
        </div>
      </div>
    </section>
  );
};
