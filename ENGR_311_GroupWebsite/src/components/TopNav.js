import React from "react";
import "./TopNav.css";
import { Link, useLocation } from "react-router-dom";

const TopNav = () => {
  const location = useLocation();
  return (
    <div className="top-nav">
      <div
        className={`navBar ${
          location.pathname.split("/")[1] === "game" ? "shadow" : ""
        }`}
        style={
          location.pathname.split("/")[1] === "game"
            ? { backgroundColor: "#e6eaea" }
            : { backgroundColor: "#41b3a3" }
        }
      >
        <div className="navBar-logo-container">
          <h1>TEAM LOGO</h1>
        </div>
        <div className="navBar-link-container">
          <Link
            to="/"
            className={`${
              location.pathname.split("/")[1] === "game"
                ? "navBar-link-game"
                : "navBar-link"
            }`}
          >
            Home
          </Link>
          <Link
            to="/game"
            className={`${
              location.pathname.split("/")[1] === "game"
                ? "navBar-link-game"
                : "navBar-link"
            }`}
          >
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
