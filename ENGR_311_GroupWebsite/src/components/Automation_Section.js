import React from "react";
import Video from "./Video";
import SectionHeader from "./SectionHeader";

const Automation_Section = () => {
  return (
    <div id="automation" className="section-body">
      <SectionHeader title="Automation" />
      <Video
        title="Intro to Automation 1"
        videoURL="https://www.youtube.com/embed/GUlJQSYNNEQ"
        videoCaption="In this video we will go through the definition and history of automation."
      ></Video>
      <Video
        title="Intro to Automation 2"
        videoURL="https://www.youtube.com/embed/ENUHk9iYwCg"
        videoCaption="In this video, we cover the types of automation and the reasons why you should use or not use automation."
      ></Video>
      <hr></hr>
    </div>
  );
};

export default Automation_Section;
