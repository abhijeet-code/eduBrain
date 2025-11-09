import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function MyCertificates() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const certificates = [
    {
      id: 1,
      title: "UI/UX Design Completion",
      issuedDate: "Oct 20, 2024",
      certificateId: "NGER-ASDFA-ASDF-3450"
    },
    {
      id: 2,
      title: "UI/UX Design Completion",
      issuedDate: "Oct 20, 2024",
      certificateId: "NGER-ASDFA-ASDF-3450"
    },
    {
      id: 3,
      title: "UI/UX Design Completion",
      issuedDate: "Oct 20, 2024",
      certificateId: "NGER-ASDFA-ASDF-3450"
    }
  ];

  const faqs = [
    "What happens if I don't complete all the assignments?",
    "How do I know my assignments have been verified?",
    "Can I still get a certificate if I skip some course content?",
    "How long does it take to receive the certificate after verification?"
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen -ml-4 text-white p-6 max-md:p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-4xl max-md:text-2xl font-bold text-[#1545C2] mb-2">
            My Certificates
          </h1>
          <p className="text-[#B9B9B9] max-md:text-sm">
            View and download your course completion certificates.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 ml-3 md:ml-0">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#1545C21A] border border-[#1545C2] rounded-xl overflow-hidden p-6 
                 flex flex-col max-md:w-[90%] max-md:mx-auto"
            >
              {/* Certificate Image */}
              <div className="rounded-xl w-full overflow-hidden mb-2">
                <img
                  src="/certificate.png"
                  alt="Certificate"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Certificate Info */}
              <div className="px-2 pb-2 flex flex-col items-center text-center md:text-left md:items-start">
                <h3 className="font-semibold text-[#F5F8FF] text-lg max-md:text-base mb-2">
                  {cert.title}
                </h3>
                <p className="text-[#B9B9B9] text-sm mb-4">
                  Issued: {cert.issuedDate}
                </p>

                <button className="w-full md:w-[300px] mx-auto bg-[#FFFFFF] cursor-pointer hover:bg-gray-100 text-black py-2 px-4 rounded-lg font-medium transition-colors mb-3 block text-sm md:text-base">
                  View/Download Certificate
                </button>

                <p className="text-[#F5F8FF] text-center text-xs break-words">
                  Certificate ID: {cert.certificateId}
                </p>
              </div>
            </div>
          ))}
        </div>


        {/* FAQ Section */}
        <div className="text-center mb-8 px-2">
          <div className="inline-block bg-gray-800 border border-[#1545C2] rounded-full px-4 py-2 mb-4 text-sm md:text-base">
            <span className="text-blue-400 font-semibold">FAQ</span>
          </div>
          <h2 className="text-3xl max-md:text-xl font-bold text-[#1545C2]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-3 px-2 ml-4 md:ml-50">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1545C21A] border border-[#1545C2] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between cursor-pointer p-4 text-left hover:bg-gray-700 transition-colors"
              >
                <span className="text-white font-medium text-sm md:text-base">
                  {faq}
                </span>
                <div className="w-6 h-6 border border-[#1545C2] rounded flex items-center justify-center flex-shrink-0 ml-4">
                  <Plus
                    className={`w-4 h-4 text-[#1545C2] transition-transform ${expandedFAQ === index ? 'rotate-45' : ''
                      }`}
                  />
                </div>
              </button>

              {expandedFAQ === index && (
                <div className="px-4 pb-4 text-gray-300 text-sm md:text-base">
                  <p>This is the answer content for: {faq}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
