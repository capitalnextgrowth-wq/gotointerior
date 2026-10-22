import AboutStudio from "@/component/AboutStudio";
import ArchitectureQuote from "@/component/ArchitectureQuote";
import FAQ from "@/component/FAQ";
import ProcessSection from "@/component/ProcessSection";
import StudioSection from "@/component/Studiosection";
import TestimonialSection from "@/component/Testimonialsection";

export default function Page(){

    return(
<main className="bg-[#fcfbef]">
        <StudioSection/>
        <AboutStudio/>
        <ArchitectureQuote/>
        <ProcessSection/>
        <FAQ/>
        <TestimonialSection/>
        </main>
    )
}