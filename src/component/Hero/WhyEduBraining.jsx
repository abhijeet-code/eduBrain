import { Check } from 'lucide-react';
import React from 'react';

const WhyEduBraining = () => (
  <div className="space-y-4">
    <h3 className="text-[#9411a8] font-semibold text-base sm:text-lg border-b border-gray-200 pb-2">
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
          <Check className="w-4 h-4 text-[#9411a8] group-hover:scale-110 transition-transform" />
          <span className="text-gray-900 group-hover:text-[#9411a8] transition-colors text-xs sm:text-base text-nowrap">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

export default WhyEduBraining;
