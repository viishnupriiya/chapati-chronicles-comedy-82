import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Upload, Download, Flame, Skull } from "lucide-react";
import { generateCauseOfDeath } from "./ChapatiNameGenerator";
import sadChapati from "@/assets/sad-chapati.jpg";
import jsPDF from 'jspdf';

const RotiRip = () => {
  const [formData, setFormData] = useState({
    lastSeenImage: null as File | null,
    postDeathImage: null as File | null,
    name: "",
    dateOfBirth: "",
    placeOfBirth: ""
  });
  
  const [deathCertificate, setDeathCertificate] = useState({
    causeOfDeath: "",
    generated: false
  });

  const [virtualTandoor, setVirtualTandoor] = useState(false);
  const { toast } = useToast();

  const handleImageUpload = (type: 'lastSeen' | 'postDeath') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (type === 'lastSeen') {
        setFormData({ ...formData, lastSeenImage: file });
        toast({
          title: "📸 Last Photo Uploaded",
          description: "Such a beautiful final moment captured...",
        });
      } else {
        setFormData({ ...formData, postDeathImage: file });
        toast({
          title: "💀 Post-Death Evidence Uploaded",
          description: "The aftermath... too tragic to witness.",
        });
      }
    }
  };

  const generateDeathCertificate = () => {
    if (!formData.name || !formData.dateOfBirth || !formData.placeOfBirth) {
      toast({
        title: "⚰️ Missing Death Details!",
        description: "Even the deceased deserve proper documentation!",
        variant: "destructive",
      });
      return;
    }

    const causeOfDeath = generateCauseOfDeath();
    setDeathCertificate({
      causeOfDeath,
      generated: true
    });

    toast({
      title: "📜 Death Certificate Generated",
      description: "A formal farewell has been documented. May they rest in pieces... literally.",
    });
  };

  const lightVirtualTandoor = () => {
    setVirtualTandoor(true);
    toast({
      title: "🔥 Virtual Tandoor Lit!",
      description: "A digital flame burns eternal in memory of our fallen friend.",
    });
    
    // Reset after 5 seconds
    setTimeout(() => {
      setVirtualTandoor(false);
    }, 5000);
  };

  const downloadCertificate = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(20);
    doc.text("💀 OFFICIAL DEATH CERTIFICATE 💀", 105, 30, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text("THE FINAL FLIP DEPARTMENT", 105, 40, { align: 'center' });
    doc.text("Bhakri ByeBye Bureau", 105, 50, { align: 'center' });
    
    // Certificate details
    doc.setFontSize(14);
    let yPosition = 70;
    
    doc.text(`Name: ${formData.name}`, 20, yPosition);
    yPosition += 15;
    doc.text(`Date of Birth: ${formData.dateOfBirth}`, 20, yPosition);
    yPosition += 15;
    doc.text(`Place of Birth: ${formData.placeOfBirth}`, 20, yPosition);
    yPosition += 15;
    doc.text(`Date of Death: ${new Date().toLocaleDateString()}`, 20, yPosition);
    yPosition += 15;
    doc.text(`Cause of Death: ${deathCertificate.causeOfDeath}`, 20, yPosition);
    yPosition += 15;
    doc.text(`Duration of Life: Approximately 12 minutes (above average)`, 20, yPosition);
    yPosition += 15;
    doc.text(`Final Resting Place: Someone's stomach`, 20, yPosition);
    
    // Memorial quote
    yPosition += 25;
    doc.setFontSize(12);
    doc.text("Memorial Words:", 20, yPosition);
    yPosition += 10;
    doc.setFontSize(10);
    const quote = '"Here lies a chapati who lived fast, loved hard, and died hungry." - Last words of an anonymous onion';
    const quoteLines = doc.splitTextToSize(quote, 170);
    doc.text(quoteLines, 20, yPosition);
    
    // Download
    doc.save(`${formData.name}_Death_Certificate.pdf`);
    
    toast({
      title: "📄 Death Certificate Downloaded",
      description: "Official documentation of a life well-eaten.",
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="dramatic-entrance bg-muted/20">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-dramatic text-muted-foreground">
            ⚰️ ROTI RIP - THE FINAL FLIP ⚰️
          </CardTitle>
          <CardDescription className="text-lg font-comic">
            "Born in heat, died in hunger. The eternal chapati story."
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Memorial Background */}
      <div 
        className="relative p-8 rounded-lg"
        style={{
          backgroundImage: `url(${sadChapati})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60 rounded-lg"></div>
        
        <div className="relative z-10 space-y-6">
          {/* Image Upload Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-background/90">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  📸 Last Seen Photo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-muted-foreground/50 rounded-lg p-6 text-center hover:border-muted-foreground transition-colors">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload('lastSeen')}
                      className="hidden"
                    />
                    <span className="text-sm font-comic">
                      {formData.lastSeenImage ? formData.lastSeenImage.name : "Upload final beautiful moment"}
                    </span>
                  </label>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/90">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  💀 Post-Death Photo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-muted-foreground/50 rounded-lg p-6 text-center hover:border-muted-foreground transition-colors">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload('postDeath')}
                      className="hidden"
                    />
                    <span className="text-sm font-comic">
                      {formData.postDeathImage ? formData.postDeathImage.name : "Upload tragic aftermath"}
                    </span>
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Death Details Form */}
          <Card className="bg-background/90">
            <CardHeader>
              <CardTitle className="text-xl">📋 Final Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-semibold">Name of the Deceased</label>
                <Input
                  placeholder="e.g., Fluffappa Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold">Date of Birth</label>
                  <Input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">Place of Birth</label>
                  <Input
                    placeholder="e.g., Krishnan's Kitchen"
                    value={formData.placeOfBirth}
                    onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Button
        variant="sad"
        onClick={generateDeathCertificate}
        className="w-full"
      >
        🪦 GENERATE DEATH CERTIFICATE 🪦
      </Button>

      {/* Death Certificate Results */}
      {deathCertificate.generated && (
        <Card className="dramatic-entrance bg-muted/10 border-2 border-muted">
          <CardHeader>
            <CardTitle className="text-xl text-center">
              <Skull className="w-6 h-6 inline mr-2" />
              OFFICIAL DEATH CERTIFICATE
              <Skull className="w-6 h-6 inline ml-2" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-muted p-6 rounded-lg bg-background">
              <div className="text-center mb-6">
                <h3 className="font-dramatic text-2xl">🏛️ THE FINAL FLIP DEPARTMENT 🏛️</h3>
                <p className="font-comic text-sm text-muted-foreground">Bhakri ByeBye Bureau</p>
              </div>
              
              <div className="font-comic space-y-2">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
                <p><strong>Place of Birth:</strong> {formData.placeOfBirth}</p>
                <p><strong>Date of Death:</strong> {new Date().toLocaleDateString()}</p>
                <p><strong>Cause of Death:</strong> {deathCertificate.causeOfDeath}</p>
                <p><strong>Duration of Life:</strong> Approximately 12 minutes (above average)</p>
                <p><strong>Final Resting Place:</strong> Someone's stomach</p>
                <div className="mt-4 pt-4 border-t border-muted">
                  <p className="text-xs italic">
                    "Here lies a chapati who lived fast, loved hard, and died hungry." 
                    - Last words of an anonymous onion
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <Button
                variant="chapati"
                onClick={downloadCertificate}
                className="flex-1"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Certificate
              </Button>

              <Button
                variant={virtualTandoor ? "destructive" : "tandoor"}
                onClick={lightVirtualTandoor}
                className="flex-1"
                disabled={virtualTandoor}
              >
                <Flame className={`w-4 h-4 mr-2 ${virtualTandoor ? 'animate-pulse' : ''}`} />
                {virtualTandoor ? "🔥 TANDOOR BURNING 🔥" : "Light Virtual Tandoor"}
              </Button>
            </div>

            {virtualTandoor && (
              <Card className="bg-primary/10 border-primary animate-pulse">
                <CardContent className="text-center py-6">
                  <div className="text-4xl mb-2">🔥🕯️🔥</div>
                  <p className="font-dramatic text-lg text-primary">
                    A virtual flame burns bright in memory...
                  </p>
                  <p className="font-comic text-sm text-muted-foreground mt-2">
                    "May your next incarnation be as a perfectly fluffy naan."
                  </p>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      )}

      {/* Memorial Quotes */}
      <Card className="bg-muted/5">
        <CardContent className="text-center py-8">
          <h3 className="font-dramatic text-xl mb-4">🙏 Memorial Wisdom 🙏</h3>
          <div className="space-y-2 font-comic text-sm text-muted-foreground">
            <p>"Don't take life so seriously — even rotis don't live long."</p>
            <p>"Born in heat, died in hunger. The circle of life continues."</p>
            <p>"Every ending is just a new beginning... in someone's digestive system."</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RotiRip;