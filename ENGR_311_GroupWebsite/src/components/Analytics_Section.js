import React from "react";
import Video from "./Video";
import SectionHeader from "./SectionHeader";

const Analytics_Section = () => {
  return (
    <div id="analytics" className="section-body">
      <SectionHeader title="Analytics" />
      <Video
        title="Intro to Data Analytics"
        videoURL="https://www.youtube.com/embed/IPT9knAZ5YI"
        videoCaption="This is an introductory video on simple data analytics concepts. No prior experience or knowledge required."
      ></Video>
      <Video
        title="Data Analytics: Marketing Funnels"
        videoURL="https://www.youtube.com/embed/KbX0spwJwyM"
        videoCaption="This video explains the basics of marketing funnels and how they relate to data analytics."
      ></Video>
    </div>
  );
};

export default Analytics_Section;
