import heroImage from "@/assets/codioful-formerly-gradienta-bKESVqfxass-unsplash.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <header aria-label="Campaign hero" className="relative overflow-hidden rounded-b-xl shadow-elegant">
      <img
        src={heroImage}
        alt="Confident, dignified dark blue campaign backdrop with subtle aurora"
        className="h-[56vh] w-full object-cover object-center md:h-[68vh]"
        loading="eager"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-background/10" />

      <div className="absolute inset-0">
        <div className="container mx-auto flex h-full flex-col items-start justify-end px-6 pb-10 md:pb-16">
          <div className="max-w-3xl animate-enter">
            <p className="mb-3 inline-flex items-center rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground">
              Proven leadership. Credible vision.
            </p>
            <h1 className="font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              Elchanan for President!
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
              I have a strong record of delivery as Secretary General — and a bold, practical plan to elevate student life, empower Stratizens, and steward our shared future.
            </p>
            <div className="mt-6 flex items-center gap-3">
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
        </div>
      </div>
    </header>
  );
};

export default Hero;
