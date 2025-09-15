import { Check } from 'lucide-react';
import React from 'react';

const WhyEduBraining = () => (
  <div className="space-y-4">
    <h3 className="text-[#1763FF] font-semibold text-base sm:text-lg border-b border-white pb-2">
      Why EduBraining
    </h3>
    <div className="space-y-2">
      {[
        'Industry-Expert Courses',
        'Live Mentorship',
        'Flexible Learning',
        'Career Support'
      ].map((item, index) => (
        <div key={index} className="flex items-center space-x-2 sm:space-x-3 group">
          <Check className="w-4 h-4 text-[#1763FF] group-hover:scale-110 transition-transform" />
          <span className="group-hover:text-blue-200 transition-colors text-xs sm:text-base text-nowrap">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

export default WhyEduBraining;
