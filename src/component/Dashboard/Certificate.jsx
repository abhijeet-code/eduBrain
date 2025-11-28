import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';

export default function MyCertificates() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("Student Name"); // Default name
  const { showToast } = useToast(); // Assuming you have this hook available

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const BASE_URL = import.meta.env.VITE_API_BASE_URL;

        // 1. Fetch User Profile for Name
        const profileRes = await fetch(`${BASE_URL}/api/profile/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (profileRes.ok) {
          const profileData = await profileRes.json();
          if (profileData.fullName) setUserName(profileData.fullName);
        } else {
          // Fallback to auth user if profile incomplete
          const authRes = await fetch(`${BASE_URL}/api/auth/user`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (authRes.ok) {
            const authData = await authRes.json();
            if (authData.name) setUserName(authData.name);
          }
        }

        // 2. Fetch Enrollments
        const res = await fetch(`${BASE_URL}/api/courses/enrollments`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          // Filter for completed courses (100% progress)
          const completedCourses = data.filter(course => course.progress === 100);

          // Map to certificate format
          const certs = completedCourses.map(course => ({
            id: course.id,
            title: `${course.title} Completion`,
            courseTitle: course.title,
            issuedDate: course.certificateIssuedAt
              ? new Date(course.certificateIssuedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
              : (course.enrollmentDate ? new Date(course.enrollmentDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'N/A'),
            certificateId: course.certificateId || "Pending Generation"
          }));
          setCertificates(certs);
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        showToast("Failed to load certificates", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDownload = async (courseId, title) => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      showToast("Generating certificate...", "info");
      const BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const res = await fetch(`${BASE_URL}/api/certificates/download/${courseId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.msg || "Download failed");
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Certificate-${title.replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      showToast("Certificate downloaded successfully!", "success");
    } catch (error) {
      console.error("Download error:", error);
      showToast(error.message, "error");
    }
  };

  const faqs = [
    {
      question: "What happens if I don't complete all the assignments?",
      answer: "To receive your course completion certificate, you must complete 100% of the course requirements, including all lectures and assignments. Incomplete assignments will prevent certificate issuance. However, you can complete pending assignments at any time before requesting your certificate, as there's no time limit for course completion."
    },
    {
      question: "How do I know my assignments have been verified?",
      answer: "Once your assignments are submitted, our instructors will review and verify them within 3-5 business days. You'll receive an email notification when verification is complete. You can also check your assignment status in the 'My Assignments' section of your dashboard, where verified assignments will show a green checkmark with the verification date."
    },
    {
      question: "Can I still get a certificate if I skip some course content?",
      answer: "No, certificates are only awarded upon 100% course completion. This includes watching all lecture videos, completing all assignments, and finishing any quizzes or projects. Your dashboard progress tracker must show 100% before you can download your certificate. This ensures that the certificate truly reflects your comprehensive understanding of the course material."
    },
    {
      question: "How long does it take to receive the certificate after verification?",
      answer: "Your certificate is generated automatically once you reach 100% course completion and all assignments are verified. After reaching 100%, you can immediately download your certificate from the course page or this certificates section. The certificate is available instantly - no waiting period required!"
    }
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
        {loading ? (
          <div className="text-center py-10 text-gray-500">Loading certificates...</div>
        ) : certificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden p-6 flex flex-col hover:shadow-md transition-shadow"
              >
                {/* Certificate Preview Card */}
                <div className="relative rounded-xl w-full aspect-[1.4/1] overflow-hidden mb-4 bg-gray-50 border border-gray-100 group cursor-pointer" onClick={() => handleDownload(cert.id, cert.courseTitle)}>
                  {/* Background Image */}
                  <img
                    src="/dum.png"
                    alt="Certificate Preview"
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay Content - Simulating a real certificate */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    {/* Course Title Overlay */}
                    <h4 className="font-serif font-bold text-[#1f2937] text-xs sm:text-sm md:text-base mb-1 drop-shadow-sm">
                      {cert.courseTitle}
                    </h4>

                    {/* User Name Overlay */}
                    <p className="font-cursive text-[#9411a8] text-sm sm:text-base md:text-lg font-bold mb-1 italic">
                      {userName}
                    </p>

                    {/* Date Overlay */}
                    <p className="text-[10px] text-gray-600 mt-2 font-medium">
                      Issued: {cert.issuedDate}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-[#9411a8] shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-all">
                      Click to Download
                    </div>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="flex flex-col items-start">
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    Issued: {cert.issuedDate}
                  </p>

                  <button
                    onClick={() => handleDownload(cert.id, cert.courseTitle)}
                    className="w-full bg-[#e0f2fe] text-[#0284c7] hover:bg-[#bae6fd] py-2.5 px-4 rounded-lg font-semibold transition-colors mb-3 text-sm shadow-sm"
                  >
                    View/Download Certificate
                  </button>

                  <p className="text-gray-400 text-xs break-all w-full text-center">
                    ID: {cert.certificateId}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-gray-50 rounded-2xl mb-12 border border-gray-100">
            <p className="text-gray-600 mb-2">No certificates earned yet.</p>
            <p className="text-sm text-gray-500">Complete a course to earn your first certificate!</p>
          </div>
        )}


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
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-colors ${expandedFAQ === index ? 'bg-[#9411a8]/10' : 'bg-gray-100'}`}>
                  <Plus
                    className={`w-5 h-5 transition-transform duration-200 ${expandedFAQ === index ? 'rotate-45 text-[#9411a8]' : 'text-gray-500'}`}
                  />
                </div>
              </button>

              {expandedFAQ === index && (
                <div className="px-5 pb-5 text-gray-600 text-base border-t border-gray-50 pt-3">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
