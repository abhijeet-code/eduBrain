import React, { useState, useEffect } from "react";

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
    <div className="w-full p-6 md:p-10">
      <div className="w-full max-w-[1060px] mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#9411a8] mb-2">
            My Profile
          </h1>
          <p className="text-base md:text-lg text-text-secondary">
            Manage your personal information.
          </p>
        </div>

        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
          <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 border-b border-gray-100 pb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Personal Details
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Update your personal details here.
              </p>
            </div>

            <button
              className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg transition-colors ${isEditing
                  ? "bg-red-50 text-red-600 hover:bg-red-100"
                  : "bg-[#e0f2fe] text-[#0284c7] hover:bg-[#bae6fd]"
                }`}
              onClick={toggleEditMode}
              aria-label={isEditing ? "Cancel Editing" : "Edit Profile"}
            >
              {isEditing ? "Cancel" : "Edit Profile"}
            </button>
          </header>

          <main className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {formFields.map((field) => (
              <div
                key={field.id}
                className="flex flex-col gap-2"
              >
                <label
                  htmlFor={field.id}
                  className="font-medium text-gray-700 text-sm"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  type={field.type}
                  value={field.value || ""}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  placeholder={field.placeholder}
                  disabled={!isEditing}
                  className="h-12 px-4 w-full rounded-lg border border-gray-200 bg-white text-gray-800 placeholder:text-gray-400 focus:border-[#9411a8] focus:ring-2 focus:ring-[#9411a8]/20 outline-none transition-all disabled:bg-gray-50 disabled:text-gray-500"
                />
              </div>
            ))}
          </main>

          {isEditing && (
            <footer className="flex justify-end mt-8 pt-6 border-t border-gray-100">
              <button
                className="px-8 py-3 bg-[#9411a8] text-white font-semibold rounded-lg hover:bg-[#7a0e8a] transition-colors shadow-sm hover:shadow-md"
                onClick={handleSaveProfile}
                aria-label="Save Profile"
              >
                Save Profile
              </button>
            </footer>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;