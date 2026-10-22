"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    title: "Quiet Luxury",
    category: "Living Room",
    className: "col-span-7 md:col-span-5",
    aspect: "aspect-[5/4] md:aspect-[1.15/1]",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    title: "Natural Harmony",
    category: "Architecture",
    className: "col-span-5 md:col-span-3 md:mt-32",
    aspect: "aspect-[3/4]",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    title: "Modern Living",
    category: "Living Room",
    className: "col-span-5 md:col-span-4 md:-mt-20",
    aspect: "aspect-[4/5]",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    title: "Soft Geometry",
    category: "Interior Design",
    className: "col-span-7 md:col-span-4",
    aspect: "aspect-[5/4]",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    title: "The Art of Detail",
    category: "Material & Texture",
    className: "col-span-7 md:col-span-4",
    aspect: "aspect-[5/4]",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f",
    title: "Calm Corners",
    category: "Bedroom",
    className: "col-span-5 md:col-span-3 md:mt-24",
    aspect: "aspect-[3/4]",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3",
    title: "Everyday Elegance",
    category: "Living Room",
    className: "col-span-7 md:col-span-5",
    aspect: "aspect-[5/3]",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
    title: "Warm Minimalism",
    category: "Interior Design",
    className: "col-span-5 md:col-span-3 md:mt-24",
    aspect: "aspect-[3/4]",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    title: "Spaces in Balance",
    category: "Architecture",
    className: "col-span-7 md:col-span-5 md:-mt-16",
    aspect: "aspect-[5/3]",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    title: "A New Perspective",
    category: "Living Room",
    className: "col-span-5 md:col-span-3",
    aspect: "aspect-[3/4]",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    title: "Material Stories",
    category: "Architecture",
    className: "col-span-7 md:col-span-5 md:mt-20",
    aspect: "aspect-[5/3]",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    title: "Timeless Interiors",
    category: "Interior Design",
    className: "col-span-5 md:col-span-3",
    aspect: "aspect-[3/4]",
  },
];

