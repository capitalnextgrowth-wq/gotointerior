"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ArchitectureQuote() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black">
      {/* ================================================================
          BACKGROUND IMAGE
      ================================================================= */}

      <motion.div
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1760067538299-3f58e7a99fc5"
          alt="Architecture interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* ================================================================
          DARK OVERLAY
      ================================================================= */}

      <div className="absolute inset-0 bg-black/45" />

      {/* Additional teal/black atmosphere */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(
            90deg,
            rgba(3,18,18,0.55)_0%,
            rgba(3,18,18,0.20)_45%,
            rgba(0,0,0,0.45)_100%
          )]
        "
      />

      {/* Bottom darkening */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[45%]
          bg-gradient-to-t
          from-black/45
          to-transparent
        "
      />

      {/* ================================================================
          QUOTE
      ================================================================= */}

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-[90%] max-w-[550px] -translate-y-[2%] text-white"
        >
          <blockquote
            className="
              text-[22px]
              font-medium
              leading-[1.22]
              tracking-[-0.035em]
              sm:text-[25px]
              md:text-[27px]
              lg:text-[28px]
            "
          >
            “Good architecture doesn’t try to impress. It
            quietly improves the way people live, move,
            and experience space — and that’s the approach
            we bring to every project we design and build.”
          </blockquote>

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.35,
              duration: 0.6,
            }}
            className="
              mt-5
              text-[12px]
              font-medium
              tracking-[-0.01em]
              text-white/90
              sm:text-[13px]
            "
          >
            Matteo Vermeer, Founder
          </motion.p>
        </motion.div>
      </div>

      {/* ================================================================
          GALLERY CTA
      ================================================================= */}

      <motion.button
        initial={{
          opacity: 0,
          x: 20,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.6,
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover="hover"
        className="
          group
          absolute
          bottom-7
          right-7
          z-20
          flex
          cursor-pointer
          items-center
          gap-2
          text-[13px]
          font-medium
          text-white
          sm:bottom-8
          sm:right-8
          md:bottom-9
          md:right-9
        "
      >
        <span>View Our Gallery</span>

        <motion.span
          variants={{
            hover: {
              x: 4,
              rotate: 90,
            },
          }}
          transition={{
            duration: 0.25,
          }}
          className="text-[17px] leading-none"
        >
          +
        </motion.span>
      </motion.button>
    </section>
  );
}