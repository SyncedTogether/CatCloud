import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { auth } from './auth';

import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

import { useAuth } from './contexts/AuthContext';

function App() {
  const { currentUser } = useAuth();

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            {currentUser ? (
              <Route path="/" element={<HomePage />} />
            ) : (
              <Route path="/" element={<LoginPage />} />
            )}
          </Routes>
        </header>
      </div>
    </Router>
  );
}


export default App;
