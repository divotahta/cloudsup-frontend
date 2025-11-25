import React from "react";
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
  MemoryDetailCard,
} from "./components";
// import { Gamepad2, Clock } from 'lucide-react';
import { SelectedPlayerProvider } from "./contexts/SelectedPlayerContext";
import { ReportFilterProvider } from "./contexts/ReportFilterContext";

const ReportContainer: React.FC = () => {

  return (
    <SelectedPlayerProvider>
      <ReportFilterProvider>
      <div className="flex gap-6">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col m-[40px]">
          {/* Header with Player Info & Date Range */}
          <div className="flex mb-5">
            <ReportHeader />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] ">
            <div className="max-w-[527px] max-h-[329px] w-full h-full p-[18px] bg-[#edf8ff] rounded-xl">
              <OverallProgressCard />
            </div>
            <div className="max-w-[527px] max-h-[329px] w-full h-full bg-[#edf8ff] rounded-xl">
              <PerformanceRadarChart />
            </div>
          </div>

          {/* Skill Cards Grid - 3x2 */}
          
            <SkillCard />

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
      </ReportFilterProvider>
    </SelectedPlayerProvider>
  );
};

export default ReportContainer;
