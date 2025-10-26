import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import ChangePlayerModal from './ChangePlayerModal';

interface Player {
  id: string;
  name: string;
  absen: string;
  avatar: string;
}

const PlayerProfileCard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player>({
    id: '1',
    name: 'Hana Sharifah',
    absen: '12',
    avatar: 'https://framerusercontent.com/images/QL4YPq8cbQKu96Z4VlaylTBWeM.png?width=213&height=214'
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = (player: Player) => {
    setSelectedPlayer(player);
  };

  return (
    <>
      <div className="w-[312px] h-[133.6px] bg-gradient-to-r from-[#E82D2F] to-[#C21315] rounded-2xl shadow-[inset_0_8px_16px_rgba(255,255,255,0.16),inset_0_2px_rgba(255,255,255,0.1)] p-7 flex items-center gap-4">
        {/* Avatar */}
        <div className="w-[76px] h-[76px] rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
          <img 
            src={selectedPlayer.avatar} 
            alt={selectedPlayer.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="flex flex-col gap-2 flex-grow min-w-0">
          <h3 className="w-full font-bold text-base leading-5 text-white whitespace-nowrap overflow-hidden text-ellipsis">
            {selectedPlayer.name}
          </h3>
          
          {/* Change Player Button */}
          <button 
            onClick={handleOpenModal}
            className="w-[172px] h-[49.6px] p-4 bg-white rounded-lg border border-gray-800 flex items-center justify-center gap-2 cursor-pointer transition-transform duration-[450ms] ease-[cubic-bezier(0.34,2,0.64,1)] hover:scale-105 active:scale-100"
          >
            <span className="font-bold text-sm leading-4 text-gray-800">Ganti Pemain</span>
            <RefreshCw className="w-4 h-4 text-gray-800 flex-shrink-0" />
          </button>
        </div>
      </div>

      {/* Modal */}
      <ChangePlayerModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default PlayerProfileCard;

