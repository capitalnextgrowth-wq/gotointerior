"use client";
import React from "react";
import { MuseoModerno } from "next/font/google";
import { PlusIcon } from "lucide-react";

// Initialize the MuseoModerno font
const museoModerno = MuseoModerno({ 
  subsets: ["latin"], 
  weight: ["700"],
  display: "swap"
});

export default function Hero() {
  return (
    <section 
      className="relative w-full h-screen overflow-hidden bg-zinc-900 flex flex-col justify-end font-sans"
      style={{
        // Replace this URL with your actual background image from your public folder
        backgroundImage: "url('https://images.unsplash.com/photo-1682184805271-11671b7ecf4c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Subtle dark gradient overlay at the bottom to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-0 pb-8 md:pb-12 h-full flex flex-col justify-end max-w-7xl mx-auto">
        
        {/* Middle-Left Text and Button */}
        <div className="max-w-xl mb-12 lg:mb-8">
          <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 font-medium">
            Thoughtfully created interiors that elevate everyday living through timeless design and refined detail.
          </p>
          <button className="bg-white/20 backdrop-blur-md text-white border border-white/40 px-8 flex items-center gap-1 justify-center py-3 rounded-full text-sm font-semibold hover:bg-gray-200/30 transition-colors">
            Start a Project <PlusIcon size={16} />
          </button>
        </div>

        {/* Massive Bottom Text */}
        <div className="w-full flex justify-center lg:justify-start">
      <h1
  className={`${museoModerno.className} travelling-text`}
  style={{
    fontSize: "clamp(3rem, 12vw, 158.06px)",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    lineHeight: "1em",
    textTransform: "uppercase",
    fontFeatureSettings:
      '"blwf" on, "cv09" on, "cv03" on, "cv04" on, "cv11" on',
  }}
>
  GoToInterior
</h1>
        </div>
      </div>
    </section>
  );
}