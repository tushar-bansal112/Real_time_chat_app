
import React, {useEffect, useContext } from 'react';
import './ChatMsg.css'
import { AppContext } from '../../Context/AppContext';


const ChatMsg = () => {
  const { messages, setMessages, speechRecognition, setSpeechRecognition, isListening, setIsListening,flag,setflag } = useContext(AppContext);

  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      handleSendMessage(transcript);
    };
    setSpeechRecognition(recognition);
  }, []);

  const toggleListening = () => {
    if (speechRecognition) {
      if (isListening) {
        speechRecognition.stop();
      } else {
        speechRecognition.start();
      }
      setIsListening(!isListening);
    }
  };
  const autoReply =() =>{
    setTimeout(() => {
      setMessages(messages => [...messages, { text: "I'm a simple chatbot!", isUser: false }])
    }, 500);
  }
  const handleSendMessage = (msg) => {
    setMessages(messages => [...messages, { text: msg, isUser: true }])
    autoReply();
    
  };


  return (
    <div className="chat_bot">
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className={message.isUser ? "user-message" : "bot-message"}>
              {message.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatMsg;
