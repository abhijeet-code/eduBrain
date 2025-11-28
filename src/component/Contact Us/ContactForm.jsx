
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'error' or 'success'
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    try {
      const res = await fetch(`${BASE_URL}/api/contact/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.msg || 'Failed to send message.');
      }

      // Success
      setMessage('Message sent successfully!');
      setMessageType('success');
      setFormData({ name: '', email: '', message: '' }); // Clear the form

    } catch (error) {
      console.error('Submission error:', error);
      setMessage(error.message);
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section
      className="flex flex-col justify-center items-start gap-[29px] mx-auto w-full max-w-[424px] h-auto min-h-[480px] p-0 flex-none order-1 sm:max-w-[424px]"
    >
      <header className="flex flex-col gap-2 items-start w-full">
        <h2 className="text-[32px] sm:text-[40px] font-semibold leading-10 text-[#9411a8] max-md:text-3xl max-md:leading-8 max-sm:text-2xl max-sm:leading-7">
          Contact Us
        </h2>
        <p className="text-lg sm:text-2xl text-gray-500 max-md:text-lg max-sm:text-base">
          Feel free to drop us a message
        </p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-start w-full">
        <div className="flex flex-col gap-1.5 items-start w-full">
          <label htmlFor="name" className="text-base leading-5 text-gray-900 max-sm:text-sm">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={formData.name}
            onChange={handleInputChange}
            className="box-border flex items-center px-3 sm:px-4 pt-2.5 pb-2.5 w-full text-base leading-5 rounded-md border border-gray-300 border-solid bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#9411a8] focus:ring-1 focus:ring-[#9411a8] max-sm:p-2 max-sm:text-sm"
          />
        </div>

        <div className="flex flex-col gap-1.5 items-start w-full">
          <label htmlFor="email" className="text-base leading-5 text-gray-900 max-sm:text-sm">
            Your email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleInputChange}
            className="box-border flex items-center px-3 sm:px-4 pt-2.5 pb-2.5 w-full text-base leading-5 rounded-md border border-gray-300 border-solid bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#9411a8] focus:ring-1 focus:ring-[#9411a8] max-sm:p-2 max-sm:text-sm"
          />
        </div>

        <div className="flex flex-col gap-1.5 items-start w-full">
          <label htmlFor="message" className="text-base leading-5 text-gray-900 max-sm:text-sm">
            Write your message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleInputChange}
            className="box-border flex items-start px-3 sm:px-4 py-2.5 w-full text-base leading-5 rounded-md border border-gray-300 border-solid resize-none bg-white h-[120px] sm:h-[143px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#9411a8] focus:ring-1 focus:ring-[#9411a8] max-sm:p-2 max-sm:text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="flex flex-row justify-center items-center px-8 py-3 w-full sm:w-[135px] h-[48px] bg-[#9411a8] hover:bg-[#7a0c8b] rounded-[37px] text-[16px] mt-2 transition-colors duration-200"
        >
          <span className="text-base leading-6 text-white tracking-[2px] max-sm:text-sm font-medium">
            {isLoading ? 'SENDING...' : 'SEND'}
          </span>
        </button>
      </form>

      {message && (<p className={`w-full text-base sm:text-lg max-sm:text-base mt-2 ${messageType === 'error' ? 'text-red-500' : 'text-green-600'
        }`}>
        {message}
      </p>)}

      <p className="w-full text-base sm:text-lg text-gray-500 max-sm:text-base mt-2">
        We look forward to helping you grow and achieve your tech career
        goals!
      </p>
    </section>
  );
}
