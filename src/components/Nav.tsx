import { scrollToSection } from '../utils/scroll';

interface NavProps {
  scrolled: boolean;
}

const links: { id: string; label: string }[] = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
];

export function Nav({ scrolled }: NavProps) {
  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <button className="nav__logo" onClick={() => scrollToSection('home')}>
        Selina
      </button>
      <div className="nav__links">
        {links.map((link) => (
          <button key={link.id} className="nav__link" onClick={() => scrollToSection(link.id)}>
            {link.label}
          </button>
        ))}
        <button className="nav__contact" onClick={() => scrollToSection('contact')}>
          Contact
        </button>
      </div>
    </nav>
  );
}
