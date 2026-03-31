import { Key, Filter, Shield, Server } from 'lucide-react';

const stackLayers = [
  { title: 'Microsoft Entra ID', desc: 'SSO · MFA · Conditional Access' },
  { title: 'Power Platform Host', desc: 'Managed environments · App quarantine' },
  { title: 'Code App (React / Vue)', desc: 'Your app — your code — your repo' },
  { title: 'Data Loss Prevention (DLP)', desc: 'Policy enforcement at runtime' },
  { title: 'Dataverse · SharePoint · APIs', desc: '1,500+ governed connectors' },
];

const detailCards = [
  {
    icon: Key,
    color: '#F5A623',
    title: 'Entra ID Authentication',
    desc: 'Single sign-on and MFA enforced at platform level. No custom auth code. No credential management.',
  },
  {
    icon: Filter,
    color: '#E53935',
    title: 'DLP Policy Enforcement',
    desc: 'Data Loss Prevention policies apply at runtime — the same policies governing Canvas Apps and other PP workloads.',
  },
  {
    icon: Shield,
    color: '#1DB954',
    title: 'Conditional Access',
    desc: 'Device compliance, location, and identity-based access rules enforced by Entra — exactly as configured by your IT.',
  },
  {
    icon: Server,
    color: '#9C27B0',
    title: 'Managed Environment',
    desc: 'App quarantine, health monitoring, sharing limits, and admin controls all apply natively. Zero additional setup.',
  },
];

export default function ArchSecurity() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '48px 56px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
          Architecture & Security — Built In, Not Bolted On
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.95rem', marginTop: 8, fontStyle: 'italic' }}>
          Code Apps inherit the full Power Platform security model automatically — nothing to configure
        </p>
      </div>

      <div className="stagger" style={{ flex: 1, padding: '32px 56px 0', display: 'flex', gap: 32, overflow: 'auto' }}>
        {/* Left — Architecture Stack */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {stackLayers.map((layer, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderLeft: '3px solid rgba(27,105,212,0.5)',
                borderRadius: 6,
                padding: '16px 20px',
              }}
            >
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.92rem', color: '#fff', letterSpacing: '-0.01em' }}>
                {layer.title}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>
                {layer.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Right — Detail Cards */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {detailCards.map((card, i) => (
            <div
              key={i}
              style={{
                background: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: 8,
                padding: '18px 20px',
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: `${card.color}18`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <card.icon size={18} color={card.color} strokeWidth={1.5} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.88rem', color: '#fff', marginBottom: 6, letterSpacing: '-0.01em' }}>
                  {card.title}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.55 }}>
                  {card.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom banner */}
      <div
        style={{
          margin: '0 56px 48px',
          padding: '14px 24px',
          background: 'rgba(27,105,212,0.08)',
          border: '1px solid rgba(27,105,212,0.15)',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <span style={{ fontSize: '1rem' }}>🛡️</span>
        <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, fontStyle: 'italic' }}>
          A standalone React app running outside Power Platform gives you NONE of this — you build and maintain it all yourself. Code Apps give it to you for free.
        </span>
      </div>
    </div>
  );
}
