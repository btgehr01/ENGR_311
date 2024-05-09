import React from "react";
import "./TopBanner.css";
import robotIcon from "../assets/robotIcon.png";

const TopBanner = () => {
  return (
    <div className="top-banner">
      <div className="top-banner-left">
        <div className="title">
          <h1>
            <span className="extra">Developing</span> curriculum for
            <span className="extra"> Artificial Intelligence</span>, Automation,
            and Analytics
          </h1>
          <fieldset>
            <legend>section</legend>
            <div className="top-banner-left-navigation">
              <a href="#ai">AI</a>
              <a href="#automation">Automation</a>
              <a href="#analytics">Analytics</a>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="top-banner-right rotate-scale-up">
        <img src={robotIcon} />
      </div>
    </div>
  );
};

export default TopBanner;
