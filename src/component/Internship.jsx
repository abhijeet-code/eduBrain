import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const InternshipOpportunities = () => {
  const benefits = [
    {
      title: "Practical Application",
      description:
        "An internship with Edubraining transforms your resume into a powerhouse, showcasing your ability to thrive professionally. This distinguished experience highlights your practical skills, industry knowledge, and adaptability, setting you apart from other candidates. Potential employers value hands-on experience, and your internship with Edubraining demonstrates your commitment to personal and professional growth. It's not just a line on your resume; it's a testament to your readiness to excel in the workforce.",
      isExpanded: true,
    },
    {
      title: "Industry Networking",
      description:
        "Build valuable connections with industry professionals and expand your network for future career opportunities.",
      isExpanded: false,
    },
    {
      title: "Resume Powerhouse",
      description:
        "Transform your resume with hands-on experience that employers value and recognize.",
      isExpanded: false,
    },
    {
      title: "Skill Refinement",
      description:
        "Develop and polish your professional skills through real-world application and mentorship.",
      isExpanded: false,
    },
    {
      title: "Exclusive Opportunities",
      description:
        "Access unique career paths and opportunities available only through our internship program.",
      isExpanded: false,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen py-16 lg:py-24 px-4 sm:px-6 lg:px-8" id="internship">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center lg:text-left">
          <p className="text-[#9411a8] text-sm sm:text-base lg:text-lg mb-2 font-bold tracking-widest uppercase">
            Internship Opportunities
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
            How It Propels <span className="text-[#9411a8]">Your Career?</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0">
            Internships aren't just about gaining work experience; they are your pathway to professional triumph.
            Discover how internships with Edubraining propel your career.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full max-w-xl mx-auto lg:mx-0 aspect-video overflow-hidden rounded-2xl shadow-xl border border-gray-100 group">
              <div className="absolute inset-0 bg-[#9411a8]/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
              <img
                src="interv.png"
                alt="Internship Experience"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#1545C2] rounded-full -z-10 opacity-20 blur-xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#9411a8] rounded-full -z-10 opacity-20 blur-xl" />
            </div>
          </div>

          {/* Benefits List */}
          <div className="order-1 lg:order-2 space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-[#9411a8]/30 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-[#9411a8]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-6">
              <button className="inline-flex items-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#9411a8] rounded-full hover:bg-[#7a0c8b] hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9411a8]">
                Apply for Internship
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipOpportunities;
