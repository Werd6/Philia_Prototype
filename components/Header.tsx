"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LogoMark, { Wordmark } from "./LogoMark";
import { NAV } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link href="/" className="brand" aria-label="Philia Inc. home">
          <LogoMark />
          <Wordmark />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className={`burger ${open ? "is-open" : ""}`} aria-hidden="true" />
        </button>
        <nav id="main-nav" className={`nav ${open ? "is-open" : ""}`} aria-label="Main">
          {NAV.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className="navlink" aria-current={active ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
          <Link href="/get-involved" className="btn btn-primary btn-sm">
            Get involved
          </Link>
        </nav>
      </div>
    </header>
  );
}
