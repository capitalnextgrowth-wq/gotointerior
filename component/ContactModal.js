"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EMPTY = { name: "", mobile: "", email: "", service: "", message: "" };

function validate(f) {
  const e = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";

  let digits = f.mobile.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  if (!/^[6-9]\d{9}$/.test(digits)) e.mobile = "Enter a valid 10-digit mobile number.";

  if (f.email.trim() && !/^\S+@\S+\.\S+$/.test(f.email.trim()))
    e.email = "Enter a valid email address.";

  if (!f.service) e.service = "Please choose a service.";
  return e;
}

const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.12 } },
};
const field = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

const inputClass = (hasError) =>
  `w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-black outline-none
   transition-colors placeholder:text-black/35 focus:border-black
   ${hasError ? "border-red-600" : "border-black/15"}`;

function Field({ id, label, error, children }) {
  return (
    <motion.div variants={field}>
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-medium text-black/70">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-[13px] text-red-700">
          {error}
        </p>
      )}
    </motion.div>
  );
}

export default function ContactModal({
  open,
  onClose,
  services,
  initialServiceId = "",
  initialItem = "",
}) {
  const reduce = useReducedMotion();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const nameRef = useRef(null);

  // Reset + pre-select the service every time the popup opens
  useEffect(() => {
    if (!open) return;
    setForm({
      ...EMPTY,
      service: initialServiceId,
      message: initialItem ? `I'm interested in ${initialItem}.` : "",
    });
    setErrors({});
    setStatus("idle");
    const t = setTimeout(() => nameRef.current?.focus(), 350);
    return () => clearTimeout(t);
  }, [open, initialServiceId, initialItem]);

  // Esc to close + lock page scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    try {
      const selected = services.find((s) => s.id === form.service);
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          mobile: form.mobile.trim(),
          email: form.email.trim(),
          service: selected?.title ?? form.service,
          serviceId: form.service,
          message: form.message.trim(),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const selectedService = services.find((s) => s.id === form.service);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="enquiry-overlay"
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto
              rounded-t-3xl bg-[#fcfbef] p-6 text-black shadow-2xl sm:rounded-3xl sm:p-8"
            initial={reduce ? false : { opacity: 0, y: 48, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.98 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center
                rounded-full bg-black/5 transition-colors hover:bg-black/10"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>

            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center px-2 py-10 text-center"
              >
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
                  <motion.circle
                    cx="36" cy="36" r="32" stroke="black" strokeWidth="2"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.path
                    d="M22 37l10 10 18-21" stroke="black" strokeWidth="3"
                    strokeLinecap="round" strokeLinejoin="round"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  />
                </svg>
                <h3 className="mt-6 text-2xl font-medium tracking-tight">
                  Thank you, {form.name.trim().split(" ")[0]}.
                </h3>
                <p className="mt-2 max-w-xs text-black/70">
                  We have your enquiry about {selectedService?.label ?? "our services"} and
                  will call you on {form.mobile.trim()} soon.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 rounded-full bg-black px-7 py-3 text-[15px] font-medium text-white"
                >
                  Done
                </button>
              </motion.div>
            ) : (
              <motion.form
                noValidate
                onSubmit={handleSubmit}
                variants={list}
                initial={reduce ? "show" : "hidden"}
                animate="show"
                className="space-y-4"
              >
                <motion.div variants={field} className="pr-10">
                  <h3 id="enquiry-title" className="text-2xl font-medium tracking-tight">
                    Contact us
                  </h3>
                  <p className="mt-1 text-[14px] text-black/60">
                    Tell us what you need and we will get back to you.
                  </p>
                </motion.div>

                <Field id="enq-name" label="Name" error={errors.name}>
                  <input
                    ref={nameRef}
                    id="enq-name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={set("name")}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "enq-name-error" : undefined}
                    placeholder="Your full name"
                    className={inputClass(errors.name)}
                  />
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="enq-mobile" label="Mobile" error={errors.mobile}>
                    <input
                      id="enq-mobile"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      value={form.mobile}
                      onChange={set("mobile")}
                      aria-invalid={!!errors.mobile}
                      aria-describedby={errors.mobile ? "enq-mobile-error" : undefined}
                      placeholder="98765 43210"
                      className={inputClass(errors.mobile)}
                    />
                  </Field>
                  <Field id="enq-email" label="Email (optional)" error={errors.email}>
                    <input
                      id="enq-email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={set("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "enq-email-error" : undefined}
                      placeholder="you@example.com"
                      className={inputClass(errors.email)}
                    />
                  </Field>
                </div>

                <Field id="enq-service" label="Service" error={errors.service}>
                  <div className="relative">
                    <select
                      id="enq-service"
                      value={form.service}
                      onChange={set("service")}
                      aria-invalid={!!errors.service}
                      aria-describedby={errors.service ? "enq-service-error" : undefined}
                      className={`${inputClass(errors.service)} appearance-none pr-10`}
                    >
                      <option value="">Choose a service</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
                      width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true"
                    >
                      <path d="M1 1.5l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Field>

                <Field id="enq-message" label="Message">
                  <textarea
                    id="enq-message"
                    rows={4}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Room size, design ideas, or anything else we should know"
                    className={`${inputClass(false)} resize-none`}
                  />
                </Field>

                {status === "error" && (
                  <p role="alert" className="text-[14px] text-red-700">
                    Something went wrong while sending. Please try again.
                  </p>
                )}

                <motion.div variants={field}>
                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={reduce ? undefined : { scale: 1.02 }}
                    whileTap={reduce ? undefined : { scale: 0.98 }}
                    className="flex w-full items-center justify-center gap-3 rounded-full
                      bg-black px-7 py-3.5 text-[15px] font-medium text-white
                      disabled:opacity-60"
                  >
                    {status === "sending" ? (
                      <>
                        <motion.span
                          className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        />
                        Sending
                      </>
                    ) : (
                      "Send enquiry"
                    )}
                  </motion.button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}