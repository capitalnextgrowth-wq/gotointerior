"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const LEAVE_MS = 420; // how long the old page takes to blur out
const ENTER_MS = 550; // how long the new page takes to come into focus

/**
 * Wrap {children} (NOT the navbar) in app/layout.jsx.
 *
 * Click an internal link -> the current page blurs and fades out ->
 * the route changes -> the new page starts blurred and eases into focus.
 */
export default function PageTransition({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [leaving, setLeaving] = useState(false);
  const busy = useRef(false);

  // New route has rendered (still blurred) -> bring it into focus
  useEffect(() => {
    busy.current = false;
    setLeaving(false);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
      )
        return;

      const a = e.target.closest?.("a[href]");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;

      let url;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;
      // Same page (including #hash jumps): let it behave normally
      if (
        url.pathname === window.location.pathname &&
        url.search === window.location.search
      )
        return;
      // Respect reduced-motion settings
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Take over the navigation (capture phase runs before Next's <Link>)
      e.preventDefault();
      e.stopPropagation();
      if (busy.current) return;
      busy.current = true;

      window.dispatchEvent(new Event("page-transition-start"));
      setLeaving(true);

      setTimeout(() => {
        router.push(url.pathname + url.search + url.hash);
      }, LEAVE_MS);

      // Safety net: never leave the page stuck blurred
      setTimeout(() => {
        busy.current = false;
        setLeaving(false);
      }, 6000);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return (
    <div
      style={{
        // `none` (not blur(0)) when idle, so position:fixed children such as
        // popups are not trapped inside this wrapper
        filter: leaving ? "blur(16px)" : "none",
        opacity: leaving ? 0 : 1,
        pointerEvents: leaving ? "none" : "auto",
        transition: `filter ${leaving ? LEAVE_MS : ENTER_MS}ms ease, opacity ${
          leaving ? LEAVE_MS : ENTER_MS
        }ms ease`,
      }}
    >
      {children}
    </div>
  );
}