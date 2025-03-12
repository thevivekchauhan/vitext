import React, { useState } from "react";
import MessageInput from "./components/MessageInput";
import EmojiOutput from "./components/EmojiOutput";
import EmojiInput from "./components/EmojiInput";
import MessageOutput from "./components/MessageOutput";
import "./App.css";

function App() {
  const [emojis, setEmojis] = useState("");
  const [text, setText] = useState("");

  const handleEmojiConversion = (convertedEmojis) => {
    setEmojis(convertedEmojis);
  };

  const handleTextConversion = (convertedText) => {
    setText(convertedText);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Secret Message Converter</h1>
        {/* <p>Convert messages to emojis and back!</p> */}
      </header>
      <main className="converter-container">
        <div className="converter-section">
          <h2>Text to Emoji</h2>
          <MessageInput onEmojiConversion={handleEmojiConversion} />
          <EmojiOutput emojis={emojis} />
        </div>
        <div className="converter-section">
          <h2>Emoji to Text</h2>
          <EmojiInput onTextConversion={handleTextConversion} />
          <MessageOutput text={text} />
        </div>
      </main>
    </div>
  );
}

export default App;
