"use client";

import { useState } from "react";
import Image from "next/image";
import { Inter_Tight } from "next/font/google";

const font = Inter_Tight({ subsets: ["latin"], display: "swap" });

// Put photos in /public/images/testimonials/ and replace the names and quotes with real ones.
const TESTIMONIALS = [
  {
    quote: "Working with them felt less like hiring a designer and more like gaining a second set of eyes that truly understood our space and needs.",
    name: "Ananya Mehta",
    role: "Homeowner · Full-Service Design",
    image: "https://images.pexels.com/photos/31737838/pexels-photo-31737838.jpeg",
    imageAlt: "Living room with a curved tan sofa, wooden TV console and timber ceiling beams",
    avatar: "https://images.pexels.com/photos/31737838/pexels-photo-31737838.jpeg",
  },
  {
    quote: "From the first sketch to the final styling, everything arrived on time and exactly as we imagined. Our home finally feels like us.",
    name: "Rohan Singhania",
    role: "Homeowner · Modular Kitchen & Wardrobes",
    image: "https://images.pexels.com/photos/6238684/pexels-photo-6238684.jpeg",
    imageAlt: "Warm modern kitchen with wooden cabinets and soft natural light",
    avatar: "/images/testimonials/rohan.jpg",
  },
  {
    quote: "They understood our brand and our budget, and turned an empty showroom into a space our customers love walking into.",
    name: "Priya Khandelwal",
    role: "Business Owner · Commercial Interiors",
    image: "https://images.pexels.com/photos/35203644/pexels-photo-35203644.jpeg",
    imageAlt: "Bright boutique interior with warm wood shelving and neutral tones",
    avatar: "/images/testimonials/priya.jpg",
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;
  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  const fade = "transition-all duration-500 ease-out motion-reduce:transition-none";

  return (
    <section
      aria-roledescription="carousel"
      aria-labelledby="testimonial-title"
      className={`${font.className} ] px-5 py-10 text-[#1a1816] sm:px-8 lg:pb-24`}
    >
      <div className="mx-auto max-w-[1100px]">
        <header className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:items-end">
          <h2
            id="testimonial-title"
            className="m-0 text-[clamp(2.8rem,5.6vw,4.6rem)] font-normal leading-none tracking-[-0.04em]"
          >
            Testimonial
            <sup className="relative top-[0.3em] ml-1.5 align-top text-[11px] font-normal tracking-normal">[06]</sup>
          </h2>
          <p className="m-0 max-w-[355px] text-[13px] leading-[1.35] text-[#8c867d] md:justify-self-end">
            Hear from the people who trusted us with their spaces, from the first ideas to the final details that made them feel truly their own.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-[72px] md:grid-cols-[minmax(0,384px)_1fr] md:gap-10">
          {/* Images */}
          <div className="relative aspect-square w-full overflow-hidden bg-[#d9d2c5]">
            {TESTIMONIALS.map((t, i) => (
              <Image
                key={t.image}
                src={t.image}
                alt={i === active ? t.imageAlt : ""}
                fill
                priority={i === 0}
                sizes="(max-width: 767px) 100vw, 384px"
                className={`object-cover ${fade} ${i === active ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"}`}
              />
            ))}
          </div>

          {/* Quote + controls */}
          <div className="flex flex-col justify-end">
            <div className="grid" aria-live="polite">
              {TESTIMONIALS.map((t, i) => (
                <figure
                  key={t.name}
                  aria-hidden={i !== active}
                  className={`col-start-1 row-start-1 m-0 flex flex-col justify-end ${fade} ${
                    i === active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
                  }`}
                >
                  <blockquote className="m-0 max-w-[375px] text-[19px] leading-[1.32] tracking-[-0.005em]">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-2">
                    <Image src={t.avatar} alt="" width={32} height={32} className="h-8 w-8 object-cover" />
                    <span className="flex flex-col text-xs leading-tight">
                      <span>{t.name}</span>
                      <span className="text-[#8c867d]">{t.role}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between text-xs">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="cursor-pointer border-0 bg-transparent p-0 text-[#1a1816] transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1816]"
              >
                ← Previous
              </button>
              <span className="sr-only">
                Testimonial {active + 1} of {total}
              </span>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="cursor-pointer border-0 bg-transparent p-0 text-[#1a1816] transition-opacity hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a1816]"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}