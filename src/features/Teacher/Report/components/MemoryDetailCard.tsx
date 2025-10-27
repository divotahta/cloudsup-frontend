import React, { useState } from 'react';

const MemoryDetailCard: React.FC = () => {
  const [activeWeek, setActiveWeek] = useState<'week31' | 'week32'>('week32');

  return (
    <div className="bg-white rounded-lg p-6">
      {/* Top Section - Background Image with Content */}
      <div className="relative w-full h-[254px] rounded-lg overflow-hidden mb-6">
        {/* Background Image */}
        <img 
          src="https://framerusercontent.com/images/1piEgWNI4n9ftqLjABYQ6vTnSY.png?width=3648&height=1016"
          alt="Memory background"
          className="w-full h-full object-cover object-center"
          style={{ objectFit: 'fill' }}
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          {/* Top Content */}
          <div className="flex items-start gap-3">
            <div>
              <h2 className="font-raleway font-bold text-[25px] leading-[25px] text-white">
                Memori
              </h2>
            </div>
            {/* Info Icon SVG */}
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
          <div className="mb-4">
            <p className="font-raleway font-bold text-[30px] leading-[40px] text-white">
              100%
            </p>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2">
            <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">0</p>
            <div className="flex-1 relative">
              <div className="h-2 bg-white/30 rounded-full">
                <div 
                  className="absolute left-0 top-0 h-full bg-white rounded-full"
                  style={{ width: '100%' }}
                >
                  {/* Marker */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center gap-1">
                    <div className="w-px h-3 bg-white" />
                    <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white whitespace-nowrap">
                      100
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">100</p>
          </div>

          {/* Description */}
          <div className="mt-4">
            <p className="font-raleway font-semibold text-[15px] leading-[18px] text-white">
              Kemampuan untuk secara efisien menyandikan, menafsirkan, menyimpan, dan mengambil informasi yang ditemui selama bermain game, memfasilitasi retensi dan pemanfaatan pengetahuan serta strategi terkait game.
            </p>
          </div>
        </div>

        {/* Chart SVG Overlay */}
        <div className="absolute top-4 right-4 w-[433px] h-[205px] opacity-80">
          <div className="w-full h-full">
            <div className="w-full h-full" style={{ aspectRatio: 'inherit' }}>
              <img 
                src="https://framerusercontent.com/images/yB8ZqIG9nmWr6rVXruVSuxYw.svg?width=433&height=205"
                alt="Chart"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Week Tabs & Chart */}
      <div>
        {/* Week Tabs - Pink Color for this skill */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveWeek('week31')}
            className={`px-4 py-2 font-raleway font-bold text-sm leading-[21px] transition-colors ${
              activeWeek === 'week31'
                ? 'text-[#CC0A73] border-b-2 border-[#CC0A73]'
                : 'text-[#CC0A73] hover:bg-pink-50'
            }`}
            style={{ borderBottomWidth: activeWeek === 'week31' ? '2px' : '0' }}
          >
            Minggu 31
          </button>
          <button
            onClick={() => setActiveWeek('week32')}
            className={`px-4 py-2 font-raleway font-bold text-sm leading-[21px] transition-colors ${
              activeWeek === 'week32'
                ? 'text-[#CC0A73] border-b-2 border-[#CC0A73]'
                : 'text-[#CC0A73] hover:bg-pink-50'
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
        <div className="w-full h-[401px] mb-6">
          <div data-framer-component-type="SVG" className="w-full h-full">
            <div className="w-full h-full" style={{ aspectRatio: 'inherit' }}>
              <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 418 401" preserveAspectRatio="none">
                {/* Chart SVG will be rendered here */}
              </svg>
            </div>
          </div>
        </div>

        {/* Game Icon - KARTU COCOK */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center gap-2">
            <div className="w-9 h-9 rounded overflow-hidden">
              <img 
                src="https://framerusercontent.com/images/SFEfgSYbe53srnzCJKt25zMYb8.png?width=538&height=506"
                alt="KARTU COCOK"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <p className="font-raleway font-bold text-[11px] leading-[13px] text-[#262626] uppercase">
                KARTU
              </p>
              <p className="font-raleway font-bold text-[11px] leading-[13px] text-[#262626] uppercase">
                COCOK
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryDetailCard;

