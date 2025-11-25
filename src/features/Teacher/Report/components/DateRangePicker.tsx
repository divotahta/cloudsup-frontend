import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { DateRange } from "../contexts/ReportFilterContext";

type DateRangePickerProps = {
  initialRange: DateRange;
  onApply: (range: DateRange) => void;
  onCancel: () => void;
};

type QuickRange = {
  key: string;
  label: string;
  getRange?: () => DateRange;
  requiresPicker?: boolean;
};

const WEEKDAY_LABELS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const stripTime = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

const addDays = (date: Date, amount: number) => {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
};

const addMonths = (date: Date, amount: number) =>
  new Date(date.getFullYear(), date.getMonth() + amount, 1);

const startOfMonth = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), 1);

const getMonthMatrix = (monthDate: Date) => {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const firstDay = new Date(year, month, 1);
  const totalDays = new Date(year, month + 1, 0).getDate();
  const leadingEmpty = (firstDay.getDay() + 6) % 7; // Monday-first grid
  const cells: Array<Date | null> = Array(leadingEmpty).fill(null);

  for (let day = 1; day <= totalDays; day += 1) {
    cells.push(new Date(year, month, day));
  }

  while (cells.length % 7 !== 0) {
    cells.push(null);
  }

  return cells;
};

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const isAfter = (a: Date, b: Date) => a.getTime() > b.getTime();
const isBefore = (a: Date, b: Date) => a.getTime() < b.getTime();

