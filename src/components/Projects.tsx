import { projects } from '../data/projects';
import { DemoVideo } from './DemoVideo';

/** Open real external links in a new tab; leave in-page links alone. */
const externalLinkProps = (href: string) =>
  href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {};

export function Projects() {
  return (
    <section id="projects" className="section section--tint">
      <div className="section__container">
        <div className="eyebrow">Personal</div>
        <h2 className="heading heading--with-lead">Projects</h2>
        <p className="lead">Things I&apos;ve built outside of work</p>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`project-card${project.video ? ' project-card--featured' : ''}`}
            >
              {project.video ? (
                // Projects with a demo clip get a wide card with the clip beside the text.
                <div className="project-card__media" style={{ background: project.gradient }}>
                  <DemoVideo
                    src={project.video}
                    poster={project.poster}
                    label={`${project.title} demo`}
                  />
                </div>
              ) : (
                <div className="project-card__header" style={{ background: project.gradient }}>
                  <div className="project-card__placeholder">[ screenshot ]</div>
                </div>
              )}
              <div className="project-card__body">
                <div className="project-card__category" style={{ color: project.color }}>
                  {project.category}
                </div>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="pill"
                      style={{ background: `rgba(${project.colorRgb},0.1)`, color: project.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      className="project-card__link project-card__link--primary"
                      {...externalLinkProps(project.github)}
                    >
                      GitHub →
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="project-card__link"
                      {...externalLinkProps(project.demo)}
                    >
                      Live demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
