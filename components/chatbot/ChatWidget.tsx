"use client";

import { useState, useRef, useEffect } from "react";
import axios from "@/lib/axios";
import { MessageCircle, X, Send, PawPrint } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { getAccessToken, setAccessToken } from "@/lib/axios";
import LoginModal from "../../app/login/components/LoginModal";

interface Message {
  role: "parent" | "ai";
  text: string;
}

export default function ChatWidget() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  const { isLoggedIn, isLoading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "ai", text: "Hello! I am the FutureCubs assistant. You can ask about activity ideas, milestones, or anything else for your toddler 🌱" },
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

    // Placeholder AI message jo progressively fill hoga
    setMessages((prev) => [...prev, { role: "ai", text: "" }]);

    const sendRequest = async (token: string | null) => {
      return fetch(`${API_BASE_URL}/api/ai/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        credentials: "include",
        body: JSON.stringify({ message: trimmed }),
      });
    };

    try {
      let res = await sendRequest(getAccessToken());

      // If token expires (401), refresh and try again
      if (res.status === 401) {
        const refreshRes = await axios.post("/auth/refresh", {}, { withCredentials: true });
        const newToken = refreshRes.data.accessToken;
        setAccessToken(newToken);
        res = await sendRequest(newToken);
      }

      if (!res.ok || !res.body) {
        throw new Error("Request failed");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6);
          const data = JSON.parse(jsonStr);

          if (data.error) {
            setError(data.error);
            continue;
          }

          if (data.text) {
            setMessages((prev) => {
              const updated = [...prev];
              const lastIdx = updated.length - 1;
              updated[lastIdx] = { ...updated[lastIdx], text: updated[lastIdx].text + data.text };
              return updated;
            });
          }
        }
      }
    } catch (err: any) {
      setError("An error occured try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-3 z-50 font-body">
      {isOpen && (
        <div className="mb-4 flex h-[480px] sm:h-[520px] w-full max-w-[360px] flex-col overflow-hidden rounded-3xl border-2 border-ink/10 bg-sage shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-ink px-5 py-4">
            <div>
              <p className="font-display text-lg font-semibold text-white">FutureCubs Assistant</p>
              <p className="font-hand text-base text-marigold">For your cub 🐻</p>
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
              placeholder="Type your query..."
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
      {/* <button
        onClick={() => setIsOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-marigold text-ink shadow-xl transition hover:scale-105"
        aria-label="Chat toggle"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button> */}
      <button
        onClick={() => {
          if (isLoading) return;
          if (!isLoggedIn) {
            setShowLoginModal(true);
            return;
          }
          setIsOpen((v) => !v);
        }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-marigold text-ink shadow-xl transition hover:scale-105"
        aria-label="Chat toggle"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

        {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onSuccess={() => {
            setShowLoginModal(false);
            setIsOpen(true);
          }}
        />
      )}
    </div>
  );
}