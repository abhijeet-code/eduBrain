import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const faqData = [
  {
    question: "What is Edubraining?",
    answer: "Edubraining is an online platform offering a variety of tech courses, live mentorship, and career support to help you upskill and land your dream job.",
  },
  {
    question: "What types of courses do you offer?",
    answer: "We offer courses in web development, data science, machine learning, cloud computing, and more, designed for both beginners and advanced learners.",
  },
  {
    question: "How are the courses structured?",
    answer: "Courses include video lectures, hands-on projects, quizzes, and live mentorship sessions to ensure a comprehensive learning experience.",
  },
  {
    question: "What is included in the live mentorship sessions?",
    answer: "Live mentorship sessions provide direct interaction with industry experts, personalized guidance, and doubt resolution.",
  },
  {
    question: "Do I receive a certificate after completing a course?",
    answer: "Yes, you will receive a certificate of completion for each course you successfully finish.",
  },
  {
    question: "How long do I have access to the course materials?",
    answer: "You have lifetime access to all course materials after enrollment.",
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full p-6 md:p-10">
      <div className="w-full max-w-[1060px] mx-auto">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-[#9411a8] mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-base md:text-lg text-text-secondary">
            Uncover quick insights about Edubraining.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between cursor-pointer p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-800 font-medium text-base">
                  {item.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-colors ${openIndex === index ? 'bg-[#9411a8]/10' : 'bg-gray-100'}`}>
                  <Plus
                    className={`w-5 h-5 transition-transform duration-200 ${openIndex === index ? 'rotate-45 text-[#9411a8]' : 'text-gray-500'}`}
                  />
                </div>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 text-base border-t border-gray-50 pt-3">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

