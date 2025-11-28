import React from "react";
import {  Printer } from "lucide-react";
import ChangePlayerModal from "./ChangePlayerModal";
import { useSelectedPlayer } from "../contexts/SelectedPlayerContext";
import {
  useReportFilter,
  REPORT_DEFAULT_RANGE_DAYS,
} from "../contexts/ReportFilterContext";
import type { DateRange } from "../contexts/ReportFilterContext";
import DateRangePicker from "./DateRangePicker.tsx";

const ReportHeader: React.FC = () => {
  const { players, loading, currentPlayer, setCurrentPlayer } =
    useSelectedPlayer();
  const [isChangeOpen, setIsChangeOpen] = React.useState(false);
  const { dateRange, setDateRange, resetToDefault } = useReportFilter();
  const [isPickerOpen, setIsPickerOpen] = React.useState(false);
  const pickerRef = React.useRef<HTMLDivElement | null>(null);

  const safeImageSrc =
    currentPlayer?.image && currentPlayer.image.trim() !== ""
      ? currentPlayer.image
      : undefined;

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

  const rangeLabel = formatRangeLabel(dateRange);
  const summaryLabel = buildSummaryLabel(dateRange);
  // const handlePrint = () => {
  //   handlePrint();
  // };

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
                <svg
                  width="15"
                  height="18"
                  viewBox="0 0 15 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1715_634)">
                    <g clip-path="url(#clip1_1715_634)">
                      <g clip-path="url(#clip2_1715_634)">
                        <path
                          d="M12.0498 2.83349H11.2998V2.01293C11.2998 1.79531 11.2208 1.5866 11.0801 1.43272C10.9395 1.27883 10.7487 1.19238 10.5498 1.19238C10.3509 1.19238 10.1601 1.27883 10.0195 1.43272C9.87882 1.5866 9.7998 1.79531 9.7998 2.01293V2.83349H5.2998V2.01293C5.2998 1.79531 5.22078 1.5866 5.08013 1.43272C4.93948 1.27883 4.74871 1.19238 4.5498 1.19238C4.35089 1.19238 4.16012 1.27883 4.01947 1.43272C3.87882 1.5866 3.7998 1.79531 3.7998 2.01293V2.83349H3.0498C2.45306 2.83349 1.88077 3.09284 1.45881 3.55449C1.03686 4.01614 0.799805 4.64227 0.799805 5.29515V15.1418C0.799805 15.7947 1.03686 16.4208 1.45881 16.8825C1.88077 17.3441 2.45306 17.6035 3.0498 17.6035H12.0498C12.6465 17.6035 13.2188 17.3441 13.6408 16.8825C14.0627 16.4208 14.2998 15.7947 14.2998 15.1418V5.29515C14.2998 4.64227 14.0627 4.01614 13.6408 3.55449C13.2188 3.09284 12.6465 2.83349 12.0498 2.83349ZM12.7998 8.57736H2.2998V5.29515C2.2998 5.07752 2.37882 4.86881 2.51947 4.71493C2.66012 4.56104 2.85089 4.47459 3.0498 4.47459H3.7998V5.29515C3.7998 5.51277 3.87882 5.72148 4.01947 5.87537C4.16012 6.02925 4.35089 6.1157 4.5498 6.1157C4.74871 6.1157 4.93948 6.02925 5.08013 5.87537C5.22078 5.72148 5.2998 5.51277 5.2998 5.29515V4.47459H9.7998V5.29515C9.7998 5.51277 9.87882 5.72148 10.0195 5.87537C10.1601 6.02925 10.3509 6.1157 10.5498 6.1157C10.7487 6.1157 10.9395 6.02925 11.0801 5.87537C11.2208 5.72148 11.2998 5.51277 11.2998 5.29515V4.47459H12.0498C12.2487 4.47459 12.4395 4.56104 12.5801 4.71493C12.7208 4.86881 12.7998 5.07752 12.7998 5.29515V8.57736Z"
                          fill="#1F1F1F"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1715_634">
                      <rect
                        width="14"
                        height="17"
                        fill="white"
                        transform="translate(0.799805 0.799805)"
                      />
                    </clipPath>
                    <clipPath id="clip1_1715_634">
                      <rect
                        width="14"
                        height="17"
                        fill="white"
                        transform="translate(0.799805 0.799805)"
                      />
                    </clipPath>
                    <clipPath id="clip2_1715_634">
                      <rect
                        width="14"
                        height="17"
                        fill="white"
                        transform="translate(0.799805 0.799805)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <span className="font-raleway font-normal text-sm text-gray-700">
                  {rangeLabel}
                </span>
                <svg
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1715_639)">
                    <g clip-path="url(#clip1_1715_639)">
                      <path
                        d="M12.4665 1.63281L8.26451 5.83477C7.63967 6.45961 6.62661 6.45961 6.00177 5.83477L1.7998 1.63281"
                        stroke="#1F1F1F"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_1715_639">
                      <rect
                        width="13.3333"
                        height="8"
                        fill="white"
                        transform="translate(0.466797 0.299805)"
                      />
                    </clipPath>
                    <clipPath id="clip1_1715_639">
                      <rect
                        width="13.3333"
                        height="8"
                        fill="white"
                        transform="translate(0.466797 0.299805)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </button>

              {isPickerOpen && (
                <div className="absolute mt-2 z-20">
                  <DateRangePicker
                    initialRange={dateRange}
                    onApply={(nextRange: DateRange) => {
                      setDateRange(nextRange);
                      setIsPickerOpen(false);
                    }}
                    onCancel={() => setIsPickerOpen(false)}
                  />
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
  const diffDays = Math.abs(
    Math.round((endMs - startMs) / (1000 * 60 * 60 * 24))
  );
  const totalDays = diffDays + 1;
  if (totalDays === REPORT_DEFAULT_RANGE_DAYS) {
    return `Menampilkan kemajuan selama ${REPORT_DEFAULT_RANGE_DAYS} hari terakhir`;
  }
  return `Menampilkan kemajuan selama ${totalDays} hari terpilih`;
};
