import React from 'react';
import DecorativeVectors from './DecorativeVectors';
import CourseCard from './CourseCard';


export const CoursesSection = () => {
  const basePrice = 2999;
  const discountPercent = 10;
  const discountAmount = Math.round(basePrice * discountPercent / 100);
  const finalPrice = basePrice - discountAmount;
  const courseData = {
    title: "Powerful Data Analysis with Power BI: From Beginner to Pro",
    description: "Unlock the full potential of your data! Master Power BI for insightful data analysis and stunning...",
    features: [
      <span><img src="/video.png" alt="video" className="inline w-5 h-5 mr-1 align-text-bottom" />76 Lectures</span>,
      <span><img src="/medal.png" alt="medal" className="inline w-5 h-5 mr-1 align-text-bottom" />Taught by Expert Instructor</span>,
      "⏰ 30h+ content",
      "🔰 Beginner Friendly"
    ],
    currentPrice: `₹${finalPrice}`,
    originalPrice: `₹${basePrice}`,
    discountPercentage: `10%`
  };

  return (
    <section className="overflow-x-hidden relative w-full -mt-10 min-h-screen bg-neutral-950 pb-32">
      <DecorativeVectors />

      <div className="flex flex-col gap-8 sm:gap-10 items-center px-2 sm:px-5 py-0 mx-auto mt-16 sm:mt-24 mb-0 w-full max-w-[1105px]">
        <div className="flex gap-2 sm:gap-3 justify-center items-center px-3 sm:px-6 py-2 sm:py-[8px] sm:pb-[10px] bg-[#A4A8FF2E] bg-opacity-[16%] rounded-[34.286px]">
          <span className="text-2xl sm:text-3xl leading-8 sm:leading-9 text-[#91B5FE]">
            Our Courses
          </span>
        </div>

        <header className="flex flex-col gap-4 sm:gap-6 items-start w-full">
          <h1 className="w-full text-2xl sm:text-5xl font-bold bg-clip-text leading-8 sm:leading-[57px] text-slate-50">
            Unlock Your Potential by our Premium Tech Courses
          </h1>
          <p className="w-full text-base sm:text-2xl leading-6 sm:leading-8 text-zinc-400">
            Transform your skills with hands-on, expert-led learning.
          </p>
        </header>
      </div>

      <div className="grid justify-center gap-10 sm:gap-8 md:gap-12 
  px-2 sm:px-5  py-0 mx-auto mt-10 sm:mt-28 mb-0 
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1216px]">

        {Array.from({ length: 9 }, (_, index) => (
          <CourseCard
            key={index}
            title={courseData.title}
            description={courseData.description}
            features={courseData.features}
            currentPrice={courseData.currentPrice}
            originalPrice={courseData.originalPrice}
            discountPercentage={courseData.discountPercentage}
            isFeatured={true}
          />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
