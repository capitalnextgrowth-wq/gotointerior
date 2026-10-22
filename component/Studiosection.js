"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Inter_Tight } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const font = Inter_Tight({ subsets: ["latin"], display: "swap" });

// Put your photos in /public/images/studio/ and update the alt text.
const IMAGES = [
  { src: "https://images.pexels.com/photos/9617881/pexels-photo-9617881.jpeg", alt: "Designer sketching a floor plan with a pencil beside a cup of coffee", cls: "lg:w-[23.3vw] lg:aspect-[3/4]" },
  { src: "https://images.pexels.com/photos/5582867/pexels-photo-5582867.jpeg", alt: "Two designers reviewing plans in a sunlit studio with timber beams", cls: "lg:w-[23.3vw] lg:aspect-[3/4]" },
  { src: "https://images.pexels.com/photos/14281158/pexels-photo-14281158.jpeg", alt: "Silhouette of a designer looking out of a window at a city at sunset", cls: "lg:w-[23.3vw] lg:aspect-[3/4]" },
  { src: "https://images.pexels.com/photos/4452601/pexels-photo-4452601.jpeg", alt: "Long wooden work table in a bright studio with tall windows", cls: "lg:w-[18.2vw] lg:aspect-[225/384]" },
];

export default function StudioSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const track = trackRef.current;
    const cards = gsap.utils.toArray(track.children);
    const mm = gsap.matchMedia();

    // Mobile + tablet: pin the section and slide the photos sideways as the page scrolls down.
    mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
      const travel = () => Math.max(0, track.scrollWidth - window.innerWidth);
      gsap.to(track, {
        x: () => -travel(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => "+=" + Math.max(travel() * 1.1, 300),
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    // Desktop: all photos are visible; each drifts sideways at its own speed while scrolling.
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        cards,
        { x: (i) => 30 + i * 25 },
        {
          x: (i) => -(30 + i * 25),
          ease: "none",
          scrollTrigger: { trigger: track, start: "top bottom", end: "bottom top", scrub: 0.8 },
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="studio-title"
      className={`${font.className} overflow-hidden bg-[#fcfbef] py-6 pt-24 max-w-7xl mx-auto text-[#1a1816] lg:pb-24`}
    >
      <header className="grid grid-cols-1 items-end gap-y-6 px-5 sm:px-8 md:grid-cols-2 lg:px-[3.8vw] lg:pr-[7.2vw]">
        <p className="m-0 flex items-center gap-1.5 text-[11px] text-[#6f6a62] md:col-span-2">
          <span className="h-1 w-1 rounded-full bg-[#6f6a62]" />
          Goto Interior
        </p>
        <h2
          id="studio-title"
          className="m-0 text-[clamp(2.8rem,7vw,3.8rem)] font-normal leading-[0.98] tracking-[-0.04em]"
        >
          The Interior Behind
          <br />
          The Spaces
        </h2>
        <p className="m-0 max-w-[340px] text-sm leading-[1.4] md:justify-self-end md:text-right">
          We approach every space with intention, balancing function, atmosphere, and timeless character.
        </p>
        <hr className="m-0 border-0 border-t border-[#1a1816]/15 md:col-span-2" />
      </header>

      {/* On reduced motion, the row becomes a normal swipeable scroller */}
      <div className="mt-7 overflow-x-auto motion-safe:overflow-hidden">
        <div ref={trackRef} className="flex w-max gap-3 px-5 will-change-transform sm:px-8 lg:gap-[1vw] lg:px-[3.8vw]">
          {IMAGES.map((img, i) => (
            <div
              key={img.src}
              className={`relative aspect-[3/4] w-[72vw] shrink-0 overflow-hidden sm:w-[48vw] ${img.cls}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i < 2}
                sizes="(max-width: 640px) 72vw, (max-width: 1023px) 48vw, 24vw"
                className="object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}