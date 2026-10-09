import { useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Database, Users, Mail, ShoppingCart, DollarSign, PieChart, BarChart3, Clock, Download, Filter, RefreshCw, Check, Lightbulb } from 'lucide-react';
import { StatCard, PageHeader, Card, InsightList, Badge } from '../components/UIComponents';

export default function DataExplorer() {
  const [activeTab, setActiveTab] = useState('Overview');

  const campGroupDonut = {
    labels: ['Mens E-Mail', 'Womens E-Mail', 'No E-Mail (Control)'],
    datasets: [{
      data: [21932, 21669, 20523],
      backgroundColor: ['#00e5a0', '#3b82f6', '#f97316'],
      borderWidth: 0,
    }]
  };

  const purchaseHistChart = {
    labels: Array.from({length: 30}, (_, i) => i * 10),
    datasets: [{
      label: 'Customers',
      data: Array.from({length: 30}, (_, i) => Math.exp(-Math.pow((i-8)/4, 2)) * 6000 + Math.random() * 500),
      backgroundColor: '#00e5a0',
      barPercentage: 1.0,
      categoryPercentage: 1.0,
    }]
  };

  const recencyHistChart = {
    labels: Array.from({length: 30}, (_, i) => i * 10),
    datasets: [{
      label: 'Customers',
      data: Array.from({length: 30}, (_, i) => Math.exp(-i/10) * 8000 + Math.random() * 500),
      backgroundColor: '#3b82f6',
      barPercentage: 1.0,
      categoryPercentage: 1.0,
    }]
  };

  const dataPreview = [
    { id: 'CUST_0001', rec: 12, hist: 3, mens: 1, womens: 0, amount: 120.50 },
    { id: 'CUST_0002', rec: 45, hist: 1, mens: 0, womens: 1, amount: 75.20 },
    { id: 'CUST_0003', rec: 230, hist: 0, mens: 0, womens: 0, amount: 0.00 },
    { id: 'CUST_0004', rec: 67, hist: 2, mens: 1, womens: 0, amount: 60.00 },
    { id: 'CUST_0005', rec: 18, hist: 4, mens: 0, womens: 1, amount: 210.30 },
    { id: 'CUST_0006', rec: 90, hist: 1, mens: 0, womens: 0, amount: 35.00 },
    { id: 'CUST_0007', rec: 156, hist: 0, mens: 1, womens: 0, amount: 0.00 },
    { id: 'CUST_0008', rec: 33, hist: 3, mens: 0, womens: 1, amount: 95.40 },
    { id: 'CUST_0009', rec: 280, hist: 0, mens: 0, womens: 0, amount: 0.00 },
    { id: 'CUST_0010', rec: 5, hist: 6, mens: 1, womens: 0, amount: 320.10 },
  ];

  return (
    <>
      <PageHeader title="Data" titleAccent="Explorer" subtitle="Explore, visualize, and understand the customer data used for causal analysis." badgeIcon={Database} badgeTitle="Real Data. Real Insights." badgeText="Explore customer demographics, purchase history, campaign responses, and more." badgeBg="var(--accent-teal-dim)" />

      <div className="tabs mb-20">
        {['Overview', 'Feature Analysis', 'Customer Segments', 'Campaign Data', 'Data Quality', 'Correlation Analysis'].map(t => (
          <button key={t} className={`tab ${activeTab === t ? 'active' : ''}`} onClick={() => setActiveTab(t)}>{t}</button>
        ))}
      </div>

      <div className="stat-cards-row mb-20">
        <StatCard icon={Users} label="Total Customers" value="64,124" change="100% of dataset" color="teal" />
        <StatCard icon={Mail} label="Email Campaigns" value="3" change="Mens, Womens, No Email" color="blue" />
        <StatCard icon={ShoppingCart} label="Total Purchases" value="~135K" change="Across all customers" color="green" />
        <StatCard icon={DollarSign} label="Average Purchase Value" value="₹72.30" change="Per transaction" color="purple" />
      </div>

      <div className="grid-3-col-layout mb-20">
        <Card icon={PieChart} title="Campaign Group Distribution" subtitle="Distribution of customers across campaign groups">
          <div className="donut-wrapper" style={{ height: 200, marginTop: 10 }}>
            <Doughnut data={campGroupDonut} options={{ responsive: true, maintainAspectRatio: false, cutout: '70%', plugins: { legend: { position: 'right', labels: { color: '#8b97b0', font: { size: 11 }, boxWidth: 10, padding: 10 } } } }} />
            <div className="donut-center"><div className="donut-center-value" style={{ fontSize: '1.2rem' }}>64,124</div><div className="donut-center-label" style={{ fontSize: '0.65rem' }}>Customers</div></div>
          </div>
        </Card>
        <Card icon={BarChart3} title="Purchase Amount Distribution" subtitle="Distribution of total purchase amounts">
          <div className="chart-container" style={{ height: 200 }}><Bar data={purchaseHistChart} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { title: { display: true, text: 'Total Purchase Amount (₹)', color: '#5a6680', font: { size: 10 } } }, y: { title: { display: true, text: 'Customers', color: '#5a6680', font: { size: 10 } } } } }} /></div>
        </Card>
        <Card icon={Clock} title="Recency Distribution" subtitle="Days since last purchase">
          <div className="chart-container" style={{ height: 200 }}><Bar data={recencyHistChart} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { title: { display: true, text: 'Recency (Days)', color: '#5a6680', font: { size: 10 } } }, y: { title: { display: true, text: 'Customers', color: '#5a6680', font: { size: 10 } } } } }} /></div>
        </Card>
      </div>

      <div className="grid-3-col-layout mb-20" style={{ gridTemplateColumns: '1fr 2fr 1fr' }}>
        <Card icon={BarChart3} title="Feature Distributions" subtitle="Explore distributions of key customer features">
          <div className="tabs" style={{ marginBottom: 12, zoom: 0.85 }}><Badge color="teal">Recency</Badge><Badge color="blue">History</Badge><Badge color="purple">Mens E-Mail</Badge></div>
          <div className="chart-container" style={{ height: 160 }}><Bar data={recencyHistChart} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } }} /></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 10, marginTop: 16, textAlign: 'center' }}>
            <div><div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Mean</div><div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>91.4</div></div>
            <div><div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Median</div><div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>68.0</div></div>
            <div><div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Min</div><div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>0</div></div>
            <div><div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Max</div><div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>365</div></div>
          </div>
        </Card>

        <Card icon={Database} title="Customer Data Preview" subtitle="Sample of customer data (first 10 rows)" actions={<button className="btn btn-outline btn-sm"><Download size={14} /> Download CSV</button>}>
          <table className="data-table" style={{ fontSize: '0.75rem' }}>
            <thead><tr><th>Customer ID</th><th>Recency</th><th>History</th><th>Mens E-Mail</th><th>Womens E-Mail</th><th>Purchase Amount</th></tr></thead>
            <tbody>
              {dataPreview.map(d => (
                <tr key={d.id}>
                  <td style={{ color: 'var(--accent-teal)' }}>{d.id}</td>
                  <td>{d.rec}</td>
                  <td>{d.hist}</td>
                  <td>{d.mens}</td>
                  <td>{d.womens}</td>
                  <td>{d.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <span>Showing 1-10 of 64,124 customers</span>
            <div style={{ display: 'flex', gap: 4 }}>
              <button style={{ padding: '2px 8px', background: 'var(--bg-input)', border: '1px solid var(--border-input)', color: '#fff', borderRadius: 4 }}>&lt;</button>
              <button style={{ padding: '2px 8px', background: 'var(--accent-teal)', border: 'none', color: '#000', borderRadius: 4, fontWeight: 700 }}>1</button>
              <button style={{ padding: '2px 8px', background: 'var(--bg-input)', border: '1px solid var(--border-input)', color: '#fff', borderRadius: 4 }}>2</button>
              <button style={{ padding: '2px 8px', background: 'var(--bg-input)', border: '1px solid var(--border-input)', color: '#fff', borderRadius: 4 }}>3</button>
              <button style={{ padding: '2px 8px', background: 'var(--bg-input)', border: '1px solid var(--border-input)', color: '#fff', borderRadius: 4 }}>&gt;</button>
            </div>
          </div>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card icon={Filter} title="Filter Data">
            <div className="form-group mb-16"><label className="form-label">Campaign Group</label><select className="form-select"><option>All Campaigns</option></select></div>
            <div className="form-group mb-16">
              <label className="form-label">Purchase Amount Range (₹)</label>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <input className="form-input" style={{ padding: '6px 10px' }} value="0" readOnly /> <span style={{ color: 'var(--text-muted)' }}>-</span> <input className="form-input" style={{ padding: '6px 10px' }} value="500" readOnly />
              </div>
            </div>
            <div className="form-group mb-16">
              <label className="form-label">Recency Range (Days)</label>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <input className="form-input" style={{ padding: '6px 10px' }} value="0" readOnly /> <span style={{ color: 'var(--text-muted)' }}>-</span> <input className="form-input" style={{ padding: '6px 10px' }} value="365" readOnly />
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
              <button className="btn btn-secondary btn-sm" style={{ flex: 1 }}><RefreshCw size={14}/> Reset</button>
              <button className="btn btn-primary btn-sm" style={{ flex: 1 }}><Check size={14}/> Apply Filters</button>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid-2-1">
        <Card icon={Database} title="Correlation Heatmap" subtitle="Correlation between key numerical features">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
             <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>[Correlation Heatmap Visualization]</div>
          </div>
        </Card>
        <Card icon={Lightbulb} title="Key Takeaways">
          <InsightList items={[
            'Majority of customers are <strong>evenly split</strong> across the three campaign groups.',
            'Higher purchase amounts are associated with <strong>greater purchase history</strong>.',
            'Recency and purchase amount show a <strong>moderate negative correlation</strong>.',
            'Income and age have a weak positive correlation.',
          ]} />
        </Card>
      </div>
    </>
  );
}
