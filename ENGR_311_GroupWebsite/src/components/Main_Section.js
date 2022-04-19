import React from "react";
import TopBanner from "./TopBanner";
import Introduction from "./Introduction";
import AI_Section from "./AI_Section";
import Automation_Section from "./Automation_Section";
import Analytics_Section from "./Analytics_Section";
import "./Main_Section.css";

const Main_Section = () => {
  return (
    <div className="Main_Section">
      <TopBanner />
      <div className="content">
        <Introduction />
        <AI_Section />
        <Automation_Section />
        <Analytics_Section />
      </div>
    </div>
  );
};

export default Main_Section;
