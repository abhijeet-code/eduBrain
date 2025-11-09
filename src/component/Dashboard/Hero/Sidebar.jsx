import React from 'react';
import SidebarMenuItem from './SidebarMenuItem';
import { Link } from 'react-router-dom';

function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const menuItems = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/f73ecf0537097552816b53b848bf2653c7e8fbf8?placeholderIfAbsent=true",
      label: "Dashboard",
      isActive: true
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/e676670a02054890554968f955a015efd7b1e166?placeholderIfAbsent=true",
      label: "My courses"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/56474a48751eb3ac0bc0731af9f19397aa69c6d2?placeholderIfAbsent=true",
      label: "Assignments"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/30ace5e36902f8dd94a1f74f2c585541aa792f5f?placeholderIfAbsent=true",
      label: "Certificates"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/7f7e3308dc86eedb4a34d95f7a246d2c6407c54d?placeholderIfAbsent=true",
      label: "Resume Builder"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/4822718867bf956f35f2e6d20a6e547f88736789?placeholderIfAbsent=true",
      label: "Refer & Earn"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/efe8769f7e3357b40939e30a64798e75202dba25?placeholderIfAbsent=true",
      label: "Mentor Support"
    }
  ];

  return (
    <aside className={`w-3/4 md:w-1/5 z-20 fixed left-0 top-0 pt-[89px] h-screen transform transition-transform duration-300 ease-in-out bg-[#0c0c0d] ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
    <nav className="flex flex-col w-full border-r border-blue-600 h-full overflow-y-auto">
      <div className="flex flex-col gap-3 p-4">
          {menuItems.map((item, index) => (
         <div key={index}  onClick={() => setIsSidebarOpen(false)}>
         <div className={index > 0 ? "mt-2" : ""}>
              <SidebarMenuItem
                icon={item.icon}
                label={item.label}
                isActive={item.isActive}
              />
            </div>
            </div>
          ))}
        </div>
        <Link to={'/profile-dashboard/my-profile'} onClick={() => setIsSidebarOpen(false)}   className="flex gap-4 items-center p-4 mt-auto w-full border-t border-blue-600 hover:bg-white/5 transition-colors">
        <div className="flex justify-center items-center w-[34px] h-[34px] rounded-full bg-blue-500/20">
        <img
              src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/e544583d6e8bf8d8ef70a3fa4f8fb8ac22497152?placeholderIfAbsent=true"
              className="w-[22px] h-[22px]"
               alt=""
            />
          </div>
          <span className="text-lg font-medium text-blue-600">
            My Profile
          </span>
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
