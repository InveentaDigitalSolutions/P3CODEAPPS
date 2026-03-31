import { CheckCircle } from 'lucide-react';

const pilotDef = [
  { label: 'App', value: 'One net-new app from the current backlog (logistics, inspection, field worker, or reporting — selected together)' },
  { label: 'Scope', value: 'Full end-to-end delivery: UI, data connector, authentication, deployment pipeline' },
  { label: 'Environment', value: 'Sandbox only — no production impact, no disruption to existing Canvas Apps' },
  { label: 'Team', value: '1 P3 React/TypeScript developer + P3 Power Platform architect' },
  { label: 'Client asks', value: 'Admin enables Code Apps toggle in sandbox + shared Git repo access granted' },
  { label: 'Duration', value: '4–6 weeks to working deployed app' },
];

const timeline = [
  { week: 'Wk 1', title: 'Setup & Alignment', desc: 'Repo created, environment enabled, app scope locked, tech stack agreed' },
  { week: 'Wk 2–3', title: 'Core Development', desc: 'UI built, connectors wired, authentication configured, data model connected' },
  { week: 'Wk 4–5', title: 'Review & Refinement', desc: 'Client code review via PRs, feedback loop, polish and edge case handling' },
  { week: 'Wk 6', title: 'Deploy & Present', desc: 'Deployed to sandbox, side-by-side demo, success criteria review with stakeholders' },
];

const successCriteria = [
  'Working app deployed in sandbox via PAC CLI pipeline',
  'Full source code in shared Git repo with PR history',
  'Side-by-side demo vs. Canvas App equivalent delivered',
];

export default function PilotBlueprint() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '48px 56px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
          The Pilot Blueprint — One App, Six Weeks, Real Results
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.95rem', marginTop: 8, fontStyle: 'italic' }}>
          A low-risk, time-boxed proof of concept — built on a net-new use case from your backlog
        </p>
      </div>

      <div className="stagger" style={{ flex: 1, padding: '28px 56px 0', display: 'flex', gap: 32, overflow: 'auto' }}>
        {/* Left — Pilot Definition */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              borderTop: '3px solid #1B69D4',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 8,
              overflow: 'hidden',
            }}
          >
            <div style={{ borderTop: '3px solid #1B69D4' }} />
            <div style={{ padding: '20px 24px 8px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: '#fff', marginBottom: 16, letterSpacing: '-0.01em' }}>
                Pilot Definition
              </h3>
            </div>
            {pilotDef.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  padding: '12px 24px',
                }}
              >
                <div style={{ width: 110, flexShrink: 0, fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Timeline + Success Criteria */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Timeline header */}
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: 3, textTransform: 'uppercase' }}>
            Timeline
          </div>

          {/* Timeline items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: 32, top: 0, bottom: 0, width: 2, background: 'rgba(255,255,255,0.08)' }} />

            {timeline.map((phase, i) => (
              <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', position: 'relative', paddingBottom: i < timeline.length - 1 ? 20 : 0 }}>
                {/* Week badge */}
                <div
                  style={{
                    width: 64,
                    flexShrink: 0,
                    background: '#1B69D4',
                    color: '#fff',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    letterSpacing: '0.02em',
                    padding: '8px 0',
                    textAlign: 'center',
                    borderRadius: 6,
                    zIndex: 1,
                  }}
                >
                  {phase.week}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', color: '#fff', marginBottom: 4, letterSpacing: '-0.01em' }}>
                    {phase.title}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>
                    {phase.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Success Criteria */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 20 }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.3)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14 }}>
              Success Criteria
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {successCriteria.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <CheckCircle size={15} color="#1DB954" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, fontStyle: 'italic' }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacer */}
      <div style={{ height: 48 }} />
    </div>
  );
}
