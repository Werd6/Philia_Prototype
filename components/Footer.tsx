import Link from "next/link";
import type { ReactNode } from "react";
import LogoMark, { Wordmark } from "./LogoMark";
import { withBase } from "@/lib/paths";

export default function Footer({
  base = "",
  exploreExtra,
  contactExtra,
  aside,
}: {
  base?: string;
  exploreExtra?: ReactNode;
  contactExtra?: ReactNode;
  aside?: ReactNode;
}) {
  const to = (path: string) => withBase(base, path);

  return (
    <footer className="site-footer">
      <div className="wrap">
        {aside}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand">
              <LogoMark size={38} />
              <Wordmark light />
            </div>
            <p className="footer-tagline">No woman has to walk alone.</p>
            <p className="footer-origin">Began in Omaha. Growing wherever women need a table.</p>
          </div>

          <div>
            <h2 className="footer-h">Explore</h2>
            <ul>
              <li><Link href={to("/about")}>About</Link></li>
              <li><Link href={to("/team")}>Our team</Link></li>
              {exploreExtra}
              <li><Link href={to("/programs")}>Programs</Link></li>
              <li><Link href={to("/impact")}>Impact</Link></li>
              <li><Link href={to("/gallery")}>Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="footer-h">Get involved</h2>
            <ul>
              <li><Link href={to("/programs#upcoming")}>Attend an event</Link></li>
              <li><Link href={to("/get-involved#volunteer")}>Volunteer</Link></li>
              <li><Link href={to("/get-involved#partner")}>Partner with us</Link></li>
              <li><Link href={to("/get-involved#give")}>Donate</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="footer-h">Say hello</h2>
            <ul>
              <li><a href="mailto:hello@philia.org">hello@philia.org</a></li>
              <li><a href="https://www.instagram.com/philia.inc/" rel="noopener">@philia.inc</a></li>
            </ul>
            {contactExtra}
            <Link href={to("/get-involved#give")} className="btn btn-light btn-sm footer-donate">
              Donate
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Philia Inc.</span>
          <span>Prototype draft. Copy and images are placeholders.</span>
        </div>
      </div>
    </footer>
  );
}
