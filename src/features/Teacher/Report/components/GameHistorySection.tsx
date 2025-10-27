import React, { useState } from 'react';

const GameHistorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'games' | 'time'>('games');

  const games = [
    { name: 'GELEMBUNG AJAIB', value: 10, icon: 'https://framerusercontent.com/images/5I3P3XAnbMenWJjscRxX24z5M.png?width=538&height=506', color: '#FE3905' },
    { name: 'PAPAN SEIMBANG', value: 8, icon: 'https://framerusercontent.com/images/FR7BN9QpiRVUPGBwQnTS1gd1rQo.png?width=538&height=506', color: '#FEB51A' },
    { name: 'TANGKAP RASA', value: 6, icon: 'https://framerusercontent.com/images/MMaNnP62Y1mEGXox40R4JAyw.png?width=538&height=506', color: '#00B510' },
    { name: 'KARTU COCOK', value: 4, icon: 'https://framerusercontent.com/images/SFEfgSYbe53srnzCJKt25zMYb8.png?width=538&height=506', color: '#FA3AB1' },
  ];

  return (
    <div className="bg-white rounded-lg p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="font-raleway font-bold text-[20px] leading-[21.2px] text-[#084EC5] mb-4">
          Riwayat penggunaan game
        </h2>
        <div className="h-px bg-gray-200 mb-4" />
        
        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('games')}
            className={`px-4 py-2 rounded-lg font-raleway font-bold text-sm leading-[21px] transition-colors ${
              activeTab === 'games'
                ? 'bg-[#084EC5] text-white border-b-2 border-[#084EC5]'
                : 'text-[#084EC5] hover:bg-blue-50'
            }`}
            style={{ borderBottomWidth: activeTab === 'games' ? '2px' : '0' }}
          >
            Jumlah Game Dimainkan
          </button>
          <button
            onClick={() => setActiveTab('time')}
            className={`px-4 py-2 rounded-lg font-raleway font-bold text-sm leading-[21px] transition-colors ${
              activeTab === 'time'
                ? 'bg-[#084EC5] text-white border-b-2 border-[#084EC5]'
                : 'text-[#084EC5] hover:bg-blue-50'
            }`}
            style={{ borderBottomWidth: activeTab === 'time' ? '2px' : '0' }}
          >
            Waktu Bermain
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'games' && (
        <>
          {/* Chart */}
          <div className="mb-6">
            <div className="flex items-end gap-4 h-[200px]">
              {/* Y-axis */}
              <div className="flex flex-col justify-between h-full">
                <p className="font-raleway font-semibold text-xs text-[#1E4BA9]">10</p>
                <p className="font-raleway font-semibold text-xs text-[#1E4BA9]">8</p>
                <p className="font-raleway font-semibold text-xs text-[#1E4BA9]">6</p>
                <p className="font-raleway font-semibold text-xs text-[#1E4BA9]">4</p>
                <p className="font-raleway font-semibold text-xs text-[#1E4BA9]">2</p>
                <p className="font-raleway font-semibold text-xs text-[#333]">0</p>
              </div>

              {/* Bars */}
              <div className="flex-1 flex items-end justify-between">
                {games.map((game, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="flex-1 w-full flex items-end">
                      <div 
                        className="w-full rounded-t-lg border border-white shadow-lg relative"
                        style={{ 
                          height: `${(game.value / 10) * 100}%`,
                          backgroundColor: game.color,
                          boxShadow: 'rgba(255, 255, 255, 0.16) 0px 8px 16px 0px inset, rgba(255, 255, 255, 0.1) 0px 2px 0px 0px inset'
                        }}
                      >
                        {/* Value label on bar */}
                        <div className="absolute top-2 right-2 text-white font-raleway font-semibold text-xs">
                          {game.value}
                        </div>
                      </div>
                    </div>
                    
                    {/* Game icon and name */}
                    <div className="flex flex-col items-center gap-1 mt-2">
                      <img 
                        src={game.icon}
                        alt={game.name}
                        className="w-9 h-9 rounded"
                      />
                      <div className="text-center">
                        <p className="font-raleway font-bold text-[10px] leading-[13px] text-[#1B1A1A] uppercase">
                          {game.name.split(' ')[0]}
                        </p>
                        {game.name.split(' ').length > 1 && (
                          <p className="font-raleway font-bold text-[10px] leading-[13px] text-[#1B1A1A] uppercase">
                            {game.name.split(' ')[1]}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Heatmap Section */}
          <div className="mt-8">
            <h3 className="font-raleway font-bold text-sm leading-[14px] text-[#084EC5] mb-4">
              Jumlah game dimainkan dalam heat map
            </h3>

            {/* Heatmap Chart Placeholder */}
            <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
              <p className="font-raleway text-sm text-gray-500">
                Heatmap Chart (Minggu 28, 29, 30, 31, 32 - Senin-Minggu)
              </p>
            </div>
          </div>
        </>
      )}

      {activeTab === 'time' && (
        <div className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
          <p className="font-raleway text-sm text-gray-500">
            Waktu Bermain Chart
          </p>
        </div>
      )}
    </div>
  );
};

export default GameHistorySection;

