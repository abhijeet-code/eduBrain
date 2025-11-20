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
    <div className="w-full p-6 md:p-10">
      <div className="w-full max-w-[1060px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#9411a8] mb-2">
            My Certificates
          </h1>
          <p className="text-base md:text-lg text-text-secondary">
            View and download your course completion certificates.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden p-6 flex flex-col hover:shadow-md transition-shadow"
            >
              {/* Certificate Image */}
              <div className="rounded-xl w-full overflow-hidden mb-4 bg-gray-50 border border-gray-100">
                <img
                  src="/certificate.png"
                  alt="Certificate"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Certificate Info */}
              <div className="flex flex-col items-start">
                <h3 className="font-semibold text-gray-800 text-lg mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Issued: {cert.issuedDate}
                </p>

                <button className="w-full bg-[#e0f2fe] text-[#0284c7] hover:bg-[#bae6fd] py-2.5 px-4 rounded-lg font-semibold transition-colors mb-3 text-sm shadow-sm">
                  View/Download Certificate
                </button>

                <p className="text-gray-400 text-xs break-all w-full text-center">
                  ID: {cert.certificateId}
                </p>
              </div>
            </div>
          ))}
        </div>


        {/* FAQ Section */}
        <div className="mb-8">
          <div className="inline-block bg-[#9411a8]/10 border border-[#9411a8]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#9411a8] font-semibold text-sm">FAQ</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#9411a8]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between cursor-pointer p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-gray-800 font-medium text-base">
                  {faq}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-colors ${expandedFAQ === index ? 'bg-[#9411a8]/10' : 'bg-gray-100'}`}>
                  <Plus
                    className={`w-5 h-5 transition-transform duration-200 ${expandedFAQ === index ? 'rotate-45 text-[#9411a8]' : 'text-gray-500'}`}
                  />
                </div>
              </button>

              {expandedFAQ === index && (
                <div className="px-5 pb-5 text-gray-600 text-base border-t border-gray-50 pt-3">
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
