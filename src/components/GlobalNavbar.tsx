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
    <nav className="bg-gradient-to-r from-[#0066FF] to-[#0066FF] shadow-md w-full h-full">
      <div className="flex justify-end items-center h-full px-[40px]">
        {/* User Menu */}
        <div className="flex items-center gap-[10px]">
          <CameraButton />
          <ProfileButton 
            name={user?.name || "Divo Tahta"} 
            role="Tenaga Pendidik"
            onLogout={handleLogout}
            onSettings={handleSettings}
          />
        </div>
      </div>
    </nav>
  );
};

export default GlobalNavbar;
