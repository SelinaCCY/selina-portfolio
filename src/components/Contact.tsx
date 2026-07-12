import { ArrowRightIcon, ClockIcon, GitHubIcon, LinkedInIcon, MailIcon } from './icons';

const contactLinks = [
  { icon: <MailIcon />, label: 'Email', value: 'selinacheah02@gmail.com', href: 'mailto:elinacheah02@gmail.com' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', value: 'linkedin.com/in/selinaccy', href: 'https://www.linkedin.com/in/selinaccy/' },
  { icon: <GitHubIcon />, label: 'GitHub', value: 'github.com/selina', href: 'https://github.com/SelinaCCY' },
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
            <a key={link.label} href={link.href} className="contact-card">
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
