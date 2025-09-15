import React from 'react';
import BackgroundSVG from '../Course Page/Faq/BackgroundSVG';
import FAQItem from '../Course Page/Faq/FAQItem';

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
  return (
    <section className="flex relative flex-col items-center px-5  w-full py-20 bg-[#0c0c0d] max-md:px-5 max-md:py-16 max-md:min-h-[auto] max-sm:px-4 max-sm:py-10">
      

      <header className="flex relative flex-col gap-6 items-center mb-24 w-full max-w-[745px] z-[2] max-sm:gap-5 max-sm:mb-10">
        <p className="text-2xl leading-8 text-blue-300 max-sm:text-xl max-sm:leading-7">
          FAQ
        </p>
        <h1 className="relative w-fit mt-[-3.90px] [font-family:'Inter-SemiBold',Helvetica]  text-[#0356ff] text-[41.9px] tracking-[0] leading-[39.1px] whitespace-nowrap">
          Frequently Asked Questions
        </h1>
        <p className="text-base leading-6 text-center text-zinc-500 max-sm:text-sm max-sm:leading-5">
          Uncover quick insights about Edubraining. Get ready for your tech
          journey by exploring our FAQs. Dive in now!
        </p>
      </header>

      <div className="flex relative flex-col gap-3 items-start -mt-10 w-full max-w-screen-md z-[2] max-md:max-w-full">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default Faq;

