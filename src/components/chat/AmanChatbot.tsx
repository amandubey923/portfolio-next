"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import {
  Sparkles,
  X,
  Send,
  Loader2,
  Bot,
  User,
  RotateCcw,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const STARTER_PROMPTS = [
  "What does Aman build?",
  "Tell me about Reader's HUB",
  "Tell me about Dentiva AI",
  "What is his tech stack?",
  "How can I contact Aman?",
  "Tell me about his DSA records",
];

export default function AmanChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! I am **Aman AI**, your guide to Aman Dubey's developer portfolio, production projects, and technical skills. Ask me anything or select a topic below!",
      timestamp: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of message thread
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, isOpen]);

  // Focus input on modal open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Keyboard close on Escape
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSend = async (userPrompt?: string) => {
    const promptToSend = (userPrompt || input).trim();
    if (!promptToSend || loading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: promptToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Send conversation history to API
      const historyPayload = messages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: promptToSend,
          history: historyPayload,
        }),
      });

      const data = await res.json();
      const aiReply = data.reply || "I don't have that information right now, but feel free to email Aman directly!";

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: aiReply,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "I'm having trouble connecting to the network right now. You can email Aman directly at kumaraman19137@gmail.com!",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content:
          "Conversation reset. How can I help you learn more about Aman's projects and technical work?",
        timestamp: "Just now",
      },
    ]);
  };

  // Helper to format basic markdown links and bold text
  const formatText = (text: string) => {
    // Regex for [Title](url)
    const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    const parts: Array<{ type: "text" | "link"; content: string; url?: string }> = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push({ type: "text", content: text.slice(lastIndex, match.index) });
      }
      parts.push({ type: "link", content: match[1], url: match[2] });
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) {
      parts.push({ type: "text", content: text.slice(lastIndex) });
    }

    if (parts.length === 0) {
      parts.push({ type: "text", content: text });
    }

    return parts.map((p, idx) => {
      if (p.type === "link" && p.url) {
        return (
          <a
            key={idx}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:underline font-semibold"
          >
            <span>{p.content}</span>
            <ExternalLink className="h-3 w-3 inline" />
          </a>
        );
      }

      // Handle bold markdown (**text**)
      const boldSegments = p.content.split(/\*\*(.*?)\*\*/g);
      return boldSegments.map((segment, sIdx) =>
        sIdx % 2 === 1 ? (
          <strong key={`${idx}-${sIdx}`} className="text-foreground font-bold">
            {segment}
          </strong>
        ) : (
          <span key={`${idx}-${sIdx}`}>{segment}</span>
        )
      );
    });
  };

  return (
    <>
      {/* ================= FLOATING CHAT TRIGGER BUTTON ================= */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close AI Assistant" : "Open Aman AI Portfolio Assistant"}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-card/90 backdrop-blur-xl border border-primary/40 text-foreground shadow-[0_0_25px_var(--cyber-glow-primary)] hover:scale-105 hover:border-primary active:scale-95 transition-all duration-300 cursor-pointer"
        >
          {/* Pulsing beacon indicator */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>

          <Sparkles className="h-4 w-4 text-primary group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xs font-mono font-bold tracking-wide">
            {isOpen ? "Close AI" : "✦ Ask Aman AI"}
          </span>
        </button>
      </div>

      {/* ================= INTERACTIVE CHAT MODAL WINDOW ================= */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Aman AI Assistant Chat"
          className="fixed bottom-20 right-3 sm:right-6 z-50 w-[94vw] sm:w-[420px] max-h-[600px] h-[78vh] flex flex-col rounded-3xl bg-card/95 backdrop-blur-2xl border border-primary/35 shadow-[0_12px_50px_rgba(0,0,0,0.7)] animate-fadeIn overflow-hidden"
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-primary/15 bg-background/40 shrink-0">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary shadow-[0_0_12px_var(--cyber-glow-primary)]">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs font-mono font-bold text-foreground tracking-wide">
                    AMAN AI ASSISTANT
                  </h4>
                  <span className="px-1.5 py-0.2 rounded bg-primary/15 border border-primary/30 text-[9px] font-mono text-primary">
                    Gemini 2.5
                  </span>
                </div>
                <p className="text-[10px] text-muted-foreground">
                  Grounded portfolio intelligence
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                title="Reset conversation"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Assistant"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* MESSAGE THREAD */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {m.role === "assistant" && (
                  <div className="h-6 w-6 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground font-medium shadow-[0_0_15px_var(--cyber-glow-primary)] rounded-tr-sm"
                      : "bg-background/70 border border-primary/20 text-muted-foreground shadow-sm rounded-tl-sm"
                  }`}
                >
                  <div className="space-y-1">{formatText(m.content)}</div>
                  <span
                    className={`block text-[9px] mt-1 font-mono ${
                      m.role === "user" ? "text-primary-foreground/75 text-right" : "text-muted-foreground/60"
                    }`}
                  >
                    {m.timestamp}
                  </span>
                </div>

                {m.role === "user" && (
                  <div className="h-6 w-6 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shrink-0 mt-0.5">
                    <User className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            ))}

            {/* TYPING INDICATOR */}
            {loading && (
              <div className="flex gap-2.5 justify-start">
                <div className="h-6 w-6 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <div className="rounded-2xl rounded-tl-sm px-4 py-2.5 bg-background/70 border border-primary/20 flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                  <div className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                  <div className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce" />
                  <span className="text-[10px] text-muted-foreground ml-1.5 font-mono">
                    Aman AI thinking...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* QUICK STARTER PROMPTS */}
          {messages.length <= 2 && !loading && (
            <div className="px-4 py-2 border-t border-primary/10 bg-background/30 shrink-0">
              <span className="text-[10px] font-mono text-muted-foreground uppercase block mb-1.5">
                // SUGGESTED QUESTIONS
              </span>
              <div className="flex flex-wrap gap-1.5">
                {STARTER_PROMPTS.slice(0, 4).map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSend(prompt)}
                    className="text-[11px] px-2.5 py-1 rounded-lg border border-primary/20 bg-background/60 hover:bg-primary/15 hover:border-primary/50 text-foreground transition text-left cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* INPUT FORM */}
          <div className="p-3 border-t border-primary/15 bg-background/50 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about projects, tech stack, experience..."
                maxLength={1000}
                disabled={loading}
                className="flex-1 rounded-xl border border-primary/25 bg-background/70 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background focus:outline-none transition"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send Message"
                className="p-2.5 rounded-xl bg-primary text-primary-foreground shadow-[0_0_15px_var(--cyber-glow-primary)] hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition shrink-0"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

