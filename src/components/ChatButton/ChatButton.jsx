import React, { useContext } from "react";
import "./ChatButton.css";
import AppContext from "../../context/AppContext";
import { IoChatbubblesOutline } from "react-icons/io5";

const ChatButton = () => {
  const { isChatOpen, setIsChatOpen, isCartVisible, isFavoritesVisible } =
    useContext(AppContext);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const copyToClipboard = () => {
    const link = "suporte@gmail.com";
    navigator.clipboard.writeText(link);
  };

  return (
    <>
      <div className={`chat-box ${isChatOpen ? "open" : ""}`}>
        {isChatOpen && (
          <div className="chat-content">
            <p>Como podemos te ajudar?</p>
            <button
              type="button"
              className="email__button"
              onClick={copyToClipboard}
            >
              Enviar email para contato
            </button>
          </div>
        )}
      </div>
      <button
        type="button"
        className={`chat-button ${
          isCartVisible || isFavoritesVisible ? "invisible" : ""
        }`}
        onClick={toggleChat}
      >
        <IoChatbubblesOutline />
      </button>
    </>
  );
};

export default ChatButton;
