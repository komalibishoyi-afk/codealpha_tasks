import React, { useState, useEffect } from 'react';
import { Card, CardSm, SectionTitle, Grid2, WorkoutIcon } from '../components/UI';

const history = [
  { name: 'Morning Run',   sub: 'Today · 5.2 km',    duration: '32 min', kcal: '312', icon: 'ti-run',      theme: 'olive' },
  { name: 'Upper Body',    sub: 'Yesterday · High',   duration: '48 min', kcal: '380', icon: 'ti-barbell',  theme: 'sand'  },
  { name: 'Lap Swimming',  sub: 'Mon · 1.2 km',       duration: '40 min', kcal: '420', icon: 'ti-swimming', theme: 'navy'  },
  { name: 'Evening Cycle', sub: 'Sun · 18 km',        duration: '55 min', kcal: '510', icon: 'ti-bike',     theme: 'rose'  },
  { name: 'Yoga Flow',     sub: 'Sat · 45 min',       duration: '45 min', kcal: '180', icon: 'ti-heart',    theme: 'olive' },
];

const categories = [
  { name: 'Running',   count: '12 sessions', icon: 'ti-run',      theme: 'olive' },
  { name: 'Strength',  count: '8 sessions',  icon: 'ti-barbell',  theme: 'sand'  },
  { name: 'Swimming',  count: '4 sessions',  icon: 'ti-swimming', theme: 'navy'  },
  { name: 'Cycling',   count: '3 sessions',  icon: 'ti-bike',     theme: 'rose'  },
];

export default function WorkoutScreen() {
  const [active, setActive] = useState(true);
  const [elapsed, setElapsed] = useState(24 * 60 + 18);
  const [paused, setPaused] = useState(false);
  const [showLog, setShowLog] = useState(false);
  const [newWorkout, setNewWorkout] = useState({ type: 'Running', duration: '', notes: '' });

  useEffect(() => {
    if (!active || paused) return;
    const id = setInterval(() => setElapsed(e => e + 1), 1000);
    return () => clearInterval(id);
  }, [active, paused]);

  const fmt = s => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
  const kcal = Math.round(elapsed * 0.17);

  return (
    <div>
      <div style={{ padding: '10px 0 14px' }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#1E1C18', letterSpacing: '-0.4px' }}>Workouts</div>
        <div style={{ fontSize: 13, color: '#8A8880' }}>3 sessions this week</div>
      </div>

      {/* Active session */}
      {active && (
        <div style={{ background: '#2C2A25', borderRadius: 16, padding: 16, marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 11, color: '#8A8478', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 3 }}>Active session</div>
              <div style={{ fontSize: 20, fontWeight: 600, color: '#F5F2EC' }}>Morning Run</div>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 9px', borderRadius: 20, fontSize: 10, fontWeight: 500, background: '#4A5830', color: '#C8D8A8' }}>
              ● Live
            </span>
          </div>
          <div style={{ display: 'flex', gap: 20, marginBottom: 14 }}>
            {[['Duration', fmt(elapsed)], ['Pace', '5:12'], ['Kcal', kcal]].map(([label, val]) => (
              <div key={label}>
                <div style={{ fontSize: 11, color: '#8A8478' }}>{label}</div>
                <div style={{ fontSize: 22, fontWeight: 600, color: '#F5F2EC' }}>{val}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={() => setPaused(p => !p)}
              style={{ flex: 1, padding: 10, background: '#F5F2EC', color: '#2C2A25', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer' }}
            >
              {paused ? 'Resume' : 'Pause'}
            </button>
            <button
              onClick={() => setActive(false)}
              style={{ flex: 1, padding: 10, background: '#7A2020', color: '#F5EAE8', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer' }}
            >
              Finish
            </button>
          </div>
        </div>
      )}

      {/* Log new workout */}
      {!active && (
        <div>
          {!showLog ? (
            <button
              onClick={() => setShowLog(true)}
              style={{ width: '100%', padding: 14, background: '#2C2A25', color: '#F5F2EC', border: 'none', borderRadius: 14, fontSize: 15, fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer', marginBottom: 10 }}
            >
              <i className="ti ti-plus" style={{ marginRight: 8 }}></i> Log new workout
            </button>
          ) : (
            <Card>
              <SectionTitle>Log workout</SectionTitle>
              <select
                value={newWorkout.type}
                onChange={e => setNewWorkout(w => ({ ...w, type: e.target.value }))}
                style={inputStyle}
              >
                {['Running', 'Strength', 'Swimming', 'Cycling', 'Yoga', 'HIIT'].map(t => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <input
                style={inputStyle}
                type="number"
                placeholder="Duration (minutes)"
                value={newWorkout.duration}
                onChange={e => setNewWorkout(w => ({ ...w, duration: e.target.value }))}
              />
              <input
                style={{ ...inputStyle, marginBottom: 12 }}
                type="text"
                placeholder="Notes (optional)"
                value={newWorkout.notes}
                onChange={e => setNewWorkout(w => ({ ...w, notes: e.target.value }))}
              />
              <div style={{ display: 'flex', gap: 8 }}>
                <button onClick={() => setShowLog(false)} style={{ flex: 1, padding: 12, background: '#F0EDE6', color: '#5A5650', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer' }}>Cancel</button>
                <button onClick={() => setShowLog(false)} style={{ flex: 1, padding: 12, background: '#2C2A25', color: '#F5F2EC', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer' }}>Save</button>
              </div>
            </Card>
          )}
        </div>
      )}

      {/* Categories */}
      <SectionTitle>Exercise categories</SectionTitle>
      <Grid2>
        {categories.map(c => (
          <CardSm key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <WorkoutIcon icon={c.icon} theme={c.theme} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#1E1C18' }}>{c.name}</div>
              <div style={{ fontSize: 11, color: '#8A8880' }}>{c.count}</div>
            </div>
          </CardSm>
        ))}
      </Grid2>

      {/* History */}
      <SectionTitle>Recent workouts</SectionTitle>
      <Card style={{ padding: '4px 14px' }}>
        {history.map((w, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '10px 0',
            borderBottom: i < history.length - 1 ? '0.5px solid #F0EDE6' : 'none',
          }}>
            <WorkoutIcon icon={w.icon} theme={w.theme} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#1E1C18' }}>{w.name}</div>
              <div style={{ fontSize: 11, color: '#8A8880' }}>{w.sub}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#1E1C18' }}>{w.duration}</div>
              <div style={{ fontSize: 11, color: '#8A8880' }}>{w.kcal} kcal</div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px 12px',
  background: '#F7F5F0',
  border: '0.5px solid #D8D5CE',
  borderRadius: 10,
  fontSize: 14,
  color: '#1E1C18',
  outline: 'none',
  marginBottom: 10,
  fontFamily: 'inherit',
};
