import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Building2, Users, ShieldCheck, Rocket, BadgeDollarSign, Handshake, Expand, BicepsFlexed} from "lucide-react";

const pillars = [
  {
    title: "I. United Council, Stronger Impact",
    icon: BicepsFlexed,
    points: [
      "End \"silo culture\" between dockets to ensure alignment on projects, timelines, resources and ideas",
      "Implement a Council KPI system to track and publish measurable deliverables for Senators",
      "Establish an Events Standards Charter to serve as QA/QC for events planned by the Council",
      "Introduce leadership workshops to nurture latent potential in Stratizens"
    ],
  },
  {
    title: "II. Transparent and Accountable Funding",
    icon: BadgeDollarSign,
    points: [
      "Publish spending summaries for all Council activities in Quarterly Financial Briefs ensuring transparency and accountability",
      "Secure a fixed percentage of net revenue (similar to scholarship allocation) to grow the Elimisha fund into a trust that rolls over each year",
      "Hold quarterly barazas for students to question and engage with the Council in addition to an open-door governance policy",
    ],
  },
  {
    title: "III. Student Community and Welfare",
    icon: Handshake,
    points: [
      "Strengthen mental health and suicide prevention efforts through peer-support training, \"Wellness First Responders\" per faculty, and quarterly mental health check-ins",
      "Introduce a Peer Tutoring program to match high-performing students with those seeking academic support",
      "Develop a clear, humane dress-code policy that prevents humiliation and academic disruption — no denial of CATs/exams due to debatable dress code issues",
      "Diversify fundraising for Elimisha Fund via corporate partnerships, alumni outreach, and themed fundraising events",
    ],
  },
  {
    title: "IV. Space & Resource Expansion",
    icon:Expand,
    points: [
      "Develop a Sports Complex Chill Zone by transforming idle land into gazebos with seating and shaded decompressing areas",
      "Finalize and operationalize the student online marketplace in collaboration with legal and finance offices",
      "Link clubs with relevant companies for sponsorship, mentorship, and project collaborations",
      "Build a searchable online inventory linked to the Lost and Found office for quick and convenient repossession of misplaced items",
    ],
  },
  {
    title: "V. Innovation Opportunities & Recognition",
    icon: Rocket,
    points: [
      "Partner with @iLab, @iBiz, and innovation hubs to provide student's access to hackathons, entrepreneurship expos and mentorship",
      "Develop a Student Skills Exchange platform to act as a hub for provisioning of peer-to-peer services such as design, tutoring, photography, coding and many others",
      "Implement a Student Recognition Program to celebrate achievements in academics, sports, arts, leadership and community service",
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
