import React from "react";

const Mentor = () => (
  <div className="w-full p-6 md:p-10">
    <div className="w-full max-w-[1060px] mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#9411a8] mb-2">Mentor Support</h1>
        <p className="text-base md:text-lg text-text-secondary">Get help from our expert mentors.</p>
      </div>

      <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[300px] text-center">
        <div className="w-16 h-16 bg-[#9411a8]/10 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-[#9411a8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Connect with a Mentor</h2>
        <p className="text-gray-600 max-w-md mb-6">
          Our mentors are here to guide you through your learning journey. Schedule a session or chat with them directly.
        </p>
        <button className="bg-[#e0f2fe] text-[#0284c7] font-semibold py-3 px-8 rounded-lg hover:bg-[#bae6fd] transition-colors shadow-sm hover:shadow-md">
          Find a Mentor
        </button>
      </div>
    </div>
  </div>
);

export default Mentor;
