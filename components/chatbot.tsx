"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, X, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen) {
      // Add initial greeting from the bot when the chat opens
      setMessages([
        {
          role: "assistant",
          content:
            "Hello! I'm Maryam's AI assistant. How can I help you today?",
        },
      ]);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          history: messages,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const botMessage: Message = { role: "assistant", content: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary-600 text-white p-4 rounded-full shadow-lg"
          aria-label="Toggle chatbot"
        >
          {isOpen ? <X size={24} /> : <Bot size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-6 w-80 h-96 bg-white dark:bg-neutral-800 rounded-lg shadow-xl flex flex-col z-50"
          >
            {/* Header */}
            <div className="p-4 border-b dark:border-neutral-700">
              <h3 className="font-bold text-lg">AI Assistant</h3>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-2 my-2 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <Bot className="w-6 h-6 text-primary-500" />
                  )}
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg ${
                      msg.role === "user"
                        ? "bg-primary-500 text-white"
                        : "bg-neutral-200 dark:bg-neutral-700"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === "user" && (
                    <User className="w-6 h-6 text-neutral-500" />
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start gap-2 my-2">
                  <Bot className="w-6 h-6 text-primary-500" />
                  <div className="max-w-xs px-3 py-2 rounded-lg bg-neutral-200 dark:bg-neutral-700">
                    <Loader2 className="w-5 h-5 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t dark:border-neutral-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 px-3 py-2 rounded-lg border dark:border-neutral-600 dark:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  onClick={handleSend}
                  className="p-2 bg-primary-600 text-white rounded-lg disabled:opacity-50"
                  disabled={isLoading}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
