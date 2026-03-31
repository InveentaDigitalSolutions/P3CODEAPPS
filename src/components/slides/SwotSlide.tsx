const quadrants = [
  {
    label: 'Strengths',
    color: '#1DB954',
    bg: '#F4FAF6',
    items: [
      'Full UI & logic freedom — any web framework',
      'Native Power Platform security & governance',
      'Git-managed source — reviewable, testable, auditable',
      '1,500+ connectors callable directly from JavaScript',
    ],
  },
  {
    label: 'Weaknesses',
    color: '#E53935',
    bg: '#FDF4F4',
    items: [
      'Requires Power Apps Premium license per end-user',
      'Higher initial setup (VS Code, Node, PAC CLI)',
      'Not yet supported in mobile app or SharePoint forms',
      'Developer expertise needed — not citizen-dev friendly',
    ],
  },
  {
    label: 'Opportunities',
    color: '#1B69D4',
    bg: '#F0F5FD',
    items: [
      'Bigger talent pool — far more React/JS devs than Power FX makers',
      'Build proprietary IP on an enterprise-grade managed platform',
      'Attract and retain senior developers with a modern stack',
      'Reduce vendor lock-in — full code ownership in your own repo',
    ],
  },
  {
    label: 'Threats',
    color: '#F5A623',
    bg: '#FFFCF4',
    items: [
      'Governance gaps if repo access & branching not defined early',
      'License cost increase (Premium required vs. standard Canvas)',
      'Still a new Microsoft product — API may evolve',
      'Risk of over-engineering simple use cases with code',
    ],
  },
];

export default function SwotSlide() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '48px 56px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 700, color: '#1C1C1C', letterSpacing: '-0.02em' }}>
          SWOT Analysis
        </h2>
        <p style={{ color: '#999', fontSize: '0.95rem', marginTop: 8 }}>
          Code Apps for your organization — an honest assessment.
        </p>
      </div>

      <div style={{ flex: 1, padding: '28px 56px 100px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'auto' }}>
        {/* 2x2 grid */}
        <div
          className="stagger"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 8,
            width: '100%',
            maxWidth: 960,
            position: 'relative',
          }}
        >
          {quadrants.map((q, i) => (
            <div
              key={i}
              style={{
                background: q.bg,
                borderRadius: 8,
                padding: '28px 28px 28px 32px',
                borderLeft: `3px solid ${q.color}`,
                transition: 'transform 0.25s cubic-bezier(0.25,0.1,0.25,1), box-shadow 0.25s cubic-bezier(0.25,0.1,0.25,1)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.01)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: q.color,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  marginBottom: 16,
                }}
              >
                {q.label}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {q.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      fontSize: '0.84rem',
                      lineHeight: 1.55,
                      color: '#333',
                      paddingLeft: 16,
                      position: 'relative',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 7,
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: q.color,
                        opacity: 0.5,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
