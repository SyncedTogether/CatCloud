// src/components/HomePage.js
import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const HomePage = () => {
    const { currentUser, logout } = useAuth();

    return (
        <div>
            <h1>Home Page</h1>
            <h2>Welcome, {currentUser.displayName}!</h2>
            <button onClick={logout}>Log Out</button>
        </div>
    );
}

export default HomePage;
