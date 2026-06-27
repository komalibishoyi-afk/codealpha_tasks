import React, { useState } from 'react';
import { Card, CardSm, SectionTitle, ProgressBar } from '../components/UI';

const badges = [
  { icon: 'ti-trophy',  theme: { bg: '#FAF0D0', color: '#8A6810' }, label: 'First 10k',   status: 'Unlocked', locked: false },
  { icon: 'ti-flame',   theme: { bg: '#E0F0EC', color: '#1A5A48' }, label: '7 Day Streak', status: 'Unlocked', locked: false },
  { icon: 'ti-run',     theme: { bg: '#F0EEE8', color: '#5A5650' }, label: '50 km Club',  status: 'Unlocked', locked: false },
  { icon: 'ti-star',    theme: { bg: '#E0E8F5', color: '#1A2A5A' }, label: 'Century Run', status: '53% done', locked: true },
  { icon: 'ti-barbell', theme: { bg: '#F5EAE8', color: '#7A3830' }, label: 'Iron Will',   status: '30% done', locked: true },
  { icon: 'ti-heart',   theme: { bg: '#EEF0E8', color: '#4A5830' }, label: 'Heart Hero',  status: '10% done', locked: true },
];

const goals = [
  { name: 'Weight loss — 74 kg', pct: 60, detail: '−2.4 kg of −4 kg · Est. Jul 28', color: '#4A5830' },
  { name: 'Run 100 km / month',  pct: 47, detail: '47 km of 100 km',                color: '#3A4A6A' },
  { name: '10,000 steps daily',  pct: 83, detail: '20 of 24 days this month',        color: '#B8A060' },
];

export default function GoalsScreen() {
  const [streak] = useState(18);

  const days = Array.from({ length: 7 }, (_, i) => i < 6);

  return (
    <div>
      <div style={{ padding: '10px 0 14px' }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#1E1C18', letterSpacing: '-0.4px' }}>Goals & Achievements</div>
      </div>

      {/* Streak card */}
      <div style={{ background: '#F5F1E8', borderRadius: 16, padding: 16, marginBottom: 10, border: '0.5px solid #E8E0CC' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 11, color: '#9C9991', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 4 }}>Current streak</div>
            <div style={{ fontSize: 40, fontWeight: 700, color: '#1E1C18', letterSpacing: '-1.5px', lineHeight: 1 }}>{streak}</div>
            <div style={{ fontSize: 13, color: '#7A6840', fontWeight: 500, marginTop: 4 }}>consecutive active days</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36 }}>🔥</div>
            <div style={{ fontSize: 11, color: '#8A7040', fontWeight: 500, marginTop: 2 }}>Best: 24 days</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 5, marginTop: 14 }}>
          {days.map((active, i) => (
            <div key={i} style={{ flex: 1, height: 5, background: active ? '#B89040' : '#D6C890', borderRadius: 3, opacity: active ? 1 : 0.5 }} />
          ))}
        </div>
        <div style={{ fontSize: 10, color: '#8A7040', marginTop: 6 }}>6 of 7 days this week</div>
      </div>

      {/* Active goals */}
      <SectionTitle>Active goals</SectionTitle>
      <Card>
        {goals.map((g, i) => (
          <div key={i} style={{ marginBottom: i < goals.length - 1 ? 14 : 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: '#2C2A25' }}>{g.name}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: g.color }}>{g.pct}%</span>
            </div>
            <ProgressBar value={g.pct} color={g.color} />
            <div style={{ fontSize: 11, color: '#8A8880', marginTop: 4 }}>{g.detail}</div>
          </div>
        ))}
      </Card>

      {/* Add goal */}
      <button style={{
        width: '100%', padding: 12,
        background: 'transparent',
        color: '#4A5830',
        border: '0.5px dashed #A8B890',
        borderRadius: 12,
        fontSize: 13, fontWeight: 500,
        fontFamily: 'inherit', cursor: 'pointer',
        marginBottom: 16,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
      }}>
        <i className="ti ti-plus" style={{ fontSize: 14 }}></i> Add new goal
      </button>

      {/* Achievements */}
      <SectionTitle>Achievements</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 16 }}>
        {badges.map((b, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            padding: '12px 8px',
            background: '#F5F2EC',
            borderRadius: 12, border: '0.5px solid #E8E5DE',
            opacity: b.locked ? 0.5 : 1,
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: '50%',
              background: b.theme.bg, color: b.theme.color,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <i className={`ti ${b.icon}`} style={{ fontSize: 16 }}></i>
            </div>
            <div style={{ fontSize: 10, fontWeight: 500, color: '#1E1C18', textAlign: 'center', lineHeight: 1.3 }}>{b.label}</div>
            <div style={{ fontSize: 9, color: b.locked ? '#8A8880' : '#4A5830' }}>{b.status}</div>
          </div>
        ))}
      </div>

      {/* Next milestone */}
      <CardSm style={{ background: '#E8ECF5', borderColor: '#CCD4E8' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#E0E8F5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <i className="ti ti-lock" style={{ fontSize: 17, color: '#1A2A5A' }}></i>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 500, color: '#1E1C18' }}>Century Runner</div>
            <div style={{ fontSize: 11, color: '#5A6880' }}>Run 100 km total · 53 / 100 km</div>
            <ProgressBar value={53} color="#3A4A6A" style={{ marginTop: 6 }} />
          </div>
        </div>
      </CardSm>
    </div>
  );
}
