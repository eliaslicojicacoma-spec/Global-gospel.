import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, Sparkles, User, Bot } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Olá! Sou o seu assistente espiritual Global Gospel. Em que posso ajudar no seu estudo bíblico hoje?' }
  ]);

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Botão Flutuante */}
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-[#b21f1f] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2"
      >
        <Sparkles size={24} />
        <span className="font-bold">Assistente IA</span>
      </button>

      {/* Janela do Chat */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden">
          <div className="bg-[#1a2a6c] p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-bold">Global Gospel IA</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          
          <div className="flex-grow p-4 overflow-y-auto space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${m.role === 'user' ? 'bg-[#1a2a6c] text-white' : 'bg-gray-100 text-gray-800'}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Pergunte sobre a Bíblia..."
                className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2a6c]"
              />
              <button className="bg-[#1a2a6c] text-white p-2 rounded-lg hover:bg-[#b21f1f]">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;

