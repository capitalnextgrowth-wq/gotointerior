'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const interiorCategories = [
  { 
    id: 'wardrobe', 
    title: 'Wardrobes', 
    image: 'https://images.unsplash.com/photo-1662454419622-a41092ecd245' // Replace with your actual image paths
  },
  { 
    id: 'kitchen', 
    title: 'Modular Kitchens', 
    image: 'https://images.unsplash.com/photo-1764559861917-ec30b19a9924' 
  },
  { 
    id: 'wallpaper', 
    title: 'Wallpapers', 
    image: 'https://images.unsplash.com/photo-1702078245250-24839ff2c852' 
  },
  { 
    id: 'panel', 
    title: 'Wall Panels', 
    image: 'https://images.unsplash.com/photo-1541471943749-e5976783f6c3' 
  },
  { 
    id: 'uv', 
    title: 'UV Sheets', 
    image: 'https://images.unsplash.com/photo-1745301558339-44eb3217d5da' 
  },
    { 
    id: 'Louvers', 
    title: 'Louvers', 
    image: 'https://images.unsplash.com/photo-1706629504952-ab5e50f5c179' 
  },
];

export default function InteriorShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  // Use Intersection Observer to detect which section is currently scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' } // Triggers exactly when the section hits the middle of the viewport
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full">
      {/* Pinned/Sticky Visual Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-zinc-900">
        
        {/* Animated Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Dark overlay to ensure the white text stays readable */}
            <div className="absolute inset-0 bg-black/20 z-10" />
            <Image
              src={interiorCategories[activeIndex].image}
              alt={interiorCategories[activeIndex].title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Central Animated Text */}
        <AnimatePresence mode="wait">
          <motion.h3
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative z-20 text-4xl md:text-6xl font-bold font-sans text-white tracking-tight text-center px-4"
          >
            {interiorCategories[activeIndex].title}
          </motion.h3>
        </AnimatePresence>

        {/* Responsive Thumbnail Dock */}
        <div className="absolute z-30 bottom-10 left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:left-auto md:right-8 md:translate-x-0 bg-white/10 backdrop-blur-xl p-2 md:p-3 rounded-xl md:rounded-[1rem] flex flex-row md:flex-col gap-2 md:gap-3 border border-white/20">
          {interiorCategories.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                // Smooth scroll to the corresponding section when a dock item is clicked
                sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`relative w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 border-1 ${
                activeIndex === idx 
                  ? 'border-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.3)]' 
                  : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Invisible Scroll Trigger Sections */}
      {/* These stack vertically to create the page length, while the visual container stays sticky on top */}
      <div className="relative z-0">
        {interiorCategories.map((item, idx) => (
          <div
            key={`trigger-${item.id}`}
            ref={(el) => (sectionRefs.current[idx] = el)}
            data-index={idx}
            className="h-screen w-full"
          />
        ))}
      </div>
    </div>
  );
}