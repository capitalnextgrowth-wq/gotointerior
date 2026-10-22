"use client";

import { useRef, useState } from "react";
import {
  BUDGETS, PROJECT_TYPES, TIMELINES, initialValues, validateAll, validateField,
} from "/lib/contact-validation";

const labelCls = "text-[10px]";
const controlCls =
  "w-full rounded-none border-0 border-b border-[#1a1816]/15 bg-transparent px-1.5 pb-[9px] pt-2 text-xs text-[#1a1816] outline-none transition-colors placeholder:text-[#8c867d] focus:border-[#1a1816] focus-visible:shadow-[0_1px_0_0_#1a1816] aria-[invalid=true]:border-[#b3261e] disabled:cursor-not-allowed disabled:opacity-60";
const selectCls = `${controlCls} cursor-pointer appearance-none pr-6`;
const errCls = "m-0 text-[10.5px] text-[#b3261e]";

function Chevron() {
  return (
    <svg className="pointer-events-none absolute right-1.5 top-[29px]" width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="#1a1816" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 1l4 4 4-4" />
    </svg>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverError, setServerError] = useState("");
  const formRef = useRef(null);

  const set = (k, v) => {
    setValues((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: validateField(k, v) }));
  };
  const blur = (k) => setErrors((p) => ({ ...p, [k]: validateField(k, values[k]) }));

  async function onSubmit(e) {
    e.preventDefault();
    if (status === "loading") return;

    const found = validateAll(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("loading");
    setServerError("");
    try {
      const fd = new FormData(e.currentTarget);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, website: fd.get("website") }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("success");
        setValues(initialValues);
      } else {
        if (data.errors) setErrors(data.errors);
        setServerError(data.message || "Please check the highlighted fields and try again.");
        setStatus("error");
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-2.5 py-2" role="status" aria-live="polite">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
          <circle cx="14" cy="14" r="13" stroke="currentColor" />
          <path d="M8.5 14.5l3.5 3.5 7.5-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="m-0 mt-1.5 text-2xl font-normal tracking-[-0.02em]">Thank you. We’ve received your enquiry.</h3>
        <p className="m-0 max-w-[320px] text-xs leading-normal text-[#4c4741]">Our team will get back to you within 24 hours on the email you shared.</p>
        <button type="button" className="mt-2 cursor-pointer border-0 bg-transparent p-0 text-xs text-[#1a1816] underline underline-offset-[3px]" onClick={() => setStatus("idle")}>
          Send another enquiry
        </button>
      </div>
    );
  }

  const field = (k) => ({
    name: k,
    id: k,
    value: values[k],
    "aria-invalid": !!errors[k],
    "aria-describedby": errors[k] ? `${k}-err` : undefined,
    onBlur: () => blur(k),
    disabled: status === "loading",
  });
  const err = (k) =>
    errors[k] ? <span id={`${k}-err`} className={errCls} role="alert">{errors[k]}</span> : null;

  return (
    <form ref={formRef} className="grid grid-cols-1 content-start gap-x-4 gap-y-[18px] sm:grid-cols-2" onSubmit={onSubmit} noValidate aria-busy={status === "loading"}>
      <div className="relative flex min-w-0 flex-col gap-1.5">
        <label className={labelCls} htmlFor="name">Full Name</label>
        <input {...field("name")} className={controlCls} type="text" placeholder="Rahul Sharma" autoComplete="name"
          onChange={(e) => set("name", e.target.value)} />
        {err("name")}
      </div>

      <div className="relative flex min-w-0 flex-col gap-1.5">
        <label className={labelCls} htmlFor="email">Email address</label>
        <input {...field("email")} className={controlCls} type="email" placeholder="hello@example.com" autoComplete="email"
          onChange={(e) => set("email", e.target.value)} />
        {err("email")}
      </div>

      <div className="relative flex min-w-0 flex-col gap-1.5 sm:col-span-2">
        <label className={labelCls} htmlFor="location">Location</label>
        <input {...field("location")} className={controlCls} type="text" placeholder="Which city is your project located in?"
          onChange={(e) => set("location", e.target.value)} />
        {err("location")}
      </div>

      <div className="relative flex min-w-0 flex-col gap-1.5">
        <label className={labelCls} htmlFor="projectType">Project type</label>
        <select {...field("projectType")} className={selectCls} onChange={(e) => set("projectType", e.target.value)}>
          {PROJECT_TYPES.map((o) => <option key={o}>{o}</option>)}
        </select>
        <Chevron />
        {err("projectType")}
      </div>

      <div className="relative flex min-w-0 flex-col gap-1.5">
        <label className={labelCls} htmlFor="timeline">Timeline</label>
        <select {...field("timeline")} className={selectCls} onChange={(e) => set("timeline", e.target.value)}>
          {TIMELINES.map((o) => <option key={o}>{o}</option>)}
        </select>
        <Chevron />
        {err("timeline")}
      </div>

      <div className="relative flex min-w-0 flex-col gap-1.5 sm:col-span-2">
        <label className={labelCls} htmlFor="budget">Your budget</label>
        <select {...field("budget")} className={selectCls} onChange={(e) => set("budget", e.target.value)}>
          {BUDGETS.map((o) => <option key={o}>{o}</option>)}
        </select>
        <Chevron />
        {err("budget")}
      </div>

      <div className="relative flex min-w-0 flex-col gap-1.5 sm:col-span-2">
        <label className={labelCls} htmlFor="message">Message</label>
        <textarea {...field("message")} className={`${controlCls} min-h-24 resize-y`} rows={4} placeholder="Tell us about your project"
          onChange={(e) => set("message", e.target.value)} />
        {err("message")}
      </div>

      {/* Honeypot – hidden from people, visible to bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute -left-[9999px] h-px w-px opacity-0" aria-hidden="true" />

      {status === "error" && serverError && (
        <p className={`${errCls} sm:col-span-2`} role="alert">{serverError}</p>
      )}

      <button type="submit" className="mt-1.5 flex h-9 cursor-pointer items-center justify-center gap-2 border-0 bg-[#161513] text-[11px] font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[#1a1816] disabled:cursor-progress disabled:opacity-85 sm:col-span-2" disabled={status === "loading"}>
        <span>{status === "loading" ? "Sending…" : "Submit"}</span>
        {status === "loading" ? <i className="inline-block h-[11px] w-[11px] animate-spin rounded-full border-[1.5px] border-white/35 border-t-white" aria-hidden="true" /> : <i className="inline-block h-[5px] w-[5px] rounded-full border border-white" aria-hidden="true" />}
      </button>
    </form>
  );
}