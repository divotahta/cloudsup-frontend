import React from "react";
import sidebarLogo from "../assets/images/sidebar-logo.svg";
import logo from "../assets/images/HorizontalLogo.svg";
import RegisterForm from "../features/Auth/components/RegisterForm";

const HomePage: React.FC = () => {
  return (
    <div className="flex min-h-screen w-screen bg-white overflow-hidden">
      {/* Left Sidebar - Red Background with Cloud Character */}
      <div className="hidden lg:flex lg:w-[576px] lg:flex-shrink-0 flex-col items-center justify-center bg-gradient-to-br from-[#E82D2F] to-[#C21315] shadow-[inset_0_8px_16px_rgba(255,255,255,0.16),inset_0_2px_rgba(255,255,255,0.1)] relative">
        <img
          src={sidebarLogo}
          alt="CloudsUp Logo"
          className="w-[357px] h-[357px] animate-fadeIn"
        />
      </div>

      {/* Right Panel - Registration Form */}
      <div className="flex-1 flex items-center justify-center px-[48px] min-w-0">
        <div className="w-full space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-start gap-1">
            <img src={logo} alt="CloudsUp" className="w-[287px]" />
          </div>

          {/* Title Section */}
          <div className="space-y-5">
            <div className="space-y-2">
              <h1 className="text-[24px] font-bold text-[#262626] font-raleway">
                Buat akun terlebih dahulu
              </h1>
              <p className="text-sm text-[#262626] leading-[18px]">
                Untuk memainkan game dan melihat perkembangan keterampilan anak
              </p>
            </div>

            <div className="flex items-center gap-1">
              <p className="text-sm font-medium text-[#262626]">
                Sudah memiliki akun?
              </p>
              <a
                href="/login"
                className="text-sm font-bold text-[#0066ff] hover:underline transition-all"
              >
                Masuk disini
              </a>
            </div>
          </div>

          {/* Registration Form */}
          {/* Login Form */}
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
