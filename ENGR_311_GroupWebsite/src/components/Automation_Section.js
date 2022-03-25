import React from "react";
import Video from "./Video";
import SectionHeader from "./SectionHeader";

const Automation_Section = () => {
  return (
    <div>
      <SectionHeader title="Automation" icon="/" />
      <Video
        title="Automation Video 1"
        videoURL="https://youtube.com/AutomationVideo1"
      ></Video>
      <p>Paraphraph summary on Automation video 1</p>
      <Video
        title="Automation Video 2"
        videoURL="https://youtube.com/AutomationVideo2"
      ></Video>
      <p>Paraphraph summary on Automation video 2</p>
    </div>
  );
};

export default Automation_Section;
