export function StatCard({ icon: Icon, label, value, change, color = 'teal', iconBg }) {
  const sparkBars = [30, 55, 40, 70, 50, 80, 65];
  const bgStyle = iconBg || `var(--accent-${color}-dim)`;
  const iconColor = `var(--accent-${color})`;

  return (
    <div className="stat-card">
      <div className="stat-card-icon" style={{ background: bgStyle }}>
        <Icon size={22} style={{ color: iconColor }} />
      </div>
      <div className="stat-card-content">
        <div className="stat-card-label">{label}</div>
        <div className="stat-card-value">{value}</div>
        {change && <div className={`stat-card-change ${change.startsWith('-') ? 'negative' : ''}`}>↑ {change}</div>}
      </div>
      <div className="stat-card-sparkline">
        {sparkBars.map((h, i) => (
          <div key={i} className="bar" style={{ height: `${h}%`, background: `var(--accent-${color})` }} />
        ))}
      </div>
    </div>
  );
}

export function PageHeader({ title, titleAccent, subtitle, badgeIcon: BadgeIcon, badgeTitle, badgeText, badgeBg }) {
  return (
    <div className="page-header">
      <div className="page-header-left">
        <h1>{title} <span>{titleAccent}</span></h1>
        <p>{subtitle}</p>
      </div>
      {BadgeIcon && (
        <div className="page-header-badge">
          <div className="page-header-badge-icon" style={{ background: badgeBg || 'var(--accent-teal-dim)' }}>
            <BadgeIcon size={22} style={{ color: 'var(--accent-teal)' }} />
          </div>
          <div>
            <h3>{badgeTitle}</h3>
            <p>{badgeText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export function Card({ icon: Icon, title, subtitle, actions, children, className = '' }) {
  return (
    <div className={`card ${className}`}>
      {(title || actions) && (
        <div className="card-header">
          <div className="card-header-left">
            {Icon && <Icon className="card-header-icon" size={18} />}
            <div>
              {title && <div className="card-title">{title}</div>}
              {subtitle && <div className="card-subtitle">{subtitle}</div>}
            </div>
          </div>
          {actions && <div>{actions}</div>}
        </div>
      )}
      {children}
    </div>
  );
}

export function InsightList({ items }) {
  const colors = ['var(--accent-teal)', 'var(--accent-blue)', 'var(--accent-orange)', 'var(--accent-purple)'];
  return (
    <div className="insight-list">
      {items.map((item, i) => (
        <div key={i} className="insight-item">
          <div className="insight-number" style={{ background: colors[i % colors.length] + '22', color: colors[i % colors.length] }}>
            {i + 1}
          </div>
          <div className="insight-text" dangerouslySetInnerHTML={{ __html: item }} />
        </div>
      ))}
    </div>
  );
}

export function Badge({ color = 'green', children }) {
  return <span className={`badge badge-${color}`}>{children}</span>;
}

export function SegmentBadge({ segment }) {
  const map = {
    'Persuadable': 'green',
    'Sure Thing': 'blue',
    'Sleeping Dog': 'orange',
    'Lost Cause': 'red',
  };
  return <Badge color={map[segment] || 'teal'}>{segment}</Badge>;
}
