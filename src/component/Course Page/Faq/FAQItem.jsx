import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      className={`w-full rounded-xl border-2 border-solid transition-all duration-200 cursor-pointer mb-2 ${isOpen ? 'shadow-lg' : ''}`}
      style={{
        borderColor: '#1545C2',
        background: isOpen ? 'rgba(21,69,194,0.10)' : 'rgba(21,69,194,0.05)',
      }}
      onClick={toggleOpen}
      aria-expanded={isOpen}
      tabIndex={0}
      role="button"
    >
      <div className="flex gap-5 justify-between items-center w-full px-7 pt-3.5 pb-3 max-md:px-5 max-sm:px-4 max-sm:pt-3.5">
        <span className="flex-1 text-xl leading-7 text-slate-50 max-md:text-lg max-md:leading-6 max-sm:text-base max-sm:leading-6 text-left pb-2">
          {question}
        </span>
        <div className="flex-shrink-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
            style={{ color: '#ABAEB3' }}
          >
            <path
              d="M8 12H16"
              stroke="#ABAEB3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16.0005V8.00049"
              stroke="#ABAEB3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.00001 22H15C20 22 22 20 22 15V8.99998C22 4 20 2 15 2H9.00001C4 2 2 4 2 8.99998V15C2 20 4 22 9.00001 22Z"
              stroke="#ABAEB3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {/* Answer section */}
      {isOpen && (
        <div className="px-7 pb-6 pt-1 text-base text-slate-200 max-md:px-5 max-sm:px-4 max-sm:pb-5 max-sm:text-sm transition-all duration-200">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FAQItem;
