import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import WhyEduBraining from './Hero/WhyEduBraining';
import SkillsMaster from './Hero/SkillsMaster';

const EdubrainingHero = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/courses');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#9411a8]/5 blur-3xl" />
        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-[#1545C2]/5 blur-3xl" />
      </div>

      <svg width="345" height="193" viewBox="0 0 345 193" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute h-[580.88px] w-[584px] -top-36 text-7xl opacity-10 -right-20 object-cover'>
        <path d="M345 53.0222L327.774 35.8333H128.663M345 28.25L336.894 20.6666H174.768M345 3.98329L340.44 0.949951H212.766M345 104.589H245.191V146.044H201.113L154.502 99.0277H45.5739M345 121.778H264.95V162.728H195.54L147.916 115.711H35.9476M345 137.45H279.643V178.906H187.434L139.81 131.383H0.989258M345 152.111H303.962V192.05H345" stroke="url(#paint0_linear_92_884)" stroke-width="0.6" />
        <defs>
          <linearGradient id="paint0_linear_92_884" x1="98.6308" y1="96.9285" x2="347.096" y2="109.513" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9411a8" />
            <stop offset="1" stop-color="#1545C2" />
          </linearGradient>
        </defs>
      </svg>

      {/* bottom left svg: */}
      <svg width="539" height="190" viewBox="0 0 539 190" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute h-[471.88px] w-[484px] bottom-10 opacity-10 -left-32 rotate-0 object-cover'>
        <path d="M59.2175 1.41772H331.135L380.684 35.2658H539M109.975 35.2658H331.135L380.684 66.6962H539M0 77.576H316.632L331.135 96.9177H539M539 127.139H397.603L366.182 150.108H132.937M539 139.228H430.233L397.603 160.987M539 160.987H460.446L419.357 188.791H198.197" stroke="url(#paint0_linear_92_898)" />
        <defs>
          <linearGradient id="paint0_linear_92_898" x1="152.986" y1="95.5244" x2="540.744" y2="126.908" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9411a8" />
            <stop offset="1" stop-color="#1545C2" />
          </linearGradient>
        </defs>
      </svg>



      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-6 md:py-8 lg:py-12">



        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center min-h-screen w-full">
          {/* Left Content */}
          <div className="space-y-8 w-full lg:w-7/12 lg:pr-8 lg:ml-8">
            <div className="space-y-1 w-full">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight w-full break-words text-gray-900">
                Discover the future
                <br />
                of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9411a8] to-[#1545C2]">learning</span>
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl text-[#9411a8] leading-relaxed">
                <span className="text-[#9411a8] font-semibold font-roboto ">AI Enhance courses for high paying job</span>
              </p>

              <div className="text-gray-700 leading-relaxed font-roboto text-base sm:text-lg md:text-xl ">
                <p className="mb-2 mt-7">
                  <span className="text-gray-900 font-bold font-roboto">Edubraining</span> is your gateway to a high-growth tech career. Founded by
                </p>
                <p className="mb-2">
                  <span className="text-[#1545C2] cursor-pointer hover:text-[#0f3bb0]">Name1</span> and <span className="text-[#1545C2] cursor-pointer hover:text-[#0f3bb0]">Name2</span>, we're on a mission to make top-
                </p>
                <p className="">
                  tier technical education accessible, affordable, and truly career-
                </p>
                <p>focused for everyone.</p>
                <p className="mt-5 mb-0 font-roboto size-17px text-gray-700">
                  Explore courses today and take the first step toward your <span className="text-[#9411a8] font-semibold">dream tech job</span>.
                </p>
              </div>
            </div>

            <button
              onClick={handleClick}
              className="mt-2 bg-[#9411a8] hover:bg-[#7a0c8b] text-white w-full sm:w-[193px] h-[40px] rounded-full font-semibold text-base sm:text-lg px-4 sm:px-6 py-3 whitespace-nowrap cursor-pointer flex justify-center items-center transition-all duration-200 shadow-md hover:shadow-lg"
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#9411a8]/10 to-[#1545C2]/10 rounded-xl" />
              <img
                src="header.png"
                alt="Background Visual"
                className="relative w-full h-full object-cover rounded-xl shadow-xl border border-gray-100"
              />
            </div>

            {/* Cart Widget - Below the Image */}
            {/* <div className="mt-8 flex justify-center w-full px-2 md:px-0">
              <div className="bg-white border border-gray-200 rounded-xl p-2 sm:p-4 shadow-lg w-full max-w-[320px] md:max-w-xs mx-auto">
                <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-8 min-w-0">
                  <div className="flex flex-col items-center">
                    <div className="text-base sm:text-lg md:text-2xl font-bold text-gray-900">0</div>
                    <div className="text-xs sm:text-sm text-gray-500">Courses</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-base sm:text-lg md:text-2xl font-bold text-gray-900">0</div>
                    <div className="text-xs sm:text-sm text-gray-500">Total</div>
                  </div>
                  <button className="bg-gradient-to-r from-[#9411a8] to-[#1545C2] text-white px-2 py-2 sm:px-4 sm:py-2 rounded-lg flex items-center gap-1 sm:gap-2 transition-colors duration-200 hover:opacity-90">
                    <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Go to Cart</span>
                  </button>
                </div>
              </div>
            </div> */}
          </div>


        </div>
      </div>
    </div>
  );
};

export default EdubrainingHero;