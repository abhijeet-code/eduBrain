import React, { useState, useEffect } from 'react';
import StatsCard from './StatsCard';
import CourseCard from './CourseCard';
import { Link } from 'react-router-dom';

function MainContent() {

  const [userName, setUserName] = useState(''); // State to hold the user's name
  const [enrolledCourses, setEnrolledCourses] = useState([]); // State for courses
  const [loadingCourses, setLoadingCourses] = useState(true);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [stats, setStats] = useState({
    inProgress: 0,
    completed: 0,
    assignmentsDue: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setUserName('Guest');
      setLoadingCourses(false);
      return;
    }

    const fetchUserData = async () => {
      try {
        // Attempt 1: Fetch the name from the user's profile first.
        const profileRes = await fetch(`${BASE_URL}/api/profile/me`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (profileRes.ok) {
          const profileData = await profileRes.json();
          // If a profile exists and has a fullName, use it and stop here.
          if (profileData && profileData.fullName) {
            setUserName(profileData.fullName);
            return; // Success! Exit the function.
          }
        }

        // Attempt 2: If the profile fetch failed
        // fall back to the original user model name.
        const userRes = await fetch(`${BASE_URL}/api/auth/user`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (userRes.ok) {
          const userData = await userRes.json();
          setUserName(userData.name); // Set the name from the user model as a fallback
        } else {
          console.error("Failed to fetch any user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchCourseAndAssignmentStats = async () => {
      setLoadingCourses(true);
      try {
        // Fetch both sets of data in parallel
        const [courseRes, assignmentRes] = await Promise.all([
          fetch(`${BASE_URL}/api/courses/enrollments`, {
            headers: { 'Authorization': `Bearer ${token}` }
          }),
          fetch(`${BASE_URL}/api/assignments/my-assignments`, {
            headers: { 'Authorization': `Bearer ${token}` }
          })
        ]);

        // --- Process Course Data ---
        if (courseRes.ok) {
          const courseData = await courseRes.json();
          setEnrolledCourses(courseData); // Still need this for the "Enrolled Courses" section

          const inProgress = courseData.filter(c => c.progress < 100).length;
          const completed = courseData.filter(c => c.progress === 100).length;

          setStats(prevStats => ({
            ...prevStats,
            inProgress: inProgress,
            completed: completed
          }));
        } else {
          console.error("Failed to fetch enrolled courses");
        }

        // --- Process Assignment Data ---
        if (assignmentRes.ok) {
          const assignmentData = await assignmentRes.json();
          let dueCount = 0;
          for (const courseGroup of assignmentData) {
            for (const assignment of courseGroup.assignments) {
              if (assignment.submissionStatus === 'Not Submitted') {
                dueCount++;
              }
            }
          }
          setStats(prevStats => ({
            ...prevStats,
            assignmentsDue: dueCount
          }));
        } else {
          console.error("Failed to fetch assignment stats");
        }

      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      } finally {
        setLoadingCourses(false);
      }
    };

    const fetchEnrolledCourses = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/courses/enrollments`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.ok) {
          const data = await res.json();
          setEnrolledCourses(data);
        }
      } catch (error) {
        console.error("Failed to fetch enrolled courses:", error);
      } finally {
        setLoadingCourses(false);
      }
    };

    fetchUserData();
    fetchCourseAndAssignmentStats();
    fetchEnrolledCourses();
  }, [BASE_URL]);

  const dynamicStatsData = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/84760f8563df2663974692c6797060a23da089ab?placeholderIfAbsent=true",
      title: "Courses in progess",
      value: stats.inProgress.toString()
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/3014d9d5e571837bfd55bd4a01651dc8b2fa43c1?placeholderIfAbsent=true",
      title: "Completed Courses",
      value: stats.completed.toString()
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/7a8385022ed82c77561d82a6f68cd68e850bea45?placeholderIfAbsent=true",
      title: "Assignments Due",
      value: stats.assignmentsDue.toString()
    }
  ];

  return (
    <main className="w-full p-6 md:p-10">
      <div className="w-full max-w-[1060px] mx-auto">

        {/* Welcome Header */}
        <div className="mb-10">
          <h1 className="font-bold text-3xl md:text-4xl mb-2 text-gray-800">
            Welcome back, <span className="text-[#9411a8]">{userName || 'there'}</span>!
          </h1>
          <p className="text-base md:text-lg text-gray-500">
            Here's a snapshot of your learning journey.
          </p>
        </div>

        {/* Stats Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* You'll need to update StatsCard to use white bg and shadows */}
          {dynamicStatsData.map((stat, index) => (
            <StatsCard
              key={index}
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </section>

        {/* Enrolled Courses Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#9411a8] mb-6">
            Enrolled Courses
          </h2>
          <div className="flex flex-wrap gap-6">
            {loadingCourses ? (
              <p className="text-gray-500">Loading courses...</p>
            ) : enrolledCourses.length > 0 ? (
              enrolledCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  courseId={course.id}
                  title={course.title}
                  enrollmentDate={course.enrollmentDate}
                  progress={course.progress}
                // Remove className="bg-[rgba...]" logic, let CourseCard handle styling
                />
              ))
            ) : (
              <p className="text-gray-500">No courses enrolled yet.</p>
            )}
          </div>
        </section>

        {/* Explore Banner (Purple CTA) */}
        <section className="flex flex-col md:flex-row gap-6 items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex-1 flex flex-col gap-4 items-start">
            <h3 className="text-2xl font-bold text-gray-800">Ready to learn more?</h3>
            <p className="text-gray-500">Expand your skills with our wide range of courses.</p>
            <Link
              to={`/courses`}
              className="flex justify-center items-center px-8 py-3 text-white bg-[#9411a8] hover:bg-[#7a0e8a] rounded-lg font-semibold shadow-sm transition-colors"                   >
              Explore Courses
            </Link>
            <div className="flex gap-2 items-center text-gray-500 text-sm">
              {/* Icon */}
              <span className="font-medium">100% refund offer available</span>
            </div>
          </div>
          {/* Keep your illustration if it looks good on white, or replace it */}
          <img
            src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/9f9b0666d37ff816cb31b863197b02b6d79d6c54?placeholderIfAbsent=true"
            className="object-contain w-full md:w-1/2 max-w-[300px]"
            alt="Dashboard illustration"
          />
        </section>
      </div>
    </main>
  );
}

export default MainContent;
