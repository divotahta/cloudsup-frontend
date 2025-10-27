import React, { useState } from 'react';

const FocusDetailCard: React.FC = () => {
  const [activeWeek, setActiveWeek] = useState<'week31' | 'week32'>('week31');

  return (
    <div className="bg-white rounded-lg p-6">
      {/* Top Section - Image Background */}
      <div className="relative w-full h-[221px] rounded-lg overflow-hidden mb-6">
        {/* Background Image */}
        <img 
          src="https://framerusercontent.com/images/fOnGRPEwiEIx5vpIycwkhzrWPdI.png?width=3648&height=884"
          alt="Focus background"
          className="w-full h-full object-cover object-center"
          style={{ objectFit: 'fill' }}
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          {/* Top Content */}
          <div className="flex items-start gap-3">
            <div>
              <h2 className="font-raleway font-bold text-[25px] leading-[25px] text-white">
                Fokus
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
              90.6%
            </p>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2">
            <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">0</p>
            <div className="flex-1 relative">
              <div className="h-2 bg-white/30 rounded-full">
                <div 
                  className="absolute left-0 top-0 h-full bg-white rounded-full"
                  style={{ width: '90.6%' }}
                >
                  {/* Marker */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center gap-1">
                    <div className="w-px h-3 bg-white" />
                    <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white whitespace-nowrap">
                      90.6
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
              Kemampuan untuk berkonsentrasi pada detail lingkungan permainan sambil secara efektif mencapai tujuannya.
            </p>
          </div>
        </div>

        {/* Chart SVG Overlay */}
        <div className="absolute top-4 right-4 w-[433px] h-[172px] opacity-80">
          <div data-framer-component-type="SVG" className="w-full h-full">
            <div className="w-full h-full" style={{ aspectRatio: 'inherit' }}>
              <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 433 172" preserveAspectRatio="none">
                {/* Chart SVG will be rendered here */}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Week Tabs & Chart */}
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
            {activeWeek === 'week31' ? '28 Juli 2025 - 3 Agustus 2025' : '4 Agustus 2025 - 10 Agustus 2025'}
          </p>
        </div>

        {/* Chart SVG */}
        <div className="w-full h-[401px] mb-4">
          <div data-framer-component-type="SVG" className="w-full h-full">
            <div className="w-full h-full" style={{ aspectRatio: 'inherit' }}>
              <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 418 401" preserveAspectRatio="none">
                {/* Chart SVG will be rendered here */}
              </svg>
            </div>
          </div>
        </div>

        {/* Game Icon - Only show on week 31 */}
        {activeWeek === 'week31' && (
          <div className="flex justify-center items-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-9 h-9 rounded overflow-hidden">
                <img 
                  src="https://framerusercontent.com/images/5I3P3XAnbMenWJjscRxX24z5M.png?width=538&height=506"
                  alt="GELEMBUNG AJAIB"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="font-raleway font-bold text-[11px] leading-[13px] text-[#262626] uppercase">
                  GELEMBUNG
                </p>
                <p className="font-raleway font-bold text-[11px] leading-[13px] text-[#262626] uppercase">
                  AJAIB
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FocusDetailCard;

