import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { Card, CardSm, SectionTitle, Grid2, Pill } from '../components/UI';

const weeklyCalories = [
  { day: 'Mon', cals: 1820 },
  { day: 'Tue', cals: 2100 },
  { day: 'Wed', cals: 2380 },
  { day: 'Thu', cals: 1950 },
  { day: 'Fri', cals: 2240 },
  { day: 'Sat', cals: 1600 },
  { day: 'Sun', cals: 2050 },
];

const weightData = [
  { date: 'Jun 1', weight: 78.4 },
  { date: 'Jun 5', weight: 77.8 },
  { date: 'Jun 8', weight: 77.2 },
  { date: 'Jun 11', weight: 76.0 },
];

const monthlySteps = [
  { week: 'W1', steps: 52000 },
  { week: 'W2', steps: 61000 },
  { week: 'W3', steps: 58000 },
  { week: 'W4', steps: 77400 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#2C2A25', borderRadius: 8, padding: '6px 10px' }}>
        <div style={{ fontSize: 11, color: '#8A8478', marginBottom: 2 }}>{label}</div>
        <div style={{ fontSize: 14, fontWeight: 600, color: '#F5F2EC' }}>{payload[0].value.toLocaleString()}</div>
      </div>
    );
  }
  return null;
};

export default function AnalyticsScreen() {
  const [period, setPeriod] = useState('Week');

  return (
    <div>
      <div style={{ padding: '10px 0 14px' }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#1E1C18', letterSpacing: '-0.4px' }}>Analytics</div>
        <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
          {['Week', 'Month', '3 Months'].map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              style={{
                padding: '5px 14px',
                background: period === p ? '#2C2A25' : 'transparent',
                color: period === p ? '#F5F2EC' : '#8A8880',
                border: period === p ? 'none' : '0.5px solid #D8D5CE',
                borderRadius: 20, fontSize: 11, fontWeight: 500,
                fontFamily: 'inherit', cursor: 'pointer',
              }}
            >{p}</button>
          ))}
        </div>
      </div>

      {/* Calories area chart */}
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
          <div>
            <SectionTitle style={{ marginBottom: 2 }}>Weekly calories</SectionTitle>
            <div style={{ fontSize: 12, color: '#8A8880' }}>June 5 – 11</div>
          </div>
          <Pill color="green"><i className="ti ti-trending-up" style={{ fontSize: 11 }}></i> +8.2%</Pill>
        </div>
        <ResponsiveContainer width="100%" height={110}>
          <AreaChart data={weeklyCalories} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
            <defs>
              <linearGradient id="calGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4A5830" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#4A5830" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="day" tick={{ fontSize: 10, fill: '#9C9991' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: '#9C9991' }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="cals" stroke="#4A5830" strokeWidth={2} fill="url(#calGrad)" dot={false} activeDot={{ r: 4, fill: '#4A5830' }} />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* KPI cards */}
      <Grid2>
        <CardSm>
          <div style={{ fontSize: 11, color: '#9C9991', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 4 }}>Avg active mins</div>
          <div style={{ fontSize: 20, fontWeight: 600, color: '#1E1C18' }}>38 <span style={{ fontSize: 12, color: '#8A8880', fontWeight: 400 }}>min</span></div>
          <div style={{ fontSize: 11, color: '#2E6611', marginTop: 4 }}>↑ +5 min vs last week</div>
        </CardSm>
        <CardSm>
          <div style={{ fontSize: 11, color: '#9C9991', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 4 }}>Total workouts</div>
          <div style={{ fontSize: 20, fontWeight: 600, color: '#1E1C18' }}>6</div>
          <div style={{ fontSize: 11, color: '#2E6611', marginTop: 4 }}>↑ +2 vs last week</div>
        </CardSm>
      </Grid2>

      {/* Monthly steps bar chart */}
      <Card>
        <SectionTitle style={{ marginBottom: 14 }}>Monthly steps</SectionTitle>
        <ResponsiveContainer width="100%" height={100}>
          <BarChart data={monthlySteps} margin={{ top: 0, right: 4, bottom: 0, left: -20 }}>
            <XAxis dataKey="week" tick={{ fontSize: 10, fill: '#9C9991' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: '#9C9991' }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="steps" fill="#B8A882" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Monthly breakdown */}
      <Card>
        <SectionTitle style={{ marginBottom: 4 }}>Monthly performance</SectionTitle>
        {[
          ['Total steps',   '248,400', '+14%', true ],
          ['Calories',      '52,800',  '+8%',  true ],
          ['Active days',   '22 / 30', '−2',   false],
          ['Avg sleep',     '7h 14m',  '+18m', true ],
        ].map(([label, val, trend, up]) => (
          <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: '0.5px solid #F0EDE6' }}>
            <span style={{ fontSize: 13, color: '#5A5650' }}>{label}</span>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#1E1C18' }}>{val}</div>
              <div style={{ fontSize: 11, color: up ? '#2E6611' : '#882020' }}>{trend} vs last month</div>
            </div>
          </div>
        ))}
      </Card>

      {/* Weight trend */}
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <SectionTitle style={{ marginBottom: 0 }}>Weight trend</SectionTitle>
          <span style={{ fontSize: 11, color: '#8A8880' }}>−2.4 kg this month</span>
        </div>
        <ResponsiveContainer width="100%" height={80}>
          <LineChart data={weightData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
            <XAxis dataKey="date" tick={{ fontSize: 10, fill: '#9C9991' }} axisLine={false} tickLine={false} />
            <YAxis domain={[74, 79]} tick={{ fontSize: 10, fill: '#9C9991' }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="weight" stroke="#3A4A6A" strokeWidth={2} strokeDasharray="4 2" dot={{ r: 3, fill: '#3A4A6A', strokeWidth: 0 }} activeDot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, paddingTop: 10, borderTop: '0.5px solid #F0EDE6' }}>
          <div><div style={{ fontSize: 10, color: '#8A8880' }}>Start</div><div style={{ fontSize: 13, fontWeight: 600, color: '#1E1C18' }}>78.4 kg</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: 10, color: '#8A8880' }}>Current</div><div style={{ fontSize: 13, fontWeight: 600, color: '#1E1C18' }}>76.0 kg</div></div>
          <div style={{ textAlign: 'right' }}><div style={{ fontSize: 10, color: '#8A8880' }}>Goal</div><div style={{ fontSize: 13, fontWeight: 600, color: '#4A5830' }}>74.0 kg</div></div>
        </div>
      </Card>
    </div>
  );
}
