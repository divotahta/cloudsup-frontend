import React, { useState, useRef, useEffect } from 'react';

const CameraButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Blink Animation Style */}
      <style>{`
        @keyframes blink {
          0%, 100% { 
            opacity: 1; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.3; 
            transform: scale(0.8); 
          }
        }
      `}</style>

      <div style={{ position: 'relative', width: 'fit-content', zIndex: 50 }} ref={dropdownRef}>
        {/* Camera Button */}
        <div 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '10000px',
            backgroundColor: 'rgb(237, 248, 255)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s, background-color 0.2s',
            position: 'relative'
          }}
        >
          {/* Camera Icon */}
          <div style={{ width: '20px', height: '20px', color: 'rgb(0, 102, 255)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span 
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                backgroundColor: 'currentColor',
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskImage: 'url(https://framerusercontent.com/images/lHM9902BG7BQkLTwz1X8hC6OjHc.svg?width=24&height=24)',
                WebkitMaskImage: 'url(https://framerusercontent.com/images/lHM9902BG7BQkLTwz1X8hC6OjHc.svg?width=24&height=24)'
              }}
            />
          </div>

          {/* Notification Dot */}
          <div 
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'rgb(249, 58, 60)',
              border: '2px solid #FFFFFF',
              position: 'absolute',
              top: '9px',
              right: '9px',
              animation: 'blink 1.5s infinite ease-in-out',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div 
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: '0px',
              width: '240px',
              minWidth: '180px',
              backgroundColor: 'rgb(255, 255, 255)',
              border: '1px solid rgb(224, 224, 224)',
              borderRadius: '8px',
              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 50
            }}
          >
            <div style={{ padding: '4px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {/* Header */}
              <div 
                style={{
                  padding: '8px 8px 4px 8px',
                  fontFamily: 'Raleway',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: 'rgb(69, 69, 69)',
                  borderBottom: '1px solid rgb(224, 224, 224)',
                  userSelect: 'none'
                }}
              >
                Kamera yang Tersedia
              </div>
              
              {/* Camera List */}
              <div style={{ maxHeight: '150px', overflowY: 'auto' }}>
                <div 
                  style={{
                    padding: '10px 12px',
                    fontFamily: 'Raleway',
                    fontSize: '14px',
                    color: 'rgb(136, 136, 136)',
                    textAlign: 'center'
                  }}
                >
                  Izin kamera ditolak.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CameraButton;
