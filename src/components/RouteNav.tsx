import { useEffect, useRef } from 'react';
import { STOPS, scrollToStop } from '../hooks/useScrollSpy';
import { PlaneSvg } from './PlaneSvg';

const STOP_LABELS = [
  { label: 'Home' },
  { label: 'Education' },
  { label: 'Career' },
  { label: 'Projects' },
  { label: 'About' },
  { label: 'Contact' },
];

interface RouteNavProps {
  current: number;
}

export function RouteNav({ current }: RouteNavProps) {
  const planeRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const dots = listRef.current?.querySelectorAll('.dot');
    const plane = planeRef.current;
    if (!dots || !plane) return;
    const dot = dots[current] as HTMLElement;
    const parentRect = plane.parentElement!.getBoundingClientRect();
    const dotRect = dot.getBoundingClientRect();
    plane.style.top = (dotRect.top - parentRect.top + dotRect.height / 2 - 15) + 'px';
  }, [current]);

  return (
    <aside className="route" aria-label="Flight route">
      <div className="route-line" />
      <div className="route-plane" ref={planeRef} aria-hidden="true">
        <PlaneSvg />
      </div>
      <ol ref={listRef}>
        {STOPS.map((stop, i) => {
          const { flag, label } = STOP_LABELS[i];
          return (
            <li key={stop.id}>
              <button
                className="stop"
                aria-current={i === current ? 'true' : 'false'}
                data-done={i < current ? 'true' : 'false'}
                onClick={() => scrollToStop(i)}
              >
                <span className="dot" />
                <span className="lbl">
                  <span className="flag">{flag}</span> {label}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      <button
        className="route-mobile-toggle"
        aria-label="Toggle route map"
        onClick={() => document.body.classList.toggle('route-open')}
      >
        <PlaneSvg />
      </button>
    </aside>
  );
}
