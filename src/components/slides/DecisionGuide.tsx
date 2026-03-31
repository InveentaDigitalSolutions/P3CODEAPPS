import { CheckCircle, Zap } from 'lucide-react';

const codeAppReasons = [
  'You need full UI/UX control — BMW design standards, custom interactions, pixel-perfect layouts',
  'The app has complex frontend logic, state management, or multi-step workflows',
  'Long-term maintainability matters — Git, PR reviews, CI/CD from day one',
  'Your team includes React/TypeScript developers (or you want to hire them)',
  'The app must integrate deeply with APIs, Dataverse, or event-driven architectures',
  "Strategic alignment with Microsoft's Pro-Code roadmap is a priority",
];

const canvasAppReasons = [
  'Speed is the priority — you need a working prototype or MVP in days, not weeks',
  'The app is task-oriented and simple: forms, approvals, checklists, basic data entry',
  'The builder is a citizen developer or business analyst — no coding background',
  'Native M365 integration is central: Teams, SharePoint, Outlook, Planner workflows',
  'The use case is internal-facing and unlikely to scale in complexity or user base',
  'You want to validate a concept before investing in a full Code App build',
];

export default function DecisionGuide() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '48px 56px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 700, color: '#1C1C1C', letterSpacing: '-0.02em' }}>
          When to Use Which — Strategic Decision Guide
        </h2>
        <p style={{ color: '#999', fontSize: '0.95rem', marginTop: 8, fontStyle: 'italic' }}>
          Choose the right tool for the right job — both have a permanent place in your platform
        </p>
      </div>

      {/* Two columns */}
      <div
        className="stagger"
        style={{ flex: 1, padding: '28px 56px 0', display: 'flex', gap: 24, overflow: 'auto' }}
      >
        {/* Code Apps column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div
            style={{
              background: '#1C1C1C',
              color: '#fff',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '14px 20px',
              borderRadius: '8px 8px 0 0',
              letterSpacing: '-0.01em',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <img src="/VSCodeLogo.png" alt="VS Code" style={{ width: 22, height: 22 }} />
            Choose Code Apps when…
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '12px 0' }}>
            {codeAppReasons.map((reason, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  padding: '12px 16px',
                  background: '#FAFAFA',
                  border: '1px solid rgba(0,0,0,0.05)',
                  borderRadius: 6,
                  borderLeft: '3px solid #1DB954',
                }}
              >
                <CheckCircle size={18} color="#1DB954" style={{ flexShrink: 0, marginTop: 1 }} />
                <span style={{ fontSize: '0.84rem', color: '#333', lineHeight: 1.55 }}>{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Canvas Apps column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0 }}>
          <div
            style={{
              background: '#1B69D4',
              color: '#fff',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '14px 20px',
              borderRadius: '8px 8px 0 0',
              letterSpacing: '-0.01em',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <img src="/Powerapps-logo.svg.png" alt="Power Apps" style={{ width: 22, height: 22 }} />
            Choose Canvas Apps when…
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: '12px 0' }}>
            {canvasAppReasons.map((reason, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  padding: '12px 16px',
                  background: '#FAFAFA',
                  border: '1px solid rgba(0,0,0,0.05)',
                  borderRadius: 6,
                  borderLeft: '3px solid #E68A2E',
                }}
              >
                <Zap size={18} color="#E68A2E" style={{ flexShrink: 0, marginTop: 1 }} />
                <span style={{ fontSize: '0.84rem', color: '#333', lineHeight: 1.55 }}>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom banner */}
      <div
        style={{
          margin: '0 56px 100px',
          padding: '14px 24px',
          background: 'rgba(0,0,0,0.03)',
          borderLeft: '2px solid #1B69D4',
          borderRadius: 4,
        }}
      >
        <p style={{ fontSize: '0.82rem', color: '#777', fontStyle: 'italic', lineHeight: 1.6 }}>
          🎯 The rule of thumb: Canvas Apps for speed and simplicity. Code Apps for control, quality, and scale.
        </p>
      </div>
    </div>
  );
}
