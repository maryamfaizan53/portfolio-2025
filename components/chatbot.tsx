'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface ChatBotProps {
  isOpen: boolean
  onToggle: (open: boolean) => void
}

export default function ChatBot({ isOpen, onToggle }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: "Hi! I'm Maryam's AI Personal Assistant. Welcome! Feel free to ask me about her skills, projects, experience, or anything else you'd like to know. 😊",
        },
      ])
    }
  }, [isOpen])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userMessage = input.trim()
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages,
        }),
      })

      const data = await response.json()

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          {
            role: 'assistant',
            content: "Sorry, I encountered an error. Please try again or contact Maryam directly.",
          },
        ])
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: data.reply },
        ])
      }
    } catch (error) {
      console.error('[v0] Error sending message:', error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "I encountered an error. Please try again later.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onToggle(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-24px)] h-[500px] rounded-2xl shadow-2xl overflow-hidden flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white p-4 rounded-t-2xl">
              <h3 className="font-semibold text-lg">Maryam's AI Assistant</h3>
              <p className="text-sm text-primary-50 opacity-90">Ask me anything!</p>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50 dark:bg-neutral-800/50">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.role === 'user'
                        ? 'bg-primary-600 text-white rounded-br-none'
                        : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                  </div>
                </motion.div>
              ))}
              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-neutral-200 dark:bg-neutral-700 px-4 py-2 rounded-lg rounded-bl-none">
                    <Loader2 size={20} className="animate-spin text-primary-600" />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSendMessage}
              className="p-4 border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900"
            >
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Ask anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  disabled={loading}
                  className="flex-1 text-sm"
                />
                <Button
                  type="submit"
                  disabled={loading || !input.trim()}
                  size="icon"
                  className="bg-primary-600 hover:bg-primary-700 text-white"
                >
                  <Send size={18} />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
