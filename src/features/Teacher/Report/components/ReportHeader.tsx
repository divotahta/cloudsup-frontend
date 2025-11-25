import React from "react";
import { Calendar, Printer } from "lucide-react";
import ChangePlayerModal from "./ChangePlayerModal";
import { useSelectedPlayer } from "../contexts/SelectedPlayerContext";
import {
  createLastNDaysRange,
  useReportFilter,
  REPORT_DEFAULT_RANGE_DAYS,
} from "../contexts/ReportFilterContext";
import type { DateRange } from "../contexts/ReportFilterContext";

const ReportHeader: React.FC = () => {
  const { players, loading, currentPlayer, setCurrentPlayer } =
    useSelectedPlayer();
  const [isChangeOpen, setIsChangeOpen] = React.useState(false);
  const { dateRange, setDateRange, resetToDefault } = useReportFilter();
  const [isPickerOpen, setIsPickerOpen] = React.useState(false);
  const [draftRange, setDraftRange] = React.useState<DateRange>(dateRange);
  const pickerRef = React.useRef<HTMLDivElement | null>(null);

  const safeImageSrc =
    currentPlayer?.image && currentPlayer.image.trim() !== ""
      ? currentPlayer.image
      : undefined;

  React.useEffect(() => {
    if (isPickerOpen) {
      setDraftRange(dateRange);
    }
  }, [isPickerOpen, dateRange]);

  React.useEffect(() => {
    if (!isPickerOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setIsPickerOpen(false);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsPickerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isPickerOpen]);

  const handleInputChange = (key: keyof DateRange, value: string) => {
    if (!value) return;
    const parsed = parseDateInput(value);
    setDraftRange((prev) => ({ ...prev, [key]: parsed }));
  };

  const handleApplyRange = () => {
    const normalized =
      draftRange.start <= draftRange.end
        ? draftRange
        : { start: draftRange.end, end: draftRange.start };
    setDateRange(normalized);
    setIsPickerOpen(false);
  };

  const rangeLabel = formatRangeLabel(dateRange);
  const summaryLabel = buildSummaryLabel(dateRange);

  return (
    <div className="flex items-center justify-between">
      {/* Left: Player Info & Date Range */}
      <div className="flex items-center justify-between gap-[16px]">
        {/* Player Card */}
        <div className="w-[312px] bg-gradient-to-r from-[#E82D2F] to-[#C21315] rounded-2xl shadow-[inset_0_8px_16px_rgba(255,255,255,0.16),inset_0_2px_rgba(255,255,255,0.1)] p-[28px] flex items-center gap-4">
          {/* Avatar */}
          <div className="w-[76px] h-[76px] rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
            {safeImageSrc ? (
              <img
                src={safeImageSrc}
                alt={currentPlayer?.name || "Pemain"}
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>

          {/* Profile Info */}
          <div className="flex flex-col gap-2 flex-grow min-w-0">
            <h3 className="font-raleway font-bold text-base leading-5 text-white whitespace-nowrap overflow-hidden text-ellipsis">
              {currentPlayer
                ? currentPlayer.name
                : loading
                ? "Memuat pemain..."
                : "Pemain tidak tersedia"}
            </h3>
            <button
              onClick={() => setIsChangeOpen(true)}
              disabled={!players.length}
              className="w-full h-fit p-[16px] bg-white rounded-lg border border-gray-800 flex items-center justify-center gap-2 cursor-pointer transition-transform duration-[450ms] hover:scale-105 active:scale-100 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="font-raleway font-bold text-xs leading-4 text-gray-800">
                Ganti Pemain
              </span>
              <svg
                className="w-4 h-4 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <polyline points="17 1 21 5 17 9" />
                <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                <polyline points="7 23 3 19 7 15" />
                <path d="M21 13v2a4 4 0 0 1-4 4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Date Range & Actions */}
        <div className="flex flex-col gap-2">
          <p className="font-raleway font-bold text-sm text-[#262626]">
            {summaryLabel}
          </p>
          <div className="flex items-center gap-2">
            <div className="relative" ref={pickerRef}>
              <button
                type="button"
                onClick={() => setIsPickerOpen((prev) => !prev)}
                className="px-4 py-2 bg-white border border-black rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-50"
                aria-label="Pilih rentang tanggal"
              >
                <Calendar className="w-5 h-5 text-black" />
                <span className="font-raleway font-normal text-sm text-gray-700">
                  {rangeLabel}
                </span>
              </button>

              {isPickerOpen && (
                <div className="absolute right-0 mt-2 w-[320px] bg-white border border-[#d9d9d9] rounded-xl shadow-lg p-4 z-10">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-gray-600">
                        Tanggal Mulai
                      </label>
                      <input
                        type="date"
                        value={toDateInputValue(draftRange.start)}
                        onChange={(event) =>
                          handleInputChange("start", event.target.value)
                        }
                        className="w-full border border-[#bfbfbf] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#084EC5]"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-gray-600">
                        Tanggal Akhir
                      </label>
                      <input
                        type="date"
                        value={toDateInputValue(draftRange.end)}
                        onChange={(event) =>
                          handleInputChange("end", event.target.value)
                        }
                        className="w-full border border-[#bfbfbf] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#084EC5]"
                      />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {[7, 14, 30, 60].map((days) => (
                        <button
                          key={days}
                          type="button"
                          onClick={() => setDraftRange(createLastNDaysRange(days))}
                          className="flex-1 min-w-[70px] px-3 py-2 text-xs font-semibold border border-[#d9d9d9] rounded-lg hover:border-[#084EC5] hover:text-[#084EC5] transition-colors"
                        >
                          {days} Hari
                        </button>
                      ))}
                    </div>

                    <div className="flex gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setDraftRange(dateRange);
                          setIsPickerOpen(false);
                        }}
                        className="flex-1 px-3 py-2 text-sm font-semibold border border-[#262626] rounded-lg hover:bg-gray-50"
                      >
                        Batal
                      </button>
                      <button
                        type="button"
                        onClick={handleApplyRange}
                        className="flex-1 px-3 py-2 text-sm font-semibold text-white bg-[#084EC5] rounded-lg hover:bg-[#063d99]"
                      >
                        Terapkan
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => {
                resetToDefault();
                setIsPickerOpen(false);
              }}
              className="px-[40px] py-2 bg-white text-black border border-black rounded-lg font-raleway font-semibold text-sm hover:bg-slate-100 transition-colors"
            >
              Laporan Terbaru
            </button>
            {/* Right: Print Button */}
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-black rounded-lg hover:bg-gray-50 transition-colors">
              <Printer className="w-5 h-5 text-black " />
            </button>
            <ChangePlayerModal
              open={isChangeOpen}
              onClose={() => setIsChangeOpen(false)}
              players={players}
              currentPlayer={
                currentPlayer ?? { name: "", absen: "", image: "" }
              }
              onConfirm={(p) => {
                setCurrentPlayer(p);
                setIsChangeOpen(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportHeader;

const formatRangeLabel = (range: DateRange) => {
  const startLabel = formatDisplayDate(range.start);
  const endLabel = formatDisplayDate(range.end);
  return `${startLabel} to ${endLabel}`;
};

const formatDisplayDate = (date: Date) => {
  const formatter = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return formatter.format(date).replace(/\s/g, "-");
};

const buildSummaryLabel = (range: DateRange) => {
  const startMs = new Date(range.start).setHours(0, 0, 0, 0);
  const endMs = new Date(range.end).setHours(0, 0, 0, 0);
  const diffDays = Math.abs(Math.round((endMs - startMs) / (1000 * 60 * 60 * 24)));
  const totalDays = diffDays + 1;
  if (totalDays === REPORT_DEFAULT_RANGE_DAYS) {
    return `Menampilkan kemajuan selama ${REPORT_DEFAULT_RANGE_DAYS} hari terakhir`;
  }
  return `Menampilkan kemajuan selama ${totalDays} hari terpilih`;
};

const toDateInputValue = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const parseDateInput = (value: string) => {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
};
