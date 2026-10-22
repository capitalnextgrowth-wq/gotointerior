import Image from "next/image";
import { Inter_Tight } from "next/font/google";

const font = Inter_Tight({ subsets: ["latin"], display: "swap" });

// Put your photos in /public/images/process/ and update the alt text.
const STEPS = [
  {
    no: "01",
    title: "Consultation & Concept",
    text: "We start with a conversation, then shape it into a concept — layout, materials, and mood.",
    src: "https://images.pexels.com/photos/7482629/pexels-photo-7482629.jpeg",
    alt: "Designer sketching a floor plan beside material samples",
  },
  {
    no: "02",
    title: "Sourcing & Styling",
    text: "Every piece is selected and confirmed to fit your space, your budget, and your taste.",
    src: "https://images.pexels.com/photos/18420594/pexels-photo-18420594.jpeg",
    alt: "Folded linen fabrics and a ceramic vase on a wooden table",
  },
  {
    no: "03",
    title: "Install & Reveal",
    text: "We manage the full installation, so all that’s left is walking into a finished space.",
    src: "https://images.pexels.com/photos/39829559/pexels-photo-39829559.jpeg",
    alt: "Finished living room with sheer curtains, an armchair and a round coffee table",
  },
];

export default function ProcessSection() {
  return (
    <section
      aria-labelledby="process-title"
      className={`${font.className} px-5 pt-20 font-sans py-10 text-[#1a1816] sm:px-8 lg:px-[5.3vw] lg:pb-24 max-w-7xl mx-auto`}
    >
      <header className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:items-end">
        <h2
          id="process-title"
          className="m-0 text-[clamp(2.8rem,5.6vw,4.6rem)] font-normal leading-none tracking-[-0.04em]"
        >
          Our Process
          <sup className="relative top-[0.35em] ml-2 align-top text-[11px] font-normal tracking-normal">[03]</sup>
        </h2>
        <p className="m-0 max-w-[420px] text-[13px] leading-[1.35] text-[#8c867d] md:justify-self-end md:text-right">
          From the first conversation to the final detail, our process brings structure, creativity, and close
          collaboration to every stage of your project.
        </p>
      </header>

      <ol className="m-0 mt-10 grid list-none grid-cols-1 gap-x-[1.6vw] gap-y-10 p-0 md:mt-16 md:grid-cols-3 lg:mt-[5.5vw]">
        {STEPS.map((s, i) => (
          <li key={s.no}>
            <div className="relative aspect-[354/320] overflow-hidden ">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 767px) 100vw, 33vw"
                className="object-cover rounded"
              />
            </div>
            <h3 className="m-0 mt-3 flex items-baseline gap-2.5 text-lg font-normal tracking-[-0.01em]">
              <span>{s.no}</span>
              {s.title}
            </h3>
            <p className="m-0 mt-2 max-w-[270px] text-[13px] leading-[1.4] text-[#8c867d]">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}