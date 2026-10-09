"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MuseoModerno } from "next/font/google";

// Initialize the MuseoModerno font
const museoModerno = MuseoModerno({ 
  subsets: ["latin"], 
  weight: ["700"],
  display: "swap"
});
export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Calculate scroll progress percentage
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = 
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (windowHeight === 0) {
        setScrollProgress(0);
        return;
      }

      const scroll = totalScroll / windowHeight;
      let progress = Math.round(scroll * 100);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set progress if page is reloaded mid-scroll
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <>
      {/* --- Desktop Navbar --- */}
      <nav 
        className={`fixed top-0 left-0 w-full font-sans z-40 px-6 py-5 transition-all duration-300 flex justify-between items-center text-white bg-transparent ${menuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
      >
        <div className={`${museoModerno.className} text-[17px] font-medium tracking-tight font-sans`}
        
        style={{
            fontFeatureSettings: '"blwf" on, "cv09" on, "cv03" on, "cv04" on, "cv11" on',
        }}
        >
          GoToInterior
        </div>
          <div className="text-[17px] font-sans font-medium tracking-tight w-8 text-right">
          {scrollProgress}%
        </div>
        <button 
          onClick={() => setMenuOpen(true)} 
          className="text-[15px] font-medium tracking-wide font-sans absolute left-1/2 -translate-x-1/2 hover:opacity-70 transition-opacity"
        >
          Menu
        </button>
        
      
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      {/* Uses backdrop-blur for the background effect as requested */}
      <div 
        className={`fixed inset-0 z-50 flex flex-col bg-black/30 backdrop-blur-md text-white px-6 py-5 transition-transform duration-500 ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
      >
        {/* Top Bar inside Menu */}
        <div className="flex justify-between items-center w-full">
           <div className={`${museoModerno.className} text-[17px] font-medium tracking-tight font-sans`}
        
        style={{
            fontFeatureSettings: '"blwf" on, "cv09" on, "cv03" on, "cv04" on, "cv11" on',
        }}
        >
          GoToInterior
        </div>
           
           <button 
             onClick={() => setMenuOpen(false)} 
             className="w-10 h-10 bg-black/20 rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
           >
              {/* Simple Minus Icon */}
              <div className="w-4 h-[2px] bg-white rounded-full" />
           </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col gap-3 mt-[15vh] mb-auto">
           <Link href="#" className="text-[40px] font-bold tracking-tighter hover:opacity-70 transition-opacity">
             Projects
           </Link>
           <Link href="#" className="text-[40px] font-bold tracking-tighter hover:opacity-70 transition-opacity">
             Insights
           </Link>
           <Link href="#" className="text-[40px] font-bold tracking-tighter hover:opacity-70 transition-opacity">
             About
           </Link>
           <Link href="#" className="text-[40px] font-bold tracking-tighter hover:opacity-70 transition-opacity">
             Contact
           </Link>
        </div>

        {/* Footer Info */}
        <div className="text-[13px] font-medium font-sans text-white/90 border-b border-white/20 pb-8 mb-4 tracking-wide">
          <p className="underline underline-offset-2 decoration-white/50 hover:decoration-white transition-colors cursor-pointer w-max">
            Shop no. 3, 69/416, Madhyam Marg, Ward 27, Mansarovar,
          </p>
          <p className="underline underline-offset-2 decoration-white/50 hover:decoration-white transition-colors cursor-pointer w-max mt-1">
            Jaipur, Rajasthan 302020
          </p>
        </div>
      </div>
    </>
  );
}