import { ArrowRightIcon, ClockIcon, DocumentIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons';
import { CV_FILENAME, CV_URL } from '../config/cv';

const contactLinks: { icon: React.ReactNode; label: string; value: string; href: string; download?: string }[] = [
  { icon: <MailIcon />, label: 'Email', value: 'selinacheah02@gmail.com', href: 'mailto:selinacheah02@gmail.com' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', value: 'linkedin.com/in/selinaccy', href: 'https://www.linkedin.com/in/selinaccy/' },
  { icon: <GitHubIcon />, label: 'GitHub', value: 'github.com/selina', href: 'https://github.com/SelinaCCY' },
  { icon: <DocumentIcon />, label: 'CV', value: 'Download PDF', href: CV_URL, download: CV_FILENAME },
];

export function Contact() {
  return (
    <section id="contact" className="section section--tint">
      <div className="section__container section__container--narrow">
        <div className="eyebrow">Say hello</div>
        <h2 className="heading heading--with-lead">Get in touch</h2>
        {/* <p className="lead">
          I&apos;m always happy to have a
          conversation.
        </p> */}
        <div className="contact-list">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} download={link.download} className="contact-card">
              <div className="contact-card__icon">{link.icon}</div>
              <div>
                <div className="contact-card__label">{link.label}</div>
                <div className="contact-card__value">{link.value}</div>
              </div>
              <ArrowRightIcon />
            </a>
          ))}
        </div>
        <div className="contact-location">
          <ClockIcon />
          <span>London, UK</span>
        </div>
      </div>
    </section>
  );
}
