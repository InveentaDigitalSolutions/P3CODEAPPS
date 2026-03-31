import { Globe, Shield, Puzzle } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';
import paLogo from '../../assets/PowerAppsLogo.svg';

export default function WhatAreCodeApps() {
  const stackItems = useT(
    [
      { label: 'Power Platform', desc: 'Hosting, ALM, security, connectors', opacity: 0.9 },
      { label: 'Code App', desc: 'React / Vue / any web framework', opacity: 0.7 },
      { label: 'Power Apps JS Client Library', desc: '@microsoft/power-apps', opacity: 0.5 },
      { label: 'Dataverse · SharePoint · 1,500+ Connectors', desc: '', opacity: 0.35 },
    ],
    [
      { label: 'Power Platform', desc: 'Hosting, ALM, Sicherheit, Konnektoren', opacity: 0.9 },
      { label: 'Code App', desc: 'React / Vue / jedes Web-Framework', opacity: 0.7 },
      { label: 'Power Apps JS Client Library', desc: '@microsoft/power-apps', opacity: 0.5 },
      { label: 'Dataverse · SharePoint · 1.500+ Konnektoren', desc: '', opacity: 0.35 },
    ],
  );

  const cards = useT(
    [
      { icon: Globe, title: 'Any Web Framework', desc: 'React, Vue, vanilla JS — build with what your team already knows.' },
      { icon: Shield, title: 'Enterprise-Grade Platform', desc: 'Entra auth, DLP policies, Conditional Access, tenant isolation — all inherited automatically.' },
      { icon: Puzzle, title: '1,500+ Connectors', desc: 'Call any Power Platform connector directly from JavaScript, no custom backend needed.' },
    ],
    [
      { icon: Globe, title: 'Jedes Web-Framework', desc: 'React, Vue, Vanilla JS — entwickeln Sie mit dem, was Ihr Team bereits kennt.' },
      { icon: Shield, title: 'Enterprise-Plattform', desc: 'Entra-Auth, DLP-Richtlinien, Conditional Access, Mandantenisolierung — alles automatisch vererbt.' },
      { icon: Puzzle, title: '1.500+ Konnektoren', desc: 'Jeden Power Platform-Konnektor direkt aus JavaScript aufrufen, kein eigenes Backend nötig.' },
    ],
  );

  const heading = useT('What Are Power Apps Code Apps?', 'Was sind Power Apps Code Apps?');
  const subtitle = useT(
    'A new Microsoft capability — code-first apps that run natively on Power Platform.',
    'Eine neue Microsoft-Funktion — Code-first Apps, die nativ auf Power Platform laufen.',
  );
  const definition = useT(
    'Code Apps let developers build full custom web apps in standard IDEs (VS Code) using any modern framework — React, Vue, or others — and deploy them directly into Power Platform, with full access to connectors, Dataverse, and enterprise security.',
    'Code Apps ermöglichen es Entwicklern, vollständig individuelle Web-Apps in Standard-IDEs (VS Code) mit jedem modernen Framework — React, Vue oder andere — zu erstellen und direkt in Power Platform bereitzustellen, mit vollem Zugriff auf Konnektoren, Dataverse und Enterprise-Sicherheit.',
  );
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header — clean, no background band */}
      <div style={{ padding: '48px 56px 0', display: 'flex', alignItems: 'flex-start', gap: 20 }}>
        <img
          src={paLogo}
          alt="Power Apps"
          style={{ width: 44, height: 44, marginTop: 4 }}
        />
        <div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
            {heading}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem', marginTop: 8 }}>
            {subtitle}
          </p>
        </div>
      </div>

      <div style={{ flex: 1, padding: '36px 56px 100px', overflow: 'auto' }} className="stagger">
        {/* Top half: definition + stack */}
        <div style={{ display: 'flex', gap: 32, marginBottom: 40 }}>
          {/* Definition card */}
          <div
            style={{
              flex: 1,
              background: '#1A1A1A',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 8,
              padding: '32px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.65)' }}>
              {definition}
            </p>
          </div>

          {/* Vertical stack — BMW minimal */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            {stackItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: `rgba(255,255,255,${0.03 + i * 0.01})`,
                  borderRadius: i === 0 ? '8px 8px 0 0' : i === stackItems.length - 1 ? '0 0 8px 8px' : 0,
                  padding: '18px 24px',
                }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: `rgba(255,255,255,${item.opacity})` }}>
                  {item.label}
                </div>
                {item.desc && (
                  <div style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.25)', marginTop: 3 }}>
                    {item.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom cards — BMW-style clean panels */}
        <div style={{ display: 'flex', gap: 20 }}>
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 8,
                padding: '28px 24px',
                borderTop: '2px solid #1B69D4',
                transition: 'transform 0.2s cubic-bezier(0.25,0.1,0.25,1), box-shadow 0.2s cubic-bezier(0.25,0.1,0.25,1)',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <card.icon size={24} color="rgba(255,255,255,0.4)" strokeWidth={1.5} style={{ marginBottom: 16 }} />
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: 10, letterSpacing: '-0.01em' }}>
                {card.title}
              </h4>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.4)' }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
