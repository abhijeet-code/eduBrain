import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const imageMap = {
  'Power BI': "https://api.builder.io/api/v1/image/assets/TEMP/3427d9bbfceb5b86d68d1d1d11dbebb3341ec001?width=572",
  'Data Analytics': "https://api.builder.io/api/v1/image/assets/TEMP/d8c500523d95625c414b2769a6124c54c8e77d8a?width=572",
  'Machine Learning': "https://api.builder.io/api/v1/image/assets/TEMP/8640b6b21eb4910ec9ce9c96d48cd8182d207fcf?width=572",
  'Full Stack Development': "https://api.builder.io/api/v1/image/assets/TEMP/315e4de77cbf9f7e7ff3602cf4a5ba61af1c6895?width=572",
  'UI/UX': "https://api.builder.io/api/v1/image/assets/TEMP/cadbefd3d5e5fd10273f44002af99d10d52602ed?width=572",
  'C++': "https://api.builder.io/api/v1/image/assets/TEMP/d9e01b38d697e8bd2d345db8b9175d13559966bd?width=572",
  'JAVA': "https://api.builder.io/api/v1/image/assets/TEMP/b673715d5a342cde324aa3f05461d17f01d7309c?width=572",
  '.NET': "https://api.builder.io/api/v1/image/assets/TEMP/145a094a8f7e2f26cc5998726e801db255416d8f?width=640",
  'Angular': "https://api.builder.io/api/v1/image/assets/TEMP/6baad2cd2bde0b2508450d8aaa1c3ba168e554e6?width=572",
  'DevOps': "https://api.builder.io/api/v1/image/assets/TEMP/07076cf557e9dd0438c66e26d80e63039723ea71?width=572",
  'PHP': "https://api.builder.io/api/v1/image/assets/TEMP/b11941507a77c1edd5cb86c8317cd22be03e4c0f?width=572",
  '': "/default-course.png",
};

const CourseCard = ({ course }) => {
  return (
    <article className="flex flex-col w-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div
        className="relative self-stretch w-full h-[180px] bg-cover bg-center bg-gray-50"
        style={{ backgroundImage: `url(${course.image})` }}
        role="img"
        aria-label={`Course thumbnail for ${course.title}`}
      />
      <div className="flex flex-col flex-grow items-start gap-4 p-5">
        <h3 className="text-lg font-semibold text-gray-800 leading-snug h-14 overflow-hidden line-clamp-2">
          {course.title}
        </h3>
        <div className="w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-medium text-gray-500">Progress</span>
            <span className="text-xs font-bold text-[#9411a8]">{course.progress}%</span>
          </div>
          <div
            className="w-full h-2 bg-gray-100 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={course.progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="h-full bg-[#9411a8] rounded-full transition-all duration-500"
              style={{ width: `${course.progress}%` }}
            />
          </div>
        </div>
        <Link
          to={`/courses/${course.id}`}
          className="w-full flex items-center justify-center py-2.5 bg-[#e0f2fe] text-[#0284c7] font-semibold rounded-lg hover:bg-[#bae6fd] transition-colors mt-auto"
        >
          Resume Learning
        </Link>
      </div>
    </article>
  );
};

export const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Not authenticated. Please log in.');
        setLoading(false);
        return;
      }
      try {
        const BASE_URL = import.meta.env.VITE_API_BASE_URL;
        const res = await fetch(`${BASE_URL}/api/courses/enrollments`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) {
          if (res.status === 401) throw new Error('Unauthorized. Please log in again.');
          if (res.status === 500) throw new Error('Server error. Please try again later.');
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        const enrichedCourses = data.map(course => ({
          ...course,
          image: imageMap[course.title] || '/default-course.png',
          progressWidth: `${(course.progress / 100) * 165}px`,
        }));
        setCourses(enrichedCourses);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEnrolledCourses();
  }, []);

  if (loading) {
    return <div className="text-text-secondary text-center py-10">Loading your courses...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">Error: {error}</div>;
  }

  if (courses.length === 0) {
    return (
      <div className="text-text-secondary text-center py-10">
        No courses enrolled yet. <Link to="/courses" className="text-[#9411a8] font-medium hover:underline">Browse courses</Link>
      </div>
    );
  }

  return (
    <div className="w-full p-6 md:p-10">
      <div className="w-full max-w-[1060px] mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#9411a8] mb-2">
            My Courses
          </h1>
          <p className="text-base md:text-lg text-text-secondary">
            Continue where you left off.
          </p>
        </div>

        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="Course list"
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </section>
      </div>
    </div>
  );
};