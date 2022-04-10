import React from "react";
import Video from "./Video";
import SectionHeader from "./SectionHeader";

const Analytics_Section = () => {
  return (
    <div id="analytics">
      <SectionHeader title="Analytics" />
      <Video
        title="Analytics Video 1"
        videoURL="https://youtube.com/AnalyticsVideo1"
      ></Video>
      <p>Paraphraph summary on Analytics video 1</p>
      <Video
        title="Analytics Video 2"
        videoURL="https://youtube.com/AnalyticsVideo2"
      ></Video>
      <p>Paraphraph summary on Analytics video 2</p>
    </div>
  );
};

export default Analytics_Section;
