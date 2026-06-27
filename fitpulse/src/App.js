import React, { useState } from 'react';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import GoalsScreen from './screens/GoalsScreen';
import ProfileScreen from './screens/ProfileScreen';

const NAV = [
  { id: 'dashboard', icon: 'ti-home', label: 'Home' },
  { id: 'workout',   icon: 'ti-barbell', label: 'Workout' },
  { id: 'analytics', icon: 'ti-chart-line', label: 'Analytics' },
  { id: 'goals',     icon: 'ti-trophy', label: 'Goals' },
  { id: 'profile',   icon: 'ti-user', label: 'Profile' },
];

const SCREENS = {
  dashboard: DashboardScreen,
  workout:   WorkoutScreen,
  analytics: AnalyticsScreen,
  goals:     GoalsScreen,
  profile:   ProfileScreen,
};

export default function App() {
  const [auth, setAuth] = useState(false);
  const [screen, setScreen] = useState('dashboard');
  const Screen = SCREENS[screen];

  if (!auth) return <LoginScreen onLogin={() => setAuth(true)} />;

  return (
    <div style={styles.phone}>
      {/* Status bar */}
      <div style={styles.statusBar}>
        <span style={styles.statusTime}>9:41</span>
        <div style={styles.statusIcons}>
          <i className="ti ti-wifi" style={styles.statusIcon}></i>
          <i className="ti ti-battery-2" style={styles.statusIcon}></i>
        </div>
      </div>

      {/* Screen content */}
      <div style={styles.screenWrap}>
        <Screen onNavigate={setScreen} />
      </div>

      {/* Bottom nav */}
      <div style={styles.bottomNav}>
        {NAV.map(n => (
          <button key={n.id} onClick={() => setScreen(n.id)} style={styles.navBtn}>
            <i className={`ti ${n.icon}`} style={{ fontSize: 22, color: screen === n.id ? '#2C2A25' : '#A8A59E' }}></i>
            <span style={{ fontSize: 9, fontWeight: 500, color: screen === n.id ? '#2C2A25' : '#A8A59E', marginTop: 2 }}>{n.label}</span>
            {screen === n.id && <div style={styles.navDot}></div>}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  phone: {
    background: '#F7F5F0',
    borderRadius: 32,
    overflow: 'hidden',
    border: '0.5px solid #D8D5CE',
    minHeight: 750,
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 8px 40px rgba(0,0,0,0.10)',
  },
  statusBar: {
    background: '#F7F5F0',
    padding: '10px 20px 6px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexShrink: 0,
  },
  statusTime: { fontSize: 13, fontWeight: 600, color: '#2C2A25' },
  statusIcons: { display: 'flex', gap: 4, alignItems: 'center' },
  statusIcon: { fontSize: 13, color: '#2C2A25' },
  screenWrap: {
    flex: 1,
    overflowY: 'auto',
    padding: '0 16px 16px',
  },
  bottomNav: {
    background: '#F7F5F0',
    borderTop: '0.5px solid #E0DDD6',
    padding: '10px 0 20px',
    display: 'flex',
    justifyContent: 'space-around',
    flexShrink: 0,
  },
  navBtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'transparent',
    border: 'none',
    padding: '0 12px',
    gap: 2,
  },
  navDot: {
    width: 4, height: 4,
    borderRadius: '50%',
    background: '#2C2A25',
    marginTop: 2,
  },
};
