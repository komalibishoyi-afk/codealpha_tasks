import React, { useState } from 'react';
import { Card, CardSm, Label, SectionTitle, ProgressBar, Pill, ActivityRing, Grid2 } from '../components/UI';

const weekData = [
  { day: 'M', steps: 7200,  pct: 62 },
  { day: 'T', steps: 9100,  pct: 78 },
  { day: 'W', steps: 11200, pct: 96 },
  { day: 'T', steps: 8400,  pct: 72 },
  { day: 'F', steps: 10200, pct: 88 },
  { day: 'S', steps: 5500,  pct: 47 },
  { day: 'S', steps: 7402,  pct: 64, today: true },
];

export default function DashboardScreen({ onNavigate }) {
  const [water, setWater] = useState(1.4);

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0 14px' }}>
        <div>
          <div style={{ fontSize: 12, color: '#8A8880', fontWeight: 400 }}>Good morning,</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#1E1C18', letterSpacing: '-0.4px' }}>Alex 👋</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4A7A40' }}></div>
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            background: '#D6D1C4', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: 15, fontWeight: 600, color: '#5A5650',
          }}>AK</div>
        </div>
      </div>

      {/* Activity rings */}
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <div>
            <SectionTitle style={{ marginBottom: 2 }}>Today's activity</SectionTitle>
            <div style={{ fontSize: 12, color: '#8A8880' }}>Thursday, 12 June</div>
          </div>
          <Pill color="green"><i className="ti ti-flame" style={{ fontSize: 11 }}></i> On track</Pill>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}>
          <ActivityRing percent={74} color="#4A5830" sublabel="steps" value="7,402" unit="/ 10k steps" />
          <ActivityRing percent={60} color="#B8A060" sublabel="cals"  value="1,284" unit="/ 2,100 kcal" />
          <ActivityRing percent={50} color="#3A4A6A" sublabel="mins"  value="23 min" unit="/ 45 min" />
        </div>
      </Card>

      {/* Stats */}
      <Grid2>
        <CardSm>
          <Label>Distance</Label>
          <div style={{ fontSize: 20, fontWeight: 600, color: '#1E1C18' }}>5.2 <span style={{ fontSize: 12, color: '#8A8880', fontWeight: 400 }}>km</span></div>
          <ProgressBar value={52} color="#4A5830" style={{ marginTop: 8 }} />
          <div style={{ fontSize: 10, color: '#8A8880', marginTop: 4 }}>Goal: 10 km</div>
        </CardSm>
        <CardSm>
          <Label>Water</Label>
          <div style={{ fontSize: 20, fontWeight: 600, color: '#1E1C18' }}>{water.toFixed(1)} <span style={{ fontSize: 12, color: '#8A8880', fontWeight: 400 }}>L</span></div>
          <ProgressBar value={(water / 2.5) * 100} color="#3A4A6A" style={{ marginTop: 8 }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 6 }}>
            <div style={{ fontSize: 10, color: '#8A8880' }}>Goal: 2.5 L</div>
            <button
              onClick={() => setWater(w => Math.min(2.5, parseFloat((w + 0.25).toFixed(2))))}
              style={{ fontSize: 10, padding: '2px 8px', background: '#E8ECF5', color: '#2A3A5A', border: 'none', borderRadius: 6, fontFamily: 'inherit', cursor: 'pointer' }}
            >+250ml</button>
          </div>
        </CardSm>
      </Grid2>

      {/* Weekly chart */}
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <SectionTitle style={{ marginBottom: 0 }}>Weekly steps</SectionTitle>
          <span style={{ fontSize: 11, color: '#4A5830', fontWeight: 500 }}>+12% vs last week</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 5, height: 80 }}>
          {weekData.map((d, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, height: '100%', justifyContent: 'flex-end' }}>
              <div style={{
                width: '100%',
                height: `${d.pct}%`,
                background: d.today ? '#4A5830' : '#D6D2C8',
                borderRadius: '4px 4px 0 0',
                transition: 'height 0.3s ease',
              }} />
              <div style={{ fontSize: 9, color: d.today ? '#2C2A25' : '#9C9991', fontWeight: d.today ? 600 : 400 }}>{d.day}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, paddingTop: 10, borderTop: '0.5px solid #F0EDE6' }}>
          {[['Weekly avg', '8,240'], ['Best day', '11,820'], ['This week', '49,440']].map(([label, val]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: '#8A8880' }}>{label}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#1E1C18' }}>{val}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick log CTA */}
      <div
        onClick={() => onNavigate('workout')}
        style={{
          background: '#2C2A25', borderRadius: 14,
          padding: 14, marginBottom: 10,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          cursor: 'pointer',
        }}
      >
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#F5F2EC', marginBottom: 2 }}>Log today's workout</div>
          <div style={{ fontSize: 12, color: '#8A8478' }}>Stay consistent, reach your goal</div>
        </div>
        <div style={{
          width: 36, height: 36, background: '#F5F2EC',
          borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <i className="ti ti-plus" style={{ fontSize: 18, color: '#2C2A25' }}></i>
        </div>
      </div>
    </div>
  );
}
