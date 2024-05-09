import React from "react";
import "./Video.css";

const Video = ({ title, videoURL, videoCaption }) => {
  return (
    <div className="center-video-content">
      <h3>{title}</h3>
      <iframe
        title="videoPlayer"
        width="700"
        height="550"
        src={videoURL}
        allow="fullscreen"
      ></iframe>
      <p className="video-p">{videoCaption}</p>
    </div>
  );
};

export default Video;
