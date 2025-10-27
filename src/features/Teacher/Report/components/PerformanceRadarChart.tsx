import React from 'react';

const PerformanceRadarChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col items-center">
      {/* Chart Container */}
      <div className="relative w-[270px] h-[270px] mb-4">
        {/* Radar Chart Placeholder */}
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center relative">
          {/* Chart SVG Placeholder */}
          <div className="absolute inset-0">
            {/* This would be the actual radar chart SVG */}
            <svg className="w-full h-full" viewBox="0 0 270 270" xmlns="http://www.w3.org/2000/svg">
              {/* Grid lines */}
              <circle cx="135" cy="135" r="100" fill="none" stroke="#CBD5E0" strokeWidth="1" />
              <circle cx="135" cy="135" r="75" fill="none" stroke="#CBD5E0" strokeWidth="1" />
              <circle cx="135" cy="135" r="50" fill="none" stroke="#CBD5E0" strokeWidth="1" />
              <circle cx="135" cy="135" r="25" fill="none" stroke="#CBD5E0" strokeWidth="1" />
              
              {/* Axes */}
              {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const radians = (angle * Math.PI) / 180;
                const x = 135 + 100 * Math.cos(radians);
                const y = 135 + 100 * Math.sin(radians);
                return (
                  <line
                    key={i}
                    x1="135"
                    y1="135"
                    x2={x}
                    y2={y}
                    stroke="#CBD5E0"
                    strokeWidth="1"
                  />
                );
              })}
              
              {/* Performance area (example data) */}
              <polygon
                points="135,135 180,100 185,160 145,185 110,175 95,140"
                fill="#0066FF"
                fillOpacity="0.3"
                stroke="#0066FF"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Performance icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[198px] h-[199px] bg-gradient-to-br from-white/50 to-transparent rounded-full flex items-center justify-center">
              {/* Child result icon */}
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold">👤</span>
              </div>
            </div>
          </div>
        </div>

        {/* Category Labels */}
        <div className="absolute inset-0">
          {/* Keseluruhan - Top center */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <p className="font-raleway font-bold text-sm text-[#084EC5] text-center">Keseluruhan</p>
          </div>

          {/* Ketangkasan - Top right */}
          <div className="absolute top-8 right-4 text-center">
            <p className="font-raleway font-bold text-sm text-[#084EC5]">Ketang-</p>
            <p className="font-raleway font-bold text-sm text-[#084EC5]">kasan</p>
          </div>

          {/* Fokus - Right center */}
          <div className="absolute top-1/2 -translate-y-1/2 right-2">
            <p className="font-raleway font-bold text-sm text-[#084EC5] text-right">Fokus</p>
          </div>

          {/* Koordinasi - Bottom right */}
          <div className="absolute bottom-8 right-4 text-center">
            <p className="font-raleway font-bold text-sm text-[#084EC5] text-center">Koordinasi</p>
          </div>

          {/* Keseimbangan - Bottom center */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
            <p className="font-raleway font-bold text-sm text-[#084EC5] text-right">Keseim-</p>
            <p className="font-raleway font-bold text-sm text-[#084EC5] text-right">bangan</p>
          </div>

          {/* Memori - Left center */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2">
            <p className="font-raleway font-bold text-sm text-[#084EC5] text-right">Memori</p>
          </div>
        </div>
      </div>

      {/* Title */}
      <h2 className="font-raleway font-bold text-[20px] leading-[20px] text-[#084EC5]">
        Performa
      </h2>
    </div>
  );
};

export default PerformanceRadarChart;
