import React, { useState, useEffect } from "react";
import check from "../../../public/check.png";
import { useNavigate } from "react-router-dom";
export const EnrollmentModal = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate(); // 2. Initialize navigate

  const handleRedirectClick = () => {
    navigate('/profile-dashboard/my-courses'); // 4. Redirect manually
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/profile-dashboard/my-courses'); // 3. Auto-redirect
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCountdown((prev) => {
  //       if (prev <= 1) {
  //         clearInterval(timer);
  //         // Handle redirect logic here
  //         return 0;
  //       }
  //       return prev - 1;
  //     });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

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


  return (
    <main className="inline-flex flex-col items-center gap-[30px] px-[30px] py-[60px] relative bg-white rounded-[15px] border border-solid border-[#9411a8] text-gray-900 shadow-lg">
      <div
        className="flex flex-col w-[124px] h-[124px] items-center justify-center gap-[109.67px] p-[25px] relative bg-[#9411a8]/10 rounded-[103.33px] overflow-hidden"
        role="img"
        aria-label="Success checkmark"
      >
        <img
          className="relative w-[70.13px] object-contain h-[52.6px]"
          alt="Success checkmark"
          src={check}
          style={{ filter: 'hue-rotate(260deg) saturate(500%) brightness(0.8)' }}
        />
      </div>

      <header className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
        <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#9411a8] text-3xl text-center tracking-[0] leading-7">
          Enrollment Successful
        </h1>

        <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-gray-500 text-xl text-center tracking-[0] leading-7">
          Welcome aboard! We&apos;re thrilled to have you.
        </p>
      </header>

      <section className="inline-flex flex-col items-center gap-5 px-2.5 py-5 relative flex-[0_0_auto] bg-gray-50 rounded-[15px] border border-solid border-gray-200">
        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#9411a8] text-3xl tracking-[0] leading-7 whitespace-nowrap">
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
                  style={{ filter: 'hue-rotate(260deg) saturate(500%) brightness(0.8)' }}
                />
              </div>

              <p className="w-[488.44px] mt-[-1.56px] [font-family:'Roboto-Regular',Helvetica] text-gray-600 text-xl overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] relative font-normal tracking-[0] leading-7">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <p className="self-stretch [font-family:'Inter-Regular',Helvetica] text-gray-500 text-base text-center relative font-normal tracking-[0] leading-7">
        <span className="text-gray-400">
          You will be automatically redirected in {countdown} seconds. If not,{" "}
        </span>

        <button
          className="text-[#9411a8] underline cursor-pointer hover:text-[#7a0c8b] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8] focus:ring-opacity-50 rounded"
          onClick={handleRedirectClick}
          aria-label="Manually redirect to dashboard"
        >
          click here.
        </button>
      </p>
    </main>
  );
};
