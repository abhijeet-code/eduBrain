// import React, { useState, useEffect } from "react";
// import BackgroundSvg from "../Contact Us/BackgroundSvg";

// const Profile = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phoneNumber: "",
//     emailAddress: "",
//     dateOfBirth: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const BASE_URL = "http://localhost:5000";

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) return;

//       try {
//         const res = await fetch(`${BASE_URL}/api/profile/me`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         if (res.ok) {
//           const data = await res.json();
//           // Format date for the input field (YYYY-MM-DD)
//           const formattedData = {
//             ...data,
//             dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth).toISOString().split('T')[0] : "",
//           };
//           setFormData(formattedData);
//         } else {
//           console.log("No profile found, user can create one.");
//           setIsEditing(true); // Automatically enter edit mode if no profile exists
//         }
//       } catch (error) {
//         console.error("Failed to fetch profile:", error);
//       }
//     };
//     fetchProfile();
//   }, []);

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: value,
//     }));
//   };

//   const handleEditProfile = () => {
//     console.log("Edit profile clicked");
//   };

//   const handleSaveProfile = async () => {
//     const token = localStorage.getItem("token");
//     try {
//       const res = await fetch(`${BASE_URL}/api/profile`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         const updatedProfile = await res.json();
//         const formattedData = {
//             ...updatedProfile,
//             dateOfBirth: updatedProfile.dateOfBirth ? new Date(updatedProfile.dateOfBirth).toISOString().split('T')[0] : "",
//         };
//         setFormData(formattedData);
//         alert("Profile saved successfully!");
//         setIsEditing(false); // Exit edit mode after saving
//       } else {
//         const errorData = await res.json();
//         alert(`Failed to save profile: ${errorData.msg}`);
//       }
//     } catch (error) {
//       console.error("Error saving profile:", error);
//       alert("An error occurred while saving the profile.");
//     }
//   };

//   const toggleEditMode = () => {
//     setIsEditing(!isEditing);
//   };

//   const formFields = [
//     {
//       id: "fullName",
//       label: "Full Name",
//       placeholder: "Enter your name",
//       type: "text",
//       value: formData.fullName,
//     },
//     {
//       id: "emailAddress",
//       label: "Email Address",
//       placeholder: "Enter your email address",
//       type: "email",
//       value: formData.emailAddress,
//     },
//     {
//       id: "phoneNumber",
//       label: "Phone Number",
//       placeholder: "Enter your phone number",
//       type: "tel",
//       value: formData.phoneNumber,
//     },
//     {
//       id: "dateOfBirth",
//       label: "Date of Birth",
//       placeholder: "DD/MM/YYYY",
//       type: "date",
//       value: formData.dateOfBirth,
//     },
//   ];

//   return (
//     <div className="inline-flex flex-col items-start gap-[54px] p-10 mt-20 relative rounded-[5px] border border-solid border-[#1545c2]">
//       <header className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
//         <div className="inline-flex items-center justify-center gap-[19.51px] px-0 py-[19.51px] relative flex-[0_0_auto]">
//           <h1 className="relative w-fit mt-[-3.90px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0356ff] text-[41.9px] tracking-[0] leading-[39.1px] whitespace-nowrap">
//             My Profile
//           </h1>
//         </div>

//         <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
//           <h2 className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-gray-500 text-3xl tracking-[0] leading-[20.1px] whitespace-nowrap">
//             Personal Details
//           </h2>

//           <button
//             className="inline-flex items-center gap-3.5 p-2.5 relative flex-[0_0_auto] bg-[#1545c21a] rounded-[5px] border border-solid border-variable-colletext-gray-500 hover:bg-[#1545c230] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1545c2] focus:ring-offset-2"
//             onClick={handleEditProfile}
//             aria-label="Edit Profile"
//           >
//             <div className="relative w-6 h-6" aria-hidden="true">
//               <div className="relative w-[22px] h-[22px] top-px left-px">
//                 <img
//                   className="absolute w-2.5 h-0.5 top-[19px] left-[11px]"
//                   alt=""
//                   // src={vector}
//                 />

//                 <img
//                   className="absolute w-[22px] h-[22px] top-0 left-0"
//                   alt=""
//                   // src={image}
//                 />
//               </div>
//             </div>

//             <span className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#6687ff] text-base tracking-[0] leading-[normal] whitespace-nowrap">
//               Edit Profile
//             </span>
//           </button>
//         </div>
//       </header>

//       <main className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
//         <div className="flex flex-col w-[450px] items-start gap-[24.83px] relative">
//           {formFields.slice(0, 2).map((field) => (
//             <div
//               key={field.id}
//               className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
//             >
//               <label
//                 htmlFor={field.id}
//                 className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#6687ff] text-xl tracking-[0] leading-[normal] whitespace-nowrap"
//               >
//                 {field.label}
//               </label>

