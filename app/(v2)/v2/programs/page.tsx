import type { Metadata } from "next";
import Placeholder from "@/components/Placeholder";
import { CtaBand, EventCard, PageHero, SectionHead } from "@/components/Blocks";
import { COMING_PROGRAMS, LOREM, LOREM_SHORT, MORE_EVENTS, PROGRAMS, UPCOMING_EVENTS } from "@/lib/content";
import { V2_BASE } from "@/lib/paths";

export const metadata: Metadata = { title: "Programs" };

export default function ProgramsPageV2() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title={<>Come back, <em>again and again.</em></>}
        intro={LOREM}
        scene="walk"
        tone="lavender"
        label="Walking club on the trail"
      />

      <section className="section">
        <div className="wrap">
          <div className="grid grid-3">
            {PROGRAMS.map((p) => (
              <article key={p.title} className="program-card">
                <Placeholder scene={p.scene} tone={p.tone} label={p.label} ratio="4 / 5" />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap">
          <SectionHead eyebrow="Coming next" title="Growing with our community" intro={LOREM_SHORT} />
          <div className="coming">
            {COMING_PROGRAMS.map((c) => (
              <div key={c.title} className="coming-item">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <span className="pill">Coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="upcoming" className="section anchor">
        <div className="wrap">
          <SectionHead eyebrow="Upcoming events" title="Save your seat" intro={LOREM_SHORT} />
          <div className="grid grid-3">
            {[...UPCOMING_EVENTS, ...MORE_EVENTS]
              .sort((a, b) => Date.parse(`${a.month} ${a.day} 2026`) - Date.parse(`${b.month} ${b.day} 2026`))
              .map((e) => (
                <EventCard key={`${e.title}-${e.day}`} event={e} base={V2_BASE} />
              ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Share your gifts with us."
        text={LOREM_SHORT}
        actions={[
          { href: "/v2/get-involved#volunteer", label: "Volunteer", primary: true },
          { href: "/v2/get-involved#partner", label: "Partner with us" },
        ]}
      />
    </>
  );
}
