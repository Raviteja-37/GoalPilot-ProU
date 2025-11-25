// src/components/Navbar/index.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">GoalPilot</div>
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar;
