import React from 'react';
import { Info } from 'lucide-react';

const OverallProgressCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <h2 className="font-raleway font-bold text-[20px] leading-[22px] text-[#084EC5]">
          Laporan kemajuan secara keseluruhan
        </h2>
        <Info className="w-6 h-6 text-gray-500" />
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        {/* Progress Bar Container */}
        <div className="h-4 bg-gray-200 rounded-full relative">
          {/* Progress Fill */}
          <div 
            className="absolute top-0 left-0 h-full bg-[#084EC5] rounded-full"
            style={{ width: '81.1%' }}
          >
            {/* Marker at 81.1 */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
              <div className="flex flex-col items-center">
                <p className="font-raleway font-semibold text-[10px] leading-[10px] text-[#0D469B] bg-white px-1.5 py-0.5 rounded whitespace-nowrap">
                  81.1
                </p>
                <div className="w-px h-4 bg-[#0D469B] mt-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Labels under progress bar */}
        <div className="flex justify-between mt-2">
          <p className="font-raleway font-semibold text-[10px] leading-[10px] text-[#0E2D5D]">0</p>
          <p className="font-raleway font-semibold text-[10px] leading-[10px] text-[#0E2D5D]">100</p>
        </div>
      </div>

      {/* Percentage Display */}
      <div className="mb-6">
        <p className="font-raleway font-bold text-[40px] leading-[40px] text-[#084EC5] mb-3">
          81.1%
        </p>
        <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <p className="font-raleway font-bold text-xs leading-[12px] text-[#212529] capitalize">
            Lihat detail
          </p>
        </button>
      </div>

      {/* Summary Stats */}
      <div className="flex gap-4">
        {/* Total Games Card */}
        <div className="flex-1 p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex flex-col items-center gap-2">
            <img 
              src="https://framerusercontent.com/images/QDvlCSrmIhDHQbj8Pbs6zjXhCM.png?width=212&height=184"
              alt="Game controller"
              className="w-[53px] h-[46px] object-contain"
            />
            <div className="text-center">
              <p className="font-raleway font-bold text-sm leading-[18px] text-[#084EC5]">Total Games</p>
              <p className="font-raleway font-bold text-sm leading-[18px] text-[#084EC5]">dimainkan</p>
            </div>
            <p className="font-raleway font-bold text-[35px] leading-[35px] text-[#084EC5]">16</p>
          </div>
        </div>

        {/* Total Minutes Card */}
        <div className="flex-1 p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex flex-col items-center gap-2">
            <img 
              src="https://framerusercontent.com/images/KNLhL06zzaOON15w5wVkFmZRtmQ.png?width=193&height=208"
              alt="Stopwatch"
              className="w-[48px] h-[52px] object-contain"
            />
            <div className="text-center">
              <p className="font-raleway font-bold text-sm leading-[18px] text-[#084EC5]">Total Menit</p>
              <p className="font-raleway font-bold text-sm leading-[18px] text-[#084EC5]">dimainkan</p>
            </div>
            <div className="flex items-baseline gap-1">
              <p className="font-raleway font-bold text-[35px] leading-[35px] text-[#084EC5]">15</p>
              <p className="font-raleway font-bold text-sm leading-[14px] text-[#084EC5]">mins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallProgressCard;
