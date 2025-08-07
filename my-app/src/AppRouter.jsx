import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Logout from './components/Logout';

const Unauthorized = () => <div><h2>Unauthorized</h2><p>You do not have access to this page.</p></div>;

const AppRouter = () => {
  const [auth, setAuth] = useState({ token: null, role: null });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token && role) {
      setAuth({ token, role });
    }
  }, []);

  return (
    <Router>
      {auth.token && <Logout setAuth={setAuth} />}
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/dashboard" element={
          <ProtectedRoute auth={auth} allowedRoles={['ADMIN', 'USER']}>
            <Dashboard auth={auth} />
          </ProtectedRoute>
        } />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<Navigate to={auth.token ? '/dashboard' : '/login'} replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
