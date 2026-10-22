"use client";
import React from "react";
import Link from "next/link";
import { MuseoModerno } from "next/font/google";

// Initialize the MuseoModerno font (same as Hero)
const museoModerno = MuseoModerno({ 
  subsets: ["latin"], 
  weight: ["700"],
  display: "swap"
});

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 lg:px-24 pt-24 pb-8 flex flex-col w-full overflow-hidden font-sans">
      
      {/* Top Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 mb-24 max-w-7xl mx-auto w-full">
        
        {/* Left Column: Brand, Bio, Socials, Newsletter */}
        <div className="lg:col-span-5 flex flex-col pr-0 lg:pr-12">
          
          {/* Logo / Brand Name */}
          <div className="flex items-center gap-3 mb-6">
            <div 
              className={`${museoModerno.className} text-[24px] font-medium tracking-tight font-sans`}
              style={{
                  fontFeatureSettings: '"blwf" on, "cv09" on, "cv03" on, "cv04" on, "cv11" on',
              }}
            >
              GoToInterior
            </div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-[15px] leading-relaxed max-w-[400px] mb-8">
            We design interiors that balance comfort and clarity, crafting spaces defined by purpose, proportion, and lasting character.
          </p>

     <div className="flex gap-3 mb-8">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/share/1CtNyFLxaB/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-8.2h2.76l.41-3.2H13.5V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14C16.5 3.05 15.45 3 14.22 3c-2.57 0-4.33 1.57-4.33 4.45V9.6H7v3.2h2.89V21h3.61Z" />
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/gotointeriors1?utm_source=gr&igsh=c3EwZmdjODlleDhn"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  </a>

  {/* YouTube */}
  <a
    href="https://youtube.com/@gotointeriors?si=Tfjlx41yQ2Tszlsb"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  </a>
</div>

          {/* Newsletter Form */}
          <form className="flex items-center gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="hello@amail.com" 
              className="bg-transparent border border-white/30 rounded-full px-5 py-2.5 text-sm w-full max-w-[280px] focus:outline-none focus:border-white transition-colors" 
              required
            />
            <button 
              type="submit" 
              className="bg-white/30 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-colors whitespace-nowrap"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Column: Links & Map */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
          {/* Site Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white/60 text-sm mb-2">Site</h4>
            <Link href="/projects" className="text-[15px] hover:text-white/70 transition-colors w-max">Projects</Link>
            <Link href="#" className="text-[15px] hover:text-white/70 transition-colors w-max">Blog</Link>
            <Link href="/about" className="text-[15px] hover:text-white/70 transition-colors w-max">About</Link>
            <Link href="/contact" className="text-[15px] hover:text-white/70 transition-colors w-max">Contact</Link>
          </div>

      

          {/* Location Map */}
          <div className="flex flex-col col-span-2 gap-4">
            <h4 className="text-white/60 text-sm mb-2">Location</h4>
            <div className="w-full h-32 md:h-full min-h-[120px] rounded-xl overflow-hidden border border-white/20 opacity-80 hover:opacity-100 transition-opacity duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.29043311966!2d75.75853487597027!3d26.862512162245075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5e35f50849d%3A0x9c4219dc52790560!2sgo%20to%20interiors!5e0!3m2!1sen!2sin!4v1791461189771!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Location Map"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Massive Bottom Text (Same styling as Hero) */}
      <div className="w-full flex justify-center mb-8 max-w-7xl mx-auto">
        <h1
          className={museoModerno.className}
          style={{
            // Using clamp to make the size responsive across devices, hitting ~199px on desktop
            fontSize: "clamp(3.5rem, 13vw, 164.06px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: "1em",
            color: "rgb(250, 250, 250)",
            fontFeatureSettings: '"blwf" on, "cv09" on, "cv03" on, "cv04" on, "cv11" on',
            textTransform: "uppercase",
            whiteSpace: "nowrap" // Prevents the text from breaking into multiple lines
          }}
        >
          GOTOINTERIOR
        </h1>
      </div>

      {/* Footer Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/60 pt-6 max-w-7xl mx-auto w-full border-t border-white/10">
        <p>© 2026, GoToInterior All Rights Reserved</p>
        <p>Site by CodeVira</p>
      </div>
      
    </footer>
  );
}