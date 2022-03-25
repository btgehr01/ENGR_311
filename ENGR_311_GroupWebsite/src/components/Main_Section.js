import React from "react";
import TopBanner from "./TopBanner";
import AI_Section from "./AI_Section";
import Automation_Section from "./Automation_Section";
import Analytics_Section from "./Analytics_Section";

const Main_Section = () => {
  return (
    <div>
      <TopBanner />
      <h3>Introduction</h3>
      <AI_Section />
      <Automation_Section />
      <Analytics_Section />
    </div>
  );
};

export default Main_Section;
