import React, { useEffect, useContext } from "react";
import "./ChatMsg.css";
import { AppContext } from "../../Context/AppContext";
import { io } from "socket.io-client";

const ChatMsg = () => {
  const {
    messages,
    setMessages,
    setNewMessage,
    setSpeechRecognition,
    newMessage,
  } = useContext(AppContext);

  useEffect(() => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      handleSendMessage(transcript);
      console.log("Recognized speech!");
    };
    setSpeechRecognition(recognition);
  }, []);

  const user = { _id: 10 }; // create a user

  useEffect(() => {
    const socket = io("http://localhost:8080/");
    socket.on("connected", () => console.log("connected"));
    if (newMessage) {
      console.log("Question: " + newMessage);
      setTimeout(() => {
        socket.emit("new message", newMessage);
        socket.on("reply", (reply) => {
          console.log("Reply: " + reply);
          setMessages((messages) => [
            ...messages,
            { text: reply, isUser: false },
          ]);
        });
      }, 60);
    }
    setNewMessage(null);
  }, [newMessage]);

  const handleSendMessage = (msg) => {
    setMessages((messages) => [...messages, { text: msg, isUser: true }]);
    setNewMessage(msg);
  };

  return (
    <div className="chat_bot">
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={message.isUser ? "user-message" : "bot-message"}
            >
              {message.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatMsg;
