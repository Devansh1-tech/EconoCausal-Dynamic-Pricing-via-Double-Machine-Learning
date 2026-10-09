import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Sparkles, BarChart3, TrendingUp, Calendar, DollarSign, Mail, MapPin, UserPlus, Globe, Hash, Download, RotateCcw, Lightbulb, ArrowRight, Zap, Target } from 'lucide-react';
import { StatCard, PageHeader, Card, InsightList, Badge } from '../components/UIComponents';
import { fetchPrediction } from '../services/api';

const defaultForm = { recency: 10, history: 100.50, history_segment: '2) $100 - $200', zip_code: 'Urban', newbie: 0, channel: 'Web', mens: 1, womens: 0, customer_id: 'CUST_123' };

export default function Prediction() {
  const [form, setForm] = useState(defaultForm);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (field, value) => setForm(prev => ({ ...prev, [field]: value }));
  const handleReset = () => { setForm({ recency: '', history: '', history_segment: '1) $0 - $100', zip_code: 'Urban', newbie: 0, channel: 'Web', mens: 0, womens: 0, customer_id: '' }); setResults(null); setError(null); };

  const getPredictions = async () => {
    setLoading(true);
    setError(null);
    try {
      const payload = { ...form, history: parseFloat(form.history) || 0, recency: parseInt(form.recency) || 0 };
      const pred = await fetchPrediction([payload]);
      setResults(pred[0]);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const upliftChart = {
    labels: ['Mens E-Mail', 'Womens E-Mail'],
    datasets: [
      { label: 'Conversion Uplift (%)', data: [results ? results.mens_email.conversion * 100 : 0, results ? results.womens_email.conversion * 100 : 0], backgroundColor: '#00e5a0' },
      { label: 'Spend Uplift ($)', data: [results?.mens_email.spend || 0, results?.womens_email.spend || 0], backgroundColor: '#3b82f6' },
    ]
  };

  return (
    <>
      <PageHeader title="Customer" titleAccent="Prediction" subtitle="Get estimated causal treatment effects (uplift) for this customer using Double Machine Learning." badgeIcon={Target} badgeTitle="Predict · Understand · Act" badgeText="Estimate the causal impact of each campaign and choose the most effective strategy." badgeBg="var(--accent-purple-dim)" />

      <div className="stat-cards-row">
        <StatCard icon={BarChart3} label="Mens E-Mail Conversion Uplift" value={results ? `+${(results.mens_email.conversion * 100).toFixed(2)}%` : '-'} change="vs baseline" color="teal" iconBg="var(--accent-teal-dim)" />
        <StatCard icon={TrendingUp} label="Mens E-Mail Spend Uplift" value={results ? `+${results.mens_email.spend.toFixed(2)}$` : '-'} change="vs baseline" color="green" iconBg="var(--accent-green-dim)" />
        <StatCard icon={BarChart3} label="Womens E-Mail Conversion Uplift" value={results ? `+${(results.womens_email.conversion * 100).toFixed(2)}%` : '-'} change="vs baseline" color="orange" iconBg="var(--accent-orange-dim)" />
        <StatCard icon={TrendingUp} label="Womens E-Mail Spend Uplift" value={results ? `+${results.womens_email.spend.toFixed(2)}$` : '-'} change="vs baseline" color="purple" iconBg="var(--accent-purple-dim)" />
      </div>

      <div className="grid-2-1 mb-20">
        <Card icon={Sparkles} title="Customer Input" subtitle="Enter customer details to get causal uplift predictions." actions={<button className="btn btn-outline btn-sm" onClick={() => setForm(defaultForm)}><Download size={14} /> Load Sample</button>}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div className="form-group"><label className="form-label">Recency (Days)</label><div className="form-input-icon"><Calendar className="icon" size={16} /><input className="form-input" type="number" value={form.recency} onChange={e => handleChange('recency', e.target.value)} /></div></div>
            <div className="form-group"><label className="form-label">Purchase History ($)</label><div className="form-input-icon"><DollarSign className="icon" size={16} /><input className="form-input" type="number" step="0.01" value={form.history} onChange={e => handleChange('history', e.target.value)} /></div></div>
            <div className="form-group">
              <label className="form-label">History Segment</label>
              <div className="form-input-icon">
                <Mail className="icon" size={16} />
                <select className="form-select" value={form.history_segment} onChange={e => handleChange('history_segment', e.target.value)}>
                  <option>1) $0 - $100</option><option>2) $100 - $200</option><option>3) $200 - $350</option>
                  <option>4) $350 - $500</option><option>5) $500 - $750</option><option>6) $750 - $1,000</option><option>7) $1,000 +</option>
                </select>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 16 }}>
            <div className="form-group"><label className="form-label">Zip Code Type</label><div className="form-input-icon"><MapPin className="icon" size={16} /><select className="form-select" value={form.zip_code} onChange={e => handleChange('zip_code', e.target.value)}><option>Urban</option><option>Suburban</option><option>Rural</option></select></div></div>
            <div className="form-group"><label className="form-label">New Customer</label><div className="form-input-icon"><UserPlus className="icon" size={16} /><select className="form-select" value={form.newbie} onChange={e => handleChange('newbie', parseInt(e.target.value))}><option value={0}>No</option><option value={1}>Yes</option></select></div></div>
            <div className="form-group"><label className="form-label">Channel</label><div className="form-input-icon"><Globe className="icon" size={16} /><select className="form-select" value={form.channel} onChange={e => handleChange('channel', e.target.value)}><option>Web</option><option>Phone</option><option>Multichannel</option></select></div></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 20 }}>
            <div className="form-group"><label className="form-label">Mens E-Mail (Previous)</label><div className="form-input-icon"><Mail className="icon" size={16} /><select className="form-select" value={form.mens} onChange={e => handleChange('mens', parseInt(e.target.value))}><option value={0}>No</option><option value={1}>Yes</option></select></div></div>
            <div className="form-group"><label className="form-label">Womens E-Mail (Previous)</label><div className="form-input-icon"><Mail className="icon" size={16} /><select className="form-select" value={form.womens} onChange={e => handleChange('womens', parseInt(e.target.value))}><option value={0}>No</option><option value={1}>Yes</option></select></div></div>
            <div className="form-group"><label className="form-label">Customer ID (Optional)</label><div className="form-input-icon"><Hash className="icon" size={16} /><input className="form-input" type="text" value={form.customer_id} onChange={e => handleChange('customer_id', e.target.value)} /></div></div>
          </div>
          {error && <div style={{ color: 'var(--accent-red)', marginBottom: 16, fontSize: '0.85rem' }}>{error}</div>}
          <div style={{ display: 'flex', gap: 16 }}>
            <button className="btn btn-secondary btn-lg" style={{ flex: 1 }} onClick={handleReset}><RotateCcw size={16} /> Reset</button>
            <button className="btn btn-primary btn-lg" style={{ flex: 2 }} onClick={getPredictions} disabled={loading}><Sparkles size={16} /> {loading ? 'Analyzing...' : 'Get Predictions'}</button>
          </div>
        </Card>

        <Card icon={Zap} title="Uplift Predictions" subtitle="Estimated treatment effects for this customer">
          {results ? (
            <div style={{ marginBottom: 16 }}>
              <div style={{ background: 'var(--accent-teal-dim)', border: '1px solid rgba(0,229,160,0.2)', borderRadius: 'var(--radius-md)', padding: 16, marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}><Mail size={16} style={{ color: 'var(--accent-teal)' }} /><span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Mens E-Mail Campaign</span></div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div><div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Conversion Uplift</div><div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-teal)' }}>+{(results.mens_email.conversion * 100).toFixed(2)}%</div></div>
                  <div><div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Spend Uplift</div><div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-blue)' }}>+${results.mens_email.spend.toFixed(2)}</div></div>
                </div>
              </div>
              <div style={{ background: 'var(--accent-red-dim)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: 'var(--radius-md)', padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}><Mail size={16} style={{ color: 'var(--accent-pink)' }} /><span style={{ fontWeight: 600, fontSize: '0.85rem' }}>Womens E-Mail Campaign</span></div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div><div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Conversion Uplift</div><div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-orange)' }}>+{(results.womens_email.conversion * 100).toFixed(2)}%</div></div>
                  <div><div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>Spend Uplift</div><div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--accent-green)' }}>+${results.womens_email.spend.toFixed(2)}</div></div>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)' }}>Click 'Get Predictions' to see results.</div>
          )}
        </Card>
      </div>

      {results && (
        <div className="grid-3-col-layout mb-20">
          <Card icon={BarChart3} title="Uplift Comparison" subtitle="Compare estimated uplift across campaigns.">
            <div className="chart-container"><Bar data={upliftChart} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: '#8b97b0', font: { size: 11 }, boxWidth: 12 } } }, scales: { x: { ticks: { color: '#5a6680' }, grid: { color: 'rgba(100,120,150,0.08)' } }, y: { ticks: { color: '#5a6680', callback: v => v + '' }, grid: { color: 'rgba(100,120,150,0.08)' } } } }} /></div>
          </Card>
          <Card icon={Target} title="Expected Outcome (vs No E-Mail)" subtitle="Estimated business impact for this customer.">
            <table className="data-table">
              <thead><tr><th>Treatment</th><th>Conversion Uplift</th><th>Spend Uplift</th></tr></thead>
              <tbody>
                <tr><td style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Mail size={14} style={{ color: 'var(--accent-teal)' }} /> Mens E-Mail</td><td style={{ color: 'var(--accent-teal)' }}>+{(results.mens_email.conversion * 100).toFixed(2)}%</td><td style={{ color: 'var(--accent-teal)' }}>+${results.mens_email.spend.toFixed(2)}</td></tr>
                <tr><td style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Mail size={14} style={{ color: 'var(--accent-pink)' }} /> Womens E-Mail</td><td style={{ color: 'var(--accent-teal)' }}>+{(results.womens_email.conversion * 100).toFixed(2)}%</td><td style={{ color: 'var(--accent-teal)' }}>+${results.womens_email.spend.toFixed(2)}</td></tr>
                <tr><td style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)' }}>⊘ No E-Mail (Baseline)</td><td>0%</td><td>0%</td></tr>
              </tbody>
            </table>
          </Card>
          <Card icon={Lightbulb} title="Key Takeaways">
            <InsightList items={[
              `Mens E-Mail shows <strong>${results.mens_email.conversion > results.womens_email.conversion ? 'higher' : 'lower'} conversion potential</strong> for this customer.`,
              `Expected spend increase of <strong>$${results.mens_email.spend.toFixed(2)}</strong> with Mens E-Mail campaign.`,
              `Consider targeting with <strong>${results.mens_email.conversion > results.womens_email.conversion ? 'Mens E-Mail' : 'Womens E-Mail'}</strong> for maximum ROI.`,
            ]} />
          </Card>
        </div>
      )}
    </>
  );
}
