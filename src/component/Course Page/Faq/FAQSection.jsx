import React from 'react';
import BackgroundSVG from './BackgroundSVG';
import FAQItem from './FAQItem';

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
  },
  {
    question: "Do you offer internships?",
    answer: "Yes, we offer internship opportunities to top-performing students based on their course performance.",
  },
  {
    question: "What kind of placement assistance do you provide?",
    answer: "We provide resume reviews, mock interviews, and job referrals to help you secure your desired role.",
  },
  {
    question: "How do I contact Edubraining?",
    answer: "You can contact us via our website's contact form or email us at support@edubraining.com.",
  },
  {
    question: "Refund Policy.",
    answer: "We offer a 7-day refund policy from the date of enrollment. Please refer to our website for detailed terms.",
  },
  {
    question: "Exchange Policy.",
    answer: "Courses can be exchanged within 7 days of purchase, provided you have not accessed more than 20% of the content.",
  },
  {
    question: "Point to be noted while Refunding.",
    answer: "Refunds are processed within 5-7 business days. Please ensure your bank details are correct to avoid delays.",
  },
];

const FAQSection = () => {
  return (
    <section className="flex relative flex-col items-center px-5  w-full py-20 bg-neutral-950  min-h-[1370px] max-md:px-5 max-md:py-16 max-md:min-h-[auto] max-sm:px-4 max-sm:py-10">
      <BackgroundSVG position="left" />
      <BackgroundSVG position="right" />

      <header className="flex relative flex-col gap-6 items-center mb-24 w-full max-w-[745px] z-[2] max-sm:gap-5 max-sm:mb-10">
        <p className="text-2xl leading-8 text-blue-300 max-sm:text-xl max-sm:leading-7">
          FAQ
        </p>
        <h1 className="text-5xl font-bold text-center leading-[57.6px] text-slate-50 max-md:text-4xl max-md:leading-10 max-sm:text-3xl max-sm:leading-9">
          Frequently Asked Questions
        </h1>
        <p className="text-base leading-6 text-center text-zinc-500 max-sm:text-sm max-sm:leading-5">
          Uncover quick insights about Edubraining. Get ready for your tech
          journey by exploring our FAQs. Dive in now!
        </p>
      </header>

      <div className="flex relative flex-col gap-3 items-start w-full max-w-screen-md z-[2] max-md:max-w-full">
        {faqData.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

