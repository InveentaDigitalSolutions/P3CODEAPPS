import { useT } from '../../i18n/LanguageContext';

export default function RiskMitigation() {
  const risks = [
    {
      risk: useT(
        '"This is a new Microsoft product — is it mature enough?"',
        '"Das ist ein neues Microsoft-Produkt — ist es schon ausgereift?"'
      ),
      mitigation: useT(
        'Code Apps went GA in late 2024. They use the same hosting, security, and ALM infrastructure as Canvas Apps — which you already rely on. The tech stack (React, TypeScript) has been enterprise-standard for 10+ years.',
        'Code Apps sind seit Ende 2024 allgemein verfügbar. Sie nutzen dieselbe Hosting-, Sicherheits- und ALM-Infrastruktur wie Canvas Apps — auf die Sie bereits setzen. Der Tech-Stack (React, TypeScript) ist seit über 10 Jahren Enterprise-Standard.'
      ),
      color: '#E53935',
    },
    {
      risk: useT(
        '"We\'ll be dependent on P3 — what if we need to maintain it ourselves?"',
        '"Wir werden von P3 abhängig — was, wenn wir es selbst pflegen müssen?"'
      ),
      mitigation: useT(
        'Full source code lives in a shared Git repository that you own and control. Your team has read/write access from day one. Any React developer — internal or external — can maintain, extend, or fork the codebase independently.',
        'Der vollständige Quellcode liegt in einem gemeinsamen Git-Repository, das Ihnen gehört und das Sie kontrollieren. Ihr Team hat ab Tag eins Lese-/Schreibzugriff. Jeder React-Entwickler — intern oder extern — kann die Codebasis eigenständig pflegen, erweitern oder forken.'
      ),
      color: '#F5A623',
    },
    {
      risk: useT(
        '"What if it disrupts our existing Canvas Apps and workflows?"',
        '"Was, wenn es unsere bestehenden Canvas Apps und Workflows stört?"'
      ),
      mitigation: useT(
        'Code Apps are additive — Canvas Apps stay exactly as they are. No migration, no disruption. The pilot runs in a separate sandbox environment with no impact on production. Code Apps and Canvas Apps coexist on the same platform.',
        'Code Apps sind additiv — Canvas Apps bleiben genau wie sie sind. Keine Migration, keine Unterbrechung. Das Pilot läuft in einer separaten Sandbox-Umgebung ohne Auswirkungen auf die Produktion. Code Apps und Canvas Apps koexistieren auf derselben Plattform.'
      ),
      color: '#E53935',
    },
    {
      risk: useT(
        '"What if the pilot fails or doesn\'t deliver the expected results?"',
        '"Was, wenn das Pilot scheitert oder nicht die erwarteten Ergebnisse liefert?"'
      ),
      mitigation: useT(
        'The pilot is time-boxed (4–6 weeks), scope-limited (one app), and run in sandbox only. Success criteria are agreed upfront. If the pilot doesn\'t meet them, we stop — zero production risk, zero sunk cost beyond the pilot window.',
        'Das Pilot ist zeitlich begrenzt (4–6 Wochen), im Umfang limitiert (eine App) und läuft nur in der Sandbox. Erfolgskriterien werden vorab vereinbart. Wenn das Pilot sie nicht erfüllt, stoppen wir — null Produktionsrisiko, null versunkene Kosten über das Pilotfenster hinaus.'
      ),
      color: '#9C27B0',
    },
    {
      risk: useT(
        '"We don\'t have React developers — who builds and maintains this?"',
        '"Wir haben keine React-Entwickler — wer baut und pflegt das?"'
      ),
      mitigation: useT(
        'P3 provides the development team for the pilot. Post-pilot, the talent pool for React/TypeScript developers is dramatically larger than for Power FX — making internal hiring or handover far more feasible than for Canvas Apps.',
        'P3 stellt das Entwicklungsteam für das Pilot. Nach dem Pilot ist der Talentpool für React/TypeScript-Entwickler deutlich größer als für Power FX — was interne Einstellung oder Übergabe wesentlich einfacher macht als bei Canvas Apps.'
      ),
      color: '#1DB954',
    },
  ];

  const heading = useT('Risk Mitigation — Your Concerns, Our Answers', 'Risikominimierung — Ihre Bedenken, unsere Antworten');
  const subtitle = useT('We know these questions will come up — here are our concrete answers', 'Wir wissen, dass diese Fragen kommen — hier sind unsere konkreten Antworten');
  const lblRisk = useT('Risk', 'Risiko');
  const lblMitigation = useT('Mitigation', 'Maßnahme');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '48px 56px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 700, color: '#1C1C1C', letterSpacing: '-0.02em' }}>
          {heading}
        </h2>
        <p style={{ color: '#999', fontSize: '1rem', marginTop: 8, fontStyle: 'italic' }}>
          {subtitle}
        </p>
      </div>

      <div className="stagger" style={{ flex: 1, padding: '28px 56px 48px', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'auto' }}>
        {risks.map((r, i) => (
          <div
            key={i}
            style={{
              background: '#FAFAFA',
              borderRadius: 8,
              border: '1px solid rgba(0,0,0,0.06)',
              borderLeft: `3px solid ${r.color}`,
              padding: '18px 24px',
            }}
          >
            {/* Risk */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
              <span
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                  color: '#fff',
                  background: r.color,
                  borderRadius: 4,
                  padding: '3px 10px',
                  flexShrink: 0,
                }}
              >
                {lblRisk}
              </span>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: '#1C1C1C', letterSpacing: '-0.01em' }}>
                {r.risk}
              </span>
            </div>

            {/* Mitigation */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <span
                style={{
                  fontSize: '0.6rem',
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                  color: '#fff',
                  background: '#1DB954',
                  borderRadius: 4,
                  padding: '3px 10px',
                  flexShrink: 0,
                }}
              >
                {lblMitigation}
              </span>
              <span style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.55, marginTop: 1 }}>
                {r.mitigation}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
