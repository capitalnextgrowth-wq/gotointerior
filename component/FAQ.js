"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What types of projects does your studio work on?",
    answer:
      "We work across residential, commercial, hospitality, renovation, and custom architectural projects.",
  },
  {
    question: "What is the first step to starting a project with your studio?",
    answer:
      "The first step is a consultation where we understand your requirements, vision, space, budget, and timeline.",
  },
  {
    question: "How long does an architectural project typically take?",
    answer:
      "Project timelines depend on the scale and complexity of the project. After the initial consultation, we provide a clear estimated timeline.",
  },
  {
    question: "Can you help with renovations or existing buildings?",
    answer:
      "Yes. We work with existing structures and help transform them through thoughtful planning, design, and material selection.",
  },
  {
    question: "Do you also assist during the construction phase?",
    answer:
      "Yes. We can provide design coordination and construction-stage support to ensure the final result stays true to the design.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* ============================================================
          FAQ SECTION
      ============================================================ */}

      <section className="relative z-20 bg-[#080808] px-5 py-20 text-white md:px-10 lg:px-[9.2vw] lg:py-24">
        <div className="mx-auto max-w-[1200px]">

          {/* Top label */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-white" />

            <span className="text-[12px] font-medium tracking-wide">
              Frequently Asked Questions
            </span>
          </div>

          {/* Divider */}
          <div className="mt-16 h-px w-full bg-white/20" />

          {/* Content */}
          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] lg:gap-8">

            {/* LEFT */}
            <div>
              <h2 className="max-w-[570px] text-[25px] font-medium leading-[1.25] tracking-[-0.04em] md:text-[27px]">
                If you have more questions, feel free to email our team
                at hi@helloarchi.com and we will be happy to help.
              </h2>

              {/* FAQ image */}
              <div className="relative mt-7 aspect-[1.62/0.8] overflow-hidden rounded-[6px]">
  <video
    src="https://www.pexels.com/download/video/38675643/"
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="pointer-events-none absolute inset-0" />
</div>
            </div>

            {/* RIGHT FAQ */}
            <div>
              {faqs.map((faq, index) => {
                const isOpen = active === index;

                return (
                  <div
                    key={faq.question}
                    className="border-b border-white/20"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActive(isOpen ? null : index)
                      }
                      className="flex w-full cursor-pointer items-center justify-between py-7 text-left"
                    >
                      <span className="pr-6 text-[15px] font-medium tracking-[-0.02em] md:text-[16px]">
                        {faq.question}
                      </span>

                      <motion.span
                        animate={{
                          rotate: isOpen ? 45 : 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full bg-white text-[14px] font-bold text-black"
                      >
                        +
                      </motion.span>
                    </button>

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
                          className="overflow-hidden"
                        >
                          <p className="max-w-[600px] pb-7 pr-8 text-[14px] leading-[1.5] text-white/60">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================
          STICKY IMAGE SECTION
      ============================================================ */}

      <StudioRevealSection />


      {/* ============================================================
          NEXT SECTION
      ============================================================ */}

 
    </>
  );
}


/* ================================================================
   STUDIO REVEAL SECTION
================================================================ */

function StudioRevealSection() {
  return (
    <section className="relative h-[170vh] bg-[#080808]">

      {/* ------------------------------------------------------------
          STICKY IMAGE
      ------------------------------------------------------------ */}

      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Background image */}
        <motion.div
          initial={{
            scale: 1.08,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1745301558339-44eb3217d5da"
            alt="Work with our studio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>


        {/* ----------------------------------------------------------
            DARK OVERLAY
        ---------------------------------------------------------- */}

        <div className="absolute inset-0 bg-black/10" />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/10
            via-transparent
            to-black/65
          "
        />


        {/* ----------------------------------------------------------
            BOTTOM TEXT
        ---------------------------------------------------------- */}

        <div className="absolute inset-x-0 bottom-0 z-10">

          <div className="mx-auto max-w-[650px] px-5 pb-12 text-center text-white md:pb-16">

            {/* Label */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="mb-5 flex items-center justify-center gap-2"
            >
              <span className="h-3 w-3 rounded-full bg-white" />

              <span className="text-[12px] font-medium tracking-wide">
                Work With Our Studio
              </span>
            </motion.div>


            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-[28px]
                font-medium
                leading-[1.12]
                tracking-[-0.045em]
                md:text-[35px]
              "
            >
              Let’s create a thoughtful space
              <br />
              that combines design, craft, and
              <br />
              lasting quality.
            </motion.h2>

          </div>
        </div>

      </div>
    </section>
  );
}