export default function VisualInsights() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loopCount, setLoopCount] = useState(0);

  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  const headingY = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, -45]
  );

  useEffect(() => {
    if (selectedIndex === null) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((index) =>
          (index + 1) % galleryItems.length
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((index) =>
          (index - 1 + galleryItems.length) %
          galleryItems.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  const showMore = () => {
    if (visibleCount < galleryItems.length) {
      setVisibleCount((count) =>
        Math.min(count + 3, galleryItems.length)
      );
    } else {
      // Restart the visual sequence with the first images.
      setVisibleCount(6);
      setLoopCount((count) => count + 1);
    }
  };

  const selectedImage =
    selectedIndex !== null ? galleryItems[selectedIndex] : null;

  return (
    <section
      className="relative overflow-hidden bg-[#fcfbef] px-4 py-20 text-[#24231f] sm:px-8 sm:py-28 md:px-12 lg:px-20"
    >
      {/* Subtle background detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-64 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#e9e3d7]/40 blur-[130px]"
      />

   <header className="grid grid-cols-1 items-end gap-y-6 px-5 sm:px-8 md:grid-cols-2 lg:px-[3.8vw] lg:pr-[7.2vw] mb-36">
        <p className="m-0 flex items-center gap-1.5 text-[11px] text-[#6f6a62] md:col-span-2">
          <span className="h-1 w-1 rounded-full bg-[#6f6a62]" />
          Goto Interior
        </p>
        <h2
          id="studio-title"
          className="m-0 text-[clamp(2.8rem,7vw,3.8rem)] font-normal leading-[0.98] tracking-[-0.04em]"
        >
         See the Shots that
          <br />
          Inspire Us
        </h2>
        <p className="m-0 max-w-[340px] text-sm leading-[1.4] md:justify-self-end md:text-right">
          We approach every space with intention, balancing function, atmosphere, and timeless character.
        </p>
        <hr className="m-0 border-0 border-t border-[#1a1816]/15 md:col-span-2" />
      </header>

      {/* Gallery */}
      <div
        key={loopCount}
        className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 items-start gap-x-3 gap-y-12 sm:gap-x-5 sm:gap-y-16 md:gap-x-8 md:gap-y-24"
      >
        {galleryItems.slice(0, visibleCount).map((item, index) => (
          <GalleryCard
            key={`${loopCount}-${item.id}`}
            item={item}
            index={index}
            onClick={() => setSelectedIndex(index)}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>

      {/* Load more / repeat */}
      <div className="relative z-10 mt-20 flex flex-col items-center sm:mt-28">
        <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-[#8b8578]">
          {visibleCount < galleryItems.length
            ? "Keep exploring"
            : "A new perspective awaits"}
        </p>

        <button
          onClick={showMore}
          className="group flex items-center gap-4 rounded-full border border-[#d6d0c5] px-7 py-4 text-sm transition-all duration-300 hover:border-[#24231f] hover:bg-[#24231f] hover:text-white"
        >
          <span>
            {visibleCount < galleryItems.length
              ? "Discover More"
              : "Explore Again"}
          </span>

          <ArrowUpRight
            size={17}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </button>

        <span className="mt-4 text-xs text-[#a09a8e]">
          {String(visibleCount).padStart(2, "0")} /{" "}
          {String(galleryItems.length).padStart(2, "0")}
        </span>
      </div>

      {/* Image modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171613]/95 p-4 backdrop-blur-md sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              aria-label="Close image"
              className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black sm:right-8 sm:top-8"
            >
              <X size={21} />
            </button>

            {/* Previous */}
            <button
              onClick={(event) => {
                event.stopPropagation();
                setSelectedIndex(
                  (selectedIndex - 1 + galleryItems.length) %
                    galleryItems.length
                );
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-black sm:left-8 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex h-[72vh] w-full max-w-6xl flex-col sm:h-[82vh]"
            >
              <div className="relative min-h-0 flex-1">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="flex items-end justify-between gap-4 pt-5 text-white">
                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/50">
                    {selectedImage.category}
                  </p>
                  <h3 className="text-xl font-medium tracking-tight sm:text-3xl">
                    {selectedImage.title}
                  </h3>
                </div>

                <p className="shrink-0 text-xs text-white/50">
                  {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                  {String(galleryItems.length).padStart(2, "0")}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(event) => {
                event.stopPropagation();
                setSelectedIndex(
                  (selectedIndex + 1) % galleryItems.length
                );
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-black sm:right-8 sm:h-12 sm:w-12"
            >
              <ChevronRight size={22} />
            </button>

            <p className="absolute bottom-3 left-0 right-0 text-center text-[10px] uppercase tracking-[0.2em] text-white/40 sm:bottom-5">
              Click outside to close · Esc to exit
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryCard({ item, index, onClick, reduceMotion }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 65,
        scale: reduceMotion ? 1 : 0.96,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.8,
        delay: reduceMotion ? 0 : (index % 3) * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduceMotion ? undefined : { y: -7 }}
      className={`group relative block w-full text-left ${item.className}`}
      aria-label={`View ${item.title}`}
    >
      <div
        className={`relative w-full overflow-hidden bg-[#e9e4da] ${item.aspect}`}
      >
        <Image
          src={item.src}
          alt={item.title}
          fill
          priority={index < 2}
          sizes="(max-width: 768px) 75vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />

        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />

        <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="flex items-start justify-between gap-3 pt-4 sm:pt-5">
        <div>
          <h3 className="text-sm font-medium tracking-tight sm:text-base">
            {item.title}
          </h3>
          <p className="mt-1.5 text-[10px] uppercase tracking-[0.17em] text-[#8b8578] sm:text-xs">
            {item.category}
          </p>
        </div>

        <span className="pt-1 text-xs tabular-nums text-[#aaa397]">
          {String(item.id).padStart(2, "0")}
        </span>
      </div>
    </motion.button>
  );
}
