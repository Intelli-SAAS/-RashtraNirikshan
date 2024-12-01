import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Ministries from './pages/Ministries';
import RTI from './pages/RTI';
import Budget from './pages/Budget';
import Performance from './pages/Performance';
import Grievances from './pages/Grievances';
import ExternalAffairs from './pages/ministry/ExternalAffairs';
import Finance from './pages/ministry/Finance';
import Railways from './pages/ministry/Railways';
import Agriculture from './pages/ministry/Agriculture';
import Health from './pages/ministry/Health';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/rti" element={<RTI />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/grievances" element={<Grievances />} />
          <Route path="/ministry/external-affairs" element={<ExternalAffairs />} />
          <Route path="/ministry/finance" element={<Finance />} />
          <Route path="/ministry/railways" element={<Railways />} />
          <Route path="/ministry/agriculture" element={<Agriculture />} />
          <Route path="/ministry/health" element={<Health />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;