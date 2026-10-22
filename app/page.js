import AboutStudio from "@/component/AboutStudio";
import ArchitectureQuote from "@/component/ArchitectureQuote";
import FAQ from "@/component/FAQ";
import Hero from "@/component/Hero";
import InteriorShowcase from "@/component/InteriorShowcase";
import OurProcess from "@/component/OurProcess";
import ProjectsSlider from "@/component/ProjectsSlider";
import ScrollVideo from "@/component/ScrollVideo";
import WhatWeDo from "@/component/WhatWeDo";
import WhyChooseUs from "@/component/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Hero/>
   <AboutStudio homepage={true} />
  <ScrollVideo/>
   <WhatWeDo/>
   <ProjectsSlider />
   <WhyChooseUs/>
   <ArchitectureQuote/>
   <OurProcess/>
   <InteriorShowcase/>
   <FAQ/>
   </>
  );
}
