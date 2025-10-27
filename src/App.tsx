import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Contexts
import { AuthProvider } from './contexts/AuthContext';

// Import Layouts
import MainLayout from './layouts/MainLayout';
import GuestLayout from './layouts/GuestLayout';

// Import Pages
import Home from './pages/Home';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import DashboardPage from './pages/admin/DashboardPage';
import TeacherDashboardPage from './pages/teacher/DashboardPage';
import TeacherReportPage from './pages/teacher/ReportPage';
import TeacherGameDetailPage from './pages/teacher/GameDetailPage';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes (No Layout) */}
          <Route path="/" element={
            <GuestLayout>
              <Home />
            </GuestLayout>
          } />

          {/* Auth Routes (No need to login) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Protected Routes (Need to login) */}
          <Route path="/admin" element={<MainLayout><DashboardPage /></MainLayout>} />
          <Route path="/admin/dashboard" element={<MainLayout><DashboardPage /></MainLayout>} />
          
          {/* Teacher */}
          <Route path="/teacher" element={<MainLayout><TeacherDashboardPage /></MainLayout>} />
          <Route path="/teacher/dashboard" element={<MainLayout><TeacherDashboardPage /></MainLayout>} />
          <Route path="/teacher/reports" element={<MainLayout><TeacherReportPage /></MainLayout>} />
          <Route path="/teacher/games/:id" element={<MainLayout><TeacherGameDetailPage /></MainLayout>} />
          
          {/* Student */}
          {/* <Route path="/student/game" element={<MainLayout><GamePlayContainer /></MainLayout>} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
