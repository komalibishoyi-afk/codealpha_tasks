import React from 'react';

export function Card({ children, style = {} }) {
  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: 16,
      padding: 14,
      marginBottom: 10,
      border: '0.5px solid #E8E5DE',
      ...style
    }}>
      {children}
    </div>
  );
}

export function CardSm({ children, style = {} }) {
  return (
    <div style={{
      background: '#FFFFFF',
      borderRadius: 12,
      padding: 12,
      border: '0.5px solid #E8E5DE',
      ...style
    }}>
      {children}
    </div>
  );
}

export function Label({ children }) {
  return (
    <div style={{ fontSize: 11, color: '#9C9991', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 4 }}>
      {children}
    </div>
  );
}

export function SectionTitle({ children, style = {} }) {
  return (
    <div style={{ fontSize: 16, fontWeight: 600, color: '#1E1C18', marginBottom: 10, ...style }}>
      {children}
    </div>
  );
}

export function ProgressBar({ value, color = '#4A5830', style = {} }) {
  return (
    <div style={{ background: '#F0EDE6', borderRadius: 8, height: 6, overflow: 'hidden', ...style }}>
      <div style={{ width: `${Math.min(value, 100)}%`, height: '100%', borderRadius: 8, background: color, transition: 'width 0.4s ease' }} />
    </div>
  );
}

export function Pill({ children, color = 'green' }) {
  const map = {
    green: { bg: '#EAF3E2', text: '#2E6611' },
    amber: { bg: '#FDF3E0', text: '#7A5010' },
    blue:  { bg: '#E8F0FA', text: '#1A4A8A' },
    red:   { bg: '#FAEAEA', text: '#7A2020' },
  };
  const c = map[color] || map.green;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      padding: '3px 9px', borderRadius: 20,
      fontSize: 11, fontWeight: 500,
      background: c.bg, color: c.text,
    }}>
      {children}
    </span>
  );
}

export function ActivityRing({ percent, color, size = 72, strokeWidth = 7, label, sublabel, value, unit }) {
  const r = (size - strokeWidth) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - Math.min(percent, 100) / 100);

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#F0EDE6" strokeWidth={strokeWidth} />
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={strokeWidth}
            strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round" />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#1E1C18' }}>{percent}%</span>
          <span style={{ fontSize: 9, color: '#8A8880' }}>{sublabel}</span>
        </div>
      </div>
      <div style={{ marginTop: 6, fontSize: 13, fontWeight: 500, color: '#1E1C18' }}>{value}</div>
      <div style={{ fontSize: 10, color: '#8A8880' }}>{unit}</div>
    </div>
  );
}

export function WorkoutIcon({ icon, theme = 'olive' }) {
  const themes = {
    olive: { bg: '#EEF0E8', color: '#4A5830' },
    sand:  { bg: '#F5F1E8', color: '#7A6840' },
    navy:  { bg: '#E8ECF5', color: '#2A3A5A' },
    rose:  { bg: '#F5EAE8', color: '#7A3830' },
  };
  const t = themes[theme] || themes.olive;
  return (
    <div style={{ width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: t.bg }}>
      <i className={`ti ${icon}`} style={{ fontSize: 18, color: t.color }}></i>
    </div>
  );
}

export function Grid2({ children, style = {} }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 10, ...style }}>
      {children}
    </div>
  );
}

export function Divider() {
  return <div style={{ height: '0.5px', background: '#EAE7E0', margin: '10px 0' }} />;
}

export function Toggle({ on }) {
  return (
    <div style={{
      width: 38, height: 22,
      background: on ? '#4A5830' : '#D8D5CE',
      borderRadius: 11, position: 'relative',
      transition: 'background 0.2s',
    }}>
      <div style={{
        width: 18, height: 18,
        background: '#FFFFFF',
        borderRadius: '50%',
        position: 'absolute',
        top: 2,
        left: on ? 'auto' : 2,
        right: on ? 2 : 'auto',
        transition: 'all 0.2s',
      }} />
    </div>
  );
}
