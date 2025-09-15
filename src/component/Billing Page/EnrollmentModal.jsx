import React, { useState, useEffect } from "react";
import check from "../../../public/check.png"
export const EnrollmentModal = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Handle redirect logic here
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const instructionItems = [
    {
      icon: check,
      text: "You will be redirected to you person al dashboard shortly.",
    },
    {
      icon: check,
      text: "Use the navigation to explore your enrolled courses",
    },
    {
      icon: check,
      text: "Complete your profile to personalize your experience.",
    },
    {
      icon: check,
      text: "Reach out to our mentors if you need any support.",
    },
  ];

  const handleRedirectClick = () => {
    // Handle manual redirect logic here
    console.log("Manual redirect clicked");
  };

  return (
    <main className="inline-flex flex-col items-center gap-[30px] px-[30px] py-[60px] relative bg-[#20c2151a] rounded-[15px] border border-solid border-[#00bd45] text-white">
      <div
        className="flex flex-col w-[124px] h-[124px] items-center justify-center gap-[109.67px] p-[25px] relative bg-[#24fd361a] rounded-[103.33px] overflow-hidden"
        role="img"
        aria-label="Success checkmark"
      >
        <img
          className="relative w-[70.13px] object-contain h-[52.6px]"
          alt="Success checkmark"
          src={check}
        />
      </div>

      <header className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
        <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#00c91e] text-3xl text-center tracking-[0] leading-7">
          Enrollment Successful
        </h1>

        <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-variable-collection-color-dull-duplicate text-xl text-center tracking-[0] leading-7">
          Welcome aboard! We&apos;re thrilled to have you.
        </p>
      </header>

      <section className="inline-flex flex-col items-center gap-5 px-2.5 py-5 relative flex-[0_0_auto] bg-[#15c2291a] rounded-[15px] border border-solid border-[#00bd45] backdrop-blur-[27.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(27.5px)_brightness(100%)]">
        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#00c91e] text-3xl tracking-[0] leading-7 whitespace-nowrap">
          How to access your course
        </h2>

        <ul
          className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]"
          role="list"
        >
          {instructionItems.map((item, index) => (
            <li
              key={index}
              className="inline-flex items-center gap-[7.78px] relative flex-[0_0_auto]"
              role="listitem"
            >
              <div
                className="relative w-[24.89px] h-[24.89px]"
                role="img"
                aria-hidden="true"
              >
                <img
                  className="absolute w-5 h-[15px] top-[5px] left-[3px] object-contain"
                  alt=""
                  src={item.icon}
                />
              </div>

              <p className="w-[488.44px] mt-[-1.56px] [font-family:'Roboto-Regular',Helvetica] text-variable-collection-color-dull-duplicate text-xl overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] relative font-normal tracking-[0] leading-7">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <p className="self-stretch [font-family:'Inter-Regular',Helvetica] text-variable-collection-color-dull-duplicate text-base text-center relative font-normal tracking-[0] leading-7">
        <span className="text-[#b9b9b9]">
          You will be automatically redirected in {countdown} seconds. If not,{" "}
        </span>

        <button
          className="text-[#40fd24] underline cursor-pointer hover:text-[#35d420] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#40fd24] focus:ring-opacity-50 rounded"
          onClick={handleRedirectClick}
          aria-label="Manually redirect to dashboard"
        >
          click here.
        </button>
      </p>
    </main>
  );
};
