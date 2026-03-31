import { Code } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';
import p3Logo from '../../assets/P3logo.svg';
import paLogo from '../../assets/PowerAppsLogo.svg';
import vscodeLogo from '../../assets/VSCodeLogo.svg';

export default function TitleSlide() {
  const tagline = useT('The Case for', 'Das Argument für');
  const subtitle = useT(
    'Extending Power Platform with code-first apps — why it matters and how we do it with full transparency.',
    'Power Platform erweitern mit Code-first Apps — warum es wichtig ist und wie wir es mit voller Transparenz umsetzen.',
  );
  const date = useT('March 2026', 'März 2026');

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', background: '#000' }}>
      {/* Left minimal strip */}
      <div
        style={{
          width: '8%',
          minWidth: 80,
          background: '#0A0A0A',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '40px 0',
          borderRight: '1px solid rgba(255,255,255,0.04)',
        }}
      >
        <Code size={22} color="rgba(255,255,255,0.35)" strokeWidth={1.5} />
        <img
          src={p3Logo}
          alt="P3 Group"
          style={{ height: 32, opacity: 0.7 }}
        />
      </div>

      {/* Main content */}
      <div
        className="stagger"
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 80px 100px',
          gap: 0,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.65rem',
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            marginBottom: 24,
          }}
        >
          {tagline}
        </div>

        <h1
          style={{
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            fontWeight: 800,
            lineHeight: 0.95,
            color: '#FFFFFF',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.03em',
          }}
        >
          Power Apps
          <br />
          <span style={{ color: 'rgba(255,255,255,0.4)' }}>Code Apps</span>
        </h1>

        <div
          style={{
            width: 48,
            height: 1,
            background: 'rgba(255,255,255,0.15)',
            margin: '40px 0 32px',
          }}
        />

        <p
          style={{
            fontSize: '1rem',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.45)',
            maxWidth: 480,
            fontWeight: 400,
          }}
        >
          {subtitle}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 48 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#1B69D4' }} />
          </div>
          <span
            style={{
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.25)',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.05em',
            }}
          >
            {date}
          </span>
        </div>
      </div>

      {/* Right decorative — subtle geometric element */}
      <div
        style={{
          width: '25%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Power Apps + VS Code logos */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            right: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            zIndex: 1,
          }}
        >
          <img src={paLogo} alt="Power Apps" style={{ width: 32, height: 32, opacity: 0.7 }} />
          <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.1)' }} />
          <img src={vscodeLogo} alt="VS Code" style={{ width: 32, height: 32, opacity: 0.7 }} />
        </div>
        {/* Subtle concentric arcs */}
        <div
          style={{
            width: 320,
            height: 320,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.03)',
            position: 'absolute',
          }}
        />
        <div
          style={{
            width: 220,
            height: 220,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.05)',
            position: 'absolute',
          }}
        />
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.07)',
            position: 'absolute',
          }}
        />
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#1B69D4',
            position: 'absolute',
          }}
        />
      </div>
    </div>
  );
}
