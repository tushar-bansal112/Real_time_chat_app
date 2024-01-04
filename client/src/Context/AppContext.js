import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    { text: "Hi there!", isUser: false },
  ]);
  const [newMessage, setNewMessage] = useState(null);
  const [speechRecognition, setSpeechRecognition] = useState(null);
  const [isListening, setIsListening] = useState(false);

  const [flag, setflag] = useState(false);

  return (
    <AppContext.Provider
      value={{
        messages,
        setMessages,
        newMessage,
        setNewMessage,
        speechRecognition,
        setSpeechRecognition,
        isListening,
        setIsListening,
        flag,
        setflag,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
