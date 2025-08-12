import heroImage from "@/assets/codioful-formerly-gradienta-bKESVqfxass-unsplash.jpg";
import portraitImage from "@/assets/elchanan-portrait.jpeg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <header aria-label="Campaign hero" className="relative overflow-hidden rounded-b-xl shadow-elegant">
      <img
        src={heroImage}
        alt="Confident, dignified dark blue campaign backdrop with subtle aurora"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
      />

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-background/10" />

      {/* Content Layer */}
        <div className="relative z-10 container mx-auto px-6 py-12 md:py-20">
           {/* Responsive grid: text left, portrait right on md+ screens */}
          <div className="grid md:grid-cols-2 items-center gap-8">
            {/* LEFT: Campaign Text */}
          <div className="max-w-3xl animate-enter text-left">
            <p className="mb-3 inline-flex items-center rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground">
              Proven leadership. Credible vision.
            </p>
            <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Elevate with Elchanan
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
              I have a strong record of delivery as Secretary General — and a bold, practical plan to elevate student life, empower Stratizens, and steward our shared future.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild variant="hero" className="hover-scale">
                <a href="#manifesto" aria-label="Read the manifesto">
                  Read my Manifesto
                  <ArrowRight className="ml-1" />
                </a>
              </Button>
              <Button asChild variant="outline" className="hover-scale">
                <a href="#achievements" aria-label="View achievements">See what I've done</a>
              </Button>
            </div>
          </div>
            {/* RIGHT: Portrait Image with fade effect*/}
            <div className="flex justify-center md:justify-end px-4 md:px-0">
              <div className="relative w-3/4 md:w-full max-w-sm">
              <img
                src={portraitImage}
                alt="Elchanan Kiptoo, candidate for University President"
                className="max-h-[400px] md:max-h-[400px] max-w-full w-auto rounded-lg shadow-lg object-contain mx-auto"
              />
              {/* Fade effect at bottom of portrait */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
        </div>
      </div>
  </header>
  );
};

export default Hero;
