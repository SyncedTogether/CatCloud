/**
 * @file HomePage.js
 * @description This file contains the HomePage component, which displays the home page of the application.
 */

import React from "react";
import Navbar from "./Navbar";
import MusicPlayer from "./MusicPlayer";
import MainPage from "./MainPage";
import "../css/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="main-page">
        <MainPage />
      </div>
      <MusicPlayer />
    </div>
  );
};

export default HomePage;
