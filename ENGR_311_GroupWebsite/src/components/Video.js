import React from "react";

const Video = ({ title, videoURL }) => {
  return (
    <div>
      <h3>{title}</h3>
      <iframe title="videoPlayer" src={videoURL}></iframe>
    </div>
  );
};

export default Video;
