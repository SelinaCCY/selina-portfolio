export const NAV_HEIGHT = 68;

export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: Math.max(0, el.offsetTop - NAV_HEIGHT), behavior: 'smooth' });
}
