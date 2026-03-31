import { CheckCircle } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';
import bmwLogo from '../../assets/BMWLogo.svg';
import p3Logo from '../../assets/P3logo.svg';

export default function Proposal() {
  const pilotDef = [
    { label: useT('App', 'App'), value: useT('One net-new app from the current backlog — selected together', 'Eine komplett neue App aus dem aktuellen Backlog — gemeinsam ausgewählt') },
    { label: useT('Scope', 'Umfang'), value: useT('Full end-to-end: UI, data connector, auth, deployment', 'Vollständig End-to-End: UI, Datenkonnektor, Auth, Deployment') },
    { label: useT('Environment', 'Umgebung'), value: useT('Sandbox only — no production impact', 'Nur Sandbox — keine Auswirkungen auf die Produktion') },
    { label: useT('Team', 'Team'), value: useT('1 P3 React/TS dev + P3 Power Platform architect', '1 P3 React/TS-Entwickler + P3 Power Platform Architekt') },
    { label: useT('Client asks', 'Kundenseite'), value: useT('Enable Code Apps toggle + shared Git repo access', 'Code Apps Toggle aktivieren + geteilter Git-Repo-Zugang') },
    { label: useT('Duration', 'Dauer'), value: useT('4–6 weeks to working deployed app', '4–6 Wochen bis zur funktionierenden, bereitgestellten App') },
  ];

  const timeline = [
    { week: useT('Wk 1', 'Wo 1'), title: useT('Setup & Alignment', 'Setup & Abstimmung'), desc: useT('Repo, environment, scope, tech stack', 'Repo, Umgebung, Umfang, Tech-Stack') },
    { week: useT('Wk 2–3', 'Wo 2–3'), title: useT('Core Development', 'Kernentwicklung'), desc: useT('UI, connectors, auth, data model', 'UI, Konnektoren, Auth, Datenmodell') },
    { week: useT('Wk 4–5', 'Wo 4–5'), title: useT('Review & Refinement', 'Review & Verfeinerung'), desc: useT('PRs, feedback, polish, edge cases', 'PRs, Feedback, Feinschliff, Grenzfälle') },
    { week: useT('Wk 6', 'Wo 6'), title: useT('Deploy & Present', 'Deploy & Präsentation'), desc: useT('Sandbox deploy, demo, success review', 'Sandbox-Deployment, Demo, Erfolgsbewertung') },
  ];

  const nextSteps = [
    { num: '01', title: useT('Enable Code Apps', 'Code Apps aktivieren'), desc: useT('Admin enables toggle in Power Platform admin center for sandbox.', 'Admin aktiviert den Toggle im Power Platform Admin Center für die Sandbox.') },
    { num: '02', title: useT('Define Repo & Access', 'Repo & Zugang definieren'), desc: useT('Agree on Git structure, branching, and team access.', 'Git-Struktur, Branching und Teamzugang abstimmen.') },
    { num: '03', title: useT('Build Pilot App', 'Pilot-App entwickeln'), desc: useT('Select one use case, build as Code App, side-by-side compare.', 'Einen Use Case auswählen, als Code App bauen, Seite-an-Seite vergleichen.') },
    { num: '04', title: useT('Establish CI/CD', 'CI/CD einrichten'), desc: useT('PR approvals + PAC CLI deployment pipeline.', 'PR-Genehmigungen + PAC CLI Deployment-Pipeline.') },
  ];

  const successCriteria = [
    useT('Working app deployed in sandbox via PAC CLI', 'Funktionierende App in der Sandbox via PAC CLI bereitgestellt'),
    useT('Full source code in shared Git repo with PR history', 'Vollständiger Quellcode im geteilten Git-Repo mit PR-Historie'),
    useT('Side-by-side demo vs. Canvas App equivalent', 'Seite-an-Seite-Demo vs. Canvas App Äquivalent'),
  ];

  const heading = useT('The Pilot — One App, Six Weeks, Real Results', 'Das Pilot — Eine App, sechs Wochen, echte Ergebnisse');
  const subtitle = useT('A low-risk, time-boxed proof of concept — and the concrete next steps to get there', 'Ein risikoarmer, zeitlich begrenzter Proof of Concept — und die konkreten nächsten Schritte');
  const lblPilotDef = useT('Pilot Definition', 'Pilot-Definition');
  const lblSuccess = useT('Success Criteria', 'Erfolgskriterien');
  const lblTimeline = useT('Timeline', 'Zeitplan');
  const lblNextSteps = useT('Next Steps', 'Nächste Schritte');
  const footerText = useT("Let's define the pilot together — we're ready to start.", 'Lassen Sie uns das Pilot gemeinsam definieren — wir sind bereit.');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '48px 56px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
          {heading}
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1rem', marginTop: 8, fontStyle: 'italic' }}>
          {subtitle}
        </p>
      </div>

      <div className="stagger" style={{ flex: 1, padding: '24px 56px 0', display: 'flex', gap: 24, overflow: 'auto' }}>
        {/* Left — Pilot Definition table */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 8,
              overflow: 'hidden',
            }}
          >
            <div style={{ borderTop: '3px solid #1B69D4' }} />
            <div style={{ padding: '16px 20px 8px' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', color: '#fff', letterSpacing: '-0.01em' }}>
                {lblPilotDef}
              </h3>
            </div>
            {pilotDef.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                  padding: '10px 20px',
                }}
              >
                <div style={{ width: 90, flexShrink: 0, fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.45 }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Success Criteria */}
          <div style={{ marginTop: 16, padding: '14px 20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 8 }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.2)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>
              {lblSuccess}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {successCriteria.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle size={13} color="#1DB954" strokeWidth={1.5} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.4 }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center — Timeline */}
        <div style={{ flex: 0.8 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.2)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
            {lblTimeline}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', left: 28, top: 0, bottom: 0, width: 2, background: 'rgba(255,255,255,0.06)' }} />
            {timeline.map((phase, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', position: 'relative', paddingBottom: i < timeline.length - 1 ? 16 : 0 }}>
                <div
                  style={{
                    width: 56,
                    flexShrink: 0,
                    background: '#1B69D4',
                    color: '#fff',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.68rem',
                    padding: '7px 0',
                    textAlign: 'center',
                    borderRadius: 6,
                    zIndex: 1,
                  }}
                >
                  {phase.week}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.88rem', color: '#fff', marginBottom: 3, letterSpacing: '-0.01em' }}>
                    {phase.title}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.3)', lineHeight: 1.45 }}>
                    {phase.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Next Steps */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.2)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
            {lblNextSteps}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {nextSteps.map((step, i) => (
              <div
                key={i}
                style={{
                  background: '#1A1A1A',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 8,
                  padding: '16px 18px',
                  display: 'flex',
                  gap: 14,
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    color: '#1B69D4',
                    letterSpacing: '0.02em',
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  {step.num}
                </span>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', color: '#fff', marginBottom: 4, letterSpacing: '-0.01em' }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>
                    {step.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div
        style={{
          margin: '16px 56px 32px',
          padding: '14px 24px',
          background: 'rgba(27,105,212,0.06)',
          border: '1px solid rgba(27,105,212,0.12)',
          borderRadius: 8,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.84rem', fontStyle: 'italic' }}>
          {footerText}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <img src={bmwLogo} alt="BMW" style={{ width: 22, height: 22, opacity: 0.35 }} />
          <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.08)' }} />
          <img src={p3Logo} alt="P3 Group" style={{ height: 14, opacity: 0.25 }} />
        </div>
      </div>
    </div>
  );
}
