"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        className={`w-full border-b border-[#ded9cf] py-4 text-left transition-opacity duration-300 ${
          align === "right" ? "lg:text-right" : ""
        } ${isActive ? "opacity-100" : "opacity-45 hover:opacity-75"}`}
      >
        <h3 className="text-base font-medium md:text-lg">
          {service.title}
        </h3>

        <AnimatePresence initial={false}>
          {isActive && (
            <motion.p
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`max-w-sm overflow-hidden text-sm leading-relaxed text-[#77746d] ${
                align === "right" ? "lg:ml-auto" : ""
              }`}
            >
              <span className="block pt-3">
                {service.description}
              </span>
            </motion.p>
          )}
        </AnimatePresence>
      </button>
    );
  };

  return (
    <section className="w-full bg-[#fcfbef] font-sans text-[#191816]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-12 md:py-24">
        {/* Section heading */}
        <header className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-[clamp(42px,6vw,76px)] font-normal leading-none tracking-[-0.06em]">
            Our Service
          </h2>

          <p className="max-w-md text-sm leading-relaxed text-[#817d74] md:justify-self-end md:text-right">
            From concept to completion, we carefully shape each
            element to create interiors that feel cohesive,
            functional, and distinctly your own.
          </p>
        </header>

        {/* Each service gets its own scroll stage */}
        <div>
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <section
                key={service.id}
                className="relative min-h-[100svh] border-t border-[#ded9cf]"
                style={{ zIndex: index + 1 }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Sticky service content */}
                <div className="sticky top-0 flex min-h-[100svh] flex-col bg-[#fcfbef] py-6 md:py-8">
                  <div className="grid gap-5 md:grid-cols-[1fr_0.65fr] md:items-center">
                    <div>
                      <p className="mb-2 text-xs text-[#817d74]">
                        Service {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="text-[clamp(28px,4vw,48px)] font-normal leading-tight tracking-[-0.05em]">
                        {service.title}
                      </h3>

                      <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#817d74]">
                        {service.description}
                      </p>
                    </div>

                    <div className="hidden grid-cols-2 gap-3 text-xs text-[#5f5b54] md:grid">
                      <p>Residential · Commercial</p>
                      <p>Custom Solutions</p>
                      <p>Material Selection</p>
                      <p>Made to Measure</p>
                    </div>
                  </div>

                  {/* Images disappear as the next service takes over */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition={{ duration: 0.35 }}
                        className="mt-7 grid grid-cols-2 gap-3 md:mt-9 md:grid-cols-4 md:gap-4"
                      >
                        <div className="col-span-2 row-span-2 min-w-0 md:col-span-2">
                          <div className="relative h-[220px] overflow-hidden bg-[#e4ddd1] sm:h-[300px] md:h-[390px]">
                            {!failed[service.id] && (
                              <img
                                src={service.image}
                                alt={service.title}
                                onError={() =>
                                  setFailed((prev) => ({
                                    ...prev,
                                    [service.id]: true,
                                  }))
                                }
                                className="h-full w-full object-cover"
                              />
                            )}
                          </div>

                          <p className="mt-2 text-xs text-[#817d74]">
                            {service.label}
                          </p>
                        </div>

                        <div className="col-span-2 hidden grid-cols-2 gap-3 md:grid">
                          {services
                            .filter((item) => item.id !== service.id)
                            .slice(
                              Math.max(0, index - 1),
                              Math.max(0, index - 1) + 2
                            )
                            .map((item) => (
                              <div
                                key={item.id}
                                className="min-w-0"
                              >
                                <div className="relative h-[190px] overflow-hidden bg-[#e4ddd1]">
                                  <img
                                    src={item.image}
                                    alt={item.label}
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <p className="mt-2 text-xs text-[#817d74]">
                                  {item.label}
                                </p>
                              </div>
                            ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Service navigation */}
                  <div className="mt-auto flex items-center justify-between border-t border-[#ded9cf] pt-4">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#817d74]">
                      What We Do
                    </span>

                    <span className="text-xs tabular-nums text-[#817d74]">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(services.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
