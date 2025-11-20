import React from 'react';
import {Link } from 'react-router-dom';
function CourseCard({ courseId, title, enrollmentDate, progress }) {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const handleCertificateDownload = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${BASE_URL}/api/certificates/download/${courseId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.msg || 'Failed to download certificate.');
      }

      // Handle the file download
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${title.replace(/\s+/g, '_')}_Certificate.pdf`; // e.g., Power_BI_Certificate.pdf
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error(error);
      alert(error.message); // Use alert as requested
    }
  };
  const formattedDate = enrollmentDate ? enrollmentDate.split('T')[0] : '';
  // Check if course is complete
  const isComplete = progress === 100;

  return (
    <div className="px-5 py-5 rounded-xl border border-gray-100 bg-white shadow-sm min-w-[300px] w-full max-w-[350px] flex flex-col hover:shadow-md transition-shadow duration-200">
      <h3 className="text-lg font-semibold leading-tight text-gray-800">
        {title}
      </h3>
      
      <div className="flex flex-col mt-4 w-full">
        {/* Enrollment Date */}
        <div className="flex gap-2 items-center text-sm text-gray-500 mb-3">
           {/* Simple Calendar Icon */}
           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#9411a8]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
           </svg>
          <span className="truncate">
            Enrolled on {formattedDate}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="flex gap-3 items-center w-full">
          <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#9411a8] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }} 
            />
          </div>
          <span className="text-sm font-bold text-gray-700 min-w-[3ch] text-right">
            {progress}%
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-5 w-full">
        {/* Resume Button (Light Blue) */}
        <Link
         to={`/courses/${courseId}`}
         className="flex-1 flex justify-center items-center px-4 py-2.5 rounded-lg bg-[#e0f2fe] text-[#0284c7] font-semibold hover:bg-[#bae6fd] transition-colors text-sm"
        >
          Resume
        </Link>

        {/* Certificate Button (Solid Purple) */}
        <button 
          onClick={handleCertificateDownload}
          disabled={!isComplete}
          className={`flex-1 flex justify-center items-center px-4 py-2.5 rounded-lg font-medium text-sm text-white transition-colors
            ${isComplete 
              ? 'bg-[#9411a8] hover:bg-[#7a0e8a] shadow-sm' 
              : 'bg-gray-300 cursor-not-allowed'}`
          }
        >
          Certificate
        </button>
      </div>
    </div>
  );
}
export default CourseCard;
