import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { FileBarChart, Calendar, Users, DollarSign, BarChart3, Download, TrendingUp, Filter, Eye, Settings, DownloadCloud, FileText, Share2, Lightbulb } from 'lucide-react';
import { StatCard, PageHeader, Card, InsightList, Badge, SegmentBadge } from '../components/UIComponents';

export default function Reports() {
  const [activeTab, setActiveTab] = useState('Overview');

  const campaignChart = {
    labels: ['Mens E-Mail', 'Womens E-Mail', 'No E-Mail (Baseline)'],
    datasets: [
      { label: 'Conversion Uplift', data: [12.4, 8.7, 0], backgroundColor: '#00e5a0' },
      { label: 'Spend Uplift', data: [18.2, 11.5, 0], backgroundColor: '#3b82f6' },
      { label: 'Revenue Uplift', data: [24.1, 16.3, 0], backgroundColor: '#f97316' },
    ]
  };

  const segmentChart = {
    labels: ['Persuadable', 'Sure Thing', 'Sleeping Dog', 'Lost Cause'],
    datasets: [
      { label: 'Conversion Uplift', data: [24.1, 10.2, 3.4, -2.1], backgroundColor: '#00e5a0' },
      { label: 'Spend Uplift', data: [22.3, 8.9, 2.1, -1.8], backgroundColor: '#3b82f6' },
      { label: 'Revenue Uplift', data: [28.6, 12.1, 4.8, -0.5], backgroundColor: '#f97316' },
    ]
  };

  const ageChart = {
    labels: ['<25', '25-34', '35-44', '45-54', '55+'],
    datasets: [{ data: [15, 25, 12, 10, 8], backgroundColor: '#00e5a0' }]
  };

  const incomeChart = {
    labels: ['Low', 'Medium', 'High', 'Very High'],
    datasets: [{ data: [10, 20, 15, 8], backgroundColor: '#3b82f6' }]
  };

  const chartOpts = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { x: { grid: { display: false }, ticks: { color: '#5a6680' } }, y: { grid: { display: false }, ticks: { color: '#5a6680', callback: v => v + '%' } } }
  };

  const tableData = [
    { id: 'CUST_1045', segment: 'Persuadable', uplift: '+28.4%', roi: '5.2x', camp: 'Mens E-Mail' },
    { id: 'CUST_2231', segment: 'Persuadable', uplift: '+26.7%', roi: '4.9x', camp: 'Mens E-Mail' },
    { id: 'CUST_0876', segment: 'Sure Thing', uplift: '+18.2%', roi: '3.1x', camp: 'Womens E-Mail' },
    { id: 'CUST_9910', segment: 'Persuadable', uplift: '+17.5%', roi: '3.8x', camp: 'Mens E-Mail' },
    { id: 'CUST_4421', segment: 'Sure Thing', uplift: '+15.9%', roi: '2.9x', camp: 'Womens E-Mail' },
  ];

  return (
    <>
      <PageHeader title="Re" titleAccent="ports" subtitle="Generate, explore, and download insights to track performance and communicate impact." badgeIcon={FileText} badgeTitle="Comprehensive & Actionable Reports" badgeText="Generate detailed reports on customer uplift, campaign performance, and ROI." badgeBg="var(--accent-teal-dim)" />

      <div className="tabs mb-16">
        {['Overview', 'Campaign Reports', 'Segment Reports', 'Customer Reports', 'Model Reports', 'Custom Report'].map(t => (
          <button key={t} className={`tab ${activeTab === t ? 'active' : ''}`} onClick={() => setActiveTab(t)}>{t}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1.5fr', gap: 16, marginBottom: 20 }}>
        <div className="form-group"><label className="form-label" style={{ fontSize: '0.7rem' }}>Date Range</label><div className="form-input-icon"><Calendar className="icon" size={14} /><select className="form-select" style={{ padding: '8px 10px 8px 32px' }}><option>Last 6 Months</option></select></div></div>
        <div className="form-group"><label className="form-label" style={{ fontSize: '0.7rem' }}>Campaign Group</label><select className="form-select" style={{ padding: '8px 10px' }}><option>All Campaigns</option></select></div>
        <div className="form-group"><label className="form-label" style={{ fontSize: '0.7rem' }}>Segment</label><select className="form-select" style={{ padding: '8px 10px' }}><option>All Segments</option></select></div>
        <div className="form-group"><label className="form-label" style={{ fontSize: '0.7rem' }}>Customer Type</label><select className="form-select" style={{ padding: '8px 10px' }}><option>All Customers</option></select></div>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}><button className="btn btn-primary" style={{ width: '100%', height: 38 }}><DownloadCloud size={16} /> Generate Report</button></div>
      </div>

      <div className="stat-cards-row mb-20">
        <StatCard icon={Users} label="Total Customers" value="64,124" change="12.4% vs previous period" color="teal" />
        <StatCard icon={DollarSign} label="Total Revenue Uplift" value="₹12,43,230" change="18.7% vs previous period" color="blue" />
        <StatCard icon={BarChart3} label="Conversion Uplift" value="+12.4%" change="2.1% vs previous period" color="pink" />
        <StatCard icon={TrendingUp} label="Incremental ROI" value="3.8x" change="0.6x vs previous period" color="orange" />
      </div>

      <div className="grid-2 mb-20">
        <Card icon={BarChart3} title="Campaign Performance Report" subtitle="Compare performance across campaigns." actions={<div className="tabs" style={{ marginBottom: 0 }}><Badge color="teal">Conversion Uplift</Badge><Badge color="blue">Spend Uplift</Badge><Badge color="orange">Revenue Uplift</Badge></div>}>
          <div className="chart-container" style={{ height: 220 }}><Bar data={campaignChart} options={chartOpts} /></div>
        </Card>
        <Card icon={Users} title="Segment Performance Report" subtitle="Compare key metrics across causal segments." actions={<div className="tabs" style={{ marginBottom: 0 }}><Badge color="teal">Conversion Uplift</Badge><Badge color="blue">Spend Uplift</Badge><Badge color="orange">Revenue Uplift</Badge></div>}>
          <div className="chart-container" style={{ height: 220 }}><Bar data={segmentChart} options={chartOpts} /></div>
        </Card>
      </div>

      <div className="grid-2-1 mb-20">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card icon={BarChart3} title="Customer Insights Report" subtitle="Key statistics and distribution of customers.">
            <div className="tabs" style={{ marginBottom: 12 }}><button className="tab active">Demographics</button><button className="tab">Purchase Behavior</button><button className="tab">Engagement</button><button className="tab">Income & Recency</button></div>
            <div className="grid-2">
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: 8 }}>Age Distribution</div>
                <div className="chart-container" style={{ height: 120 }}><Bar data={ageChart} options={{ ...chartOpts, scales: { x: { grid: { display: false }, ticks: { color: '#5a6680', font: { size: 9 } } }, y: { display: false } } }} /></div>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: 8 }}>Income Distribution</div>
                <div className="chart-container" style={{ height: 120 }}><Bar data={incomeChart} options={{ ...chartOpts, scales: { x: { grid: { display: false }, ticks: { color: '#5a6680', font: { size: 9 } } }, y: { display: false } } }} /></div>
              </div>
            </div>
          </Card>
          
          <Card icon={Download} title="Report Downloads" subtitle="Generate and download different types of reports.">
            <div className="grid-4" style={{ marginTop: 10 }}>
              <button className="btn btn-secondary" style={{ padding: '14px 10px', flexDirection: 'column', gap: 8, height: 'auto' }}><FileText size={24} style={{ color: 'var(--accent-red)' }} /> Executive Summary</button>
              <button className="btn btn-secondary" style={{ padding: '14px 10px', flexDirection: 'column', gap: 8, height: 'auto' }}><FileText size={24} style={{ color: 'var(--accent-blue)' }} /> Campaign Report</button>
              <button className="btn btn-secondary" style={{ padding: '14px 10px', flexDirection: 'column', gap: 8, height: 'auto' }}><FileText size={24} style={{ color: 'var(--accent-green)' }} /> Segment Analysis</button>
              <button className="btn btn-secondary" style={{ padding: '14px 10px', flexDirection: 'column', gap: 8, height: 'auto' }}><FileText size={24} style={{ color: 'var(--accent-purple)' }} /> Customer Report</button>
            </div>
          </Card>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Card icon={Users} title="Top Performing Customers (Sample)" subtitle="Customers with highest predicted uplift and ROI potential." actions={<button className="btn btn-outline btn-sm"><Download size={14} /> Export CSV</button>}>
            <table className="data-table">
              <thead><tr><th>Customer ID</th><th>Segment</th><th>Predicted Uplift</th><th>Expected ROI</th><th>Recommended Campaign</th></tr></thead>
              <tbody>
                {tableData.map(c => (
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td><SegmentBadge segment={c.segment} /></td>
                    <td style={{ color: 'var(--accent-teal)' }}>{c.uplift}</td>
                    <td><Badge color={c.roi.startsWith('5') || c.roi.startsWith('4') ? 'green' : 'blue'}>{c.roi}</Badge></td>
                    <td>{c.camp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
          <Card icon={Lightbulb} title="Key Takeaways">
            <InsightList items={[
              '<strong>Mens E-Mail</strong> campaign drives highest incremental revenue and ROI.',
              '<strong>Persuadable segment</strong> offers the largest growth opportunity.',
              'Target high-uplift customers to <strong>maximize marketing ROI</strong>.',
            ]} />
          </Card>
        </div>
      </div>
    </>
  );
}
