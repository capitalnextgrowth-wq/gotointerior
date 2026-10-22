"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;

    if (!section || !video) return;

    let trigger;
    let target = 0;
    let current = 0;
    let last = performance.now();

    const isMobile = () =>
      window.matchMedia("(max-width: 767px)").matches;

    const tick = () => {
      const now = performance.now();
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      // Faster response on mobile
      const smoothness = isMobile() ? 18 : 6;
      const ease = 1 - Math.exp(-smoothness * dt);

      current += (target - current) * ease;

      if (
        !video.seeking &&
        Number.isFinite(video.duration) &&
        Math.abs(video.currentTime - current) > 0.008
      ) {
        video.currentTime = Math.max(
          0,
          Math.min(current, video.duration)
        );
      }
    };

    const init = () => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) {
        return;
      }

      if (trigger) return;

      video.play()
        .then(() => {
          video.pause();
          video.currentTime = 0;
        })
        .catch(() => {
          video.pause();
        });

      trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",

        // Mobile: finish in a short scroll.
        // Desktop: retain the longer cinematic effect.
        end: () =>
          `+=${window.innerHeight * (isMobile() ? 0.7 : 3)}`,

        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,

        onUpdate: (self) => {
          target = self.progress * video.duration;
        },

        onRefresh: (self) => {
          target = self.progress * video.duration;
        },
      });

      gsap.ticker.add(tick);
      ScrollTrigger.refresh();
    };

    if (video.readyState >= 1) {
      init();
    } else {
      video.addEventListener("loadedmetadata", init);
    }

    const onLoad = () => ScrollTrigger.refresh();

    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      video.removeEventListener("loadedmetadata", init);
      gsap.ticker.remove(tick);
      trigger?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        src="/vid.mp4"
        className="absolute inset-0 h-full w-full object-cover"
        muted
        playsInline
        preload="auto"
        aria-label="Scroll-controlled cinematic video"
      />

      <div className="pointer-events-none absolute inset-0 bg-black/20" />

      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center font-sans justify-center px-5 text-center text-white">
        <h1 className="max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl md:text-4xl">
          Thought to Reality
        </h1>
      </div>
    </section>
  );
}
