import React from 'react';

interface SkillCardProps {
  title: string;
  score: string;
  progress: number;
  gradientColors: string;
  iconUrl: string;
  showClockIcon?: boolean;
  iconSvg?: React.ReactNode; // ikon sebagai JSX/ReactNode (disarankan)
  iconHtml?: string; // ikon sebagai string SVG mentah (fallback)
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  title, 
  score, 
  progress, 
  gradientColors,
  iconUrl,
  showClockIcon = false,
  iconSvg,
  iconHtml
}) => {
  return (
    <div className={`bg-gradient-to-r ${gradientColors} rounded-lg p-6 relative overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={iconUrl}
          alt={title}
          className="w-full h-full object-cover opacity-30"
          style={{ objectPosition: 'center center', objectFit: 'fill' }}
        />
      </div>

      {/* Icon Container */}
      <div className="relative mb-4">
        <div className="w-[70px] h-[70px] relative">
          {/* SVG Icon Container */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              imageRendering: 'pixelated',
              flexShrink: 0,
              fill: 'rgb(0, 0, 0)',
              color: 'rgb(0, 0, 0)',
            }}
          >
            <div className="w-full h-full" style={{ aspectRatio: 'inherit' }}>
              {/* Prioritas: iconSvg (JSX) > iconHtml (string) > placeholder kosong */}
              {iconSvg ? (
                <div className="w-full h-full">{iconSvg}</div>
              ) : iconHtml ? (
                <div
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{ __html: iconHtml }}
                />
              ) : (
                <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 70 70" preserveAspectRatio="none" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="relative mb-3">
        <h3 className="font-raleway font-bold text-[20px] leading-[20px] text-white whitespace-pre-line">
          {title}
        </h3>
      </div>

      {/* Info Icon Container */}
      <div className="relative mb-3">
        <div 
          className="w-[23px] h-6"
          style={{
            imageRendering: 'pixelated',
            flexShrink: 0,
            fill: 'rgb(0, 0, 0)',
            color: 'rgb(0, 0, 0)',
            opacity: 1
          }}
        >
          <div className="w-full h-full" style={{ aspectRatio: 'inherit' }}>
            <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 23 24" preserveAspectRatio="none">
              {/* Info SVG */}
            </svg>
          </div>
        </div>
      </div>

      {/* Progress Bar or Clock Icon */}
      <div className="relative mb-3">
        {!showClockIcon ? (
          <div className="flex items-center gap-2">
            <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">0</p>
            <div className="flex-1 relative">
              <div className="h-2 bg-white/30 rounded-full">
                <div 
                  className="absolute left-0 top-0 h-full bg-white rounded-full"
                  style={{ width: `${progress}%` }}
                >
                  {/* Value Label on Progress Bar */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center gap-1">
                    <div className="w-px h-3 bg-white" />
                    <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white whitespace-nowrap">
                      {progress.toFixed(progress % 1 !== 0 ? 1 : 0)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">100</p>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <p className="font-raleway font-bold text-[30px] leading-[30px] text-white">{score}</p>
            <div 
              className="w-[87px] h-[87px]"
              style={{
                imageRendering: 'pixelated',
                flexShrink: 0,
                fill: 'rgb(0, 0, 0)',
                color: 'rgb(0, 0, 0)',
              }}
            >
              <div className="w-full h-full" style={{ aspectRatio: 'inherit' }}>
                <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 87 87" preserveAspectRatio="none">
                  {/* Clock SVG */}
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Score Display - Only show if not Clock Icon */}
      {!showClockIcon && (
        <div className="relative mb-3">
          <p className="font-raleway font-bold text-[30px] leading-[30px] text-white">
            {score}
          </p>
        </div>
      )}

      {/* Button */}
      <div className="relative">
        <button className="px-4 py-2 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
          <p className="font-raleway font-bold text-xs leading-[12px] text-[#212529] capitalize text-center">
            Lihat detail
          </p>
        </button>
      </div>
    </div>
  );
};

export default SkillCard;
