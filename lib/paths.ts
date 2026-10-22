export const V2_BASE = "/v2";

export function withBase(base: string, path: string) {
  if (!base || path.startsWith("#") || path.startsWith("http") || path.startsWith("mailto:")) return path;
  if (path === "/") return base;
  if (path.startsWith("/#")) return base + path.slice(1);
  return base + path;
}

export function otherDraftPath(pathname: string) {
  if (pathname === V2_BASE) return "/";
  if (pathname.startsWith(`${V2_BASE}/`)) return pathname.slice(V2_BASE.length);
  return pathname === "/" ? V2_BASE : V2_BASE + pathname;
}
