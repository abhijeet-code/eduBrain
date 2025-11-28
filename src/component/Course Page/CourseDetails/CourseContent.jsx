import React, { useState, useRef, useEffect } from "react";
import { useToast } from "../../../contexts/ToastContext";

function CourseContent({ curriculum = [], courseId }) {
  const { showToast } = useToast();
  const [openSectionIndex, setOpenSectionIndex] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [completedLectures, setCompletedLectures] = useState(new Set());
  const videoRef = useRef(null);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Fetch completed lectures on component mount
  useEffect(() => {
    const fetchCompletedLectures = async () => {
      const token = localStorage.getItem('token');
      if (!token || !courseId) return;

      try {
        // Try to fetch enrollment progress
        const res = await fetch(`${BASE_URL}/api/enrollments/${courseId}/progress`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (res.ok) {
          const data = await res.json();
          // Assuming the response has a completedLectures array
          if (data.completedLectures && Array.isArray(data.completedLectures)) {
            setCompletedLectures(new Set(data.completedLectures));
          }
        } else {
          // If endpoint doesn't exist, silently continue with empty set
          console.log("Could not fetch completed lectures, starting fresh");
        }
      } catch (error) {
        console.log("Could not fetch completed lectures:", error);
      }
    };

    fetchCompletedLectures();
  }, [courseId, BASE_URL]);

  // Handle video end event
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement || !currentVideo) return;

    const handleVideoEnd = () => {
      console.log(`Video ended: ${currentVideo.lectureId}`);
      handleMarkLectureComplete(currentVideo.lectureId);
    };

    videoElement.addEventListener('ended', handleVideoEnd);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, [currentVideo]);

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
      setCurrentVideo({ url: data.url, lectureId: lectureId });

      // Scroll to video player
      setTimeout(() => {
        const videoPlayer = document.getElementById('inline-video-player');
        if (videoPlayer) {
          videoPlayer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 100);

    } catch (error) {
      showToast(error.message, "error");
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
        // Update local state immediately for better UX
        setCompletedLectures(prev => new Set([...prev, lectureId]));
      }
    } catch (error) {
      console.error("Error marking lecture complete:", error);
    }
  };

  const handleCloseVideo = () => {
    setCurrentVideo(null);
  };

  return (
    <>
      <section className="p-8 mt-10 w-full rounded-lg border border-solid border-gray-100 max-md:px-5 max-md:max-w-full">
        <header>
          <h2 className="text-3xl font-semibold leading-none text-[#9411a8]">Course content</h2>
        </header>

        {/* Inline Video Player */}
        {currentVideo && (
          <div id="inline-video-player" className="my-6 bg-black rounded-lg overflow-hidden shadow-lg">
            <div className="relative">
              <button
                onClick={handleCloseVideo}
                className="absolute top-3 right-3 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                aria-label="Close video"
              >
                ✕
              </button>
              <video
                ref={videoRef}
                controls
                autoPlay
                src={currentVideo.url}
                className="w-full max-h-[500px]"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        <div className="flex flex-col items-start mt-5 w-full text-lg leading-snug text-gray-500 max-md:max-w-full">
          {curriculum.map((section, sectionIdx) => (
            <div key={section._id || sectionIdx} className="w-full mb-4 border-b border-gray-100 pb-2">
              <button
                onClick={() => handleToggle(sectionIdx)}
                className="flex justify-between items-center w-full py-2 px-2 font-bold text-xl text-gray-800 hover:text-[#9411a8] transition-colors"
              >
                <span>{section.title}</span>
                <span>{openSectionIndex === sectionIdx ? '-' : '+'}</span>
              </button>
              {openSectionIndex === sectionIdx && (
                <div className="pl-6 pr-4 pb-4 text-gray-600 animate-fade-in">
                  {section.lectures.map((lecture) => {
                    const isCompleted = completedLectures.has(lecture._id);
                    const isCurrentlyPlaying = currentVideo?.lectureId === lecture._id;

                    return (
                      <div
                        key={lecture._id}
                        className={`flex items-center justify-between py-2 ${isCurrentlyPlaying ? 'bg-purple-50 px-2 rounded' : ''}`}
                      >
                        <div className="flex items-center gap-3">
                          {isCompleted ? (
                            // Green checkmark for completed lectures
                            <svg
                              className="w-5 h-5 text-green-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              aria-label="Completed"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ) : (
                            // Play icon for incomplete lectures
                            <img
                              src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/d582b0953e4886ffba2ffd8bad3aa9a089950569?placeholderIfAbsent=true"
                              className="object-contain shrink-0 w-5 aspect-square opacity-60"
                              alt="play icon"
                            />
                          )}
                          <span className={isCompleted ? 'text-gray-800 font-medium' : ''}>
                            {lecture.title}
                          </span>
                          {isCurrentlyPlaying && (
                            <span className="text-xs text-[#9411a8] font-semibold">Now Playing</span>
                          )}
                        </div>
                        {lecture.s3VideoKey && (
                          <button
                            onClick={() => handlePlayVideo(lecture._id)}
                            className="text-[#9411a8] hover:text-[#7a0e8a] font-medium text-sm"
                          >
                            {isCurrentlyPlaying ? 'Playing...' : 'Play Video'}
                          </button>
                        )}
                      </div>
                    );
                  })}
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