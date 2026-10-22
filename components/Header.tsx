"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type MouseEvent } from "react";
import LogoMark, { Wordmark } from "./LogoMark";
import { NAV } from "@/lib/content";
import { otherDraftPath, withBase } from "@/lib/paths";

export default function Header({ base = "" }: { base?: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <Link href={withBase(base, "/")} className="brand" aria-label="Philia Inc. home">
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
            const href = withBase(base, item.href);
            const active = item.href === "/" ? pathname === href : pathname.startsWith(href);
            return (
              <Link key={item.href} href={href} className="navlink" aria-current={active ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
          <Link href={withBase(base, "/get-involved")} className="btn btn-primary btn-sm">
            Get involved
          </Link>
          <DraftSwap pathname={pathname} toDraft={base ? 1 : 2} />
        </nav>
      </div>
    </header>
  );
}

function DraftSwap({ pathname, toDraft }: { pathname: string; toDraft: 1 | 2 }) {
  const router = useRouter();
  const target = otherDraftPath(pathname);

  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    const hash = window.location.hash;
    if (!hash) return;
    e.preventDefault();
    router.push(target + hash);
  }

  return (
    <Link href={target} onClick={onClick} className="draft-swap" title={`Open this page in draft ${toDraft}`}>
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 8h13l-3-3M20 16H7l3 3" />
      </svg>
      View draft {toDraft}
    </Link>
  );
}
