import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = ({ setAuth }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setAuth({ token: null, role: null });
    navigate('/login');
  };
  return (
    <button onClick={handleLogout} className="logout-btn">Logout</button>
  );
};

export default Logout;
