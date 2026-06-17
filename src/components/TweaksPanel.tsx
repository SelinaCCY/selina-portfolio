import { useState } from 'react';

export interface TweakValues {
  transitionStyle: 'slide' | 'arc';
  transitionMs: number;
  colorHints: boolean;
}

interface TweaksPanelProps {
  tweaks: TweakValues;
  onChange: (t: TweakValues) => void;
  onPreviewFlight: () => void;
  onRestart: () => void;
}

export function TweaksPanel({ tweaks, onChange, onPreviewFlight, onRestart }: TweaksPanelProps) {
  const [collapsed, setCollapsed] = useState(false);

  function set<K extends keyof TweakValues>(key: K, val: TweakValues[K]) {
    onChange({ ...tweaks, [key]: val });
  }

  return (
    <div className="tweaks-island">
      <div className="tweaks-panel">
        <div className="tweaks-title">
          Tweaks
          <button className="tweaks-collapse-btn" onClick={() => setCollapsed(c => !c)}>
            {collapsed ? '▼' : '▲'}
          </button>
        </div>
        {!collapsed && (
          <>
            <div className="tweak-section">Plane transition</div>
            <div className="tweak-row">
              <span className="tweak-label">Style</span>
              <div className="tweak-radio">
                {(['slide', 'arc'] as const).map(opt => (
                  <button
                    key={opt}
                    className={`tweak-radio-btn${tweaks.transitionStyle === opt ? ' active' : ''}`}
                    onClick={() => set('transitionStyle', opt)}
                  >{opt}</button>
                ))}
              </div>
            </div>
            <div className="tweak-row" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 4 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span className="tweak-label">Total duration</span>
                <span className="tweak-slider-val">{tweaks.transitionMs}ms</span>
              </div>
              <input
                type="range" className="tweak-slider"
                min={700} max={2200} step={50}
                value={tweaks.transitionMs}
                onChange={e => set('transitionMs', Number(e.target.value))}
              />
            </div>
            <button className="tweak-btn" onClick={onPreviewFlight}>▶ Preview a flight</button>
            <div className="tweak-section">Wireframe</div>
            <label className="tweak-toggle">
              <input
                type="checkbox"
                checked={tweaks.colorHints}
                onChange={e => set('colorHints', e.target.checked)}
              />
              Colour hints (per location)
            </label>
            <button className="tweak-btn secondary" onClick={onRestart}>↺ Restart journey</button>
          </>
        )}
      </div>
    </div>
  );
}
