"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

/*
|--------------------------------------------------------------------------
| GALLERY DATA
|--------------------------------------------------------------------------
|
| Change only the image paths here.
|
| x / y are animation positions.
|
| IMPORTANT:
| The LAST value is the SAME as the FIRST value.
|
| This makes the animation loop back to its starting
| position without a visible jump.
|
*/

const galleryItems = [
  {
    id: 1,
    src: "/gallery/01.jpg",

    // Starting position
    position: "left-[12%] top-[-2%]",

    width: "w-[300px]",
    height: "h-[175px]",

    x: [0, 35, 70, 45, 15, -15, 0],
    y: [0, -15, 20, 45, 20, -10, 0],

    duration: 22,
  },

  {
    id: 2,
    src: "/gallery/02.jpg",

    position: "left-[5%] top-[36%]",

    width: "w-[150px]",
    height: "h-[180px]",

    x: [0, -20, -40, -15, 25, 40, 0],
    y: [0, 25, 45, 20, -15, -30, 0],

    duration: 18,
  },

  {
    id: 3,
    src: "/gallery/03.jpg",

    position: "left-[-3%] top-[72%]",

    width: "w-[180px]",
    height: "h-[150px]",

    x: [0, 30, 60, 30, -15, -35, 0],
    y: [0, -20, 10, 40, 20, -15, 0],

    duration: 25,
  },

  {
    id: 4,
    src: "/gallery/04.jpg",

    position: "left-[43%] top-[18%]",

    width: "w-[150px]",
    height: "h-[190px]",

    x: [0, 25, 45, 20, -25, -45, 0],
    y: [0, 35, 10, -25, -45, -15, 0],

    duration: 20,
  },

  {
    id: 5,
    src: "/gallery/05.jpg",

    position: "right-[10%] top-[-4%]",

    width: "w-[260px]",
    height: "h-[150px]",

    x: [0, -30, -55, -20, 25, 45, 0],
    y: [0, 20, -10, -35, -10, 25, 0],

    duration: 24,
  },

  {
    id: 6,
    src: "/gallery/06.jpg",

    position: "right-[5%] top-[25%]",

    width: "w-[210px]",
    height: "h-[280px]",

    x: [0, 25, 50, 20, -20, -35, 0],
    y: [0, -30, -10, 25, 50, 20, 0],

    duration: 21,
  },

  {
    id: 7,
    src: "/gallery/07.jpg",

    position: "left-[44%] bottom-[2%]",

    width: "w-[150px]",
    height: "h-[200px]",

    x: [0, -25, -50, -20, 25, 45, 0],
    y: [0, -20, 20, 45, 15, -25, 0],

    duration: 23,
  },

  {
    id: 8,
    src: "/gallery/08.jpg",

    position: "right-[17%] bottom-[2%]",

    width: "w-[260px]",
    height: "h-[190px]",

    x: [0, 30, 60, 30, -20, -40, 0],
    y: [0, 20, -15, -40, -10, 25, 0],

    duration: 26,
  },

  {
    id: 9,
    src: "/gallery/09.jpg",

    position: "right-[-2%] bottom-[0%]",

    width: "w-[180px]",
    height: "h-[150px]",

    x: [0, -30, -55, -25, 20, 40, 0],
    y: [0, -25, 15, 40, 15, -20, 0],

    duration: 19,
  },
];

/*
|--------------------------------------------------------------------------
| MAIN COMPONENT
|--------------------------------------------------------------------------
*/

export default function VisualInsights() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#080808]">
      {/* --------------------------------------------------------------- */}
      {/* GALLERY */}
      {/* --------------------------------------------------------------- */}

      <div className="absolute inset-0">
        {galleryItems.map((item) => (
          <FloatingImage
            key={item.id}
            item={item}
          />
        ))}
      </div>

      {/* --------------------------------------------------------------- */}
      {/* CENTER CONTENT */}
      {/* --------------------------------------------------------------- */}

      <div className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center">
        <div className="flex flex-col items-center text-center">

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[38px] font-medium tracking-[-0.045em] text-white sm:text-[48px] md:text-[56px] lg:text-[64px]"
          >
            Visual Insights
          </motion.h2>

          <motion.button
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              pointer-events-auto
              mt-8
              flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-6
              py-4
              text-[15px]
              font-medium
              text-black
              transition-transform
              duration-300
              hover:scale-105
            "
          >
            <span>Start a Project</span>

            <span className="text-[21px] leading-none">
              +
            </span>
          </motion.button>

        </div>
      </div>

      {/* --------------------------------------------------------------- */}
      {/* DARK VIGNETTE */}
      {/* --------------------------------------------------------------- */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-30
          bg-[radial-gradient(circle_at_center,transparent_15%,rgba(8,8,8,0.05)_45%,rgba(8,8,8,0.45)_100%)]
        "
      />
    </section>
  );
}


/*
|--------------------------------------------------------------------------
| FLOATING IMAGE
|--------------------------------------------------------------------------
*/

function FloatingImage({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`
        absolute
        ${item.position}
        ${item.width}
        ${item.height}
        z-10
      `}
      animate={{
        x: item.x,
        y: item.y,
      }}
      transition={{
        duration: item.duration,

        // TRUE INFINITE LOOP
        repeat: Infinity,

        // Important:
        // Do NOT use mirror.
        repeatType: "loop",

        // Constant movement
        ease: "linear",

        // Start at a slightly different time
        // so every image doesn't move together.
        delay: item.id * -1.8,
      }}
    >
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          scale: hovered ? 1.12 : 1,
          zIndex: hovered ? 100 : 1,
        }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          h-full
          w-full
          cursor-pointer
          overflow-hidden
          rounded-[4px]
          shadow-[0_10px_40px_rgba(0,0,0,0.15)]
        "
      >
        <Image
          src={item.src}
          alt=""
          fill
          priority={item.id <= 4}
          sizes="(max-width: 768px) 180px, 350px"
          className="
            object-cover
            transition-[filter]
            duration-500
          "
          style={{
            filter: hovered
              ? "brightness(1.08)"
              : "brightness(0.92)",
          }}
        />

        {/* Hover overlay */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: hovered ? 0.06 : 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="absolute inset-0 bg-white"
        />
      </motion.div>
    </motion.div>
  );
}