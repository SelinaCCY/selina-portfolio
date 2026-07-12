import { scrollToSection } from '../utils/scroll';

const outsideWork = [
  'Avid Wikipedia rabbit hole reader',
  'Mediocre cook of Malaysian food',
  'Strong opinions about volleyball anime',
  'Playing volleyball (poorly, enthusiastically)',
];

export function About() {
  return (
    <section id="about" className="section section--white section--about">
      <div className="section__container">
        <div className="eyebrow">Story</div>
        <h2 className="heading heading--about">About me</h2>
        <div className="about-grid">
          <div className="about-narrative">
            <p className="about-quote">
              My first proper programme was a script that sent automated weather alerts to my family WhatsApp
              group back in Kuala Lumpur. It was barely 30 lines of Python. They never once asked me to stop. I
              took that as encouragement.
            </p>
            <p className="about-paragraph">
              I moved to London for university and found myself studying computer science with a quiet obsession
              for the kind of code that makes complex systems behave simply. The most interesting problems live at
              the intersection of language models, data infrastructure, and the humans trying to use both.
            </p>
            <p className="about-paragraph">
              I&apos;m currently building GenAI tooling in a bank&apos;s CTO division. Before that, fixed income
              trading platform integrations. Very different on the surface — both about making information move
              faster and more reliably than it did before.
            </p>
            <p className="about-paragraph">
              Moving from Malaysia to London was the first real leap. It turns out every new project is also a
              kind of leap. You commit to something uncertain, you build, and somewhere along the way it starts
              to fly.
            </p>
          </div>
          <div className="about-sidebar">
            <div className="about-card about-card--light">
              <div className="about-card__label about-card__label--sky">Outside work</div>
              <div className="about-card__list">
                {outsideWork.map((item) => (
                  <div key={item} className="about-card__item">
                    <div className="about-card__dot about-card__dot--sky" />
                    <div>{item}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-card about-card--navy">
              <div className="about-card__label about-card__label--sunset">Looking for</div>
              <p className="about-card__text">
                AI/ML engineering, backend systems, or anything genuinely difficult and genuinely useful.
              </p>
              <button className="btn btn--sky-small" onClick={() => scrollToSection('contact')}>
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
