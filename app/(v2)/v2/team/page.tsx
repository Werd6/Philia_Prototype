import type { Metadata } from "next";
import Placeholder from "@/components/Placeholder";
import { CtaBand, PageHero, SectionHead, VideoPoster } from "@/components/Blocks";
import { BOARD, LOREM_SHORT, TEAM } from "@/lib/content";

export const metadata: Metadata = { title: "Our Team" };

export default function TeamPageV2() {
  return (
    <>
      <PageHero
        eyebrow="Meet our team"
        title={<>The women <em>behind the table.</em></>}
        intro={LOREM_SHORT}
        scene="portrait"
        tone="lavender"
        label="Team portrait"
      />

      <section className="section">
        <div className="wrap split">
          <VideoPoster label="Welcome message video" caption="A welcome from our Executive Director." tone="lavender" />
          <div>
            <p className="eyebrow">A welcome</p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p className="lede">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
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

      <section id="board" className="section anchor">
        <div className="wrap">
          <SectionHead eyebrow="Governance" title="Board of directors" intro={LOREM_SHORT} center />
          <ul className="board">
            {BOARD.map((m, i) => (
              <li key={`${m.role}-${i}`} className="board-seat">
                <Placeholder scene="portrait" tone={m.tone} label="Headshot" ratio="1 / 1" hideLabel className="board-photo" />
                <div>
                  <p className="board-name">{m.name}</p>
                  <p className="board-role">{m.role}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="board-note">Board seats and names are placeholders until the roster is confirmed.</p>
        </div>
      </section>

      <CtaBand
        title="Lend your gifts."
        text={LOREM_SHORT}
        actions={[
          { href: "/v2/get-involved#volunteer", label: "Volunteer", primary: true },
          { href: "/v2/get-involved#partner", label: "Partner with us" },
        ]}
      />
    </>
  );
}
