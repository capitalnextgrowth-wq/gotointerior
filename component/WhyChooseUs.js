"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

// Replace each `image` with your own photo (e.g. files in /public/images/)
const reasons = [
  {
    id: 1,
    title: "Everything Under One Roof",
    description:
      "Curtains, blinds, sofas, wall panels, flooring, greenery and decor, all from one team. One point of contact means a faster project and a look that fits together.",
    image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
  },
  {
    id: 2,
    title: "Customized to Your Space",
    description:
      "Every piece is made to your measurements, colours and style, so it fits your room instead of you adjusting the room to fit it.",
    image: "https://images.pexels.com/photos/6438746/pexels-photo-6438746.jpeg",
  },
  {
    id: 3,
    title: "Quality Materials & Finish",
    description:
      "We choose durable materials and check the finish on every piece, so your interiors look good on day one and stay that way.",
    image: "https://images.pexels.com/photos/6588575/pexels-photo-6588575.jpeg",
  },
  {
    id: 4,
    title: "Neat, Expert Installation",
    description:
      "Our team handles measuring, fitting and installation with care, and leaves your space clean when the work is done.",
    image: "https://images.pexels.com/photos/11806490/pexels-photo-11806490.jpeg",
  },
  {
    id: 5,
    title: "Clear Pricing & On-Time Delivery",
    description:
      "You get a clear quote before work begins, with no surprise charges, and we stick to the timeline we agree with you.",
    image: "https://images.pexels.com/photos/6580416/pexels-photo-6580416.jpeg",
  },
];

const defaultImage = "https://images.pexels.com/photos/7148835/pexels-photo-7148835.jpeg";

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage =
    activeIndex !== null ? reasons[activeIndex].image : defaultImage;

  const handleAccordion = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-[#fcfbef] px-5 py-16 md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">
        {/* LEFT */}
        <div className="flex flex-col justify-center">
          {/* Label */}
          <div className="mb-7 flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f5f1cc] text-[13px]">
              ↗
            </span>

            <span className="text-sm font-medium text-[#171717]">
              Why Us
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-[500px] text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] text-black md:text-[52px] lg:text-[48px] xl:text-[56px]">
            Why Choose Us
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-[470px] text-[17px] leading-[1.35] text-[#454545] md:text-[18px]">
            From the first measurement to the final touch,
            <br className="hidden md:block" />
            we make your interiors easy to plan and a pleasure to live in.
          </p>

          {/* Accordions */}
          <div className="mt-12 flex flex-col gap-3">
            {reasons.map((reason, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={reason.id}
                  layout
                  transition={{
                    layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="overflow-hidden rounded-[9px] bg-[#f5f1cc]/40"
                >
                  {/* Header */}
                  <button
                    type="button"
                    onClick={() => handleAccordion(index)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between px-3 py-[16px] text-left md:px-3.5 md:py-[17px]"
                  >
                    <span className="text-[16px] font-medium leading-none text-[#151515] md:text-[17px]">
                      {reason.title}
                    </span>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="flex h-6 w-6 items-center justify-center text-[25px] font-light leading-none"
                    >
                      +
                    </motion.span>
                  </button>

                  {/* Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.2 },
                        }}
                      >
                        <div className="px-3 pb-3 md:px-3">
                          <motion.div
                            initial={{ y: -8, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -5, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="rounded-[8px] bg-[#f5f1cc] px-3 py-3 text-[15px] leading-[1.35] text-[#242424] md:px-3.5 md:py-3.5"
                          >
                            {reason.description}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="relative aspect-[1.08/1] w-full overflow-hidden rounded-[17px] bg-[#ddd] lg:aspect-[1.02/1]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, scale: 1.04, x: 25 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: -25 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={activeImage}
                  alt={
                    activeIndex !== null
                      ? reasons[activeIndex].title
                      : "Our interior work"
                  }
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Bottom image previews */}
            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
              {reasons.map((reason, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.button
                    key={reason.id}
                    type="button"
                    onClick={() => handleAccordion(index)}
                    aria-label={reason.title}
                    animate={{
                      scale: isActive ? 1.08 : 1,
                      opacity: isActive ? 1 : 0.9,
                    }}
                    transition={{ duration: 0.25 }}
                    className={`relative h-[52px] w-[52px] overflow-hidden rounded-full border-2 ${
                      isActive ? "border-white" : "border-white/60"
                    }`}
                  >
                    <Image
                      src={reason.image}
                      alt=""
                      fill
                      sizes="52px"
                      className="object-cover"
                    />
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}