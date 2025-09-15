import React, { useState } from 'react';
import PaginationDots from './PaginationDots';

function TestimonialCard({ testimonial }) {
  return (
    <div
      className="flex flex-col justify-between items-center box-border p-[15.2007px_16.2865px] gap-[9.77px] min-w-[353.1px] min-h-[506.02px] bg-[rgba(21,69,194,0.05)] rounded-[17.3722px] border border-[#1545C2]"
      style={{ mixBlendMode: 'normal', flex: 'none', order: 0, flexGrow: 0 }}
    >
      {/* Image Container */}
      <div
        className="rounded-xl overflow-hidden mb-4 lg:mb-6 bg-gray-200 flex items-center justify-center min-w-[307.95px] min-h-[256.46px]"
      >
        <img
          src={testimonial.image}
          alt={testimonial.title}
          className="max-w-[307.95px] min-h-[256.46px] object-cover"
        />
      </div>

      {/* Content */}
      <div
        className="flex flex-col items-center gap-3 lg:gap-4 text-center flex-1 justify-between w-[308.36px] h-[145.07px] overflow-hidden break-words"
      >
        <div className="flex flex-col items-center gap-1">
          <h3
            className="font-montserrat text-lg font-bold leading-tight text-white"
          >
            {testimonial.title}
          </h3>
          <p
            className="font-montserrat text-md leading-5 text-[#0356FF]"
          >
            {testimonial.role}
          </p>
        </div>

        <p
          className="font-montserrat text-sm font-normal leading-5 text-justify text-[#A0AEC0]"
        >
          "{testimonial.quote}"
        </p>

        {/* Blue line accent */}
        <div
          className="mt-2 self-start bg-[#1545C2] rounded-[6158.31px] w-[61.59px] h-[2.46px]"
          style={{ mixBlendMode: 'normal' }}
        ></div>
      </div>
    </div>
  );
}


export default function SuccessStories({ heading, subheading  }) {
  const [startIndex, setStartIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d76230b4ed4255429e43baf2dc870e7118b4aa0b?width=622",
      title: "Unlocking the Power of Data",
      role: "Power BI & Data Analytics Learner",
      quote: "The Power BI and Data Analytics courses at Edubraining made business intelligence clear and actionable. Interactive lessons and real-world dashboards prepped me to confidently analyze any dataset."
    },
    {
      id: 2,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/aea0fe273ff19233404b78194656e9a52ed9443a?width=622",
      title: "Real-World Tech Skills that Matter",
      role: "Full Stack Development Student",
      quote: "Edubraining's Machine Learning and Full Stack courses gave me practical projects and up-to-date tech knowledge. The focused mentorship helped me build complete apps from scratch."
    },
    {
      id: 3,
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2227ffb02f9aff636f9fbd00506cd090041e1138?width=622",
      title: "Transformative Design Thinking",
      role: "UI/UX & Angular Enthusiast",
      quote: "Their UI/UX and Angular programs taught me to combine creativity with coding skills. The hands-on assignments transformed how I approach building user-centered digital products."
    },
    {
      id: 4,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      title: "Career-Ready in Months",
      role: "Data Science Intern",
      quote: "The internship program was intense but rewarding. I landed my first job thanks to the portfolio I built at Edubraining."
    },
    {
      id: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      title: "Supportive Mentors",
      role: "Web Development Learner",
      quote: "Mentors were always available to help. The community and support made all the difference in my learning journey."
    },
    {
      id: 6,
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      title: "Hands-on Projects",
      role: "AI & ML Student",
      quote: "Building real projects gave me the confidence to apply for jobs. The curriculum is practical and up-to-date."
    }
  ];

  const visibleCount = 3;
  const total = testimonials.length;

  // Get the visible testimonials, wrapping around if needed
  const getVisibleTestimonials = () => {
    let visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(testimonials[(startIndex + i) % total]);
    }
    return visible;
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  // For pagination dots: one dot per possible window
  const numDots = total;

  return (
    <div className="min-h-screen relative bg-edubraining-dark overflow-hidden" style={{ backgroundColor: '#0c0c0d' }}>
      <div className="max-w-7xl mx-auto px-4  py-12 lg:py-16">
        {/* Main Content Container */}
        <div className="flex flex-col items-center gap-16 lg:gap-24 ">

          {/* Header Section */}
          <div className="flex flex-col items-center gap-12 lg:gap-24 text-center">
            <div className="flex flex-col items-center gap-6">
              {/* Subtitle */}
              <div
                className="font-roboto text-xl lg:text-2xl font-normal leading-8"
                style={{ color: '#91B5FE' }}
              >
                {heading}
              </div>

              {/* Main Title */}
              <h1
                className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold leading-tight lg:leading-snug"
                style={{ color: '#0356FF' }}
              >
                {subheading}
              </h1>

              {/* Description */}
              <p
                className="max-w-4xl font-roboto text-base lg:text-lg font-normal leading-6 lg:leading-7 text-center"
                style={{ color: '#A0AEC0' }}
              >
                Edubraining internships and courses provide real skills and industry exposure that pave the way for your professional success. Experience learning that drives your career forward.
              </p>
            </div>

            {/* Testimonials Grid - Desktop */}
            <div className="hidden lg:flex items-center gap-8 xl:gap-12">
              {getVisibleTestimonials().map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>

            {/* Testimonials Carousel - Mobile/Tablet */}
            <div className="lg:hidden w-full max-w-sm">
              <TestimonialCard testimonial={getVisibleTestimonials()[0]} />
            </div>
          </div>

          {/* Pagination Dots */}
          <PaginationDots
            totalPages={numDots}
            currentPage={startIndex}
            onPageChange={setStartIndex}
          />
        </div>

        {/* Navigation Arrows - All screens, styled for mobile/tablet/desktop */}
        {/* Desktop: large, side arrows. Mobile/Tablet: small, below card. */}
        {/* Desktop */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute z-10 items-center justify-center text-white border-2 border-white rounded-full shadow-md left-[31px] top-1/2 -translate-y-1/2 w-[74px] h-[74px]"
          aria-label="Previous testimonial"
        >
          <span className="font-montserrat flex items-center justify-center pb-3 text-4xl font-normal">‹</span>
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute z-10 items-center justify-center text-white border-2 border-white rounded-full shadow-md right-[31px] top-1/2 -translate-y-1/2 w-[74px] h-[74px]"
          aria-label="Next testimonial"
        >
          <span className="font-montserrat flex items-center justify-center pb-3 text-4xl font-normal">›</span>
        </button>
        {/* Mobile/Tablet */}
        <div className="flex md:hidden w-full justify-center gap-6 mt-6">
          <button
            onClick={prevSlide}
            className="flex items-center justify-center text-white border-2 border-white rounded-full shadow-md w-10 h-10"
            aria-label="Previous testimonial"
          >
            <span className="font-montserrat flex items-center justify-center text-2xl font-normal">‹</span>
          </button>
          <button
            onClick={nextSlide}
            className="flex items-center justify-center text-white border-2 border-white rounded-full shadow-md w-10 h-10"
            aria-label="Next testimonial"
          >
            <span className="font-montserrat flex items-center justify-center text-2xl font-normal">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}