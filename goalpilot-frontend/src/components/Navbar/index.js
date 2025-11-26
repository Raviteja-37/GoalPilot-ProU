// src/components/Navbar/index.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = Cookies.get('token');

  const handleLogout = () => {
    Cookies.remove('token');
    navigate('/login');
  };

  const goToLogin = () => navigate('/login');
  const goToRegister = () => navigate('/register');

  const isDashboard = location.pathname === '/dashboard';
  const isLogin = location.pathname === '/login';
  const isRegister = location.pathname === '/register';

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/')}>
        GoalPilot
      </div>

      <div className="nav-actions">
        {isDashboard && token && <button onClick={handleLogout}>Logout</button>}
        {isLogin && <button onClick={goToRegister}>Register</button>}
        {isRegister && <button onClick={goToLogin}>Login</button>}
      </div>
    </nav>
  );
};

export default Navbar;
