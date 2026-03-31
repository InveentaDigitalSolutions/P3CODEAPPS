import { GitBranch, Code, Eye, Rocket, Lock, Search, RefreshCw, ShieldCheck, ArrowRight } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';

export default function RepoModel() {
  const steps = useT(
    [
      { icon: GitBranch, label: 'Shared Repo', desc: 'Azure DevOps or GitHub with full history' },
      { icon: Code, label: 'Development', desc: 'VS Code + React — standard web toolchain' },
      { icon: Eye, label: 'Code Review', desc: 'PRs & approvals — your team reviews changes' },
      { icon: Rocket, label: 'Deployment', desc: 'PAC CLI + CI/CD to Power Platform' },
      { icon: Lock, label: 'IP & Control', desc: 'Fork, extend, or hand over anytime' },
    ],
    [
      { icon: GitBranch, label: 'Gemeinsames Repo', desc: 'Azure DevOps oder GitHub mit vollständiger Historie' },
      { icon: Code, label: 'Entwicklung', desc: 'VS Code + React — Standard-Web-Toolchain' },
      { icon: Eye, label: 'Code Review', desc: 'PRs & Freigaben — Ihr Team prüft Änderungen' },
      { icon: Rocket, label: 'Deployment', desc: 'PAC CLI + CI/CD auf Power Platform' },
      { icon: Lock, label: 'IP & Kontrolle', desc: 'Forken, erweitern oder jederzeit übergeben' },
    ],
  );

  const principles = useT(
    [
      { icon: Search, title: 'Full Transparency', desc: 'Every commit, PR, and deployment is visible and auditable. No black boxes.', color: '#1B69D4' },
      { icon: RefreshCw, title: 'Larger Talent Pool', desc: 'React/TS developers outnumber Power FX makers 100:1. Hiring and handover are straightforward.', color: '#1DB954' },
      { icon: ShieldCheck, title: 'Client-Owned IP', desc: 'Code lives in your repository. No vendor lock-in — maintain independently at any time.', color: '#F5A623' },
    ],
    [
      { icon: Search, title: 'Volle Transparenz', desc: 'Jeder Commit, PR und jedes Deployment ist sichtbar und prüfbar. Keine Black Boxes.', color: '#1B69D4' },
      { icon: RefreshCw, title: 'Größerer Talentpool', desc: 'React/TS-Entwickler übertreffen Power FX-Maker 100:1. Einstellung und Übergabe sind unkompliziert.', color: '#1DB954' },
      { icon: ShieldCheck, title: 'Kunden-IP', desc: 'Der Code liegt in Ihrem Repository. Kein Vendor Lock-in — jederzeit unabhängig wartbar.', color: '#F5A623' },
    ],
  );

  const heading = useT('Full Code Ownership', 'Volle Code-Ownership');
  const subtitle = useT('You own the code. We build together. You maintain — or we do.', 'Sie besitzen den Code. Wir bauen gemeinsam. Sie warten — oder wir.');
  const lblWorkflow = useT('Development Workflow', 'Entwicklungs-Workflow');
  const lblMatters = useT('Why This Matters', 'Warum das wichtig ist');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '48px 56px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>
          {heading}
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '1rem', marginTop: 8 }}>
          {subtitle}
        </p>
      </div>

      <div className="stagger" style={{ flex: 1, padding: '40px 56px 48px', display: 'flex', flexDirection: 'column', gap: 48, overflow: 'auto' }}>
        {/* Pipeline — horizontal flow */}
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.2)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>
            {lblWorkflow}
          </div>
          <div style={{ display: 'flex', alignItems: 'stretch' }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                <div
                  style={{
                    flex: 1,
                    background: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: 8,
                    padding: '24px 20px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: 'rgba(27,105,212,0.08)',
                      border: '1px solid rgba(27,105,212,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 12px',
                    }}
                  >
                    <step.icon size={18} color="#1B69D4" strokeWidth={1.5} />
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9rem', fontWeight: 700, color: '#fff', marginBottom: 6, letterSpacing: '-0.01em' }}>
                    {step.label}
                  </h4>
                  <p style={{ fontSize: '0.84rem', lineHeight: 1.5, color: 'rgba(255,255,255,0.3)' }}>
                    {step.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight size={16} color="rgba(255,255,255,0.12)" style={{ flexShrink: 0, margin: '0 6px' }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Three value cards — horizontal row */}
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(255,255,255,0.2)', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>
            {lblMatters}
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {principles.map((p, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  background: '#1A1A1A',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderTop: `2px solid ${p.color}`,
                  borderRadius: 8,
                  padding: '28px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                  <p.icon size={20} color={p.color} strokeWidth={1.5} />
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '0.95rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.01em' }}>
                    {p.title}
                  </h4>
                </div>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.35)' }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
