import React from 'react';
import GlobalSidebar from '../components/GlobalSidebar';
import GlobalNavbar from '../components/GlobalNavbar';

interface TeacherLayoutProps {
  children: React.ReactNode;
}

const TeacherLayout: React.FC<TeacherLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex h-screen">
        {/* Left Sidebar */}
        <div className="w-[288px] flex-shrink-0">
          <GlobalSidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Navbar */}
          <div className="h-16 flex-shrink-0">
            <GlobalNavbar />
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherLayout;


