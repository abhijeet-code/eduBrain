import { Check } from 'lucide-react';
import React from 'react';

const SkillsMaster = () => (
  <div className="space-y-4">
    <h3 className="text-[#1763FF] font-semibold text-base sm:text-lg border-b border-white pb-2">
      Skills You'll Master
    </h3>
    <div className="flex  text-nowrap flex-col lg:flex-row gap-2 sm:gap-4 ">
      <div className='space-y-2 sm:space-y-3'>
        {[
        'Power BI',
        'Data Analytics',
        'Machine Learning',
        'Full Stack Development'
      ].map((item, index) => (
        <div key={index} className="flex items-center space-x-2 sm:space-x-3 group rounded px-1 sm:px-2">
          <Check className="w-4 h-4 text-[#1763FF] group-hover:scale-110 transition-transform" />
          <span className="group-hover:text-blue-200 transition-colors text-xs sm:text-base">{item}</span>
        </div>
      ))}
      </div>
      <div className='space-y-2 sm:space-y-3'>
        {[
        'Web Technologies',
        'Programming Languages',
        'UI/UX'
      ].map((item, index) => (
        <div key={index} className="flex items-center space-x-2 sm:space-x-3 group rounded px-1 sm:px-2 ">
          <Check className="w-4 font-extrabold h-4 text-[#1763FF] group-hover:scale-110 transition-transform" />
          <span className="group-hover:text-blue-200 transition-colors text-xs sm:text-base">{item}</span>
        </div>
      ))}
      </div>
    </div>
  </div>
);

export default SkillsMaster;
