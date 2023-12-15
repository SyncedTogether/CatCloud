import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import "./css/App.css";

function App() {
  const { currentUser } = useAuth();

  return (
    <Router>
      <div className="App">
        <Routes>{currentUser ? <Route path="/" element={<HomePage />} /> : <Route path="/" element={<LoginPage />} />}</Routes>
      </div>
    </Router>
  );
}

export default App;
