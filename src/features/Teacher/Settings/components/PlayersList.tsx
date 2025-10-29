function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="w-full">
      <div className="relative group">
        <div className="absolute top-1/2 left-5 -translate-y-1/2 w-5 h-5 text-[#BFBFBF] flex items-center justify-center pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <input
          type="search"
          placeholder="Cari nama, no absen, atau email..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-14 px-[52px] rounded-lg border bg-white text-[16px] text-[#262626] outline-none transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] border-[#BFBFBF] shadow-none focus:border-[#0066FF] focus:shadow-[0_8px_24px_rgba(0,102,255,0.16)]"
        />
      </div>
    </div>
  );
}

import { useState } from "react";
import AddPlayerModal from "./AddPlayerModal";
import EditPlayerModal from "./EditPlayerModal";
import DeletePlayerModal from "./DeletePlayerModal";

function AddPlayerButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex h-14 px-6 bg-[#0066FF] border border-[#0066FF] rounded-lg items-center justify-center gap-2 text-white font-bold text-[14px] shadow-[inset_0_8px_16px_rgba(255,255,255,0.16),inset_0_2px_0_rgba(255,255,255,0.1)] transition-transform duration-[450ms] ease-[cubic-bezier(0.34,2,0.64,1)] active:scale-95 hover:scale-[1.04]"
    >
      <span>Tambahkan Pemain</span>
      <div className="w-4 h-4">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>
    </button>
  );
}

type Player = {
  name: string;
  absen: string;
  image: string;
  disability: string;
  email: string;
  password: string;
};

const PLAYERS: Player[] = [
  {
    name: "Hana Sharifah",
    absen: "12",
    image:
      "https://framerusercontent.com/images/QL4YPq8cbQKu96Z4VlaylTBWeM.png?width=213&height=214",
    disability: "[ADHD] Attention Deficit Hyperactivity Disorder",
    email: "hanasharifah45@gmail.com",
    password: "divotahta",
  },
  {
    name: "Danentara Kusuma",
    absen: "13",
    image:
      "https://framerusercontent.com/images/pOa0LEN8qPwqmyqEeykmYFAxY.png?width=213&height=213",
    disability: "[ASD] Autism Spectrum Disorder",
    email: "danentara.k@gmail.com",
    password: "••••••••",
  },
  {
    name: "Arkana Al-Husna",
    absen: "14",
    image:
      "https://framerusercontent.com/images/29tJJZ9T663Fl2ZBRqQV3NGHEs.png?width=214&height=213",
    disability: "[DS] Down Syndrome",
    email: "arkana.husna@gmail.com",
    password: "••••••••",
  },
  {
    name: "Ananda Mikhail",
    absen: "15",
    image:
      "https://framerusercontent.com/images/olyDklH86xdWuEfWuT5uPR1XB0.png?width=214&height=214",
    disability: "[DCD] Development Coordination Disorder",
    email: "Belum Ditambahkan",
    password: "Belum Ditambahkan",
  },
  {
    name: "Agil Jordi Wardhana",
    absen: "16",
    image:
      "https://framerusercontent.com/images/mPSDUoJG9E3vd899LJakLRonKg.png?width=214&height=213",
    disability: "[CP] Cerebral Palsy",
    email: "Belum Ditambahkan",
    password: "Belum Ditambahkan",
  },
];

function ActionIcons({
  onEdit,
  onDelete,
}: {
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div className="flex gap-4 text-[20px]">
      <div
        onClick={onEdit}
        className="w-5 h-5 text-[#0066FF] cursor-pointer transition-colors"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
      </div>
      <div
        onClick={onDelete}
        className="w-5 h-5 text-[#E82D2F] cursor-pointer transition-colors"
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </div>
    </div>
  );
}

function PasswordCell({ value }: { value: string }) {
  const [visible, setVisible] = useState(false);

  const isEmpty = value.toLowerCase() === "belum ditambahkan";
  const masked = "•".repeat(value.length || 8);
  const display = visible && !isEmpty ? value : masked;

  return (
    <div className="flex items-center gap-2">
      <span>{isEmpty ? value : display}</span>
      {!isEmpty && (
        <button
		className="hover:border-none"
          type="button"
          aria-label={visible ? "Sembunyikan password" : "Lihat password"}
          title={visible ? "Sembunyikan" : "Lihat"}
          onClick={() => setVisible((v) => !v)}
        >
          {visible ? (
            // eye-off icon
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          ) : (
            // eye icon
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          )}
        </button>
      )}
    </div>
  );
}

export default function PlayersList() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredPlayers = PLAYERS.filter((p) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.absen.toLowerCase().includes(q) ||
      p.email.toLowerCase().includes(q)
    );
  });
  return (
    <div className="w-full">
      <div className="flex flex-col items-start text-center gap-2 mb-6">
        <p className="text-[#0066FF] text-[40px] leading-[48px] font-bold">
          Pemain Games
        </p>
        <p className="text-[#262626] text-[16px] font-medium">
          Anda dapat dengan mudah menambahkan, mengubah, atau menghapus pemain,
          pada daftar pemain dibawah ini.
        </p>
      </div>
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="grow w-full sm:w-auto">
            <SearchBar value={query} onChange={setQuery} />
          </div>
          <AddPlayerButton onClick={() => setIsAddOpen(true)} />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="uppercase text-[#595959] text-[12px] font-semibold border-b border-[#E0E0E0]">
                <th className="text-left p-4">Daftar Pemain</th>
                <th className="text-left p-4">Jenis Hambatan</th>
                <th className="text-left p-4">Email</th>
                <th className="text-left p-4">Password</th>
                <th className="text-left p-4">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredPlayers.map((p) => (
                <tr
                  key={p.name}
                  className="text-[14px] text-[#262626] align-top border-b border-[#E0E0E0]"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#E0E0E0] text-[#595959] flex items-center justify-center overflow-hidden shrink-0">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{p.name}</div>
                        <div className="text-[12px] text-[#595959] mt-0.5">
                          Absen: {p.absen}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">{p.disability}</td>
                  <td className="p-4">{p.email}</td>
                  <td className="p-4">
                    <PasswordCell value={p.password} />
                  </td>
                  <td className="p-4">
                    <div className="flex gap-4">
                      <ActionIcons
                        onEdit={() => {
                          setSelectedPlayer(p);
                          setIsEditOpen(true);
                        }}
                        onDelete={() => {
                          setSelectedPlayer(p);
                          setIsDeleteOpen(true);
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddPlayerModal open={isAddOpen} onClose={() => setIsAddOpen(false)} />
      <EditPlayerModal
        open={isEditOpen}
        player={selectedPlayer}
        onClose={() => setIsEditOpen(false)}
      />
      <DeletePlayerModal
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      />
    </div>
  );
}
