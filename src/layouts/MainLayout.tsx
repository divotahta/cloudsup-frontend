import React from "react";
import GlobalSidebar from "../components/GlobalSidebar";
import GlobalNavbar from "../components/GlobalNavbar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <GlobalNavbar/> 

      {/* Main Container - Full width to accommodate fixed sidebar */}
      <div className="flex">
        {/* Sidebar - Fixed width */}
        <div className="fixed inset-y-0 left-0 z-40 lg:w-[288px]">
          <GlobalSidebar />
        </div>

        {/* Main Content Area */}
        <main className="flex-1 lg:ml-72 min-h-screen">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
