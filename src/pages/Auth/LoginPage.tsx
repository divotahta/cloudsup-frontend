import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import sidebarLogo from '../../assets/images/sidebar-logo.svg';
import logo from '../../assets/images/HorizontalLogo.svg';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState({
    email: false,
    password: false,
  });
  const [isTouched, setIsTouched] = useState({
    email: false,
    password: false,
  });

  const validateEmail = (email: string) => {
    if (!email) return false;
    return /\S+@\S+\.\S+/.test(email);
  };

  // Validasi real-time untuk email
  const getEmailError = () => {
    if (!isTouched.email) return '';
    
    if (!formData.email.trim()) {
      return 'Email harus diisi';
    }
    
    if (!validateEmail(formData.email)) {
      return 'Format email tidak valid';
    }
    
    return '';
  };

  const getPasswordError = () => {
    if (!isTouched.password) return '';
    
    if (!formData.password) {
      return 'Kata sandi harus diisi';
    }
    
    return '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Pastikan touched state aktif untuk validasi
    setIsTouched({ email: true, password: true });

    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    if (!formData.password) {
      newErrors.password = 'Kata sandi harus diisi';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      try {
        await login(formData.email, formData.password);
        navigate('/admin/dashboard');
      } catch (err) {
        setErrors({ password: 'Email atau kata sandi salah' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const isFormValid = formData.email && formData.password && 
                      validateEmail(formData.email);

  return (
    <div className="flex min-h-screen w-screen bg-white overflow-hidden">
      {/* Left Sidebar - Red Background with Cloud Character */}
      <div className="hidden lg:flex lg:w-[576px] lg:flex-shrink-0 flex-col items-center justify-center bg-gradient-to-br from-[#E82D2F] to-[#C21315] shadow-[inset_0_8px_16px_rgba(255,255,255,0.16),inset_0_2px_rgba(255,255,255,0.1)] relative">
        <img 
          src={sidebarLogo} 
          alt="CloudsUp Logo" 
          className="w-[357px] h-[357px] ani  mate-fadeIn"
        />
      </div>

      {/* Right Panel - Login Form */}
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
                Masuk akun terlebih dahulu
              </h1>
              <p className="text-sm text-[#262626] leading-[18px]">
                Untuk memainkan game dan melihat perkembangan keterampilan anak
              </p>
            </div>

            <div className="flex items-center gap-1">
              <p className="text-sm font-medium text-[#262626]">
                Belum memiliki akun?
              </p>
              <a 
                href="/register" 
                className="text-sm font-bold text-[#0066ff] hover:underline transition-all"
              >
                Daftar disini
              </a>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email and Password - Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900">
                  Email<span className="text-red-600 ml-0.5">*</span>
                </label>
                <div className="relative w-full h-14">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setIsFocused(prev => ({ ...prev, email: true }))}
                    onBlur={() => {
                      setIsFocused(prev => ({ ...prev, email: false }));
                      setIsTouched(prev => ({ ...prev, email: true }));
                    }}
                    placeholder="Masukkan alamat email"
                    className={`w-full h-full px-5 py-4 rounded-lg border font-medium text-base text-gray-900 outline-none transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                      errors.email || getEmailError()
                        ? 'bg-red-50 border-red-600 border-2 placeholder:text-red-600 placeholder:opacity-100' 
                        : isFocused.email 
                          ? 'bg-blue-50 border-blue-600 border-2 shadow-[inset_0_0_0_1px_#0066FF] placeholder:text-gray-400' 
                          : 'bg-white border-gray-300 placeholder:text-gray-400'
                    }`}
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.5em',
                    }}
                  />
                </div>
                {(errors.email || getEmailError()) && (
                  <p className="text-xs text-red-600 pl-1 opacity-100 max-h-[30px] mt-2 transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
                     style={{
                       fontFamily: 'Raleway, sans-serif',
                       fontWeight: 'normal',
                       letterSpacing: '0.4px',
                       lineHeight: '16px',
                     }}>
                    {errors.email || getEmailError()}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900">
                  Kata sandi<span className="text-red-600 ml-0.5">*</span>
                </label>
                <div className="relative w-full h-14">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onFocus={() => setIsFocused(prev => ({ ...prev, password: true }))}
                    onBlur={() => {
                      setIsFocused(prev => ({ ...prev, password: false }));
                      setIsTouched(prev => ({ ...prev, password: true }));
                    }}
                    placeholder="Masukkan kata sandi"
                    className={`w-full h-full px-5 py-4 pr-12 rounded-lg border font-medium text-base text-gray-900 outline-none transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                      errors.password || getPasswordError()
                        ? 'bg-red-50 border-red-600 border-2 placeholder:text-red-600 placeholder:opacity-100' 
                        : isFocused.password 
                          ? 'bg-blue-50 border-blue-600 border-2 shadow-[inset_0_0_0_1px_#0066FF] placeholder:text-gray-400' 
                          : 'bg-white border-gray-300 placeholder:text-gray-400'
                    }`}
                    style={{
                      fontSize: '16px',
                      lineHeight: '1.5em',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-5 top-1/2 -translate-y-1/2 transition-colors duration-[400ms] ${
                      errors.password || getPasswordError()
                        ? 'text-red-600' 
                        : isFocused.password 
                          ? 'text-blue-600' 
                          : 'text-gray-400'
                    }`}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                {(errors.password || getPasswordError()) && (
                  <p className="text-xs text-red-600 pl-1 opacity-100 max-h-[30px] mt-2 transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                     style={{
                       fontFamily: 'Raleway, sans-serif',
                       fontWeight: 'normal',
                       letterSpacing: '0.4px',
                       lineHeight: '16px',
                     }}>
                    {errors.password || getPasswordError()}
                  </p>
                )}
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline transition-all duration-200"
              >
                Lupa Password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid || isLoading}
              className={`w-full h-14 px-6 py-4 rounded-lg font-bold text-base leading-[1.5em] outline-none transition-all duration-500 ${
                isFormValid && !isLoading
                  ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-200 cursor-pointer'
                  : 'bg-gray-400 text-white cursor-not-allowed'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '-0.32s', animationDuration: '1.4s' }} />
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '-0.16s', animationDuration: '1.4s' }} />
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDuration: '1.4s' }} />
                </div>
              ) : (
                'Masuk'
              )}
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default LoginPage;
