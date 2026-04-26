"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Gallery", href: "/gallery" },
  { id: 3, label: "Book Me!", href: "/book" },
  { id: 4, label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  console.log(scrolled);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <Link
            href="/"
            className={`font-bold text-lg tracking-wide font-[var(--font-playfair)] ${scrolled || menuOpen ? "text-gray-900" : "text-white"}`}
          >
            Maleek Photography
          </Link>
          <span>Photography & StoryTeller</span>
        </div>

        {/* Desktop links */}
        {/* <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                onClick={() => console.log("first")}
                className={`text-sm text-amber-800 font-medium transition hover:opacity-70 ${scrolled ? "text-gray-700" : "text-white"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
          {/* Language icon */}
        {/* <li>
            <svg
              width="18"
              height="18"
              fill="none"
              stroke={scrolled ? "#374151" : "white"}
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              className="cursor-pointer hover:opacity-70"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12a15.3 15.3 0 0 1 4-10z" />
            </svg>
          </li> */}
        {/* </ul> */}

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link key={l.id} href={l.href}>
              {l.label}
            </Link>
          ))}
          {/* language icon */}
          <li>
            <svg
              width="18"
              height="18"
              fill="none"
              stroke={scrolled ? "#374151" : "white"}
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              className="cursor-pointer hover:opacity-70"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10A15.3 15.3 0 0 1 8 12a15.3 15.3 0 0 1 4-10z" />
            </svg>
          </li>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden ${scrolled ? "text-gray-900" : "text-white"} `}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden  flex flex-col items-center justify-center min-h-screen bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 h-100vh">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm text-gray-700 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
