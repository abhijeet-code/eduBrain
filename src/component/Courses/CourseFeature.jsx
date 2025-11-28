import React from 'react';

export const CourseFeature = ({ text }) => {
  return (
    <div className="flex gap-1.5 items-center text-xs text-gray-600 max-sm:text-xs">

      {text}
    </div>
  );
};


export default CourseFeature