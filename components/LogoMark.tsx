export default function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" role="img" aria-label="Philia mark" focusable="false">
      <path d="M24 45C11 39 5.5 26 12 15c11 4 15 17 12 30Z" fill="#BBA7E6" />
      <path d="M24 45c13-6 18.5-19 12-30-11 4-15 17-12 30Z" fill="#F78E6B" />
      <path d="M24 45c-2-9 1-16 6-20 2 8 0 15-6 20Z" fill="#F786C6" />
      <circle cx="24" cy="9" r="6.2" fill="#E35A2C" />
    </svg>
  );
}

export function Wordmark({ light }: { light?: boolean }) {
  return (
    <span className={`wordmark ${light ? "wordmark-light" : ""}`}>
      Philia<span className="inc">INC</span>
    </span>
  );
}
