// src/components/MessageOutput.js
import React from "react";

const MessageOutput = ({ text }) => {
  return (
    <div className="message-output">
      <h3>Converted Text:</h3>
      <p>{text}</p>
    </div>
  );
};

export default MessageOutput;
