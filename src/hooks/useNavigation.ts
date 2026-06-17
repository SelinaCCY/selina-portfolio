import { useCallback, useRef, useState } from 'react';

export const STOPS = [
  { id: 'landing',   accent: '--c-malaysia' },
  { id: 'education', accent: '--c-essex' },
  { id: 'career',    accent: '--c-london' },
  { id: 'projects',  accent: '--c-projects' },
  { id: 'about',     accent: '--c-about' },
  { id: 'contact',   accent: '--c-contact' },
] as const;

export type StopId = typeof STOPS[number]['id'];

function setAccent(idx: number) {
  const varName = STOPS[idx].accent;
  const v = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  document.documentElement.style.setProperty('--accent', v || '#d99a2b');
}

function prefersReduced() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

interface NavState {
  current: number;
  flying: boolean;
}

export function useNavigation(tweaks: { transitionStyle: string; transitionMs: number }) {
  const [state, setState] = useState<NavState>({ current: 0, flying: false });
  const flyingRef = useRef(false);
  const finishFnRef = useRef<(() => void) | null>(null);
  const flightAnimsRef = useRef<Animation[]>([]);
  const flightTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);

  const getScreenEl = (idx: number) =>
    document.getElementById('stop-' + STOPS[idx].id);
  const getDotEl = (idx: number) =>
    document.querySelectorAll('.route .stop')[idx] as HTMLElement | null;

  function paintRoute(activeIdx: number) {
    document.querySelectorAll('.route .stop').forEach((d, i) => {
      (d as HTMLElement).setAttribute('aria-current', i === activeIdx ? 'true' : 'false');
      (d as HTMLElement).setAttribute('data-done', i < activeIdx ? 'true' : 'false');
    });
    const railPlane = document.querySelector('.route-plane') as HTMLElement | null;
    if (!railPlane) return;
    const dot = getDotEl(activeIdx)?.querySelector('.dot') as HTMLElement | null;
    if (!dot) return;
    const railRect = railPlane.parentElement!.getBoundingClientRect();
    const dotRect = dot.getBoundingClientRect();
    railPlane.style.top = (dotRect.top - railRect.top + dotRect.height / 2 - 15) + 'px';
  }

  function showScreen(idx: number) {
    STOPS.forEach((_, i) => {
      const el = getScreenEl(i);
      if (el) el.setAttribute('data-active', i === idx ? 'true' : 'false');
    });
    const screen = getScreenEl(idx);
    if (!screen) return;
    screen.querySelectorAll('.flip').forEach((c) => {
      (c as HTMLElement).classList.remove('flipped');
      (c as HTMLElement).style.animation = 'none';
    });
    void (screen as HTMLElement).offsetWidth;
    screen.querySelectorAll('.flip').forEach((c) => {
      (c as HTMLElement).style.animation = '';
    });
  }

  function dockPos(idx: number) {
    const dot = getDotEl(idx)?.querySelector('.dot') as HTMLElement | null;
    if (!dot) return { x: 0, y: 0 };
    const r = dot.getBoundingClientRect();
    return { x: r.left + r.width / 2 - 32, y: r.top + r.height / 2 - 32 };
  }

  function finalizeSlide(idx: number, outEl: HTMLElement, inEl: HTMLElement) {
    if (!flyingRef.current) return;
    flyingRef.current = false;
    finishFnRef.current = null;
    if (flightTimerRef.current) clearTimeout(flightTimerRef.current);
    flightAnimsRef.current.forEach((a) => { try { a.cancel(); } catch (e) { /* */ } });
    flightAnimsRef.current = [];

    [outEl, inEl].forEach((el) => {
      el.style.transition = ''; el.style.transform = '';
      el.style.opacity = ''; el.style.visibility = '';
    });
    showScreen(idx);
    paintRoute(idx);
    const flyer = document.querySelector('.flyer') as HTMLElement | null;
    const railPlane = document.querySelector('.route-plane') as HTMLElement | null;
    if (flyer) { flyer.style.opacity = '0'; flyer.style.transform = ''; }
    if (railPlane) railPlane.style.opacity = '';
    document.body.classList.remove('flying');
    setState({ current: idx, flying: false });
  }

  function slideTo(idx: number, forward: boolean, currentIdx: number) {
    flyingRef.current = true;
    document.body.classList.add('flying');
    setState(s => ({ ...s, flying: true }));

    const dir = forward ? 1 : -1;
    const W = window.innerWidth;
    const T = Math.max(700, tweaks.transitionMs);
    const k = T / 1100;

    const from = dockPos(currentIdx);
    const to = dockPos(idx);

    const railPlane = document.querySelector('.route-plane') as HTMLElement | null;
    const flyer = document.querySelector('.flyer') as HTMLElement | null;
    if (railPlane) railPlane.style.opacity = '0';

    const outEl = getScreenEl(currentIdx)!;
    const inEl = getScreenEl(idx)!;

    inEl.style.transition = 'none';
    inEl.style.visibility = 'visible';
    inEl.style.opacity = '1';
    outEl.style.opacity = '1';
    inEl.setAttribute('data-active', 'true');
    inEl.querySelectorAll('.flip').forEach((c) => {
      (c as HTMLElement).classList.remove('flipped');
      (c as HTMLElement).style.animation = 'none';
      (c as HTMLElement).style.opacity = '0';
    });

    const slideOpts: KeyframeAnimationOptions = { duration: 800 * k, delay: 200 * k, easing: 'ease-in-out', fill: 'both' };
    const aOut = outEl.animate(
      [{ transform: 'translateX(0)' }, { transform: `translateX(${-dir * W}px)` }], slideOpts);
    const aIn = inEl.animate(
      [{ transform: `translateX(${dir * W}px)` }, { transform: 'translateX(0)' }], slideOpts);

    if (flyer) {
      flyer.style.opacity = '1';
      const exitX = dir > 0 ? W + 150 : -150;
      const enterX = dir > 0 ? -150 : W + 150;

      const aTake = flyer.animate([
        { transform: `translate(${from.x}px,${from.y}px) rotate(0deg) scale(1)`, offset: 0 },
        { transform: `translate(${from.x + 20 * dir}px,${from.y - 16}px) rotate(${-15 * dir}deg) scale(1.18)`, offset: 0.2 },
        { transform: `translate(${exitX}px,${from.y - 72}px) rotate(${-10 * dir}deg) scale(1.05)`, offset: 1 },
      ], { duration: 600 * k, easing: 'cubic-bezier(.5,0,.85,.3)', fill: 'both' });

      const aRe = flyer.animate([
        { transform: `translate(${enterX}px,${to.y - 72}px) rotate(${-10 * dir}deg) scale(1.05)`, offset: 0 },
        { transform: `translate(${to.x + 22 * dir}px,${to.y - 14}px) rotate(${-6 * dir}deg) scale(1.1)`, offset: 0.55 },
        { transform: `translate(${to.x}px,${to.y}px) rotate(0deg) scale(1)`, offset: 1 },
      ], { duration: 500 * k, delay: 600 * k, easing: 'cubic-bezier(.2,.8,.3,1)', fill: 'forwards' });

      flightAnimsRef.current = [aOut, aIn, aTake, aRe];
    } else {
      flightAnimsRef.current = [aOut, aIn];
    }

    setTimeout(() => { if (flyingRef.current) paintRoute(idx); }, Math.max(0, 950 * k));
    finishFnRef.current = () => finalizeSlide(idx, outEl, inEl);
    flightTimerRef.current = setTimeout(() => finalizeSlide(idx, outEl, inEl), T + 30);
  }

  function finalizeArc(idx: number) {
    if (!flyingRef.current) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    flyingRef.current = false;
    finishFnRef.current = null;
    showScreen(idx);
    paintRoute(idx);
    const flyer = document.querySelector('.flyer') as HTMLElement | null;
    const flightPath = document.querySelector('.flight-path') as HTMLElement | null;
    const skyWipe = document.querySelector('.sky-wipe') as HTMLElement | null;
    if (flyer) { flyer.style.opacity = '0'; flyer.style.transform = ''; }
    if (flightPath) flightPath.style.opacity = '0';
    if (skyWipe) skyWipe.style.opacity = '0';
    document.body.classList.remove('flying');
    setState({ current: idx, flying: false });
  }

  function quad(t: number, ax: number, ay: number, cx: number, cy: number, bx: number, by: number) {
    const u = 1 - t;
    return { x: u*u*ax + 2*u*t*cx + t*t*bx, y: u*u*ay + 2*u*t*cy + t*t*by };
  }

  function pathPos(t: number, p0: {x:number,y:number}, p1: {x:number,y:number}) {
    const H = window.innerHeight;
    const cx = (p0.x + p1.x) / 2;
    const cy = Math.min(p0.y, p1.y) - H * 0.34;
    return quad(t, p0.x, p0.y, cx, cy, p1.x, p1.y);
  }

  function buildSvgPath(p0: {x:number,y:number}, p1: {x:number,y:number}, n = 60) {
    let d = '';
    for (let i = 0; i <= n; i++) {
      const p = pathPos(i / n, p0, p1);
      d += (i === 0 ? 'M' : 'L') + p.x.toFixed(1) + ' ' + p.y.toFixed(1) + ' ';
    }
    return d.trim();
  }

  function arcFlyTo(idx: number, forward: boolean, _currentIdx: number) {
    flyingRef.current = true;
    document.body.classList.add('flying');
    setState(s => ({ ...s, flying: true }));

    const W = window.innerWidth, H = window.innerHeight;
    const p0 = forward
      ? { x: W * 0.17, y: H * 0.74 }
      : { x: W * 0.85, y: H * 0.26 };
    const p1 = forward
      ? { x: W * 0.85, y: H * 0.24 }
      : { x: W * 0.16, y: H * 0.76 };
    const dur = Math.max(400, tweaks.transitionMs);

    const flightPathEl = document.querySelector('.flight-path') as HTMLElement | null;
    const flightPathPath = document.querySelector('.flight-path path') as SVGPathElement | null;
    const skyWipe = document.querySelector('.sky-wipe') as HTMLElement | null;
    const flyer = document.querySelector('.flyer') as HTMLElement | null;

    if (flightPathPath) flightPathPath.setAttribute('d', buildSvgPath(p0, p1));
    if (flightPathEl) flightPathEl.style.opacity = '1';
    if (skyWipe) skyWipe.style.opacity = '.55';
    if (flyer) flyer.style.opacity = '1';

    let swapped = false;
    const t0 = performance.now();
    const ease = (x: number) => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;

    finishFnRef.current = () => finalizeArc(idx);

    function frame(now: number) {
      const lin = Math.min(1, (now - t0) / dur);
      const t = ease(lin);
      const p = pathPos(t, p0, p1);
      const pn = pathPos(Math.min(1, t + 0.012), p0, p1);
      const ang = Math.atan2(pn.y - p.y, pn.x - p.x) * 180 / Math.PI;
      if (flyer) flyer.style.transform = `translate(${p.x - 32}px, ${p.y - 32}px) rotate(${ang}deg)`;
      if (!swapped && lin >= 0.42) {
        swapped = true;
        setState(s => ({ ...s, current: idx }));
        showScreen(idx);
        paintRoute(idx);
      }
      if (lin < 1 && flyingRef.current) rafRef.current = requestAnimationFrame(frame);
      else finalizeArc(idx);
    }
    rafRef.current = requestAnimationFrame(frame);
  }

  function finishFlight() {
    if (finishFnRef.current) finishFnRef.current();
  }

  const goTo = useCallback((idx: number, opts: { force?: boolean; instant?: boolean } = {}) => {
    const currentIdx = state.current;
    if (idx === currentIdx && !opts.force) return;
    if (flyingRef.current) finishFlight();
    idx = Math.max(0, Math.min(STOPS.length - 1, idx));
    const forward = idx >= currentIdx;
    setAccent(idx);

    if (opts.instant || prefersReduced()) {
      flyingRef.current = false;
      setState({ current: idx, flying: false });
      showScreen(idx);
      paintRoute(idx);
      return;
    }

    if (tweaks.transitionStyle === 'arc') arcFlyTo(idx, forward, currentIdx);
    else slideTo(idx, forward, currentIdx);
  }, [state.current, tweaks.transitionStyle, tweaks.transitionMs]);

  return { current: state.current, flying: state.flying, goTo, finishFlight, paintRoute };
}
