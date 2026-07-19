import { scrollToSection } from '../utils/scroll';

export function About() {
  return (
    <section id="about" className="section section--white section--about">
      <div className="section__container">
        <div className="eyebrow">Story</div>
        <h2 className="heading heading--about">
          About me
          <span className="about-note">
            (long read ahead — I tend to be chatty! Click{' '}
            <button className="about-note__link" onClick={() => scrollToSection('contact')}>
              here
            </button>{' '}
            to skip straight to how to reach me)
          </span>
        </h2>
        <div className="about-narrative">
          <p className="about-quote">
            I grew up in Malaysia and moved to the UK to study Computer Science. I&apos;m also the first person in
            my family to work in the technology industry, so my journey into engineering has never felt like
            following a familiar path — it has been about creating one. This gave me a deep appreciation for
            different perspectives, and that curiosity continues to shape both my work and the way I see the
            world.
          </p>
          <p className="about-paragraph">
            Moving countries at a young age taught me how to adapt quickly, stay curious, and become comfortable
            with the unknown. It also made me appreciate how powerful communication can be when you&apos;re trying
            to learn, connect, and build a life in a completely new environment.
          </p>
          <p className="about-paragraph">
            One thing that has followed me throughout my journey is that I genuinely enjoy helping others feel less
            intimidated by technology. As the &quot;Gen Z&quot; person in my family, I naturally became the
            unofficial tech support — setting up phones, troubleshooting devices, helping relatives navigate new
            apps, and explaining digital tools in a way that felt approachable rather than overwhelming. Looking
            back, that was probably my first lesson in communication: technology is only useful if people feel
            confident using it.
          </p>
          <p className="about-paragraph">
            That experience shaped the way I approach engineering today. I enjoy turning complex ideas into clear,
            practical explanations and creating an environment where people feel comfortable asking questions,
            regardless of their technical background.
          </p>
          <p className="about-paragraph">
            Growing up in Malaysia meant being surrounded by different languages every day, so being multilingual
            felt less like a special skill and more like a natural part of life. I speak English, Mandarin, Malay,
            and Cantonese, and switching between languages taught me to pay close attention to context, audience,
            and how people actually communicate — a habit that&apos;s carried straight into engineering. I think of
            programming languages the same way: different ways of expressing an idea, each suited to a different
            audience and problem.
          </p>
          <p className="about-paragraph">
            That&apos;s ultimately what draws me to engineering — not just solving technical problems, but solving
            them in a way people can understand, trust, and use. I want to build technology that creates real
            impact and genuinely improves how people work and interact with it. I&apos;m especially drawn to
            products that sit at the intersection of engineering, product thinking, and human experience, where
            strong technical foundations meet thoughtful design to solve meaningful problems at scale. Whether
            I&apos;m contributing to a new feature, improving a system, or shaping how a product evolves, my goal
            is to help turn ambitious ideas into solutions people genuinely find valuable.
          </p>
        </div>
      </div>
    </section>
  );
}
