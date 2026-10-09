import { Info, Target, Lightbulb, Users, Mail, BookOpen, CheckCircle2, Database, Shield, Zap, TrendingUp, Globe, ArrowRight, Mail as MailIcon } from 'lucide-react';
import { PageHeader, Card, Badge } from '../components/UIComponents';

export default function About() {
  return (
    <>
      <PageHeader title="About" titleAccent="EconoCausal" subtitle="AI-Powered Personalized Marketing Campaign Optimization using Causal AI" badgeIcon={Lightbulb} badgeTitle="Smarter Marketing. Greater Impact." badgeText="Evidence-based decisions for higher ROI and better customer experiences." badgeBg="var(--accent-teal-dim)" />

      <div className="card mb-20" style={{ background: 'linear-gradient(135deg, rgba(0,229,160,0.05), rgba(0,212,255,0.05))', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ color: 'var(--accent-teal)', fontWeight: 700, marginBottom: 12 }}>Our Mission</div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: 24, maxWidth: 600 }}>
            Use Causal AI to Make Marketing Smarter, Fairer and More Profitable.
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: 600, marginBottom: 32 }}>
            EconoCausal helps businesses understand the true impact of marketing campaigns on individual customers using causal inference and machine learning. Our goal is to optimize campaign strategies, maximize ROI, and avoid wasting resources on customers who are unlikely to respond.
          </p>
          
          <div style={{ display: 'flex', gap: 40 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--accent-teal)', marginBottom: 4 }}><Users size={24} /><span style={{ fontSize: '1.5rem', fontWeight: 800 }}>64K+</span></div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Customers Analyzed</div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--accent-blue)', marginBottom: 4 }}><Mail size={24} /><span style={{ fontSize: '1.5rem', fontWeight: 800 }}>3</span></div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Campaign Groups</div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--accent-green)', marginBottom: 4 }}><BookOpen size={24} /><span style={{ fontSize: '1.5rem', fontWeight: 800 }}>10</span></div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Notebooks Pipeline</div>
            </div>
          </div>
        </div>
        
        {/* Mock background graphics */}
        <div style={{ position: 'absolute', right: -50, top: -50, width: 600, height: 600, background: 'radial-gradient(circle, rgba(0,229,160,0.1) 0%, transparent 70%)', zIndex: 1 }} />
      </div>

      <div className="grid-3-col-layout mb-20" style={{ gridTemplateColumns: '1fr 1.5fr 1fr' }}>
        <Card icon={Target} title="Key Objectives">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 10 }}>
            <div style={{ display: 'flex', gap: 12 }}><CheckCircle2 size={18} style={{ color: 'var(--accent-teal)', flexShrink: 0 }} /><div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>Estimate the causal effect of marketing campaigns on each customer.</div></div>
            <div style={{ display: 'flex', gap: 12 }}><CheckCircle2 size={18} style={{ color: 'var(--accent-teal)', flexShrink: 0 }} /><div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>Identify high-value customers for targeted campaigns.</div></div>
            <div style={{ display: 'flex', gap: 12 }}><CheckCircle2 size={18} style={{ color: 'var(--accent-teal)', flexShrink: 0 }} /><div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>Optimize marketing budget allocation.</div></div>
            <div style={{ display: 'flex', gap: 12 }}><CheckCircle2 size={18} style={{ color: 'var(--accent-teal)', flexShrink: 0 }} /><div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>Provide explainable and data-driven recommendations.</div></div>
          </div>
        </Card>

        <Card icon={Settings} title="How It Works">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 30, padding: '0 20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--accent-teal-dim)', border: '1px solid var(--accent-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Database size={32} style={{ color: 'var(--accent-teal)' }} /></div>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, textAlign: 'center' }}>Customer<br/>Data</div>
            </div>
            <ArrowRight size={24} style={{ color: 'var(--text-muted)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--accent-blue-dim)', border: '1px solid var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><BrainCircuit size={32} style={{ color: 'var(--accent-blue)' }} /></div>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, textAlign: 'center' }}>Causal AI<br/>Models<br/><span style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>(DoWhy, EconML)</span></div>
            </div>
            <ArrowRight size={24} style={{ color: 'var(--text-muted)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--accent-purple-dim)', border: '1px solid var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><TrendingUp size={32} style={{ color: 'var(--accent-purple)' }} /></div>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, textAlign: 'center' }}>Customer<br/>Uplift<br/>Prediction</div>
            </div>
            <ArrowRight size={24} style={{ color: 'var(--text-muted)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--accent-orange-dim)', border: '1px solid var(--accent-orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Target size={32} style={{ color: 'var(--accent-orange)' }} /></div>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, textAlign: 'center' }}>Optimized<br/>Marketing<br/>Strategy</div>
            </div>
          </div>
        </Card>

        <Card icon={Sparkles} title="Key Benefits">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 10 }}>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ color: 'var(--accent-teal)', marginTop: 2 }}><TrendingUp size={20} /></div>
              <div><div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Higher ROI</div><div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Focus budget on customers with real uplift potential.</div></div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ color: 'var(--accent-blue)', marginTop: 2 }}><Users size={20} /></div>
              <div><div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Personalized Campaigns</div><div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Send the right message to the right audience.</div></div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ color: 'var(--accent-orange)', marginTop: 2 }}><Shield size={20} /></div>
              <div><div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Reduce Wasted Spend</div><div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Avoid targeting customers unlikely to respond.</div></div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ color: 'var(--accent-yellow)', marginTop: 2 }}><Lightbulb size={20} /></div>
              <div><div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)' }}>Explainable Decisions</div><div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>Transparent and trustworthy AI-driven insights.</div></div>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid-3-col-layout mb-20">
        <Card icon={Database} title="Dataset">
          <div style={{ marginTop: 10 }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8 }}>Hillstrom Email Marketing Dataset</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 16 }}>We use the Hillstrom (MineThatData) Email Marketing dataset with 64,000+ customers, including Mens E-Mail, Womens E-Mail, and No E-Mail (control group) campaigns.</div>
            <div style={{ display: 'flex', gap: 20 }}>
              <div><div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-teal)' }}>64K+</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Customers</div></div>
              <div><div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-blue)' }}>3</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Campaign Groups</div></div>
              <div><div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent-purple)' }}>100+</div><div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Features</div></div>
            </div>
          </div>
        </Card>

        <Card icon={Terminal} title="Tech Stack">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 10 }}>
            {['Python', 'Pandas', 'Scikit-learn', 'DoWhy', 'EconML', 'Causal Inference', 'Matplotlib', 'Seaborn', 'Jupyter'].map(tech => (
              <div key={tech} style={{ background: 'var(--bg-input)', border: '1px solid var(--border-input)', borderRadius: 'var(--radius-sm)', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--bg-card)', border: '1px solid var(--border-card)' }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{tech}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card icon={Users} title="Our Team">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 10, marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accent-blue-dim)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>DG</div>
                <div><div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Devansh Gupta</div><div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Machine Learning & Causal AI</div></div>
              </div>
              <Badge color="green">Team Lead</Badge>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accent-blue-dim)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>N</div>
                <div><div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Naved</div><div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Data Analysis & Model Development</div></div>
              </div>
              <Badge color="blue">Member</Badge>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accent-purple-dim)', color: 'var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>A</div>
                <div><div style={{ fontSize: '0.85rem', fontWeight: 700 }}>Amuliya</div><div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>Visualization & Strategy</div></div>
              </div>
              <Badge color="purple">Member</Badge>
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid var(--border-card)', paddingTop: 16 }}>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: 12 }}>Connect With Us</div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn btn-secondary btn-sm" style={{ flex: 1 }}><Globe size={14} /> GitHub Repository <ArrowRight size={14}/></button>
              <button className="btn btn-secondary btn-sm" style={{ flex: 1 }}><MailIcon size={14} /> Contact Us <ArrowRight size={14}/></button>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

// Temporary import placeholders for missing icons to avoid errors
function Settings(props) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>; }
function Terminal(props) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>; }
function BrainCircuit(props) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08 2.5 2.5 0 0 0 4.91.05L12 20V4.5Z"></path><path d="M16 8V5c0-1.1.9-2 2-2"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M19 15c-1.1 0-2-.9-2-2"></path></svg>; }
function Sparkles(props) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>; }
