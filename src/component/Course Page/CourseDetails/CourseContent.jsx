// import React, { useState,useRef, useEffect } from "react";

// // A simple Video Player Modal component
// const VideoPlayerModal = ({ lectureId, videoUrl, onClose, onVideoEnded }) => (
//   <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
//     <div className="relative w-full max-w-4xl">
//       <button onClick={onClose} className="absolute -top-10 right-0 text-white text-3xl font-bold">&times;</button>
//       <video controls autoPlay src={videoUrl} className="w-full">
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   </div>
// );

import React, { useState, useRef, useEffect } from "react"; // 1. Import hooks

const VideoPlayerModal = ({ lectureId, videoUrl, onClose, onVideoEnded }) => {
  const videoRef = useRef(null); // Ref to access the <video> element

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // --- Event Handler for Video End ---
    const handleVideoEnd = () => {
      console.log(`Video ended: ${lectureId}`);
      if (onVideoEnded) {
        onVideoEnded(lectureId);
      }
    };

    //event listener
    videoElement.addEventListener('ended', handleVideoEnd);

    // --- Cleanup ---
    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, [videoUrl, lectureId, onVideoEnded]); // Dependencies for the effect

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
      <div className="relative w-full max-w-4xl">
        <button onClick={onClose} className="absolute -top-10 right-0 text-white text-3xl font-bold">&times;</button>
        <video ref={videoRef} controls autoPlay src={videoUrl} className="w-full">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};


function CourseContent({ curriculum = [], courseId }) {
  const [openSectionIndex, setOpenSectionIndex] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(null);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleToggle = (idx) => {
    setOpenSectionIndex(openSectionIndex === idx ? null : idx);
  };

  const handlePlayVideo = async (lectureId) => {
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${BASE_URL}/api/courses/${courseId}/lectures/${lectureId}/signed-url`, {
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (!res.ok) {
        throw new Error('Failed to get video URL. You may not have access to this course.');
      }
      
      const data = await res.json();
      setCurrentVideo({url : data.url, lectureId: lectureId});
      
    } catch (error) {
      alert(error.message);
    }
  };

  const handleMarkLectureComplete = async (lectureId) => {
    const token = localStorage.getItem('token');
    if (!token || !courseId || !lectureId) return;

    try {
      const res = await fetch(`${BASE_URL}/api/enrollments/complete-lecture`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ courseId, lectureId })
      });
      if (!res.ok) {
         console.error("Failed to mark lecture complete on backend.");
      } else {
         console.log("Lecture marked complete:", lectureId);
      }
    } catch (error) {
      console.error("Error marking lecture complete:", error);
      alert(error.message);
    }
  };

  return (
    <>
      {currentVideo &&( <VideoPlayerModal 
          lectureId={currentVideo.lectureId}
          videoUrl={currentVideo.url}
          onClose={() => setCurrentVideo(null)}
          onVideoEnded={handleMarkLectureComplete} // Pass the function
        />
      )}
      
      <section className="p-8 mt-10 w-full rounded-lg border border-solid border-zinc-800 max-md:px-5 max-md:max-w-full">
        <header>
          <h2 className="text-3xl font-semibold leading-none text-blue-600">Course content</h2>
        </header>
        <div className="flex flex-col items-start mt-5 w-full text-lg leading-snug text-zinc-400 max-md:max-w-full">
          {curriculum.map((section, sectionIdx) => (
            <div key={section._id || sectionIdx} className="w-full mb-4 border-b border-zinc-800 pb-2">
              <button onClick={() => handleToggle(sectionIdx)} className="flex justify-between items-center w-full py-2 px-2 font-bold text-xl text-white">
                <span>{section.title}</span>
                <span>{openSectionIndex === sectionIdx ? '-' : '+'}</span>
              </button>
              {openSectionIndex === sectionIdx && (
                <div className="pl-6 pr-4 pb-4 text-zinc-400 animate-fade-in">
                  {section.lectures.map((lecture) => (
                    // THE FIX IS HERE: We use `lecture._id` for the key.
                    <div key={lecture._id} className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <img src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/d582b0953e4886ffba2ffd8bad3aa9a089950569?placeholderIfAbsent=true" className="object-contain shrink-0 w-5 aspect-square" alt="play icon" />
                        <span>{lecture.title}</span>
                      </div>
                      {lecture.s3VideoKey && (
                        <button onClick={() => handlePlayVideo(lecture._id)} className="text-blue-400 hover:text-blue-300">
                          Play Video
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default CourseContent;