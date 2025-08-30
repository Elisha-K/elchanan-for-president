import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Building2, Users, ShieldCheck, Rocket, BadgeDollarSign, Handshake, Expand, BicepsFlexed} from "lucide-react";

const pillars = [
  {
    title: "I. United Council, Stronger Impact",
    icon: BicepsFlexed,
    points: [
      "End \"silo culture\" between dockets to ensure alignment on projects, timelines, resources and ideas",
      "Introduce Council KPIs with measurable, trackable deliverables",
      "Launch leadership workshops for council, club heads, classreps and any interested Stratizens",
    ],
  },
  {
    title: "II. Student Community and Welfare",
    icon: Handshake,
    points: [
      "Expand and secure the Elimisha Fund with corporate partnerships, alumni outreach, and ongoing fundraisers",
      "Partner with the Medical Centre & Mental Health Club for peer mentorship, suicide prevention, and quarterly mental health check-ins",
      "Enforce a respectful, humane dress code policy — no denial of exams over subjective issues",
      "Train Student Advocates to guide peers confidentially in academics, finances, mental health, and personal crises",
      "Celebrate student achievements monthly in academics, leadership, arts, and sports",
    ],
  },
  {
    title: "III. Transparent and Accountable Funding",
    icon: BadgeDollarSign,
    points: [
      "Hold quarterly barazas for open dialogue and council Q&A",
      "Publish monthly press releases to keep Stratizens informed of council actions",
      "Maintain an open-door governance culture where every student can be heard",
    ],
  },
  {
    title: "IV. Space & Resource Expansion",
    icon:Expand,
    points: [
      "Launch a digital lost & found platform for quick and easy item retrieval",
      "Operationalize the student e-commerce marketplace for safe, campus-wide buying and selling",
      "Create a Sports Complex Chill Zone with shaded gazebos and seating for relaxation and socializing",
    ],
  },
] as const;

const ManifestoSection = () => {
  return (
    <section id="manifesto" aria-label="Manifesto" className="bg-secondary/30">
      <div className="container mx-auto px-6 py-14 md:py-20">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-10 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              Let's Elevate - Join Me!
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              We'll stand on 5 core pillars to deliver a better University experience — one that's credible, student‑centered, and measurable.
            </p>
          </div>
          <Badge className="bg-primary text-primary-foreground">2025 Manifesto</Badge>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {pillars.map((p) => (
            <Card key={p.title} className="border-border/60 bg-card/70 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <p.icon className="h-5 w-5 text-primary" />
                  {p.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm">
                      <ArrowUpRight className="mt-0.5 h-4 w-4 text-primary" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
