import { Bar, Doughnut } from 'react-chartjs-2';
import { Users, User, MapPin, Calendar, DollarSign, Mail, PieChart, Info, Target, Eye, EyeOff, XCircle, ArrowRight, BarChart3, Lightbulb } from 'lucide-react';
import { PageHeader, Card, InsightList, Badge, SegmentBadge } from '../components/UIComponents';

export default function Segmentation() {
  const segmentDonut = {
    labels: ['Persuadable', 'Sure Thing', 'Sleeping Dog', 'Lost Cause'],
    datasets: [{
      data: [35.2, 28.6, 22.1, 14.1],
      backgroundColor: ['#00e5a0', '#3b82f6', '#f97316', '#ef4444'],
      borderWidth: 0,
      hoverOffset: 6,
    }]
  };

  const convUpliftChart = {
    labels: ['Persuadable', 'Sure Thing', 'Sleeping Dog', 'Lost Cause'],
    datasets: [{
      label: 'Conversion Uplift',
      data: [24.1, 8.3, 5.2, 2.1],
      backgroundColor: ['#00e5a0', '#3b82f6', '#f97316', '#ef4444'],
      barThickness: 32
    }]
  };

  const spendUpliftChart = {
    labels: ['Persuadable', 'Sure Thing', 'Sleeping Dog', 'Lost Cause'],
    datasets: [{
      label: 'Spend Uplift',
      data: [18.7, 12.4, 6.1, 3.2],
      backgroundColor: ['#00e5a0', '#3b82f6', '#f97316', '#ef4444'],
      barThickness: 32
    }]
  };

  const chartOpts = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { 
      x: { ticks: { color: '#5a6680', font: { size: 10 } }, grid: { display: false } },
      y: { ticks: { color: '#5a6680', callback: v => v + '%' }, grid: { color: 'rgba(100,120,150,0.08)' } }
    }
  };

  return (
    <>
      <PageHeader title="Customer" titleAccent="Segmentation" subtitle="Classify customers into causal segments to understand their behavior and optimize campaign targeting." badgeIcon={Users} badgeTitle="AI-Powered Segmentation" badgeText="Group customers based on causal uplift and behavioral characteristics." badgeBg="var(--accent-teal-dim)" />

      <div className="grid-4 mb-20">
        <div className="segment-card persuadable" style={{ padding: '24px 20px' }}>
          <div className="segment-card-icon" style={{ background: 'var(--accent-teal-dim)' }}><Users size={22} style={{ color: 'var(--accent-teal)' }} /></div>
          <div><div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>Persuadable</div><div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>4,352</div><div style={{ fontSize: '0.75rem', color: 'var(--accent-teal)' }}>35.2% of customers</div></div>
          <ArrowRight size={16} style={{ color: 'var(--text-muted)', position: 'absolute', right: 20 }} />
        </div>
        <div className="segment-card sure-thing" style={{ padding: '24px 20px' }}>
          <div className="segment-card-icon" style={{ background: 'var(--accent-blue-dim)' }}><Target size={22} style={{ color: 'var(--accent-blue)' }} /></div>
          <div><div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>Sure Thing</div><div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>3,540</div><div style={{ fontSize: '0.75rem', color: 'var(--accent-blue)' }}>28.6% of customers</div></div>
          <ArrowRight size={16} style={{ color: 'var(--text-muted)', position: 'absolute', right: 20 }} />
        </div>
        <div className="segment-card sleeping-dog" style={{ padding: '24px 20px' }}>
          <div className="segment-card-icon" style={{ background: 'var(--accent-orange-dim)' }}><EyeOff size={22} style={{ color: 'var(--accent-orange)' }} /></div>
          <div><div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>Sleeping Dog</div><div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>2,730</div><div style={{ fontSize: '0.75rem', color: 'var(--accent-orange)' }}>22.1% of customers</div></div>
          <ArrowRight size={16} style={{ color: 'var(--text-muted)', position: 'absolute', right: 20 }} />
        </div>
        <div className="segment-card lost-cause" style={{ padding: '24px 20px' }}>
          <div className="segment-card-icon" style={{ background: 'var(--accent-red-dim)' }}><XCircle size={22} style={{ color: 'var(--accent-red)' }} /></div>
          <div><div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>Lost Cause</div><div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)' }}>1,736</div><div style={{ fontSize: '0.75rem', color: 'var(--accent-red)' }}>14.1% of customers</div></div>
          <ArrowRight size={16} style={{ color: 'var(--text-muted)', position: 'absolute', right: 20 }} />
        </div>
      </div>

      <div className="grid-3-col-layout mb-20">
        <Card icon={User} title="Selected Customer" actions={<button className="btn btn-outline btn-sm">New Prediction</button>}>
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
        
        <Card icon={Users} title="Segment Assignment">
          <div style={{ background: 'var(--accent-teal-dim)', border: '1px solid rgba(0,229,160,0.2)', borderRadius: 'var(--radius-md)', padding: 16, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
            <Users size={32} style={{ color: 'var(--accent-teal)' }} />
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-teal)' }}>Persuadable</span><Badge color="green">Assigned Segment</Badge></div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: 4 }}>This customer is likely to respond to a targeted campaign.</div>
            </div>
          </div>
          <div style={{ fontSize: '0.82rem', fontWeight: 600, marginBottom: 12 }}>Segment Characteristics</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['Higher likelihood of conversion with campaign', 'Moderate baseline purchase probability', 'Good potential for incremental spend', 'Ideal for targeted marketing campaigns'].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'var(--accent-teal)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 800 }}>✓</div>
                {t}
              </div>
            ))}
          </div>
        </Card>

        <Card icon={BarChart3} title="Segment Distribution">
          <div className="donut-wrapper" style={{ height: 180, marginBottom: 16 }}>
            <Doughnut data={segmentDonut} options={{ responsive: true, maintainAspectRatio: false, cutout: '70%', plugins: { legend: { position: 'right', labels: { color: '#8b97b0', font: { size: 11 }, boxWidth: 10, padding: 10 } } } }} />
            <div className="donut-center"><div className="donut-center-value">12,345</div><div className="donut-center-label">Customers</div></div>
          </div>
          <div style={{ display: 'flex', gap: 12, padding: 12, background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 'var(--radius-md)' }}>
            <Info size={18} style={{ color: 'var(--accent-blue)', flexShrink: 0 }} />
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>Persuadable customers show high incremental potential and are the best candidates for targeted campaigns based on causal uplift analysis.</div>
          </div>
        </Card>
      </div>

      <Card icon={Users} title="Segment Details" subtitle="Understand the characteristics and strategy for each segment." className="mb-20">
        <div className="grid-4">
          <div style={{ background: 'var(--bg-primary)', border: '1px solid rgba(0,229,160,0.2)', borderRadius: 'var(--radius-md)', padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Users size={18} style={{ color: 'var(--accent-teal)' }} /><span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Persuadable</span></div>
              <Badge color="green">35.2%</Badge>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 8 }}>4,352 customers</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 16 }}>Low baseline purchase probability but high incremental uplift with campaign.</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-teal)', display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600 }}><Target size={14} /> Strategy: <span style={{ color: '#fff' }}>Target with campaign</span></div>
          </div>
          
          <div style={{ background: 'var(--bg-primary)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 'var(--radius-md)', padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Target size={18} style={{ color: 'var(--accent-blue)' }} /><span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Sure Thing</span></div>
              <Badge color="blue">28.6%</Badge>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 8 }}>3,540 customers</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 16 }}>High baseline purchase probability and positive response to campaign.</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600 }}><Target size={14} /> Strategy: <span style={{ color: '#fff' }}>Maintain engagement</span></div>
          </div>

          <div style={{ background: 'var(--bg-primary)', border: '1px solid rgba(249,115,22,0.2)', borderRadius: 'var(--radius-md)', padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><EyeOff size={18} style={{ color: 'var(--accent-orange)' }} /><span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Sleeping Dog</span></div>
              <Badge color="orange">22.1%</Badge>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 8 }}>2,730 customers</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 16 }}>Low response to campaign but moderate baseline purchase probability.</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-orange)', display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600 }}><Target size={14} /> Strategy: <span style={{ color: '#fff' }}>Avoid targeting</span></div>
          </div>

          <div style={{ background: 'var(--bg-primary)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 'var(--radius-md)', padding: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><XCircle size={18} style={{ color: 'var(--accent-red)' }} /><span style={{ fontWeight: 700, fontSize: '0.9rem' }}>Lost Cause</span></div>
              <Badge color="red">14.1%</Badge>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 8 }}>1,736 customers</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 16 }}>Low baseline purchase probability and low response to campaign.</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--accent-red)', display: 'flex', alignItems: 'center', gap: 6, fontWeight: 600 }}><Target size={14} /> Strategy: <span style={{ color: '#fff' }}>Do not target</span></div>
          </div>
        </div>
      </Card>

      <div className="grid-3-col-layout">
        <Card icon={BarChart3} title="Conversion Uplift by Segment">
          <div className="chart-container"><Bar data={convUpliftChart} options={chartOpts} /></div>
        </Card>
        <Card icon={BarChart3} title="Expected Spend Uplift by Segment">
          <div className="chart-container"><Bar data={spendUpliftChart} options={chartOpts} /></div>
        </Card>
        <Card icon={Lightbulb} title="Key Insights">
          <InsightList items={[
            '<strong>Persuadable segment (35.2%)</strong> offers the highest conversion uplift potential.',
            '<strong>Sure Thing segment (28.6%)</strong> provides stable revenue with positive campaign response.',
            'Focus marketing budget on <strong>Persuadable customers</strong> for maximum ROI and incremental growth.',
          ]} />
        </Card>
      </div>
    </>
  );
}
