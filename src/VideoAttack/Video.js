import React from "react";
import './Video.css'

const Video = ({ src }) => {
    return (
      <video controls className="videoAttack">
        <source src={src} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    );
  };

  export  default Video