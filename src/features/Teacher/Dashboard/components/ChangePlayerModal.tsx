import React, { useState } from 'react';
import { X, Search } from 'lucide-react';

interface Player {
  id: string;
  name: string;
  absen: string;
  avatar: string;
}

interface ChangePlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (player: Player) => void;
}

const ChangePlayerModal: React.FC<ChangePlayerModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const players: Player[] = [
    {
      id: '1',
      name: 'Hana Sharifah',
      absen: '12',
      avatar: 'https://framerusercontent.com/images/QL4YPq8cbQKu96Z4VlaylTBWeM.png?width=213&height=214'
    },
    {
      id: '2',
      name: 'Danentara Kusuma',
      absen: '13',
      avatar: 'https://framerusercontent.com/images/olyDklH86xdWuEfWuT5uPR1XB0.png?width=214&height=214'
    },
    {
      id: '3',
      name: 'Arkana Al-Husna',
      absen: '14',
      avatar: 'https://framerusercontent.com/images/pOa0LEN8qPwqmyqEeykmYFAxY.png?width=213&height=213'
    },
    {
      id: '4',
      name: 'Ananda Mikhail',
      absen: '15',
      avatar: 'https://framerusercontent.com/images/29tJJZ9T663Fl2ZBRqQV3NGHEs.png?width=214&height=213'
    },
    {
      id: '5',
      name: 'Agil Jordi Wardhana',
      absen: '16',
      avatar: 'https://framerusercontent.com/images/mPSDUoJG9E3vd899LJakLRonKg.png?width=214&height=213'
    }
  ];

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    player.absen.includes(searchQuery)
  );

  const handlePlayerSelect = (player: Player) => {
    setSelectedPlayer(player);
  };

  const handleConfirm = () => {
    if (selectedPlayer) {
      onConfirm(selectedPlayer);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className="relative w-full max-w-[480px] bg-white rounded-2xl border-2 border-blue-600 shadow-[8px_8px_0px_0px_rgb(8,78,197)] flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-6 h-6 bg-transparent border-none p-0 cursor-pointer text-gray-400 opacity-70 hover:opacity-100 transition-opacity duration-200"
          >
            <X className="w-full h-full" />
          </button>

          {/* Content */}
          <div className="p-6 flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col gap-1 pr-6">
              <h3 className="font-bold text-2xl text-blue-600 leading-[31.92px] m-0">
                Ganti Pemain
              </h3>
              <p className="font-medium text-sm text-gray-800 leading-[19.6px] m-0">
                Pilih pemain yang akan bermain.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full h-14">
              <div className="absolute top-1/2 left-5 -translate-y-1/2 w-5 h-5 pointer-events-none text-gray-400">
                <Search className="w-full h-full" />
              </div>
              <input
                type="search"
                placeholder="Cari nama/no absen pemain disini ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-full px-[52px] pr-12 rounded-lg border border-gray-300 box-border font-normal text-base text-gray-800 leading-[1.5] outline-none transition-all duration-400 bg-white focus:border-blue-600"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-5 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer p-0 flex items-center justify-center text-gray-400 hover:text-gray-600 w-5 h-5"
                >
                  <X className="w-full h-full" />
                </button>
              )}
            </div>

            {/* Player List */}
            <div className="flex flex-col gap-2 max-h-[280px] overflow-y-auto pr-2">
              {filteredPlayers.map((player) => (
                <div
                  key={player.id}
                  onClick={() => handlePlayerSelect(player)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                    selectedPlayer?.id === player.id
                      ? 'bg-blue-50'
                      : 'bg-transparent hover:bg-gray-50'
                  }`}
                >
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img 
                      src={player.avatar}
                      alt={player.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Player Info */}
                  <div className="flex flex-col gap-1">
                    <span className={`font-semibold text-base ${
                      selectedPlayer?.id === player.id ? 'text-blue-600' : 'text-gray-800'
                    }`}>
                      {player.name}
                    </span>
                    <span className="font-normal text-sm text-gray-500">
                      No. Absen: {player.absen}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-6 mt-4">
              <button
                onClick={onClose}
                className="flex-1 py-4 rounded-lg border border-gray-800 font-bold text-sm leading-4 cursor-pointer transition-transform duration-[450ms] ease-[cubic-bezier(0.34,2,0.64,1)] bg-white text-gray-800 hover:scale-105 active:scale-100"
              >
                Batal
              </button>
              <button
                onClick={handleConfirm}
                disabled={!selectedPlayer}
                className="flex-1 py-4 rounded-lg border-none font-bold text-sm leading-4 cursor-pointer transition-transform duration-[450ms] ease-[cubic-bezier(0.34,2,0.64,1)] bg-blue-600 text-white hover:scale-105 active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Konfirmasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePlayerModal;

