import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Users, Mail, ShoppingCart, DollarSign, BarChart3, PieChart, TrendingUp, Target, ArrowRight, Lightbulb, Eye } from 'lucide-react';
import { StatCard, PageHeader, Card, InsightList, Badge, SegmentBadge } from '../components/UIComponents';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Tooltip, Legend);

const chartDefaults = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: '#8b97b0', font: { size: 11, family: 'Inter' }, boxWidth: 12, padding: 16 } },
    tooltip: { backgroundColor: '#1a2340', titleColor: '#e8ecf4', bodyColor: '#8b97b0', borderColor: 'rgba(0,229,160,0.2)', borderWidth: 1, cornerRadius: 8, padding: 10 }
  },
  scales: {
    x: { ticks: { color: '#5a6680', font: { size: 11 } }, grid: { color: 'rgba(100,120,150,0.08)' }, border: { color: 'rgba(100,120,150,0.15)' } },
    y: { ticks: { color: '#5a6680', font: { size: 11 } }, grid: { color: 'rgba(100,120,150,0.08)' }, border: { display: false } }
  }
};

export default function Dashboard() {
  const campaignData = {
    labels: ['Mens E-Mail', 'Womens E-Mail', 'No E-Mail (Baseline)'],
    datasets: [
      { label: 'Conversion Uplift', data: [12.4, 8.7, 0], backgroundColor: '#00e5a0' },
      { label: 'Spend Uplift', data: [18.2, 11.5, 0], backgroundColor: '#3b82f6' },
      { label: 'Revenue Uplift', data: [24.1, 16.3, 0], backgroundColor: '#f97316' },
    ]
  };

  const segmentDonut = {
    labels: ['Persuadable', 'Sure Thing', 'Sleeping Dog', 'Lost Cause'],
    datasets: [{
      data: [21932, 18012, 14298, 9882],
      backgroundColor: ['#00e5a0', '#3b82f6', '#f97316', '#ef4444'],
      borderWidth: 0,
      hoverOffset: 6,
    }]
  };

  const roiData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'ROI',
      data: [2.1, 2.8, 3.1, 3.4, 3.6, 3.8],
      borderColor: '#00e5a0',
      backgroundColor: 'rgba(0, 229, 160, 0.1)',
      tension: 0.4,
      fill: true,
      pointRadius: 3,
      pointBackgroundColor: '#00e5a0',
    }]
  };

  const topCustomers = [
    { id: 'CUST_1045', segment: 'Persuadable', uplift: '+28.4%', roi: '5.2x', campaign: 'Mens E-Mail' },
    { id: 'CUST_2231', segment: 'Persuadable', uplift: '+26.7%', roi: '4.9x', campaign: 'Mens E-Mail' },
    { id: 'CUST_0876', segment: 'Sure Thing', uplift: '+18.2%', roi: '3.1x', campaign: 'Womens E-Mail' },
    { id: 'CUST_9910', segment: 'Persuadable', uplift: '+17.5%', roi: '3.8x', campaign: 'Mens E-Mail' },
    { id: 'CUST_4421', segment: 'Sure Thing', uplift: '+15.9%', roi: '2.9x', campaign: 'Womens E-Mail' },
  ];

  const recentCampaigns = [
    { name: 'Mens E-Mail', group: 'Men Customers', status: 'Completed', convUplift: '+12.4%', revUplift: '+24.1%' },
    { name: 'Womens E-Mail', group: 'Women Customers', status: 'Completed', convUplift: '+8.7%', revUplift: '+16.3%' },
    { name: 'No E-Mail (Control)', group: 'Control Group', status: 'Completed', convUplift: '0%', revUplift: '0%' },
  ];

  return (
    <>
      <PageHeader title="Dash" titleAccent="board" subtitle="An overview of your marketing performance, customer insights, and causal AI recommendations." badgeIcon={Target} badgeTitle="Last 6 Months" badgeText="Campaign performance overview" badgeBg="var(--accent-teal-dim)" />

      <div className="stat-cards-row">
        <StatCard icon={Users} label="Total Customers" value="64,124" change="12.4% vs last period" color="teal" iconBg="var(--accent-teal-dim)" />
        <StatCard icon={Mail} label="Total Campaigns" value="3" change="50% vs last period" color="blue" iconBg="var(--accent-blue-dim)" />
        <StatCard icon={ShoppingCart} label="Total Purchases" value="~135K" change="18.7% vs last period" color="green" iconBg="var(--accent-green-dim)" />
        <StatCard icon={DollarSign} label="Total Revenue Uplift" value="₹12,43,230" change="22.4% vs last period" color="orange" iconBg="var(--accent-orange-dim)" />
      </div>

      <div className="grid-3-col-layout mb-20">
        <Card icon={BarChart3} title="Campaign Performance Overview" subtitle="Compare key metrics across campaigns.">
          <div className="chart-container"><Bar data={campaignData} options={{ ...chartDefaults, plugins: { ...chartDefaults.plugins, legend: { ...chartDefaults.plugins.legend, position: 'top' } } }} /></div>
        </Card>
        <Card icon={PieChart} title="Customer Segment Distribution" subtitle="Total customers across uplift segments.">
          <div className="donut-wrapper" style={{ height: 240 }}>
            <Doughnut data={segmentDonut} options={{ responsive: true, maintainAspectRatio: false, cutout: '65%', plugins: { legend: { position: 'right', labels: { color: '#8b97b0', font: { size: 11 }, boxWidth: 10, padding: 10 } } } }} />
            <div className="donut-center"><div className="donut-center-value">64,124</div><div className="donut-center-label">Customers</div></div>
          </div>
        </Card>
        <Card icon={TrendingUp} title="Estimated ROI" subtitle="Projected return from recommended campaign allocation.">
          <div style={{ textAlign: 'center', marginBottom: 12 }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-teal)' }}>3.8x</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-teal)' }}>↑ 0.6x vs last period</div>
          </div>
          <div className="chart-container" style={{ height: 140 }}>
            <Line data={roiData} options={{ ...chartDefaults, scales: { ...chartDefaults.scales, y: { ...chartDefaults.scales.y, ticks: { ...chartDefaults.scales.y.ticks, callback: v => v + 'x' } } }, plugins: { ...chartDefaults.plugins, legend: { display: false } } }} />
          </div>
        </Card>
      </div>

      <div className="grid-2-1 mb-20">
        <Card icon={Users} title="Top Predicted Customers (Sample)" subtitle="Customers with highest uplift potential." actions={<button className="link-action">View All Customers <ArrowRight size={14} /></button>}>
          <table className="data-table">
            <thead><tr><th>Customer ID</th><th>Segment</th><th>Predicted Uplift</th><th>Expected ROI</th><th>Recommended Campaign</th></tr></thead>
            <tbody>
              {topCustomers.map(c => (
                <tr key={c.id}>
                  <td>{c.id}</td>
                  <td><SegmentBadge segment={c.segment} /></td>
                  <td style={{ color: 'var(--accent-teal)' }}>{c.uplift}</td>
                  <td>{c.roi}</td>
                  <td>{c.campaign}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card icon={PieChart} title="Customer Segments at a Glance" subtitle="Characteristics and recommended actions for each segment.">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { name: 'Persuadable', pct: '34.2%', count: '21,932', desc: 'High uplift potential. Target with personalized campaigns.', color: 'teal' },
              { name: 'Sure Thing', pct: '28.1%', count: '18,012', desc: 'Likely to purchase regardless. Maintain engagement.', color: 'blue' },
              { name: 'Sleeping Dog', pct: '22.3%', count: '14,298', desc: 'Unlikely to respond. Avoid wasting budget.', color: 'orange' },
              { name: 'Lost Cause', pct: '15.4%', count: '9,882', desc: 'Negative uplift. Exclude from campaigns.', color: 'red' },
            ].map(s => (
              <div key={s.name} className={`segment-card ${s.name.toLowerCase().replace(' ', '-')}`} style={{ flexDirection: 'column', alignItems: 'flex-start', padding: 14 }}>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)' }}>{s.name}</div>
                <div style={{ fontSize: '0.78rem', color: `var(--accent-${s.color})`, fontWeight: 600 }}>{s.pct} ({s.count})</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.4 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid-2-1 mb-20">
        <Card icon={BarChart3} title="Recent Campaigns" subtitle="Overview of latest campaign performance." actions={<button className="link-action">View All Campaigns <ArrowRight size={14} /></button>}>
          <table className="data-table">
            <thead><tr><th>Campaign Name</th><th>Target Group</th><th>Status</th><th>Conversion Uplift</th><th>Revenue Uplift</th><th>Action</th></tr></thead>
            <tbody>
              {recentCampaigns.map(c => (
                <tr key={c.name}>
                  <td>{c.name}</td>
                  <td>{c.group}</td>
                  <td><Badge color="green">Completed</Badge></td>
                  <td style={{ color: 'var(--accent-teal)' }}>{c.convUplift}</td>
                  <td style={{ color: 'var(--accent-teal)' }}>{c.revUplift}</td>
                  <td><button className="btn btn-outline btn-sm">View Report</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
        <Card icon={Lightbulb} title="Key Insights" subtitle="AI-generated insights from your data.">
          <InsightList items={[
            '<strong>Mens E-Mail</strong> campaign shows the highest incremental revenue (+24.1%).',
            '<strong>Persuadable</strong> segment offers the largest growth opportunity (34.2%).',
            'Avoid targeting <strong>Lost Cause</strong> segment to reduce wasted spend.',
            'Optimize <strong>budget allocation</strong> to maximize overall ROI (3.8x).',
          ]} />
        </Card>
      </div>
    </>
  );
}
