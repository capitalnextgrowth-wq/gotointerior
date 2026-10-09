import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const processData = [
  {
    id: 1,
    title: 'Discovery',
    description: 'We begin by understanding your goals, space, lifestyle, and vision to establish a clear foundation for the project.',
  },
  {
    id: 2,
    title: 'Concept & Direction',
    description: 'We develop a design concept that defines the mood, layout, and overall direction of the space.',
  },
  {
    id: 3,
    title: 'Design Development',
    description: 'Details are refined through material selection, layouts, and visual studies to ensure clarity and cohesion.',
  },
  {
    id: 4,
    title: 'Implementation',
    description: 'We collaborate closely with partners and contractors to bring the design to life with precision and care.',
  },
  {
    id: 5,
    title: 'Coordination & Execution',
    description: 'We align with contractors, suppliers, and partners to ensure the design is executed accurately and efficiently.',
  },
  {
    id: 6,
    title: 'Final Review',
    description: 'The project is completed with careful attention to detail, ensuring the space reflects the original vision.',
  },
];

export default function OurProcess() {
  return (
    <section className="w-full bg-[#fcfbef] py-20 px-6 md:px-12 lg:px-0 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#fcf9d6] rounded-full mb-6">
            <div className="bg-[#eee8a4] p-1 rounded-full">
               <ArrowUpRight className="w-3.5 h-3.5 text-gray-700" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-medium text-gray-800 tracking-tight pr-1">
              Our Process
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-[3.25rem] leading-[1.1] font-semibold text-gray-900 tracking-tight max-w-2xl">
            A clear path from concept to completion.
          </h2>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {processData.map((step) => (
            <div key={step.id} className="flex items-start gap-5 md:gap-6">
              
              {/* Scalloped Number Badge */}
              <div className="relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 flex-shrink-0 mt-0.5">
                {/* Custom SVG to replicate the jagged/scalloped edge from the design */}
                <svg 
                  className="absolute inset-0 w-full h-full text-[#362720]" 
                  viewBox="0 0 100 100" 
                  fill="currentColor"
                >
                  <path d="M50 0L54.8 6.5L62.7 4.2L65.4 11.8L73.5 11.5L74.1 19.4L81.7 21L80.1 28.7L86.6 32.2L82.9 39.2L87.8 44.5L82.5 50L87.8 55.5L82.9 60.8L86.6 67.8L80.1 71.3L81.7 79L74.1 80.6L73.5 88.5L65.4 88.2L62.7 95.8L54.8 93.5L50 100L45.2 93.5L37.3 95.8L34.6 88.2L26.5 88.5L25.9 80.6L18.3 79L19.9 71.3L13.4 67.8L17.1 60.8L12.2 55.5L17.5 50L12.2 44.5L17.1 39.2L13.4 32.2L19.9 28.7L18.3 21L25.9 19.4L26.5 11.5L34.6 11.8L37.3 4.2L45.2 6.5L50 0Z" />
                </svg>
                <span className="relative z-10 text-white font-medium text-sm md:text-base">
                  {step.id}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-xl md:text-[1.35rem] font-medium text-gray-900 mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-[15px] md:text-base leading-relaxed pr-4">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}