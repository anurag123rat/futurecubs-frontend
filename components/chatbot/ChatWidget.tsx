"use client";

import { useState, useRef, useEffect } from "react";
import axios from "@/lib/axios";
import { MessageCircle, X, Send, PawPrint } from "lucide-react";

interface Message {
  role: "parent" | "ai";
  text: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "Namaste! Main FutureCubs assistant hoon. Aapke toddler ke liye activity ideas, milestones, ya kuch bhi poochh sakte hain 🌱" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    setMessages((prev) => [...prev, { role: "parent", text: trimmed }]);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("/ai/chat", { message: trimmed });
      setMessages((prev) => [...prev, { role: "ai", text: res.data.reply }]);
    } catch (err: any) {
      setError(err?.response?.data?.error || "Kuch gadbad ho gayi. Dobara try karein.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-body">
      {isOpen && (
        <div className="mb-4 flex h-[520px] w-[360px] flex-col overflow-hidden rounded-3xl border-2 border-ink/10 bg-sage shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-ink px-5 py-4">
            <div>
              <p className="font-display text-lg font-semibold text-white">FutureCubs Assistant</p>
              <p className="font-hand text-base text-marigold">aapke chhote cub ke liye 🐻</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 text-white/70 transition hover:bg-white/10 hover:text-white"
              aria-label="Chat band karein"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((msg, i) =>
              msg.role === "parent" ? (
                <div key={i} className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-marigold px-4 py-2.5 text-sm text-ink">
                    {msg.text}
                  </div>
                </div>
              ) : (
                <div key={i} className="flex items-start gap-2">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                    <PawPrint size={14} />
                  </div>
                  <div className="max-w-[80%] whitespace-pre-wrap rounded-2xl rounded-tl-sm border-2 border-dashed border-teal/40 bg-white px-4 py-2.5 text-sm leading-relaxed text-ink">
                    {msg.text}
                  </div>
                </div>
              )
            )}

            {loading && (
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                  <PawPrint size={14} />
                </div>
                <div className="flex gap-1 rounded-2xl rounded-tl-sm border-2 border-dashed border-teal/40 bg-white px-4 py-3">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-teal [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-teal [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-teal" />
                </div>
              </div>
            )}

            {error && (
              <p className="rounded-xl bg-rose/10 px-3 py-2 text-xs text-rose">{error}</p>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-ink/10 bg-white px-3 py-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Apna sawaal likhein..."
              className="flex-1 rounded-full bg-sage px-4 py-2 text-sm text-ink outline-none placeholder:text-ink/40"
            />
            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-marigold text-ink transition hover:bg-marigold/90 disabled:opacity-40"
              aria-label="Bhejein"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle bubble */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-marigold text-ink shadow-xl transition hover:scale-105"
        aria-label="Chat toggle"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}