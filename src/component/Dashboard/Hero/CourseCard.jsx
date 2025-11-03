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
    <div className="px-4 py-4 rounded-md border border-blue-600 border-solid bg-[#246bfd]/21  bg-opacity-10 min-w-60 w-[350px]">
      <h3 className="text-lg font-medium leading-5 text-white">
        {title}
      </h3>
      <div className="flex flex-col mt-3 w-full">
        <div className="flex gap-2 items-center self-start text-xs leading-5 text-blue-600">
          <img
            src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/72debafd6f9c76659075d6c0e3253f76838f5e0b?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
            alt=""
          />
          <span className="self-stretch my-auto text-blue-600 text-ellipsis w-[272px]">
            Enrolled on {formattedDate}
          </span>
        </div>
        <div className="flex gap-1.5 items-center mt-1.5 w-full">
          <div className="flex overflow-hidden flex-col flex-1 shrink items-start self-stretch my-auto bg-gray-100 rounded-md basis-0 min-w-60">
            <div
              className="flex shrink-0 h-1.5 bg-emerald-500 rounded-md"
              style={{ width: `${(progress / 100) * 165}px` }}
            />
          </div>
          <span className="self-stretch my-auto text-xs font-medium leading-none text-right text-white">
            {progress}%
          </span>
        </div>
      </div>
      <div className="flex gap-2.5 items-start mt-3 w-full text-base leading-tight whitespace-nowrap">
        <Link
         to={`/courses/${courseId}`}
         className="flex flex-1 shrink gap-2.5 justify-center items-center px-8 py-3 text-blue-600 rounded-md border border-blue-600 border-solid basis-0 min-h-[45px] max-md:px-5">
          <span className="self-stretch my-auto text-blue-600">
            Resume
          </span>
          <img
            src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/9098b40a75750f3b763bdd055f5779f789797781?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt=""
          />
        </Link>
        <button 
        onClick={handleCertificateDownload}
        disabled={!isComplete}
        className="flex flex-1 shrink gap-2.5 justify-center items-center px-8 py-3 text-white bg-blue-600 rounded-md basis-0 min-h-[45px] max-md:px-5">
          <span className="self-stretch my-auto">
            Certificate
          </span>
          <img
            src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/13e049a96a8e81e8f0d0cb12baf76de160c60c14?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
