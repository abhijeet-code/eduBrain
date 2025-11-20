import React from 'react'

const ReferEarn = () => {
  return (
    <div className="w-full p-6 md:p-10">
      <div className="w-full max-w-[1060px] mx-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 flex flex-col items-start">
          <h1 className="text-3xl md:text-4xl font-bold text-[#9411a8] mb-4">Refer & Earn</h1>
          <p className="text-lg text-gray-600 mb-8">
            Share your referral code and earn rewards.
          </p>

          <div className="w-full max-w-md bg-gray-50 rounded-xl border border-dashed border-gray-300 p-6 flex flex-col items-center text-center">
            <p className="text-sm text-gray-500 mb-2">Your Referral Code</p>
            <div className="text-2xl font-mono font-bold text-gray-800 tracking-wider mb-4">
              EDUBRAIN2024
            </div>
            <button className="w-full bg-[#e0f2fe] text-[#0284c7] hover:bg-[#bae6fd] py-2.5 px-4 rounded-lg font-semibold transition-colors shadow-sm">
              Copy Code
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferEarn
