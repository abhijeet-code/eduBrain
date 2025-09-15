import React from "react";

const ProfileDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Profile Dashboard</h1>
      {/* Add navigation links here if needed */}
      <Outlet />
    </div>
  );
};

export default ProfileDashboard;
