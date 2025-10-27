import React, { useState } from 'react';

const AgilityDetailCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'week31' | 'week32' | 'progress'>('week31');

  return (
    <div className="bg-white rounded-lg p-6">
      {/* Top Section - Background Image with Content */}
      <div className="relative w-full h-[254px] rounded-lg overflow-hidden mb-6">
        {/* Background Image */}
        <img 
          src="https://framerusercontent.com/images/RiwcUOJhNePfyV5Wfg3eDyRjw.png?width=3648&height=1016"
          alt="Agility background"
          className="w-full h-full object-cover object-center"
          style={{ objectFit: 'fill' }}
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          {/* Top Content */}
          <div className="flex items-start gap-3">
            <div>
              <h2 className="font-raleway font-bold text-[25px] leading-[25px] text-white">
                Ketangkasan
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
              97.8%
            </p>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2">
            <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">0</p>
            <div className="flex-1 relative">
              <div className="h-2 bg-white/30 rounded-full">
                <div 
                  className="absolute left-0 top-0 h-full bg-white rounded-full"
                  style={{ width: '97.8%' }}
                >
                  {/* Marker */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center gap-1">
                    <div className="w-px h-3 bg-white" />
                    <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white whitespace-nowrap">
                      97.8
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
              Kemampuan untuk menggerakkan atau memposisikan tubuh Anda dengan cepat dan akurat dengan koordinasi, memungkinkan respons yang cepat dan tepat terhadap perubahan situasi dalam permainan.
            </p>
          </div>
        </div>

        {/* Chart SVG Overlay */}
        <div className="absolute top-4 right-4 w-[433px] h-[205px] opacity-80">
          <div className="w-full h-full">
            <div className="w-full h-full" style={{ aspectRatio: 'inherit' }}>
              <img 
                src="https://framerusercontent.com/images/8ryDUVcfpnKvOcMAhJD28FJGDEk.svg?width=433&height=205"
                alt="Chart"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Heat Map */}
      <div>
        {/* Title */}
        <div className="mb-4">
          <h2 className="font-raleway font-bold text-[20px] leading-[20px] text-[#B64C07]">
            Heat map layar
          </h2>
        </div>

        {/* Heat Map Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
          {/* Pattern Background */}
          <div 
            className="w-full h-[126px] rounded-lg mb-4"
            style={{
              backgroundImage: 'url("data:image/svg+xml,<svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;126&quot; height=&quot;126&quot;><path id=&quot;a&quot; d=&quot;M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z&quot; fill=&quot;rgb(136, 136, 136, 0.2)&quot; fill-rule=&quot;evenodd&quot;/></svg>")',
              backgroundRepeat: 'repeat',
              backgroundSize: '64px',
              backgroundPosition: 'left top'
            }}
          />
          
          {/* Subtitle */}
          <p className="font-raleway font-bold text-sm leading-[14px] text-[#1B1A1A] text-center mb-2">
            rentang gerak
          </p>
          
          {/* Description */}
          <p className="font-raleway font-semibold text-sm leading-[17px] text-[#1B1A1A] text-center">
            Kemampuan anak untuk berkonsentrasi pada tugas dan rangsangan di lingkungan permainan, termasuk mempertahankan perhatian pada tujuan, tantangan, atau instruksi tertentu yang disajikan selama bermain.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setActiveTab('week31')}
            className={`px-4 py-2 font-raleway font-bold text-sm leading-[21px] transition-colors ${
              activeTab === 'week31'
                ? 'text-[#B64C07] border-b-2 border-[#B64C07]'
                : 'text-[#B64C07] hover:bg-orange-50'
            }`}
            style={{ borderBottomWidth: activeTab === 'week31' ? '2px' : '0' }}
          >
            Minggu 31
          </button>
          <button
            onClick={() => setActiveTab('week32')}
            className={`px-4 py-2 font-raleway font-bold text-sm leading-[21px] transition-colors ${
              activeTab === 'week32'
                ? 'text-[#B64C07] border-b-2 border-[#B64C07]'
                : 'text-[#B64C07] hover:bg-orange-50'
            }`}
            style={{ borderBottomWidth: activeTab === 'week32' ? '2px' : '0' }}
          >
            Minggu 32
          </button>
          <button
            onClick={() => setActiveTab('progress')}
            className={`px-4 py-2 font-raleway font-bold text-sm leading-[21px] transition-colors ${
              activeTab === 'progress'
                ? 'text-[#B64C07] border-b-2 border-[#B64C07]'
                : 'text-[#B64C07] hover:bg-orange-50'
            }`}
            style={{ borderBottomWidth: activeTab === 'progress' ? '2px' : '0' }}
          >
            Keseluruhan Progress
          </button>
        </div>

        {/* Chart SVG */}
        <div className="w-full h-[401px] mb-6">
          <div data-framer-component-type="SVG" className="w-full h-full">
            <div className="w-full h-full" style={{ aspectRatio: 'inherit' }}>
              <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 636 401" preserveAspectRatio="none">
                {/* Chart SVG will be rendered here */}
              </svg>
            </div>
          </div>
        </div>

        {/* Heat Map Legend */}
        <div className="flex justify-center gap-6 mb-4">
          <div className="flex flex-col items-center gap-2">
            <p className="font-raleway font-medium text-sm leading-[15px] text-[#212529]">Spot lemah</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-raleway font-medium text-sm leading-[15px] text-[#212529]">Spot tengah</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-raleway font-medium text-sm leading-[15px] text-[#212529]">Spot kuat</p>
          </div>
        </div>

        {/* Body Heat Map SVG */}
        <div className="w-full h-[271px]">
          <div data-framer-component-type="SVG" className="w-full h-full">
            <div className="w-full h-full" style={{ aspectRatio: 'inherit' }}>
              <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 248 271" preserveAspectRatio="none">
                {/* Body SVG will be rendered here */}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgilityDetailCard;

