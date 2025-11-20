import React, { useState, useMemo } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const GameHistorySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"games" | "time">("games");

  // Data game sesuai dengan gambar: GELEMBUNG AJAIB (9), PAPAN SEIMBANG (2), TANGKAP RASA (1), KARTU COCOK (4)
  // Warna sesuai desain: rgb(254, 57, 5), rgb(254, 181, 26), rgb(0, 181, 16), rgb(250, 58, 177)
  const games = [
    {
      name: "GELEMBUNG AJAIB",
      value: 9,
      icon: "https://framerusercontent.com/images/5I3P3XAnbMenWJjscRxX24z5M.png?width=538&height=506",
      color: "rgb(254, 57, 5)",
    },
    {
      name: "PAPAN SEIMBANG",
      value: 2,
      icon: "https://framerusercontent.com/images/FR7BN9QpiRVUPGBwQnTS1gd1rQo.png?width=538&height=506",
      color: "rgb(254, 181, 26)",
    },
    {
      name: "TANGKAP RASA",
      value: 1,
      icon: "https://framerusercontent.com/images/MMaNnP62Y1mEGXox40R4JAyw.png?width=538&height=506",
      color: "rgb(0, 181, 16)",
    },
    {
      name: "KARTU COCOK",
      value: 4,
      icon: "https://framerusercontent.com/images/SFEfgSYbe53srnzCJKt25zMYb8.png?width=538&height=506",
      color: "rgb(250, 58, 177)",
    },
  ];

  // Data heatmap: [minggu][hari] = jumlah game
  // Minggu 28-32, Hari: Senin-Minggu (0-6)
  const heatmapData = [
    // Minggu 28 - Senin, Selasa, Rabu, Kamis, Jumat, Sabtu, Minggu
    [3, 5, 2, 4, 6, 8, 7],
    // Minggu 29
    [4, 3, 5, 7, 9, 6, 5],
    // Minggu 30
    [2, 4, 6, 5, 7, 9, 8],
    // Minggu 31
    [5, 7, 4, 6, 8, 10, 9],
    // Minggu 32
    [6, 4, 5, 7, 9, 7, 6],
  ];

  // Data dummy untuk tab "Waktu Bermain" (dalam menit)
  // Warna sesuai desain: rgb(254, 57, 5), rgb(254, 181, 26), rgb(0, 181, 16), rgb(250, 58, 177)
  const playTimeData = [
    {
      name: "GELEMBUNG AJAIB",
      value: 45,
      icon: "https://framerusercontent.com/images/5I3P3XAnbMenWJjscRxX24z5M.png?width=538&height=506",
      color: "rgb(254, 57, 5)",
    },
    {
      name: "PAPAN SEIMBANG",
      value: 30,
      icon: "https://framerusercontent.com/images/FR7BN9QpiRVUPGBwQnTS1gd1rQo.png?width=538&height=506",
      color: "rgb(254, 181, 26)",
    },
    {
      name: "TANGKAP RASA",
      value: 20,
      icon: "https://framerusercontent.com/images/MMaNnP62Y1mEGXox40R4JAyw.png?width=538&height=506",
      color: "rgb(0, 181, 16)",
    },
    {
      name: "KARTU COCOK",
      value: 35,
      icon: "https://framerusercontent.com/images/SFEfgSYbe53srnzCJKt25zMYb8.png?width=538&height=506",
      color: "rgb(250, 58, 177)",
    },
  ];

  // Data heatmap untuk waktu bermain (dalam menit)
  const playTimeHeatmapData = [
    // Minggu 28
    [15, 25, 10, 20, 30, 40, 35],
    // Minggu 29
    [20, 15, 25, 35, 45, 30, 25],
    // Minggu 30
    [10, 20, 30, 25, 35, 45, 40],
    // Minggu 31
    [25, 35, 20, 30, 40, 50, 45],
    // Minggu 32
    [30, 20, 25, 35, 45, 35, 30],
  ];

  const weeks = [
    "Minggu 28",
    "Minggu 29",
    "Minggu 30",
    "Minggu 31",
    "Minggu 32",
  ];
  const days = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
    "Minggu",
  ];

  // Fungsi untuk mendapatkan warna heatmap berdasarkan nilai
  const getHeatmapColor = (value: number, maxValue: number = 15) => {
    const percentage = (value / maxValue) * 100;
    if (value === 0) return "rgb(181, 228, 255)"; // Biru muda
    if (percentage <= 20) return "rgb(150, 200, 255)"; // Biru sedang
    if (percentage <= 50) return "rgb(100, 170, 255)"; // Biru agak tua
    if (percentage <= 80) return "rgb(50, 140, 255)"; // Biru tua
    return "rgb(0, 100, 255)"; // Biru sangat tua
  };

  // Konfigurasi Highcharts untuk Jumlah Game Dimainkan
  const gamesChartOptions = useMemo(
    () => ({
      chart: {
        type: "column",
        height: 281,
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
        categories: games.map((g) => g.name),
        labels: {
          enabled: false,
        },
        lineWidth: 0,
        tickWidth: 0,
      },
      yAxis: {
        min: 0,
        max: 10,
        tickPositions: [0, 2, 4, 6, 8, 10],
        title: {
          text: null,
        },
        labels: {
          style: {
            fontFamily: "Raleway",
            fontWeight: "700",
            fontSize: "12px",
            color: "rgb(30, 75, 169)",
          },
          formatter: function (
            this: Highcharts.AxisLabelsFormatterContextObject
          ) {
            if (this.value === 0) {
              return `<span style="color: rgb(51, 51, 51)">${this.value}</span>`;
            }
            return String(this.value);
          },
        },
        gridLineColor: "rgb(255, 255, 255)",
        gridLineWidth: 1,
        gridLineDashStyle: "Solid",
        gridZIndex: 1,
      },
      plotOptions: {
        column: {
          borderRadiusTopLeft: 4,
          borderRadiusTopRight: 4,
          borderWidth: 1,
          borderColor: "rgb(255, 255, 255)",
          dataLabels: {
            enabled: false,
          },
          states: {
            hover: {
              enabled: false,
            },
          },
          shadow: {
            color: "rgba(255, 255, 255, 0.16)",
            offsetX: 0,
            offsetY: 8,
            opacity: 1,
            width: 0,
          },
        },
      },
      series: [
        {
          name: "Jumlah Game",
          data: games.map((game) => ({
            y: game.value,
            color: game.color,
            borderWidth: 1,
            borderColor: "rgb(255, 255, 255)",
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
    [games]
  );

  // Konfigurasi Highcharts untuk Waktu Bermain
  const playTimeChartOptions = useMemo(
    () => ({
      chart: {
        type: "column",
        height: 281,
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
        categories: playTimeData.map((g) => g.name),
        labels: {
          enabled: false,
        },
        lineWidth: 0,
        tickWidth: 0,
      },
      yAxis: {
        min: 0,
        max: 50,
        tickPositions: [0, 10, 20, 30, 40, 50],
        title: {
          text: null,
        },
        labels: {
          style: {
            fontFamily: "Raleway",
            fontWeight: "700",
            fontSize: "12px",
            color: "rgb(30, 75, 169)",
          },
          formatter: function (
            this: Highcharts.AxisLabelsFormatterContextObject
          ) {
            if (this.value === 0) {
              return `<span style="color: rgb(51, 51, 51)">${this.value}</span>`;
            }
            return String(this.value);
          },
        },
        gridLineColor: "rgb(255, 255, 255)",
        gridLineWidth: 1,
        gridLineDashStyle: "Solid",
        gridZIndex: 1,
      },
      plotOptions: {
        column: {
          borderRadiusTopLeft: 4,
          borderRadiusTopRight: 4,
          borderWidth: 1,
          borderColor: "rgb(255, 255, 255)",
          dataLabels: {
            enabled: false,
          },
          states: {
            hover: {
              enabled: false,
            },
          },
          shadow: {
            color: "rgba(255, 255, 255, 0.16)",
            offsetX: 0,
            offsetY: 8,
            opacity: 1,
            width: 0,
          },
        },
      },
      series: [
        {
          name: "Waktu Bermain",
          data: playTimeData.map((game) => ({
            y: game.value,
            color: game.color,
            borderWidth: 1,
            borderColor: "rgb(255, 255, 255)",
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
    [playTimeData]
  );

  return (
    <div className="bg-[#EDF8FF] rounded-lg p-6 mt-[48px]">
      {/* Header */}
      <div className="mb-6">
        <h2 className="font-['Raleway'] font-bold text-[20px] leading-[21.2px] text-[#084EC5] mb-4 text-center">
          Riwayat penggunaan game
        </h2>

        {/* Tabs */}
        <div className="flex gap-0  border-[#dedede] border-b-2">
          <button
            onClick={() => setActiveTab("games")}
            className={`px-4 py-2 rounded-none font-['Raleway']  font-bold text-[14px] transition-colors  bg-transparent ${
              activeTab === "games"
                ? "text-[#084EC5] border-b-2 border-b-[#084EC5]"
                : "text-[#084EC5] opacity-70 hover:opacity-100"
            }`}
            style={{ borderBottomWidth: activeTab === "games" ? "2px" : "0" }}
          >
            Jumlah Game Dimainkan
          </button>
          <button
            onClick={() => setActiveTab("time")}
            className={`px-4 py-2 rounded-none font-['Raleway'] font-bold text-[14px] transition-colors bg-transparent ${
              activeTab === "time"
                ? "text-[#084EC5]  border-b-2 border-b-[#084EC5] "
                : "text-[#084EC5] opacity-70 hover:opacity-100 "
            }`}
            style={{ borderBottomWidth: activeTab === "time" ? "2px" : "0" }}
          >
            Waktu Bermain
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === "games" && (
        <>
          {/* Bar Chart dengan Highcharts */}
          <div className="mb-8 relative">
            <HighchartsReact
              highcharts={Highcharts}
              options={gamesChartOptions}
            />

            {/* Game Icons and Labels - Overlay di bawah chart */}
            <div className="flex justify-between mt-4 px-4">
              {games.map((game, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1 flex-1"
                >
                  <div className="relative w-9 h-9 rounded border border-white overflow-hidden">
                    <img
                      src={game.icon}
                      alt={game.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    {game.name.split(" ").map((word, i) => (
                      <p
                        key={i}
                        className="font-['Raleway'] font-bold text-[10px] leading-[13px] text-[#1B1A1A] uppercase"
                      >
                        {word}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap Section */}
          <div className="mt-8">
            <h3 className="font-['Raleway'] font-bold text-[14px] leading-[14px] text-[#084EC5] mb-4 text-center">
              Jumlah game dimainkan dalam heat map
            </h3>

            {/* Heatmap Chart */}
            <div className="flex gap-2">
              {/* Y-axis: Minggu (Vertical) */}
              <div className="flex flex-col justify-between py-2 pr-2 min-w-[80px]">
                {weeks.map((week, index) => (
                  <p
                    key={index}
                    className="font-['Raleway'] text-[9.6px] text-[#333333] text-right h-[calc(100%/5)] flex items-center"
                  >
                    {week}
                  </p>
                ))}
              </div>

              {/* Heatmap Grid Container */}
              <div className="flex-1 flex flex-col">
                {/* Heatmap Grid */}
                <div className="grid grid-cols-7 gap-0">
                  {heatmapData.map((weekData, weekIndex) =>
                    weekData.map((value, dayIndex) => (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className=" border-[15px]  border-[#D6EFFF] flex items-center justify-center py-[4px]"
                        style={{
                          backgroundColor: getHeatmapColor(value, 15),
                        }}
                      >
                        <p className="font-['Raleway'] font-bold text-[#262626] text-center text-xs">
                          {value.toString().padStart(2, "0")}
                        </p>
                      </div>
                    ))
                  )}
                </div>

                {/* X-axis: Hari (Horizontal) */}
                <div className="grid grid-cols-7 gap-0 mt-2">
                  {days.map((day, index) => (
                    <p
                      key={index}
                      className="font-['Raleway'] text-[10px] text-[#333333] text-center"
                    >
                      {day}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex  gap-2">
                <div
                  className="w-3 h-60 rounded-sm "
                  style={{
                    background:
                      "linear-gradient(to bottom, #EDF8FF 0%, #EDF8FF 25%, #B5E4FF 50%, #83D5FF 75%, #0066FF 100%)",
                  }}
                />
                <div className="flex flex-col gap-y-16 text-center ">
                  <div className="font-raleway font-medium text-[9.6px] text-[#333333]">
                    0
                  </div>
                  <div className="font-raleway font-medium text-[9.6px] text-[#333333]">
                    5
                  </div>
                  <div className="font-raleway font-medium text-[9.6px] text-[#333333]">
                    10
                  </div>
                  <div className="font-raleway font-medium text-[9.6px] text-[#333333]">
                    15
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {activeTab === "time" && (
        <>
          {/* Bar Chart - Waktu Bermain dengan Highcharts */}
          <div className="mb-8 relative">
            <HighchartsReact
              highcharts={Highcharts}
              options={playTimeChartOptions}
            />

            {/* Game Icons and Labels - Overlay di bawah chart */}
            <div className="flex justify-between mt-4 px-4">
              {playTimeData.map((game, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1 flex-1"
                >
                  <div className="relative w-9 h-9 rounded border border-white overflow-hidden">
                    <img
                      src={game.icon}
                      alt={game.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    {game.name.split(" ").map((word, i) => (
                      <p
                        key={i}
                        className="font-['Raleway'] font-bold text-[10px] leading-[13px] text-[#1B1A1A] uppercase"
                      >
                        {word}
                      </p>
                    ))}
                  </div>
                  <p className="font-['Raleway'] font-bold text-[10px] text-[#1E4BA9] mt-1">
                    {game.value} menit
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap Section - Waktu Bermain */}
          <div className="mt-8">
            <h3 className="font-['Raleway'] font-bold text-[14px] leading-[14px] text-[#084EC5] mb-4 text-center">
              Waktu bermain dalam heat map (menit)
            </h3>

            {/* Heatmap Chart */}
            <div className="flex gap-2">
              {/* Y-axis: Minggu (Vertical) */}
              <div className="flex flex-col justify-between py-2 pr-2 min-w-[80px]">
                {weeks.map((week, index) => (
                  <p
                    key={index}
                    className="font-['Raleway'] text-[9.6px] text-[#333333] text-right h-[calc(100%/5)] flex items-center"
                  >
                    {week}
                  </p>
                ))}
              </div>

              {/* Heatmap Grid Container */}
              <div className="flex-1 flex flex-col">
                {/* Heatmap Grid */}
                <div className="grid grid-cols-7 gap-0">
                  {playTimeHeatmapData.map((weekData, weekIndex) =>
                    weekData.map((value, dayIndex) => (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className="p-[5px] border-[15px] border-[#D6EFFF] flex items-center justify-center"
                        style={{
                          backgroundColor: getHeatmapColor(value, 50),
                        }}
                      >
                        <p className="font-['Raleway'] font-bold text-[#262626] text-center text-xs">
                          {value}
                        </p>
                      </div>
                    ))
                  )}
                </div>

                {/* X-axis: Hari (Horizontal) */}
                <div className="grid grid-cols-7 gap-0 mt-2">
                  {days.map((day, index) => (
                    <p
                      key={index}
                      className="font-['Raleway'] text-[10px] text-[#333333] text-center"
                    >
                      {day}
                    </p>
                  ))}
                </div>
              </div>

              {/* Y-axis: Nilai (0, 10, 20, 30, 40, 50) - Vertical */}
              <div className="flex flex-col justify-between py-2 pl-2 min-w-[30px]">
                <p className="font-['Raleway'] text-[9.6px] text-[#333333] h-[calc(100%/6)] flex items-start">
                  50
                </p>
                <p className="font-['Raleway'] text-[9.6px] text-[#333333] h-[calc(100%/6)] flex items-center">
                  40
                </p>
                <p className="font-['Raleway'] text-[9.6px] text-[#333333] h-[calc(100%/6)] flex items-center">
                  30
                </p>
                <p className="font-['Raleway'] text-[9.6px] text-[#333333] h-[calc(100%/6)] flex items-center">
                  20
                </p>
                <p className="font-['Raleway'] text-[9.6px] text-[#333333] h-[calc(100%/6)] flex items-center">
                  10
                </p>
                <p className="font-['Raleway'] text-[9.6px] text-[#333333] h-[calc(100%/6)] flex items-end">
                  0
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GameHistorySection;
