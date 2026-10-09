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

          {/* Social Icons */}
          <div className="flex gap-3 mb-8">
            {/* Instagram */}
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* X (Twitter) */}
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
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
            <Link href="#" className="text-[15px] hover:text-white/70 transition-colors w-max">Projects</Link>
            <Link href="#" className="text-[15px] hover:text-white/70 transition-colors w-max">Blog</Link>
            <Link href="#" className="text-[15px] hover:text-white/70 transition-colors w-max">About</Link>
            <Link href="#" className="text-[15px] hover:text-white/70 transition-colors w-max">Contact</Link>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white/60 text-sm mb-2">Legal</h4>
            <Link href="#" className="text-[15px] hover:text-white/70 transition-colors w-max">Privacy Policy</Link>
            <Link href="#" className="text-[15px] hover:text-white/70 transition-colors w-max">Cookie Policy</Link>
            <Link href="#" className="text-[15px] hover:text-white/70 transition-colors w-max">Terms and Conditions</Link>
          </div>

          {/* Location Map */}
          <div className="flex flex-col gap-4">
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