import { React,  useContext, useEffect } from 'react'
import videobg from './videos/background.mp4';
import Vector from './images/Vector.svg'
import './home.css';
import VideoComponent from './components/VideoComponent/VideoComponent';
import ChatButton from './components/ChatButton/ChatButton';
import ChatMsg from './components/ChatMsg/ChatMsg';
import PauseButton from './components/PauseButton/PauseButton';
import { AppContext } from './Context/AppContext';
import VideoComponent2 from './components/VideoComponent2/VideoComponent2';
import InputBox from './components/InputBox/InputBox';
import { useNavigate } from 'react-router-dom';



const Home = ({ token }) => {
  let navigate = useNavigate();
  //If user is not logged in

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  const { messages, setMessages, speechRecognition, setSpeechRecognition, isListening, setIsListening,flag,setflag } = useContext(AppContext);
  const Video =() =>{
    return(
      <div>
        <div className="vid_container">
            <VideoComponent />
          </div>
          <div className="chat_container">
            <div className="chat_msg">
              <ChatMsg token={token} />
              <ChatButton />
            </div>
            <PauseButton/>
          </div>
      </div>
    )
  }

  const Chat =() =>{
    return(
      <div>
        <div className='chat_box'>
              <ChatMsg token={token}/>
              <InputBox/>
            </div>
            <div className="chat_container">
                <VideoComponent2/>
                <PauseButton/>
            </div>
      </div>
    )
  }

  return (
    <div className="chat" >
        <video autoPlay loop muted>
          <source src={videobg} type="video/mp4"></source>
        </video>
        <div className='navbar'>
          <img className="img" src={Vector} alt="vector"/>
        </div>
        <div className="main_container">
        {flag? Chat() : Video()}
          
        </div>
    </div>
  )
}


export default Home;
