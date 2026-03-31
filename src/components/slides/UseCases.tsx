import { Truck, Search, MapPin, BarChart3, XCircle, CheckCircle } from 'lucide-react';
import { useT } from '../../i18n/LanguageContext';

export default function UseCases() {
  const useCases = useT(
    [
      { icon: Truck, title: 'Logistics Operations Tracker', canvas: 'Canvas delegation fails on large datasets; no real-time push; map controls are limited', code: 'React + live WebSocket updates, custom map view (Leaflet/MapBox via npm), paginated large datasets natively' },
      { icon: Search, title: 'Field Inspection App', canvas: 'Offline mode is unstable; photo metadata handling is brittle; multi-step forms hit formula complexity limits', code: 'PWA offline-first, native camera API, structured multi-step wizard with full state management and validation' },
      { icon: MapPin, title: 'Driver / Field Worker Companion', canvas: 'Mobile UX is limited; no push notifications; GPS tracking requires custom workarounds', code: 'Mobile-first responsive layout, Geolocation API, background sync, push notification support via web APIs' },
      { icon: BarChart3, title: 'Advanced Reporting Dashboard', canvas: 'Power BI embed is limited; no custom drill-down; chart types restricted to built-in controls', code: 'Full chart library (Recharts, Chart.js, D3) — any visualization. Custom filters, drill-downs, export to PDF' },
    ],
    [
      { icon: Truck, title: 'Logistik-Operations-Tracker', canvas: 'Canvas-Delegation scheitert bei großen Datenmengen; kein Echtzeit-Push; Kartensteuerung ist eingeschränkt', code: 'React + Live-WebSocket-Updates, eigene Kartenansicht (Leaflet/MapBox via npm), native Paginierung großer Datensätze' },
      { icon: Search, title: 'Außendienst-Inspektions-App', canvas: 'Offline-Modus instabil; Foto-Metadaten-Handling fehleranfällig; mehrstufige Formulare stoßen an Formel-Komplexitätsgrenzen', code: 'PWA Offline-First, native Kamera-API, strukturierter Mehrstufen-Wizard mit vollem State Management und Validierung' },
      { icon: MapPin, title: 'Fahrer- / Außendienst-Begleiter', canvas: 'Mobile UX eingeschränkt; keine Push-Benachrichtigungen; GPS-Tracking erfordert Workarounds', code: 'Mobile-First responsives Layout, Geolocation-API, Background Sync, Push-Benachrichtigungen via Web APIs' },
      { icon: BarChart3, title: 'Erweitertes Reporting-Dashboard', canvas: 'Power BI-Einbettung eingeschränkt; kein eigenes Drill-Down; Diagrammtypen auf Built-in-Controls beschränkt', code: 'Volle Diagrammbibliothek (Recharts, Chart.js, D3) — jede Visualisierung. Eigene Filter, Drill-Downs, Export als PDF' },
    ],
  );

  const heading = useT('Real-World Use Cases — Where Code Apps Win', 'Praxisbeispiele — Wo Code Apps überlegen sind');
  const subtitle = useT('Each of these is in your current backlog — each is a poor fit for Canvas Apps', 'Jedes dieser Beispiele ist in Ihrem aktuellen Backlog — und für Canvas Apps ungeeignet');

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

      <div className="stagger" style={{ flex: 1, padding: '28px 56px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, overflow: 'auto', alignContent: 'start' }}>
        {useCases.map((uc, i) => (
          <div
            key={i}
            style={{
              background: '#FAFAFA',
              borderRadius: 8,
              border: '1px solid rgba(0,0,0,0.06)',
              overflow: 'hidden',
            }}
          >
            {/* Card header — BMW black */}
            <div
              style={{
                background: '#1C1C1C',
                color: '#fff',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '0.95rem',
                padding: '14px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                letterSpacing: '-0.01em',
              }}
            >
              <uc.icon size={18} color="rgba(255,255,255,0.5)" strokeWidth={1.5} />
              {uc.title}
            </div>

            {/* Card body */}
            <div style={{ padding: '18px 20px' }}>
              {/* Canvas limitation */}
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0, marginTop: 1 }}>
                  <XCircle size={14} color="#E53935" strokeWidth={1.5} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#E53935', letterSpacing: '0.02em' }}>Canvas:</span>
                </div>
                <span style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.5 }}>{uc.canvas}</span>
              </div>

              <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', margin: '0 0 14px' }} />

              {/* Code App advantage */}
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0, marginTop: 1 }}>
                  <CheckCircle size={14} color="#1DB954" strokeWidth={1.5} />
                  <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#1DB954', letterSpacing: '0.02em' }}>Code App:</span>
                </div>
                <span style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.5 }}>{uc.code}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
