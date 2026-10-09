import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { BrainCircuit, Activity, Crosshair, Users, ShieldCheck, Share2, Lightbulb, CheckCircle2 } from 'lucide-react';
import { PageHeader, Card, Badge } from '../components/UIComponents';

export default function ModelInsights() {
  const [activeTab, setActiveTab] = useState('Overview');

  const featureImportance = {
    labels: ['Recency (Days)', 'Purchase History ($)', 'History Segment', 'Mens E-Mail (Prev.)', 'Womens E-Mail (Prev.)', 'Zip Code Type', 'New Customer', 'Channel', 'Age (Binned)', 'Income (Binned)'],
    datasets: [
      { label: 'Importance', data: [0.24, 0.18, 0.14, 0.10, 0.09, 0.08, 0.06, 0.05, 0.04, 0.03], backgroundColor: ['#00e5a0', '#00d4ff', '#3b82f6', '#3b82f6', '#3b82f6', '#3b82f6', '#3b82f6', '#3b82f6', '#a855f7', '#a855f7'] }
    ]
  };

  const ateChart = {
    labels: ['Mens E-Mail', 'Womens E-Mail', 'No E-Mail (Baseline)'],
    datasets: [
      { label: 'ATE', data: [12.4, 8.7, 0], backgroundColor: ['#00e5a0', '#3b82f6', '#1e293b'] }
    ]
  };

  const modelMetrics = [
    { metric: 'R² (Pseudo)', conv: '0.214', spend: '0.187' },
    { metric: 'MAE', conv: '0.152', spend: '0.168' },
    { metric: 'RMSE', conv: '0.201', spend: '0.223' },
    { metric: 'Qini Score', conv: '0.312', spend: '0.284' },
    { metric: 'Uplift AUC', conv: '0.731', spend: '0.698' },
  ];

  const refutationTests = [
    { test: 'Placebo Treatment Test', result: 'p = 0.43', status: 'Passed' },
    { test: 'Random Common Cause', result: 'p = 0.38', status: 'Passed' },
    { test: 'Subset Invariance Test', result: 'p = 0.52', status: 'Passed' },
    { test: 'Bootstrap Stability', result: 'Stable', status: 'Passed' },
    { test: 'Alternative Model Check', result: 'Consistent', status: 'Passed' },
  ];

  return (
    <>
      <PageHeader title="Model" titleAccent="Insights" subtitle="Explore how the model works, what drives predictions, and validate causal relationships." badgeIcon={Share2} badgeTitle="Explainable & Trustworthy AI" badgeText="Understand key drivers, feature importance, causal effects, and model performance." badgeBg="var(--accent-teal-dim)" />

      <div className="tabs mb-20">
        {['Overview', 'Feature Importance', 'Causal Effects', 'Model Performance', 'SHAP Analysis', 'Refutation Tests', 'Business Insights'].map(t => (
          <button key={t} className={`tab ${activeTab === t ? 'active' : ''}`} onClick={() => setActiveTab(t)}>{t}</button>
        ))}
      </div>

      <div className="grid-4 mb-20">
        <div className="segment-card" style={{ padding: '20px 16px', background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}>
          <div className="segment-card-icon" style={{ background: 'var(--accent-teal-dim)' }}><Activity size={20} style={{ color: 'var(--accent-teal)' }} /></div>
          <div><div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Model Type</div><div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Double Machine Learning</div><div style={{ fontSize: '0.7rem', color: 'var(--accent-teal)' }}>LinearDML + CausalForestDML</div></div>
        </div>
        <div className="segment-card" style={{ padding: '20px 16px', background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}>
          <div className="segment-card-icon" style={{ background: 'var(--accent-purple-dim)' }}><Crosshair size={20} style={{ color: 'var(--accent-purple)' }} /></div>
          <div><div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Target Outcomes</div><div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>Conversion & Spend</div><div style={{ fontSize: '0.7rem', color: 'var(--accent-purple)' }}>Two-headed causal uplift model</div></div>
        </div>
        <div className="segment-card" style={{ padding: '20px 16px', background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}>
          <div className="segment-card-icon" style={{ background: 'var(--accent-green-dim)' }}><Users size={20} style={{ color: 'var(--accent-green)' }} /></div>
          <div><div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Key Features</div><div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>10+ Behavioral Features</div><div style={{ fontSize: '0.7rem', color: 'var(--accent-green)' }}>Demographics, history, engagement</div></div>
        </div>
        <div className="segment-card" style={{ padding: '20px 16px', background: 'var(--bg-card)', border: '1px solid var(--border-card)' }}>
          <div className="segment-card-icon" style={{ background: 'var(--accent-teal-dim)' }}><ShieldCheck size={20} style={{ color: 'var(--accent-teal)' }} /></div>
          <div><div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Model Reliability</div><div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-teal)' }}>High</div><div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Passed causal validation tests</div></div>
        </div>
      </div>

      <div className="grid-3-col-layout mb-20">
        <Card icon={Activity} title="Feature Importance (Top 10)" subtitle="Key drivers affecting causal uplift predictions." actions={<div className="tabs" style={{ marginBottom: 0 }}><Badge color="green">Conversion</Badge><Badge color="blue">Spend</Badge></div>}>
          <div className="chart-container tall"><Bar data={featureImportance} options={{ indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { color: 'rgba(100,120,150,0.08)' } }, y: { grid: { display: false } } } }} /></div>
        </Card>
        
        <Card icon={BrainCircuit} title="SHAP Feature Impact" subtitle="How each feature contributes to predictions." actions={<div className="tabs" style={{ marginBottom: 0 }}><Badge color="green">Conversion</Badge><Badge color="blue">Spend</Badge></div>}>
          <div style={{ width: '100%', height: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-input)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)', position: 'relative' }}>
             {/* Mocking the SHAP plot visually */}
             <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>[SHAP Summary Plot Visualization]</div>
             <div style={{ position: 'absolute', right: 10, top: 10, bottom: 10, width: 8, background: 'linear-gradient(to bottom, #ff0055, #0055ff)', borderRadius: 4 }} />
             <div style={{ position: 'absolute', right: -25, top: 10, fontSize: '0.6rem', color: '#ff0055' }}>High</div>
             <div style={{ position: 'absolute', right: -25, bottom: 10, fontSize: '0.6rem', color: '#0055ff' }}>Low</div>
             <div style={{ position: 'absolute', right: 25, top: '50%', transform: 'translateY(-50%) rotate(90deg)', fontSize: '0.6rem', color: 'var(--text-secondary)', letterSpacing: 1 }}>Feature Value</div>
          </div>
        </Card>

        <Card icon={Activity} title="Causal Effect Estimates" subtitle="Estimated average treatment effect for each campaign." actions={<div className="tabs" style={{ marginBottom: 0 }}><Badge color="green">Conversion</Badge><Badge color="blue">Spend</Badge></div>}>
          <div className="chart-container tall"><Bar data={ateChart} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { ticks: { callback: v => v + '%' } } } }} /></div>
        </Card>
      </div>

      <div className="grid-3-col-layout mb-20">
        <Card icon={Lightbulb} title="Causal DAG (Structural Model)" subtitle="Graphical representation of causal relationships.">
          <div style={{ width: '100%', height: 260, background: 'var(--bg-input)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-card)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>[Causal DAG Visualization]</div>
          </div>
        </Card>
        
        <Card icon={Activity} title="Model Performance" subtitle="Evaluation metrics for causal models." actions={<div className="tabs" style={{ marginBottom: 0 }}><Badge color="green">LinearDML</Badge><Badge color="blue">CausalForestDML</Badge></div>}>
          <table className="data-table" style={{ marginTop: 10 }}>
            <thead><tr><th>Metric</th><th style={{ textAlign: 'right' }}>Conversion</th><th style={{ textAlign: 'right' }}>Spend</th></tr></thead>
            <tbody>
              {modelMetrics.map(m => (
                <tr key={m.metric}>
                  <td style={{ color: 'var(--text-secondary)' }}>{m.metric}</td>
                  <td style={{ textAlign: 'right', fontWeight: 600 }}>{m.conv}</td>
                  <td style={{ textAlign: 'right', fontWeight: 600 }}>{m.spend}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card icon={ShieldCheck} title="Refutation & Robustness Tests" subtitle="Validate causal assumptions and model stability.">
          <table className="data-table" style={{ marginTop: 10, marginBottom: 16 }}>
            <thead><tr><th>Test</th><th>Result</th><th>Status</th></tr></thead>
            <tbody>
              {refutationTests.map(t => (
                <tr key={t.test}>
                  <td style={{ color: 'var(--text-secondary)' }}>{t.test}</td>
                  <td>{t.result}</td>
                  <td><CheckCircle2 size={16} style={{ color: 'var(--accent-green)' }} /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ background: 'var(--accent-teal-dim)', border: '1px solid rgba(0,229,160,0.3)', borderRadius: 'var(--radius-md)', padding: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
             <ShieldCheck size={24} style={{ color: 'var(--accent-teal)' }} />
             <div>
               <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-teal)' }}>All refutation tests passed</div>
               <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>No evidence of significant violations of causal assumptions.</div>
             </div>
          </div>
        </Card>
      </div>
    </>
  );
}
