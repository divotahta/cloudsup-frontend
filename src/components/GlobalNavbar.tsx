import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { CameraButton, ProfileButton } from './Navbar';

const GlobalNavbar: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSettings = () => {
    navigate('/settings');
  };

  return (
    <nav className="bg-gradient-to-r from-[#0066FF] to-[#0066FF] shadow-sm sticky top-0 z-10 h-[84px]">
      {/* <div className="px-[40px]"> */}
        <div className="flex justify-end items-center h-16 pt-[10px] px-[40px]">
          {/* User Menu */}
          <div className="flex items-center gap-[10px]">
            <CameraButton />
            <ProfileButton 
              name={user?.name || "Dina Mustawati"} 
              role="Tenaga Pendidik"
              onLogout={handleLogout}
              onSettings={handleSettings}
            />
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
};

export default GlobalNavbar;
