import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
    const [user, setUser] = useState(null);
    const [view, setView] = useState('login'); // 'login' or 'register'

    const handleLogin = (userData) => {
        setUser(userData);
    };

    const handleLogout = () => {
        setUser(null);
        setView('login');
    };

    return (
        <div className="container">
            {user ? (
                <Dashboard user={user} onLogout={handleLogout} />
            ) : view === 'login' ? (
                <Login onLogin={handleLogin} setView={setView} />
            ) : (
                <Register setView={setView} />
            )}
        </div>
    );
}

export default App;