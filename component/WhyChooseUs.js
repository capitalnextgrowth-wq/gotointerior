"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Interior Design Consultation",
    description:
      "Personalized design guidance to define your vision, style, colors, materials, and overall direction.",
    image: "/images/interior-1.jpg",
  },
  {
    id: 2,
    title: "Residential Interior Design",
    description:
      "Thoughtfully designed residential spaces that balance aesthetics, comfort, functionality, and your personal lifestyle.",
    image: "/images/interior-2.jpg",
  },
  {
    id: 3,
    title: "Commercial Interior Design",
    description:
      "Strategic commercial interiors designed to create a strong identity while improving usability and customer experience.",
    image: "/images/interior-3.jpg",
  },
  {
    id: 4,
    title: "Space Planning & Layout Design",
    description:
      "Strategic planning of layouts to improve flow, maximize usable space, and create a natural balance between form and function.",
    image: "/images/interior-4.jpg",
  },
  {
    id: 5,
    title: "Material & Finish Selection",
    description:
      "Carefully selected materials, textures, colors, and finishes that bring consistency and character to every space.",
    image: "/images/interior-5.jpg",
  },
];

const defaultImage = "/images/interior-main.jpg";

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(3);

  const activeImage =
    activeIndex !== null
      ? services[activeIndex].image
      : defaultImage;

  const handleAccordion = (index) => {
    setActiveIndex((current) =>
      current === index ? null : index
    );
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
              Services
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-[500px] text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] text-black md:text-[52px] lg:text-[48px] xl:text-[56px]">
            Why Choose Us
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-[470px] text-[17px] leading-[1.35] text-[#454545] md:text-[18px]">
            From concept to completion, every decision
            <br className="hidden md:block" />
            is guided by purpose, precision, and care.
          </p>

          {/* Accordions */}
          <div className="mt-12 flex flex-col gap-3">
            {services.map((service, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={service.id}
                  layout
                  transition={{
                    layout: {
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  className="overflow-hidden rounded-[9px] bg-[#f5f1cc]/40"
                >
                  {/* Header */}
                  <button
                    type="button"
                    onClick={() => handleAccordion(index)}
                    className="flex w-full cursor-pointer items-center justify-between px-3 py-[16px] text-left md:px-3.5 md:py-[17px]"
                  >
                    <span className="text-[16px] font-medium leading-none text-[#151515] md:text-[17px]">
                      {service.title}
                    </span>

                    <motion.span
                      animate={{
                        rotate: isOpen ? 45 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                      }}
                      className="flex h-6 w-6 items-center justify-center text-[25px] font-light leading-none"
                    >
                      +
                    </motion.span>
                  </button>

                  {/* Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          height: {
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          },
                          opacity: {
                            duration: 0.2,
                          },
                        }}
                      >
                        <div className="px-3 pb-3 md:px-3">
                          <motion.div
                            initial={{
                              y: -8,
                              opacity: 0,
                            }}
                            animate={{
                              y: 0,
                              opacity: 1,
                            }}
                            exit={{
                              y: -5,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                            className="rounded-[8px] bg-[#f5f1cc] px-3 py-3 text-[15px] leading-[1.35] text-[#242424] md:px-3.5 md:py-3.5"
                          >
                            {service.description}
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
                initial={{
                  opacity: 0,
                  scale: 1.04,
                  x: 25,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                  x: -25,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                <Image
                  src={activeImage}
                  alt="Interior design"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Bottom image previews */}
            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
              {services.map((service, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.button
                    key={service.id}
                    type="button"
                    onClick={() => handleAccordion(index)}
                    animate={{
                      scale: isActive ? 1.08 : 1,
                      opacity: isActive ? 1 : 0.9,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className={`relative h-[52px] w-[52px] overflow-hidden rounded-full border-2 ${
                      isActive
                        ? "border-white"
                        : "border-white/60"
                    }`}
                  >
                    <Image
                      src={service.image}
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