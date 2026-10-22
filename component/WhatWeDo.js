"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace each `image` with your own photo path (e.g. files in /public/services/)
const services = [
  {
    id: "curtains-blinds",
    title: "Curtains & Blinds with Customization",
    description:
      "Made-to-measure curtains and blinds in the fabrics, colours and styles you choose, fitted neatly to every window.",
    image: "https://images.pexels.com/photos/34350950/pexels-photo-34350950.jpeg",
    label: "Curtains & Blinds",
  },
  {
    id: "glass-film",
    title: "Glass Film with Customization",
    description:
      "Frosted, decorative and privacy films cut to your design, adding style, shade and privacy to glass.",
    image: "https://images.pexels.com/photos/17572159/pexels-photo-17572159.jpeg",
    label: "Glass Film",
  },
  {
    id: "sofa-chairs",
    title: "Customized Sofa & Chairs",
    description:
      "Sofas and chairs built to your size, shape and upholstery, so the seating fits your space and your comfort.",
    image: "https://images.pexels.com/photos/38084669/pexels-photo-38084669.jpeg",
    label: "Sofa & Chairs",
  },
  {
    id: "pvc-louvers",
    title: "PVC & Louvers",
    description:
      "Durable, easy-to-clean PVC panels and louvers for walls, ceilings and partitions that add structure and style.",
    image: "https://images.pexels.com/photos/36841745/pexels-photo-36841745.jpeg",
    label: "PVC & Louvers",
  },
  {
    id: "vecta-charcoal",
    title: "Vecta Panels & Charcoal Sheets",
    description:
      "Modern wall panels and charcoal sheets that bring texture, warmth and a premium finish to any wall.",
    image: "https://images.pexels.com/photos/36499215/pexels-photo-36499215.jpeg",
    label: "Wall Panels",
  },
  {
    id: "uv-dmd-3d",
    title: "UV Sheets & DMD & 3D Sheets",
    description:
      "Glossy UV sheets, DMD boards and 3D sheets for bold, easy-to-maintain feature walls and cabinetry.",
    image: "https://images.pexels.com/photos/36567384/pexels-photo-36567384.png",
    label: "UV, DMD & 3D",
  },
  {
    id: "mosaic-foam",
    title: "Mosaic Tiles & Foam Sheets",
    description:
      "Mosaic tiles and soft foam sheets that add pattern, colour and depth to accent walls and backsplashes.",
    image: "https://images.pexels.com/photos/7147292/pexels-photo-7147292.jpeg",
    label: "Mosaic & Foam",
  },
  {
    id: "3d-sheets",
    title: "3D Sheets",
    description:
      "Textured 3D wall sheets that create depth and a sculpted look, installed quickly with a clean finish.",
    image: "https://images.pexels.com/photos/6143347/pexels-photo-6143347.jpeg",
    label: "3D Sheets",
  },
  {
    id: "grass-garden",
    title: "Artificial Grass & Vertical Garden",
    description:
      "Evergreen artificial grass and vertical gardens that bring greenery to balconies, terraces and walls without upkeep.",
    image: "https://images.pexels.com/photos/32103583/pexels-photo-32103583.jpeg",
    label: "Greenery",
  },
  {
    id: "flooring",
    title: "Complete Flooring",
    description:
      "Full flooring solutions, from selection to installation, in materials suited to your space and budget.",
    image: "https://images.pexels.com/photos/6207950/pexels-photo-6207950.jpeg",
    label: "Flooring",
  },
  {
    id: "decor",
    title: "Paintings, Clocks & Table Decor",
    description:
      "Paintings, wall clocks and table decor to finish a room with personality and the details that make it feel complete.",
    image: "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg",
    label: "Decor",
  },
];

const half = Math.ceil(services.length / 2);
const leftItems = services.slice(0, half);
const rightItems = services.slice(half);

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failed, setFailed] = useState({});
  const active = services[activeIndex];

  const renderItem = (service, align) => {
    const index = services.findIndex((s) => s.id === service.id);
    const isActive = activeIndex === index;

    return (
      <button
        key={service.id}
        type="button"
        onMouseEnter={() => setActiveIndex(index)}
        onFocus={() => setActiveIndex(index)}
        onClick={() => setActiveIndex(index)}
        className={`w-full text-left border-b border-white/10 py-4 transition-opacity duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/60 ${
          align === "right" ? "lg:text-right" : ""
        } ${isActive ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
      >
        <h3 className="text-base md:text-lg font-medium">{service.title}</h3>
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`overflow-hidden text-sm leading-relaxed text-white/80 max-w-sm font-sans ${
                align === "right" ? "lg:ml-auto" : ""
              }`}
            >
              <span className="block pt-3">{service.description}</span>
            </motion.p>
          )}
        </AnimatePresence>
      </button>
    );
  };

  return (
    <section className="bg-[#fcfbef] w-full font-sans">
      <div className="text-black rounded-none md:rounded-r-3xl w-full max-w-7xl mx-auto px-6 py-24 md:px-12 lg:px-0">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20 max-w-2xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-white" />
            <span className="text-xs md:text-sm font-mono tracking-widest uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight">
            Custom interior solutions that make every space look finished and feel like yours.
          </h2>
        </div>

        {/* Top Separator Line */}
        <div className="w-full h-px bg-white/10 mb-12" />

        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px_1fr] gap-10 lg:gap-8 items-center lg:items-start">
          {/* Left Column */}
          <div className="flex flex-col w-full">
            {leftItems.map((s) => renderItem(s, "left"))}
          </div>

          {/* Center Column: Image Display */}
          <div className="w-80 h-[400px] md:h-[500px] lg:h-[460px] relative rounded-xl overflow-hidden order-first lg:order-none ml-10">
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

                {!failed[active.id] && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={active.image}
                    alt={active.title}
                    onError={() =>
                      setFailed((prev) => ({ ...prev, [active.id]: true }))
                    }
                    className="absolute inset-0 w-80 h-full object-cover opacity-80"
                  />
                )}

                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Label */}
                <div className="absolute inset-0 flex items-center justify-center px-6">
                  <span className="text-white font-medium text-lg tracking-wide drop-shadow-lg font-sans text-center">
                    {active.label}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-full">
            {rightItems.map((s) => renderItem(s, "right"))}
          </div>
        </div>
      </div>
    </section>
  );
}