import { FlipCard } from '../FlipCard';
import { CardGrid } from '../CardGrid';
import { scrollToStop } from '../../hooks/useScrollSpy';

interface CareerStopProps {
  onDownloadCv: () => void;
}

export function CareerStop({ onDownloadCv }: CareerStopProps) {
  return (
    <section className="stop-screen" id="stop-career">
      <div className="stop-inner">
        <div className="loc-tag"><span className="pin" /> Canary Wharf · London</div>
        <h2 className="sec">Landing in <span className="scribble">London</span>.</h2>
        <p className="lead">From intern to graduate engineer at Citi — building software that sits close to the people who depend on it.</p>

        <CardGrid style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))' }}>
          <FlipCard
            logo="Citi"
            role="Graduate Software Engineer"
            duration="Sept 2024 – Present"
            teaser="Building internal tooling for trading-desk operations."
            badges={[
              { label: 'Java', cat: 'lang' },
              { label: 'Spring', cat: 'fw' },
              { label: 'Kafka', cat: 'tool' },
              { label: 'React', cat: 'fw' },
              { label: 'AWS', cat: 'cloud' },
            ]}
            fdeTag="FDE: stakeholder + impact"
            bullets={[
              'Sat with desk ops to map their workflow before writing a line of code.',
              'Shipped a tool that cut a daily manual reconciliation from ~40min to <5.',
              'Now the point of contact between the desk and the platform team.',
            ]}
          />
          <FlipCard
            logo="Citi"
            role="Summer Technology Analyst"
            duration="Summer 2023 · internship"
            teaser="Prototyped a reconciliation dashboard used by ops."
            badges={[
              { label: 'Python', cat: 'lang' },
              { label: 'SQL', cat: 'tool' },
              { label: 'Angular', cat: 'fw' },
            ]}
            fdeTag="FDE: cross-functional"
            bullets={[
              'Interviewed three teams to scope what "good" actually looked like.',
              "Demo'd weekly; the prototype was picked up for a real build.",
              'Converted to the graduate programme off the back of it.',
            ]}
          />
        </CardGrid>

        <div className="paths" style={{ alignItems: 'center' }}>
          <button className="cv-btn" onClick={onDownloadCv}>⬇ Download CV (PDF)</button>
          <button className="path-btn" onClick={() => scrollToStop(3)}>See my Projects</button>
          <button className="path-btn alt" onClick={() => scrollToStop(4)}>About Me →</button>
        </div>
      </div>
    </section>
  );
}
