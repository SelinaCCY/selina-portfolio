import { scrollToSection } from '../utils/scroll';

const links: { id: string; label: string }[] = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="footer__logo">Selina</div>
        <div className="footer__tagline">Built with ♥ in London</div>
      </div>
      <div className="footer__links">
        {links.map((link) => (
          <button key={link.id} className="footer__link" onClick={() => scrollToSection(link.id)}>
            {link.label}
          </button>
        ))}
      </div>
    </footer>
  );
}
