import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import tandoorBg from "@/assets/tandoor-bg.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = () => {
    if (username && password) {
      toast({
        title: "🔥 TANDOOR EXPLOSION! 🔥",
        description: "Chapati authentication successful! Welcome to the lifecycle!",
      });
      
      // Dramatic confetti animation
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      toast({
        title: "🍪 Oops! Half-baked attempt!",
        description: "Please fill in your Tandoor credentials, you amateur chef!",
        variant: "destructive",
      });
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${tandoorBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Floating chapatis animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 bg-chapati-brown rounded-full chapati-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <Card className="w-full max-w-md mx-4 relative z-10 dramatic-entrance bg-background/95 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-dramatic text-primary">
            🍪 LIFE OF CHAPATI 🍪
          </CardTitle>
          <CardDescription className="text-lg font-comic">
            Enter the mystical world of chapati consciousness
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="font-dramatic text-sm">TANDOOR TAG NAME</label>
            <Input
              placeholder="Enter your mystical chapati identity..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="font-comic"
            />
          </div>
          
          <div className="space-y-2">
            <label className="font-dramatic text-sm">SECRET FLOUR CODE</label>
            <Input
              type="password"
              placeholder="Top secret recipe password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="font-comic"
            />
          </div>
          
          <Button
            variant="dramatic"
            size="xl"
            onClick={handleLogin}
            className="w-full animate-pulse"
          >
            🔥 LET ME IN, I'M A CHAPATI! 🔥
          </Button>
          
          <p className="text-center text-sm text-muted-foreground font-comic italic">
            "Born in fire, raised in love, died in hunger" - Ancient Chapati Proverb
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;