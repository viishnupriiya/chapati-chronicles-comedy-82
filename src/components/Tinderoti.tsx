import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Heart, X, MessageCircle, Flame, Star } from "lucide-react";
import chapatiLove from "@/assets/chapati-love.jpg";

interface ChapatiProfile {
  id: number;
  name: string;
  age: string;
  fluffiness: string;
  size: string;
  burnLevel: string;
  bio: string;
  image: string;
}

const mockChapatiProfiles: ChapatiProfile[] = [
  {
    id: 1,
    name: "Fluffina the Magnificent",
    age: "2 minutes old",
    fluffiness: "Extra Fluffy",
    size: "Large",
    burnLevel: "Golden Perfect",
    bio: "Looking for someone to share curry with. I'm well-rounded and have no holes in my personality!",
    image: "🫓"
  },
  {
    id: 2,
    name: "Crispy Kumar",
    age: "5 minutes old",
    fluffiness: "Firm",
    size: "Medium",
    burnLevel: "Slightly Burnt (adds character)",
    bio: "I may be a little crispy around the edges, but I have a soft heart. Swipe right if you can handle the heat!",
    image: "🥞"
  },
  {
    id: 3,
    name: "Soft Susie",
    age: "1 minute old",
    fluffiness: "Cloud-like",
    size: "Small",
    burnLevel: "Perfectly Pale",
    bio: "Fresh out of the tawa and ready to mingle! Warning: I might stick to you emotionally.",
    image: "🫓"
  }
];

const Tinderoti = () => {
  const [currentProfile, setCurrentProfile] = useState(0);
  const [preferences, setPreferences] = useState({
    ageRange: "",
    fluffiness: "",
    size: "",
    burnLevel: ""
  });
  const [matches, setMatches] = useState<ChapatiProfile[]>([]);
  const [showMatches, setShowMatches] = useState(false);
  const { toast } = useToast();

  const currentChapati = mockChapatiProfiles[currentProfile];

  const swipeRight = () => {
    const compatibility = Math.floor(Math.random() * 40) + 60; // 60-99% compatibility
    
    setMatches([...matches, currentChapati]);
    
    toast({
      title: "💕 IT'S A MATCH! 💕",
      description: `${compatibility}% compatibility with ${currentChapati.name}! Both were cooked under pressure!`,
    });
    
    nextProfile();
  };

  const swipeLeft = () => {
    const reasons = [
      "Too burnt for your taste!",
      "Size incompatibility detected!",
      "Fluffiness mismatch!",
      "This one's too crusty for love!",
      "Age gap too wide (3 whole minutes!)"
    ];
    
    toast({
      title: "❌ Tossed into the Rejection Bin!",
      description: reasons[Math.floor(Math.random() * reasons.length)],
      variant: "destructive",
    });
    
    nextProfile();
  };

  const nextProfile = () => {
    if (currentProfile < mockChapatiProfiles.length - 1) {
      setCurrentProfile(currentProfile + 1);
    } else {
      setCurrentProfile(0); // Loop back to first profile
    }
  };

  const startChatbot = () => {
    const flirtyLines = [
      "Hey there, are you gluten-free? Because you're making me rise! 😘",
      "Is your name Ghee? Because you make everything better! 💫",
      "Are you a tandoor? Because you've got me heating up! 🔥",
      "I must be whole wheat, because I'm falling apart for you! 😍",
      "You must be made of the finest flour, because you're absolutely refined! ✨"
    ];
    
    const randomLine = flirtyLines[Math.floor(Math.random() * flirtyLines.length)];
    
    toast({
      title: "💬 Chapati Chat Activated!",
      description: randomLine,
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="dramatic-entrance">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-dramatic text-primary">
            💘 TINDEROTI - THE DATING PERIOD 💘
          </CardTitle>
          <CardDescription className="text-lg font-comic">
            "Swipe right for your perfect chapati soulmate!"
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Preferences Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">🎯 Set Your Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-semibold">Age Range</label>
              <Input
                placeholder="e.g., 1-5 minutes"
                value={preferences.ageRange}
                onChange={(e) => setPreferences({...preferences, ageRange: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Fluffiness</label>
              <Input
                placeholder="Fluffy/Firm/Crispy"
                value={preferences.fluffiness}
                onChange={(e) => setPreferences({...preferences, fluffiness: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Size</label>
              <Input
                placeholder="Small/Medium/Large"
                value={preferences.size}
                onChange={(e) => setPreferences({...preferences, size: e.target.value})}
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Burn Level</label>
              <Input
                placeholder="Perfect/Slightly/Extra"
                value={preferences.burnLevel}
                onChange={(e) => setPreferences({...preferences, burnLevel: e.target.value})}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Swiping Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Profile Card */}
        <div className="lg:col-span-2">
          <Card className="h-[600px] relative overflow-hidden chapati-glow">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${chapatiLove})`,
                opacity: 0.1
              }}
            />
            <CardContent className="relative z-10 h-full flex flex-col justify-between p-8">
              <div className="text-center">
                <div className="text-8xl mb-4 chapati-float">{currentChapati.image}</div>
                <h2 className="text-3xl font-dramatic text-primary mb-2">{currentChapati.name}</h2>
                <div className="space-y-2 text-lg font-comic">
                  <p><strong>Age:</strong> {currentChapati.age}</p>
                  <p><strong>Fluffiness:</strong> {currentChapati.fluffiness}</p>
                  <p><strong>Size:</strong> {currentChapati.size}</p>
                  <p><strong>Burn Level:</strong> {currentChapati.burnLevel}</p>
                </div>
              </div>

              <div className="bg-background/90 p-4 rounded-lg">
                <p className="font-comic italic text-center">"{currentChapati.bio}"</p>
              </div>

              <div className="flex justify-center space-x-6">
                <Button
                  variant="destructive"
                  size="xl"
                  onClick={swipeLeft}
                  className="w-20 h-20 rounded-full"
                >
                  <X className="w-8 h-8" />
                </Button>
                <Button
                  variant="tandoor"
                  size="xl"
                  onClick={swipeRight}
                  className="w-20 h-20 rounded-full"
                >
                  <Heart className="w-8 h-8" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Matches */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Flame className="w-5 h-5 mr-2" />
                Your Matches ({matches.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {matches.length === 0 ? (
                <p className="text-sm font-comic text-muted-foreground">
                  No matches yet. Keep swiping!
                </p>
              ) : (
                <div className="space-y-2">
                  {matches.slice(-3).map((match, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-accent/20 rounded">
                      <span className="text-2xl">{match.image}</span>
                      <span className="text-sm font-comic">{match.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Chapati AI Chatbot */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chapati Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                variant="chapati"
                onClick={startChatbot}
                className="w-full"
              >
                💬 Flirt with Chapatis
              </Button>
              <p className="text-xs font-comic text-muted-foreground mt-2">
                Practice your pickup lines!
              </p>
            </CardContent>
          </Card>

          {/* Fun Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Star className="w-5 h-5 mr-2" />
                Dating Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm font-comic">
              <p>Profiles viewed: {currentProfile + 1}</p>
              <p>Successful matches: {matches.length}</p>
              <p>Rejection rate: {currentProfile > 0 ? Math.round((currentProfile - matches.length) / currentProfile * 100) : 0}%</p>
              <p>Love compatibility: {matches.length > 0 ? "High!" : "Working on it..."}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tinderoti;