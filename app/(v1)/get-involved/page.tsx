import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Icon, PageIntro, PartnerLogo, PathwayCard, SectionHead } from "@/components/Blocks";
import { LOREM, LOREM_SHORT, PARTNERS } from "@/lib/content";

export const metadata: Metadata = { title: "Get Involved" };

const PATHS = [
  { id: "attend", icon: "calendar", title: "Attend", cta: "See upcoming events", href: "/programs#upcoming", featured: true },
  { id: "volunteer", icon: "hands", title: "Volunteer", cta: "Offer your time", href: "#contact" },
  { id: "partner", icon: "link", title: "Partner", cta: "Start a conversation", href: "#contact" },
  { id: "give", icon: "gift", title: "Give", cta: "Donate", href: "#contact" },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageIntro eyebrow="Get involved" title={<>There’s a seat <em>for you.</em></>} intro={LOREM} />

      <section className="section-tight">
        <div className="wrap">
          <div className="grid grid-4">
            {PATHS.map((p) => (
              <PathwayCard
                key={p.id}
                id={p.id}
                icon={<Icon name={p.icon} />}
                title={p.title}
                text={LOREM_SHORT}
                cta={p.cta}
                href={p.href}
                featured={p.featured}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="wrap">
          <SectionHead eyebrow="Our partners" title="Walking alongside us" intro={LOREM_SHORT} />
          <div className="partners">
            {PARTNERS.map((name, i) => (
              <PartnerLogo key={name} name={name} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section anchor">
        <div className="wrap contact">
          <div>
            <p className="eyebrow">Say hello</p>
            <h2>Let’s talk.</h2>
            <p className="lede">{LOREM_SHORT}</p>
            <ul className="contact-list">
              <li>
                <span>Email</span>
                <a href="mailto:hello@philia.org">hello@philia.org</a>
              </li>
              <li>
                <span>Instagram</span>
                <a href="https://www.instagram.com/philia.inc/" rel="noopener">
                  @philia.inc
                </a>
              </li>
              <li>
                <span>Where we began</span>
                Omaha, Nebraska
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
