import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars,  FaSignOutAlt } from 'react-icons/fa';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import '../styles/navbar.css';

const Navbar = ({ onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    onLogout(); 
    setDropdownOpen(false);
   
  };

  useEffect(() => {
    if (dropdownOpen) {
      const timer = setTimeout(() => {
        setDropdownOpen(false);
      }, 2000);
      return () => clearTimeout(timer); // Cleanup on re-render or close
    }
  }, [dropdownOpen]);
  
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">🌾 SmartRust</Link>
      </div>

      <div className={`navbar-center ${menuOpen ? 'open' : ''}`}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="navbar-right">
        <div className="user-icon" onClick={toggleDropdown}>
          <RiLogoutBoxRLine size={22} />
        </div>
        {dropdownOpen && (
          <div className="user-dropdown">
            <button onClick={handleLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        )}
        <div className="hamburger-icon" onClick={toggleMenu}>
          <FaBars size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

