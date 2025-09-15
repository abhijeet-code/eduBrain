import { Mail, Share2Icon, ShareIcon } from "lucide-react";
import React from "react";


export const CourseDetailsSection = () => {
  const courseFeatures = [
    { icon: "/check2.png", text: "76 Lectures" },
    { icon: "/check2.png", text: "30h+ content" },
    { icon: "/check2.png", text: "Lifetime access" },
    { icon: "/check2.png", text: "Certificate of completion" },
  ];

  

  const contactInfo = [
    {
      icon: "/check2.png",
      label: "Call us at:",
      value: "+91 9034501137",
    },
    {
      icon: "/check22.png",
      label: "Email us at",
      value: "support@tutedude.com",
    },
  ];

  return (
  <section className="flex flex-col w-full max-w-[398px] items-start gap-8 sm:gap-12 md:gap-16 lg:gap-[63px] relative mx-auto">
  <article className="flex flex-col w-full max-w-[361.51px] items-start gap-3 sm:gap-5 md:gap-8 lg:gap-[13px] relative flex-[0_0_auto] mx-auto">
        <header className="flex flex-col items-start gap-[16.16px] pt-0 pb-[13.71px] px-0 relative self-stretch w-full flex-[0_0_auto] border-b-[0.49px] [border-bottom-style:solid] border-[#3e3e3e]">
          <h1 className="relative self-stretch mt-[-0.49px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[18.4px] tracking-[0]  leading-[21.5px]">
            Powerful Data Analysis with Power BI: From Beginner to Pro
          </h1>
        </header>

        <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] bg-[#0c0c0d] rounded-[6.93px] border-[0.87px] border-solid border-[#2d2d2d] shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_8.66px_12.99px_-2.6px_#0000001a,0px_3.46px_5.19px_-3.46px_#0000001a]">
          <div className="relative self-stretch w-full h-[140px] sm:h-[160px] md:h-[183.55px] rounded-t-[6.93px] overflow-hidden bg-[url(/powerbi.png)] bg-cover bg-top bg-no-repeat">
            <div className="absolute top-2 left-0 w-full flex items-center justify-between px-3 sm:px-4 md:px-6">
              <div className="md:inline-flex hidden items-center justify-center gap-[6.93px] px-[8.66px] py-[4.33px] bg-red-500 rounded-[3.46px] overflow-hidden">
                <span className="mt-[-0.69px] [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-[9.7px] leading-[13.9px] w-fit tracking-[0] whitespace-nowrap">
                  10% OFF
                </span>
              </div>
              <div className="md:inline-flex hidden  items-center justify-center gap-[6.93px] px-[8.66px] py-[4.33px] bg-white rounded-[3.46px] overflow-hidden">
                <span className="w-fit mt-[-0.87px] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#000000] text-[9.7px] tracking-[0] leading-[13.9px] whitespace-nowrap">
                  Featured
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2 sm:gap-3 md:gap-[12.12px] px-2 sm:px-4 md:px-[14.72px] py-3 sm:py-4 md:py-[17.32px] relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative w-full max-w-[271.87px] mt-0 md:mt-[-0.87px] [font-family:'Roboto-Medium',Helvetica] font-medium text-gray-400 text-base sm:text-lg md:text-[17.3px] tracking-[0] leading-5 md:leading-[15.6px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
              This course includes
            </h2>

            <ul className="flex flex-col items-start gap-[4.33px] pt-0 pb-[11.26px] px-0 relative self-stretch w-full flex-[0_0_auto] border-b-[0.87px] [border-bottom-style:solid] border-[#2d2d2d]">
              {courseFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="inline-flex items-center gap-[4.33px] relative flex-[0_0_auto]"
                >
                  <div className="relative w-[13.85px] h-[13.85px]">
                    <img
                      className="absolute w-[11px] h-2 top-[3px] left-px"
                      alt=""
                      src={feature.icon}
                    />
                  </div>

                  <span className="relative w-[271.87px] mt-[-0.87px] [font-family:'Roboto-Regular',Helvetica] font-normal text-variable-collection-color-dull-duplicate text-[12.1px] tracking-[0] leading-[15.6px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] text-gray-400 [-webkit-box-orient:vertical]">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className=" box-border flex w-[86.58px] text-black items-center justify-center  bg-white rounded-[6.93px] cursor-pointer hover:bg-gray-100 gap-2  py-2 px-4 text-sm"
              aria-label="Share course"
            >
              
              <Share2Icon />

              <span className="relative w-fit  text-md">
                Share
              </span>
              
                
            </button>
          </div>
        </div>
      </article>

      <section className="flex flex-col h-[154px] items-start gap-[17.64px] relative self-stretch w-full">
        <h2 className="relative self-stretch mt-[-1.18px] [font-family:'Montserrat-SemiBold',Helvetica] font-semibold text-white text-[29.4px] tracking-[0] leading-[normal]">
          Contact us
        </h2>

        <div className="flex flex-col gap-2.5 items-start w-full text-lg text-white">
          <div className="flex flex-col   w-full  ">
            {/* Phone Icon */}
            <div className='flex gap-2 '>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-blue-600">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
            </svg>
            <span className=" font-bold mr-2">Call us At:</span>
            </div>
            <span className="ml-8 text-lg  underline underline-offset-2 decoration-[1.1px] 
            decoration-[#1545C2] max-sm:text-sm">+91 9034501137</span>
          </div>
          <div className="flex flex-col  w-full">
            {/* Email Icon */}
            <div className='flex gap-2'>
            <Mail color='#1545C2 '/>
            <span className=" font-bold mr-2">Email:</span>
            </div>
            <span className="ml-8 text-lg underline underline-offset-2 decoration-[1.1px] decoration-blue-500 max-sm:text-sm">support@tutedude.com</span>
          </div>
        </div>
      </section>
    </section>
  );
};
