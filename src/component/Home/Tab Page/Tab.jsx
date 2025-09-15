import React, { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabsData = [
    {
      title: "Practical Application",
      content:
        "An internship with Edubraining transforms your resume into a powerhouse, showcasing your ability to thrive professionally. This distinguished experience highlights your practical skills, industry knowledge, and adaptability, setting you apart from other candidates. Potential employers value hands-on experience, and your internship with Edubraining demonstrates your commitment to personal and professional growth. It's not just a line on your resume; it's a testament to your readiness to excel in the workforce.",
    },
    {
      title: "Industry Networking",
      content:
        "Build valuable connections with industry professionals and expand your network through meaningful relationships that can open doors to future opportunities.",
    },
    {
      title: "Resume Powerhouse",
      content:
        "Transform your resume into a compelling document that showcases real-world experience and practical skills valued by employers.",
    },
    {
      title: "Skill Refinement",
      content:
        "Develop and refine your professional skills through hands-on experience and mentorship from industry experts.",
    },
    {
      title: "Exclusive Opportunities",
      content:
        "Access unique career opportunities and pathways that are only available through our comprehensive internship program.",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#0c0c0d] flex flex-col items-center px-2 md:px-8">
      <div className="w-full max-w-[1254px] gap-8 md:gap-[62px] relative pt-8 md:pt-[137px] px-2">
        <header className="flex flex-col items-start gap-4 md:gap-6 relative flex-[0_0_auto] mx-auto w-full">
          <div className="relative [font-family:'Roboto-Regular',Helvetica] font-normal text-[#91b5fe] text-xl md:text-2xl tracking-[0] leading-7 md:leading-8 whitespace-nowrap text-center w-full">
            Internship Opportunities
          </div>

          <h1 className="relative [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-[#f5f8ff] text-2xl md:text-5xl tracking-[0] leading-[32px] md:leading-[57.6px] whitespace-normal w-full">
            How It Propels Your Career?
          </h1>

          <p className="relative [font-family:'Roboto-Regular',Helvetica] font-normal text-[#7a7c80] text-sm md:text-base tracking-[0] leading-5 md:leading-6 max-w-full md:max-w-3xl">
            Internships aren't just about gaining work experience; they are your pathway to professional triumph. Discover how internships with Edubraing propels your career.
          </p>
        </header>

        <main className="w-full py-10 md:py-20 flex flex-col md:flex-row items-start gap-6 md:gap-12">
          <div className="w-full md:w-fit flex justify-center md:justify-start mb-4 md:mb-0">
            <img
              src="/internship.png"
              alt="Internship"
              className="rounded-2xl w-full max-w-xs sm:max-w-md md:w-[500px] md:h-[416.4px] object-cover"
              style={{ minWidth: 0 }}
            />
          </div>

          <section className="flex-1 flex flex-col justify-center px-2 md:px-8 gap-4 md:gap-6 w-full">
            {tabsData.map((tab, index) => (
              <div
                key={index}
                className="relative w-full"
                style={{
                  minHeight: index === activeTab ? "120px" : "44px",
                  transition: "min-height 0.2s",
                }}
              >
                <button
                  className={`relative h-7 top-0 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-base md:text-lg lg:text-[20.5px] tracking-[0] leading-7 whitespace-nowrap cursor-pointer transition-colors duration-200 w-full text-left md:text-center ${
                    index === activeTab
                      ? "text-[#91b5fe]"
                      : "text-[#7a7c80] hover:text-[#91b5fe]"
                  }`}
                  onClick={() => setActiveTab(index)}
                  aria-expanded={index === activeTab}
                  aria-controls={`tab-content-${index}`}
                  role="tab"
                >
                  {tab.title}
                </button>

                {index === activeTab && (
                  <div>
                    <div className="flex flex-col w-full items-start pt-2 md:pt-4">
                      {tab.content.split(". ").map((sentence, sentenceIndex) => (
                        <p
                          key={sentenceIndex}
                          className="relative w-full [font-family:'Roboto-Regular',Helvetica] font-normal text-[#abaeb2] text-xs md:text-sm tracking-[0] leading-5 whitespace-normal mb-1 md:mb-2"
                        >
                          {sentence}
                          {sentenceIndex < tab.content.split(". ").length - 1
                            ? "."
                            : ""}
                        </p>
                      ))}
                    </div>
                    <div className="relative w-full h-0.5 bg-[#313233] mt-1 md:mt-2">
                      <div className="absolute -translate-x-1/2 w-[60px] md:w-[100px] h-1 -bottom-0.5 left-[30px] md:left-[50px] bg-[#91b5fe] rounded-full" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Tab;