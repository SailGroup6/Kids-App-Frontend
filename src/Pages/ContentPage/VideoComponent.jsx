import React, { useRef, useState } from 'react';

const VideoComponent = ({ videoUrl, onVideoEnd }) => {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    if (onVideoEnd) {
      onVideoEnd();
    }
  };

  return (
    <video ref={videoRef} src={videoUrl} onEnded={handleVideoEnd} controls />
  );
};

export default VideoComponent;
