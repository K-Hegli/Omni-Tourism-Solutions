import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import WhoWeAre from './pages/WhoWeAre';
import ServicesAndPartners from './pages/ServicesAndPartners';
import AboutYou from './pages/AboutYou';

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<WhoWeAre />} />
  <Route path="/services" element={<ServicesAndPartners />} />
  {/* Legacy redirects */}
  <Route path="/what-we-do" element={<Navigate to="/services" replace />} />
  <Route path="/next-stage" element={<Navigate to="/services" replace />} />
        <Route path="/about-you" element={<AboutYou />} />
      </Routes>
    </Router>
  );
};

export default App;