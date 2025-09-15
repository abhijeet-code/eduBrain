import React from 'react';
import BackgroundElements from './BackgroundElements';
import ProcessHeader from './ProcessHeader';
import ProcessStep from './ProcessStep';

const ProcessSection = () => {
  const processSteps = [
    {
      stepNumber: "01",
      title: "Find Your Interested Field",
      description: [
        "Start your journey by finding your interested field.",
        "Explore courses tailored to your passion and career",
        "goals"
      ],
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/7a2e9b96aa400b158ec31731d4c6b8b04d209d9e",
      isReversed: false
    },
    {
      stepNumber: "02",
      title: "Explore Courses",
      description: [
        "Discover our cutting-edge courses in Data Science,",
        "PowerBI, MERN Stack, Python, and UI/UX Design."
      ],
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/d079572d97d8c2bcb57bbfac081f016fa7aea486",
      isReversed: true
    },
    {
      stepNumber: "03",
      title: "Enroll and Learn",
      description: [
        "Enroll in your chosen course and immerse yourself in",
        "AI-powered learning. Access recorded lectures, join",
        "live mentorship sessions (6-10 pm), and engage in",
        "hands-on project-based learning."
      ],
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/718d2ab4e14492b79de39a00f8aa5d374a99c498",
      isReversed: false
    },
    {
      stepNumber: "04",
      title: "Personalized Roadmap",
      description: [
        "Follow your personalized roadmap, crafted to guide",
        "you through a structured learning journey. Track your",
        "progress and stay on course to success."
      ],
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/eb8ee2db6f7c959f7c32e36fa114de0ee8de71d2",
      isReversed: false,
      imageOpacity: 0.7681
    },
    {
      stepNumber: "05",
      title: "Project Creation",
      description: [
        "Apply your knowledge to real-world projects.",
        "Collaborate with peers, solve problems, and create a",
        "portfolio that showcases your skills."
      ],
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/fc12b0cf94698857dd4d4f9fcc030d08bd1af0de",
      isReversed: false
    },
    {
      stepNumber: "06",
      title: "Certification and Internship",
      description: [
        "Receive a certification upon course completion.",
        "Unlock exclusive internship opportunities and jump",
        "start your career in the tech industry."
      ],
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/9ac9949b89c768bb186c9e1aef25ad971c8612f7",
      isReversed: false
    },
    {
      stepNumber: "07",
      title: "Now You Are Ready",
      description: [
        "Congratulations! You've navigated your learning",
        "journey. Now, armed with knowledge and skills, you",
        "are ready to shape your future in the world of",
        "technology."
      ],
      imageSrc: "https://api.builder.io/api/v1/image/assets/TEMP/32b9741bc5fc25cc193df08741f8b17e018a61f7",
      isReversed: false,
      imageOpacity: 0.9052,
      cardOpacity: 0.9545,
      cardHeight: "191px",
      hasDecorations: true
    }
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Montserrat:wght@600;700&family=Roboto:wght@400&display=swap"
      />
      <section className="relative w-full bg-[#0C0C0D] py-20 overflow-hidden">
        {/* Background Glow */}
        <svg
          width="495"
          height="675"
          viewBox="0 0 495 675"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-64 -left-5"
        >
          <g filter="url(#filter0_f_396_1025)">
            <rect
              width="433"
              height="275"
              transform="matrix(1 0 0 -1 -138 475)"
              fill="url(#paint0_linear_396_1025)"
              fillOpacity="0.3"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_396_1025"
              x="-338"
              y="0"
              width="833"
              height="675"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_396_1025"
              />
            </filter>
            <linearGradient
              id="paint0_linear_396_1025"
              x1="433"
              y1="-21.0191"
              x2="125.676"
              y2="469.701"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9AC4FE" />
              <stop offset="1" stopColor="#1545C2" />
            </linearGradient>
          </defs>
        </svg>

        <BackgroundElements />

        {/* Header */}
        <ProcessHeader />

        {/* Steps Section */}
        <main className="relative flex flex-col gap-12 items-center mt-10  md:mt-56 w-full max-w-[1024px] mx-auto px-4 z-[2]">
          {/* Vertical Line */}
          <div className="absolute w-1 bg-zinc-400 top-0 bottom-0 left-1/2 -translate-x-1/2 z-0" />

          {processSteps.map((step, index) => (
            <ProcessStep key={step.stepNumber} step={step} index={index} />
          ))}
        </main>
      </section>
    </>
  );
};

export default ProcessSection;
