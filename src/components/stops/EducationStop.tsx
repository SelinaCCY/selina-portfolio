import { FlipCard } from '../FlipCard';
import { CardGrid } from '../CardGrid';
import { PlaneSvg } from '../PlaneSvg';
import { scrollToStop } from '../../hooks/useScrollSpy';

export function EducationStop() {
  return (
    <section className="stop-screen" id="stop-education">
      <div className="stop-inner">
        <div className="loc-tag"><span className="pin" /> Colchester · United Kingdom</div>
        <h2 className="sec">University of Essex - Where it <span className="scribble">compiled</span>.</h2>
        <p className="lead"><b>BSc Computer Science · 2020–2023 · First-Class Honours.</b> <br></br>From theory to deployable systems — and my first taste of building with a team and a deadline.</p>
        
        <CardGrid>
          <FlipCard
            logo="Dissertation"
            role="Distributed Task Scheduler"
            duration="Final year · graded 82%"
            teaser="A fault-tolerant job scheduler that keeps running when nodes drop."
            badges={[
              { label: 'Go', cat: 'lang' },
              { label: 'gRPC', cat: 'fw' },
              { label: 'Docker', cat: 'tool' },
            ]}
            backTitle="Outcomes"
            bullets={[
              'Designed leader-election so the cluster self-heals after a node failure.',
              'Benchmarked against a single-node baseline — 3× throughput under load.',
              'Wrote it up for a non-specialist marker: clear diagrams over jargon.',
            ]}
          />
          <FlipCard
            logo="Team Build"
            role="Software Engineering Group Project"
            duration="Year 2 · 5-person team"
            teaser="Booking app for a real local-charity client — shipped & demoed."
            badges={[
              { label: 'React', cat: 'fw' },
              { label: 'Node', cat: 'lang' },
              { label: 'Agile', cat: 'tool' },
            ]}
            fdeTag="FDE: client-facing"
            bullets={[
              'Ran fortnightly demos with the charity — translated feedback into the backlog.',
              'Owned the front-end & the client relationship; teammates owned the API.',
              'Delivered a working booking flow they still use today.',
            ]}
          />
          
        </CardGrid>
        <div className="paths" style={{ justifyContent: 'flex-end', marginTop: 20 }}>
          <button className="path-btn" onClick={() => scrollToStop(2)}>
            <span className="mini-plane"><PlaneSvg /></span>
            Continue to Career
          </button>
        </div>
      </div>
    </section>
  );
}
