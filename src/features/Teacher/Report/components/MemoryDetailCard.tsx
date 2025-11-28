import React, { useState, useMemo } from "react";
import { LucideInfo } from "lucide-react";
import MemoryIcon from "../../../../assets/images/report/memori.svg";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

// Definisikan tipe untuk minggu yang aktif: Minggu 1, 2, 3, 4
type ActiveWeek = "week1" | "week2" | "week3" | "week4";

const MemoryDetailCard: React.FC = () => {
  // Ubah state awal ke "week1" dan tipenya
  const [activeWeek, setActiveWeek] = useState<ActiveWeek>("week1");
  const games = [
    {
      name: "GELEMBUNG AJAIB",
      icon: "https://framerusercontent.com/images/5I3P3XAnbMenWJjscRxX24z5M.png?width=538&height=506",
    },
    {
      name: "PAPAN SEIMBANG",
      icon: "https://framerusercontent.com/images/FR7BN9QpiRVUPGBwQnTS1gd1rQo.png?width=538&height=506",
    },
    {
      name: "TANGKAP RASA",
      icon: "https://framerusercontent.com/images/MMaNnP62Y1mEGXox40R4JAyw.png?width=538&height=506",
    },
    {
      name: "KARTU COCOK",
      icon: "https://framerusercontent.com/images/SFEfgSYbe53srnzCJKt25zMYb8.png?width=538&height=506",
    },
  ];

  // Data untuk vertical bar chart (Minggu 1 s/d 4)
  const weekComparisonData: Record<ActiveWeek, number> = {
    week1: 70.7, // Data Awal
    week2: 79.4,
    week3: 85.0, // Data dummy baru
    week4: 90.5, // Data dummy baru
  };

  // Data untuk horizontal bar chart berdasarkan minggu
  const gameProgressData: Record<ActiveWeek, Record<string, number>> = {
    week1: {
      "GELEMBUNG AJAIB": 75,
      "PAPAN SEIMBANG": 45,
      "TANGKAP RASA": 80,
      "KARTU COCOK": 95,
    },
    week2: {
      "GELEMBUNG AJAIB": 85,
      "PAPAN SEIMBANG": 50,
      "TANGKAP RASA": 85,
      "KARTU COCOK": 100,
    },
    week3: {
      "GELEMBUNG AJAIB": 90,
      "PAPAN SEIMBANG": 60,
      "TANGKAP RASA": 90,
      "KARTU COCOK": 100,
    },
    week4: {
      "GELEMBUNG AJAIB": 95,
      "PAPAN SEIMBANG": 70,
      "TANGKAP RASA": 95,
      "KARTU COCOK": 100,
    },
  };

  // Data tanggal untuk setiap minggu (contoh)
  const weekDates: Record<ActiveWeek, string> = {
    week1: "4 Maret 2025 - 10 Maret 2025",
    week2: "11 Maret 2025 - 17 Maret 2025",
    week3: "18 Maret 2025 - 24 Maret 2025",
    week4: "25 Maret 2025 - 31 Maret 2025",
  };

  // Konfigurasi Vertical Bar Chart (Minggu 1 s/d 4)
  const verticalChartOptions = useMemo(
    () => ({
      chart: {
        type: "column",
        height: 401, // TIDAK DIUBAH
        backgroundColor: "transparent",
        spacing: [0, 0, 0, 0],
      },
      title: {
        text: null,
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        // Update kategori ke Minggu 1 s/d 4
        categories: ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4"],
        labels: {
          style: {
            fontFamily: "Raleway",
            fontWeight: "700",
            fontSize: "14px",
            color: "rgb(204, 10, 115)",
          },
        },
        lineWidth: 0,
        tickWidth: 0,
      },
      yAxis: {
        min: 0,
        max: 100,
        tickPositions: [0, 20, 40, 60, 80, 100],
        title: {
          text: null,
        },
        labels: {
          style: {
            fontFamily: "Raleway",
            fontWeight: "700",
            fontSize: "12px",
            color: "rgb(204, 10, 115)",
          },
        },
        gridLineColor: "rgb(255, 255, 255)",
        gridLineWidth: 1,
      },
      plotOptions: {
        column: {
          borderRadius: 4,
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            style: {
              fontFamily: "Raleway",
              fontWeight: "700",
              fontSize: "12px",
              color: "rgb(204, 10, 115)",
            },
            formatter: function (this: any) {
              return this.y.toFixed(1);
            },
          },
          states: {
            hover: {
              enabled: false,
            },
          },
        },
      },
      series: [
        {
          name: "Progress",
          data: [
            // Update data series
            { y: weekComparisonData.week1, color: "rgb(204, 10, 115)" },
            { y: weekComparisonData.week2, color: "rgb(204, 10, 115)" },
            { y: weekComparisonData.week3, color: "rgb(204, 10, 115)" },
            { y: weekComparisonData.week4, color: "rgb(204, 10, 115)" },
          ],
          pointPadding: 0.2,
          groupPadding: 0.3,
        },
      ],
      tooltip: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
    }),
    [weekComparisonData]
  );

  // Konfigurasi Horizontal Bar Chart (Games)
  const horizontalChartOptions = useMemo(
    () => ({
      chart: {
        type: "bar",
        height: 401, // TIDAK DIUBAH
        backgroundColor: "transparent",
        spacing: [0, 0, 0, 0],
      },
      title: {
        text: null,
      },
      credits: {
        enabled: false,
      },
      yAxis: {
        min: 0,
        max: 100,
        tickPositions: [0, 25, 50, 75, 100],
        title: {
          text: null,
        },
        labels: {
          style: {
            fontFamily: "Raleway",
            fontWeight: "700",
            fontSize: "12px",
            color: "rgb(204, 10, 115)",
          },
        },
        gridLineColor: "rgb(255, 255, 255)",
        gridLineWidth: 1,
      },
      xAxis: {
        categories: games.map((g) => g.name),
        labels: {
          enabled: false,
        },
        lineWidth: 0,
        tickWidth: 0,
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderWidth: 0,
          dataLabels: {
            enabled: false,
          },
          states: {
            hover: {
              enabled: false,
            },
          },
        },
      },
      series: [
        {
          name: "Progress",
          data: games.map((game) => ({
            y: gameProgressData[activeWeek][
              game.name as keyof typeof gameProgressData.week1
            ],
            color: "rgb(204, 10, 115)",
          })),
          pointPadding: 0.1,
          groupPadding: 0.1,
        },
      ],
      tooltip: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
    }),
    [activeWeek, games, gameProgressData]
  );

  // Helper untuk membuat tombol tab
  const renderWeekTab = (week: ActiveWeek, label: string) => (
    <button
      onClick={() => setActiveWeek(week)}
      className={`px-4 py-2 rounded-none bg-transparent font-['Raleway'] font-bold text-[14px] leading-[21px] transition-colors ${
        activeWeek === week
          ? "text-[#CC0A73] border-b-2 border-b-[#CC0A73]"
          : "text-[#CC0A73] hover:bg-pink-50" // Ubah hover color agar sesuai tema pink/ungu
      }`}
      style={{
        borderBottomWidth: activeWeek === week ? "2px" : "0",
      }}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-white rounded-lg p-6">
      {/* Top Section - Background Image with Content */}
      <div>
        <div className="bg-gradient-to-tr from-[#FA3AB1] to-[#f584ca] rounded-lg p-6 mt-8 h-[221px]">
          {/* Left Column - Text & Progress */}
          <div className="flex gap-6 mb-6 ">
            {/* Right Column - Chart SVG */}
            <div className=" flex-shrink-0">
              <div data-framer-component-type="SVG" className="w-full h-full">
                <div
                  className="w-full h-full flex items-center"
                  style={{ aspectRatio: "inherit" }}
                >
                  <img src={MemoryIcon} alt="" />
                </div>
              </div>
            </div>
            <div className="flex-1">
              {/* Title */}
              <div className="flex flex-row justify-between mb-6">
                <div className="flex gap-3 items-center">
                  <h2 className="font-raleway font-bold text-[25px] leading-[25px] text-white col-span-2">
                    Memori
                  </h2>
                  <div className="flex items-center">
                    <LucideInfo className="text-white"></LucideInfo>
                  </div>
                </div>
                {/* Percentage Display */}
                <div className=" flex items-end">
                  <p className="font-raleway font-bold text-[30px] text-white">
                    80 %
                  </p>
                </div>
              </div>
              {/* Description */}
              <div className="mt-6">
                <p className="font-raleway font-semibold text-[15px] leading-[18px] text-white">
                  Kemampuan untuk secara efisien menyandikan, menafsirkan,
                  menyimpan, dan mengambil informasi yang ditemui selama bermain
                  game, memfasilitasi retensi dan pemanfaatan pengetahuan serta
                  strategi terkait game.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Section - Week Tabs & Games Chart */}
        <div className="bg-[#FEF1FA] p-4 mt-8">
          <div className="flex gap-6">
            {/* Left Chart - Vertical Bar Chart (Minggu 1 s/d 4) */}
            <div className="flex-1">
              <HighchartsReact
                highcharts={Highcharts}
                options={verticalChartOptions}
              />
            </div>

            {/* Right Chart - Horizontal Bar Chart with Tabs */}
            <div className="flex-1 flex flex-col">
              {/* Week Tabs */}
              <div className="flex gap-2 mb-4 border-[#dedede] border-b-2">
                {renderWeekTab("week1", "Minggu 1")}
                {renderWeekTab("week2", "Minggu 2")}
                {renderWeekTab("week3", "Minggu 3")}
                {renderWeekTab("week4", "Minggu 4")}
              </div>

              {/* Date Display (Diperbarui) */}
              <div className="mb-6">
                <p className="font-['Raleway'] font-bold text-[12px] leading-[18px] text-[#CC0A73]">
                  {weekDates[activeWeek]}
                </p>
              </div>
              <div className="flex flex-row">
                {/* Game Icons */}
                <div className="flex flex-col justify-between items-center mt-4 bg-transparent p-4 rounded-lg">
                  {games.map((game, index) => (
                    <div
                      key={index}
                      className="flex flex-row items-center gap-2"
                    >
                      <div className="w-9 h-9 rounded overflow-hidden">
                        <img
                          src={game.icon}
                          alt={game.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        {game.name === "PAPAN SEIMBANG" ? (
                          <p className="font-['Raleway'] font-bold text-[11px] leading-[13px] text-[#262626] uppercase whitespace-pre-line">
                            PAPAN
                            <br />
                            SEIMBANG
                          </p>
                        ) : (
                          game.name.split(" ").map((word, i) => (
                            <p
                              key={i}
                              className="font-['Raleway'] font-bold text-[11px] leading-[13px] text-[#262626] uppercase"
                            >
                              {word}
                            </p>
                          ))
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Horizontal Bar Chart */}
                <div className="flex-1">
                  <HighchartsReact
                    highcharts={Highcharts}
                    options={horizontalChartOptions}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryDetailCard;