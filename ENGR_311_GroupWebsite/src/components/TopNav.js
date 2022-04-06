import React from "react";
import "./TopNav.css";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="navBar">
        <div className="navBar-logo-container">
          <h1>TEAM LOGO</h1>
        </div>
        <div className="navBar-link-container">
          <Link to="/" className="navBar-link">
            Home
          </Link>
          <Link to="/game" className="navBar-link">
            Interactive Game
          </Link>
        </div>
        <div className="navBar-button-container">
          <Link to="/team" className="navBar-button">
            <p>Meet Team</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
