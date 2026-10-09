"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Helper component for individual words to handle their own animation values
const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const filter = useTransform(progress, range, ["blur(8px)", "blur(0px)"]);

  return (
    <motion.span
      style={{
        opacity,
        filter,
        display: "inline-block",
        marginRight: "0.25em",
        marginTop: "0.1em",
        willChange: "opacity, filter",
      }}
    >
      {children}
    </motion.span>
  );
};

export default function AboutStudio() {
  const containerRef = useRef(null);

  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Animation starts when top of container hits 80% of viewport
    // Animation ends when bottom of text container hits 50% of viewport
    offset: ["start 80%", "end 50%"],
  });

  const paragraphText =
    "We believe interior design should shape how people live and experience space through clarity and disciplined thinking. Our work is guided by proportion, material honesty, and long term relevance beyond the present moment. We value precision over noise and purpose over trend, creating spaces that feel intentional and considered. Every project balances strong vision with responsibility and structural performance. For us, interior design is about building environments that quietly endure and continue to matter over time.";

  const words = paragraphText.split(" ");

  return (
    <section
      // z-20 and solid background ensures it slides OVER the hero section
      className="relative z-20 bg-[#fcfbef] text-black w-full min-h-screen px-6 py-24 md:px-12 lg:px-0 flex flex-col justify-between"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 max-w-7xl mx-auto w-full">
        
        {/* Left Column - "Our Studio" */}
        <div className="lg:col-span-3 flex items-start space-x-3 pt-2">
          <div className="w-2.5 h-2.5 rounded-full bg-black mt-1.5" />
          <span className="text-sm font-mono tracking-widest uppercase">
            Our Studio
          </span>
        </div>

        {/* Right Column - Content */}
        <div className="lg:col-span-8 flex flex-col">
          {/* Scroll Reveal Text */}
          <div ref={containerRef} className="mb-20">
            <p className="text-2xl md:text-3xl lg:text-[32px] leading-[1.4] font-medium tracking-tight">
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 border-t border-white/20 pt-8 mb-16 font-sans">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-semibold mb-2">18+</span>
              <span className="text-xs md:text-sm text-black/70">Years of Practice</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-semibold mb-2">120+</span>
              <span className="text-xs md:text-sm text-black/70">Completed Projects</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-semibold mb-2">5</span>
              <span className="text-xs md:text-sm text-black/70">International Awards</span>
            </div>
          </div>

          {/* Link */}
          <div>
            <a 
              href="#" 
              className="text-sm font-medium underline hover:text-black/70 transition-colors font-sans inline-flex items-center"
            >
              Learn More About Our Studio 
              <span className="ml-2 text-lg leading-none">+</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Logos Section */}
      <div className="mt-24 pt-12 border-t border-white/10 w-full">
        <div className="flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale max-w-[1600px] mx-auto">
          {/* Placeholder for Logos - Replace with your actual logo SVGs/Images */}
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center space-x-2">
               {/* Dummy Logo Icon */}
              <div className="w-6 h-6 rounded-full border-[2px] border-dashed border-black" />
              <span className="text-sm font-semibold tracking-wider">Logoipsum</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}