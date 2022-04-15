import React from "react";
import Video from "./Video";
import SectionHeader from "./SectionHeader";

const AI_Section = () => {
  return (
    <div id="ai" className="section-body">
      <SectionHeader title="Artificial Intelligence" />
      <Video
        title="Introduction to AI: Neural Networks"
        videoURL="https://www.youtube.com/embed/9Bi-i8YY5Q8"
        videoCaption="In this video, we discuss an introduction to Artificial Intelligence and its concepts.  While diving deeper into the functionality of Neural Networks."
      ></Video>

      <Video
        title="Introduction to AI: Neural Networks - Practical Examples"
        videoURL="https://www.youtube.com/embed/iAveVhqfFfc"
        videoCaption="In this video, we will go over some practical examples of neural networks that can be found throughout the internet."
      ></Video>
      <hr></hr>
    </div>
  );
};

export default AI_Section;
