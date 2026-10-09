"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mock data for the projects
const projects = [
  {
    id: 1,
    title: "Arbor Loft",
    description: "A minimalist loft designed for modern city living.",
    image: "/images/arbor-loft.jpg", // Replace with actual image path
  },
  {
    id: 2,
    title: "Lumina Space",
    description: "Bright and airy interior focusing on natural light and open plans.",
    image: "/images/lumina-space.jpg",
  },
  {
    id: 3,
    title: "Oasis Villa",
    description: "Warm tones and organic textures for a relaxed, luxurious feel.",
    image: "/images/oasis-villa.jpg",
  },
  {
    id: 4,
    title: "Urban Retreat",
    description: "Sleek lines and dark accents tailored for downtown living.",
    image: "/images/urban-retreat.jpg",
  },
];

export default function ProjectsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  // Calculate progress percentage for the bar
  const progressPercentage = ((currentIndex + 1) / projects.length) * 100;

  return (
    <section 
      className="relative w-full h-screen min-h-[800px] flex items-center bg-zinc-900 overflow-hidden font-sans"
      style={{
        // Replace this with your actual background image
        backgroundImage: "url('https://images.unsplash.com/photo-1562438668-bcf0ca6578f0')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main Container */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-0 py-24 flex flex-col lg:flex-row justify-between">
        
        {/* Top Left Label */}
        <div className="flex items-start gap-2 text-white mt-4">
          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
          <span className="text-xl font-medium tracking-wide">Projects</span>
        </div>

        {/* Right Side Slider Section */}
        <div className="flex flex-col w-full lg:w-[600px] xl:w-[700px] mt-auto lg:mt-0 lg:justify-center">
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-tight mb-8">
            Each project tells a story through light, material, and carefully considered detail.
          </h2>

          {/* Progress Bar */}
          <div className="flex items-center gap-4 text-white/80 font-mono text-sm mb-6 w-full">
            <span>0{currentIndex + 1}</span>
            <div className="relative flex-1 h-px bg-white/30">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
            <span>0{projects.length}</span>
          </div>

          {/* Glassmorphism Slider Card */}
          <div className="relative bg-[#1a1a1a]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row gap-6 items-center w-full min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row gap-6 w-full h-full"
              >
                {/* Text Content */}
                <div className="flex flex-col justify-center flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-8 max-w-[250px]">
                    {projects[currentIndex].description}
                  </p>
                  
                  <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full w-max text-sm font-medium hover:bg-gray-200 transition-colors mt-auto">
                    View
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17l9.2-9.2M17 17V7H7"/>
                    </svg>
                  </button>
                </div>

                {/* Project Image inside Card */}
                <div className="w-full md:w-[280px] h-[180px] md:h-full rounded-xl overflow-hidden shrink-0 relative bg-zinc-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-3 mt-6 lg:mt-8">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors border border-white/10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}