const normalizeRange = (range: DateRange): DateRange => ({
  start: stripTime(range.start),
  end: stripTime(range.end),
});

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  initialRange,
  onApply,
  onCancel,
}) => {
  const [draftRange, setDraftRange] = React.useState<DateRange>(
    normalizeRange(initialRange)
  );
  const [selectionPhase, setSelectionPhase] = React.useState<"start" | "end">(
    "start"
  );
  const [visibleMonth, setVisibleMonth] = React.useState<Date>(
    startOfMonth(initialRange.start)
  );
  const [activeQuickKey, setActiveQuickKey] = React.useState<string | null>(
    null
  );

  const rangesEqual = React.useCallback((a: DateRange, b: DateRange) => {
    return isSameDay(a.start, b.start) && isSameDay(a.end, b.end);
  }, []);

  const quickRanges = React.useMemo<QuickRange[]>(
    () => [
      {
        key: "today",
        label: "Hari Ini",
        getRange: () => {
          const today = stripTime(new Date());
          return { start: today, end: today };
        },
      },
      {
        key: "yesterday",
        label: "Kemarin",
        getRange: () => {
          const yesterday = addDays(stripTime(new Date()), -1);
          return { start: yesterday, end: yesterday };
        },
      },
      {
        key: "thisWeek",
        label: "Minggu Ini",
        getRange: () => {
          const today = stripTime(new Date());
          const dayIndex = (today.getDay() + 6) % 7;
          const start = addDays(today, -dayIndex);
          const end = addDays(start, 6);
          return { start, end };
        },
      },
      {
        key: "lastWeek",
        label: "Minggu Kemarin",
        getRange: () => {
          const today = stripTime(new Date());
          const dayIndex = (today.getDay() + 6) % 7;
          const endOfLastWeek = addDays(today, -dayIndex - 1);
          const start = addDays(endOfLastWeek, -6);
          return { start, end: endOfLastWeek };
        },
      },
      {
        key: "thisMonth",
        label: "Bulan Ini",
        getRange: () => {
          const today = stripTime(new Date());
          const start = new Date(today.getFullYear(), today.getMonth(), 1);
          const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
          return { start, end };
        },
      },
      {
        key: "lastMonth",
        label: "Bulan Kemarin",
        getRange: () => {
          const today = stripTime(new Date());
          const start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
          const end = new Date(today.getFullYear(), today.getMonth(), 0);
          return { start, end };
        },
      },
      {
        key: "thisYear",
        label: "Tahun Ini",
        getRange: () => {
          const today = stripTime(new Date());
          const start = new Date(today.getFullYear(), 0, 1);
          const end = new Date(today.getFullYear(), 11, 31);
          return { start, end };
        },
      },
      {
        key: "lastYear",
        label: "Tahun Kemarin",
        getRange: () => {
          const today = stripTime(new Date());
          const start = new Date(today.getFullYear() - 1, 0, 1);
          const end = new Date(today.getFullYear() - 1, 11, 31);
          return { start, end };
        },
      },
      {
        key: "custom",
        label: "Rentang Khusus",
        requiresPicker: true,
      },
    ],
    []
  );

  React.useEffect(() => {
    const normalizedInitial = normalizeRange(initialRange);
    setDraftRange(normalizedInitial);
    setSelectionPhase("start");
    setVisibleMonth(startOfMonth(normalizedInitial.start));

    const matchingQuick = quickRanges.find(
      (quick) =>
        !quick.requiresPicker &&
        quick.getRange &&
        rangesEqual(normalizedInitial, normalizeRange(quick.getRange()))
    );
    setActiveQuickKey(matchingQuick ? matchingQuick.key : "custom");
  }, [initialRange, quickRanges, rangesEqual]);

  const handleQuickSelect = (quick: QuickRange) => {
    if (quick.requiresPicker) {
      setActiveQuickKey(quick.key);
      return;
    }
    if (quick.getRange) {
      onApply(normalizeRange(quick.getRange()));
    }
  };

  const handleDayClick = (day: Date) => {
    setActiveQuickKey("custom");
    const normalizedDay = stripTime(day);
    if (selectionPhase === "start") {
      setDraftRange({ start: normalizedDay, end: normalizedDay });
      setSelectionPhase("end");
      return;
    }

    if (isBefore(normalizedDay, draftRange.start)) {
      setDraftRange({ start: normalizedDay, end: draftRange.start });
    } else {
      setDraftRange({ start: draftRange.start, end: normalizedDay });
    }
    setSelectionPhase("start");
  };

  const handleApply = () => {
    const normalized =
      isAfter(draftRange.start, draftRange.end) &&
      !isSameDay(draftRange.start, draftRange.end)
        ? { start: draftRange.end, end: draftRange.start }
        : draftRange;
    onApply(normalizeRange(normalized));
  };

  const monthViews = [
    visibleMonth,
    addMonths(visibleMonth, 1),
  ];

  const showCustomView = activeQuickKey === "custom";
  const containerWidthClass = showCustomView ? "w-[760px]" : "w-[260px]";
  const contentGapClass = showCustomView ? "gap-6" : "gap-0";
  const presetWidthClass = showCustomView ? "w-[160px]" : "w-full";

  return (
    <div
      className={`${containerWidthClass} bg-white border border-[#E5E7EB] rounded-2xl shadow-[0_25px_65px_rgba(15,23,42,0.15)] p-4`}
    >
      <div className={`flex ${contentGapClass}`}>
        <div className={`${presetWidthClass} flex flex-col`}>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Preset rentang
          </p>
          <div className="flex flex-col gap-1">
            {quickRanges.map((quick) => (
              <button
                key={quick.key}
                type="button"
                onClick={() => handleQuickSelect(quick)}
                className={`text-left px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeQuickKey === quick.key
                    ? "bg-[#F0EBFF] text-[#0066FF]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {quick.label}
              </button>
            ))}
          </div>
        </div>

        {showCustomView && (
          <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={() => setVisibleMonth(addMonths(visibleMonth, -1))}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50"
              aria-label="Bulan sebelumnya"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <div className="flex gap-8">
              {monthViews.map((monthDate) => (
                <MonthView
                  key={`${monthDate.getFullYear()}-${monthDate.getMonth()}`}
                  monthDate={monthDate}
                  draftRange={draftRange}
                  onDayClick={handleDayClick}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setVisibleMonth(addMonths(visibleMonth, 1))}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50"
              aria-label="Bulan berikutnya"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <DateDisplay label="Start date" date={draftRange.start} />
              <span className="text-gray-400 font-semibold">—</span>
              <DateDisplay label="End date" date={draftRange.end} />
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleApply}
                className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-[#0066FF] hover:bg-[#0066FF]"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

type MonthViewProps = {
  monthDate: Date;
  draftRange: DateRange;
  onDayClick: (day: Date) => void;
};

const MonthView: React.FC<MonthViewProps> = ({
  monthDate,
  draftRange,
  onDayClick,
}) => {
  const days = getMonthMatrix(monthDate);
  const title = monthDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="w-[240px]">
      <div className="text-center font-semibold text-gray-800">{title}</div>
      <div className="grid grid-cols-7 gap-1 text-xs text-gray-400 mt-2 mb-1">
        {WEEKDAY_LABELS.map((label) => (
          <div key={label} className="h-8 flex items-center justify-center">
            {label}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-sm">
        {days.map((date, index) => {
          if (!date) {
            return <div key={`empty-${index}`} className="h-10" />;
          }

          const dayNumber = date.getDate();
          const isStart = isSameDay(date, draftRange.start);
          const isEnd = isSameDay(date, draftRange.end);
          const inRange =
            !isStart &&
            !isEnd &&
            !isBefore(date, draftRange.start) &&
            !isAfter(date, draftRange.end);

          return (
            <button
              key={date.toISOString()}
              type="button"
              onClick={() => onDayClick(date)}
              className={`h-[35px] w-[35px] p-[10px] mx-[15px] flex items-center justify-center rounded-full transition-colors ${
                isStart || isEnd
                  ? "bg-[#0066FF] text-white font-semibold"
                  : inRange
                  ? "bg-[#EDF8FF] text-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {dayNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
};

type DateDisplayProps = {
  label: string;
  date: Date;
};

const DateDisplay: React.FC<DateDisplayProps> = ({ label, date }) => (
  <div className="flex flex-col gap-1">
    <span className="text-xs font-semibold text-gray-500 uppercase">
      {label}
    </span>
    <div className="min-w-[140px] px-3 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-800">
      {date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })}
    </div>
  </div>
);

export default DateRangePicker;

