"use client";

import { useState, useRef, useEffect } from "react";
import { Bell, Search, User, LogOut , Menu } from "lucide-react";
import { logoutUser } from "@/lib/axios";

export default function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <header className="min-h-20 bg-white border-b border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 px-4 md:px-8 py-3 md:py-0">
      <div className="flex items-center gap-3 w-full md:w-auto">
         <button
          onClick={onMenuClick}
          className="md:hidden text-slate-600 hover:text-slate-900"
        >
          <Menu size={24} />
        </button>
        <h2 className="text-2xl font-bold text-slate-800">
          Hii, Welcome Back!
        </h2>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-400 text-gray-700 placeholder:text-gray-500 focus:border-gray-700 rounded-lg outline-none"
          />
        </div>

        <button className="relative">
          <Bell size={22} className="text-gray-700 hover:text-gray-900" />
        </button>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center"
          >
            <User size={18} />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden z-50">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}