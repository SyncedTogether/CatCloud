import React from 'react';
import './App.css';
import { auth } from './auth';

import LoginPage from './components/LoginPage';

import { useAuth } from './contexts/AuthContext';

function App() {
  const { currentUser } = useAuth();

  return (
    <div className="App">
      <header className="App-header">
        {currentUser ? (
          <div>
            <h1>Welcome, {currentUser.displayName}!</h1>
            <button onClick={() => auth.signOut()}>Log Out</button>
          </div>
        ) : (
          <LoginPage />
        )}
      </header>
    </div>
  );
}


export default App;
