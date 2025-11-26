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

      {/* Dashboard → Show Logout */}
      {isDashboard && token && <button onClick={handleLogout}>Logout</button>}

      {/* Login Page → Show Register */}
      {isLogin && <button onClick={goToRegister}>Register</button>}

      {/* Register Page → Show Login */}
      {isRegister && <button onClick={goToLogin}>Login</button>}
    </nav>
  );
};

export default Navbar;
