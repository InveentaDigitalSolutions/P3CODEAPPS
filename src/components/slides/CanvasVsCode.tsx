import { CheckCircle, XCircle, CheckSquare, Zap } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';
import vscodeLogo from '../../assets/VSCodeLogo.svg';
import paLogo from '../../assets/PowerAppsLogo.svg';

function ItemList({ items, type }: { items: string[]; type: 'strength' | 'limitation' }) {
  const isGreen = type === 'strength';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      {items.map((item, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 10,
            padding: '8px 12px',
            background: '#FFFFFF',
            borderRadius: 6,
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          {isGreen ? (
            <CheckCircle size={14} color="#1DB954" style={{ flexShrink: 0, marginTop: 2 }} />
          ) : (
            <XCircle size={14} color="#E53935" style={{ flexShrink: 0, marginTop: 2 }} />
          )}
          <span style={{ fontSize: '0.84rem', color: '#333', lineHeight: 1.45 }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default function CanvasVsCode() {
  const heading = useT('Canvas Apps vs. Code Apps', 'Canvas Apps vs. Code Apps');
  const subtitle = useT(
    'Two complementary tools — each with a purpose. Not a replacement, an extension.',
    'Zwei komplementäre Werkzeuge — jedes mit einem Zweck. Kein Ersatz, eine Erweiterung.',
  );
  const codeStrengths = useT(
    ['Full control over UI, logic & architecture', 'Any web framework (React, Vue, etc.)', 'Git-managed source — auditable & testable', 'Full access to 1,500+ connectors via JS'],
    ['Volle Kontrolle über UI, Logik & Architektur', 'Jedes Web-Framework (React, Vue, etc.)', 'Git-verwalteter Code — prüfbar & testbar', 'Voller Zugriff auf 1.500+ Konnektoren via JS'],
  );
  const codeLimitations = useT(
    ['Requires developer expertise (VS Code, npm)', 'Needs Power Apps Premium license for end-users', 'No mobile app or SharePoint Forms support (yet)'],
    ['Erfordert Entwickler-Expertise (VS Code, npm)', 'Power Apps Premium-Lizenz für Endnutzer nötig', 'Keine Mobile-App oder SharePoint-Forms-Unterstützung (noch)'],
  );
  const canvasStrengths = useT(
    ['Low-code / no-code – fast prototyping', 'Drag-and-drop UI, accessible to all roles', 'Built-in connectors & data sources', 'No developer toolchain required'],
    ['Low-Code / No-Code – schnelles Prototyping', 'Drag-and-Drop UI, zugänglich für alle Rollen', 'Integrierte Konnektoren & Datenquellen', 'Kein Entwickler-Toolchain erforderlich'],
  );
  const canvasLimitations = useT(
    ['Limited UI flexibility — bound to controls palette', 'Logic complexity grows harder to manage', 'No version control or code review workflow'],
    ['Eingeschränkte UI-Flexibilität — an Controls gebunden', 'Logik-Komplexität wird schwerer verwaltbar', 'Keine Versionskontrolle oder Code-Review-Workflows'],
  );
  const chooseCode = useT(
    ['Complex UI beyond Canvas control palette', 'Team needs Git, PRs, and CI/CD automation', 'Application has significant business logic', 'Custom design system or brand-specific UI', 'Long-term maintainability is a priority'],
    ['Komplexe UI jenseits der Canvas-Controls', 'Team benötigt Git, PRs und CI/CD-Automatisierung', 'Anwendung hat umfangreiche Geschäftslogik', 'Eigenes Design-System oder markenspezifische UI', 'Langfristige Wartbarkeit hat Priorität'],
  );
  const chooseCanvas = useT(
    ['Simple forms & data entry screens', 'Citizen developers building internal tools', 'Quick prototypes or proof-of-concept apps', 'Heavy use of built-in connectors & templates', 'Mobile-first or SharePoint-embedded use case'],
    ['Einfache Formulare & Dateneingabemasken', 'Citizen Developer erstellen interne Tools', 'Schnelle Prototypen oder Proof-of-Concept-Apps', 'Starke Nutzung integrierter Konnektoren & Vorlagen', 'Mobile-First oder SharePoint-eingebettete Anwendung'],
  );
  const lblStrengths = useT('Strengths', 'Stärken');
  const lblLimitations = useT('Limitations', 'Einschränkungen');
  const lblChooseCode = useT('Choose Code When…', 'Code wählen, wenn…');
  const lblChooseCanvas = useT('Choose Canvas When…', 'Canvas wählen, wenn…');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '48px 56px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 700, color: '#1C1C1C', letterSpacing: '-0.02em' }}>
          {heading}
        </h2>
        <p style={{ color: '#999', fontSize: '1rem', marginTop: 8 }}>
          {subtitle}
        </p>
      </div>

      <div
        className="stagger"
        style={{ flex: 1, padding: '20px 56px 24px', display: 'flex', gap: 24, alignItems: 'flex-start', overflow: 'auto' }}
      >
        {/* Code column — LEFT */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              background: '#1C1C1C',
              color: '#fff',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.95rem',
              padding: '14px 20px',
              borderRadius: '8px 8px 0 0',
              letterSpacing: '-0.01em',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <img src={vscodeLogo} alt="VS Code" style={{ width: 22, height: 22 }} />
            Code Apps
          </div>
          <div
            style={{
              background: '#FAFAFA',
              borderRadius: '0 0 8px 8px',
              padding: '18px 16px',
              border: '1px solid rgba(0,0,0,0.06)',
              borderTop: 'none',
            }}
          >
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#1DB954', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>
              {lblStrengths}
            </div>
            <ItemList items={codeStrengths} type="strength" />

            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#E53935', letterSpacing: 2, textTransform: 'uppercase', margin: '14px 0 8px' }}>
              {lblLimitations}
            </div>
            <ItemList items={codeLimitations} type="limitation" />

            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#1B69D4', letterSpacing: 2, textTransform: 'uppercase', margin: '14px 0 8px' }}>
              {lblChooseCode}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {chooseCode.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px', background: '#F0F5FD', borderRadius: 6, border: '1px solid rgba(27,105,212,0.1)' }}>
                  <CheckSquare size={13} color="#1B69D4" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.82rem', color: '#444', lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VS badge */}
        <div
          style={{
            alignSelf: 'center',
            background: '#1C1C1C',
            color: 'rgba(255,255,255,0.6)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '0.75rem',
            letterSpacing: '0.05em',
            width: 44,
            height: 44,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          VS
        </div>

        {/* Canvas column — RIGHT */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              background: '#1B69D4',
              color: '#fff',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.95rem',
              padding: '14px 20px',
              borderRadius: '8px 8px 0 0',
              letterSpacing: '-0.01em',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <img src={paLogo} alt="Power Apps" style={{ width: 22, height: 22 }} />
            Canvas Apps
          </div>
          <div
            style={{
              background: '#FAFAFA',
              borderRadius: '0 0 8px 8px',
              padding: '18px 16px',
              border: '1px solid rgba(0,0,0,0.06)',
              borderTop: 'none',
            }}
          >
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#1DB954', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 }}>
              {lblStrengths}
            </div>
            <ItemList items={canvasStrengths} type="strength" />

            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#E53935', letterSpacing: 2, textTransform: 'uppercase', margin: '14px 0 8px' }}>
              {lblLimitations}
            </div>
            <ItemList items={canvasLimitations} type="limitation" />

            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#F5A623', letterSpacing: 2, textTransform: 'uppercase', margin: '14px 0 8px' }}>
              {lblChooseCanvas}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {chooseCanvas.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px', background: '#FFFCF4', borderRadius: 6, border: '1px solid rgba(245,166,35,0.12)' }}>
                  <Zap size={13} color="#F5A623" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.82rem', color: '#444', lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rule of thumb banner */}
      <div
        style={{
          margin: '0 56px 24px',
          padding: '12px 20px',
          background: '#F7F7F7',
          borderLeft: '3px solid #1B69D4',
          borderRadius: 6,
        }}
      >
        <p style={{ fontSize: '0.88rem', color: '#555', fontStyle: 'italic', lineHeight: 1.5 }}>
          {useT(
            <>💡 Rule of thumb — <strong style={{ color: '#1B69D4' }}>Canvas for speed</strong>, <strong style={{ color: '#1C1C1C' }}>Code for control</strong>. When Canvas can't keep up, Code Apps step in.</>,
            <>💡 Faustregel — <strong style={{ color: '#1B69D4' }}>Canvas für Geschwindigkeit</strong>, <strong style={{ color: '#1C1C1C' }}>Code für Kontrolle</strong>. Wenn Canvas nicht mehr mitkommt, übernehmen Code Apps.</>,
          )}
        </p>
      </div>
    </div>
  );
}
