import { useId } from "react";
import type { Scene, Tone } from "@/lib/content";

const TONES: Record<Tone, { bg1: string; bg2: string; a: string; b: string; c: string; ink: string }> = {
  coral: { bg1: "#FDE4D6", bg2: "#F9C9B4", a: "#F78E6B", b: "#E35A2C", c: "#F786C6", ink: "#4C3560" },
  lavender: { bg1: "#F3EEFA", bg2: "#DCD0F2", a: "#BBA7E6", b: "#6B4E86", c: "#F78E6B", ink: "#4C3560" },
  pink: { bg1: "#FFF0F6", bg2: "#F9CBE3", a: "#F786C6", b: "#C898C6", c: "#E35A2C", ink: "#4C3560" },
  blush: { bg1: "#F6F0EF", bg2: "#F3DCD3", a: "#C898C6", b: "#F78E6B", c: "#BBA7E6", ink: "#4C3560" },
  plum: { bg1: "#6B4E86", bg2: "#4C3560", a: "#C898C6", b: "#F786C6", c: "#F78E6B", ink: "#FFFFFF" },
};

type Props = {
  scene: Scene;
  tone?: Tone;
  label: string;
  ratio?: string;
  className?: string;
  hideLabel?: boolean;
  fill?: boolean;
};

export default function Placeholder({ scene, tone = "coral", label, ratio = "4 / 3", className, hideLabel, fill }: Props) {
  const id = useId().replace(/:/g, "");
  const t = TONES[tone];

  return (
    <div
      className={`ph ${fill ? "ph-fill" : ""} ${className ?? ""}`}
      style={fill ? undefined : { aspectRatio: ratio }}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={t.bg1} />
            <stop offset="1" stopColor={t.bg2} />
          </linearGradient>
          <radialGradient id={`r${id}`} cx="0.8" cy="0.15" r="0.7">
            <stop offset="0" stopColor="#fff" stopOpacity="0.55" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="-200" y="-200" width="800" height="700" fill={`url(#g${id})`} />
        <rect x="-200" y="-200" width="800" height="700" fill={`url(#r${id})`} />
        <SceneArt scene={scene} t={t} />
      </svg>
      {!hideLabel && (
        <span className="ph-label">
          <CameraIcon />
          {label}
        </span>
      )}
    </div>
  );
}

