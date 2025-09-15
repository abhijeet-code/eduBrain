import React, { useState, useEffect } from "react";

// Initial state structure matching the backend model
const initialResumeState = {
  header: {
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    linkedIn: "",
    portfolio: "",
  },
  summary: "",
  experience: [],
  education: [],
  projects: [],
  skills: [],
  achievements: [],
};

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState(initialResumeState);
  const [currentSkill, setCurrentSkill] = useState("");
  const [currentAchievement, setCurrentAchievement] = useState("");
  const [loading, setLoading] = useState(true);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // --- 1. DATA FETCHING ---
  useEffect(() => {
    const fetchResume = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const res = await fetch(`${BASE_URL}/api/resume/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          // Ensure all fields exist to prevent errors
          setResumeData({ ...initialResumeState, ...data });
        } else {
          console.log("No existing resume found. Ready to create one.");
        }
      } catch (error) {
        console.error("Failed to fetch resume:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchResume();
  }, []);

  // --- 2. EVENT HANDLERS ---

  // Generic handler for simple fields (header, summary)
  const handleChange = (section, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };
  
  // Handler for nested arrays (experience, education)
  const handleArrayChange = (section, index, field, value) => {
      const newArray = [...resumeData[section]];
      newArray[index][field] = value;
      setResumeData(prev => ({ ...prev, [section]: newArray }));
  };
  
  // Add item to an array
  const addArrayItem = (section, newItem) => {
      setResumeData(prev => ({ ...prev, [section]: [...prev[section], newItem] }));
  };

  // Remove item from an array
  const removeArrayItem = (section, index) => {
      setResumeData(prev => ({ ...prev, [section]: prev[section].filter((_, i) => i !== index) }));
  };

  // Skill-specific handlers
  const addSkill = () => {
    if (currentSkill && !resumeData.skills.includes(currentSkill)) {
      setResumeData((prev) => ({
        ...prev,
        skills: [...prev.skills, currentSkill],
      }));
      setCurrentSkill("");
    }
  };

  const removeSkill = (index) => {
    removeArrayItem('skills', index);
  };

   // Achievement handlers
   const addAchievement = () => {
    if (currentAchievement && !resumeData.achievements.includes(currentAchievement)) {
      setResumeData((prev) => ({
        ...prev,
        achievements: [...prev.achievements, currentAchievement],
      }));
      setCurrentAchievement("");
    }
  };
  const removeAchievement = (index) => {
    removeArrayItem('achievements', index);
  };

  // --- 3. SAVE FUNCTION ---
  const handleSaveResume = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${BASE_URL}/api/resume`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(resumeData),
      });
      if (res.ok) {
        alert("Resume saved successfully!");
        const savedData = await res.json();
        setResumeData({ ...initialResumeState, ...savedData });
      } else {
        alert("Failed to save resume.");
      }
    } catch (error) {
      console.error("Error saving resume:", error);
      alert("An error occurred while saving.");
    }
  };

  const handleDownloadPDF = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${BASE_URL}/api/resume/download`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to download resume');
      }

      // Convert the response to a blob (binary large object)
      const blob = await res.blob();
      
      // Create a temporary URL for the blob
      const url = window.URL.createObjectURL(blob);
      
      // Create a temporary link element to trigger the download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf'; // The default filename
      document.body.appendChild(a);
      a.click();
      
      // Clean up by removing the link and revoking the URL
      a.remove();
      window.URL.revokeObjectURL(url);

    } catch (error) {
      console.error("Download error:", error);
      alert("Could not download the resume.");
    }
  };

  if (loading) {
    return <div className="text-white mt-20">Loading Resume...</div>;
  }

  // --- 4. JSX RENDER ---
  return (
    <div className="w-full flex bg-transparent">
      <div className="mt-20 min-h-[200px] w-full max-w-4xl rounded-lg border border-solid border-[#1545c2] bg-[#0c0c0d] p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-semibold text-[#0356ff]">Resume Builder</h1>
          <div className="flex gap-4">
          <button onClick={handleDownloadPDF} className="bg-green-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-700 transition-colors">
              Download PDF
            </button>
          <button onClick={handleSaveResume} className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
            Save Resume
          </button>
        </div>
        </div>
        {/* -- Header Section -- */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Full Name" value={resumeData.header.fullName || ''} onChange={(e) => handleChange('header', 'fullName', e.target.value)} className="bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Email Address" value={resumeData.header.email || ''} onChange={(e) => handleChange('header', 'email', e.target.value)} className="bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="tel" placeholder="Phone Number" value={resumeData.header.phoneNumber || ''} onChange={(e) => handleChange('header', 'phoneNumber', e.target.value)} className="bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Address" value={resumeData.header.address || ''} onChange={(e) => handleChange('header', 'address', e.target.value)} className="bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="url" placeholder="LinkedIn Profile URL" value={resumeData.header.linkedIn || ''} onChange={(e) => handleChange('header', 'linkedIn', e.target.value)} className="bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="url" placeholder="Portfolio/Website URL" value={resumeData.header.portfolio || ''} onChange={(e) => handleChange('header', 'portfolio', e.target.value)} className="bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        {/* -- Summary Section -- */}
        <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Professional Summary</h2>
            <textarea placeholder="Write a brief summary about yourself..." value={resumeData.summary || ''} onChange={(e) => setResumeData(prev => ({...prev, summary: e.target.value}))} rows="4" className="w-full bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        {/* -- Work Experience Section -- */}
        <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Work Experience</h2>
            {resumeData.experience.map((exp, index) => (
                <div key={index} className="bg-gray-800/50 p-4 rounded-lg mb-4 border border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input type="text" placeholder="Job Title" value={exp.jobTitle || ''} onChange={e => handleArrayChange('experience', index, 'jobTitle', e.target.value)} className="bg-gray-700 text-white p-2 rounded-md" />
                        <input type="text" placeholder="Company" value={exp.company || ''} onChange={e => handleArrayChange('experience', index, 'company', e.target.value)} className="bg-gray-700 text-white p-2 rounded-md" />
                        <input type="text" placeholder="Location" value={exp.location || ''} onChange={e => handleArrayChange('experience', index, 'location', e.target.value)} className="bg-gray-700 text-white p-2 rounded-md" />
                        <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
                            <input type="date" placeholder="Start Date" value={exp.startDate ? exp.startDate.split('T')[0] : ''} onChange={e => handleArrayChange('experience', index, 'startDate', e.target.value)} className="bg-gray-700 text-white p-2 rounded-md" />
                            <input type="date" placeholder="End Date" value={exp.endDate ? exp.endDate.split('T')[0] : ''} onChange={e => handleArrayChange('experience', index, 'endDate', e.target.value)} className="bg-gray-700 text-white p-2 rounded-md" />
                        </div>
                    </div>
                    <textarea placeholder="Job Description..." value={exp.description || ''} onChange={e => handleArrayChange('experience', index, 'description', e.target.value)} rows="3" className="w-full bg-gray-700 text-white p-2 rounded-md mb-2" />
                    <button onClick={() => removeArrayItem('experience', index)} className="text-red-500 hover:text-red-400 font-semibold">Remove Experience</button>
                </div>
            ))}
            <button onClick={() => addArrayItem('experience', { jobTitle: '', company: '' })} className="bg-blue-600/50 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700/50 transition-colors">
              + Add Experience
            </button>
        </div>

        {/* -- Education Section -- */}
        <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Education</h2>
            {resumeData.education.map((edu, index) => (
                <div key={index} className="bg-gray-800/50 p-4 rounded-lg mb-4 border border-gray-700">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input type="text" placeholder="Degree (e.g., B.S. in Computer Science)" value={edu.degree || ''} onChange={e => handleArrayChange('education', index, 'degree', e.target.value)} className="bg-gray-700 text-white p-2 rounded-md" />
                        <input type="text" placeholder="Institution" value={edu.institution || ''} onChange={e => handleArrayChange('education', index, 'institution', e.target.value)} className="bg-gray-700 text-white p-2 rounded-md" />
                         <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
                            <input type="date" placeholder="Start Date" value={edu.startDate ? edu.startDate.split('T')[0] : ''} onChange={e => handleArrayChange('education', index, 'startDate', e.target.value)} className="bg-gray-700 text-white p-2 rounded-md" />
                            <input type="date" placeholder="End Date" value={edu.endDate ? edu.endDate.split('T')[0] : ''} onChange={e => handleArrayChange('education', index, 'endDate', e.target.value)} className="bg-gray-700 text-white p-2 rounded-md" />
                        </div>
                    </div>
                    <button onClick={() => removeArrayItem('education', index)} className="text-red-500 hover:text-red-400 font-semibold">Remove Education</button>
                </div>
            ))}
            <button onClick={() => addArrayItem('education', { degree: '', institution: '' })} className="bg-blue-600/50 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700/50 transition-colors">
              + Add Education
            </button>
        </div>
        {/* -- NEW: Projects Section -- */}
        <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Projects</h2>
            {resumeData.projects.map((proj, index) => (
                <div key={index} className="bg-gray-800/50 p-4 rounded-lg mb-4 border border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <input type="text" placeholder="Project Name" value={proj.projectName || ''} onChange={e => handleArrayChange('projects', index, 'projectName', e.target.value)} className="bg-gray-700 text-white p-2 rounded-md" />
                        <input type="url" placeholder="Project Link (e.g., GitHub, Live Demo)" value={proj.link || ''} onChange={e => handleArrayChange('projects', index, 'link', e.target.value)} className="bg-gray-700 text-white p-2 rounded-md" />
                    </div>
                    <textarea placeholder="Project Description..." value={proj.description || ''} onChange={e => handleArrayChange('projects', index, 'description', e.target.value)} rows="3" className="w-full bg-gray-700 text-white p-2 rounded-md mb-2" />
                    <button onClick={() => removeArrayItem('projects', index)} className="text-red-500 hover:text-red-400 font-semibold">Remove Project</button>
                </div>
            ))}
            <button onClick={() => addArrayItem('projects', { projectName: '', description: '', link: '' })} className="bg-blue-600/50 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700/50 transition-colors">
              + Add Project
            </button>
        </div>

        {/* -- Skills and Expertise Section -- */}
        <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Skills and Expertise</h2>
            <div className="flex gap-2 mb-4">
                <input type="text" placeholder="Add a skill" value={currentSkill} onChange={(e) => setCurrentSkill(e.target.value)} className="flex-grow bg-gray-800 text-white p-2 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button onClick={addSkill} className="bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors">Add</button>
            </div>
            <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill, index) => (
                    <div key={index} className="bg-blue-500/20 text-blue-300 text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-2">
                        {skill}
                        <button onClick={() => removeSkill(index)} className="text-red-400 hover:text-red-300 font-bold">x</button>
                    </div>
                ))}
            </div>
        </div>

        {/* -- NEW: Achievements & Certifications Section -- */}
        <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Achievements & Certifications</h2>
            <div className="flex gap-2 mb-4">
                <input type="text" placeholder="Add an achievement or certification" value={currentAchievement} onChange={(e) => setCurrentAchievement(e.target.value)} className="flex-grow bg-gray-800 text-white p-2 rounded-md border border-gray-600" />
                <button onClick={addAchievement} className="bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600">Add</button>
            </div>
            <ul className="list-disc list-inside text-gray-300">
                {resumeData.achievements.map((ach, index) => (
                    <li key={index} className="mb-2 flex items-center gap-4">
                        <span>{ach}</span>
                        <button onClick={() => removeAchievement(index)} className="text-red-400 hover:text-red-300 font-bold text-xs">(remove)</button>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;