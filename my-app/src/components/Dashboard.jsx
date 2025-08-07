import React from 'react';
import './Dashboard.css';

const Dashboard = ({ auth }) => {
  return (
    <div className="dashboard-container">
      <h2>Welcome, {auth.role}!</h2>
      <p>This is a protected dashboard page.</p>
    </div>
  );
};

export default Dashboard;
