import { Search, Bell, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="header-search">
        <Search className="header-search-icon" size={16} />
        <input type="text" placeholder="Search customers, segments, or campaigns..." />
      </div>
      <div className="header-actions">
        <button className="header-notification">
          <Bell size={18} />
          <span className="header-notification-badge" />
        </button>
        <button className="header-profile">
          <div className="header-profile-avatar">DU</div>
          <span className="header-profile-name">Demo User</span>
          <ChevronDown size={14} />
        </button>
      </div>
    </header>
  );
}
