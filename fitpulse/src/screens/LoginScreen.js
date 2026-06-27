import React, { useState } from 'react';
import { Card, CardSm } from '../components/UI';

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('alex@email.com');
  const [password, setPassword] = useState('');
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div style={{ padding: '8px 0' }}>
      {/* Hero */}
      <div style={{
        background: '#2C2A25', borderRadius: 20,
        padding: '28px 20px', marginBottom: 16, textAlign: 'center',
      }}>
        <div style={{
          width: 56, height: 56,
          background: '#F5F2EC', borderRadius: 16,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 14px',
        }}>
          <i className="ti ti-heart-rate-monitor" style={{ fontSize: 26, color: '#2C2A25' }}></i>
        </div>
        <div style={{ fontSize: 26, fontWeight: 700, color: '#F5F2EC', letterSpacing: '-0.5px', marginBottom: 4 }}>FitPulse</div>
        <div style={{ fontSize: 13, color: '#8A8478', fontWeight: 400 }}>Your personal health companion</div>
      </div>

      {/* Form */}
      <Card>
        <div style={{ fontSize: 11, color: '#9C9991', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 14 }}>
          {showSignup ? 'Create account' : 'Welcome back'}
        </div>

        {showSignup && (
          <input
            style={inputStyle}
            type="text"
            placeholder="Full name"
          />
        )}

        <input
          style={inputStyle}
          type="email"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          style={{ ...inputStyle, marginBottom: 4 }}
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        {!showSignup && (
          <div style={{ textAlign: 'right', marginBottom: 14 }}>
            <span style={{ fontSize: 12, color: '#6B7A4A', fontWeight: 500, cursor: 'pointer' }}>Forgot password?</span>
          </div>
        )}
        {showSignup && <div style={{ marginBottom: 10 }} />}

        <button onClick={onLogin} style={btnPrimary}>
          {showSignup ? 'Create account' : 'Sign in'}
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '14px 0' }}>
          <div style={{ flex: 1, height: '0.5px', background: '#E8E5DE' }}></div>
          <span style={{ fontSize: 11, color: '#9C9991' }}>or continue with</span>
          <div style={{ flex: 1, height: '0.5px', background: '#E8E5DE' }}></div>
        </div>

        <button onClick={onLogin} style={btnOutline}>
          <i className="ti ti-brand-apple" style={{ fontSize: 16 }}></i>
          <span style={{ marginLeft: 8 }}>Apple</span>
        </button>
      </Card>

      <div style={{ textAlign: 'center', marginTop: 14 }}>
        <span style={{ fontSize: 13, color: '#8A8880' }}>
          {showSignup ? 'Already have an account? ' : "Don't have an account? "}
        </span>
        <span
          onClick={() => setShowSignup(s => !s)}
          style={{ fontSize: 13, color: '#4A5830', fontWeight: 500, cursor: 'pointer' }}
        >
          {showSignup ? 'Sign in' : 'Create one'}
        </span>
      </div>

      {/* Feature highlights */}
      {!showSignup && (
        <div style={{ marginTop: 18 }}>
          <CardSm style={{ background: '#F7F5F0' }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: '#1E1C18', marginBottom: 10 }}>What you'll get</div>
            {[
              { icon: 'ti-chart-line', color: '#4A5830', text: 'Smart activity tracking & insights' },
              { icon: 'ti-trophy', color: '#7A6840', text: 'Achievement milestones & streaks' },
              { icon: 'ti-target', color: '#2A3A5A', text: 'Personalised goal management' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: i < 2 ? 8 : 0 }}>
                <i className={`ti ${item.icon}`} style={{ fontSize: 14, color: item.color }}></i>
                <span style={{ fontSize: 12, color: '#5A5650' }}>{item.text}</span>
              </div>
            ))}
          </CardSm>
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  background: '#FFFFFF',
  border: '0.5px solid #D8D5CE',
  borderRadius: 10,
  fontSize: 14,
  color: '#1E1C18',
  outline: 'none',
  marginBottom: 10,
  fontFamily: 'inherit',
};

const btnPrimary = {
  width: '100%',
  padding: 13,
  background: '#2C2A25',
  color: '#F5F2EC',
  border: 'none',
  borderRadius: 12,
  fontSize: 15,
  fontWeight: 500,
  fontFamily: 'inherit',
  cursor: 'pointer',
};

const btnOutline = {
  width: '100%',
  padding: 13,
  background: 'transparent',
  color: '#2C2A25',
  border: '0.5px solid #C8C5BE',
  borderRadius: 12,
  fontSize: 15,
  fontWeight: 500,
  fontFamily: 'inherit',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
