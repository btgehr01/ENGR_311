import React from "react";
import aiIcon from "../assets/AIIcon.png";
import analyticsIcon from "../assets/analyticsIcon.png";
import automationIcon from "../assets/automationIcon.png";
import "./SectionHeader.css";

const SectionHeader = ({ title }) => {
  const selectIcon = (title) => {
    if (title === "Artificial Intelligence") {
      return aiIcon;
    } else if (title === "Analytics") {
      return analyticsIcon;
    } else {
      return automationIcon;
    }
  };
  return (
    <div className="section-header">
      <div className="section-header-icon">
        <img width="100px" src={selectIcon(title)} alt={title + " icon"}></img>
      </div>
      <h1>{title}</h1>
    </div>
  );
};

export default SectionHeader;
