import React from 'react';
import GlobalSidebar from '../components/GlobalSidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      {/* <GlobalNavbar /> */}
      
      <div className="flex">
        {/* Sidebar */}
        <GlobalSidebar />
        
        {/* Main Content */}
        <main className="flex-1 p-6 ml-64">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