function SceneArt({ scene, t }: { scene: Scene; t: (typeof TONES)[Tone] }) {
  switch (scene) {
    case "gathering":
      return (
        <g>
          <path d="M70 150a40 40 0 0 1 80 0v40H70Z" fill={t.a} opacity=".35" />
          <path d="M250 150a40 40 0 0 1 80 0v40h-80Z" fill={t.c} opacity=".3" />
          <rect x="40" y="190" width="320" height="14" rx="7" fill={t.b} opacity=".75" />
          <rect x="60" y="204" width="8" height="60" rx="4" fill={t.b} opacity=".5" />
          <rect x="332" y="204" width="8" height="60" rx="4" fill={t.b} opacity=".5" />
          {[95, 165, 235, 305].map((x) => (
            <ellipse key={x} cx={x} cy="186" rx="22" ry="5" fill="#fff" opacity=".9" />
          ))}
          {[130, 200, 270].map((x) => (
            <g key={x}>
              <rect x={x - 3} y="150" width="6" height="34" rx="3" fill="#fff" opacity=".9" />
              <path d={`M${x} 136c6 6 6 12 0 14-6-2-6-8 0-14Z`} fill={t.c} />
            </g>
          ))}
        </g>
      );
    case "walk":
      return (
        <g>
          <circle cx="290" cy="95" r="34" fill={t.c} opacity=".55" />
          <path d="M-20 210C60 170 140 175 210 200s150 10 220-20v140H-20Z" fill={t.a} opacity=".45" />
          <path d="M-20 245C80 215 170 225 250 240s120 0 190-20v100H-20Z" fill={t.b} opacity=".45" />
          <path d="M200 300C210 270 180 250 205 225s50-20 60-28" stroke="#fff" strokeWidth="10" strokeLinecap="round" fill="none" opacity=".8" />
        </g>
      );
    case "celebration":
      return (
        <g>
          {[
            [110, 105, 32, t.a],
            [160, 85, 28, t.c],
            [205, 110, 30, t.b],
            [250, 90, 26, t.a],
            [295, 112, 30, t.c],
          ].map(([x, y, r, c], i) => (
            <g key={i}>
              <path d={`M${x} ${Number(y) + Number(r)} Q ${Number(x) + 8} ${Number(y) + 70} ${200} 250`} stroke={t.ink} strokeOpacity=".25" fill="none" />
              <ellipse cx={x} cy={y} rx={r} ry={Number(r) * 1.15} fill={String(c)} opacity=".75" />
            </g>
          ))}
          {[[70, 210], [330, 200], [120, 245], [290, 250], [200, 40]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="5" fill={t.b} opacity=".6" />
          ))}
        </g>
      );
    case "workshop":
      return (
        <g>
          {[
            [70, 90, t.a],
            [165, 70, t.c],
            [260, 95, t.b],
          ].map(([x, y, c], i) => (
            <g key={i}>
              <rect x={x} y={y} width="72" height="96" rx="4" fill="#fff" opacity=".92" />
              <circle cx={Number(x) + 36} cy={Number(y) + 42} r="20" fill={String(c)} opacity=".6" />
              <path d={`M${Number(x) + 10} ${Number(y) + 84}q26-18 52 0`} stroke={String(c)} strokeWidth="5" fill="none" opacity=".7" />
              <path d={`M${Number(x) + 20} ${Number(y) + 96}l-12 70M${Number(x) + 52} ${Number(y) + 96}l12 70`} stroke={t.b} strokeWidth="5" strokeLinecap="round" opacity=".4" />
            </g>
          ))}
        </g>
      );
    case "portrait":
      return (
        <g>
          <path d="M120 300V140a80 80 0 0 1 160 0v160Z" fill="#fff" opacity=".5" />
          <g transform="translate(152 92) scale(2)">
            <Petals t={t} />
          </g>
        </g>
      );
    case "community":
      return (
        <g opacity=".8">
          <circle cx="150" cy="140" r="62" fill={t.a} opacity=".55" />
          <circle cx="250" cy="140" r="62" fill={t.c} opacity=".45" />
          <circle cx="200" cy="200" r="62" fill={t.b} opacity=".35" />
        </g>
      );
    case "story":
      return (
        <g>
          <path d="M200 110c-40-22-90-22-120-8v120c30-14 80-14 120 8Z" fill="#fff" opacity=".9" />
          <path d="M200 110c40-22 90-22 120-8v120c-30-14-80-14-120 8Z" fill="#fff" opacity=".75" />
          {[132, 150, 168, 186].map((y) => (
            <g key={y} stroke={t.a} strokeWidth="4" strokeLinecap="round" opacity=".6">
              <path d={`M100 ${y}h76`} />
              <path d={`M224 ${y}h76`} />
            </g>
          ))}
          <path d="M200 70c6 6 6 12 0 16-6-4-6-10 0-16Z" fill={t.c} />
        </g>
      );
  }
}

function Petals({ t }: { t: (typeof TONES)[Tone] }) {
  return (
    <g>
      <path d="M24 45C11 39 5.5 26 12 15c11 4 15 17 12 30Z" fill={t.a} opacity=".9" />
      <path d="M24 45c13-6 18.5-19 12-30-11 4-15 17-12 30Z" fill={t.c} opacity=".75" />
      <circle cx="24" cy="9" r="6.2" fill={t.b} opacity=".8" />
    </g>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M4 8h3l2-3h6l2 3h3v11H4Z" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  );
}
