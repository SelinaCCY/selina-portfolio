import { useEffect, useState } from 'react';

export const STOPS = [
  { id: 'landing',   accent: '--c-malaysia' },
  { id: 'education', accent: '--c-essex' },
  { id: 'career',    accent: '--c-london' },
  { id: 'projects',  accent: '--c-projects' },
  { id: 'about',     accent: '--c-about' },
  { id: 'contact',   accent: '--c-contact' },
] as const;

export type StopId = typeof STOPS[number]['id'];

function applyAccent(idx: number) {
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(STOPS[idx].accent).trim();
  document.documentElement.style.setProperty('--accent', v || '#d99a2b');
}

export function scrollToStop(idx: number) {
  document.getElementById('stop-' + STOPS[idx].id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function useScrollSpy() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    applyAccent(0);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = STOPS.findIndex((s) => 'stop-' + s.id === entry.target.id);
            if (idx >= 0) {
              setActive(idx);
              applyAccent(idx);
            }
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px', threshold: 0 }
    );

    STOPS.forEach((s) => {
      const el = document.getElementById('stop-' + s.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return active;
}
