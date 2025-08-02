import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ChapatiMusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const tracks = [
    "Goodbye My Dough",
    "Last Flip Symphony", 
    "Burnt but Not Forgotten"
  ];

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Since we don't have actual audio files, we'll simulate
        audioRef.current.play().catch(() => {
          // Handle the case where audio doesn't exist
          console.log("Audio simulation - music would play here");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
  };

  return (
    <Card className="fixed bottom-4 right-4 p-4 bg-card/90 backdrop-blur-sm border-chapati-brown z-50">
      <div className="flex items-center space-x-3">
        {/* Chapati-shaped play/pause button */}
        <Button
          onClick={toggleMusic}
          className={`w-12 h-12 rounded-full border-2 border-chapati-brown bg-chapati text-foreground hover:bg-chapati-brown/80 relative overflow-hidden ${
            isPlaying ? 'animate-spin' : ''
          }`}
          size="icon"
        >
          {isPlaying ? (
            <div className="flex space-x-0.5">
              <div className="w-1 h-4 bg-foreground"></div>
              <div className="w-1 h-4 bg-foreground"></div>
            </div>
          ) : (
            <div className="w-0 h-0 border-l-4 border-l-foreground border-t-2 border-b-2 border-t-transparent border-b-transparent ml-1"></div>
          )}
          
          {/* Spinning chapati animation overlay */}
          {isPlaying && (
            <div className="absolute inset-0 border-2 border-dashed border-chapati-brown/50 rounded-full animate-spin"></div>
          )}
        </Button>

        <div className="flex flex-col">
          <div className="text-sm font-comic text-foreground">
            {tracks[currentTrack]}
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={nextTrack}
              variant="ghost"
              size="sm"
              className="text-xs font-comic hover:bg-chapati-brown/20"
            >
              Next 🔄
            </Button>
            <span className="text-xs text-muted-foreground font-comic">
              {isPlaying ? "🎵 Playing..." : "🎵 Paused"}
            </span>
          </div>
        </div>
      </div>

      {/* Floating chapati animation when music plays */}
      {isPlaying && (
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="text-2xl animate-bounce">🍪</div>
          <div className="text-xs font-comic text-muted-foreground whitespace-nowrap">
            slowly spinning into the void...
          </div>
        </div>
      )}

      {/* Hidden audio element for future audio integration */}
      <audio ref={audioRef} loop>
        <source src="#" type="audio/mpeg" />
      </audio>
    </Card>
  );
};

export default ChapatiMusicPlayer;