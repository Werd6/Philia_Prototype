const ICONS = {
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: <path d="M14 8.5h2.5V5H14a3.5 3.5 0 0 0-3.5 3.5V11H8v3.5h2.5V21H14v-6.5h2.5L17 11h-3V9a.5.5 0 0 1 .5-.5Z" />,
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 10.5V16M8 7.8v.1M11.5 16v-5.5M11.5 13c0-1.5 1-2.5 2.3-2.5S16 11.3 16 13v3" />
    </>
  ),
};

const LINKS: { name: string; icon: keyof typeof ICONS; href?: string }[] = [
  { name: "Instagram", icon: "instagram", href: "https://www.instagram.com/philia.inc/" },
  { name: "Facebook", icon: "facebook" },
  { name: "LinkedIn", icon: "linkedin" },
];

export default function SocialLinks() {
  return (
    <ul className="socials" aria-label="Social media">
      {LINKS.map((l) => (
        <li key={l.name}>
          <a
            href={l.href}
            rel={l.href ? "noopener" : undefined}
            aria-label={l.href ? l.name : `${l.name} (link coming soon)`}
            title={l.href ? l.name : `${l.name} link coming soon`}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {ICONS[l.icon]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
