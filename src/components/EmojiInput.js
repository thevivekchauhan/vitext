// src/components/EmojiInput.js
import React, { useState } from "react";
import { emojiToText } from "../utils/emojiConverter";



const EmojiInput = ({ onTextConversion }) => {
  const [emojiText, setEmojiText] = useState("");

  const handleInputChange = (e) => {
    setEmojiText(e.target.value);
  };

  const handleConvert = () => {
    const convertedMessage = emojiToText(emojiText);
    onTextConversion(convertedMessage);
  };

  return (
    <div className="emoji-input">
      <textarea
        value={emojiText}
        onChange={handleInputChange}
        placeholder="Paste emojis here"
      />
      <button onClick={handleConvert}>Convert to Text</button>
    </div>
  );
};

export default EmojiInput;
