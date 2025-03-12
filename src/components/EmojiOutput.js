// src/components/EmojiOutput.js
import React from "react";

const EmojiOutput = ({ emojis }) => {
  return (
    <div className="emoji-output">
      <h3>Converted Emojis:</h3>
      <p>{emojis}</p>
    </div>
  );
};

export default EmojiOutput;
