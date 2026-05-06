import React, { useState } from 'react';
import { registerUser } from '../services/api';

const Register = ({ setView }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser({ username, email, password });
            setMessage('Registration successful! Redirecting to login...');
            setError('');
            setTimeout(() => setView('login'), 2000);
        } catch (err) {
            setError(err.response?.data || 'Failed to register.');
            setMessage('');
        }
    };

    return (
        <div className="auth-card">
            <h2>Register</h2>
            {message && <p className="success">{message}</p>}
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <span onClick={() => setView('login')} className="link">Login</span>
            </p>
        </div>
    );
};

export default Register;