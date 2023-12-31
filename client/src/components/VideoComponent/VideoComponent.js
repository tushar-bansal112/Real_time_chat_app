import React from 'react';
import WebcamFeed from '../WebcamFeed/WebcamFeed';
import MuteButton from '../MuteButton/MuteButton'; 
import VolumeSlider from '../VolumeSlider/VolumeSlider'; 
import './VideoComponent.css'; 

const VideoComponent = () => {
    return (
      <div className="video-container">
        <div className="webcam-feed">
          <WebcamFeed />
        </div>
        <div className="controls">
          <div className="mute-button">
            <MuteButton />
          </div>
          <div className="volume-slider">
            <VolumeSlider />
          </div>
        </div>
      </div>
    );
  };
  
export default VideoComponent;

