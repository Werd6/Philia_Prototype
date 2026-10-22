import type { Metadata } from "next";
import Placeholder from "@/components/Placeholder";
import WorldMap from "@/components/WorldMap";
import { CtaBand, PageIntro, Quote, SectionHead } from "@/components/Blocks";
import { COUNTRIES, LOREM, LOREM_SHORT, STORIES } from "@/lib/content";
import type { Scene } from "@/lib/content";

export const metadata: Metadata = { title: "Impact" };

const FIGURES = [
  { num: "13", label: "Countries represented around our table" },
  { num: "—", label: "Gatherings hosted since October 2025" },
  { num: "—", label: "Women who have joined us" },
];

const STORY_SCENES: Scene[] = ["gathering", "walk", "celebration"];

export default function ImpactPage() {
  return (
    <>
      <PageIntro eyebrow="Impact" title={<>Belonging, <em>made visible.</em></>} intro={LOREM} />

      <section className="section-tight">
        <div className="wrap center">
          <h2 className="big-claim">
            13 countries.
            <br />
            <em>One table.</em>
          </h2>
          <WorldMap />
          <ul className="country-list" aria-label="Countries represented">
            {COUNTRIES.map((c) => (
              <li key={c.name}>{c.name}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-plum">
        <div className="wrap">
          <SectionHead eyebrow="Our first year" title="What we can count so far" intro={LOREM_SHORT} />
          <div className="figures">
            {FIGURES.map((f) => (
              <div key={f.label} className="figure">
                <p className="figure-num">{f.num}</p>
                <p className="figure-label">{f.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="In their words" title="Stories from our table" intro={LOREM_SHORT} center />
          <div className="grid grid-3">
            {STORIES.map((s, i) => (
              <article key={s.name} className="story-card">
                <Placeholder scene={STORY_SCENES[i]} tone={s.tone} label="Story photograph" ratio="3 / 2" />
                <Quote quote={s.quote} name={s.name} theme={s.theme} tone={s.tone} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Help more women find a seat."
        text={LOREM_SHORT}
        actions={[
          { href: "/get-involved#give", label: "Donate", primary: true },
          { href: "/get-involved#partner", label: "Partner with us" },
        ]}
      />
    </>
  );
}
