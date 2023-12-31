
import React, { useState } from 'react';

const ChatMsg = () => {
  const [messages, setMessages] = useState([]);

  const handleUserMessage = (text) => {
    setMessages([...messages, { text, sender: 'user' }]);

    // Simulate bot response (replace with actual bot logic)
    setTimeout(() => {
      setMessages([...messages, { text: 'Hello, I am a chatbot!', sender: 'bot' }]);
    }, 500);
  };

  return (
    <div>
      <div >
        {messages.map((message, index) => (
          <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
            <span>{message.sender === 'user' ? 'You: ' : 'Bot: '}</span>
            {message.text}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ChatMsg;
