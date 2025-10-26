import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import sidebarLogo from '../assets/images/sidebar-logo.svg';
// import gamesIcon from '../assets/images/games-icon.svg';
import dashboardIcon from '../assets/images/sidebar/games.svg';
import reportsIcon from '../assets/images/sidebar/laporan.svg';
import settingsIcon from '../assets/images/sidebar/pengaturan.svg';
import ProgressTracker from './ProgressTracker';

const GlobalSidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
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
          {/* Dashboard */}
          <Link
            to="/teacher/dashboard"
            className={`flex items-center h-[40px] w-[240px] px-4 py-3 text-sm font-bold rounded-[32.63px] transition-all duration-300 ${
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
            to="/admin/reports"
            className={`flex items-center px-4 py-3 text-sm font-bold rounded-[32.63px] transition-all duration-300 ${
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
            className={`flex items-center px-4 py-3 text-sm font-bold rounded-[32.63px] transition-all duration-300 ${
              isActive('/admin/settings')
                ? 'bg-white text-[#E82D2F] shadow-md'
                : 'text-white hover:bg-white hover:bg-opacity-10'
            }`}
          >
            <img src={settingsIcon} alt="Settings" className="w-[40px] h-auto mr-[28.4px]" />
            Pengaturan
          </Link>
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
