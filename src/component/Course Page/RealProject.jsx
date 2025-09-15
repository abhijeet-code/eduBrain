import React from "react";

const benefitsData = [
  {
    id: 1,
    icon: '/idea.png',
    title: "Practical Problem-Solving",
    description:
      "Tackle real-world problems through projects in software, design, and development — just like in the industry.",
    iconAlt: "Idea",
  },
  {
    id: 2,
    icon: '/idea2.png',
    title: "Structured Learning Paths",
    description:
      "Navigate a clear, well-paced roadmap for each skill — from beginner to job-ready.",
    iconAlt: "Learning journey",
  },
  {
    id: 3,
    icon: '/portfolio.png',
    title: "Portfolio & Project Showcases",
    description:
      "Build GitHub repos, design portfolios, or deploy working apps — proof of what you've learned.",
    iconAlt: "Portfolio",
  },
  {
    id: 4,
    icon: '/expert.png',
    title: "Expert Mentorship",
    description:
      "Learn from industry pros who've been in your shoes — with live feedback and 1:1 support.",
    iconAlt: "Consultation",
  },
];

const RealProject = () => {
  return (
    <main
      className="
        relative
        flex flex-col items-center
        bg-[#0C0C0D]
        rounded-none
        shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.1),0px_4px_6px_-1px_rgba(0,0,0,0.1)]
        w-full max-w-[1424px]
        min-h-[600px] md:min-h-[1129px]
        z-[3]
        mx-auto
        py-6 md:py-10 px-2
      "
    >
      {/* Decorative SVG */}
      <div className="absolute top-0 left-0 w-[340px] h-[187px] opacity-60 pointer-events-none z-0 hidden md:block ">
        <svg width="339" height="186" viewBox="0 0 339 186" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 75.0846H56.1481L95.974 37.2163H193.907L231.121 1.30664H320.566M0 94.6716H63.9827L103.156 55.4975H211.535L236.997 30.0343H338.847M0 116.217H63.9827L99.8913 79.6549H236.997M320.566 135.152H143.635L118.825 160.615H285.311M223.939 116.217H126.007L79.6519 160.615H33.2971M33.2971 141.028H70.5115L113.602 94.6716H274.212M0 135.152H22.1981V174.326H249.402M0 149.515H10.4462V185.425H138.412" stroke="url(#paint0_linear_2021_937)" strokeOpacity="0.2"/>
          <defs>
            <linearGradient id="paint0_linear_2021_937" x1="242.672" y1="93.7786" x2="-2.03727" y2="106.45" gradientUnits="userSpaceOnUse">
              <stop stopColor="#04D5FF"/>
              <stop offset="1" stopColor="#246BFD"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

  <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center px-2 md:px-0">
        <header className="flex flex-col items-center gap-5 mb-10">
          <p className="text-2xl text-gray-400 text-center">
            Real Projects. Real Skills. Real Careers.
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0356ff] text-center leading-tight">
            Fuel Your Future with In-Demand Skills
          </h1>

          {/* Description */}
        <div className="w-full flex flex-col gap-4 items-center">
          <p
            className="font-montserrat text-base sm:text-lg md:text-[20px] leading-[22px] md:leading-[25px] font-medium text-white w-full max-w-4xl text-center"
          >
            At Edubraining, we go beyond just courses — we create career-ready professionals. Whether you’re diving into Web Development, mastering Java & C++, exploring UI/UX Design, or gearing up for a role in Software Engineering, our platform empowers you with hands-on projects, expert guidance, and real-world learning.
          </p>
          <p
            className="font-montserrat text-sm sm:text-base md:text-[18px] leading-[20px] md:leading-[25px] font-medium text-gray-400 w-full max-w-4xl text-center"
          >
            With our unique approach, you’ll develop a strong portfolio, work on industry-level challenges, and step confidently into internships and high-growth tech careers.
          </p>
        </div>
        </header>

  <section className="flex flex-col lg:flex-row items-center gap-10 w-full mx-auto px-0 md:px-4">
          {/* Main Image */}
          <div className="relative w-full max-w-[400px] md:max-w-[608px] h-[300px] md:h-[658px] bg-cover bg-center rounded-xl overflow-hidden flex-shrink-0 mx-auto">
            <img
              src="/consultation.png"
              alt="Learning environment"
              className="w-full h-full object-contain rounded-xl"
            />
            <img
              src="/consultation.png"
              alt="Learning environment illustration"
              className="absolute w-10 h-8 md:w-12 md:h-10 bottom-2 md:bottom-4 right-2 md:right-4 object-contain"
            />
          </div>

          {/* Benefits */}
          <aside className="flex flex-col w-full max-w-xl items-start gap-8 px-2 md:px-5 mt-8 md:mt-0">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
              Top Benefits
            </h2>
            <div className="flex flex-col gap-6 w-full mx-auto leading-5">
              {benefitsData.map((benefit) => (
                <article
                  key={benefit.id}
                  className="flex items-center gap-3 md:gap-4 px-3 md:px-5 py-3 md:py-4 bg-[#121721] rounded-xl border border-[#0554f7] w-full md:w-[80%]"
                >
                  <img
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    alt={benefit.iconAlt}
                    src={benefit.icon}
                  />
                  <div className="flex flex-col">
                    <h3 className="text-base md:text-lg font-semibold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#abaeb2] leading-5">
                      {benefit.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </section>

        
      </div>
    </main>
  );
};

export default RealProject;

