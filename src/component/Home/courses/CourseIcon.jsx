import React from 'react';

const CourseIcon = ({ iconSvg }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: iconSvg }}
      className="mb-4"
    />
  );
};

export default CourseIcon;
