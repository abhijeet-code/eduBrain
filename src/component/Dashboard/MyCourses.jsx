import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const imageMap = {
  'Power BI': "https://api.builder.io/api/v1/image/assets/TEMP/3427d9bbfceb5b86d68d1d1d11dbebb3341ec001?width=572",
  'Data Analytics': "https://api.builder.io/api/v1/image/assets/TEMP/d8c500523d95625c414b2769a6124c54c8e77d8a?width=572",
  'Machine Learning': "https://api.builder.io/api/v1/image/assets/TEMP/8640b6b21eb4910ec9ce9c96d48cd8182d207fcf?width=572",
  'Full Stack Development': "https://api.builder.io/api/v1/image/assets/TEMP/315e4de77cbf9f7e7ff3602cf4a5ba61af1c6895?width=572",
  'UI/UX' : "https://api.builder.io/api/v1/image/assets/TEMP/cadbefd3d5e5fd10273f44002af99d10d52602ed?width=572",
  'C++':"https://api.builder.io/api/v1/image/assets/TEMP/d9e01b38d697e8bd2d345db8b9175d13559966bd?width=572",
  'JAVA':  "https://api.builder.io/api/v1/image/assets/TEMP/b673715d5a342cde324aa3f05461d17f01d7309c?width=572",
  '.NET':"https://api.builder.io/api/v1/image/assets/TEMP/145a094a8f7e2f26cc5998726e801db255416d8f?width=640",
  'Angular': "https://api.builder.io/api/v1/image/assets/TEMP/6baad2cd2bde0b2508450d8aaa1c3ba168e554e6?width=572",
  'DevOps': "https://api.builder.io/api/v1/image/assets/TEMP/07076cf557e9dd0438c66e26d80e63039723ea71?width=572",
  'PHP': "https://api.builder.io/api/v1/image/assets/TEMP/b11941507a77c1edd5cb86c8317cd22be03e4c0f?width=572",
  '': "/default-course.png",
};

const CourseCard = ({ course }) => {
  const progressWidthStyle = `${course.progress || 0}%`;
  return (
    <article className="flex flex-col w-[300px] items-center relative bg-[#0c0c0d] rounded-[6.93px] border-[0.87px] border-solid border-[#2d2d2d] shadow-[0px_0px_0px_transparent,0px_0px_0px_transparent,0px_8.66px_12.99px_-2.6px_#0000001a,0px_3.46px_5.19px_-3.46px_#0000001a]">
      <div
        className="relative self-stretch w-full h-[183.55px] rounded-[6.93px_6.93px_0px_0px] bg-cover bg-[50%_50%]"
        style={{ backgroundImage: `url(${course.image})` }}
        role="img"
        aria-label={`Course thumbnail for ${course.title}`}
      />
      <div className="flex flex-col items-start gap-[12.12px] px-[14.72px] py-[17.32px] relative self-stretch w-full flex-[0_0_auto]">
        <h3 className="relative w-[271.87px] mt-[-0.87px] mr-[-3.04px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[17.3px] tracking-[0] leading-[20.6px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
          {course.title}
        </h3>
        <div className="flex text-gray-400 flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
          <div
            className="relative self-stretch w-full h-1.5 bg-[#f1f2f5] rounded-[5px] overflow-hidden"
            role="progressbar"
            aria-valuenow={course.progress}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label={`Course progress: ${course.progress}% completed`}
          >
            <div
              className="h-1.5 bg-emerald-500 rounded-[5px]"
              style={{ width: course.progressWidth }}
            />
          </div>
          <div className="w-full flex justify-end mt-1">
            <span className="[font-family:'Roboto-Regular',Helvetica] font-normal text-variable-collection-color-dull-duplicate text-[10px] text-right tracking-[0] leading-[10px]">
              {course.progress || 0}% completed
            </span>
          </div>
        </div>
        {/* <button
          onClick={() => window.location.href = `/courses/${course.id}`} 
          className="flex items-center justify-center gap-[8.66px] px-[79.66px] py-[6.93px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[6.93px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        > */}
          <Link 
          to={`/courses/${course.id}`} 
          className="flex items-center justify-center gap-[8.66px] px-[79.66px] py-[6.93px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[6.93px] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          <span className="relative w-fit [font-family:'Roboto-Regular',Helvetica] font-normal text-[#000000] text-[13.9px] tracking-[0] leading-[20.8px] whitespace-nowrap">
            Resume Learning
          </span>
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
    return <div className="text-white text-center py-10">Loading your courses...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-10">Error: {error}</div>;
  }

  if (courses.length === 0) {
    return (
      <div className="text-white text-center py-10">
        No courses enrolled yet. <Link to="/courses" className="text-blue-500 underline">Browse courses</Link>
      </div>
    );
  }

  return (
    <main className="flex flex-col w-[1220px] items-start gap-[54px] p-10 relative rounded-[5px] mt-10 border border-solid border-[#1545c2]">
      <header className="inline-flex items-center justify-center gap-[19.51px] px-0 py-[19.51px] relative flex-[0_0_auto]">
        <h1 className="relative w-fit mt-[-3.90px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0356ff] text-[41.9px] tracking-[0] leading-[39.1px] whitespace-nowrap">
          My Courses
        </h1>
      </header>
      <section
        className="inline-flex items-center gap-[30px] relative flex-[0_0_auto] mr-[-20.00px]"
        aria-label="Course list"
      >
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </section>
    </main>
  );
};