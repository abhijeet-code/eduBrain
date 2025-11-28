import React from 'react';
import { useNavigate } from 'react-router-dom';

const EduBrainingWebsite = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/courses');
  };
  return (
    <div className="min-h-screen relative bg-gray-50 text-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#9411a8]/10 blur-3xl" />
        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-[#1545C2]/10 blur-3xl" />
      </div>

      {/* Header Section */}
      <header className="relative z-10 text-center py-6 sm:py-8 px-2 sm:px-6">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 font-montserrat text-gray-900">
          Welcome to <span className="text-[#9411a8]">Edubraining</span>
        </h1>
        <p className="text-gray-600 font-roboto text-base sm:text-xl md:text-2xl mb-6 sm:mb-10 max-w-3xl mx-auto">
          Empowering the tech leaders of tomorrow through accessible, AI-powered learning
        </p>
      </header>

      {/* Women Entrepreneurs Section */}
      <div className="relative z-10 text-left px-2 sm:px-8 md:px-16">
        <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-4">
          Proudly Powered by Women Entrepreneurs
        </h3>

        <div className="max-w-full sm:max-w-[90%] mb-8">
          <div
            className="border-l-4 pl-6 py-4 text-left border-[#9411a8]"
            style={{
              lineHeight: '1.6',
            }}
          >
            <p className="text-sm sm:text-base lg:text-2xl leading-relaxed text-gray-700">
              <span className="font-semibold text-[#9411a8]">EduBraining</span> is led and inspired by{' '}
              <span className="font-medium text-[#1545C2]">
                women entrepreneurs
              </span>, creating more opportunities for women in tech and business leadership. Our platform isn't just about learning—it's about pioneering change together.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 py-5 md:ml-10 md:mr-10">
        <div className="flex flex-col md:flex-row max-h-[600px] gap-8 md:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 h-auto flex justify-center">
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="group.png"
                alt="Learning Community"
                className="object-cover w-60 h-60 sm:w-96 sm:h-96 md:w-[340px] md:h-[340px] lg:w-[540px] lg:h-[540px]"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 space-y-8">
            {/* About Us Section */}
            <div className="space-y-0">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-roboto text-gray-900">About Us</h2>
              <h3 className="text-lg sm:text-2xl text-[#9411a8] font-medium mt-2">
                Empowering tomorrow's tech leaders
              </h3>

              <div className="text-gray-600 font-size-24px font-roboto leading-relaxed space-y-8 mt-4 text-base sm:text-xl lg:text-2xl">
                <p>
                  At <span className="text-[#9411a8] font-roboto font-semibold ">EduBraining</span>, we believe that world-class technical
                  education should be accessible, affordable, and transformative. Founded by Name1 and
                  Name2, our mission is to shape the tech pioneers of tomorrow through innovative, industry-aligned learning powered by the latest advancements
                  in artificial intelligence.
                </p>
              </div>

              <button
                className="bg-[#9411a8] cursor-pointer text-white px-6 py-3 rounded-full font-medium transition-all duration-300 text-center mt-6 w-full sm:w-auto hover:bg-[#7a0c8b] hover:shadow-lg hover:-translate-y-0.5"
                onClick={handleClick}
              >
                Explore Courses!
              </button>
            </div>

            {/* Our Vision Section */}
            <div className="space-y-2 sm:space-y-3 w-full max-w-2xl pt-8">
              <h2 className="text-xl sm:text-3xl font-bold text-[#1545C2] break-words">Our Vision</h2>
              <blockquote className="space-y-2 sm:space-y-4 mt-1 w-full border-l-4 border-[#1545C2] pl-4">
                <p className="text-gray-700 font-roboto italic text-base sm:text-lg leading-6 sm:leading-8 md:leading-9 break-words whitespace-pre-line mb-4">
                  Education is not just about skills, but about building possibilities - one learner at a time.
                </p>
                <span className="block text-[#9411a8] font-medium text-sm sm:text-base mt-4 mb-2 pl-0 text-left" style={{ lineHeight: '1.6' }}>— XYZ, Co-Founder</span>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Vision Statement Box */}
        <div className="py-10 mt-10 sm:mt-16 text-center w-full sm:w-10/12 mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <p className="text-gray-700 text-base sm:text-xl lg:text-2xl leading-relaxed">
            We envision a future where every aspiring technologist can unlock their greatest
            potential, regardless of their background or geography. <span className="font-semibold text-[#9411a8]">EduBraining</span> is committed
            to breaking barriers and <span className="text-[#1545C2] font-medium">democratizing excellence in tech</span>.
          </p>
        </div>

        {/* Join Our Learning Community Section */}
        <div className="mt-16 md:mt-24 text-left px-2 sm:px-6 space-y-4 w-full pb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-gray-900">
            Join Our Learning Community.
          </h2>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-4xl">
            We are here to guide, mentor, and empower you at every step. Explore our courses, connect with our learning community, and
            take the next step toward an exceptional tech career with EduBraining.
          </p>
        </div>
      </main>
    </div>
  );
};

export default EduBrainingWebsite;
