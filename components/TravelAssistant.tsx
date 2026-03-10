import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageSquare, X, Send, Sparkles, Bot } from 'lucide-react';
import { getOracleResponse } from '../services/geminiService';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  text: string;
  isUser: boolean;
}

const TravelAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t, language } = useLanguage();

  // Determine context based on URL
  const getContext = () => {
    const path = location.pathname;
    if (path.includes('/country/')) {
      return decodeURIComponent(path.split('/country/')[1]);
    }
    if (path.includes('/landmark/')) {
      // Just generic travel if landmark, or pass specific landmark ID if needed
      return "Global Travel";
    }
    return "Global Travel";
  };

  const context = getContext();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Reset messages when context changes significantly, or keep history? 
  // Let's keep history but add a system note if needed.

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { text: userMsg, isUser: true }]);
    setIsLoading(true);

    const response = await getOracleResponse(context, userMsg, language);

    setMessages(prev => [...prev, { text: response, isUser: false }]);
    setIsLoading(false);
  };

  return (
    <div className={`fixed bottom-6 z-50 transition-all duration-300 pointer-events-none ${language === 'ar' ? 'left-6' : 'right-6'}`}>

      {/* Chat Window */}
      <div
        className={`
          mb-4 w-80 md:w-96 bg-black/80 backdrop-blur-xl border border-gold-500/30 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-${language === 'ar' ? 'left' : 'right'}
          ${isOpen ? 'scale-100 opacity-100 translate-y-0 pointer-events-auto' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'}
        `}
      >
        {/* Header */}
        <div className="bg-gold-500/10 p-4 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-2 text-gold-500">
            <Bot size={20} />
            <span className="font-bold font-sans">{t('askOracle')}</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gold-500/20">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-10 text-sm px-4">
              <Sparkles className="w-8 h-8 mx-auto mb-2 text-gold-500/50" />
              <p>{t('oracleWelcome')}</p>
            </div>
          )}
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.isUser ? 'justify-start' : 'justify-end'}`}>
              <div
                className={`
                  max-w-[85%] rounded-xl px-4 py-2 text-sm leading-relaxed
                  ${msg.isUser
                    ? 'bg-white/10 text-white rounded-br-none'
                    : 'bg-gold-500 text-black rounded-bl-none font-medium'}
                `}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-end">
              <div className="bg-gold-500/20 text-gold-500 rounded-xl rounded-bl-none px-4 py-2 text-xs animate-pulse">
                Thinking...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-black/40">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={t('oraclePlaceholder')}
              className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-gold-500/50"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="bg-gold-500 text-black p-2 rounded-full hover:bg-gold-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gold-500 hover:bg-gold-400 text-black rounded-full shadow-lg shadow-gold-500/20 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group pointer-events-auto"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <div className="relative">
            <MessageSquare size={24} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default TravelAssistant;