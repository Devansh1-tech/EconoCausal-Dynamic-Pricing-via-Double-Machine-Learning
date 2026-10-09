import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, Sparkles, PieChart, Heart, BrainCircuit, Database, FileBarChart, Info, TrendingUp } from 'lucide-react';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/customer-analysis', icon: Users, label: 'Customer Analysis' },
  { to: '/prediction', icon: Sparkles, label: 'Prediction' },
  { to: '/segmentation', icon: PieChart, label: 'Segmentation' },
  { to: '/recommendations', icon: Heart, label: 'Recommendations' },
  { to: '/model-insights', icon: BrainCircuit, label: 'Model Insights' },
  { to: '/data-explorer', icon: Database, label: 'Data Explorer' },
  { to: '/reports', icon: FileBarChart, label: 'Reports' },
  { to: '/about', icon: Info, label: 'About' },
];

export default function Sidebar() {
  const barHeights = [30, 50, 40, 65, 80, 60, 90];

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand-icon">
          <TrendingUp size={28} />
        </div>
        <div className="sidebar-brand-text">
          <h1>EconoCausal</h1>
          <p>Causal AI for Smarter Marketing Decisions</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
          >
            <item.icon className="sidebar-link-icon" size={20} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-promo">
        <h3>Turn Data into Profitable Actions</h3>
        <p>Leverage causal AI to identify high‑value customers, optimize campaigns, and maximize ROI.</p>
        <div className="sidebar-promo-chart">
          {barHeights.map((h, i) => (
            <div key={i} className="sidebar-promo-bar" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </aside>
  );
}
