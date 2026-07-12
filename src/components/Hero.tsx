import { scrollToSection } from '../utils/scroll';
import { DownloadIcon, ScrollArrowIcon } from './icons';

interface Bird {
  top: string;
  width: number;
  height: number;
  opacity: number;
  duration: number;
  delay: number;
}

const birds: Bird[] = [
  { top: '18%', width: 22, height: 11, opacity: 0.55, duration: 32, delay: -2 },
  { top: '13%', width: 16, height: 8, opacity: 0.38, duration: 41, delay: -14 },
  { top: '23%', width: 26, height: 13, opacity: 0.48, duration: 25, delay: -22 },
  { top: '16%', width: 14, height: 7, opacity: 0.3, duration: 45, delay: -8 },
  { top: '29%', width: 18, height: 9, opacity: 0.42, duration: 37, delay: -19 },
];

function Bird({ top, width, height, opacity, duration, delay }: Bird) {
  return (
    <div
      className="hero__bird"
      style={{ top, animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
    >
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
        <path
          d={`M0 ${height / 2} Q${width / 4} 0 ${width / 2} ${height / 2} Q${(width * 3) / 4} 0 ${width} ${height / 2}`}
          fill="none"
          stroke={`rgba(255,255,255,${opacity})`}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__birds">
        {birds.map((bird, i) => (
          <Bird key={i} {...bird} />
        ))}
      </div>
      <div className="hero__content">
        <div className="hero__eyebrow" style={{ animationDelay: '0.1s' }}>
          Software &amp; AI Engineer · London
        </div>
        <h1 className="hero__title" style={{ animationDelay: '0.25s' }}>
          <em className="hero__title-em"> Selina Cheah</em>
        </h1>
        <p className="hero__body" style={{ animationDelay: '0.4s' }}>
        I build production-grade GenAI products with a product-minded approach, bridging the gap between people and technology. 
        I'm curious about how people learn, work, and interact with technology, 
        and I'm always exploring how AI can make those experiences feel more natural.

        </p>
        <div className="hero__ctas" style={{ animationDelay: '0.55s' }}>
          <button className="btn btn--white" onClick={() => scrollToSection('experience')}>
            View Experience
          </button>
          <button className="btn btn--ghost" onClick={() => scrollToSection('projects')}>
            See Projects
          </button>
          <a href="#" className="btn btn--outline">
            <DownloadIcon />
            Download CV
          </a>
        </div>
      </div>
      <div className="hero__scroll-cue">
        <div className="hero__scroll-bob">
          <div className="hero__scroll-label">scroll</div>
          <ScrollArrowIcon />
        </div>
      </div>
    </section>
  );
}
