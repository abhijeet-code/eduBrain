import React from "react";

export const Certificate = () => {
  const features = [
    {
      icon: "/check.png",
      title: "Hands-On Project",
      description: "Build with real use-cases for a standout portfolio.",
    },
    {
      icon: "/check.png",
      title: "Mentor Guidance",
      description: "Personal feedback from tech leaders!",
    },
    {
      icon: "/check.png",
      title: "Verified Certificate",
      description: "Share on LinkedIn, resume, and with employers.",
    },
    {
      icon: "/check.png",
      title: "Internship Opportunities",
      description: "Exclusive access to hand-picked tech internships.",
    },
  ];

  return (
  <div className="w-full mx-auto relative overflow-x-hidden">
      <svg
          className="absolute left-0 top-10 z-10 w-[180px] h-[90px]  lg:w-[339px] lg:h-[185px]"
          width="339"
          height="186"
          viewBox="0 0 339 186"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 75.0836H56.1481L95.974 37.2153H193.907L231.121 1.30566H320.566M0 94.6707H63.9827L103.156 55.4965H211.535L236.997 30.0334H338.847M0 116.216H63.9827L99.8913 79.6539H236.997M320.566 135.151H143.635L118.825 160.614H285.311M223.939 116.216H126.007L79.6519 160.614H33.2971M33.2971 141.027H70.5115L113.602 94.6707H274.212M0 135.151H22.1981V174.325H249.402M0 149.514H10.4462V185.424H138.412"
            stroke="url(#paint0_linear_2039_199)"
            strokeOpacity="0.2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2039_199"
              x1="242.672"
              y1="93.7776"
              x2="-2.03727"
              y2="106.449"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#04D5FF" />
              <stop offset="1" stopColor="#246BFD" />
            </linearGradient>
          </defs>
        </svg>

        {/* Right SVG - keep inside window, prevent overflow */}
        <svg
          className="absolute right-0 top-[120px] lg:top-[150px] z-10 w-[120px] h-[40px] lg:w-[339px] lg:h-[72px]"
          width="339"
          height="72"
          viewBox="0 0 339 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.2993 0.578125H208.572L239.781 13.3813H339.5M69.2702 13.3813H208.572L239.781 25.2699H339.5M0 29.3852H199.437L208.572 36.7013H339.5M339.5 48.1327H250.438L230.647 56.8205H83.7332M339.5 52.7052H270.991L250.438 60.9358M339.5 60.9358H290.021L264.14 71.4527H124.839"
            stroke="url(#paint0_linear_2039_200)"
            strokeOpacity="0.2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2039_200"
              x1="96.3611"
              y1="36.1743"
              x2="337.813"
              y2="68.7159"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#04D5FF" />
              <stop offset="1" stopColor="#246BFD" />
            </linearGradient>
          </defs>
        </svg>
  <main className="relative w-full max-w-[1424.64px] mx-auto min-h-[600px] lg:h-[922px] bg-[#0c0c0d] overflow-visible px-2 lg:px-0">
  <section className="relative min-h-[500px] lg:h-[742px] top-0 lg:top-[73px] flex flex-col justify-center z-20">
        {/* Left SVG - keep inside window */}
        

  <div className="flex flex-col items-center gap-10 lg:gap-[81.85px] relative lg:absolute lg:top-[33px] lg:left-[108px] top-0 left-0 w-full px-2 lg:px-0 z-20">
          <header className="flex flex-col w-full lg:w-[822.57px] items-center gap-2 lg:gap-[8.18px] relative flex-[0_0_auto]">
            <h1 className="relative w-fit mt-0 lg:mt-[-0.82px] lg:ml-[-77.72px] lg:mr-[-77.72px] font-semibold text-[#0356ff] text-2xl lg:text-5xl text-center tracking-[0] leading-9 lg:leading-[65.5px] whitespace-normal">
              Earn an Industry-Recognized Certification
            </h1>
            <p className="self-stretch font-medium text-[#a5a8ad] text-center leading-6 lg:leading-[24.6px] relative text-base lg:text-[24.6px] tracking-[0]">
              Validate your skills. Open doors to new opportunities.
            </p>
          </header>

          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-[45px] w-full justify-center">
            <img
              className="w-full max-w-[563.76px] h-auto lg:h-[398.6px] object-contain"
              alt="Certificate of completion sample"
              src={"/certificate.png"}
            />

            <div className="flex flex-col items-start gap-4 lg:gap-[22.03px] w-full max-w-[600px]">
              <p className="w-full lg:w-[600px] mt-0 lg:mt-[-1.60px] font-semibold text-white leading-6 lg:leading-[31.1px] text-base lg:text-[24.6px] tracking-[0]">
                Validate your expertise with hands-on, real-world projects and unlock new job opportunities.
              </p>

              <ul className="flex flex-col items-start gap-2 lg:gap-[12.28px] w-full">
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex flex-col items-start w-full"
                  >
                    <div className="flex flex-row items-center gap-2 lg:gap-[8.02px] w-full">
                      <img
                        className="w-[24px] lg:w-[30.49px] h-[24px] lg:h-[30.49px] aspect-[1] object-cover"
                        alt=""
                        src={feature.icon}
                        role="presentation"
                      />

                      <h3 className="font-semibold   text-white text-base lg:text-[20.5px] tracking-[0] leading-6 lg:leading-[43.3px] whitespace-normal">
                        {feature.title}
                      </h3>
                    </div>

                    <p className="font-normal text-[#a5a8ad] text-sm lg:text-[20.5px]  tracking-[0] leading-5 lg:leading-[20.5px] whitespace-normal">
                      {feature.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-row flex-wrap items-center gap-4 lg:gap-[26px] w-full justify-center">
            <button className="inline-flex items-center justify-center gap-3 lg:gap-[13px] px-4 lg:px-[25px] py-3 bg-white rounded-[10px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#0c0c0d] transition-colors">
              <span className="font-medium text-[#000000] text-base tracking-[0] leading-6 whitespace-nowrap">
                Start Your Certification Journey
              </span>
            </button>

            <button className="inline-flex items-center justify-center gap-3 lg:gap-[13px] px-4 lg:px-5 py-3 rounded-[10px] border border-solid border-white hover:bg-white hover:text-black text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0c0c0d] transition-colors">
              <span className="font-medium text-base tracking-[0] leading-6 whitespace-nowrap">
                Preview Certificate Sample
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
};
