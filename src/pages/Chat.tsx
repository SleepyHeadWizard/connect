import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaRobot, FaUser, FaExclamationTriangle } from 'react-icons/fa';
import { geminiService } from '../services/gemini';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  error?: boolean;
}

interface ErrorWithMessage {
  message: string;
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

function getErrorMessage(error: unknown): string {
  if (isErrorWithMessage(error)) {
    return error.message;
  }
  return "An unexpected error occurred. Please try again later.";
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Hi! 👋 I'm your digital wellbeing assistant.

I can help you:
• Improve your relationship with technology
• Create healthy digital habits
• Balance online and offline life
• Support your mental wellbeing

What would you like help with today?`,
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await geminiService.sendMessage(inputMessage);
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'ai',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getErrorMessage(error),
        sender: 'ai',
        timestamp: new Date(),
        error: true,
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white pb-24">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden"
        >
          {/* Chat Header */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <FaRobot className="text-indigo-600 dark:text-indigo-400" />
              Digital Wellbeing Assistant
              {isLoading && (
                <motion.div
                  className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </h1>
          </div>

          {/* Messages Container */}
          <div className="h-[60vh] overflow-y-auto p-4 space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.sender === 'user'
                          ? 'bg-indigo-100 dark:bg-indigo-900/50'
                          : message.error
                          ? 'bg-red-100 dark:bg-red-900/50'
                          : 'bg-purple-100 dark:bg-purple-900/50'
                      }`}
                    >
                      {message.sender === 'user' ? (
                        <FaUser className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      ) : message.error ? (
                        <FaExclamationTriangle className="w-4 h-4 text-red-600 dark:text-red-400" />
                      ) : (
                        <FaRobot className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg p-3 ${
                        message.sender === 'user'
                          ? 'bg-indigo-600 text-white'
                          : message.error
                          ? 'bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                          : 'bg-white dark:bg-slate-700 shadow-sm'
                      }`}
                    >
                      <p className="text-sm sm:text-base whitespace-pre-wrap leading-relaxed">
                        {message.text.split('\n').map((line, i) => {
                          let processedLine = line.trim();
                          
                          // First handle bold text with **
                          if (processedLine.includes('**')) {
                            const parts = processedLine.split('**');
                            return (
                              <span key={i} className="block mb-2">
                                {parts.map((part, index) => (
                                  index % 2 === 1 ? 
                                    <strong key={index} className="font-semibold">{part}</strong> : 
                                    <span key={index}>{part}</span>
                                ))}
                              </span>
                            );
                          }

                          // Handle bullet points (both • and single *)
                          if (processedLine.startsWith('•') || processedLine.startsWith('* ') || processedLine.startsWith('*')) {
                            // Extract the text after the bullet point or asterisk
                            const text = processedLine.startsWith('* ') ? 
                              processedLine.slice(2) : 
                              processedLine.startsWith('*') ? 
                                processedLine.slice(1) : 
                                processedLine.slice(1);
                            
                            // Remove any additional asterisks if present
                            const cleanText = text.replace(/^\s*\*+\s*/, '').trim();
                            
                            return (
                              <span key={i} className="block ml-2 mb-3">
                                <span className="inline-block w-4">•</span>
                                <span>{cleanText}</span>
                              </span>
                            );
                          }

                          // Handle titles (lines ending with ':')
                          if (processedLine.endsWith(':')) {
                            return (
                              <span key={i} className="block font-medium mb-3">
                                {processedLine}
                              </span>
                            );
                          }

                          // Regular text lines
                          return processedLine ? (
                            <span key={i} className="block mb-3">
                              {processedLine}
                            </span>
                          ) : (
                            <span key={i} className="block h-3" />
                          );
                        })}
                      </p>
                      <p className="text-xs mt-1 opacity-70">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 text-slate-900 dark:text-white disabled:opacity-50"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:hover:bg-indigo-600"
              >
                <FaPaperPlane className="w-4 h-4" />
                <span className="hidden sm:inline">Send</span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Chat; 