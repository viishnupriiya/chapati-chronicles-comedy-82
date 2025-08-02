import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Upload, Download, RefreshCw } from "lucide-react";
import { generateChapatiName, generateHoroscope, generateSarcasticComment } from "./ChapatiNameGenerator";
import jsPDF from 'jspdf';

const AmerendraChapati = () => {
  const [formData, setFormData] = useState({
    image: null as File | null,
    dateOfBirth: "",
    timeOfBirth: "",
    guardianName: "",
    placeOfBirth: ""
  });
  
  const [results, setResults] = useState({
    name: "",
    horoscope: "",
    comment: "",
    generated: false
  });

  const { toast } = useToast();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      toast({
        title: "📸 Chapati Picture Uploaded!",
        description: "What a beautiful round specimen you have there!",
      });
    }
  };

  const generateBirthDetails = () => {
    if (!formData.image || !formData.dateOfBirth || !formData.timeOfBirth) {
      toast({
        title: "🍪 Missing Information!",
        description: "Please provide all birth details, you amateur chapati registrar!",
        variant: "destructive",
      });
      return;
    }

    const name = generateChapatiName();
    const horoscope = generateHoroscope();
    const comment = generateSarcasticComment();

    setResults({
      name,
      horoscope,
      comment,
      generated: true
    });

    toast({
      title: "🎉 Birth Certificate Generated!",
      description: `Welcome to the world, ${name}!`,
    });
  };

  const downloadCertificate = () => {
    const doc = new jsPDF();
    
    // Header
    doc.setFontSize(20);
    doc.text("🏛️ OFFICIAL BIRTH CERTIFICATE 🏛️", 105, 30, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text("Tawa Panchayat Office, Chapati Welfare Board", 105, 40, { align: 'center' });
    
    // Certificate details
    doc.setFontSize(14);
    let yPosition = 60;
    
    doc.text(`Name: ${results.name}`, 20, yPosition);
    yPosition += 15;
    doc.text(`Date of Birth: ${formData.dateOfBirth}`, 20, yPosition);
    yPosition += 15;
    doc.text(`Time of Birth: ${formData.timeOfBirth}`, 20, yPosition);
    yPosition += 15;
    doc.text(`Guardian: ${formData.guardianName}`, 20, yPosition);
    yPosition += 15;
    doc.text(`Place of Birth: ${formData.placeOfBirth}`, 20, yPosition);
    yPosition += 15;
    doc.text(`Issuing Authority: Tawa Panchayat Office, Chapati Welfare Board`, 20, yPosition);
    
    // Horoscope section
    yPosition += 25;
    doc.setFontSize(16);
    doc.text("🔮 Mystical Horoscope:", 20, yPosition);
    yPosition += 10;
    doc.setFontSize(12);
    const horoscopeLines = doc.splitTextToSize(results.horoscope, 170);
    doc.text(horoscopeLines, 20, yPosition);
    
    // Commentary section
    yPosition += horoscopeLines.length * 5 + 15;
    doc.setFontSize(16);
    doc.text("💬 Sarcastic Commentary:", 20, yPosition);
    yPosition += 10;
    doc.setFontSize(12);
    const commentLines = doc.splitTextToSize(`"${results.comment}"`, 170);
    doc.text(commentLines, 20, yPosition);
    
    // Footer
    yPosition += commentLines.length * 5 + 20;
    doc.setFontSize(8);
    doc.text("*Certificate validity: Until digestion is complete", 20, yPosition);
    
    // Download
    doc.save(`${results.name}_Birth_Certificate.pdf`);
    
    toast({
      title: "📄 Certificate Downloaded!",
      description: "Your official chapati birth certificate is ready! (Totally real and legally binding)",
    });
  };

  const regenerateDetails = () => {
    const name = generateChapatiName();
    const horoscope = generateHoroscope();
    const comment = generateSarcasticComment();

    setResults({
      name,
      horoscope,
      comment,
      generated: true
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="dramatic-entrance">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-dramatic text-primary">
            🍼 AMERENDRA CHAPATI - THE BIRTH REGISTRY 🍼
          </CardTitle>
          <CardDescription className="text-lg font-comic">
            "Every chapati deserves a dramatic entrance into this world!"
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Upload Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">📸 Chapati Mugshot</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-primary/50 rounded-lg p-6 text-center hover:border-primary transition-colors">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <span className="text-sm font-comic">
                      {formData.image ? formData.image.name : "Upload your beautiful chapati photo"}
                    </span>
                  </label>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🕐 Birth Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-semibold">Date of Birth</label>
                  <Input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">Time of Birth</label>
                  <Input
                    type="time"
                    value={formData.timeOfBirth}
                    onChange={(e) => setFormData({ ...formData, timeOfBirth: e.target.value })}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Guardian and Place */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold">👨‍🍳 Guardian Name (The Cook)</label>
              <Input
                placeholder="e.g., Master Chef Ramesh"
                value={formData.guardianName}
                onChange={(e) => setFormData({ ...formData, guardianName: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-semibold">🏠 Place of Birth</label>
              <Input
                placeholder="e.g., Krishnan's Kitchen, Kochi"
                value={formData.placeOfBirth}
                onChange={(e) => setFormData({ ...formData, placeOfBirth: e.target.value })}
              />
            </div>
          </div>

          <Button
            variant="dramatic"
            onClick={generateBirthDetails}
            className="w-full"
          >
            🎭 GENERATE DRAMATIC BIRTH DETAILS 🎭
          </Button>

          {/* Results Section */}
          {results.generated && (
            <Card className="dramatic-entrance bg-accent/20">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl">🎉 Birth Certificate Results!</CardTitle>
                </div>
                <Button variant="ghost" size="sm" onClick={regenerateDetails}>
                  <RefreshCw className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-background rounded-lg">
                  <h3 className="font-dramatic text-lg text-primary mb-2">Official Chapati Name:</h3>
                  <p className="font-comic text-xl">{results.name}</p>
                </div>

                <div className="p-4 bg-background rounded-lg">
                  <h3 className="font-dramatic text-lg text-primary mb-2">🔮 Mystical Horoscope:</h3>
                  <p className="font-comic">{results.horoscope}</p>
                </div>

                <div className="p-4 bg-background rounded-lg">
                  <h3 className="font-dramatic text-lg text-primary mb-2">💬 Sarcastic Commentary:</h3>
                  <p className="font-comic italic">"{results.comment}"</p>
                </div>

                <div className="border-2 border-primary p-4 rounded-lg bg-flour">
                  <h3 className="font-dramatic text-center text-xl mb-4">🏛️ OFFICIAL BIRTH CERTIFICATE 🏛️</h3>
                  <div className="font-comic space-y-2 text-sm">
                    <p><strong>Name:</strong> {results.name}</p>
                    <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
                    <p><strong>Time of Birth:</strong> {formData.timeOfBirth}</p>
                    <p><strong>Guardian:</strong> {formData.guardianName}</p>
                    <p><strong>Place of Birth:</strong> {formData.placeOfBirth}</p>
                    <p><strong>Issuing Authority:</strong> Tawa Panchayat Office, Chapati Welfare Board</p>
                    <p className="text-xs italic mt-4">*Certificate validity: Until digestion is complete</p>
                  </div>
                </div>

                <Button
                  variant="chapati"
                  onClick={downloadCertificate}
                  className="w-full"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Official Birth Certificate (PDF)
                </Button>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AmerendraChapati;