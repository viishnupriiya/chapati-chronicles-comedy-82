import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Baby, Heart, Skull } from "lucide-react";

interface ChapatiNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const ChapatiNavigation = ({ activeSection, onSectionChange }: ChapatiNavigationProps) => {
  const sections = [
    {
      id: "birth",
      title: "🍼 AMERENDRA CHAPATI",
      subtitle: "The Glorious Birth",
      description: "Witness the magical moment when flour meets fire!",
      icon: Baby,
      color: "bg-accent"
    },
    {
      id: "dating",
      title: "💘 TINDEROTI",
      subtitle: "The Romance Phase",
      description: "Swipe right for your perfect chapati match!",
      icon: Heart,
      color: "bg-primary"
    },
    {
      id: "death",
      title: "⚰️ ROTI RIP",
      subtitle: "The Final Flip",
      description: "A dignified farewell to our beloved round friend.",
      icon: Skull,
      color: "bg-muted"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {sections.map((section) => {
        const Icon = section.icon;
        return (
          <Card
            key={section.id}
            className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
              activeSection === section.id 
                ? 'ring-4 ring-primary shadow-[var(--shadow-dramatic)]' 
                : 'hover:shadow-[var(--shadow-chapati)]'
            }`}
            onClick={() => onSectionChange(section.id)}
          >
            <CardHeader className="text-center">
              <div className={`w-16 h-16 mx-auto rounded-full ${section.color} flex items-center justify-center mb-2 chapati-float`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-lg font-dramatic">{section.title}</CardTitle>
              <CardDescription className="font-dramatic text-sm">{section.subtitle}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-sm font-comic">{section.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ChapatiNavigation;