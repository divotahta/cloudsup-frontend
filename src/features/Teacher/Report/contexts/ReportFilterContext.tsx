import React, { createContext, useContext, useMemo, useState } from "react";

export type DateRange = {
  start: Date;
  end: Date;
};

type ReportFilterContextValue = {
  dateRange: DateRange;
  setDateRange: (range: DateRange) => void;
  resetToDefault: () => void;
};

const DEFAULT_RANGE_DAYS = 30;

const ReportFilterContext = createContext<ReportFilterContextValue | undefined>(
  undefined
);

const normalizeDate = (date: Date) => {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  return normalized;
};

export const createLastNDaysRange = (
  days: number,
  referenceDate: Date = new Date()
): DateRange => {
  const end = new Date(referenceDate);
  end.setHours(23, 59, 59, 999);

  const start = new Date(end);
  start.setHours(0, 0, 0, 0);
  start.setDate(end.getDate() - (days - 1));

  return { start, end };
};

export const defaultReportDateRange = () => createLastNDaysRange(DEFAULT_RANGE_DAYS);

export function ReportFilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dateRange, setDateRangeState] = useState<DateRange>(() =>
    defaultReportDateRange()
  );

  const setDateRange = (range: DateRange) => {
    const start = normalizeDate(range.start);
    const end = normalizeDate(range.end);

    if (start > end) {
      setDateRangeState({ start: end, end: start });
      return;
    }

    setDateRangeState({ start, end });
  };

  const resetToDefault = () => setDateRangeState(defaultReportDateRange());

  const value = useMemo(
    () => ({
      dateRange,
      setDateRange,
      resetToDefault,
    }),
    [dateRange]
  );

  return (
    <ReportFilterContext.Provider value={value}>
      {children}
    </ReportFilterContext.Provider>
  );
}

export function useReportFilter() {
  const ctx = useContext(ReportFilterContext);
  if (!ctx) {
    throw new Error(
      "useReportFilter harus digunakan di dalam ReportFilterProvider"
    );
  }
  return ctx;
}

export { DEFAULT_RANGE_DAYS as REPORT_DEFAULT_RANGE_DAYS };

