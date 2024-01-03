import React from 'react'
import WebcamFeed from '../WebcamFeed/WebcamFeed';
import VideoButton from '../VideoButton/VideoButton'; 
import './VideoComponent2.css'
function VideoComponent2() {
  return (
    <div className="video_container">
        <div className="webcam_feed">
          <WebcamFeed />
        </div>
        <div className="vid-button">
          <VideoButton/>
        </div>
      </div>
  )
}

export default VideoComponent2