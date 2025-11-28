import React, { useState, useEffect } from "react";
import { useToast } from "../../contexts/ToastContext";

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
  const { showToast } = useToast();
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
        showToast("Resume saved successfully!", "success");
        const savedData = await res.json();
        setResumeData({ ...initialResumeState, ...savedData });
      } else {
        showToast("Failed to save resume.", "error");
      }
    } catch (error) {
      console.error("Error saving resume:", error);
      showToast("An error occurred while saving.", "error");
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
      showToast("Could not download the resume.", "error");
    }
  };

  if (loading) {
    return <div className="text-text-secondary mt-20 text-center">Loading Resume...</div>;
  }

  // --- 4. JSX RENDER ---
  return (
    <div className="w-full p-6 md:p-10">
      <div className="w-full max-w-[1060px] mx-auto">

        {/* Top Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#9411a8] mb-2">Resume Builder</h1>
            <p className="text-text-secondary">Create and manage your professional resume.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button onClick={handleDownloadPDF} className="flex-1 md:flex-none bg-green-50 text-green-600 font-semibold py-2.5 px-6 rounded-lg hover:bg-green-100 transition-colors shadow-sm border border-green-200">
              Download PDF
            </button>
            <button onClick={handleSaveResume} className="flex-1 md:flex-none bg-[#e0f2fe] text-[#0284c7] font-semibold py-2.5 px-6 rounded-lg hover:bg-[#bae6fd] transition-colors shadow-sm">
              Save Resume
            </button>
          </div>
        </div>

        {/* -- Header Section -- */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
          <h2 className="text-xl font-semibold text-[#9411a8] mb-6 border-b border-gray-100 pb-4">Personal Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Full Name" value={resumeData.header.fullName || ''} onChange={(e) => handleChange('header', 'fullName', e.target.value)} className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8] transition-all" />
            <input type="email" placeholder="Email Address" value={resumeData.header.email || ''} onChange={(e) => handleChange('header', 'email', e.target.value)} className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8] transition-all" />
            <input type="tel" placeholder="Phone Number" value={resumeData.header.phoneNumber || ''} onChange={(e) => handleChange('header', 'phoneNumber', e.target.value)} className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8] transition-all" />
            <input type="text" placeholder="Address" value={resumeData.header.address || ''} onChange={(e) => handleChange('header', 'address', e.target.value)} className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8] transition-all" />
            <input type="url" placeholder="LinkedIn Profile URL" value={resumeData.header.linkedIn || ''} onChange={(e) => handleChange('header', 'linkedIn', e.target.value)} className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8] transition-all" />
            <input type="url" placeholder="Portfolio/Website URL" value={resumeData.header.portfolio || ''} onChange={(e) => handleChange('header', 'portfolio', e.target.value)} className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8] transition-all" />
          </div>
        </div>

        {/* -- Summary Section -- */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
          <h2 className="text-xl font-semibold text-[#9411a8] mb-6 border-b border-gray-100 pb-4">Professional Summary</h2>
          <textarea placeholder="Write a brief summary about yourself..." value={resumeData.summary || ''} onChange={(e) => setResumeData(prev => ({ ...prev, summary: e.target.value }))} rows="4" className="w-full bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8] transition-all" />
        </div>

        {/* -- Work Experience Section -- */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
          <h2 className="text-xl font-semibold text-[#9411a8] mb-6 border-b border-gray-100 pb-4">Work Experience</h2>
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl mb-6 border border-gray-100 relative group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Job Title" value={exp.jobTitle || ''} onChange={e => handleArrayChange('experience', index, 'jobTitle', e.target.value)} className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8]" />
                <input type="text" placeholder="Company" value={exp.company || ''} onChange={e => handleArrayChange('experience', index, 'company', e.target.value)} className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8]" />
                <input type="text" placeholder="Location" value={exp.location || ''} onChange={e => handleArrayChange('experience', index, 'location', e.target.value)} className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8]" />
                <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
                  <input type="date" placeholder="Start Date" value={exp.startDate ? exp.startDate.split('T')[0] : ''} onChange={e => handleArrayChange('experience', index, 'startDate', e.target.value)} className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8]" />
                  <input type="date" placeholder="End Date" value={exp.endDate ? exp.endDate.split('T')[0] : ''} onChange={e => handleArrayChange('experience', index, 'endDate', e.target.value)} className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8]" />
                </div>
              </div>
              <textarea placeholder="Job Description..." value={exp.description || ''} onChange={e => handleArrayChange('experience', index, 'description', e.target.value)} rows="3" className="w-full bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8] mb-2" />
              <button onClick={() => removeArrayItem('experience', index)} className="text-red-500 hover:text-red-600 text-sm font-medium mt-2">Remove Experience</button>
            </div>
          ))}
          <button onClick={() => addArrayItem('experience', { jobTitle: '', company: '' })} className="w-full py-3 border-2 border-dashed border-[#9411a8]/30 text-[#9411a8] font-semibold rounded-xl hover:bg-[#9411a8]/5 transition-colors flex items-center justify-center gap-2">
            <span>+</span> Add Experience
          </button>
        </div>

        {/* -- Education Section -- */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
          <h2 className="text-xl font-semibold text-[#9411a8] mb-6 border-b border-gray-100 pb-4">Education</h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl mb-6 border border-gray-100 relative group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Degree (e.g., B.S. in Computer Science)" value={edu.degree || ''} onChange={e => handleArrayChange('education', index, 'degree', e.target.value)} className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8]" />
                <input type="text" placeholder="Institution" value={edu.institution || ''} onChange={e => handleArrayChange('education', index, 'institution', e.target.value)} className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8]" />
                <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-4">
                  <input type="date" placeholder="Start Date" value={edu.startDate ? edu.startDate.split('T')[0] : ''} onChange={e => handleArrayChange('education', index, 'startDate', e.target.value)} className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8]" />
                  <input type="date" placeholder="End Date" value={edu.endDate ? edu.endDate.split('T')[0] : ''} onChange={e => handleArrayChange('education', index, 'endDate', e.target.value)} className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8]" />
                </div>
              </div>
              <button onClick={() => removeArrayItem('education', index)} className="text-red-500 hover:text-red-600 text-sm font-medium mt-2">Remove Education</button>
            </div>
          ))}
          <button onClick={() => addArrayItem('education', { degree: '', institution: '' })} className="w-full py-3 border-2 border-dashed border-[#9411a8]/30 text-[#9411a8] font-semibold rounded-xl hover:bg-[#9411a8]/5 transition-colors flex items-center justify-center gap-2">
            <span>+</span> Add Education
          </button>
        </div>
        {/* -- NEW: Projects Section -- */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
          <h2 className="text-xl font-semibold text-[#9411a8] mb-6 border-b border-gray-100 pb-4">Projects</h2>
          {resumeData.projects.map((proj, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl mb-6 border border-gray-100 relative group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Project Name" value={proj.projectName || ''} onChange={e => handleArrayChange('projects', index, 'projectName', e.target.value)} className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8]" />
                <input type="url" placeholder="Project Link (e.g., GitHub, Live Demo)" value={proj.link || ''} onChange={e => handleArrayChange('projects', index, 'link', e.target.value)} className="bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8]" />
              </div>
              <textarea placeholder="Project Description..." value={proj.description || ''} onChange={e => handleArrayChange('projects', index, 'description', e.target.value)} rows="3" className="w-full bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8] mb-2" />
              <button onClick={() => removeArrayItem('projects', index)} className="text-red-500 hover:text-red-600 text-sm font-medium mt-2">Remove Project</button>
            </div>
          ))}
          <button onClick={() => addArrayItem('projects', { projectName: '', description: '', link: '' })} className="w-full py-3 border-2 border-dashed border-[#9411a8]/30 text-[#9411a8] font-semibold rounded-xl hover:bg-[#9411a8]/5 transition-colors flex items-center justify-center gap-2">
            <span>+</span> Add Project
          </button>
        </div>

        {/* -- Skills and Expertise Section -- */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
          <h2 className="text-xl font-semibold text-[#9411a8] mb-6 border-b border-gray-100 pb-4">Skills and Expertise</h2>
          <div className="flex gap-3 mb-6">
            <input type="text" placeholder="Add a skill" value={currentSkill} onChange={(e) => setCurrentSkill(e.target.value)} className="flex-grow bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8]" />
            <button onClick={addSkill} className="bg-[#e0f2fe] text-[#0284c7] font-semibold py-2 px-6 rounded-lg hover:bg-[#bae6fd] transition-colors">Add</button>
          </div>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.map((skill, index) => (
              <div key={index} className="bg-[#9411a8]/10 text-[#9411a8] text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2 border border-[#9411a8]/20">
                {skill}
                <button onClick={() => removeSkill(index)} className="text-[#9411a8]/60 hover:text-[#9411a8] font-bold ml-1">×</button>
              </div>
            ))}
          </div>
        </div>

        {/* -- NEW: Achievements & Certifications Section -- */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-6">
          <h2 className="text-xl font-semibold text-[#9411a8] mb-6 border-b border-gray-100 pb-4">Achievements & Certifications</h2>
          <div className="flex gap-3 mb-6">
            <input type="text" placeholder="Add an achievement or certification" value={currentAchievement} onChange={(e) => setCurrentAchievement(e.target.value)} className="flex-grow bg-white text-gray-800 p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9411a8]/20 focus:border-[#9411a8]" />
            <button onClick={addAchievement} className="bg-[#e0f2fe] text-[#0284c7] font-semibold py-2 px-6 rounded-lg hover:bg-[#bae6fd] transition-colors">Add</button>
          </div>
          <ul className="space-y-3">
            {resumeData.achievements.map((ach, index) => (
              <li key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                <span className="text-gray-800">{ach}</span>
                <button onClick={() => removeAchievement(index)} className="text-red-500 hover:text-red-600 text-sm font-medium">Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;