import Image from "next/image";
import { Inter_Tight } from "next/font/google";
import ContactForm from "@/component/ContactForm";

const font = Inter_Tight({ subsets: ["latin"], display: "swap" });

const SITE_URL = "https://www.gotointerior.com"; // change to your domain

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Contact Goto Interior | Interior Designers in Jaipur, Rajasthan",
  description:
    "Planning a home or commercial interior? Share your space, vision and budget with Goto Interior. Get a response within 24 hours.",
  keywords: [
    "interior designers in Jaipur", "home interior design Rajasthan", "modular kitchen Jaipur",
    "commercial interior design India", "Goto Interior contact",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    siteName: "Goto Interior",
    locale: "en_IN",
    title: "Let’s Talk About Your Space | Goto Interior",
    description: "Tell us about your space and we’ll take it from there. Interior design studio in Jaipur, India.",
    images: [{ url: "/images/contact-hero.jpg", width: 1600, height: 560, alt: "Warm, minimal interior by Goto Interior" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Goto Interior",
    description: "Tell us about your space and we’ll take it from there.",
    images: ["/images/contact-hero.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${SITE_URL}/contact`,
  name: "Contact Goto Interior",
  mainEntity: {
    "@type": "HomeAndConstructionBusiness",
    name: "Goto Interior",
    url: SITE_URL,
    email: "hello@gotointerior.com",
    telephone: "+91-98290-00000",
    areaServed: "IN",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },
};

export default function ContactPage() {
  return (
    <main className={` font-sans min-h-screen bg-[#fcfbef] pb-24 pt-20 text-[#1a1816]`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-12">
        <header className="grid grid-cols-1 items-end gap-y-5 border-b border-[#1a1816]/15 pb-7 md:grid-cols-2">
          <p className="m-0 flex items-center gap-1.5 text-[11px] md:col-span-2">
            <span className="h-1 w-1 rounded-full bg-[#1a1816]" />
            Get in Touch
          </p>
          <h1 className="m-0 text-[clamp(2.8rem,6.2vw,5rem)] font-normal leading-[1.02] tracking-[-0.035em]">
            Let’s Talk About<br />Your Space
          </h1>
          <p className="m-0 mb-1 max-w-[330px] text-[13px] leading-[1.45] md:justify-self-end md:text-right">
            Have a project in mind? Tell us a little about your space, your vision, and what you’d like to create. We’ll take it from there.
          </p>
        </header>

        <div className="relative mt-7 aspect-[1.6/1] overflow-hidden md:aspect-[2.85/1]">
          <Image
            src="https://images.pexels.com/photos/39733067/pexels-photo-39733067.jpeg"
            alt="Warm minimal interior with a wooden console and a person walking through a sunlit doorway"
            fill priority sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover rounded-2xl"
          />
        </div>

        <section
          className="mt-16 grid grid-cols-1 gap-10 md:mt-32 md:grid-cols-[1.15fr_1fr] md:gap-16 lg:gap-24"
          aria-labelledby="contact-title"
        >
          <div className="flex flex-col justify-between gap-9 md:gap-16">
            <h2 id="contact-title" className="m-0 text-[clamp(2.4rem,4.6vw,3.9rem)] font-normal leading-[1.02] tracking-[-0.035em]">
              Contact Us
              <sup className="relative top-[0.4em] ml-1.5 align-top text-[10px] font-normal tracking-normal text-[#8c867d]">[01]</sup>
            </h2>

            <dl className="m-0 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <div><dt className="mb-1 text-[10px] text-[#8c867d]">Email</dt><dd className="m-0 text-xs"><a className="hover:underline" href="mailto:hello@gotointerior.com">hello@gotointerior.com</a></dd></div>
              <div><dt className="mb-1 text-[10px] text-[#8c867d]">Phone</dt><dd className="m-0 text-xs"><a className="hover:underline" href="tel:+919829000000">+91 98290 00000</a></dd></div>
              <div><dt className="mb-1 text-[10px] text-[#8c867d]">Location</dt><dd className="m-0 text-xs">Shop no. 3, 69/416, Madhyam Marg, Ward 27, Mansarovar, Jaipur, Rajasthan 302020</dd></div>
              <div><dt className="mb-1 text-[10px] text-[#8c867d]">Response Time</dt><dd className="m-0 text-xs">We reply within 24 hours</dd></div>
            </dl>
          </div>

          <ContactForm />
        </section>
      </div>
    </main>
  );
}