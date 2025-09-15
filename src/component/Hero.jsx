import React, { useState } from 'react';

import { ShoppingCart } from 'lucide-react';
import WhyEduBraining from './Hero/WhyEduBraining';
import SkillsMaster from './Hero/SkillsMaster';

const EdubrainingHero = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    setCartTotal(prev => prev + 299); // Example course price
  };
/*

<defs>
<linearGradient id="paint0_linear_0_1" x1="499.631" y1="97.9285" x2="748.096" y2="110.513" gradientUnits="userSpaceOnUse">
<stop stop-color="#04D5FF"/>
<stop offset="1" stop-color="#246BFD"/>
</linearGradient>
<linearGradient id="paint1_linear_0_1" x1="1281.89" y1="439.263" x2="829.234" y2="462.729" gradientUnits="userSpaceOnUse">
<stop stop-color="#1346B6"/>
</linearGradient>
<linearGradient id="paint2_linear_0_1" x1="152.986" y1="474.524" x2="540.744" y2="505.908" gradientUnits="userSpaceOnUse">
<stop stop-color="#04D5FF"/>
<stop offset="1" stop-color="#246BFD"/>
</linearGradient>
<clipPath id="clip0_0_1">
<rect width="345" height="195" fill="white" transform="translate(401)"/>
</clipPath>
</defs>
</svg>
 */
  return (
    <div className="min-h-screen  bg-[#0C0C0D] text-white relative overflow-hidden">
      <svg width="345" height="193" viewBox="0 0 345 193" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute h-[580.88px] w-[584px] -top-36 text-7xl opacity-15 -right-20 object-cover'>
        <path d="M345 53.0222L327.774 35.8333H128.663M345 28.25L336.894 20.6666H174.768M345 3.98329L340.44 0.949951H212.766M345 104.589H245.191V146.044H201.113L154.502 99.0277H45.5739M345 121.778H264.95V162.728H195.54L147.916 115.711H35.9476M345 137.45H279.643V178.906H187.434L139.81 131.383H0.989258M345 152.111H303.962V192.05H345" stroke="url(#paint0_linear_92_884)" stroke-width="0.6"/>
        <defs>
        <linearGradient id="paint0_linear_92_884" x1="98.6308" y1="96.9285" x2="347.096" y2="109.513" gradientUnits="userSpaceOnUse">
        <stop stop-color="#04D5FF"/>
        <stop offset="1" stop-color="#246BFD"/>
        </linearGradient>
        </defs>
        </svg>

      {/* bottom right svg: */}
        <svg width="539" height="190" viewBox="0 0 539 190" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute h-[471.88px] w-[484px] bottom-10 opacity-14 -left-32 rotate-0 object-cover'>
        <path d="M59.2175 1.41772H331.135L380.684 35.2658H539M109.975 35.2658H331.135L380.684 66.6962H539M0 77.576H316.632L331.135 96.9177H539M539 127.139H397.603L366.182 150.108H132.937M539 139.228H430.233L397.603 160.987M539 160.987H460.446L419.357 188.791H198.197" stroke="url(#paint0_linear_92_898)"/>
        <defs>
        <linearGradient id="paint0_linear_92_898" x1="152.986" y1="95.5244" x2="540.744" y2="126.908" gradientUnits="userSpaceOnUse">
        <stop stop-color="#04D5FF"/>
        <stop offset="1" stop-color="#246BFD"/>
        </linearGradient>
        </defs>
        </svg>



      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6 md:py-8 lg:py-12">

        

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center min-h-screen w-full">
          {/* Left Content */}
          <div className="space-y-8 w-full lg:w-7/12 lg:pr-8 lg:ml-8">
            <div className="space-y-1 w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight w-full break-words">
                Discover the future
                <br />
                of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1545C2] to-[#859EE1] to-white ">learning</span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl text-[#6C98FF] leading-relaxed">
                <span className="text-[#6C98FF] font-semibold font-roboto ">AI Enhance courses for high paying job</span>
              </p>

              <div className="text-white leading-relaxed font-roboto text-base sm:text-lg md:text-xl ">
                <p className="mb-2 mt-7">
                  <span className="text-white font-bold font-roboto">Edubraining</span> is your gateway to a high-growth tech career. Founded by
                </p>
                <p className="mb-2">
                <span className="text-[#1763FF]  cursor-pointer">Vidit Agarwal</span> and <span className="text-[#1763FF]  cursor-pointer">Ishan Ghihar</span>, we're on a mission to make top-
                </p>
                <p className="">
                  tier technical education accessible, affordable, and truly career-
                </p>
                <p>focused for everyone.</p>
                <p className="mt-5 mb-0 font-roboto size-17px text-white">
                  Explore courses today and take the first step toward your <span className="text-[#57B6FF] font-semibold">dream tech job</span>.
                </p>
              </div>
            </div>

            <button
              onClick={addToCart}
              className="mt-2 bg-white text-black w-full sm:w-[193px] h-[40px] rounded-full font-semibold text-base sm:text-lg px-4 sm:px-6 py-3 whitespace-nowrap cursor-pointer flex justify-center items-center"
            >
              Explore Courses
            </button>




            {/* Features Grid */}
            <div className="flex  gap-8 pt-8">
              <WhyEduBraining />
              <SkillsMaster />
            </div>

          </div>

          {/* Right Content - Visual Elements */}
          <div className="w-full lg:w-5/12 px-0 sm:px-4 lg:px-8 py-0 flex flex-col items-center">
  {/* Background Image Section */}
            <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[420px] xl:h-[480px] lg:w-[420px] xl:w-[480px] mx-auto">
              <img
                src="header.png"
                alt="Background Visual"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

  {/* Cart Widget - Below the Image */}
            <div className="mt-8 flex justify-center w-full px-2 md:px-0">
              <div className="bg-[slate-800/90] backdrop-blur-sm border border-[#1750BF] rounded-xl p-2 sm:p-4 shadow-2xl w-full max-w-[320px] md:max-w-xs mx-auto">
                <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-8 min-w-0">
                  <div className="flex flex-col items-center">
                    <div className="text-base sm:text-lg md:text-2xl font-bold text-white">0</div>
                    <div className="text-xs sm:text-sm text-gray-400">Courses</div>
                  </div>
                  <div className="flex flex-col items-center bg-[#1545C20D]">
                    <div className="text-base sm:text-lg md:text-2xl font-bold text-white">0</div>
                    <div className="text-xs sm:text-sm text-gray-400">Total</div>
                  </div>
                  <button className="bg-gradient-to-r from-[#72A0FF] via-[#246CFF] to-[#0054FF] text-white px-2 py-2 sm:px-4 sm:py-2 rounded-lg flex items-center gap-1 sm:gap-2 transition-colors duration-200">
                    <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Go to Cart</span>
                  </button>
                </div>
              </div>
            </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default EdubrainingHero;