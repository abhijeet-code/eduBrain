import React from 'react';

const SuccessPathInfographic = () => {
  const steps = [
    {
      number: "01",
      title: "Find Your Interested Field",
      description: "Use your passion to know your interested field explore courses related to your dreams and career",
      position: "left",
      image: "/p1.png"
    },
    {
      number: "02",
      title: "Explore Courses",
      description: "Discover the online courses from Programming, Business, Design, Marketing and so forth",
      position: "right",
      image: "/p2.png"
    },
    {
      number: "03",
      title: "Enroll and Learn",
      description: "Enroll in your dream course and find exceptional content in the course and live mentorship opportunities to get in-depth knowledge in particular subjects",
      position: "left",
      image: "/p3.png"
    },
    {
      number: "04",
      title: "Personalized Roadmap",
      description: "Follow our personalized roadmap, created to guide you through a structured learning journey. Track your progress and stay motivated",
      position: "right",
      image: "/p4.png"
    },
    {
      number: "05",
      title: "Project Creation",
      description: "Apply your knowledge by working on hands-on projects that enhance your skills and create a portfolio that showcases your skills",
      position: "left",
      image: "/p5.png"
    },
    {
      number: "06",
      title: "Certification and Internship",
      description: "Earn your certificate to showcase your skills and get job-oriented internship opportunities and grow your career in the industry",
      position: "right",
      image: "/p6.png"
    },
    {
      number: "07",
      title: "Now You Are Ready ",
      description: "Congratulations! You've navigated your learning journey. Now, armed with knowledge and skills, you are ready to shape your future in the world of technology.",
      position: "left",
      image: "/p7.png"
    }
  ];

  const CharacterIllustration = ({ isLeft, image }) => (
    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} mb-6 md:mb-8`}>
      <div className="relative w-full max-w-md mx-auto md:mx-0">
        <div className="w-full h-auto aspect-[450/329] flex items-center justify-center overflow-hidden rounded-xl shadow-lg bg-white border border-gray-100">
          <img src={image} alt="step visual" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#9411a8] rounded-full opacity-60"></div>
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#1545C2] rounded-full opacity-40"></div>
      </div>
    </div>
  );

  return (
    <section className="bg-gray-50 text-gray-900 min-h-screen relative overflow-hidden py-16 lg:py-24" id="process">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#9411a8]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1545C2]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[#9411a8] text-sm md:text-base font-bold mb-3 tracking-widest uppercase">Process</p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
            Your path to <span className="text-[#9411a8]">success</span>
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block" />

          {steps.map((step, index) => (
            <div key={index} className="relative mb-16 md:mb-24 last:mb-0">
              {/* Timeline Number Circle */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-2 z-20">
                <div className="w-14 h-14 bg-white flex items-center justify-center shadow-xl border-4 border-gray-50 rounded-full">
                  <span className="text-[#9411a8] font-bold text-lg">{step.number}</span>
                </div>
              </div>

              {/* Timeline Row */}
              <div className={`flex flex-col md:flex-row ${step.position === 'left' ? '' : 'md:flex-row-reverse'} items-center`}>
                {/* Image */}
                <div className="w-full md:w-1/2 px-2 md:px-8">
                  <CharacterIllustration isLeft={step.position === 'left'} image={step.image} />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 px-2 md:px-8 mt-4 md:mt-0">
                  <div className={`border border-gray-100 p-4 md:p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ${step.position === 'left' ? 'text-left' : 'text-right'}`}>
                    <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              <div className={`hidden md:block absolute top-8 ${step.position === 'left' ? 'right-1/2 mr-8' : 'left-1/2 ml-8'} w-8 h-0.5 bg-gradient-to-r ${step.position === 'left' ? 'from-[#9411a8] to-transparent' : 'from-transparent to-[#9411a8]'}`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Dots */}
        <div className="mt-12 md:mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-[#9411a8]">
            <div className="w-2 h-2 bg-[#9411a8] rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-[#9411a8] rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-[#9411a8] rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPathInfographic;
