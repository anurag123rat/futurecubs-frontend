"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Why Us?", href: "/why-us" },
  { label: "Programs", href: "/programs" },
  { label: "More", href: "/more" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-sky-500 to-indigo-500 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-white tracking-wide">
          FutureCubs
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              
               <a href={link.href}
                className="text-white/90 font-semibold uppercase text-sm tracking-wide hover:text-pink-300 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA button - desktop */}
        <div className="hidden lg:block">
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2.5 rounded-full font-semibold transition">
            Join Now
          </button>
        </div>

        {/* Hamburger icon - wiring in Step 2 */}
                  {/* Hamburger icon */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile / Tablet Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-indigo-950 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-6 gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              
                <a href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white font-semibold uppercase text-sm tracking-wide hover:text-pink-300 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Join Now
            </button>
          </li>
        </ul>
      </div>
    </header>
     
  );
}