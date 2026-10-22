"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  return (
    <section className="w-full overflow-hidden bg-[#fcfbef] px-5 pb-6 pt-25 text-[#191816] sm:px-8 md:px-[5.25%] md:pb-[22px] md:pt-24">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <div className="mb-2 flex items-center gap-1.5 text-[11px] font-normal text-[#817d74] md:text-xs">
          <span className="text-[10px]">•</span>
          <span>What We Do</span>
        </div>

        {/* Heading and description */}
        <div className="grid grid-cols-1 items-end gap-5 md:grid-cols-2 md:gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(42px,6.1vw,76px)] font-normal leading-[1.04] tracking-[-0.065em]"
          >
            From Vision
            <br />
            To Every Detail
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[500px] justify-self-start text-left text-sm leading-[1.55] tracking-[-0.025em] text-[#292824] md:justify-self-end md:text-right md:text-[16px]"
          >
            A thoughtful design process bringing together architecture,
            materials, lighting, and interiors to create spaces that feel
            complete.
          </motion.p>
        </div>

        {/* Divider */}
        <div className="mb-5 mt-5 h-px w-full bg-[#dfdbd2] md:mb-[29px] md:mt-[19px]" />

        {/* Image composition */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,2.05fr)_minmax(0,0.85fr)] md:gap-[13px]">
          {/* Main interior image */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="group relative aspect-[1.8/1] overflow-hidden bg-[#ddd4c6] sm:aspect-[1.68/1] md:aspect-[1.81/1]"
          >
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
              alt="Warm contemporary interior with natural materials"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 67vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </motion.div>

          {/* Secondary image */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative aspect-[1.15/1] overflow-hidden bg-[#ddd4c6] sm:aspect-[0.73/1] md:aspect-[0.73/1]"
          >
            <Image
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
              alt="Interior designers developing material and finish selections"
              fill
              sizes="(max-width: 640px) 100vw, 27vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
