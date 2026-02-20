import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const ChatWidget: React.FC = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string; feedback?: 'up' | 'down' }[]>([
    { role: 'assistant', content: "Bonjour ! Je suis l'assistant virtuel de ON AGENCY. Comment puis-je vous aider aujourd'hui ?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleFeedback = (index: number, type: 'up' | 'down') => {
    setMessages(prev => prev.map((msg, i) => 
      i === index ? { ...msg, feedback: type } : msg
    ));
    // Here you would typically send this feedback to your backend
    console.log(`Feedback ${type} for message ${index}`);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage].map(({ role, content }) => ({ role, content })) }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || response.statusText);
      }

      const data = await response.json();
      const assistantMessage = { role: 'assistant' as const, content: data.choices[0].message.content };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Désolé, je rencontre des difficultés techniques pour le moment. Veuillez réessayer dans quelques instants." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] sm:relative sm:inset-auto sm:z-auto mb-0 sm:mb-4 w-full h-full sm:w-[350px] sm:h-[500px] bg-white dark:bg-neutral-900 sm:rounded-2xl shadow-none sm:shadow-2xl border-0 sm:border border-gray-200 dark:border-neutral-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-black dark:bg-neutral-800 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="sm:hidden p-1 mr-1 hover:bg-white/10 rounded-full transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                </button>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Assistant ON AGENCY</h3>
                  <p className="text-xs text-white/70">En ligne</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-neutral-950">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] sm:max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-black text-white rounded-tr-none' 
                        : 'bg-white dark:bg-neutral-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-neutral-700 rounded-tl-none shadow-sm'
                    }`}
                  >
                    {msg.content}
                    {msg.role === 'assistant' && idx !== 0 && (
                      <div className="flex gap-2 mt-2 pt-2 border-t border-gray-100 dark:border-neutral-700">
                        <button 
                          onClick={() => handleFeedback(idx, 'up')}
                          className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors ${msg.feedback === 'up' ? 'text-green-500' : 'text-gray-400'}`}
                          aria-label="Helpful"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                        </button>
                        <button 
                          onClick={() => handleFeedback(idx, 'down')}
                          className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors ${msg.feedback === 'down' ? 'text-red-500' : 'text-gray-400'}`}
                          aria-label="Not helpful"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/></svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-neutral-800 p-3 rounded-2xl rounded-tl-none border border-gray-200 dark:border-neutral-700 shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white dark:bg-neutral-900 border-t border-gray-100 dark:border-neutral-800 shrink-0 pb-safe sm:pb-3">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Posez votre question..."
                  className="flex-1 bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white rounded-full px-4 py-3 sm:py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-white/10"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-3 sm:p-2 bg-black dark:bg-white text-white dark:text-black rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all"
                >
                  {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 sm:w-14 sm:h-14 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-lg shadow-black/20 dark:shadow-white/10 flex items-center justify-center transition-colors hover:bg-gray-900 dark:hover:bg-gray-100 ${isOpen ? 'hidden sm:flex' : 'flex'}`}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={20} className="sm:w-6 sm:h-6" />}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
