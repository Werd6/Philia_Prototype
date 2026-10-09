"use client";

import { useState } from "react";
import Placeholder from "./Placeholder";
import { GALLERY, type GalleryCategory } from "@/lib/content";

const FILTERS: ("All" | GalleryCategory)[] = ["All", "Dinners", "Workshops", "Walks", "Community events"];

export default function GalleryGrid() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const items = active === "All" ? GALLERY : GALLERY.filter((g) => g.category === active);

  return (
    <>
      <div className="filters" role="group" aria-label="Filter photos">
        {FILTERS.map((f) => (
          <button key={f} type="button" className="filter" aria-pressed={active === f} onClick={() => setActive(f)}>
            {f}
          </button>
        ))}
      </div>
      <div className="masonry">
        {items.map((g) => (
          <div key={g.label} className={`tile ${g.shape}`}>
            <Placeholder scene={g.scene} tone={g.tone} label={`${g.label} photograph`} fill />
          </div>
        ))}
      </div>
    </>
  );
}
