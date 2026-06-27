# FitPulse 🏃

A premium, production-ready fitness tracking mobile app built with React.

## Tech Stack

- React 18
- Recharts (charts & analytics)
- Lucide Icons + Tabler Icons

## Quick Start

### 1. Install Node.js
Download from https://nodejs.org (LTS version recommended)

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

Opens at http://localhost:3000

## Project Structure

```
fitpulse/
├── public/
│   └── index.html
├── src/
│   ├── screens/
│   │   ├── LoginScreen.js       ← Login & signup
│   │   ├── DashboardScreen.js   ← Home with rings & charts
│   │   ├── WorkoutScreen.js     ← Live timer + history
│   │   ├── AnalyticsScreen.js   ← Recharts graphs
│   │   ├── GoalsScreen.js       ← Streaks & badges
│   │   └── ProfileScreen.js     ← Settings & metrics
│   ├── components/
│   │   └── UI.js                ← Shared components
│   ├── App.js                   ← Navigation & layout
│   ├── index.js
│   └── index.css
└── package.json
```

## Features

- ✅ Login / Signup screen
- ✅ Live workout timer (auto-counting)
- ✅ Interactive water tracker (+250ml button)
- ✅ Activity rings (animated SVG)
- ✅ Weekly bar chart & area chart (Recharts)
- ✅ Weight trend line chart
- ✅ Goal progress bars
- ✅ Achievement badge grid
- ✅ Editable profile metrics
- ✅ Toggle switches for settings
- ✅ Log new workout form

## Design System

- **Base**: `#F7F5F0` warm beige
- **Primary**: `#2C2A25` charcoal
- **Accent**: `#4A5830` muted olive
- **Secondary**: `#3A4A6A` subtle navy
- **Font**: Inter (Google Fonts)

## Build for Production

```bash
npm run build
```

Output in `/build` folder — ready for Netlify, Vercel, or any static host.
