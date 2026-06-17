import { FlipCard } from '../FlipCard';
import { CardGrid } from '../CardGrid';
import { PlaneSvg } from '../PlaneSvg';
import { scrollToStop } from '../../hooks/useScrollSpy';

export function ProjectsStop() {
  return (
    <section className="stop-screen" id="stop-projects">
      <div className="stop-inner">
        <div className="loc-tag"><span className="pin" /> London · after-hours</div>
        <h2 className="sec">Things I built <span className="scribble">for fun</span>.</h2>
        <p className="lead">Side-projects and hackathon work — leaning into the client-facing, integration-heavy problems that an FDE actually lives in.</p>

        <CardGrid>
          <FlipCard
            logo="RouteWeaver"
            role="Itinerary → shareable map"
            duration="side-project · 2024"
            teaser="Turns a messy list of stops into a clean, shareable route."
            badges={[
              { label: 'TypeScript', cat: 'lang' },
              { label: 'Next.js', cat: 'fw' },
              { label: 'Mapbox', cat: 'tool' },
            ]}
            fdeTag="FDE: integration"
            bullets={[
              'Wrangled a third-party maps API into something non-technical friends could use.',
              'Shipped a share-link flow people actually pass around.',
            ]}
            links={[
              { label: 'GitHub ↗', href: '#' },
              { label: 'Live demo ↗', href: '#' },
            ]}
          />
          <FlipCard
            logo="LedgerLens"
            role="CSV reconciliation CLI"
            duration="side-project · 2023"
            teaser="Reconciles two messy CSV ledgers in seconds."
            badges={[
              { label: 'Go', cat: 'lang' },
              { label: 'Cobra', cat: 'tool' },
              { label: 'SQLite', cat: 'tool' },
            ]}
            fdeTag="FDE: problem-solving"
            bullets={[
              'Scratch-my-own-itch tool that grew from a day-job pain point.',
              'Friendly errors so non-engineers can self-serve.',
            ]}
            links={[{ label: 'GitHub ↗', href: '#' }]}
          />
          <FlipCard
            logo="RelayAid"
            role="Disaster-relief comms"
            duration="hackathon · 24h · winner 🏆"
            teaser="Coordinates relief volunteers when networks are patchy."
            badges={[
              { label: 'React Native', cat: 'fw' },
              { label: 'Firebase', cat: 'cloud' },
            ]}
            fdeTag="FDE: client-facing"
            bullets={[
              'Pitched to judges from an NGO — scoped to their real constraints.',
              "Built offline-first so it works where it's needed most.",
            ]}
            links={[
              { label: 'Devpost ↗', href: '#' },
              { label: 'GitHub ↗', href: '#' },
            ]}
          />
        </CardGrid>

        <div className="paths">
          <button className="path-btn" onClick={() => scrollToStop(4)}>
            <span className="mini-plane"><PlaneSvg /></span>
            About Me
          </button>
        </div>
      </div>
    </section>
  );
}
