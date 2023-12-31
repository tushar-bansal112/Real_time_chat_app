import React from 'react'
import videobg from './videos/background.mp4';
import Vector from './images/Vector.svg'
import './login.css';
// import WebcamFeed from '../src/components/WebcamFeed/WebcamFeed';
// import MuteButton from '../src/components/MuteButton/MuteButton';
import VideoComponent from '../src/components/VideoComponent/VideoComponent';
import ChatButton from '../src/components/ChatButton/ChatButton';
import ChatMsg from '../src/components/ChatMsg/ChatMsg';
import PauseButton from '../src/components/PauseButton/PauseButton';
function Login() {


  return (
    <div className="chat" >
        <video autoPlay loop muted>
          <source src={videobg} type="video/mp4"></source>
        </video>
        <div className='navbar'>
          <img className="img" src={Vector} alt="vector"/>
        </div>
        <div className="main_container">
          <div className="vid_container">
            <VideoComponent />
            {/* <WebcamFeed/>  */}
            {/* <MuteButton />
            <VolumeSlider /> */}
          </div>
          <div className="chat_container">
            <div className="chat_msg">
              <ChatMsg/>
              <ChatButton/>
            </div>
            <PauseButton/>
            
          </div>
        </div>
    </div>
  )
}


export default Login;
