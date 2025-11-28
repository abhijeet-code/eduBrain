import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const testimonials = [
    {
      title: "Unlocking the Power of Data",
      role: "Power BI & Data Analytics Learner",
      testimonial: "The Power BI and Data Analytics courses at Edubraining made business intelligence clear and actionable. Interactive lessons and real-world dashboards prepped me to confidently analyze any dataset.",
      image: "/test1.png"
    },
    {
      title: "Real-World Tech Skills that Matter",
      role: "Full Stack Development Student",
      testimonial: "Edubraining's Machine Learning and Full Stack courses gave me practical projects and up-to-date tech knowledge. The focused mentorship helped me build complete apps from scratch.",
      image: "/test1.png"
    },
    {
      title: "Transformative Design Thinking",
      role: "UI/UX & Angular Enthusiast",
      testimonial: "Their UI/UX and Angular programs taught me to combine creativity with coding skills. The hands-on assignments transformed how I approach building user-centered digital products.",
      image: "/test1.png"
    },
    {
      title: "Cloud Computing Excellence",
      role: "AWS & DevOps Specialist",
      testimonial: "The cloud computing curriculum at Edubraining opened doors to enterprise-level opportunities. From AWS fundamentals to advanced DevOps practices, every module was industry-relevant.",
      image: "/test1.png"
    },
    {
      title: "Mobile Development Mastery",
      role: "React Native Developer",
      testimonial: "Edubraining's mobile development track gave me the confidence to build cross-platform apps. The mentors provided personalized feedback that accelerated my learning curve significantly.",
      image: "/test1.png"
    },
    {
      title: "AI & Machine Learning Journey",
      role: "AI/ML Engineering Student",
      testimonial: "The artificial intelligence courses here are cutting-edge. From neural networks to computer vision, I gained practical skills that landed me a role at a top tech company.",
      image: "/test1.png"
    },
    {
      title: "Cybersecurity Professional Path",
      role: "Information Security Analyst",
      testimonial: "Edubraining's cybersecurity program equipped me with both theoretical knowledge and hands-on experience. The real-world scenarios prepared me for actual security challenges.",
      image: "/test1.png"
    },
    {
      title: "Digital Marketing Success",
      role: "Growth Marketing Specialist",
      testimonial: "The digital marketing courses combined strategy with practical tools. I learned SEO, social media marketing, and analytics that directly contributed to my career advancement.",
      image: "/test1.png"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const nextIndex = prev + cardsPerView;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevIndex = prev - cardsPerView;
      return prevIndex < 0 ? Math.floor((testimonials.length - 1) / cardsPerView) * cardsPerView : prevIndex;
    });
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex * cardsPerView);
  };

  const totalSlides = Math.ceil(testimonials.length / cardsPerView);

  return (
    <section className="bg-gray-50 text-gray-900 min-h-screen py-16 lg:py-24" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#9411a8] text-sm font-bold tracking-widest uppercase">
              Testimonials
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How Edubraining Boosts <span className="text-[#9411a8]">Your Career</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Edubraining internships and courses provide real skills and industry exposure that pave the way for your
            professional success. Experience learning that drives your career forward.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white border border-gray-200 shadow-lg hover:bg-gray-50 rounded-full flex items-center justify-center transition-all duration-300 lg:flex hidden text-gray-600 hover:text-[#9411a8]"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white border border-gray-200 shadow-lg hover:bg-gray-50 rounded-full flex items-center justify-center transition-all duration-300 lg:flex hidden text-gray-600 hover:text-[#9411a8]"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden py-4">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentSlide / testimonials.length) * 100}%)`,
                width: `${testimonials.length * (100 / cardsPerView)}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="px-4"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="bg-white rounded-2xl p-8 h-full flex flex-col shadow-lg border border-gray-100 hover:border-[#9411a8]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    {/* Quote Icon */}
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-[#9411a8]/10 rounded-full flex items-center justify-center">
                        <Quote className="w-6 h-6 text-[#9411a8]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <p className="text-gray-600 text-base leading-relaxed mb-6 flex-1 italic">
                        "{testimonial.testimonial}"
                      </p>

                      <div className="flex items-center mt-auto pt-6 border-t border-gray-100">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.role}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {testimonial.title}
                          </h3>
                          <p className="text-sm font-medium text-[#9411a8]">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8 lg:hidden">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-white border border-gray-200 shadow-md hover:bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-300 text-gray-600"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-white border border-gray-200 shadow-md hover:bg-gray-50 rounded-full flex items-center justify-center transition-colors duration-300 text-gray-600"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-12">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${Math.floor(currentSlide / cardsPerView) === index
                  ? 'bg-[#9411a8] w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;