import { useState } from 'react';
import { roles, type Role } from '../data/experience';
import { TechStackGroup } from './TechStackGroup';
import { ChevronIcon, DownloadIcon, StarIcon } from './icons';

type RoleId = (typeof roles)[number]['id'];

type RenderItem = { kind: 'single'; role: Role } | { kind: 'group'; groupId: string; label: string; roles: Role[] };

function groupRoles(roles: Role[]): RenderItem[] {
  const items: RenderItem[] = [];
  for (const role of roles) {
    const last = items[items.length - 1];
    if (role.group && last?.kind === 'group' && last.groupId === role.group.id) {
      last.roles.push(role);
    } else if (role.group) {
      items.push({ kind: 'group', groupId: role.group.id, label: role.group.label, roles: [role] });
    } else {
      items.push({ kind: 'single', role });
    }
  }
  return items;
}

const renderItems = groupRoles(roles);

interface AccordionRowProps {
  role: Role;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionRow({ role, isOpen, onToggle }: AccordionRowProps) {
  return (
    <>
      <button className="accordion__header" onClick={onToggle}>
        <div className="accordion__number" style={{ color: role.numberColor }}>
          {role.number}
        </div>
        <div className="accordion__titles">
          <div className="accordion__title">{role.title}</div>
          <div className="accordion__subtitle">{role.subtitle}</div>
        </div>
        <div className="accordion__meta">
          {role.current && <span className="pill pill--current">Current</span>}
          <ChevronIcon open={isOpen} />
        </div>
      </button>

      {isOpen && (
        <div className="accordion__detail" style={{ borderLeftColor: role.accentColor }}>
          {role.placeholder ? (
            <div className="accordion__placeholder">
              Details to be added — placeholder for role description, key contributions, and tech stack.
            </div>
          ) : (
            <>
              <div className="accordion__stack-label">Tech Stack</div>
              <div className="tech-grid">
                {role.techCards?.map((card, i) => (
                  <TechStackGroup
                    key={`${role.id}-${i}`}
                    card={card}
                    accentColor={role.accentColor}
                    accentColorRgb={role.accentColorRgb}
                  />
                ))}
              </div>
              <p className="accordion__description">{role.description}</p>
              <div className="accordion__bullets">
                {role.bullets?.map((bullet, i) => (
                  <div key={i} className="accordion__bullet">
                    <div className="accordion__bullet-dot" style={{ background: role.accentColor }} />
                    <div className="accordion__bullet-text">{bullet}</div>
                  </div>
                ))}
              </div>
              <div
                className="outcome-badge"
                style={{
                  background: `rgba(${role.accentColorRgb},0.06)`,
                  borderColor: `rgba(${role.accentColorRgb},0.2)`,
                  color: role.id === 'ai' ? '#3d5c80' : '#7a4820',
                }}
              >
                <StarIcon color={role.accentColor} />
                <span>{role.outcome}</span>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export function Experience() {
  const [expanded, setExpanded] = useState<Record<RoleId, boolean>>({
    current: false,
    ai: false,
    et: false,
    intern: false,
  });

  const toggleExpanded = (id: RoleId) => {
    setExpanded((s) => ({ ...s, [id]: !s[id] }));
  };

  return (
    <section id="experience" className="section section--white">
      <div className="section__container">
        <div className="section__header">
          <div>
            <div className="eyebrow">Work</div>
            <h2 className="heading">Experience</h2>
          </div>
          <a href="#" className="btn btn--pill-light">
            <DownloadIcon size={13} />
            Download CV
          </a>
        </div>

        <div className="accordion">
          {renderItems.map((item, i) => {
            if (item.kind === 'single') {
              const role = item.role;
              return (
                <div key={role.id} className="accordion__item">
                  <AccordionRow role={role} isOpen={expanded[role.id]} onToggle={() => toggleExpanded(role.id)} />
                </div>
              );
            }
            return (
              <div key={`group-${i}`} className="accordion__group">
                <div className="accordion__group-label">{item.label}</div>
                {item.roles.map((role) => (
                  <AccordionRow
                    key={role.id}
                    role={role}
                    isOpen={expanded[role.id]}
                    onToggle={() => toggleExpanded(role.id)}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
