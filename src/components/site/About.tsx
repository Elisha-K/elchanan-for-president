const AboutSection = () => {
  return (
    <section id="about" aria-label="About the candidate" className="container mx-auto px-6 py-14 md:py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">Who I am — and why I’ll deliver</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            I’m a listener first and a builder second. <br /><br />
            
            As Secretary General, I learned that credibility is earned through
            follow‑through, clarity, and respect for every student’s time and voice. My leadership style is calm, feedback‑driven,
            and inclusive — bringing people together to solve real problems but without the noise.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            I believe in practical change. <br />

            That means setting clear goals, publishing our progress, and staying accountable.
            It also means compassion — for the student balancing work and study, for clubs stretching limited budgets, and
            for teams doing their best with what they have. <br /><br />
            
            As President, I’ll scale what worked, fix what didn’t, and never stop listening.
          </p>
        </div>
        <aside className="rounded-xl border border-border/60 bg-secondary/20 p-5">
          <h3 className="font-semibold"> What I believe in</h3><br />
          <ul className="mt-3 space-y-2 text-sm">
            <li>• Start with students — design around real needs</li>
            <li>• Be transparent — publish plans, deadlines, results</li>
            <li>• Make it simple — reduce friction everywhere</li>
            <li>• Build coalitions and unity — progress is a team sport</li><br />

            I'm not just here to make promises — I'm here to deliver results.
        
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default AboutSection;
