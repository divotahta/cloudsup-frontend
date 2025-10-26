import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import LoginPage from './pages/Auth/LoginPage';
import DashboardPage from './pages/admin/DashboardPage';
import GamePlayContainer from './features/Student/Games/GamePlayContainer';
import GameEditorContainer from './features/Teacher/Games/GameEditorContainer';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={
          <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b border-gray-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex items-center">
                    <Link to="/" className="text-xl font-bold text-gray-900">
                      CloudSup
                    </Link>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Link
                      to="/login"
                      className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      to="/admin/dashboard"
                      className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Admin
                    </Link>
                    <Link
                      to="/student/game"
                      className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Play Game
                    </Link>
                    <Link
                      to="/teacher/game"
                      className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                      Create Game
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Main Content */}
            <main>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin/dashboard" element={<DashboardPage />} />
                <Route path="/student/game" element={<GamePlayContainer />} />
                <Route path="/teacher/game" element={<GameEditorContainer />} />
              </Routes>
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
