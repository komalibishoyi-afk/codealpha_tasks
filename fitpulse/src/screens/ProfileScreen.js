import React, { useState } from 'react';
import { Card, CardSm, SectionTitle, Grid2, Label, Toggle } from '../components/UI';

export default function ProfileScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [editing, setEditing] = useState(false);
  const [weight, setWeight] = useState('76.0');
  const [height, setHeight] = useState('178');

  return (
    <div>
      <div style={{ padding: '10px 0 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#1E1C18', letterSpacing: '-0.4px' }}>Profile</div>
        <button onClick={() => setEditing(e => !e)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <i className={`ti ${editing ? 'ti-check' : 'ti-edit'}`} style={{ fontSize: 20, color: editing ? '#4A5830' : '#8A8880' }}></i>
        </button>
      </div>

      {/* Profile card */}
      <Card style={{ textAlign: 'center', padding: '20px 14px' }}>
        <div style={{
          width: 68, height: 68,
          borderRadius: '50%',
          background: '#D6D1C4',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 10px',
          fontSize: 22, fontWeight: 600, color: '#5A5650',
          border: '2.5px solid #E8E5DE',
        }}>AK</div>
        <div style={{ fontSize: 19, fontWeight: 600, color: '#1E1C18', letterSpacing: '-0.3px' }}>Alex Kumar</div>
        <div style={{ fontSize: 13, color: '#8A8880', marginBottom: 14 }}>Member since Jan 2024</div>
        <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: 14, borderTop: '0.5px solid #F0EDE6' }}>
          {[['247', 'Workouts'], ['18', 'Day streak'], ['9', 'Badges']].map(([val, label]) => (
            <div key={label}>
              <div style={{ fontSize: 20, fontWeight: 700, color: '#1E1C18' }}>{val}</div>
              <div style={{ fontSize: 11, color: '#8A8880' }}>{label}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Body metrics */}
      <SectionTitle>Body metrics</SectionTitle>
      <Grid2>
        <CardSm>
          <Label>Weight</Label>
          {editing
            ? <input style={metricInput} value={weight} onChange={e => setWeight(e.target.value)} />
            : <div style={metricVal}>{weight} <span style={unitStyle}>kg</span></div>
          }
        </CardSm>
        <CardSm>
          <Label>Height</Label>
          {editing
            ? <input style={metricInput} value={height} onChange={e => setHeight(e.target.value)} />
            : <div style={metricVal}>{height} <span style={unitStyle}>cm</span></div>
          }
        </CardSm>
        <CardSm>
          <Label>BMI</Label>
          <div style={metricVal}>24.0</div>
          <span style={{ fontSize: 10, padding: '2px 7px', background: '#EAF3E2', color: '#2E6611', borderRadius: 8, fontWeight: 500 }}>Normal</span>
        </CardSm>
        <CardSm>
          <Label>Body fat</Label>
          <div style={metricVal}>18.4 <span style={unitStyle}>%</span></div>
        </CardSm>
      </Grid2>

      {/* Settings */}
      <SectionTitle>Settings</SectionTitle>
      <Card style={{ padding: 0 }}>
        {[
          {
            icon: 'ti-bell', color: '#4A5830', label: 'Notifications',
            right: <div onClick={() => setNotifications(n => !n)} style={{ cursor: 'pointer' }}><Toggle on={notifications} /></div>,
          },
          {
            icon: 'ti-moon', color: '#3A4A6A', label: 'Dark mode',
            right: <div onClick={() => setDarkMode(n => !n)} style={{ cursor: 'pointer' }}><Toggle on={darkMode} /></div>,
          },
          {
            icon: 'ti-heartbeat', color: '#7A3830', label: 'Health sync',
            right: <span style={{ fontSize: 11, fontWeight: 500, padding: '3px 9px', borderRadius: 20, background: '#EAF3E2', color: '#2E6611' }}>Connected</span>,
          },
          {
            icon: 'ti-shield-check', color: '#5A5650', label: 'Privacy & data',
            right: <i className="ti ti-chevron-right" style={{ fontSize: 16, color: '#C8C5BE' }}></i>,
          },
          {
            icon: 'ti-help', color: '#8A8880', label: 'Help & support',
            right: <i className="ti ti-chevron-right" style={{ fontSize: 16, color: '#C8C5BE' }}></i>,
          },
        ].map((item, i, arr) => (
          <div key={item.label} style={{
            padding: '13px 14px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            borderBottom: i < arr.length - 1 ? '0.5px solid #F0EDE6' : 'none',
            cursor: 'pointer',
          }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <i className={`ti ${item.icon}`} style={{ fontSize: 19, color: item.color }}></i>
              <span style={{ fontSize: 14, color: '#1E1C18' }}>{item.label}</span>
            </div>
            {item.right}
          </div>
        ))}
      </Card>

      {/* App version */}
      <div style={{ textAlign: 'center', margin: '14px 0 8px', fontSize: 11, color: '#B8B5AE' }}>
        FitPulse v1.0.0 · Made with ❤️
      </div>

      <button style={{
        width: '100%', padding: 13,
        background: 'transparent',
        color: '#882020',
        border: '0.5px solid #E8CECE',
        borderRadius: 12,
        fontSize: 15, fontWeight: 500,
        fontFamily: 'inherit', cursor: 'pointer',
        marginBottom: 8,
      }}>
        Sign out
      </button>
    </div>
  );
}

const metricVal = { fontSize: 20, fontWeight: 600, color: '#1E1C18' };
const unitStyle = { fontSize: 12, color: '#8A8880', fontWeight: 400 };
const metricInput = {
  width: '100%', padding: '6px 8px',
  background: '#F5F2EC', border: '0.5px solid #C8C5BE',
  borderRadius: 8, fontSize: 16, fontWeight: 600,
  color: '#1E1C18', fontFamily: 'inherit', outline: 'none',
};
