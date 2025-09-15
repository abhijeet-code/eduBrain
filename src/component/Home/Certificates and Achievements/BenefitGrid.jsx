import React from 'react';
import BenefitCard from './BenefitCard';

function BenefitGrid() {
  const firstRowBenefits = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/f6b6f603816fad4ecc5fe2e85f00152456714244?placeholderIfAbsent=true",
      title: "Credential Recognition",
      description: (
        <>
          <div className="self-stretch">
            Boost your resume with a recognized certification,{" "}
          </div>
          <div className="self-stretch mx-3 max-md:mx-2.5">
            showcasing your expertise in sought-after tech{" "}
          </div>
          <div>domains.</div>
        </>
      )
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/1401240cb683cc4a0c46d2736c63e447a5b370de?placeholderIfAbsent=true",
      title: "Career Advancement",
      description: (
        <>
          <div className="mr-4 ml-3.5 max-md:mx-2.5">
            Open doors to new career opportunities and{" "}
          </div>
          <div>
            promotions by demonstrating your commitment{" "}
          </div>
          <div className="mr-2.5 max-md:ml-2.5">
            to continuous learning and skill development.
          </div>
        </>
      )
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/d4412d2cb56b15949287f38b66e9a5a2b81b8115?placeholderIfAbsent=true",
      title: "Industry Validation",
      description: (
        <>
          <div className="self-stretch max-md:mr-2 max-md:ml-1.5">
            Gain recognition from industry professionals,{" "}
          </div>
          <div className="self-stretch">
            employers, and peers, adding credibility to your{" "}
          </div>
          <div>skills and knowledge.</div>
        </>
      )
    }
  ];

  const secondRowBenefits = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/425b0bff61babdaa53000bfcd7b1b742fdefcd3c?placeholderIfAbsent=true",
      title: "Competitive Edge",
      description: (
        <>
          <div className="self-stretch mr-5 ml-5 max-md:mx-2.5">
            Stand out in a competitive job market with a{" "}
          </div>
          <div className="self-stretch">
            certification that sets you apart as a qualified and{" "}
          </div>
          <div>skilled professional.</div>
        </>
      )
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/298209a1196cd4b16f5263024e0cc68a21b5ff46?placeholderIfAbsent=true",
      title: "Skill Mastery",
      description: (
        <>
          <div className="self-stretch">
            Validate your proficiency in specific technologies{" "}
          </div>
          <div className="self-stretch mr-4 ml-5 max-md:mx-2.5">
            or methodologies, proving your capability to{" "}
          </div>
          <div>
            employers and project collaborators.
          </div>
        </>
      )
    }
  ];

  return (
    <div className="mt-24 w-full max-w-[1264px] max-md:mt-10 max-md:max-w-full">
      {/* First Row */}
      <div className="flex gap-5 max-md:flex-col">
        {firstRowBenefits.map((benefit, index) => (
          <div key={index} className="w-[33%] max-md:ml-0 max-md:w-full">
            <BenefitCard
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              centerContent={true}
              className={index === 1 ? "px-8" : index === 2 ? "px-9" : ""}
            />
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="mt-8 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* First two cards */}
          {secondRowBenefits.map((benefit, index) => (
            <div key={index} className="w-[33%] max-md:ml-0 max-md:w-full">
              <BenefitCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                centerContent={true}
                className={index === 1 ? "px-7" : ""}
              />
            </div>
          ))}

          {/* Third column with overlapping card and image */}
          <div className="flex items-center justify-center w-[400px] h-[218.8px] max-md:w-full max-md:min-h-[218.8px]">
            <article className="flex z-10 flex-col items-center justify-center px-6 py-6 w-[400px] h-[218.8px] max-md:w-full max-md:min-h-[218.8px] text-base bg-gray-900 rounded-3xl border border-solid bg-blend-normal border-neutral-800 text-zinc-400">
              <img
                src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/9ed08e037a554f3526189c8c85bb82f955c16b4c?placeholderIfAbsent=true"
                alt=""
                className="object-contain w-10 bg-blend-normal aspect-square"
              />
              <h3 className="mt-6 text-2xl font-semibold leading-none text-white">
                Network Growth
              </h3>
              <div className="mt-3 text-zinc-400 text-center">
                <div>
                  Join a community of certified professionals, expanding your network and connecting with like-minded individuals in your field.
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BenefitGrid;
