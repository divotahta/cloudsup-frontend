import React from 'react';
import {
  ReportHeader,
  OverallProgressCard,
  PerformanceRadarChart,
  SkillCard,
  GameHistorySection,
  OverallProgressReportCard,
  FocusDetailCard,
  CoordinationDetailCard,
  ReactionTimeDetailCard,
  BalanceDetailCard,
  AgilityDetailCard,
  MemoryDetailCard
} from './components';
// import { Gamepad2, Clock } from 'lucide-react';

const ReportContainer: React.FC = () => {
  const skillCards = [
    {
      title: 'Fokus',
      score: '90.6 Points',
      progress: 90.6,
      gradientColors: 'from-blue-500 to-blue-600',
      iconUrl: 'https://framerusercontent.com/images/Rl0QsYjNh4IB4mIXReVpKxuQuwA.png?width=1164&height=1044'
    },
    {
      title: 'Koordinasi Tangan & Mata',
      score: '55.4 Points',
      progress: 55.4,
      gradientColors: 'from-red-500 to-red-600',
      iconUrl: 'https://framerusercontent.com/images/Ze46G4mmhBQO932kIXDbLFK9k.png?width=1164&height=1044'
    },
    {
      title: 'Rata-rata\nWaktu Reaksi',
      score: '1.7 Detik',
      progress: 70,
      gradientColors: 'from-green-500 to-green-600',
      iconUrl: 'https://framerusercontent.com/images/5xgWQd4y41kZoE1n7xcgwnWpZQ.png?width=1164&height=1044',
      showClockIcon: true
    },
    {
      title: 'Keseimbangan',
      score: '50 Points',
      progress: 50,
      gradientColors: 'from-orange-500 to-orange-600',
      iconUrl: 'https://framerusercontent.com/images/6OhUsyvBpEy74n4XRUhkXXWz8VY.png?width=1164&height=1044'
    },
    {
      title: 'Ketangkasan',
      score: '97.8 Points',
      progress: 97.8,
      gradientColors: 'from-yellow-500 to-yellow-600',
      iconUrl: 'https://framerusercontent.com/images/UZQ3o7KclouMUKE0DfW9Vcpi8bs.png?width=1164&height=1044'
    },
    {
      title: 'Memori',
      score: '100 Points',
      progress: 100,
      gradientColors: 'from-pink-500 to-pink-600',
      iconUrl: 'https://framerusercontent.com/images/L6y5sA0yPbRYKq3wtR0yzvBtPwE.png?width=1164&height=1044'
    }
  ];

  return (
    <div className="flex gap-6">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col gap-6 m-[40px]">
        {/* Header with Player Info & Date Range */}
        <ReportHeader />
        
        {/* Summary Cards */}

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Left: Overall Progress */}
          <OverallProgressCard />
          
          {/* Right: Performance Radar */}
          <PerformanceRadarChart />
        </div>

        {/* Skill Cards Grid - 3x2 */}
        <div className="grid grid-cols-3 gap-4">
          {skillCards.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              score={skill.score}
              progress={skill.progress}
              gradientColors={skill.gradientColors}
              iconUrl={skill.iconUrl}
              showClockIcon={skill.showClockIcon || false}
            />
          ))}
        </div>

        {/* Game History Section */}
        <GameHistorySection />

        {/* Overall Progress Report Card */}
        <OverallProgressReportCard />

        {/* Focus Detail Card */}
        <FocusDetailCard />

        {/* Coordination Detail Card */}
        <CoordinationDetailCard />

        {/* Reaction Time Detail Card */}
        <ReactionTimeDetailCard />

        {/* Balance Detail Card */}
        <BalanceDetailCard />

        {/* Agility Detail Card */}
        <AgilityDetailCard />

        {/* Memory Detail Card */}
        <MemoryDetailCard />
      </div>
    </div>
  );
};

export default ReportContainer;
