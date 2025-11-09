import React, { useState, useEffect } from "react";
import BackgroundSvg from "../Contact Us/BackgroundSvg";

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    dateOfBirth: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch(`${BASE_URL}/api/profile/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        let defaultName = "";
        let defaultEmail = "";
        if (res.ok) {
          const data = await res.json();
          defaultName = data.name;
          defaultEmail = data.email;
          const formattedData = {
            ...data,
            dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth).toISOString().split('T')[0] : "",
          };
          setFormData(formattedData);
        }
        const profileRes = await fetch(`${BASE_URL}/api/profile/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (profileRes.ok) {
          // --- 3. Profile Exists: Merge data ---
          const profileData = await profileRes.json();
          setFormData({
            fullName: profileData.fullName || defaultName, // Use profile data, fallback to default
            emailAddress: profileData.emailAddress || defaultEmail, // Use profile data, fallback to default
            phoneNumber: profileData.phoneNumber || "",
            dateOfBirth: profileData.dateOfBirth ? new Date(profileData.dateOfBirth).toISOString().split('T')[0] : "",
          });
        }
        else {
          console.log("No profile found, user can create one.");
          setFormData({
            fullName: defaultName,
            emailAddress: defaultEmail,
            phoneNumber: "",
            dateOfBirth: "",
          });
          setIsEditing(true);
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchProfile();
  }, [BASE_URL]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveProfile = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please log in to save your profile.");
      return;
    }
    try {
      const res = await fetch(`${BASE_URL}/api/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (res.status === 401) {
        alert("Session expired. Please log in again.");
        localStorage.removeItem("token");
        // Redirect to login page (uncomment if using react-router-dom)
        // navigate("/login");
        return;
      }
      if (res.ok) {
        const updatedProfile = await res.json();
        const formattedData = {
          ...updatedProfile,
          dateOfBirth: updatedProfile.dateOfBirth ? new Date(updatedProfile.dateOfBirth).toISOString().split('T')[0] : "",
        };
        setFormData(formattedData);
        alert("Profile saved successfully!");
        setIsEditing(false);
      } else {
        const errorData = await res.json();
        alert(`Failed to save profile: ${errorData.msg}`);
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("An error occurred while saving the profile.");
    }
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const formFields = [
    {
      id: "fullName",
      label: "Full Name",
      placeholder: "Enter your name",
      type: "text",
      value: formData.fullName,
    },
    {
      id: "emailAddress",
      label: "Email Address",
      placeholder: "Enter your email address",
      type: "email",
      value: formData.emailAddress,
    },
    {
      id: "phoneNumber",
      label: "Phone Number",
      placeholder: "Enter your phone number",
      type: "tel",
      value: formData.phoneNumber,
    },
    {
      id: "dateOfBirth",
      label: "Date of Birth",
      placeholder: "DD/MM/YYYY",
      type: "date",
      value: formData.dateOfBirth,
    },
  ];

  return (
    <div className="w-full p-4 md:p-6 lg:p-8">
    <div className="mt-10 md:mt-20 w-full max-w-7xl mx-auto rounded-xl border border-solid border-[#1545c2] bg-[#0c0c0d] p-6 md:p-10 flex flex-col gap-8">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-[#0356ff] leading-tight">
            My Profile
          </h1>
          <h2 className="text-lg md:text-xl text-gray-400 mt-1">
            Personal Details
          </h2>
        </div>

          <button
             className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#6687ff] bg-[#1545c2]/10 border border-transparent rounded-lg hover:bg-[#1545c2]/20 focus:outline-none focus:ring-2 focus:ring-[#1545c2] focus:ring-offset-2 focus:ring-offset-black transition-colors self-start sm:self-center"
             onClick={toggleEditMode}
            aria-label={isEditing ? "Cancel Editing" : "Edit Profile"}
          >
            <div className="relative w-6 h-6" aria-hidden="true">
              <div className="relative w-[22px] h-[22px] top-px left-px">
                <img
                  className="absolute w-2.5 h-0.5 top-[19px] left-[11px]"
                  alt=""
                // src={vector}
                />
                <img
                  className="absolute w-[22px] h-[22px] top-0 left-0"
                  alt=""
                // src={image}
                />
              </div>
            </div>
            <span className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#6687ff] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              {isEditing ? "Cancel" : "Edit Profile"}
            </span>
          </button>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
       {formFields.slice(0, 2).map((field) => (
            <div
              key={field.id}
              className="flex flex-col gap-2 relative self-stretch w-full flex-[0_0_auto]"
            >
              <label
                htmlFor={field.id}
                className="font-medium text-[#6687ff] text-base"
              >
                {field.label}
              </label>
                <input
                  id={field.id}
                  type={field.type}
                  value={field.value}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  placeholder={field.placeholder}
                  disabled={!isEditing}
                  className="h-12 px-3 w-full rounded-md border border-solid border-[#1545c2] bg-transparent text-gray-300 placeholder:text-gray-500 focus:border-[#0356ff] focus:ring-1 focus:ring-[#0356ff] outline-none transition-all"
                 aria-describedby={`${field.id}-description`}
                />
            </div>
          ))}


        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6"> */}
         {formFields.slice(2, 4).map((field) => (
            <div
              key={field.id}
              className="flex flex-col gap-2 relative self-stretch w-full flex-[0_0_auto]"
              >
              <label
                htmlFor={field.id}
                className="font-medium text-[#6687ff] text-base"
                >
                {field.label}
              </label>
                <input
                  id={field.id}
                  type={field.type}
                  value={field.value}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  placeholder={field.placeholder}
                  disabled={!isEditing}
                  className="h-12 px-3 w-full rounded-md border border-solid border-[#1545c2] bg-transparent text-gray-300 placeholder:text-gray-500 focus:border-[#0356ff] focus:ring-1 focus:ring-[#0356ff] outline-none transition-all"
                  aria-describedby={`${field.id}-description`}
                />
              </div>
          ))}
      </main>
      </div>
      


      {isEditing && (
        <footer className="flex justify-end gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <button
            className="inline-flex items-center gap-3.5 p-2.5 relative flex-[0_0_auto] bg-[#1545c21a] rounded-[5px] border border-solid border-[#1545c2] hover:bg-[#1545c230] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1545c2] focus:ring-offset-2"
            onClick={handleSaveProfile}
            aria-label="Save Profile"
          >
            <span className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#6687ff] text-base tracking-[3] leading-[normal] whitespace-nowrap">
              Save Profile
            </span>
          </button>
        </footer>
      )}
      </div>
  );
};

export default Profile;