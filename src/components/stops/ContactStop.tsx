import { EmailSvg, GitHubSvg, LinkedInSvg, LocationSvg } from '../PlaneSvg';

export function ContactStop() {
  return (
    <section className="stop-screen" id="stop-contact">
      <div className="stop-inner">
        <div className="loc-tag"><span className="pin" /> London — arrived ✈</div>
        <h2 className="sec">You've seen the <span className="scribble">journey</span>.</h2>
        <p className="lead">Now let's talk. Based in London, open to Forward Deployed Engineer &amp; Software Engineering roles.</p>
        <div className="contact-list">
          <a className="contact-row" href="mailto:selinacheah02@gmail.com">
            <span className="ic"><EmailSvg size={20} /></span>
            <span><span className="ck">email</span>selinacheah02@gmail.com</span>
          </a>
          <a className="contact-row" href="https://www.linkedin.com/in/selinaccy/" target="_blank" rel="noreferrer">
            <span className="ic"><LinkedInSvg /></span>
            <span><span className="ck">linkedin</span>/in/selinaccy</span>
          </a>
          <a className="contact-row" href="https://github.com/SelinaCCY" target="_blank" rel="noreferrer">
            <span className="ic"><GitHubSvg /></span>
            <span><span className="ck">github</span>/selina</span>
          </a>
          <a className="contact-row" href="#">
            <span className="ic"><LocationSvg /></span>
            <span><span className="ck">location</span>London, UK</span>
          </a>
        </div>
      </div>
    </section>
  );
}
