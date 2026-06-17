import { useState } from 'react';
import { PlaneSvg } from '../PlaneSvg';
import { scrollToStop } from '../../hooks/useScrollSpy';

const EASTER_MSGS = [
  'Bahasa Melayu · Mandarin · English — and a few that compile 😉',
  'Born in KL ✈ Grew up between Cantonese & code',
  '你好! That one means hello too.',
  "console.log('apa khabar') // => doing great, thanks for asking",
];

export function LandingStop() {
  const [easterMsg, setEasterMsg] = useState('');
  const [easterI, setEasterI] = useState(0);

  function handleLang() {
    setEasterMsg(EASTER_MSGS[easterI % EASTER_MSGS.length]);
    setEasterI(i => i + 1);
  }

  return (
    <section className="stop-screen" id="stop-landing">
      <div className="stop-inner">
        <div className="loc-tag"><span className="pin" /> Kuala Lumpur · Malaysia</div>
        <h1 className="big greet">
          <span onClick={handleLang}>Hello</span>
          <span className="dotsep">·</span>
          <span onClick={handleLang}>Apa&nbsp;Khabar</span>
          <span className="dotsep">·</span>
          <span onClick={handleLang}>你好</span>
        </h1>
        <p className="easter" style={{ opacity: easterMsg ? 1 : 0 }} aria-live="polite">
          {easterMsg || ' '}
        </p>
        <p className="lead">
          I'm Selina — and if you can recognise all three languages, you can probably guess where I'm from!
        </p>
        <p className="lead">
          A software engineer who speaks a fair few programming languages too. Based in London, currently at Citi — drawn to the work that sits closest to the people who depend on it.
        </p>
        <div className="paths">
          <button className="path-btn" onClick={() => scrollToStop(1)}>
            <span className="mini-plane"><PlaneSvg /></span>
            See my Education
          </button>
          <button className="path-btn alt" onClick={() => scrollToStop(2)}>
            <span className="mini-plane"><PlaneSvg /></span>
            Jump to Career
          </button>
        </div>
      </div>
    </section>
  );
}
