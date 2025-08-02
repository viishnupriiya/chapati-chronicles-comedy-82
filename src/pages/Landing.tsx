import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import tandoorBg from "@/assets/tandoor-bg.jpg";

const Landing = () => {
  const navigate = useNavigate();
  const [hoverSound, setHoverSound] = useState<string>("");

  const playHoverSound = (sound: string) => {
    setHoverSound(sound);
    // Simulate sound effect
    console.log(`🔊 Playing: ${sound}`);
    setTimeout(() => setHoverSound(""), 1000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${tandoorBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Falling Chapatis Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 20}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            🍪
          </div>
        ))}
      </div>

      {/* Flying Chapatis on Tandoors */}
      <div className="absolute top-10 left-0 w-full pointer-events-none">
        <div className="relative">
          <div className="absolute animate-[slide-in-right_8s_linear_infinite] text-6xl">
            🍪🔥
          </div>
        </div>
      </div>
      
      <div className="absolute top-32 right-0 w-full pointer-events-none">
        <div className="relative">
          <div className="absolute animate-[slide-out-right_6s_linear_infinite] text-6xl" style={{ right: 0 }}>
            🔥🍪
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        
        {/* Dancing Chapati */}
        <div className="mb-8">
          <div className="text-8xl animate-pulse hover:animate-spin transition-all duration-300 cursor-pointer"
               onMouseEnter={() => playHoverSound("Sizzling intensifies... 🔥")}>
            🍪
          </div>
          <div className="text-2xl animate-bounce mt-2">💃</div>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-dramatic text-primary mb-6 dramatic-entrance">
          Welcome to the Existential Crisis of Chapatis
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-3xl font-comic text-muted-foreground mb-12 max-w-4xl">
          One dough's journey through heat, heartbreak, and hunger
        </p>

        {/* Interactive Elements with Sound Effects */}
        <div className="flex justify-center space-x-8 mb-12 flex-wrap gap-4">
          <div 
            className="text-4xl cursor-pointer hover:scale-125 transition-transform duration-300"
            onMouseEnter={() => playHoverSound("Flip flop whoosh! 🌪️")}
          >
            🤸🍪
          </div>
          <div 
            className="text-4xl cursor-pointer hover:animate-spin transition-all duration-300"
            onMouseEnter={() => playHoverSound("Belly dance shimmer! ✨")}
          >
            🍪💃
          </div>
          <div 
            className="text-4xl cursor-pointer hover:animate-bounce transition-all duration-300"
            onMouseEnter={() => playHoverSound("Tandoor rocket launch! 🚀")}
          >
            🔥🍪🔥
          </div>
        </div>

        {/* Sound Effect Display */}
        {hoverSound && (
          <div className="mb-6 text-lg font-comic text-primary animate-fade-in">
            {hoverSound}
          </div>
        )}

        {/* Main CTA Button */}
        <Button
          onClick={() => navigate("/main")}
          variant="dramatic"
          size="xl"
          className="mb-8 hover:shadow-[var(--shadow-dramatic)] transform hover:scale-110"
          onMouseEnter={() => playHoverSound("Dramatic entrance whistle! 🎵")}
        >
          Start the Life of a Chapati
        </Button>

        {/* Funny Footer */}
        <p className="text-sm font-comic text-muted-foreground/80 italic">
          *Not for the gluten intolerant.
        </p>
        
        <div className="mt-4 text-xs font-comic text-muted-foreground/60">
          ⚠️ Side effects may include: Uncontrollable laughter, existential dread about food, and sudden chapati cravings
        </div>
      </div>
    </div>
  );
};

export default Landing;