//               <div className="flex h-[50px] items-center gap-[8.28px] px-3 py-[8.28px] relative self-stretch w-full rounded-[5px] border-[0.83px] border-solid border-[#1545c2] focus-within:border-[#0356ff] focus-within:ring-1 focus-within:ring-[#0356ff]">
//                 <input
//                   id={field.id}
//                   type={field.type}
//                   value={field.value}
//                   onChange={(e) => handleInputChange(field.id, e.target.value)}
//                   placeholder={field.placeholder}
//                   className="relative w-full [font-family:'Inter-Regular',Helvetica] font-normal text-gray-500
//                    text-[15.8px] tracking-[0] leading-[normal] bg-transparent border-none outline-none placeholder:text-gray-500"
//                   aria-describedby={`${field.id}-description`}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-col w-[450px] items-start gap-[24.83px] relative">
//           {formFields.slice(2, 4).map((field) => (
//             <div
//               key={field.id}
//               className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
//             >
//               <label
//                 htmlFor={field.id}
//                 className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#6687ff] text-xl tracking-[0] leading-[normal] whitespace-nowrap"
//               >
//                 {field.label}
//               </label>

//               <div className="flex h-[50px] items-center gap-[8.28px] px-3 py-[8.28px] relative self-stretch w-full rounded-[5px] border-[0.83px] border-solid border-[#1545c2] focus-within:border-[#0356ff] focus-within:ring-1 focus-within:ring-[#0356ff]">
//                 <input
//                   id={field.id}
//                   type={field.type}
//                   value={field.value}
//                   onChange={(e) => handleInputChange(field.id, e.target.value)}
//                   placeholder={field.placeholder}
//                   className="relative w-full [font-family:'Inter-Regular',Helvetica] font-normal text-gray-500 text-[15.8px] tracking-[0] leading-[normal] bg-transparent border-none outline-none placeholder:text-gray-500"
//                   aria-describedby={`${field.id}-description`}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Profile

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
        if (res.ok) {
          const data = await res.json();
          const formattedData = {
            ...data,
            dateOfBirth: data.dateOfBirth ? new Date(data.dateOfBirth).toISOString().split('T')[0] : "",
          };
          setFormData(formattedData);
        } else {
          console.log("No profile found, user can create one.");
          setIsEditing(true);
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };
    fetchProfile();
  }, []);

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
    <div className="inline-flex flex-col items-start gap-[54px] p-10 mt-20 relative rounded-[5px] border border-solid border-[#1545c2]">
      <header className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center justify-center gap-[19.51px] px-0 py-[19.51px] relative flex-[0_0_auto]">
          <h1 className="relative w-fit mt-[-3.90px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0356ff] text-[41.9px] tracking-[0] leading-[39.1px] whitespace-nowrap">
            My Profile
          </h1>
        </div>

        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-gray-500 text-3xl tracking-[0] leading-[20.1px] whitespace-nowrap">
            Personal Details
          </h2>

          <button
            className="inline-flex items-center gap-3.5 p-2.5 relative flex-[0_0_auto] bg-[#1545c21a] rounded-[5px] border border-solid border-[#1545c2] hover:bg-[#1545c230] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1545c2] focus:ring-offset-2"
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
        </div>
      </header>

      <main className="flex items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[450px] items-start gap-[24.83px] relative">
          {formFields.slice(0, 2).map((field) => (
            <div
              key={field.id}
              className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
            >
              <label
                htmlFor={field.id}
                className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#6687ff] text-xl tracking-[0] leading-[normal] whitespace-nowrap"
              >
                {field.label}
              </label>
              <div className="flex h-[50px] items-center gap-[8.28px] px-3 py-[8.28px] relative self-stretch w-full rounded-[5px] border-[0.83px] border-solid border-[#1545c2] focus-within:border-[#0356ff] focus-within:ring-1 focus-within:ring-[#0356ff]">
                <input
                  id={field.id}
                  type={field.type}
                  value={field.value}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  placeholder={field.placeholder}
                  disabled={!isEditing}
                  className="relative w-full [font-family:'Inter-Regular',Helvetica] font-normal text-gray-500 text-[15.8px] tracking-[0] leading-[normal] bg-transparent border-none outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-80"
                  aria-describedby={`${field.id}-description`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-[450px] items-start gap-[24.83px] relative">
          {formFields.slice(2, 4).map((field) => (
            <div
              key={field.id}
              className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
            >
              <label
                htmlFor={field.id}
                className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#6687ff] text-xl tracking-[0] leading-[normal] whitespace-nowrap"
              >
                {field.label}
              </label>
              <div className="flex h-[50px] items-center gap-[8.28px] px-3 py-[8.28px] relative self-stretch w-full rounded-[5px] border-[0.83px] border-solid border-[#1545c2] focus-within:border-[#0356ff] focus-within:ring-1 focus-within:ring-[#0356ff]">
                <input
                  id={field.id}
                  type={field.type}
                  value={field.value}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  placeholder={field.placeholder}
                  disabled={!isEditing}
                  className="relative w-full [font-family:'Inter-Regular',Helvetica] font-normal text-gray-500 text-[15.8px] tracking-[0] leading-[normal] bg-transparent border-none outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-80"
                  aria-describedby={`${field.id}-description`}
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      {isEditing && (
        <footer className="flex justify-end gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <button
            className="inline-flex items-center gap-3.5 p-2.5 relative flex-[0_0_auto] bg-[#1545c21a] rounded-[5px] border border-solid border-[#1545c2] hover:bg-[#1545c230] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1545c2] focus:ring-offset-2"
            onClick={handleSaveProfile}
            aria-label="Save Profile"
          >
            <span className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#6687ff] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Save Profile
            </span>
          </button>
        </footer>
      )}
    </div>
  );
};

export default Profile;