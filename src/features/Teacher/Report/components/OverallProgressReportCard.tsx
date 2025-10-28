import React, { useState } from 'react';

const OverallProgressReportCard: React.FC = () => {
  const [activeWeek, setActiveWeek] = useState<'week31' | 'week32'>('week31');

  const games = [
    { name: 'GELEMBUNG AJAIB', icon: 'https://framerusercontent.com/images/5I3P3XAnbMenWJjscRxX24z5M.png?width=538&height=506' },
    { name: 'PAPAN SEIMBANG', icon: 'https://framerusercontent.com/images/FR7BN9QpiRVUPGBwQnTS1gd1rQo.png?width=538&height=506' },
    { name: 'TANGKAP RASA', icon: 'https://framerusercontent.com/images/MMaNnP62Y1mEGXox40R4JAyw.png?width=538&height=506' },
    { name: 'KARTU COCOK', icon: 'https://framerusercontent.com/images/SFEfgSYbe53srnzCJKt25zMYb8.png?width=538&height=506' },
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      {/* Left Column - Text & Progress */}
      <div className="flex gap-6 mb-6">
        <div className="flex-1">
          {/* Title */}
          <div className="flex items-start gap-3 mb-4">
            <div>
              <h2 className="font-raleway font-bold text-[25px] leading-[25px] text-[#084EC5]">
                Laporan kemajuan
              </h2>
              <h2 className="font-raleway font-bold text-[25px] leading-[25px] text-[#084EC5]">
                secara keseluruhan
              </h2>
            </div>
            <div 
              className="w-[22px] h-[25px] flex-shrink-0"
              style={{
                imageRendering: 'pixelated',
                flexShrink: 0,
                fill: 'rgb(0, 0, 0)',
                color: 'rgb(0, 0, 0)'
              }}
            >
              <div className="w-full h-full" style={{ aspectRatio: 'inherit' }}>
                <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 22 25" preserveAspectRatio="none">
                  {/* Info Icon SVG */}
                </svg>
              </div>
            </div>
          </div>

          {/* Percentage Display */}
          <div className="mb-6">
            <p className="font-raleway font-bold text-[30px] leading-[40px] text-[#084EC5]">
              81.1%
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <p className="font-raleway font-semibold text-[10px] leading-[10px] text-[#084EC5]">0</p>
              <div className="flex-1 relative">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div 
                    className="absolute left-0 top-0 h-full bg-[#084EC5] rounded-full"
                    style={{ width: '81.1%' }}
                  >
                    {/* Marker */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center gap-1">
                      <p className="font-raleway font-semibold text-[10px] leading-[10px] text-[#084EC5] whitespace-nowrap">
                        81.1
                      </p>
                      <div className="w-px h-3 bg-[#084EC5]" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-raleway font-semibold text-[10px] leading-[10px] text-[#084EC5]">100</p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <p className="font-raleway font-semibold text-[15px] leading-[18px] text-[#084EC5]">
              Skor ini menggabungkan performa dari fokus, ketangkasan, koordinasi tangan-mata, waktu reaksi, keseimbangan, memori, dan keterampilan sosial-emosional. Skor ini mengukur kemahiran dalam tugas-tugas permainan, kemampuan kognitif, dan kemampuan adaptasi emosional. Skor yang lebih tinggi menunjukkan penguasaan yang lebih baik terhadap tantangan dan tujuan permainan.
            </p>
          </div>
        </div>

        {/* Right Column - Chart SVG */}
        <div className="w-[433px] h-[269px] flex-shrink-0">
          <div data-framer-component-type="SVG" className="w-full h-full">
            <div className="w-full h-full" style={{ aspectRatio: 'inherit' }}>
              <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 433 269" preserveAspectRatio="none">
                {/* Chart SVG will be rendered here */}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Week Tabs & Games Chart */}
      <div>
        {/* Week Tabs */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveWeek('week31')}
            className={`px-4 py-2 font-raleway font-bold text-sm leading-[21px] transition-colors ${
              activeWeek === 'week31'
                ? 'text-[#084EC5] border-b-2 border-[#084EC5]'
                : 'text-[#084EC5] hover:bg-blue-50'
            }`}
            style={{ borderBottomWidth: activeWeek === 'week31' ? '2px' : '0' }}
          >
            Minggu 31
          </button>
          <button
            onClick={() => setActiveWeek('week32')}
            className={`px-4 py-2 font-raleway font-bold text-sm leading-[21px] transition-colors ${
              activeWeek === 'week32'
                ? 'text-[#084EC5] border-b-2 border-[#084EC5]'
                : 'text-[#084EC5] hover:bg-blue-50'
            }`}
            style={{ borderBottomWidth: activeWeek === 'week32' ? '2px' : '0' }}
          >
            Minggu 32
          </button>
        </div>

        {/* Date Display */}
        <div className="mb-6">
          <p className="font-raleway font-bold text-xs leading-[18px] text-[#0B1E59]">
            4 Agustus 2025 - 10 Agustus 2025
          </p>
        </div>

        {/* Chart SVG */}
        <div className="w-full h-[401px]">
          <div data-framer-component-type="SVG" className="w-full h-full">
            <div className="w-full h-full" style={{ aspectRatio: 'inherit' }}>
              <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 418 401" preserveAspectRatio="none">
                {/* Chart SVG will be rendered here */}
              </svg>
            </div>
          </div>
        </div>

        {/* Game Icons */}
        <div className="flex justify-between items-center mt-4">
          {games.map((game, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded overflow-hidden">
                <img 
                  src={game.icon}
                  alt={game.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                {game.name === 'PAPAN SEIMBANG' ? (
                  <p className="font-raleway font-bold text-[11px] leading-[13px] text-[#262626] uppercase whitespace-pre-line">
                    PAPAN<br />SEIMBANG
                  </p>
                ) : (
                  game.name.split(' ').map((word, i) => (
                    <p key={i} className="font-raleway font-bold text-[11px] leading-[13px] text-[#262626] uppercase">
                      {word}
                    </p>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverallProgressReportCard;

