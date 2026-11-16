import { useEffect, useRef, useState } from 'react';

interface DemoVideoProps {
  src: string;
  poster?: string;
  label: string;
}

/**
 * Short, silent, looping demo clip.
 *
 * Nothing is downloaded until the clip scrolls into view; it then plays while
 * visible and pauses when it leaves the screen. Visitors who prefer reduced
 * motion get the poster with play controls instead of autoplay.
 */
export function DemoVideo({ src, poster, label }: DemoVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduceMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const video = ref.current;
    if (!video || reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Autoplay can be refused by the browser; the poster stays visible if so.
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <video
      ref={ref}
      className="project-card__video"
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      preload="none"
      controls={reduceMotion}
    />
  );
}
