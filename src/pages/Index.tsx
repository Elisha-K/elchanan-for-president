import Hero from "@/components/site/Hero";
import AboutSection from "@/components/site/About";
import AchievementsSection from "@/components/site/Achievements";
import ManifestoSection from "@/components/site/Manifesto";
import ContactSection from "@/components/site/Contact";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Elchanan",
  description:
    "Candidate for University President with a proven track record as Secretary General, delivering student‑centric results.",
  email: "mailto:elchanan.kiprotich@strathmore.edu",
  sameAs: ["https://instagram.com/elchana.n"],
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <nav className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between px-6">
          <NavLink to="/" className="font-display text-lg font-semibold">
            Elchanan for President 2025-2026
          </NavLink>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#about" className="story-link text-sm">About</a>
            <a href="#achievements" className="story-link text-sm">Achievements</a>
            <a href="#manifesto" className="story-link text-sm">Manifesto</a>
            <a href="#contact" className="story-link text-sm">Contact</a>
            <Button asChild variant="hero" size="sm" className="ml-2">
              <a href="#manifesto" aria-label="Read the manifesto">Read my Manifesto</a>
            </Button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <AboutSection />
        <AchievementsSection />
        <ManifestoSection />
        <ContactSection />
      </main>

      <footer className="border-t border-border/60">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 py-6 md:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Elchanan Kiptoo — For University President</p>
          <a href="#top" className="text-xs text-muted-foreground hover:text-foreground">Back to top</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
