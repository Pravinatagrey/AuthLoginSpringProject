import React, { useState } from 'react';
import { loginUser } from '../services/api';

const Login = ({ onLogin, setView }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await loginUser({ username, password });
            onLogin(user);
        } catch (err) {
            setError(err.response?.data || 'An error occurred during login.');
        }
    };

    return (
        <div className="auth-card">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Sign In</button>
            </form>
            <p>
                Don't have an account? <span onClick={() => setView('register')} className="link">Register</span>
            </p>
        </div>
    );
};

export default Login;