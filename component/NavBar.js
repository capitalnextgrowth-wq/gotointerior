"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MuseoModerno } from "next/font/google";

const museoModerno = MuseoModerno({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll progress and navbar background
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrolled(totalScroll > 50);

      if (windowHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      const progress = Math.round(
        (totalScroll / windowHeight) * 100
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent background scrolling while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu with Escape key
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const logoStyle = {
    fontFeatureSettings:
      '"blwf" on, "cv09" on, "cv03" on, "cv04" on, "cv11" on',
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 px-6 py-5 font-sans
          flex items-center justify-between text-black
          transition-all duration-300
          ${
            scrolled
              ? "bg-black shadow-lg text-white"
              : "bg-transparent"
          }
          ${
            menuOpen
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
        style={{
          fontFamily:
            '"Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className={`${museoModerno.className} text-[17px]
            font-bold tracking-tight`}
          style={logoStyle}
          aria-label="GoToInterior home"
        >
          GoToInterior
        </Link>

        {/* Scroll Progress */}
        <div
          className="absolute right-6 w-10 text-right
            text-[17px] font-medium tracking-tight"
          aria-label={`Page scroll progress ${scrollProgress}%`}
        >
          {scrollProgress}%
        </div>

        {/* Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          className="absolute left-1/2 -translate-x-1/2
            text-[15px] font-medium tracking-wide
            hover:opacity-70 transition-opacity font-sans"
        >
          Menu
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="navbar-menu"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-50 flex flex-col
          bg-black/80 backdrop-blur-md text-white
          px-6 py-5 font-sans tracking-wide
          transition-transform duration-500 ease-in-out
          ${
            menuOpen
              ? "translate-y-0"
              : "-translate-y-full pointer-events-none"
          }`}
      >
        {/* Menu Top Bar */}
        <div className="flex justify-between items-center w-full">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className={`${museoModerno.className}
              text-[17px] font-bold tracking-tight`}
            style={logoStyle}
          >
            GoToInterior
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 bg-white/10 rounded-full
              flex items-center justify-center
              hover:bg-white/20 transition-colors"
          >
            <div className="w-4 h-[2px] bg-white rounded-full" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-3 mt-[15vh] mb-auto">
          {[
            { label: "Gallery", href: "/gallery" },
            { label: "Services", href: "/services" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              className="text-[40px] sm:text-[48px]
                font-bold tracking-tighter
                hover:opacity-70 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Footer Address */}
        <div
          className="text-[13px] font-medium text-white/90
            border-b border-white/20 pb-8 mb-4 tracking-wide"
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=Shop+no.+3%2C+69%2F416%2C+Madhyam+Marg%2C+Mansarovar%2C+Jaipur%2C+Rajasthan+302020"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2
              decoration-white/50 hover:decoration-white
              transition-colors"
          >
            Shop no. 3, 69/416, Madhyam Marg, Ward 27,
            Mansarovar, Jaipur, Rajasthan 302020
          </a>
        </div>
      </div>
    </>
  );
}
