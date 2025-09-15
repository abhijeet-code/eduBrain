import React from 'react';

const WhatMakesUsDifferent = () => {
  const features = [
    {
      id: 1,
      title: "AI-Based Learning",
      description: "Transformative education with AI-driven courses tailored to you.",
      image: "c1.png"
    },
    {
      id: 2,
      title: "Personalized Roadmap",
      description: "Your unique path to success with a personalized learning roadmap.",
      image: "c2.png"
    },
    {
      id: 3,
      title: "Mentorship",
      description: "Guidance and mentorship from 6 to 10 pm — your key to success.",
      image: "c3.png"
    },
    {
      id: 4,
      title: "Project-Based Learning",
      description: "Hands-on projects for real-world skills and a standout portfolio.",
      image: "c4.png"
    },
    {
      id: 5,
      title: "Recorded Lectures",
      description: "Learn on your schedule with access to recorded lectures.",
      image: "c5.png"
    }
  ];

  return (
  <div className="bg-[#0C0C0D] relative min-h-screen px-2 sm:px-8 flex flex-col items-center w-full">
      

  <div className="w-full max-w-4xl mx-auto pt-6 sm:pt-10 pb-10 sm:pb-20 flex flex-col items-center">
        {/* Header */}
        <h1 className="text-3xl sm:text-5xl font-bold text-center mb-8 sm:mb-12">
          <span className="text-3xl sm:text-5xl font-bold bg-[linear-gradient(90.21deg,#003FEA_-0.74%,#91B3FF_101.93%)] bg-clip-text text-transparent underline decoration-blue-400">What Makes Us Different</span>
        </h1>

        {/* Features Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mb-10 sm:mb-20 w-full">
          {/* First 4 features in 2x2 grid */}
          {features.slice(0, 4).map((feature) => (
            <div
              key={feature.id}
              className="bg-[#121721] rounded-3xl p-4 sm:p-6 text-center hover:bg-gray-750 transition-colors py-2 h-auto min-h-[160px] sm:h-[190px] duration-200 flex flex-col justify-center w-full max-w-md mx-auto"
            >
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4"
              />
              <h3 className="text-white text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-[#ABAEB2] text-sm sm:text-md leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Last feature centered */}
        <div className="flex justify-center -mt-2 sm:-mt-5 w-full">
          <div  className="bg-[#121721] rounded-3xl p-4 sm:p-6 text-center text-wrap hover:bg-gray-750 transition-colors py-2 h-auto min-h-[160px] sm:h-[190px] duration-200 w-full max-w-md mx-auto">
            <img 
              src={features[4].image} 
              alt={features[4].title}
              className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4"
            />
            <h3 className="text-white text-lg sm:text-2xl font-semibold mb-2 sm:mb-3">
              {features[4].title}
            </h3>
            <p className="text-[#ABAEB2] text-wrap w-10/12 mx-auto text-sm sm:text-md">
              {features[4].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;