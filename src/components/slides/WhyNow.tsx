import { Layers, TrendingUp, Landmark, Key, Filter, Shield, Server } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';

export default function WhyNow() {
  const strategicCards = useT(
    [
      { icon: Layers, accent: '#1DB954', title: 'Alongside Canvas — Not Instead Of', desc: 'Canvas stays for simple use cases. Code Apps handle what Canvas cannot sustain.', bullets: ['Complex frontend logic & state management', 'Reusable component libraries', 'CI/CD pipelines & pull request reviews'] },
      { icon: TrendingUp, accent: '#E68A2E', title: 'Economic Efficiency & Velocity', desc: 'Pro-dev teams apply web best practices while IT keeps central control.', bullets: ['Less Shadow IT & fragmentation', 'Faster releases with automated pipelines', 'Larger talent pool (React / TypeScript)'] },
      { icon: Landmark, accent: '#9B59B6', title: 'Aligned with Microsoft Roadmap', desc: 'Microsoft is actively driving "Host and govern any app" — Code Apps are the standard.', bullets: ['Code Apps are GA (Generally Available)', 'Strategic "Pro-Code" investment path', 'Early movers gain competitive advantage'] },
    ],
    [
      { icon: Layers, accent: '#1DB954', title: 'Neben Canvas — Nicht stattdessen', desc: 'Canvas bleibt für einfache Anwendungsfälle. Code Apps übernehmen, was Canvas nicht leisten kann.', bullets: ['Komplexe Frontend-Logik & State Management', 'Wiederverwendbare Komponentenbibliotheken', 'CI/CD-Pipelines & Pull-Request-Reviews'] },
      { icon: TrendingUp, accent: '#E68A2E', title: 'Wirtschaftlichkeit & Geschwindigkeit', desc: 'Pro-Dev-Teams nutzen Web-Best-Practices, während die IT die zentrale Kontrolle behält.', bullets: ['Weniger Shadow IT & Fragmentierung', 'Schnellere Releases durch automatisierte Pipelines', 'Größerer Talentpool (React / TypeScript)'] },
      { icon: Landmark, accent: '#9B59B6', title: 'Im Einklang mit der Microsoft-Roadmap', desc: 'Microsoft treibt aktiv "Host and govern any app" voran — Code Apps sind der Standard.', bullets: ['Code Apps sind GA (Generally Available)', 'Strategischer "Pro-Code"-Investitionspfad', 'Frühzeitige Einführung bringt Wettbewerbsvorteil'] },
    ],
  );

  const securityCards = useT(
    [
      { icon: Key, color: '#F5A623', title: 'Entra ID Authentication', desc: 'SSO and MFA enforced at platform level. No custom auth code.' },
      { icon: Filter, color: '#E53935', title: 'DLP Policy Enforcement', desc: 'Same policies governing Canvas Apps apply at runtime.' },
      { icon: Shield, color: '#1DB954', title: 'Conditional Access', desc: 'Device compliance & identity rules enforced by Entra.' },
      { icon: Server, color: '#9C27B0', title: 'Managed Environment', desc: 'App quarantine, monitoring, sharing limits — zero setup.' },
    ],
    [
      { icon: Key, color: '#F5A623', title: 'Entra ID Authentifizierung', desc: 'SSO und MFA auf Plattformebene erzwungen. Kein eigener Auth-Code.' },
      { icon: Filter, color: '#E53935', title: 'DLP-Richtlinien', desc: 'Dieselben Richtlinien wie für Canvas Apps gelten zur Laufzeit.' },
      { icon: Shield, color: '#1DB954', title: 'Conditional Access', desc: 'Geräte-Compliance & Identitätsregeln durch Entra erzwungen.' },
      { icon: Server, color: '#9C27B0', title: 'Managed Environment', desc: 'App-Quarantäne, Monitoring, Freigabelimits — ohne Konfiguration.' },
    ],
  );

  const heading = useT('Why Code Apps — and Why Now?', 'Warum Code Apps — und warum jetzt?');
  const subtitle = useT('The strategic, economic, and security case for acting today', 'Das strategische, wirtschaftliche und sicherheitstechnische Argument für heute');
  const secLabel = useT('Built-In Security — Nothing to Configure', 'Integrierte Sicherheit — Nichts zu konfigurieren');
  const banner = useT(
    '🛡️ A standalone React app gives you none of this. Code Apps inherit Entra ID, DLP, Conditional Access, and Managed Environments — for free.',
    '🛡️ Eine eigenständige React-App bietet nichts davon. Code Apps erben Entra ID, DLP, Conditional Access und Managed Environments — kostenlos.',
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '48px 56px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
          {heading}
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', marginTop: 8, fontStyle: 'italic' }}>
          {subtitle}
        </p>
      </div>

      <div className="stagger" style={{ flex: 1, padding: '24px 56px 32px', display: 'flex', flexDirection: 'column', gap: 20, overflow: 'auto' }}>
        {/* Top row — 3 strategic cards */}
        <div style={{ display: 'flex', gap: 16 }}>
          {strategicCards.map((card, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 8,
                padding: '20px',
                borderTop: `2px solid ${card.accent}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <card.icon size={18} color={card.accent} strokeWidth={1.5} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.92rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>
                  {card.title}
                </h3>
              </div>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.55, color: 'rgba(255,255,255,0.4)', marginBottom: 10 }}>
                {card.desc}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {card.bullets.map((b, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: card.accent, flexShrink: 0, opacity: 0.7 }} />
                    <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section — Security & Architecture */}
        <div>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.2)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14 }}>
            {secLabel}
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            {securityCards.map((card, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  background: '#1A1A1A',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 8,
                  padding: '18px 16px',
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: `${card.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <card.icon size={16} color={card.color} strokeWidth={1.5} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.88rem', color: '#fff', marginBottom: 4, letterSpacing: '-0.01em' }}>
                    {card.title}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>
                    {card.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner */}
        <div
          style={{
            padding: '12px 20px',
            background: 'rgba(27,105,212,0.06)',
            border: '1px solid rgba(27,105,212,0.12)',
            borderRadius: 8,
          }}
        >
          <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', lineHeight: 1.5 }}>
            {banner}
          </p>
        </div>
      </div>
    </div>
  );
}
