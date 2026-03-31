import { useState } from 'react';
import { ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { slides } from '../data/slideContent';
import { useLanguage } from '../i18n/LanguageContext';
import bmwLogo from '../assets/BMWLogo.svg';

interface SidebarProps {
  current: number;
  onSelect: (index: number) => void;
}

export default function Sidebar({ current, onSelect }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const { lang, toggle } = useLanguage();

  return (
    <nav
      style={{
        width: collapsed ? 56 : 240,
        minWidth: collapsed ? 56 : 240,
        background: '#000000',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 0',
        overflow: 'hidden',
        transition: 'width 0.3s cubic-bezier(0.25,0.1,0.25,1), min-width 0.3s cubic-bezier(0.25,0.1,0.25,1)',
        position: 'relative',
      }}
    >
      {/* Logo area */}
      <div style={{ padding: collapsed ? '0 0 20px' : '0 24px 20px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: 12, alignItems: collapsed ? 'center' : 'flex-start', transition: 'padding 0.3s ease' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'space-between', width: '100%', padding: collapsed ? '0' : '0' }}>
          <img
            src={bmwLogo}
            alt="BMW"
            style={{ width: collapsed ? 32 : 40, height: collapsed ? 32 : 40, transition: 'width 0.3s ease, height 0.3s ease' }}
          />
          {!collapsed && (
            <button
              onClick={() => setCollapsed(true)}
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
                color: 'rgba(255,255,255,0.3)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                padding: 0,
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.3)';
              }}
            >
              <ChevronLeft size={14} />
            </button>
          )}
        </div>
        {collapsed && (
          <button
            onClick={() => setCollapsed(false)}
            style={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.03)',
              color: 'rgba(255,255,255,0.3)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              padding: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              e.currentTarget.style.color = 'rgba(255,255,255,0.3)';
            }}
          >
            <ChevronRight size={14} />
          </button>
        )}
      </div>

      {/* Slide list */}
      <div style={{ flex: 1, paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 0 }}>
        {slides.map((slide, i) => {
          const isActive = i === current;
          return (
            <button
              key={slide.id}
              onClick={() => onSelect(i)}
              title={collapsed ? slide.title[lang] : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: collapsed ? '11px 0' : '11px 24px',
                justifyContent: collapsed ? 'center' : 'flex-start',
                background: isActive ? 'rgba(255,255,255,0.04)' : 'transparent',
                border: 'none',
                borderLeft: isActive ? '2px solid #FFFFFF' : '2px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.25,0.1,0.25,1)',
                textAlign: 'left',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.background = isActive ? 'rgba(255,255,255,0.04)' : 'transparent';
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: collapsed ? '0.7rem' : '0.65rem',
                  fontWeight: 600,
                  color: isActive ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.15)',
                  width: 16,
                  flexShrink: 0,
                  letterSpacing: '0.02em',
                  textAlign: 'center',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              {!collapsed && (
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.75rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.3)',
                    transition: 'color 0.2s cubic-bezier(0.25,0.1,0.25,1)',
                    lineHeight: 1.35,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                  }}
                >
                  {slide.shortTitle[lang]}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Language toggle + Counter */}
      <div
        style={{
          padding: '16px 24px 0',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <button
          onClick={toggle}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: collapsed ? '6px' : '6px 12px',
            borderRadius: 6,
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.03)',
            color: 'rgba(255,255,255,0.4)',
            cursor: 'pointer',
            fontSize: '0.7rem',
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            letterSpacing: '0.04em',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
            e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
            e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
          }}
        >
          <Globe size={13} />
          {!collapsed && (lang === 'en' ? 'DE' : 'EN')}
        </button>
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.7rem',
            fontWeight: 600,
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: '0.1em',
          }}
        >
          {collapsed ? `${current + 1}` : `${current + 1} / ${slides.length}`}
        </span>
      </div>
    </nav>
  );
}
