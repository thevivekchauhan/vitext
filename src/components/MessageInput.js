// src/components/MessageInput.js
import React, { useState } from "react";
import { textToEmoji } from "../utils/emojiConverter";

const MessageInput = ({ onEmojiConversion }) => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleConvert = () => {
    const convertedMessage = textToEmoji(text);
    onEmojiConversion(convertedMessage);
  };

  return (
    <div className="message-input">
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter your secret message"
      />
      <button onClick={handleConvert}>Convert to Emojis</button>
    </div>
  );
};

export default MessageInput;
