import { Bar } from 'react-chartjs-2';
import { Target, Users, TrendingUp, DollarSign, User, MapPin, Calendar, Mail, ArrowRight, Settings, CheckSquare, Zap, Play, BarChart3 } from 'lucide-react';
import { StatCard, PageHeader, Card, Badge, SegmentBadge } from '../components/UIComponents';

export default function Recommendations() {
  const comparisonChart = {
    labels: ['Mens E-Mail', 'Womens E-Mail', 'No E-Mail'],
    datasets: [
      { label: 'Conversion Uplift', data: [12.4, 8.7, 0], backgroundColor: '#00e5a0' },
      { label: 'Spend Uplift', data: [18.2, 11.5, 0], backgroundColor: '#3b82f6' },
    ]
  };

  const tableData = [
    { id: 'CUST_123', segment: 'Persuadable', camp: 'Mens E-Mail', conv: '+12.4%', spend: '+18.2%', roi: 'High' },
    { id: 'CUST_456', segment: 'Sure Thing', camp: 'Mens E-Mail', conv: '+10.1%', spend: '+15.7%', roi: 'High' },
    { id: 'CUST_789', segment: 'Sleeping Dog', camp: 'No E-Mail', conv: '+1.2%', spend: '+2.1%', roi: 'Low' },
    { id: 'CUST_101', segment: 'Lost Cause', camp: 'No E-Mail', conv: '-0.8%', spend: '+0.5%', roi: 'Low' },
  ];

  return (
    <>
      <PageHeader title="Campaign" titleAccent="Recommendations" subtitle="Get personalized campaign recommendations based on causal uplift, business goals, and budget constraints." badgeIcon={Target} badgeTitle="AI-Recommendation Engine" badgeText="Suggests the best campaign for each customer to maximize ROI and conversions." badgeBg="var(--accent-teal-dim)" />

      <div className="stat-cards-row mb-20">
        <StatCard icon={Users} label="Recommended Customers" value="8,945" change="15.3% vs last period" color="teal" />
        <StatCard icon={Target} label="Expected Conversions" value="1,243" change="18.6% vs last period" color="blue" />
        <StatCard icon={DollarSign} label="Expected Incremental Revenue" value="₹1,24,300" change="22.4% vs last period" color="orange" />
        <StatCard icon={TrendingUp} label="Estimated ROI" value="3.8x" change="0.7x vs last period" color="green" />
      </div>

      <div className="grid-3-col-layout mb-20">
        <Card icon={User} title="Selected Customer" actions={<button className="link-action">View Full Profile <ArrowRight size={14}/></button>}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 8px', fontSize: '0.82rem' }}>
            <div style={{ display: 'flex', gap: 8 }}><User size={16} style={{ color: 'var(--text-muted)' }} /><div><div style={{ color: 'var(--text-secondary)' }}>Customer ID</div><div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>CUST_123</div></div></div>
            <div style={{ display: 'flex', gap: 8 }}><MapPin size={16} style={{ color: 'var(--text-muted)' }} /><div><div style={{ color: 'var(--text-secondary)' }}>Zip Code Type</div><div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Urban</div></div></div>
            <div style={{ display: 'flex', gap: 8 }}><Calendar size={16} style={{ color: 'var(--text-muted)' }} /><div><div style={{ color: 'var(--text-secondary)' }}>Recency (Days)</div><div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>10</div></div></div>
            <div style={{ display: 'flex', gap: 8 }}><User size={16} style={{ color: 'var(--text-muted)' }} /><div><div style={{ color: 'var(--text-secondary)' }}>New Customer</div><div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>No</div></div></div>
            <div style={{ display: 'flex', gap: 8 }}><DollarSign size={16} style={{ color: 'var(--text-muted)' }} /><div><div style={{ color: 'var(--text-secondary)' }}>Purchase History ($)</div><div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>100.50</div></div></div>
            <div style={{ display: 'flex', gap: 8 }}><MapPin size={16} style={{ color: 'var(--text-muted)' }} /><div><div style={{ color: 'var(--text-secondary)' }}>Channel</div><div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Web</div></div></div>
            <div style={{ display: 'flex', gap: 8 }}><Mail size={16} style={{ color: 'var(--text-muted)' }} /><div><div style={{ color: 'var(--text-secondary)' }}>History Segment</div><div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Mens E-Mail</div></div></div>
            <div style={{ display: 'flex', gap: 8 }}><Mail size={16} style={{ color: 'var(--text-muted)' }} /><div><div style={{ color: 'var(--text-secondary)' }}>Mens E-Mail (Prev.)</div><div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>1</div></div></div>
            <div style={{ display: 'flex', gap: 8 }}><div style={{ width: 16 }} /><div><div style={{ color: 'var(--text-secondary)' }}>Womens E-Mail (Prev.)</div><div style={{ color: 'var(--text-primary)', fontWeight: 600 }}>0</div></div></div>
          </div>
        </Card>
        
        <Card icon={Zap} title="Top Recommended Campaign" actions={<Badge color="green">Recommended</Badge>}>
          <div style={{ background: 'var(--accent-teal-dim)', border: '1px solid rgba(0,229,160,0.3)', borderRadius: 'var(--radius-md)', padding: 16, marginBottom: 16, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ background: 'var(--accent-teal)', width: 40, height: 40, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Mail size={20} color="#000" /></div>
              <div><div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>Mens E-Mail Campaign</div><div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Highest expected uplift for this customer.</div></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 20 }}>
              <div><div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Conversion Uplift</div><div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-teal)' }}>+12.4%</div></div>
              <div><div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Spend Uplift</div><div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-teal)' }}>+18.2%</div></div>
              <div><div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Expected ROI</div><div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-teal)' }}>High</div></div>
            </div>
            <button className="btn btn-primary" style={{ width: '100%', marginTop: 'auto' }}><Play size={16} /> Apply This Recommendation</button>
          </div>
        </Card>

        <Card icon={TrendingUp} title="Alternative Campaigns" actions={<Settings size={16} className="text-muted" />}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ background: 'var(--bg-primary)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 'var(--radius-md)', padding: 12, position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}><Mail size={16} style={{ color: 'var(--accent-pink)' }} /><span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Womens E-Mail Campaign</span></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                <div><div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Conversion Uplift</div><div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-pink)' }}>+8.7%</div></div>
                <div><div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Spend Uplift</div><div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-orange)' }}>+11.5%</div></div>
                <div><div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Expected ROI</div><div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-orange)' }}>Moderate</div></div>
              </div>
              <ArrowRight size={16} style={{ color: 'var(--text-muted)', position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)' }} />
            </div>
            
            <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-input)', borderRadius: 'var(--radius-md)', padding: 12, position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}><span style={{ width: 16, height: 16, border: '2px solid var(--text-muted)', borderRadius: '50%', display: 'inline-block' }} /><span style={{ fontWeight: 600, fontSize: '0.85rem' }}>No E-Mail (Baseline)</span></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                <div><div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Conversion Uplift</div><div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>0%</div></div>
                <div><div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Spend Uplift</div><div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>0%</div></div>
                <div><div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Expected ROI</div><div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-red)' }}>Low</div></div>
              </div>
              <ArrowRight size={16} style={{ color: 'var(--text-muted)', position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)' }} />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid-3-col-layout mb-20">
        <Card icon={BarChart3} title="Expected Impact Comparison" subtitle="Estimated outcomes for each campaign option.">
          <div className="chart-container"><Bar data={comparisonChart} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#8b97b0', font: { size: 11 }, boxWidth: 12 } } }, scales: { x: { ticks: { color: '#5a6680' }, grid: { color: 'rgba(100,120,150,0.08)' } }, y: { ticks: { color: '#5a6680', callback: v => v + '%' }, grid: { color: 'rgba(100,120,150,0.08)' } } } }} /></div>
        </Card>
        <Card icon={Settings} title="Projected Business Impact" subtitle="Expected incremental results for this customer.">
          <table className="data-table" style={{ marginTop: 10 }}>
            <thead><tr><th>Metric</th><th style={{ textAlign: 'right' }}>Value</th></tr></thead>
            <tbody>
              <tr><td>Baseline Conversion Probability</td><td style={{ textAlign: 'right', fontWeight: 600 }}>12.5%</td></tr>
              <tr><td>Expected Conversion Probability</td><td style={{ textAlign: 'right', fontWeight: 600 }}>24.9%</td></tr>
              <tr><td>Incremental Conversion</td><td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--accent-teal)' }}>+12.4%</td></tr>
              <tr><td>Expected Revenue Lift</td><td style={{ textAlign: 'right', fontWeight: 600 }}>₹100.5</td></tr>
              <tr><td>Estimated Campaign Cost</td><td style={{ textAlign: 'right', fontWeight: 600 }}>₹18.2</td></tr>
              <tr><td style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>Expected ROI</td><td style={{ textAlign: 'right', fontWeight: 800, color: 'var(--accent-teal)' }}>3.8x</td></tr>
            </tbody>
          </table>
        </Card>
        <Card icon={Target} title="Campaign Strategy">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 10 }}>
            <div style={{ display: 'flex', gap: 12, position: 'relative' }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--accent-teal)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0 }}>1</div>
              <div><div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>Target with <span style={{ color: 'var(--accent-teal)' }}>Mens E-Mail</span></div><div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>Send personalized Mens E-Mail campaign to this customer.</div></div>
              <ArrowRight size={14} style={{ position: 'absolute', right: 0, top: 4, color: 'var(--accent-teal)' }} />
            </div>
            <div style={{ display: 'flex', gap: 12, position: 'relative' }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--accent-blue)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0 }}>2</div>
              <div><div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>Optimize Budget Allocation</div><div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>Include this customer in the next campaign batch based on expected ROI.</div></div>
              <ArrowRight size={14} style={{ position: 'absolute', right: 0, top: 4, color: 'var(--accent-teal)' }} />
            </div>
            <div style={{ display: 'flex', gap: 12, position: 'relative' }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--accent-purple)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0 }}>3</div>
              <div><div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: 4 }}>Monitor & Measure</div><div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>Track actual response and update model with new data for better recommendations.</div></div>
              <ArrowRight size={14} style={{ position: 'absolute', right: 0, top: 4, color: 'var(--accent-teal)' }} />
            </div>
          </div>
        </Card>
      </div>

      <Card icon={Users} title="Top Recommended Customers (Sample)" actions={<button className="link-action">View All Recommendations <ArrowRight size={14} /></button>}>
        <table className="data-table">
          <thead><tr><th><CheckSquare size={16} /></th><th>Customer ID</th><th>Segment</th><th>Recommended Campaign</th><th>Conversion Uplift</th><th>Spend Uplift</th><th>Expected ROI</th><th>Action</th></tr></thead>
          <tbody>
            {tableData.map((r, i) => (
              <tr key={r.id}>
                <td><div style={{ width: 16, height: 16, border: `1px solid ${i < 2 ? 'var(--accent-teal)' : 'var(--text-muted)'}`, borderRadius: 4, background: i < 2 ? 'var(--accent-teal)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i < 2 && <span style={{ color: '#000', fontSize: '0.6rem' }}>✓</span>}</div></td>
                <td>{r.id}</td>
                <td><SegmentBadge segment={r.segment} /></td>
                <td>{r.camp}</td>
                <td style={{ color: r.conv.includes('-') ? 'var(--accent-red)' : 'var(--accent-teal)' }}>{r.conv}</td>
                <td style={{ color: r.spend.includes('-') ? 'var(--accent-red)' : 'var(--accent-teal)' }}>{r.spend}</td>
                <td><Badge color={r.roi === 'High' ? 'teal' : 'red'}>{r.roi}</Badge></td>
                <td><button className="btn btn-outline btn-sm">Apply</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
}
