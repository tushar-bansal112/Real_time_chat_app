import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { AppContext } from '../../Context/AppContext';

function VideoButton() {
  const { messages, setMessages, speechRecognition, setSpeechRecognition, isListening, setIsListening,flag,setflag } = useContext(AppContext);


  const handleButtonClick = () => {
    setflag(!flag)
  }
    return (
      <button onClick={handleButtonClick} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
        <div>
        <svg width="80" height="80" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 1171279476">
<circle id="Ellipse 43" cx="70.6667" cy="70.6667" r="70.6667" fill="#0084FF" fill-opacity="0.2"/>
<circle id="Ellipse 44" cx="70.1666" cy="71.1666" r="53.8413" transform="rotate(-0.347239 70.1666 71.1666)" fill="#0084FF" fill-opacity="0.5"/>
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M49.2143 50C46.7705 50 44.4268 50.9708 42.6988 52.6988C40.9708 54.4268 40 56.7705 40 59.2143V83.7857C40 86.2295 40.9708 88.5732 42.6988 90.3012C44.4268 92.0292 46.7705 93 49.2143 93H79.9286C82.3723 93 84.716 92.0292 86.444 90.3012C88.1721 88.5732 89.1428 86.2295 89.1428 83.7857V78.9144L96.1856 85.9572C96.6152 86.3866 97.1624 86.679 97.7581 86.7975C98.3538 86.916 98.9713 86.8551 99.5324 86.6227C100.094 86.3903 100.573 85.9967 100.911 85.4918C101.248 84.9868 101.428 84.3931 101.429 83.7857V59.2143C101.428 58.6069 101.248 58.0132 100.911 57.5082C100.573 57.0033 100.094 56.6097 99.5324 56.3773C98.9713 56.1449 98.3538 56.084 97.7581 56.2025C97.1624 56.321 96.6152 56.6134 96.1856 57.0428L89.1428 64.0856V59.2143C89.1428 56.7705 88.1721 54.4268 86.444 52.6988C84.716 50.9708 82.3723 50 79.9286 50H49.2143Z" fill="white"/>
</g>
</svg>
        </div>
      </button>
    );
}

export default VideoButton