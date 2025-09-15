import React from 'react';
import Hr from './Hr';

const LearningExperienceSection = () => {
  const stats = [
    {
      image: "Homew.png",
      number: "42+",
      label: "Courses"
    },
    {
      image: "graduate.png",
      number: "90k+",
      label: "Learners"
    },
    {
      image: "Paper.png",
      number: "100k+",
      label: "Doubts solved"
    },
    {
      image: "Pen.png",
      number: "10k+",
      label: "Student Projects"
    }
  ];

  const StatCard = ({ image, number, label }) => (
    <div
      className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 transition-transform duration-300 hover:scale-105 text-2xl sm:text-4xl w-full max-w-xs sm:max-w-[236px] h-auto sm:h-[140px] border border-[#0554F7] rounded-2xl bg-[#121721] p-4 sm:p-5 mx-auto"
    >
      <img
        src={image}
        alt={label}
        className="w-12 h-12 sm:w-[50.94px] sm:h-[50.94px]"
        style={{ objectFit: 'contain' }}
      />
      <div>
        <div className="text-white text-2xl sm:text-4xl font-bold">{number}</div>
        <div className="text-xs sm:text-sm text-gray-400">{label}</div>
      </div>
    </div>
  );

  return (
    <div className="w-full py-10 sm:py-16 px-2 sm:px-6 relative bg-[#0C0C0D]">
        <Hr/>
      <div className="mx-auto px-2 py-10 sm:px-6 max-w-5xl">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold font-Inter text-white">
            Learning Experience at a Glance
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-10 sm:mb-20">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              image={stat.image}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>

        {/* Horizontal Border Line Before Women Entrepreneurs Section */}

      </div>
        <div className='w-[98%] mx-auto h-[1px]  bg-[#1545C2] -mt-10'></div>
    </div>
  );
};

export default LearningExperienceSection;
