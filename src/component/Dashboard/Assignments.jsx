// import React from "react";

// const Assignments = () => (
//   <div className="w-full flex bg-transparent">
//     <div className="mt-20 min-h-[200px] w-[1080px] rounded-[12px] border border-solid border-[#1545c2] bg-[#0c0c0d] p-10 flex flex-col justify-start">
//       <h1 className="text-4xl font-semibold text-[#0356ff] mb-8 leading-none">Assignments</h1>
//       <p className="text-xl text-[#b9b9b9] font-normal">Track and submit your course assignments.</p>
//     </div>
//   </div>
// );

// export default Assignments;

import React, { useState, useEffect } from 'react';

const Assignments = () => {
    // State to hold the assignments, grouped by course
    const [assignmentsByCourse, setAssignmentsByCourse] = useState([]);
    // State to manage the input field for each submission link
    const [submissionLinks, setSubmissionLinks] = useState({});
    // Loading state
    const [loading, setLoading] = useState(true);
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    // Function to fetch assignment data, reusable after submission
    const fetchAssignments = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setLoading(false);
            return;
        }
        try {
            const res = await fetch(`${BASE_URL}/api/assignments/my-assignments`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.msg || 'Failed to fetch assignments.');
            }
            const data = await res.json();
            setAssignmentsByCourse(data);
        } catch (error) {
            console.error("Fetch Assignments Error:", error);
            alert(error.message); // Use alert for user-facing errors
        } finally {
            setLoading(false);
        }
    };

    // Fetch the data when the component first loads
    useEffect(() => {
        fetchAssignments();
    }, []);

    // Handler to view the assignment task
    const handleViewTask = async (assignmentId) => {
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`${BASE_URL}/api/assignments/${assignmentId}/view`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.msg || 'Could not get assignment link.');
            }
            const data = await res.json();
            window.open(data.url, '_blank'); // Open the secure S3 link in a new tab
        } catch (error) {
            console.error("View Task Error:", error);
            alert(error.message);
        }
    };

    // Handler to update the link in our state as the user types
    const handleLinkChange = (assignmentId, value) => {
        setSubmissionLinks(prev => ({
            ...prev,
            [assignmentId]: value
        }));
    };

    // Handler to submit the assignment link
    const handleSubmit = async (assignmentId) => {
        const token = localStorage.getItem('token');
        const link = submissionLinks[assignmentId];

        if (!link || !link.trim()) {
            alert('Please enter a valid link to submit.');
            return;
        }

        try {
            const res = await fetch(`${BASE_URL}/api/submissions/${assignmentId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ submittedLink: link })
            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.msg || 'Submission failed.');
            }
            alert('Submission successful!');
            fetchAssignments(); // Re-fetch assignments to show the updated status
        } catch (error) {
            console.error("Submit Error:", error);
            alert(error.message);
        }
    };

    if (loading) {
        return <div className="text-text-secondary p-10 mt-10">Loading assignments...</div>;
    }

    return (
        <div className="w-full p-6 md:p-10">
            <div className="w-full max-w-[1060px] mx-auto">
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#9411a8] mb-2">Assignments</h1>
                    <p className="text-base md:text-lg text-text-secondary">Track and submit your course assignments.</p>
                </div>

                {assignmentsByCourse.length > 0 ? (
                    <div className="space-y-8">
                        {assignmentsByCourse.map(courseGroup => (
                            <div key={courseGroup.courseId} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h2 className="text-2xl font-semibold text-[#9411a8] mb-6 border-b border-gray-100 pb-4">
                                    {courseGroup.courseTitle}
                                </h2>
                                <div className="space-y-6">
                                    {courseGroup.assignments.map(assignment => (
                                        <div key={assignment._id} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                                                <h3 className="text-xl font-medium text-gray-800">{assignment.title}</h3>
                                                <span className={`px-4 py-1.5 text-sm font-medium rounded-full ${assignment.submissionStatus === 'Submitted' ? 'bg-yellow-100 text-yellow-700' :
                                                        assignment.submissionStatus === 'Evaluated' ? 'bg-green-100 text-green-700' :
                                                            'bg-gray-200 text-gray-600'
                                                    }`}>
                                                    {assignment.submissionStatus}
                                                </span>
                                            </div>

                                            <button onClick={() => handleViewTask(assignment._id)} className="text-[#9411a8] hover:text-[#7a0e8a] font-medium mb-6 flex items-center gap-2 transition-colors">
                                                View Task <span>&rarr;</span>
                                            </button>

                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <input
                                                    type="url"
                                                    placeholder="Paste your submission link here (e.g., Google Doc, GitHub)"
                                                    value={submissionLinks[assignment._id] || assignment.submittedLink}
                                                    onChange={(e) => handleLinkChange(assignment._id, e.target.value)}
                                                    className="flex-grow bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8] transition-all placeholder:text-gray-400"
                                                    disabled={assignment.submissionStatus === 'Evaluated'}
                                                />
                                                <button
                                                    onClick={() => handleSubmit(assignment._id)}
                                                    className="bg-[#e0f2fe] text-[#0284c7] font-semibold py-3 px-8 rounded-lg hover:bg-[#bae6fd] transition-colors disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                                                    disabled={assignment.submissionStatus === 'Evaluated'}
                                                >
                                                    Submit
                                                </button>
                                            </div>

                                            {assignment.feedback && (
                                                <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                                                    <p className="font-semibold text-[#9411a8] mb-2">Feedback:</p>
                                                    <p className="text-gray-600 whitespace-pre-wrap leading-relaxed">{assignment.feedback}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center">
                        <p className="text-xl text-gray-500">You have no assignments for your enrolled courses.</p>
                    </div>
                )}
            </div>
        </div>
    );
};


export default Assignments;