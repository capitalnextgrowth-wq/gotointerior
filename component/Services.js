"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { services } from "@/lib/servicesData";
import ContactModal from "./ContactModal";

const EASE = [0.22, 1, 0.36, 1];

/* ---------- Contact button (white pill, for the dark page) ---------- */
function ContactButton({ onClick, className = "" }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex items-center gap-3 rounded-full bg-white
        py-3 pl-7 pr-3 text-[15px] font-medium text-black ${className}`}
    >
      Contact us
      <span
        className="grid h-8 w-8 place-items-center rounded-full bg-black
          text-white transition-transform duration-300 group-hover:translate-x-1"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </motion.button>
  );
}

/* ---------- One expandable service row ---------- */
const chipList = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.2 } },
};
const chip = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
};

function ServiceRow({ service, isOpen, onToggle, onContact }) {
  const reduce = useReducedMotion();
  const [failed, setFailed] = useState(false);
  const [hover, setHover] = useState(false);
  const hasItems = service.items && service.items.length > 0;

  return (
    <div id={service.id} className="scroll-mt-28 border-t border-white/15">
      <h2>
        <button
          type="button"
          onClick={onToggle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          aria-expanded={isOpen}
          aria-controls={`panel-${service.id}`}
          className="group flex w-full items-center gap-5 py-6 text-left md:gap-8 md:py-9
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
            focus-visible:outline-white"
        >
          <span
            className={`flex-1 text-3xl font-medium leading-[1.05] tracking-tight
              transition-colors duration-300 md:text-6xl ${
                isOpen ? "text-white" : "text-white/40 group-hover:text-white"
              }`}
          >
            {service.title}
          </span>

          {/* Thumbnail slides open on hover (desktop) */}
          <motion.span
            aria-hidden="true"
            className="hidden h-16 shrink-0 overflow-hidden rounded-lg bg-zinc-800 md:block"
            initial={false}
            animate={{
              width: !isOpen && hover && !reduce ? 112 : 0,
              opacity: !isOpen && hover ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            {!failed && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={service.image}
                alt=""
                onError={() => setFailed(true)}
                className="h-full w-28 object-cover"
              />
            )}
          </motion.span>

          <motion.span
            aria-hidden="true"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full
              border border-white/25 transition-colors group-hover:border-white"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </motion.span>
        </button>
      </h2>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="panel"
            id={`panel-${service.id}`}
            role="region"
            aria-label={service.title}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 pb-14 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] md:gap-14">
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-zinc-800">
                {!failed && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    onError={() => setFailed(true)}
                    initial={reduce ? false : { scale: 1.12 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.1, ease: EASE }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-base font-medium text-white">
                  {service.label}
                </span>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-center">
                <p className="max-w-lg text-lg leading-relaxed text-white/75">
                  {service.description}
                </p>

                {hasItems && (
                  <>
                    <motion.ul
                      variants={chipList}
                      initial={reduce ? "show" : "hidden"}
                      animate="show"
                      className="mt-7 flex flex-wrap gap-2"
                    >
                      {service.items.map((item) => (
                        <motion.li key={item} variants={chip}>
                          <button
                            type="button"
                            onClick={() => onContact(service.id, item)}
                            title={`Enquire about ${item}`}
                            className="rounded-full border border-white/25 px-4 py-2 text-sm
                              text-white/85 transition-colors hover:border-white
                              hover:bg-white hover:text-black
                              focus-visible:outline focus-visible:outline-2
                              focus-visible:outline-offset-2 focus-visible:outline-white"
                          >
                            {item}
                          </button>
                        </motion.li>
                      ))}
                    </motion.ul>
                    <p className="mt-3 text-[13px] text-white/45">
                      Tap an option to enquire about it.
                    </p>
                  </>
                )}

                <div className="mt-8">
                  <ContactButton onClick={() => onContact(service.id)} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------- Page ---------- */
const HEADLINE = "Interiors made to fit your space".split(" ");

export default function ServicesPage() {
  const reduce = useReducedMotion();
  const [openId, setOpenId] = useState(services[0].id);
  const [modal, setModal] = useState({ open: false, serviceId: "", item: "" });

  const openModal = useCallback(
    (serviceId = "", item = "") => setModal({ open: true, serviceId, item }),
    []
  );
  const closeModal = useCallback(
    () => setModal((m) => ({ ...m, open: false })),
    []
  );

  // Open a row and bring it to the top once the previous row has collapsed
  const openRow = useCallback(
    (id) => {
      setOpenId(id);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: reduce ? "auto" : "smooth",
          block: "start",
        });
      }, 380);
    },
    [reduce]
  );

  const toggleRow = (id) => {
    if (openId === id) {
      setOpenId(null);
      return;
    }
    openRow(id);
    history.replaceState(null, "", `#${id}`);
  };

  // /services#name opens that service: on load, back/forward, and when a
  // link to this page's hash (e.g. from the navbar) is clicked
  useEffect(() => {
    const isService = (id) => services.some((s) => s.id === id);

    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (isService(id)) openRow(id);
    };
    fromHash();

    const onClick = (e) => {
      const a = e.target.closest?.("a[href*='#']");
      if (!a) return;
      let url;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }
      const id = url.hash.slice(1);
      if (url.pathname === window.location.pathname && isService(id)) openRow(id);
    };

    window.addEventListener("hashchange", fromHash);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", fromHash);
      document.removeEventListener("click", onClick);
    };
  }, [openRow]);

  return (
    <main className="w-full bg-black font-sans text-white">
      {/* Hero */}
      <header className="mx-auto max-w-7xl px-6 pb-16 pt-40 md:pt-48">
        <h1 className="flex max-w-5xl flex-wrap gap-x-[0.28em] text-5xl font-medium leading-[1.02] tracking-tight md:text-8xl">
          {HEADLINE.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-2">
              <motion.span
                className="inline-block"
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.6 }}
          className="mt-10 flex flex-col gap-8 md:flex-row md:items-center md:gap-12"
        >
          <p className="max-w-md leading-relaxed text-white/70">
            From wallpaper to flooring, we supply, customise and fit it all.
            Open a service below, or tell us what you need.
          </p>
          <ContactButton onClick={() => openModal()} />
        </motion.div>
      </header>

      {/* Service list */}
      <div className="mx-auto max-w-7xl border-b border-white/15 px-6">
        {services.map((service) => (
          <ServiceRow
            key={service.id}
            service={service}
            isOpen={openId === service.id}
            onToggle={() => toggleRow(service.id)}
            onContact={openModal}
          />
        ))}
      </div>

      {/* Closing call to action */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
        <h2 className="mx-auto max-w-3xl text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          Not sure what you need? Tell us about your space.
        </h2>
        <div className="mt-10 flex justify-center">
          <ContactButton onClick={() => openModal()} />
        </div>
      </section>

      <ContactModal
        open={modal.open}
        onClose={closeModal}
        services={services}
        initialServiceId={modal.serviceId}
        initialItem={modal.item}
      />
    </main>
  );
}