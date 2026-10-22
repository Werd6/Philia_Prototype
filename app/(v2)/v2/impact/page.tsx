import type { Metadata } from "next";
import Placeholder from "@/components/Placeholder";
import WorldMap from "@/components/WorldMap";
import { CtaBand, PageHero, Quote, SectionHead } from "@/components/Blocks";
import { LOREM, LOREM_SHORT, STORIES, V2_COUNTRIES } from "@/lib/content";
import type { Scene } from "@/lib/content";

export const metadata: Metadata = { title: "Impact" };

const COUNT = V2_COUNTRIES.length;

const FIGURES = [
  { num: String(COUNT), label: "Countries represented around our table" },
  { num: "—", label: "Gatherings hosted since October 2025" },
  { num: "—", label: "Women who have joined us" },
];

const STORY_SCENES: Scene[] = ["gathering", "walk", "celebration"];

export default function ImpactPageV2() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title={<>Belonging, <em>made visible.</em></>}
        intro={LOREM}
        scene="community"
        tone="coral"
        label="Community event, wide shot"
      />

      <section className="section">
        <div className="wrap center">
          <h2 className="big-claim">
            {COUNT} countries.
            <br />
            <em>One table.</em>
          </h2>
          <WorldMap countries={V2_COUNTRIES} hoverLabels />
          <p className="map-hint">Hover or tap a pin to see the country.</p>
          <ul className="country-list" aria-label="Countries represented">
            {V2_COUNTRIES.map((c) => (
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
          { href: "/v2/get-involved#give", label: "Donate", primary: true },
          { href: "/v2/get-involved#partner", label: "Partner with us" },
        ]}
      />
    </>
  );
}
