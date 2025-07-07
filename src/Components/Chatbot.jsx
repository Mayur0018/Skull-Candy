// ChatBot.jsx
import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([{ sender: 'bot', text: 'Hi! How can I help you today?' }]);
  const [input, setInput] = useState('');

  const handleUserMessage = () => {
    const userMsg = input.trim();
    if (!userMsg) return;

    const newMessages = [...messages, { sender: 'user', text: userMsg }];
    const botReply = getBotReply(userMsg);

    
    setMessages([...newMessages, { sender: 'bot', text: botReply }]);
    setInput('');
  };

  const getBotReply = (message) => {
    const msg = message.toLowerCase();

    if (msg.includes('hello') || msg.includes('hi')) return 'Hello! 👋';
    if (msg.includes('how are you')) return "I'm just a bot, but I'm doing great!";
    if (msg.includes('your name')) return "I'm ReactBot, nice to meet you!";
    if (msg.includes('bye')) return 'Goodbye! 👋';

    return "Sorry, I didn't understand that.";
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="h-80 overflow-y-auto border rounded p-2 mb-3 bg-white">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
          >
            <span
              className={`inline-block p-2 rounded ${
                msg.sender === 'user' ? 'bg-blue-200' : 'bg-green-200'
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          className="border px-2 py-1 flex-1 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleUserMessage()}
          placeholder="Type your message..."
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={handleUserMessage}>
          send                                                                                                                                                                                                                      
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
