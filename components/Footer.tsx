import Link from "next/link";
import LogoMark, { Wordmark } from "./LogoMark";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
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
              <li><Link href="/about">About</Link></li>
              <li><Link href="/team">Our team</Link></li>
              <li><Link href="/programs">Programs</Link></li>
              <li><Link href="/impact">Impact</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="footer-h">Get involved</h2>
            <ul>
              <li><Link href="/programs#upcoming">Attend an event</Link></li>
              <li><Link href="/get-involved#volunteer">Volunteer</Link></li>
              <li><Link href="/get-involved#partner">Partner with us</Link></li>
              <li><Link href="/get-involved#give">Donate</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="footer-h">Say hello</h2>
            <ul>
              <li><a href="mailto:hello@philia.org">hello@philia.org</a></li>
              <li><a href="https://www.instagram.com/philia.inc/" rel="noopener">@philia.inc</a></li>
            </ul>
            <Link href="/get-involved#give" className="btn btn-light btn-sm footer-donate">
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
