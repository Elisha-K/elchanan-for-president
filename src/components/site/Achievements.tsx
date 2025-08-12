import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Award, CheckCircle2 } from "lucide-react";

import imgBTC from "@/assets/btc.jpeg";
import imgCampaign from "@/assets/campaign-poster.jpeg";
import imgPressRelease from "@/assets/press-release.jpeg";
import imgTreePlanting from "@/assets/tree-planting.jpeg";
import imgCouncil from "@/assets/16th-council.jpeg";
import imgIntStudents from "@/assets/international-students.jpeg";
import imgModerating from "@/assets/e-moderating-in-shuka.jpeg";
import imgStakeholders from "@/assets/before-stakeholders.jpeg";
import imgTeambuilding from "@/assets/teambuilding.jpeg";


type Achievement = {
  title: string;
  image: any;
  excerpt: string;
  details: string[];
  impact?: string;
};

const ACHIEVEMENTS: Achievement[] = [
  {
    title: "OSGS System — from talk to action",
    image: imgCouncil,
    excerpt:
      "Launched the Office of the Secretary General (OSGS) Senate system effectively channeling feedback from students to the council - your voice matters!",
    details: [
      "Implemented a transparent feedback loop with regular updates from the Council channeled to students via classreps",
      "Incorporated Class Reps from across the board improving representation and enabling inclusive decision making",
      "Improved overall synergy between Students and the Council - student ideas, grievances, suggestions brought into consideration during planning",
    ],
    impact: "Engagement up • Faster resolutions • Trust rebuilt",
  },
  {
    title: "Tree Planting Initiatives: for a better Strathmore",
    image: imgTreePlanting,
    excerpt:
      "Coordinated volunteer tree planting at the Sports Complex boosting environmental care initiatives on campus",
    details: [
      "700 trees planted over 2 days boosting campus greenery and eco-friendliness",
      "Set a solid foundation for ongoing sustainability efforts in the University",
      "United Stratizens towards positive climate action",
    ],
    impact: "Cleaner spaces • Culture shift • Sustainable habits",
  },
  {
    title: "Monthly Press Releases",
    image: imgPressRelease,
    excerpt:
      "Launched monthly press releases keeping students informed, involved and inspired",
    details: [
      "Provided accountability for each Council docket through monthly updates",
      "Created a platform to highlight Council successes and ongoing initiatives",
      "Improved overall student awareness on promises made to them boosting morale"
    ],
    impact: "Increased awareness • Improved accountability • Fostered transparency",
  },
  {
    title: "The Black Ticket Concert: Air for our Artists",
    image: imgBTC,
    excerpt:
      "Successfully organized a high-impact concert providing Strathmore's local talent with a solid platform for eloquent self-expression",
    details: [
      "Turnout of over 500 students - Main Auditorium filled to overflowing",
      "Showcased local Strathmore talent across multiple genres (dance, rap, song, drama, comedy etc)",
      "Provided a platform for support and visibility of our student artists",
    ],
    impact: "Strathmore talent supported • Real Opportunities • Genuine visibility",
  },
  {
    title: "International Students: Made to feel at home",
    image: imgTeambuilding,
    excerpt:
      "Organised and led teambuilding initiatives for international students fostering a sense of belonging and community.",
    details: [
      "Created a welcoming environment for international students through numerous activities",
      "Facilitated connections between local and international students",
      "Promoted cultural exchange and understanding within the university",
    ],
    impact: "Community Building • Cultural Exchange • Sense of Belonging",
  },
  {
    title: "Crisis Control: being a voice for the students",
    image: imgStakeholders,
    excerpt:
      "Proactively engaged with key university stakeholders to amplify student voices during times of crisis",
    details: [
      "Together with the Academic Rep, vouched for student safety to the DVC during the maandamano protests of 25th June, ensuring classes shifted online",
      "Pushed for exam timetable re-modification after abrupt changes were made without prior student-body consultations",
      "Consistently collaborated with administration to ensure student perspectives were considered",
    ],
    impact: "Amplified student voices • Admin-council collaboration • Safety prioritized",
  },
  {
    title: "First Years - Welcomed and Supported",
    image: imgModerating,
    excerpt:
      "Engaged First Year students right from orientation inspiring them to join clubs and participate in Strathmore's activities",
    details: [
      "MC'd during the First Years Orientation to welcome and engage new students",
      "Promoted involvement in campus life and student organizations resulting in a notable reduction in student apathy",
    ],
    impact: "Student apathy decreased • Engagement increased • Community strengthened",
  },
  {
    title: "International Students Week",
    image: imgIntStudents,
    excerpt:
      "Currently planning International Students' Week alongside SISA",
    details: [
      "Collaborating with SISA to create a week of events celebrating international students",
      "Fostering connections between local and international students",
    ],
    impact: "Cultural Understanding • International Student Support • Unity in Diversity",
  },
];

function AchievementCard({ a }: { a: Achievement }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="overflow-hidden bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="relative">
        <img
          src={a.image}
          alt={`${a.title} — documentary still`}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-background/10 px-4 py-3">
          <CardTitle className="text-base md:text-lg">{a.title}</CardTitle>
        </div>
      </div>
      <CardHeader className="pb-2">
        <p className="text-sm text-muted-foreground">{a.excerpt}</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-2 pb-3 text-xs text-muted-foreground">
          <Award className="h-4 w-4" />
          <span>{a.impact}</span>
        </div>
        {open && (
          <ul className="space-y-2 pb-3">
            {a.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        )}
        <Button
          variant="outline"
          size="sm"
          className="hover-scale w-full"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`achv-${a.title}`}
        >
          {open ? (
            <>
              Hide details <ChevronUp className="ml-1" />
            </>
          ) : (
            <>
              Read more <ChevronDown className="ml-1" />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

const AchievementsSection = () => {
  return (
    <section id="achievements" aria-label="Key achievements" className="container mx-auto px-6 py-14 md:py-20">
      <div className="mb-8 max-w-3xl">
        <h2 className="font-display text-2xl font-semibold md:text-3xl">My results speak for themselves</h2>
        <p className="mt-2 text-muted-foreground">
          Here’s a snippet of what I delivered as Secretary General — mapped directly from my previous manifesto, and extended to where it mattered most
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((a) => (
          <AchievementCard key={a.title} a={a} />
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
