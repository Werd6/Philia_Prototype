import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import { CtaBand, EventCard, Quote, SectionHead, VideoPoster } from "@/components/Blocks";
import { LOREM_SHORT, UPCOMING_EVENTS } from "@/lib/content";
import type { Scene, Tone } from "@/lib/content";
import { V2_BASE } from "@/lib/paths";

const BEATS: { num: string; title: string; href: string; link: string; scene: Scene; tone: Tone; label: string }[] = [
  { num: "Who we are", title: "A circle of women", href: "/v2/about", link: "Our story", scene: "community", tone: "coral", label: "Group photograph" },
  { num: "Why we exist", title: "So no one walks alone", href: "/v2/about#why", link: "Why Philia", scene: "portrait", tone: "lavender", label: "Founder photograph" },
  { num: "What we do", title: "Gather, walk, and share", href: "/v2/programs", link: "Our programs", scene: "gathering", tone: "pink", label: "Gathering photograph" },
];

const STRIP: { scene: Scene; tone: Tone; label: string; ratio: string }[] = [
  { scene: "gathering", tone: "coral", label: "Dinner", ratio: "3 / 4" },
  { scene: "walk", tone: "lavender", label: "Walk", ratio: "3 / 4" },
  { scene: "celebration", tone: "pink", label: "Celebration", ratio: "3 / 4" },
  { scene: "workshop", tone: "blush", label: "Workshop", ratio: "3 / 4" },
  { scene: "community", tone: "coral", label: "Picnic", ratio: "3 / 4" },
];

export default function HomeV2() {
  return (
    <>
      <section className="hero">
        <Placeholder scene="community" tone="coral" label="Hero photograph or video" fill />
        <div className="hero-scrim" />
        <div className="wrap hero-content">
          <h1>
            No woman has to <em>walk alone.</em>
          </h1>
          <p className="hero-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          <div className="btn-row">
            <Link href="/v2/programs#upcoming" className="btn btn-primary">
              Attend an event
            </Link>
            <Link href="/v2/get-involved#attend" className="btn btn-ghost-light">
              Join our community
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Welcome to Philia" title={<>Friendship, <em>on purpose.</em></>} intro={LOREM_SHORT} />
          <div className="grid grid-3">
            {BEATS.map((b) => (
              <article key={b.num} className="beat">
                <Placeholder scene={b.scene} tone={b.tone} label={b.label} ratio="4 / 5" />
                <div>
                  <p className="beat-num">{b.num}</p>
                  <h3>{b.title}</h3>
                  <p>{LOREM_SHORT}</p>
                  <Link href={b.href} className="text-link">
                    {b.link} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap">
          <div className="section-head-row">
            <SectionHead eyebrow="Upcoming events" title="Pull up a chair" intro={LOREM_SHORT} />
            <Link href="/v2/programs#upcoming" className="btn btn-outline">
              See all events
            </Link>
          </div>
          <div className="grid grid-3">
            {UPCOMING_EVENTS.map((e) => (
              <EventCard key={e.title} event={e} base={V2_BASE} />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-plum">
        <div className="wrap split">
          <VideoPoster label="Welcome video" caption="A two-minute look inside a Philia gathering." tone="coral" />
          <div>
            <Quote
              large
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
              name="Lorem I."
              theme="Philia member"
              tone="pink"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head-row">
            <SectionHead eyebrow="Moments together" title="A year of showing up" />
            <Link href="/v2/gallery" className="text-link">
              View the gallery <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="strip">
            {STRIP.map((s) => (
              <Placeholder key={s.label} scene={s.scene} tone={s.tone} label={s.label} ratio={s.ratio} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Help keep the table set."
        text={LOREM_SHORT}
        actions={[
          { href: "/v2/get-involved#give", label: "Donate", primary: true },
          { href: "/v2/get-involved#partner", label: "Partner with us" },
        ]}
      />
    </>
  );
}
