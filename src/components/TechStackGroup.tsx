import type { TechCard } from '../data/experience';

interface TechStackGroupProps {
  card: TechCard;
  accentColor: string;
  accentColorRgb: string;
}

export function TechStackGroup({ card, accentColor, accentColorRgb }: TechStackGroupProps) {
  return (
    <div className="tech-group">
      <div className="tech-group__category" style={{ color: accentColor }}>
        {card.category}
      </div>
      <div className="tech-group__tags">
        {card.tags.map((tag) => (
          <span key={tag} className="pill" style={{ background: `rgba(${accentColorRgb},0.1)`, color: accentColor }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
