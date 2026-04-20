import { useState, useRef, useEffect } from "react";
import "./Debugger.css";

export default function Debugger() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const analyzeLog = () => {

    if (input.trim() === "") {
      alert("Please paste your error/problem first!");
      return;
    }
    //ai
    const userMessage = { type: "user", text: input };
    const aiMessage = {
      role:"user" | "ai" | "error",
      text: "Analyzing your CI/CD error...\n\nPossible Reason:\nYour pipeline is failing due to dependency installation or wrong environment variable.\n\nSuggested Fix:\n1. Check package installation step\n2. Verify Node version\n3. Re-run pipeline"
    };

    setMessages(prev => [...prev, userMessage, aiMessage]);
    setInput("");
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            <pre>{msg.text}</pre>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>
      <div className="chat-input">
        <textarea
          placeholder="Paste your CI/CD error or problem here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="send-btn" onClick={analyzeLog}>
          Analyze
        </button>
      </div>

    </div>
  );
}