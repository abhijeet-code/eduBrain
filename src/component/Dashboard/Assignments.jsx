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
        return <div className="text-white p-10 mt-10">Loading assignments...</div>;
    }

    return (
        <div className="w-full p-4 md:p-6 lg:p-8">
        <div className="mt-10 md:mt-20 min-h-[200px] w-full max-w-7xl mx-auto rounded-xl border border-solid border-[#1545c2] bg-[#0c0c0d] p-6 md:p-10 flex flex-col justify-start">
          <h1 className="text-4xl font-semibold text-[#0356ff] mb-8">Assignments</h1>

                {assignmentsByCourse.length > 0 ? (
                    <div className="space-y-8">
                        {assignmentsByCourse.map(courseGroup => (
                            <div key={courseGroup.courseId}>
                                <h2 className="text-2xl font-semibold text-white mb-4 border-b-2 border-blue-800 pb-2">
                                    {courseGroup.courseTitle}
                                </h2>
                                <div className="space-y-6">
                                    {courseGroup.assignments.map(assignment => (
                                        <div key={assignment._id} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-xl text-white">{assignment.title}</h3>
                                                <span className={`px-3 py-1 text-sm rounded-full ${
                                                    assignment.submissionStatus === 'Submitted' ? 'bg-yellow-500/20 text-yellow-300' :
                                                    assignment.submissionStatus === 'Evaluated' ? 'bg-green-500/20 text-green-300' :
                                                    'bg-gray-500/20 text-gray-300'
                                                }`}>
                                                    {assignment.submissionStatus}
                                                </span>
                                            </div>
                                            
                                            <button onClick={() => handleViewTask(assignment._id)} className="text-blue-400 hover:text-blue-300 mb-4">
                                                View Task &rarr;
                                            </button>

                                            <div className="flex gap-2">
                                                <input
                                                    type="url"
                                                    placeholder="Paste your submission link here (e.g., Google Doc, GitHub)"
                                                    value={submissionLinks[assignment._id] || assignment.submittedLink}
                                                    onChange={(e) => handleLinkChange(assignment._id, e.target.value)}
                                                    className="flex-grow bg-gray-700 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    disabled={assignment.submissionStatus === 'Evaluated'}
                                                />
                                                <button 
                                                    onClick={() => handleSubmit(assignment._id)} 
                                                    className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed"
                                                    disabled={assignment.submissionStatus === 'Evaluated'}
                                                >
                                                    Submit
                                                </button>
                                            </div>

                                            {assignment.feedback && (
                                                <div className="mt-4 p-3 bg-gray-700/50 border border-gray-600 rounded-md">
                                                    <p className="font-semibold text-white mb-1">Feedback:</p>
                                                    <p className="text-gray-300 whitespace-pre-wrap">{assignment.feedback}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-xl text-zinc-400 font-normal">You have no assignments for your enrolled courses.</p>
                )}
            </div>
        </div>
    );
};

export default Assignments;