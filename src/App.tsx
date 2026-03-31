import { useState, useEffect, useCallback } from 'react';
import './styles/slides.css';
import { LanguageProvider } from './i18n/LanguageContext';
import bmwLogo from './assets/BMWLogo.svg';
import p3Logo from './assets/P3logo.svg';
import Sidebar from './components/Sidebar';
import SlideNav from './components/SlideNav';
import TitleSlide from './components/slides/TitleSlide';
import WhyNow from './components/slides/WhyNow';
import WhatAreCodeApps from './components/slides/WhatAreCodeApps';
import CanvasVsCode from './components/slides/CanvasVsCode';
import UseCases from './components/slides/UseCases';
import RepoModel from './components/slides/RepoModel';
import RiskMitigation from './components/slides/RiskMitigation';
import Proposal from './components/slides/Proposal';
import { slides } from './data/slideContent';

const slideComponents = [
  { Component: TitleSlide, theme: 'dark' },
  { Component: WhatAreCodeApps, theme: 'dark' },
  { Component: WhyNow, theme: 'dark' },
  { Component: CanvasVsCode, theme: 'light' },
  { Component: UseCases, theme: 'light' },
  { Component: RepoModel, theme: 'dark' },
  { Component: RiskMitigation, theme: 'light' },
  { Component: Proposal, theme: 'dark' },
];

/* ── Loading Screen ── */
function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2200;
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased * 100);

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setFadeOut(true);
        setTimeout(onDone, 600);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.6s cubic-bezier(0.25,0.1,0.25,1)',
      }}
    >
      {/* BMW Logo */}
      <img
        src={bmwLogo}
        alt="BMW"
        style={{
          width: 72,
          height: 72,
          marginBottom: 48,
          opacity: progress > 5 ? 1 : 0,
          transform: progress > 5 ? 'scale(1)' : 'scale(0.9)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      />

      {/* Title */}
      <div
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: '0.6rem',
          letterSpacing: 6,
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)',
          marginBottom: 32,
          opacity: progress > 15 ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      >
        Power Apps Code Apps
      </div>

      {/* Progress bar track */}
      <div
        style={{
          width: 200,
          height: 1,
          background: 'rgba(255,255,255,0.08)',
          borderRadius: 1,
          overflow: 'hidden',
        }}
      >
        {/* Progress bar fill */}
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'rgba(255,255,255,0.5)',
            borderRadius: 1,
            transition: 'width 0.1s linear',
          }}
        />
      </div>

      {/* P3 Group branding */}
      <div
        style={{
          position: 'absolute',
          bottom: 40,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          opacity: progress > 30 ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      >
        <img
          src={p3Logo}
          alt="P3 Group"
          style={{ height: 16, opacity: 0.2 }}
        />
        <span
          style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: '0.55rem',
            letterSpacing: 5,
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.12)',
          }}
        >
          Digital Solutions
        </span>
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);

  const handleLoadingDone = useCallback(() => setLoading(false), []);

  const goTo = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) setCurrent(index);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (loading) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev, loading]);

  if (loading) {
    return <LoadingScreen onDone={handleLoadingDone} />;
  }

  return (
    <div className="app-layout">
      <Sidebar current={current} onSelect={goTo} />

      <div className="slides-container">
        {slideComponents.map(({ Component, theme }, i) => (
          <div
            key={i}
            className={`slide slide--${theme} ${i === current ? 'active' : ''}`}
          >
            <Component />
          </div>
        ))}
      </div>

      <SlideNav current={current} onPrev={prev} onNext={next} />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}
