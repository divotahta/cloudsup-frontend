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

// Nilai ini tidak lagi relevan sebagai hari, tetapi tetap dipertahankan
// untuk kompatibilitas jika komponen lain masih merujuk padanya.
const DEFAULT_RANGE_DAYS = 30; 

const ReportFilterContext = createContext<ReportFilterContextValue | undefined>(
  undefined
);

const normalizeDate = (date: Date) => {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  return normalized;
};

// Hapus atau abaikan createLastNDaysRange jika tidak lagi digunakan sebagai default.
// Jika dipertahankan, pastikan fungsinya benar:

// export const createLastNDaysRange = (
//   days: number,
//   referenceDate: Date = new Date()
// ): DateRange => {
//   const end = new Date(referenceDate);
//   end.setHours(23, 59, 59, 999);

//   const start = new Date(end);
//   start.setHours(0, 0, 0, 0);
//   start.setDate(end.getDate() - (days - 1));

//   return { start, end };
// };

/**
 * Fungsi baru untuk mendapatkan rentang "Bulan Ini" (start: tgl 1, end: tgl terakhir)
 */
export const createThisMonthRange = (referenceDate: Date = new Date()): DateRange => {
  const year = referenceDate.getFullYear();
  const month = referenceDate.getMonth();

  // Tanggal mulai: Hari pertama bulan saat ini, jam 00:00:00
  const start = new Date(year, month, 1);
  start.setHours(0, 0, 0, 0); 
  
  // Tanggal akhir: Hari terakhir bulan ini, jam 23:59:59
  const end = new Date(year, month + 1, 0);
  end.setHours(23, 59, 59, 999);

  return { start, end };
};

// Mengubah defaultReportDateRange untuk menggunakan Bulan Ini
export const defaultReportDateRange = () => createThisMonthRange();

export function ReportFilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dateRange, setDateRangeState] = useState<DateRange>(() =>
    defaultReportDateRange()
  );

  const setDateRange = (range: DateRange) => {
    // Normalisasi start dan end, tetapi tidak membuang jam pada end jika jam 23:59:59 (dari preset)
    const start = normalizeDate(range.start);
    
    // Untuk end, kita menggunakan waktu aslinya jika sudah disetel (misalnya 23:59:59 dari preset), 
    // jika tidak, kita normalisasi ke 00:00:00.
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