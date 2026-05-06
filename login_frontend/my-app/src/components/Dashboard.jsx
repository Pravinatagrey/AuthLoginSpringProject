import React from 'react';

const Dashboard = ({ user, onLogout }) => {
    return (
        <div className="dashboard-card">
            <h2>Welcome back, {user.username}!</h2>
            <p>Email: {user.email}</p>
            <button onClick={onLogout}>Sign Out</button>
        </div>
    );
};

export default Dashboard;