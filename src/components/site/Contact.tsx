import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Instagram, Copy } from "lucide-react";

const EMAIL = "elchanan.kiprotich@strathmore.edu";
const INSTAGRAM = "https://instagram.com/elchana.n";

const ContactSection = () => {
  const { toast } = useToast();

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    toast({
      title: "Email copied",
      description: "You can paste it anywhere to write to me :)",
    });
  };

  return (
    <section id="contact" aria-label="Contact" className="container mx-auto px-6 py-14 md:py-20">
      <div className="mb-8 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">Let's keep a good thing going - reach out!</h2>
        <p className="mt-2 text-muted-foreground">
          I deeply believe in your voice, your questions, your ideas and your feedback. You can reach me directly via email or Instagram
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="bg-card/70 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Mail className="h-5 w-5 text-primary" /> Email
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">{EMAIL}</p>
            <div className="flex gap-3">
              <Button asChild variant="hero" className="hover-scale">
                <a href={`mailto:${EMAIL}`} aria-label="Compose email">Compose</a>
              </Button>
              <Button variant="outline" className="hover-scale" onClick={copyEmail}>
                <Copy className="mr-2 h-4 w-4" /> Copy
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/70 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Instagram className="h-5 w-5 text-primary" /> Instagram
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">{INSTAGRAM}</p>
            <div className="flex gap-3">
              <Button asChild variant="outline" className="hover-scale">
                <a href={INSTAGRAM} target="_blank" rel="noreferrer noopener" aria-label="Open Instagram">Open Profile</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
