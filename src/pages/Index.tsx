import { useState } from "react";
import { Button } from "@/components/ui/button";
import ChapatiNavigation from "@/components/ChapatiNavigation";
import AmerendraChapati from "@/components/AmerendraChapati";
import Tinderoti from "@/components/Tinderoti";
import RotiRip from "@/components/RotiRip";
import heroChapati from "@/assets/hero-chapati.jpg";

const Index = () => {
  const [activeSection, setActiveSection] = useState("birth");

  const renderActiveSection = () => {
    switch (activeSection) {
      case "birth":
        return <AmerendraChapati />;
      case "dating":
        return <Tinderoti />;
      case "death":
        return <RotiRip />;
      default:
        return <AmerendraChapati />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative py-20 px-4"
        style={{
          backgroundImage: `url(${heroChapati})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-dramatic text-flour mb-6 dramatic-entrance">
            🍪 LIFE OF CHAPATI 🍪
          </h1>
          <p className="text-xl md:text-2xl font-comic text-flour/90 mb-8">
            "The most emotionally devastating chapati lifecycle website ever created"
          </p>
          <div className="flex justify-center space-x-4 text-flour/80 font-comic text-sm">
            <span>🔥 Born in Fire</span>
            <span>💕 Loved Briefly</span>
            <span>⚰️ Consumed Tragically</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-8">
        <ChapatiNavigation 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />

        {/* Active Section Content */}
        <div className="mt-8">
          {renderActiveSection()}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted/20 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="font-comic text-muted-foreground">
            © 2024 Life of Chapati Corp. All rights reserved. No chapatis were permanently harmed in the making of this website.
          </p>
          <p className="font-comic text-xs text-muted-foreground mt-2">
            *Side effects may include: uncontrollable laughter, existential crisis about food, and sudden craving for chapatis.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
