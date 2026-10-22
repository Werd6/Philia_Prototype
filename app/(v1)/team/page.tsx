import type { Metadata } from "next";
import Placeholder from "@/components/Placeholder";
import { CtaBand, PageIntro, SectionHead, VideoPoster } from "@/components/Blocks";
import { LOREM_SHORT, TEAM } from "@/lib/content";

export const metadata: Metadata = { title: "Our Team" };

export default function TeamPage() {
  return (
    <>
      <PageIntro eyebrow="Meet our team" title={<>The women <em>behind the table.</em></>} intro={LOREM_SHORT} />

      <section className="section-tight">
        <div className="wrap split">
          <VideoPoster label="Welcome message video" caption="A welcome from our Executive Director." tone="lavender" />
          <div>
            <p className="eyebrow">A welcome</p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p className="lede">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Leadership" title="Our leadership" center />
          <div className="grid grid-4">
            {TEAM.map((m) => (
              <article key={m.role} className="team-card">
                <Placeholder scene="portrait" tone={m.tone} label="Headshot" ratio="4 / 5" />
                <h3>{m.name}</h3>
                <p className="team-role">{m.role}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Lend your gifts."
        text={LOREM_SHORT}
        actions={[
          { href: "/get-involved#volunteer", label: "Volunteer", primary: true },
          { href: "/get-involved#partner", label: "Partner with us" },
        ]}
      />
    </>
  );
}
