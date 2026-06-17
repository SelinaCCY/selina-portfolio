import { useState } from 'react';

interface Badge {
  label: string;
  cat: 'lang' | 'fw' | 'cloud' | 'tool';
}

interface Link {
  label: string;
  href: string;
}

interface FlipCardProps {
  logo: string;
  role: string;
  duration: string;
  teaser: string;
  badges: Badge[];
  backTitle?: string;
  fdeTag?: string;
  bullets: string[];
  links?: Link[];
}

export function FlipCard({ logo, role, duration, teaser, badges, backTitle, fdeTag, bullets, links }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  function toggle(e: React.MouseEvent | React.KeyboardEvent) {
    e.stopPropagation();
    setFlipped(f => !f);
  }

  return (
    <div
      className={`flip${flipped ? ' flipped' : ''}`}
      onClick={toggle}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(e); } }}
      tabIndex={0}
    >
      <div className="flip-inner">
        <div className="flip-face front">
          <div className="flip-logo">{logo}</div>
          <div className="flip-role">{role}</div>
          <div className="flip-dur">{duration}</div>
          <p className="flip-teaser">{teaser}</p>
          <div className="badges">
            {badges.map((b) => (
              <span key={b.label} className="badge" data-cat={b.cat}>{b.label}</span>
            ))}
          </div>
          <div className="flip-hint"><span className="rev">⤺</span> flip</div>
        </div>
        <div className="flip-face back">
          {fdeTag && <span className="fde-tag">{fdeTag}</span>}
          {backTitle && <h4>{backTitle}</h4>}
          <ul>
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          {links && (
            <div className="links-row">
              {links.map((l) => (
                <a key={l.label} className="lk" href={l.href} onClick={e => e.stopPropagation()}>{l.label}</a>
              ))}
            </div>
          )}
          <div className="flip-hint"><span className="rev">⤺</span> flip back</div>
        </div>
      </div>
    </div>
  );
}
