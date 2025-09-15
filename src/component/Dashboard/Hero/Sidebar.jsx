import React from 'react';
import SidebarMenuItem from './SidebarMenuItem';
import { Link } from 'react-router-dom';

function Sidebar() {
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
    <aside className="w-1/5 max-md:ml-0 max-md:w-full z-10 fixed  left-0 top-[93px] h-[calc(100vh-89px)]">
      <nav className="px-2.5 py-5 mx-auto flex flex-col items-center  w-full border-r bg-[#246bfd]/11 border-blue-600 border-solid h-full max-md:mt-10 ">
       <div className="flex flex-col gap-3 justify-center items-start w-full px-6 mx-auto pb-3">
          {menuItems.map((item, index) => (
         <div key={index} className={index > 0 ? "mt-4" : ""}>
              <SidebarMenuItem
                icon={item.icon}
                label={item.label}
                isActive={item.isActive}
              />
            </div>
          ))}
        </div>
        <Link to={'/profile-dashboard/my-profile'} className="flex gap-2.5 justify-center items-center pr-10 py-2.5  w-full border-t border-blue-600 max-md:mt-10  cursor-pointer">
          <div className="flex overflow-hidden gap-3.5 justify-center items-center self-stretch px-1.5 my-auto bg-opacity-20 h-[34px] min-h-[34px] rounded-[30px] w-[34px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/92dbd61d4c7248e0a6300c516c4d3fc9/e544583d6e8bf8d8ef70a3fa4f8fb8ac22497152?placeholderIfAbsent=true"
              className="object-contain self-stretch my-auto aspect-square w-[22px]"
              alt=""
            />
          </div>
          <span className="self-stretch my-auto text-xl font-medium leading-none text-blue-600 cursor-pointer">
            My Profile
          </span>
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
