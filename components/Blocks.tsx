import Link from "next/link";
import type { ReactNode } from "react";
import Placeholder from "./Placeholder";
import type { PhiliaEvent, Scene, Tone } from "@/lib/content";
import { withBase } from "@/lib/paths";

export function SectionHead({
  eyebrow,
  title,
  intro,
  center,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={`section-head ${center ? "center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p className="lede">{intro}</p>}
    </div>
  );
}

export function PageIntro({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro: string }) {
  return (
    <section className="page-intro">
      <div className="wrap">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lede">{intro}</p>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  scene,
  tone,
  label,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  scene: Scene;
  tone: Tone;
  label: string;
}) {
  return (
    <section className="page-hero">
      <Placeholder scene={scene} tone={tone} label={label} fill />
      <div className="hero-scrim" />
      <div className="wrap page-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lede">{intro}</p>
      </div>
    </section>
  );
}

export function EventCard({ event, compact, base = "" }: { event: PhiliaEvent; compact?: boolean; base?: string }) {
  return (
    <article className={`event-card ${compact ? "is-compact" : ""}`}>
      <div className="event-media">
        <Placeholder scene={event.scene} tone={event.tone} label="Event photograph" ratio="3 / 2" />
        <div className="event-date" aria-hidden="true">
          <span className="event-month">{event.month}</span>
          <span className="event-day">{event.day}</span>
        </div>
      </div>
      <div className="event-body">
        <h3>{event.title}</h3>
        <p className="event-meta">
          {event.date} · {event.time}
          <br />
          {event.place}
        </p>
        <Link href={withBase(base, "/get-involved#attend")} className="text-link">
          Save my seat <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export function Quote({
  quote,
  name,
  theme,
  tone = "coral",
  large,
}: {
  quote: string;
  name: string;
  theme?: string;
  tone?: Tone;
  large?: boolean;
}) {
  return (
    <figure className={`quote ${large ? "quote-large" : ""}`}>
      <blockquote>“{quote}”</blockquote>
      <figcaption>
        <Placeholder scene="portrait" tone={tone} label="Portrait" ratio="1 / 1" hideLabel className="quote-avatar" />
        <span>
          <span className="quote-name">{name}</span>
          {theme && <span className="quote-theme">{theme}</span>}
        </span>
      </figcaption>
    </figure>
  );
}

export function VideoPoster({ label, caption, tone = "plum" }: { label: string; caption: string; tone?: Tone }) {
  return (
    <figure className="video-poster">
      <div className="video-frame">
        <Placeholder scene="community" tone={tone} label={label} ratio="16 / 9" />
        <button type="button" className="play" aria-label={`Play: ${caption}`}>
          <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
            <path d="M8 5.5v13l11-6.5Z" fill="currentColor" />
          </svg>
        </button>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function PathwayCard({
  id,
  icon,
  title,
  text,
  cta,
  href,
  featured,
}: {
  id: string;
  icon: ReactNode;
  title: string;
  text: string;
  cta: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <article id={id} className={`pathway ${featured ? "is-featured" : ""}`}>
      <div className="pathway-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <Link href={href} className={`btn ${featured ? "btn-light" : "btn-outline"} btn-sm`}>
        {cta}
      </Link>
    </article>
  );
}

export function CtaBand({
  title,
  text,
  actions,
}: {
  title: ReactNode;
  text: string;
  actions: { href: string; label: string; primary?: boolean }[];
}) {
  return (
    <section className="section-tight">
      <div className="wrap">
        <div className="cta-band">
          <svg className="cta-petals" width="320" height="320" viewBox="0 0 48 48" aria-hidden="true">
            <path d="M24 45C11 39 5.5 26 12 15c11 4 15 17 12 30Z" fill="#BBA7E6" />
            <path d="M24 45c13-6 18.5-19 12-30-11 4-15 17-12 30Z" fill="#F78E6B" />
            <circle cx="24" cy="9" r="6.2" fill="#F786C6" />
          </svg>
          <div>
            <h2>{title}</h2>
            <p className="lede">{text}</p>
          </div>
          <div className="btn-row">
            {actions.map((a) => (
              <Link key={a.label} href={a.href} className={`btn ${a.primary ? "btn-primary" : "btn-ghost-light"}`}>
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const MARKS = [
  (c: string) => <circle cx="20" cy="20" r="14" fill="none" stroke={c} strokeWidth="5" />,
  (c: string) => <path d="M20 5l15 26H5Z" fill={c} />,
  (c: string) => <path d="M20 33s-13-8-13-17a7 7 0 0 1 13-3 7 7 0 0 1 13 3c0 9-13 17-13 17Z" fill={c} />,
  (c: string) => <path d="M20 4l4.2 10.6L35 16l-8.5 7.2L29 34l-9-6-9 6 2.5-10.8L5 16l10.8-1.4Z" fill={c} />,
  (c: string) => <rect x="7" y="7" width="26" height="26" rx="8" fill="none" stroke={c} strokeWidth="5" />,
  (c: string) => (
    <g fill={c}>
      <circle cx="13" cy="20" r="8" />
      <circle cx="27" cy="20" r="8" opacity=".6" />
    </g>
  ),
];
const MARK_COLORS = ["#E35A2C", "#6B4E86", "#F786C6", "#F78E6B", "#BBA7E6", "#C898C6"];

export function PartnerLogo({ name, index }: { name: string; index: number }) {
  const mark = MARKS[index % MARKS.length];
  const color = MARK_COLORS[index % MARK_COLORS.length];
  return (
    <div className="partner-logo" role="img" aria-label={`Placeholder logo: ${name}`}>
      <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
        {mark(color)}
      </svg>
      <span className="partner-name">{name}</span>
      <span className="partner-tag">Logo placeholder</span>
    </div>
  );
}

export function Icon({ name }: { name: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "heart":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <path d="M12 20s-7.5-4.6-7.5-10A4.2 4.2 0 0 1 12 7.6 4.2 4.2 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />
        </svg>
      );
    case "globe":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17M12 3.5c2.5 2.6 3.6 5.4 3.6 8.5s-1.1 5.9-3.6 8.5c-2.5-2.6-3.6-5.4-3.6-8.5S9.5 6.1 12 3.5Z" />
        </svg>
      );
    case "door":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <path d="M6 20V5.5A1.5 1.5 0 0 1 7.5 4h9A1.5 1.5 0 0 1 18 5.5V20M4 20h16" />
          <circle cx="14.5" cy="12.5" r=".9" fill="currentColor" />
        </svg>
      );
    case "seedling":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <path d="M12 20v-8M12 12c0-4 3-6.5 7-6.5 0 4-3 6.5-7 6.5ZM12 14c0-3-2.4-5-5.5-5 0 3 2.4 5 5.5 5Z" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
          <path d="M4 10h16M8.5 3.5v4M15.5 3.5v4" />
        </svg>
      );
    case "hands":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <path d="M8 14.5 5.5 12a1.6 1.6 0 0 1 2.3-2.3l2.7 2.7M10.5 12.4l-3-3a1.6 1.6 0 0 1 2.3-2.3l3.7 3.7" />
          <path d="M13.5 10.8 12 9.3a1.6 1.6 0 0 1 2.3-2.3l3.2 3.2c2 2 2 5.2 0 7.2s-5.2 2-7.2 0L8 15" />
        </svg>
      );
    case "link":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <circle cx="9" cy="12" r="5" />
          <circle cx="15" cy="12" r="5" />
        </svg>
      );
    case "gift":
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <rect x="4" y="9" width="16" height="11" rx="1.5" />
          <path d="M3 9h18M12 9v11M12 9c-1.5-3.5-5.5-4-5.5-1.5S10 9 12 9Zm0 0c1.5-3.5 5.5-4 5.5-1.5S14 9 12 9Z" />
        </svg>
      );
    default:
      return null;
  }
}
