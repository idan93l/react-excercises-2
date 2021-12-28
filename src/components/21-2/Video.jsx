import React, { useState, useEffect, useRef } from "react";
import ShortVideo from './20-3-video.mp4'

export default function Video() {
  const video = useRef();

  const playVideo = () => {
    video.current.play()
  };

  const pauseVideo = () => {
    video.current.pause();
  };

  return (
    <div>
      <video
        ref={video}
        src={ShortVideo}
        type="video/mp4"
        style={{height: '90vh'}}
      />

      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
      </div>
    </div>
  );
}
