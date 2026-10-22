import type { Metadata } from "next";
import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import { CtaBand, Icon, PageIntro, SectionHead } from "@/components/Blocks";
import { LOREM, LOREM_LONG, LOREM_SHORT, VALUES } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About Philia" title={<>Born from <em>lived experience.</em></>} intro={LOREM} />

      <section className="section-tight">
        <div className="wrap split">
          <div className="split-media">
            <Placeholder scene="portrait" tone="coral" label="Founder photograph" ratio="4 / 5" />
            <Placeholder scene="gathering" tone="lavender" label="First dinner photograph" ratio="1 / 1" className="ph-accent" />
          </div>
          <div>
            <p className="eyebrow">Our story</p>
            <h2>A lifeline, then a table for everyone.</h2>
            <p className="lede">{LOREM_LONG}</p>
            <p>{LOREM}</p>
          </div>
        </div>
      </section>

      <section id="why" className="section">
        <div className="wrap split reverse">
          <div>
            <Placeholder scene="walk" tone="pink" label="Walking together photograph" ratio="5 / 4" />
          </div>
          <div>
            <p className="eyebrow">Why Philia</p>
            <h2>
              <em>Philia</em> means deep, loyal friendship.
            </h2>
            <p className="lede">{LOREM_LONG}</p>
          </div>
        </div>
      </section>

      <section className="section bg-plum center">
        <div className="wrap">
          <p className="eyebrow">Our mission</p>
          <p className="mission">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Our values" title="What we hold to" intro={LOREM_SHORT} center />
          <div className="grid grid-4">
            {VALUES.map((v) => (
              <article key={v.title} className="value">
                <div className="value-icon">
                  <Icon name={v.icon} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
          <p className="center after-grid">
            <Link href="/team" className="btn btn-outline">
              Meet our team
            </Link>
          </p>
        </div>
      </section>

      <CtaBand
        title="Come as you are."
        text={LOREM_SHORT}
        actions={[
          { href: "/programs#upcoming", label: "Attend an event", primary: true },
          { href: "/get-involved", label: "Get involved" },
        ]}
      />
    </>
  );
}
