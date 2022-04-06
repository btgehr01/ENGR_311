import React from "react";
import TopBanner from "./TopBanner";
import AI_Section from "./AI_Section";
import Automation_Section from "./Automation_Section";
import Analytics_Section from "./Analytics_Section";
import { Link } from "react-router-dom";
import "./Main_Section.css";

const Main_Section = () => {
  return (
    <div className="Main_Section">
      <TopBanner />
      <h1>Introduction</h1>
      <AI_Section />
      <Automation_Section />
      <Analytics_Section />
    </div>
  );
};

export default Main_Section;
