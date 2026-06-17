import { EmailSvg, LinkedInSvg } from './PlaneSvg';

export function Header() {
  return (
    <header className="topbar">
      <div className="monogram" title="Selina">S</div>
      <nav className="links" aria-label="quick links">
        <a className="iconbtn" href="https://www.linkedin.com/in/selinaccy/" target="_blank" rel="noreferrer">
          <span className="ic" aria-hidden="true"><LinkedInSvg /></span>
          LinkedIn
        </a>
        <a className="iconbtn" href="mailto:selinacheah02@gmail.com">
          <span className="ic" aria-hidden="true"><EmailSvg /></span>
          Email
        </a>
      </nav>
    </header>
  );
}
