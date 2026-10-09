import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Users, BarChart3, TrendingUp, Zap, Calendar, DollarSign, Mail, MapPin, UserPlus, Globe, Hash, Download, RotateCcw, Lightbulb, Sparkles, PieChart, Target, ArrowRight } from 'lucide-react';
import { StatCard, PageHeader, Card, InsightList, Badge, SegmentBadge } from '../components/UIComponents';
import { fetchPrediction, fetchSegment, fetchRecommendation } from '../services/api';

const defaultForm = { recency: 10, history: 100.50, history_segment: '2) $100 - $200', zip_code: 'Urban', newbie: 0, channel: 'Web', mens: 1, womens: 0, customer_id: 'CUST_123' };

export default function CustomerAnalysis() {
  const [form, setForm] = useState(defaultForm);
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState('prediction');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));
  const loadSample = () => setForm(defaultForm);
  const handleReset = () => { setForm({ recency: '', history: '', history_segment: '1) $0 - $100', zip_code: 'Urban', newbie: 0, channel: 'Web', mens: 0, womens: 0, customer_id: '' }); setResults(null); setError(null); };

  const analyzeCustomer = async () => {
    setLoading(true);
    setError(null);
    try {
      const payload = { ...form, history: parseFloat(form.history) || 0, recency: parseInt(form.recency) || 0 };
      const [pred, seg, rec] = await Promise.all([
        fetchPrediction([payload]),
        fetchSegment([payload]),
        fetchRecommendation([payload])
      ]);
      setResults({
        mens_email: { conversion: pred[0].mens_email.conversion, spend: pred[0].mens_email.spend },
        womens_email: { conversion: pred[0].womens_email.conversion, spend: pred[0].womens_email.spend },
        segment: seg[0].mens_email.conversion, // Simple heuristic for now or use actual segment map
        recommendation: rec[0]
      });
      setActiveTab('prediction');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const upliftChart = {
    labels: ['Mens E-Mail', 'Womens E-Mail'],
    datasets: [
      { label: 'Conversion Uplift', data: [results?.mens_email.conversion || 0, results?.womens_email.conversion || 0], backgroundColor: '#00e5a0' },
      { label: 'Spend Uplift', data: [results?.mens_email.spend || 0, results?.womens_email.spend || 0], backgroundColor: '#3b82f6' },
    ]
  };

  const tabs = [
    { id: 'prediction', label: 'Prediction Results', icon: BarChart3 },
    { id: 'segment', label: 'Segment Analysis', icon: PieChart },
    { id: 'recommendation', label: 'Campaign Recommendation', icon: Target },
    { id: 'insights', label: 'Detailed Insights', icon: Lightbulb },
  ];

  return (
    <>
      <PageHeader title="Customer" titleAccent="Analysis" subtitle="Enter customer details to get causal predictions, segment classification, and campaign recommendations." badgeIcon={Sparkles} badgeTitle="AI-powered customer insights" badgeText="Understand behavior, predict response, and optimize campaign strategy." badgeBg="var(--accent-teal-dim)" />

      <div className="stat-cards-row">
        <StatCard icon={Users} label="Total Customers" value="12,345" change="12.5% vs last period" color="teal" iconBg="var(--accent-teal-dim)" />
        <StatCard icon={BarChart3} label="Avg. Conversion Uplift" value="+11.2%" change="3.4% vs last period" color="blue" iconBg="var(--accent-blue-dim)" />
        <StatCard icon={TrendingUp} label="Avg. Spend Uplift" value="+15.8%" change="4.1% vs last period" color="green" iconBg="var(--accent-green-dim)" />
        <StatCard icon={Zap} label="Active Campaigns" value="8,945" change="15.3% vs last period" color="orange" iconBg="var(--accent-orange-dim)" />
      </div>

      <div className="grid-2-1 mb-20">
        <Card icon={Users} title="1. Enter Customer Details" subtitle="Fill in the customer information to analyze their behavior and get causal insights." actions={<button className="btn btn-outline btn-sm" onClick={loadSample}><Download size={14} /> Load Sample</button>}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div className="form-group">
              <label className="form-label">Recency (Days)</label>
              <div className="form-input-icon"><Calendar className="icon" size={16} /><input className="form-input" type="number" value={form.recency} onChange={e => handleChange('recency', e.target.value)} /></div>
            </div>
            <div className="form-group">
              <label className="form-label">Purchase History ($)</label>
              <div className="form-input-icon"><DollarSign className="icon" size={16} /><input className="form-input" type="number" step="0.01" value={form.history} onChange={e => handleChange('history', e.target.value)} /></div>
            </div>
            <div className="form-group">
              <label className="form-label">History Segment</label>
              <div className="form-input-icon">
                <Mail className="icon" size={16} />
                <select className="form-select" value={form.history_segment} onChange={e => handleChange('history_segment', e.target.value)}>
                  <option>1) $0 - $100</option>
                  <option>2) $100 - $200</option>
                  <option>3) $200 - $350</option>
                  <option>4) $350 - $500</option>
                  <option>5) $500 - $750</option>
                  <option>6) $750 - $1,000</option>
                  <option>7) $1,000 +</option>
                </select>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div className="form-group">
              <label className="form-label">Zip Code Type</label>
              <div className="form-input-icon"><MapPin className="icon" size={16} /><select className="form-select" value={form.zip_code} onChange={e => handleChange('zip_code', e.target.value)}><option>Urban</option><option>Suburban</option><option>Rural</option></select></div>
            </div>
            <div className="form-group">
              <label className="form-label">New Customer</label>
              <div className="form-input-icon"><UserPlus className="icon" size={16} /><select className="form-select" value={form.newbie} onChange={e => handleChange('newbie', parseInt(e.target.value))}><option value={0}>No</option><option value={1}>Yes</option></select></div>
            </div>
            <div className="form-group">
              <label className="form-label">Channel</label>
              <div className="form-input-icon"><Globe className="icon" size={16} /><select className="form-select" value={form.channel} onChange={e => handleChange('channel', e.target.value)}><option>Web</option><option>Phone</option><option>Multichannel</option></select></div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 20 }}>
            <div className="form-group">
              <label className="form-label">Mens E-Mail (Previous)</label>
              <div className="form-input-icon"><Mail className="icon" size={16} /><select className="form-select" value={form.mens} onChange={e => handleChange('mens', parseInt(e.target.value))}><option value={0}>No</option><option value={1}>Yes</option></select></div>
            </div>
            <div className="form-group">
              <label className="form-label">Womens E-Mail (Previous)</label>
              <div className="form-input-icon"><Mail className="icon" size={16} /><select className="form-select" value={form.womens} onChange={e => handleChange('womens', parseInt(e.target.value))}><option value={0}>No</option><option value={1}>Yes</option></select></div>
            </div>
            <div className="form-group">
              <label className="form-label">Customer ID (Optional)</label>
              <div className="form-input-icon"><Hash className="icon" size={16} /><input className="form-input" type="text" value={form.customer_id} onChange={e => handleChange('customer_id', e.target.value)} /></div>
            </div>
          </div>
          {error && <div style={{ color: 'var(--accent-red)', marginBottom: 16, fontSize: '0.85rem' }}>{error}</div>}
          <div style={{ display: 'flex', gap: 16 }}>
            <button className="btn btn-secondary btn-lg" style={{ flex: 1 }} onClick={handleReset}><RotateCcw size={16} /> Reset</button>
            <button className="btn btn-primary btn-lg" style={{ flex: 2 }} onClick={analyzeCustomer} disabled={loading}><Sparkles size={16} /> {loading ? 'Analyzing...' : 'Analyze Customer'}</button>
          </div>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card title="Customer Profile" actions={<Badge color="cyan">{form.customer_id || 'N/A'}</Badge>}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.82rem' }}>
              {[['Recency', `${form.recency} days`], ['Purchase History', `$${form.history}`], ['History Segment', form.history_segment], ['Zip Code Type', form.zip_code], ['New Customer', form.newbie ? 'Yes' : 'No'], ['Channel', form.channel], ['Mens E-Mail (Prev.)', form.mens], ['Womens E-Mail (Prev.)', form.womens]].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>{k}</span>
                  <span style={{ color: 'var(--accent-teal)', fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card icon={Sparkles} title="AI Analysis Summary">
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {results ? `This customer is classified as ${results.segment} for conversion. The optimal campaign is ${results.recommendation.recommended_campaign}.` : 'Run analysis to generate AI summary.'}
            </p>
          </Card>
        </div>
      </div>

      <div className="tabs mb-20">
        {tabs.map(t => (<button key={t.id} className={`tab ${activeTab === t.id ? 'active' : ''}`} onClick={() => setActiveTab(t.id)}><t.icon size={16} /> {t.label}</button>))}
      </div>

      {results && (
        <div className="grid-3-col-layout mb-20">
          <Card icon={BarChart3} title="Causal Uplift Predictions" subtitle="Estimated treatment effects for this customer using Double Machine Learning.">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                { label: 'Mens E-Mail\nConversion Uplift', val: `${results.mens_email.conversion > 0 ? '+' : ''}${(results.mens_email.conversion * 100).toFixed(2)}%`, color: 'teal' },
                { label: 'Mens E-Mail\nSpend Uplift', val: `${results.mens_email.spend > 0 ? '+' : ''}$${results.mens_email.spend.toFixed(2)}`, color: 'green' },
                { label: 'Womens E-Mail\nConversion Uplift', val: `${results.womens_email.conversion > 0 ? '+' : ''}${(results.womens_email.conversion * 100).toFixed(2)}%`, color: 'orange' },
                { label: 'Womens E-Mail\nSpend Uplift', val: `${results.womens_email.spend > 0 ? '+' : ''}$${results.womens_email.spend.toFixed(2)}`, color: 'pink' },
              ].map((item, i) => (
                <div key={i} style={{ background: `var(--accent-${item.color}-dim)`, borderRadius: 'var(--radius-md)', padding: 14 }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', whiteSpace: 'pre-line', marginBottom: 4 }}>{item.label}</div>
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: `var(--accent-${item.color})` }}>{item.val}</div>
                </div>
              ))}
            </div>
          </Card>
          <Card icon={BarChart3} title="Uplift Comparison">
            <div className="chart-container"><Bar data={{
                labels: ['Mens E-Mail', 'Womens E-Mail'],
                datasets: [
                  { label: 'Conversion Uplift (%)', data: [results.mens_email.conversion * 100, results.womens_email.conversion * 100], backgroundColor: '#00e5a0' },
                  { label: 'Spend Uplift ($)', data: [results.mens_email.spend, results.womens_email.spend], backgroundColor: '#3b82f6' },
                ]
              }} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#8b97b0', font: { size: 11 }, boxWidth: 12 } } }, scales: { x: { ticks: { color: '#5a6680' }, grid: { color: 'rgba(100,120,150,0.08)' } }, y: { ticks: { color: '#5a6680' }, grid: { color: 'rgba(100,120,150,0.08)' } } } }} /></div>
          </Card>
          <Card icon={Lightbulb} title="Key Insights">
            <InsightList items={[
              `<strong>Recommended Campaign</strong><br/>The best action is ${results.recommendation.recommended_campaign}.`,
              `<strong>Expected Conversion Uplift</strong><br/>${(results.recommendation.expected_uplift_conversion * 100).toFixed(2)}% incremental conversion probability.`,
              `<strong>Expected Spend Uplift</strong><br/>$${results.recommendation.expected_uplift_spend.toFixed(2)} incremental spend.`,
              `<strong>Customer Segment</strong><br/>Classified as ${results.segment} for conversion.`
            ]} />
          </Card>
        </div>
      )}
    </>
  );
}

