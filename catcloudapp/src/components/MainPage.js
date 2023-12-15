/**
 * @file MainPage.js
 * @description This file contains the MainPage component, which is responsible for rendering the home page of the application.
 */

import React from "react";
import { useAuth } from "../contexts/AuthContext";
import "../css/MainPage.css";

const MainPage = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Welcome, {currentUser.displayName}!</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default MainPage;
