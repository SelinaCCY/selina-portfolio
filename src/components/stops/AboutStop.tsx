import { PlaneSvg } from '../PlaneSvg';
import { scrollToStop } from '../../hooks/useScrollSpy';

export function AboutStop() {
  return (
    <section className="stop-screen" id="stop-about">
      <div className="stop-inner">
        <div className="loc-tag"><span className="pin" /> Somewhere cosy — the human bit</div>
        <div className="about-grid">
          <div>
            <div className="mbti">
              <div className="type">ENFJ-A</div>
              <div className="sub">"The Protagonist"</div>
              <p className="body-cp" style={{ margin: 0 }}>
                I'm energised by people and outcomes. In a team that means I'll happily be the one in the room with the stakeholder, turning a vague ask into something the engineers can build — then making sure we shipped what they actually needed.
              </p>
            </div>
          </div>
          <div>
            <h2 className="sec">Who you'd be <span className="scribble">working with</span>.</h2>
            <div className="fact-list">
              <div className="fact">
                <span className="k">roots</span>
                <span>Malaysian-Chinese, grew up in Kuala Lumpur — three languages at the dinner table.</span>
              </div>
              <div className="fact">
                <span className="k">hobbies</span>
                <span>Badminton, baking kuih, and collecting languages (human and programming).</span>
              </div>
              <div className="fact">
                <span className="k">fun fact</span>
                <span>I can say "hello" in seven languages and "it's a caching issue" in at least three.</span>
              </div>
              <div className="fact">
                <span className="k">how I work</span>
                <span>Calm under ambiguity, allergic to jargon, happiest translating between people and systems.</span>
              </div>
            </div>
            <div className="paths">
              <button className="path-btn" onClick={() => scrollToStop(5)}>
                <span className="mini-plane"><PlaneSvg /></span>
                Let's Talk → Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
