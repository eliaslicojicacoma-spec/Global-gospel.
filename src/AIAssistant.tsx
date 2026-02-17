import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Loader2, Sparkles, Bot } from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Olá! Sou o seu assistente espiritual Global Gospel. Em que posso ajudar no seu estudo bíblico hoje?' }
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);

  // Instrução de Sistema conforme sua imagem original
  const systemInstruction = "You are a friendly and knowledgeable Christian Bible Assistant for the Global Gospel ministry. You specialize in Seventh-day Adventist theology, including the Three Angels' Messages, prophecy (Daniel & Revelation), and biblical lifestyle. Answer in Portuguese with kindness and provide Bible verses to support your points.";

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Configuração da IA conforme seu código original
      const genAI = new GoogleGenerativeAI('SUA_CHAVE_AQUI');
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: systemInstruction 
      });

      const result = await model.generateContent(userMessage);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error("Erro na IA:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Desculpe, tive um problema ao processar sua pergunta. Por favor, tente novamente mais tarde." }]);
    } finally {
      setIsLoading(false);
    }
  };

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
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[550px] bg-white rounded-2xl shadow-2xl flex flex-col border border-gray-200 overflow-hidden animate-fade-in">
          <div className="bg-[#1a2a6c] p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <span className="font-bold">Global Gospel IA</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl shadow-sm ${m.role === 'user' ? 'bg-[#1a2a6c] text-white' : 'bg-white text-gray-800'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm">
                  <Loader2 size={20} className="animate-spin text-[#1a2a6c]" />
                </div>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          <div className="p-4 bg-white border-t">
            <div className="flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Pergunte sobre a Bíblia..."
                className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a2a6c]"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="bg-[#1a2a6c] text-white p-2 rounded-lg hover:bg-[#b21f1f] disabled:opacity-50"
              >
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



