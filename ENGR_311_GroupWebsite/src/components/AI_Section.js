import React from "react";
import Video from "./Video";
import SectionHeader from "./SectionHeader";

const AI_Section = () => {
  return (
    <div id="ai">
      <SectionHeader title="Artificial Intelligence" icon="/" />
      <Video title="AI Video 1" videoURL="https://youtube.com/AIVideo1"></Video>
      <p>Paraphraph summary on AI video 1</p>
      <Video title="AI Video 2" videoURL="https://youtube.com/AIVideo2"></Video>
      <p>Paraphraph summary on AI video 2</p>
    </div>
  );
};

export default AI_Section;
