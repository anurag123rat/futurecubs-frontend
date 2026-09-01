"use client";

import { X } from "lucide-react";
import LoginForm from "./LoginForm";

interface LoginModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

export default function LoginModal({ onClose, onSuccess }: LoginModalProps) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink shadow-lg transition hover:scale-105"
          aria-label="Band karein"
        >
          <X size={18} />
        </button>

        <LoginForm onSuccess={onSuccess} />
      </div>
    </div>
  );
}