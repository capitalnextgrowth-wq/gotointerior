"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MuseoModerno } from "next/font/google";

const museoModerno = MuseoModerno({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

/* ------------------------------------------------------------------ */
/*  PRODUCT DATA                                                       */
/*  - Each top-level item shows in the navbar                          */
/*  - Each column (title + items) shows inside its mega menu           */
/*                                                                     */
/*  LINKS: every link goes to /services#<service-id>                   */
/*  - `service`       = the service id the whole column links to       */
/*  - `itemServices`  = per-item override when a column mixes services */
/*  The ids match `id` in servicesData.js.                             */
/* ------------------------------------------------------------------ */
const serviceLink = (id) => (id ? `/services#${id}` : "/services");
const itemHref = (column, item) =>
  serviceLink(column.itemServices?.[item] ?? column.service);

const NAV_ITEMS = [
  {
    label: "Wallpaper",
    columns: [
      {
        title: "Wallpaper",
        service: "wallpaper",
        items: [
          "Wallpaper Roll",
          "Customised Wallpaper",
          "Self Adhesive Wallpaper",
          "Gold Foil Wallpaper",
          "Embossed Wallpaper",
        ],
      },
    ],
  },
  {
    label: "Panels",
    columns: [
      {
        title: "PVC",
        service: "pvc-louvers",
        items: ["PVC Panels", "Fluted Panels", "WPC Panels"],
      },
      {
        title: "Charcoal",
        service: "vecta-charcoal",
        items: ["Charcoal Panels", "Vectra Panels", "MDF Panels"],
      },
    ],
  },
  {
    label: "Curtains & Blinds",
    columns: [
      {
        title: "Curtain",
        service: "curtains-blinds",
        items: ["Curtain", "Sheer Curtain"],
      },
      {
        title: "Blinds",
        service: "curtains-blinds",
        items: [
          "Roller Blinds",
          "Roman Blinds",
          "Zebra Blinds",
          "Customised Roller Blinds",
          "Customised Roman Blinds",
          "Customised Zebra Blinds",
          "Venetian Blind",
        ],
      },
    ],
  },
  {
    label: "False Ceiling",
    columns: [
      {
        title: "False Ceiling",
        service: "false-ceiling",
        items: [
          "POP Ceiling",
          "Gypsum Ceiling",
          "PVC Ceiling",
          "Fluted Ceiling",
          "WPC Ceiling",
          "Wooden Ceiling",
        ],
      },
    ],
  },
  {
    label: "Flooring",
    columns: [
      {
        title: "Flooring",
        service: "flooring",
        items: [
          "Roll Flooring",
          "Wooden Flooring",
          "SPC Flooring",
          "Hospital Flooring",
          "Commercial Flooring",
          "School Flooring",
          "Office Flooring",
          "Gym Flooring",
          "Vinyl Flooring",
        ],
      },
      {
        title: "Carpet",
        service: "carpet",
        items: ["Tile Carpet", "Roll Carpet"],
      },
      {
        title: "Green Grass",
        service: "grass-garden",
        items: [
          "20mm",
          "25mm",
          "30mm",
          "35mm",
          "40mm",
          "45mm",
          "50mm",
          "55mm",
          "Natural Flooring",
        ],
      },
    ],
  },
  {
    label: "More",
    columns: [
      {
        title: "Furnishing",
        itemServices: {
          Sofa: "sofa-chairs",
          "Sofa Fabric": "sofa-chairs",
          "Bed Back Quilting": "bed-back-quilting",
        },
        items: ["Sofa", "Sofa Fabric", "Bed Back Quilting"],
      },
      {
        title: "Films & Sheets",
        itemServices: {
          "Glass Film": "glass-film",
          "Customised Film": "glass-film",
          "Foam Sheet": "mosaic-foam",
          "3D Sheets": "3d-sheets",
          "UV Marble Sheet": "uv-dmd-3d",
          "7D UV Marble Sheet": "uv-dmd-3d",
        },
        items: [
          "Glass Film",
          "Customised Film",
          "Foam Sheet",
          "3D Sheets",
          "UV Marble Sheet",
          "7D UV Marble Sheet",
        ],
      },
      {
        title: "Tiles",
        itemServices: {
          "Vertical Garden Tile": "grass-garden",
          "Mosaic Tiles": "mosaic-foam",
        },
        items: ["Vertical Garden Tile", "Mosaic Tiles"],
      },
    ],
  },
];

const PAGE_LINKS = [
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMega, setActiveMega] = useState(null); // index of open mega menu
  const [openGroup, setOpenGroup] = useState(null); // mobile accordion

  // Track scroll progress and navbar background
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrolled(totalScroll > 50);

      if (windowHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      setScrollProgress(Math.round((totalScroll / windowHeight) * 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menus with Escape key
  useEffect(() => {
    if (!menuOpen && activeMega === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setActiveMega(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, activeMega]);

  const logoStyle = {
    fontFeatureSettings:
      '"blwf" on, "cv09" on, "cv03" on, "cv04" on, "cv11" on',
  };

  const solidNav = scrolled || activeMega !== null;

  const closeAll = () => {
    setMenuOpen(false);
    setActiveMega(null);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        onMouseLeave={() => setActiveMega(null)}
        className={`fixed top-0 left-0 w-full z-40 px-6 py-5 font-sans
          flex items-center justify-between
          transition-all duration-300
          ${
            solidNav
              ? "bg-black shadow-lg text-white"
              : "bg-black text-white"
          }
          ${
            menuOpen
              ? "opacity-0 pointer-events-none"
              : "opacity-100"
          }`}
        style={{
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={closeAll}
          className={`${museoModerno.className} text-[17px]
            font-bold tracking-tight`}
          style={logoStyle}
          aria-label="GoToInterior home"
        >
          GoToInterior
        </Link>

        {/* Main items (desktop) */}
        <ul
          className="hidden lg:flex absolute left-1/2 -translate-x-1/2
            items-center gap-8"
        >
          {NAV_ITEMS.map((item, index) => {
            const isActive = activeMega === index;
            return (
              <li key={item.label}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveMega(index)}
                  onFocus={() => setActiveMega(index)}
                  onClick={() => setActiveMega(isActive ? null : index)}
                  aria-haspopup="true"
                  aria-expanded={isActive}
                  aria-controls={`mega-${index}`}
                  className={`text-[15px] font-medium tracking-wide
                    transition-opacity whitespace-nowrap
                    ${
                      activeMega !== null && !isActive
                        ? "opacity-50"
                        : "opacity-100"
                    }`}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Menu Button (centered on mobile, right side on desktop) */}
        <button
          type="button"
          onClick={() => {
            setActiveMega(null);
            setMenuOpen(true);
          }}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          className="absolute left-1/2 -translate-x-1/2
            lg:left-auto lg:right-20 lg:translate-x-0
            text-[15px] font-medium tracking-wide
            hover:opacity-70 transition-opacity font-sans"
        >
          Menu
        </button>

        {/* Scroll Progress */}
        <div
          className="absolute right-6 w-10 text-right
            text-[17px] font-medium tracking-tight"
          aria-label={`Page scroll progress ${scrollProgress}%`}
        >
          {scrollProgress}%
        </div>

        {/* Mega Menu Panel (desktop) */}
        <div
          className="hidden lg:block absolute top-full left-0 w-full"
          aria-hidden={activeMega === null}
        >
          {NAV_ITEMS.map((item, index) => {
            const isActive = activeMega === index;

            return (
              <div
                key={item.label}
                id={`mega-${index}`}
                className={`absolute top-0 left-0 w-full bg-black text-white
                  border-t border-white/10 shadow-2xl px-6 py-10
                  transition-all duration-300
                  ${
                    isActive
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
              >
                <div
                  className="mx-auto max-w-6xl grid gap-12"
                  style={{
                    gridTemplateColumns: `repeat(${item.columns.length}, minmax(0, 1fr))`,
                  }}
                >
                  {item.columns.map((column) => (
                    <div key={column.title}>
                      <Link
                        href={serviceLink(column.service)}
                        onClick={closeAll}
                        tabIndex={isActive ? 0 : -1}
                        className="block text-[13px] font-medium uppercase
                          tracking-widest text-white/50 hover:text-white
                          transition-colors border-b border-white/15
                          pb-3 mb-4"
                      >
                        {column.title}
                      </Link>

                      <ul
                        className={`grid gap-x-8 gap-y-2.5 ${
                          column.items.length > 8
                            ? "grid-cols-2"
                            : "grid-cols-1"
                        }`}
                      >
                        {column.items.map((sub) => (
                          <li key={sub}>
                            <Link
                              href={itemHref(column, sub)}
                              onClick={closeAll}
                              tabIndex={isActive ? 0 : -1}
                              className="text-[17px] font-medium
                                tracking-tight text-white/90
                                hover:text-white hover:underline
                                underline-offset-4 decoration-white/40
                                transition-colors"
                            >
                              {sub}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Full-screen Menu Overlay (mobile + "Menu" button on desktop) */}
      <div
        id="navbar-menu"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-50 flex flex-col overflow-y-auto
          bg-black/80 backdrop-blur-md text-white
          px-6 py-5 font-sans tracking-wide
          transition-transform duration-500 ease-in-out
          ${
            menuOpen
              ? "translate-y-0"
              : "-translate-y-full pointer-events-none"
          }`}
      >
        {/* Menu Top Bar */}
        <div className="flex justify-between items-center w-full">
          <Link
            href="/"
            onClick={closeAll}
            className={`${museoModerno.className}
              text-[17px] font-bold tracking-tight`}
            style={logoStyle}
          >
            GoToInterior
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-10 h-10 bg-white/10 rounded-full
              flex items-center justify-center
              hover:bg-white/20 transition-colors"
          >
            <div className="w-4 h-[2px] bg-white rounded-full" />
          </button>
        </div>

        {/* Page Links */}
        <div className="flex flex-col gap-3 mt-[8vh]">
          {PAGE_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeAll}
              tabIndex={menuOpen ? 0 : -1}
              className="text-[40px] sm:text-[48px]
                font-bold tracking-tighter
                hover:opacity-70 transition-opacity"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Products accordion */}
        <div className="mt-10 mb-auto lg:max-w-xl">
          <p className="text-[13px] font-medium uppercase tracking-widest text-white/50 mb-3">
            Products
          </p>

          {NAV_ITEMS.map((item, index) => {
            const open = openGroup === index;
            return (
              <div key={item.label} className="border-t border-white/15">
                <button
                  type="button"
                  onClick={() => setOpenGroup(open ? null : index)}
                  aria-expanded={open}
                  tabIndex={menuOpen ? 0 : -1}
                  className="w-full flex items-center justify-between
                    py-4 text-[26px] font-bold tracking-tighter text-left"
                >
                  {item.label}
                  <span className="text-[22px] font-medium text-white/60">
                    {open ? "−" : "+"}
                  </span>
                </button>

                {open && (
                  <div className="pb-5 flex flex-col gap-6">
                    {item.columns.map((column) => (
                      <div key={column.title}>
                        <Link
                          href={serviceLink(column.service)}
                          onClick={closeAll}
                          className="block text-[12px] font-medium
                            uppercase tracking-widest text-white/50 mb-2"
                        >
                          {column.title}
                        </Link>
                        <ul className="flex flex-col gap-2">
                          {column.items.map((sub) => (
                            <li key={sub}>
                              <Link
                                href={itemHref(column, sub)}
                                onClick={closeAll}
                                className="text-[17px] font-medium
                                  text-white/90 hover:text-white"
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Address */}
        <div
          className="text-[13px] font-medium text-white/90
            border-b border-white/20 pb-8 mb-4 mt-8 tracking-wide"
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=Shop+no.+3%2C+69%2F416%2C+Madhyam+Marg%2C+Mansarovar%2C+Jaipur%2C+Rajasthan+302020"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2
              decoration-white/50 hover:decoration-white
              transition-colors"
          >
            Shop no. 3, 69/416, Madhyam Marg, Ward 27,
            Mansarovar, Jaipur, Rajasthan 302020
          </a>
        </div>
      </div>
    </>
  );
}