import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Pages
import Home from './pages/Home';
import Upload from './pages/Upload';
import Dashboard from './pages/Dashboard';
import Statistics from './pages/Statistics';
import Recommendations from './pages/Recommendations';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword'; // ✅ Import
import Footer from './components/Footer';


// Recommendation Details
import BrownRust from './components/details/BrownRust';
import BlackRust from './components/details/BlackRust';
import SoilHealth from './components/details/SoilHealth';
import FieldInspection from './components/details/FieldInspection';
import YellowRust from './components/details/YellowRust';
import WeatherMonitoring from './components/details/WeatherMonitoring';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };
  return (
    <Router>
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
      <Routes>
      <Route path="/" 
             element={
               isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />
          }
        />
      <Route path="/signup" element={<Signup />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} /> 
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      {isAuthenticated && (
          <>
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stats" element={<Statistics />} />
        <Route path="/recommendations" element={<Recommendations />} />

        
        {/* Unique paths for each recommendation detail */}
        <Route path="/recommendation/brown-rust" element={<BrownRust />} />
        
        <Route path="/recommendation/black-rust" element={<BlackRust />} />

        <Route path="/recommendation/yellow-rust" element={<YellowRust />} />

        <Route path="/recommendation/soil-health" element={<SoilHealth />} />
        <Route path="/recommendation/field-inspection" element={<FieldInspection />} />
       
        <Route path="/recommendation/weather-monitoring" element={<WeatherMonitoring />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<AboutUs />} />
        </>
        )}

        {!isAuthenticated && <Route path="*" element={<Navigate to="/" />} />}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;