"use client";

import { useState } from "react";

export type Pin = { name: string; x: number; y: number };

export default function MapPins({ pins, width }: { pins: Pin[]; width: number }) {
  const [active, setActive] = useState<string | null>(null);
  const current = pins.find((p) => p.name === active);

  return (
    <>
      {pins.map((p) => (
        <g
          key={p.name}
          className={`map-pin ${active === p.name ? "is-active" : ""}`}
          transform={`translate(${p.x} ${p.y})`}
          tabIndex={0}
          aria-label={p.name}
          onPointerEnter={() => setActive(p.name)}
          onPointerLeave={() => setActive((a) => (a === p.name ? null : a))}
          onFocus={() => setActive(p.name)}
          onBlur={() => setActive((a) => (a === p.name ? null : a))}
        >
          <circle r="14" className="map-pin-hit" />
          <circle r="12" className="map-pin-halo" />
          <circle r="5" className="map-pin-dot" />
        </g>
      ))}
      {current && (
        <text
          className="map-hover-label"
          x={Math.min(Math.max(current.x, 70), width - 70)}
          y={current.y - 20}
          textAnchor="middle"
          aria-hidden="true"
        >
          {current.name}
        </text>
      )}
    </>
  );
}
