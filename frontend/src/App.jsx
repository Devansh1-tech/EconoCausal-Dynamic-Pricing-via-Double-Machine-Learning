import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import CustomerAnalysis from './pages/CustomerAnalysis';
import Prediction from './pages/Prediction';
import Segmentation from './pages/Segmentation';
import Recommendations from './pages/Recommendations';
import ModelInsights from './pages/ModelInsights';
import DataExplorer from './pages/DataExplorer';
import Reports from './pages/Reports';
import About from './pages/About';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-wrapper">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customer-analysis" element={<CustomerAnalysis />} />
            <Route path="/prediction" element={<Prediction />} />
            <Route path="/segmentation" element={<Segmentation />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/model-insights" element={<ModelInsights />} />
            <Route path="/data-explorer" element={<DataExplorer />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
