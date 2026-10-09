"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "architectural-design",
    title: "Architectural Design",
    description: "We turn ideas into architectural plans that balance beauty and function, creating thoughtful spaces that reflect your vision.",
    image: "https://images.unsplash.com/photo-1520587393050-c5298e1a8486", // Replace with your actual image paths
    label: "We Design"
  },
  {
    id: "modern-renovation",
    title: "Modern Renovation",
    description: "We improve existing buildings while honoring their character, creating refreshed spaces that work better for how people live and work.",
    image: "https://images.unsplash.com/photo-1648475236583-2e25a6cbf3bd",
    label: "We Renovate"
  },
  {
    id: "quality-construction",
    title: "Quality Construction",
    description: "We bring designs to life with careful attention and quality workmanship, creating spaces that are strong, refined, and built to last.",
    image: "https://images.unsplash.com/photo-1673978484487-6c448dd1eb4f",
    label: "We Build"
  },
  {
    id: "project-consultation",
    title: "Project Consultation",
    description: "We help you explore ideas and make informed decisions, providing guidance so your project moves forward with confidence.",
    image: "https://images.unsplash.com/photo-1621673610286-a6b5e788ab82",
    label: "We Consult"
  }
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    // Outer wrapper uses the requested light background
    <section className="bg-[#000000] w-full">
      {/* Inner dark container matching the design images */}
      <div className=" text-white rounded-none md:rounded-r-3xl w-full max-w-7xl mx-auto px-6 py-24 md:px-12 lg:px-0">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20 max-w-2xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-white" />
            <span className="text-xs md:text-sm font-mono tracking-widest uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight">
            We help turn your ideas into spaces that are functional, refined, and built to last.
          </h2>
        </div>

        {/* Top Separator Line */}
        <div className="w-full h-px bg-white/10 mb-16" />

        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px_1fr] gap-12 lg:gap-8 items-center lg:items-stretch">
          
          {/* Left Column (Items 0 and 2) */}
          <div className="flex flex-col justify-between w-full space-y-12 lg:space-y-0">
            {[services[0], services[2]].map((service) => {
              const originalIndex = services.findIndex(s => s.id === service.id);
              const isActive = activeIndex === originalIndex;
              
              return (
                <div 
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(originalIndex)}
                  onClick={() => setActiveIndex(originalIndex)}
                  className={`cursor-pointer transition-opacity duration-300 border-b border-white/10 pb-8 lg:border-none lg:pb-0 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                >
                  <h3 className="text-xl font-medium mb-4">{service.title}</h3>
                  <p className="text-sm md:text-[15px] leading-relaxed text-white/80 max-w-sm font-sans">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Center Column: Image Display (Desktop & Mobile Bottom) */}
          <div className="w-full h-[400px] md:h-[500px] lg:h-full min-h-[450px] relative rounded-xl overflow-hidden order-last lg:order-none mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Fallback dark background if image is missing */}
                <div className="absolute inset-0 bg-zinc-800" />
                
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={services[activeIndex].image}
                  alt={services[activeIndex].title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Floating Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-medium text-lg tracking-wide drop-shadow-lg font-sans">
                    {services[activeIndex].label}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column (Items 1 and 3) */}
          <div className="flex flex-col justify-between w-full space-y-12 lg:space-y-0 lg:text-right">
            {[services[1], services[3]].map((service) => {
              const originalIndex = services.findIndex(s => s.id === service.id);
              const isActive = activeIndex === originalIndex;
              
              return (
                <div 
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(originalIndex)}
                  onClick={() => setActiveIndex(originalIndex)}
                  className={`cursor-pointer transition-opacity duration-300 border-b border-white/10 pb-8 lg:border-none lg:pb-0 ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                >
                  <h3 className="text-xl font-medium mb-4">{service.title}</h3>
                  <p className="text-sm md:text-[15px] leading-relaxed text-white/80 max-w-sm lg:ml-auto font-sans">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}