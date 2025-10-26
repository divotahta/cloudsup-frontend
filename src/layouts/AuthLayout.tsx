import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            CloudSup
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Platform Edukasi Interaktif
          </p>
        </div>
        <div className="bg-white py-8 px-6 shadow-xl rounded-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
