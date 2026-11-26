"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { services, serviceHref } from "../lib/servicesData";

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
      <div
        key={service.id}
        onMouseEnter={() => setActiveIndex(index)}
        onFocus={() => setActiveIndex(index)}
        className={`w-full text-left border-b border-black/10 py-4 transition-opacity duration-300 ${
          align === "right" ? "lg:text-right" : ""
        } ${isActive ? "opacity-100" : "opacity-40 hover:opacity-70"}`}
      >
        <Link
          href={serviceHref(service.id)}
          className="block focus:outline-none focus-visible:ring-1 focus-visible:ring-black/60"
        >
          <h3 className="text-base md:text-lg font-medium">{service.title}</h3>
        </Link>

        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className={`overflow-hidden text-sm leading-relaxed text-black/70 max-w-sm font-sans ${
                align === "right" ? "lg:ml-auto" : ""
              }`}
            >
              <p className="pt-3">{service.description}</p>
              <Link
                href={serviceHref(service.id)}
                className="inline-block pt-2 font-medium text-black underline underline-offset-4"
              >
                View details
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="bg-[#fcfbef] w-full font-sans">
      <div className="text-black rounded-none md:rounded-r-3xl w-full max-w-7xl mx-auto px-6 py-24 md:px-12 lg:px-0">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20 max-w-2xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-black" />
            <span className="text-xs md:text-sm font-mono tracking-widest uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight">
            Custom interior solutions that make every space look finished and feel like yours.
          </h2>
        </div>

        {/* Top Separator Line */}
        <div className="w-full h-px bg-black/10 mb-12" />

        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_400px_1fr] gap-10 lg:gap-8 items-center lg:items-start">
          {/* Left Column */}
          <div className="flex flex-col w-full">
            {leftItems.map((s) => renderItem(s, "left"))}
          </div>

          {/* Center Column: Image Display (also links to the service) */}
          <Link
            href={serviceHref(active.id)}
            aria-label={`View ${active.title}`}
            className="block w-80 h-[400px] md:h-[500px] lg:h-[460px] relative rounded-xl overflow-hidden order-first lg:order-none ml-10"
          >
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
          </Link>

          {/* Right Column */}
          <div className="flex flex-col w-full">
            {rightItems.map((s) => renderItem(s, "right"))}
          </div>
        </div>
      </div>
    </section>
  );
}