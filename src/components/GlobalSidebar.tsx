import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import sidebarLogo from '../assets/images/sidebar-logo.svg';
import dashboardIcon from '../assets/images/sidebar/games.svg';
import reportsIcon from '../assets/images/sidebar/laporan.svg';
import settingsIcon from '../assets/images/sidebar/pengaturan.svg';
import ProgressTracker from './ProgressTracker';
import { useAuthContext } from '../contexts/AuthContext';

interface GlobalSidebarProps {
  devRole?: 'admin' | 'teacher' | 'student'; // Untuk development/testing
}

const GlobalSidebar: React.FC<GlobalSidebarProps> = ({ devRole }) => {
  const location = useLocation();
  const { user } = useAuthContext();
  
  // Untuk development: gunakan devRole jika ada, jika tidak gunakan user dari context
  const activeRole = devRole || user?.role;
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  // Render menu berdasarkan role
  const renderMenuItems = () => {
    // Jika tidak ada role (baik dari devRole maupun user), jangan tampilkan menu
    if (!activeRole) return null;

    switch (activeRole) {
      case 'admin':
        return (
          <>
          {/* Dashboard */}
          <Link
            to="/admin/dashboard"
            className={`flex items-center h-[40px] w-[240px] px-4 py-3 text-[18px] font-semibold rounded-[32.63px] transition-all duration-300 ${
              isActive('/admin/dashboard')
                ? 'bg-white text-[#E82D2F] shadow-md'
                : 'text-white hover:bg-white hover:bg-opacity-10'
            }`}
          >
            <img src={dashboardIcon} alt="Dashboard" className="w-[40px] h-auto mr-[28.4px]" />
            Dashboard
          </Link>

            {/* Games */}
            <Link
              to="/admin/games"
              className={`flex items-center h-[40px] w-[240px] px-4 py-3 text-[18px] font-semibold rounded-[32.63px] transition-all duration-300 ${
                isActive('/admin/games')
                  ? 'bg-white text-[#E82D2F] shadow-md'
                  : 'text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <img src={dashboardIcon} alt="Games" className="w-[40px] h-auto mr-[28.4px]" />
              Games
            </Link>

            {/* Reports */}
            <Link
              to="/admin/reports"
              className={`flex items-center px-4 py-3 text-[18px] font-semibold rounded-[32.63px] transition-all duration-300 ${
                isActive('/admin/reports')
                  ? 'bg-white text-[#E82D2F] shadow-md'
                  : 'text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <img src={reportsIcon} alt="Reports" className="w-[40px] h-auto mr-[28.4px]" />
              Laporan
            </Link>

            {/* Settings */}
            <Link
              to="/admin/settings"
              className={`flex items-center px-4 py-3 text-[18px] font-semibold rounded-[32.63px] transition-all duration-300 ${
                isActive('/admin/settings')
                  ? 'bg-white text-[#E82D2F] shadow-md'
                  : 'text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <img src={settingsIcon} alt="Settings" className="w-[40px] h-auto mr-[28.4px]" />
              Pengaturan
            </Link>
          </>
        );

      case 'teacher':
        return (
          <>
            {/* Games */}
            <Link
              to="/teacher/dashboard"
              className={`flex items-center h-[40px] w-[240px] px-4 py-3 text-[18px] font-semibold rounded-[32.63px] transition-all duration-300 ${
                isActive('/teacher/dashboard') || isActive('/teacher')
                  ? 'bg-white text-[#E82D2F] shadow-md'
                  : 'text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <img src={dashboardIcon} alt="Games" className="w-[40px] h-auto mr-[28.4px]" />
              Games
            </Link>

            {/* Reports */}
            <Link
              to="/teacher/reports"
              className={`flex items-center px-4 py-3 text-[18px] font-semibold rounded-[32.63px] transition-all duration-300 ${
                isActive('/teacher/reports')
                  ? 'bg-white text-[#E82D2F] shadow-md'
                  : 'text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <img src={reportsIcon} alt="Reports" className="w-[40px] h-auto mr-[28.4px]" />
              Laporan
            </Link>
          </>
        );

      case 'student':
        return (
          <>
            {/* Games - untuk student */}
            <Link
              to="/student/games"
              className={`flex items-center h-[40px] w-[240px] px-4 py-3 text-[18px] font-semibold rounded-[32.63px] transition-all duration-300 ${
                isActive('/student/games') || isActive('/student')
                  ? 'bg-white text-[#E82D2F] shadow-md'
                  : 'text-white hover:bg-white hover:bg-opacity-10'
              }`}
            >
              <img src={dashboardIcon} alt="Games" className="w-[40px] h-auto mr-[28.4px]" />
              Games
            </Link>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-[288px] bg-gradient-to-b from-[#E82D2F] to-[#C21315] shadow-[inset_0_8px_16px_rgba(255,255,255,0.16),inset_0_2px_rgba(255,255,255,0.1)] flex flex-col">
      {/* Logo Section */}
      <div className="flex flex-col items-center justify-center px-6 pt-[41px]">
        <img 
          src={sidebarLogo} 
          alt="CloudsUp Logo" 
          className="w-[158px] h-[158px]"
        />
        {/* <h2 className="text-white text-2xl font-bold">CloudsUp</h2> */}
      </div>
      
      {/* Navigation Menu */}
      <nav className="px-6 mt-[65px]">
        <div className="space-y-2">
          {renderMenuItems()}
        </div>
      </nav>

      {/* Progress Tracker */}
      <div className="mt-[159.2px]">
        <ProgressTracker />
      </div>
    </div>
  );
};

export default GlobalSidebar;
