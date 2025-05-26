import React from 'react';

const VideoPlayer = () => {
  return (
    <video
      className="w-full h-full rounded-xl shadow-lg"
      controls
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/banda.mp4" type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
  );
};

export default VideoPlayer; 