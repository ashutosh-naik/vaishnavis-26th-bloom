import { useEffect } from "react";
import { FallingPetals } from "@/components/FallingPetals";
import { HeroSection } from "@/components/HeroSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { ThingsILove } from "@/components/ThingsILove";
import { BirthdayMessage } from "@/components/BirthdayMessage";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling to the page
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Falling Petals Animation */}
      <FallingPetals />

      {/* Hero Section */}
      <HeroSection />

      {/* Photo Gallery */}
      <PhotoGallery />

      {/* Things I Love About You */}
      <ThingsILove />

      {/* Final Birthday Message */}
      <BirthdayMessage />
    </div>
  );
};

export default Index;
