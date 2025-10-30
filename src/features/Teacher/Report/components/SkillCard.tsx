import React from "react";
import FokusIcon from "../../../../assets/images/skillcard/fokus.svg";
import KeseimbanganIcon from "../../../../assets/images/skillcard/keseimbangan.svg";
import KetangkasanIcon from "../../../../assets/images/skillcard/ketangkasan.svg";
import KoordinasiIcon from "../../../../assets/images/skillcard/koordinasi.svg";
import MemoriIcon from "../../../../assets/images/skillcard/memori.svg";
import WaktuIcon from "../../../../assets/images/skillcard/waktureaksi.svg";

import { Info } from "lucide-react";

const SkillCard: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-[24px]">
      <div className="w-full h-full">
        {/* Fokus Card */}
        <div className="bg-gradient-to-tr from-[#0066FF] to-[#0784cc] rounded-lg p-[18px] relative overflow-hidden">
          {/* Icon Container */}
          <div className="flex flex-row justify-between items-center">
            <div className="relative mb-4">
              <div className="w-[70px] h-[70px] relative">
                {/* SVG Icon Container */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    imageRendering: "pixelated",
                    flexShrink: 0,
                    fill: "rgb(0, 0, 0)",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{ aspectRatio: "inherit" }}
                  >
                    <img
                      src={FokusIcon}
                      alt="fokus"
                      className="w-full h-full object-cover object-center"
                      style={{
                        objectFit: "fill",
                        objectPosition: "center center",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="mb-3 flex-1 justify-center items-center ml-[16px]">
              <h3 className="font-raleway font-bold text-[20px] leading-[20px] text-white ">
                Fokus
              </h3>
            </div>

            {/* Info Icon Container */}
            <div
              className=" mb-3 flex items-right hover:scale-[1.04]"
              style={{ aspectRatio: "inherit" }}
            >
              <Info className=" text-white" />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative mb-3">
            {/* Labels under progress bar */}
            <div className="flex justify-between mt-[18px] mb-2">
              <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">
                0
              </p>
              <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">
                100
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              {/* Progress Bar Container */}
              <div className="h-[9px] bg-white  relative">
                {/* Progress Fill */}
                <div
                  className="absolute top-0 left-0 h-[9px] bg-[#084EC5]"
                  style={{ width: "81.1%" }}
                >
                  {/* Marker at 81.1 */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                    <div className="flex flex-col items-center">
                      <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white bg-transparent mt-5 whitespace-nowrap">
                        81.1
                      </p>
                      <div className="w-px bg-[#0D469B] mt-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" font-raleway text-[30px] mb-[16px] text-white font-bold">
            90 Points
          </div>

          {/* Button */}
          <button className="px-4 py-2 bg-white rounded-md border border-black  hover:scale-[1.04] transition-colors">
            <p className="font-raleway font-bold text-[12px] leading-[12px] text-[#212529] capitalize text-center">
              Lihat detail
            </p>
          </button>
        </div>
      </div>

      {/* Koordinasi Tangan dan Mata */}

      <div className="w-full h-full">
        {/* Fokus Card */}
        <div className="bg-gradient-to-tr from-[#E82D2F] to-[#be4343] rounded-lg p-[18px] relative overflow-hidden">
          {/* Icon Container */}
          <div className="flex flex-row justify-between items-center">
            <div className="relative mb-4">
              <div className="w-[70px] h-[70px] relative">
                {/* SVG Icon Container */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    imageRendering: "pixelated",
                    flexShrink: 0,
                    fill: "rgb(0, 0, 0)",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{ aspectRatio: "inherit" }}
                  >
                    <img
                      src={KoordinasiIcon}
                      alt="fokus"
                      className="w-full h-full object-cover object-center"
                      style={{
                        objectFit: "fill",
                        objectPosition: "center center",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="mb-3 flex-1 justify-center items-center ml-[16px]">
              <h3 className="font-raleway font-bold text-[20px] leading-[20px] text-white ">
              Koordinasi Tangan & Mata
              </h3>
            </div>

            {/* Info Icon Container */}
            <div
              className=" mb-3 flex items-right hover:scale-[1.04]"
              style={{ aspectRatio: "inherit" }}
            >
              <Info className=" text-white" />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative mb-3">
            {/* Labels under progress bar */}
            <div className="flex justify-between mt-[18px] mb-2">
              <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">
                0
              </p>
              <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">
                100
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              {/* Progress Bar Container */}
              <div className="h-[9px] bg-white  relative">
                {/* Progress Fill */}
                <div
                  className="absolute top-0 left-0 h-[9px] bg-[#084EC5]"
                  style={{ width: "81.1%" }}
                >
                  {/* Marker at 81.1 */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                    <div className="flex flex-col items-center">
                      <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white bg-transparent mt-5 whitespace-nowrap">
                        81.1
                      </p>
                      <div className="w-px bg-[#0D469B] mt-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" font-raleway text-[30px] mb-[16px] text-white font-bold">
            90 Points
          </div>

          {/* Button */}
          <button className="px-4 py-2 bg-white rounded-md border border-black  hover:scale-[1.04] transition-colors">
            <p className="font-raleway font-bold text-[12px] leading-[12px] text-[#212529] capitalize text-center">
              Lihat detail
            </p>
          </button>
        </div>
      </div>

      {/* Rata Rata Waktu Reaksi */}
      <div className="w-full h-full">
        {/* Fokus Card */}
        <div className="bg-gradient-to-tr from-[#00B510] to-[#59f366] rounded-lg p-[18px] relative overflow-hidden">
          {/* Icon Container */}
          <div className="flex flex-row justify-between items-center">
            <div className="relative mb-4">
              <div className="w-[70px] h-[70px] relative">
                {/* SVG Icon Container */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    imageRendering: "pixelated",
                    flexShrink: 0,
                    fill: "rgb(0, 0, 0)",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{ aspectRatio: "inherit" }}
                  >
                    <img
                      src={WaktuIcon}
                      alt="fokus"
                      className="w-full h-full object-cover object-center"
                      style={{
                        objectFit: "fill",
                        objectPosition: "center center",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="mb-3 flex-1 justify-center items-center ml-[16px]">
              <h3 className="font-raleway font-bold text-[20px] leading-[20px] text-white ">
              Rata-rata Waktu Reaksi
              </h3>
            </div>

            {/* Info Icon Container */}
            <div
              className=" mb-3 flex items-right hover:scale-[1.04]"
              style={{ aspectRatio: "inherit" }}
            >
              <Info className=" text-white" />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative mb-3">
            {/* Labels under progress bar */}
            <div className="flex justify-between mt-[18px] mb-2">
              <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">
                0
              </p>
              <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">
                100
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              {/* Progress Bar Container */}
              <div className="h-[9px] bg-white  relative">
                {/* Progress Fill */}
                <div
                  className="absolute top-0 left-0 h-[9px] bg-[#084EC5]"
                  style={{ width: "81.1%" }}
                >
                  {/* Marker at 81.1 */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                    <div className="flex flex-col items-center">
                      <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white bg-transparent mt-5 whitespace-nowrap">
                        81.1
                      </p>
                      <div className="w-px bg-[#0D469B] mt-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" font-raleway text-[30px] mb-[16px] text-white font-bold">
            90 Points
          </div>

          {/* Button */}
          <button className="px-4 py-2 bg-white rounded-md border border-black  hover:scale-[1.04] transition-colors">
            <p className="font-raleway font-bold text-[12px] leading-[12px] text-[#212529] capitalize text-center">
              Lihat detail
            </p>
          </button>
        </div>
      </div>

      {/* Keseimbangan */}
      <div className="w-full h-full">
        {/* Fokus Card */}
        <div className="bg-gradient-to-tr from-[#FE3905] to-[#f36a45] rounded-lg p-[18px] relative overflow-hidden">
          {/* Icon Container */}
          <div className="flex flex-row justify-between items-center">
            <div className="relative mb-4">
              <div className="w-[70px] h-[70px] relative">
                {/* SVG Icon Container */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    imageRendering: "pixelated",
                    flexShrink: 0,
                    fill: "rgb(0, 0, 0)",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{ aspectRatio: "inherit" }}
                  >
                    <img
                      src={KeseimbanganIcon}
                      alt="fokus"
                      className="w-full h-full object-cover object-center"
                      style={{
                        objectFit: "fill",
                        objectPosition: "center center",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="mb-3 flex-1 justify-center items-center ml-[16px]">
              <h3 className="font-raleway font-bold text-[20px] leading-[20px] text-white ">
              Keseimbangan
              </h3>
            </div>

            {/* Info Icon Container */}
            <div
              className=" mb-3 flex items-right hover:scale-[1.04]"
              style={{ aspectRatio: "inherit" }}
            >
              <Info className=" text-white" />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative mb-3">
            {/* Labels under progress bar */}
            <div className="flex justify-between mt-[18px] mb-2">
              <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">
                0
              </p>
              <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">
                100
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              {/* Progress Bar Container */}
              <div className="h-[9px] bg-white  relative">
                {/* Progress Fill */}
                <div
                  className="absolute top-0 left-0 h-[9px] bg-[#084EC5]"
                  style={{ width: "81.1%" }}
                >
                  {/* Marker at 81.1 */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                    <div className="flex flex-col items-center">
                      <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white bg-transparent mt-5 whitespace-nowrap">
                        81.1
                      </p>
                      <div className="w-px bg-[#0D469B] mt-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" font-raleway text-[30px] mb-[16px] text-white font-bold">
            90 Points
          </div>

          {/* Button */}
          <button className="px-4 py-2 bg-white rounded-md border border-black  hover:scale-[1.04] transition-colors">
            <p className="font-raleway font-bold text-[12px] leading-[12px] text-[#212529] capitalize text-center">
              Lihat detail
            </p>
          </button>
        </div>
      </div>

      {/* Ketangkasan */}

      <div className="w-full h-full">
        {/* Fokus Card */}
        <div className="bg-gradient-to-tr from-[#F89508] to-[#dead68] rounded-lg p-[18px] relative overflow-hidden">
          {/* Icon Container */}
          <div className="flex flex-row justify-between items-center">
            <div className="relative mb-4">
              <div className="w-[70px] h-[70px] relative">
                {/* SVG Icon Container */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    imageRendering: "pixelated",
                    flexShrink: 0,
                    fill: "rgb(0, 0, 0)",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{ aspectRatio: "inherit" }}
                  >
                    <img
                      src={KetangkasanIcon}
                      alt="fokus"
                      className="w-full h-full object-cover object-center"
                      style={{
                        objectFit: "fill",
                        objectPosition: "center center",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="mb-3 flex-1 justify-center items-center ml-[16px]">
              <h3 className="font-raleway font-bold text-[20px] leading-[20px] text-white ">
              Ketangkasan
              </h3>
            </div>

            {/* Info Icon Container */}
            <div
              className=" mb-3 flex items-right hover:scale-[1.04]"
              style={{ aspectRatio: "inherit" }}
            >
              <Info className=" text-white" />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative mb-3">
            {/* Labels under progress bar */}
            <div className="flex justify-between mt-[18px] mb-2">
              <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">
                0
              </p>
              <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">
                100
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              {/* Progress Bar Container */}
              <div className="h-[9px] bg-white  relative">
                {/* Progress Fill */}
                <div
                  className="absolute top-0 left-0 h-[9px] bg-[#084EC5]"
                  style={{ width: "81.1%" }}
                >
                  {/* Marker at 81.1 */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                    <div className="flex flex-col items-center">
                      <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white bg-transparent mt-5 whitespace-nowrap">
                        81.1
                      </p>
                      <div className="w-px bg-[#0D469B] mt-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" font-raleway text-[30px] mb-[16px] text-white font-bold">
            90 Points
          </div>

          {/* Button */}
          <button className="px-4 py-2 bg-white rounded-md border border-black  hover:scale-[1.04] transition-colors">
            <p className="font-raleway font-bold text-[12px] leading-[12px] text-[#212529] capitalize text-center">
              Lihat detail
            </p>
          </button>
        </div>
      </div>

      {/* Memori  */}
      <div className="w-full h-full">
        {/* Fokus Card */}
        <div className="bg-gradient-to-tr from-[#FA3AB1] to-[#f584ca] rounded-lg p-[18px] relative overflow-hidden">
          {/* Icon Container */}
          <div className="flex flex-row justify-between items-center">
            <div className="relative mb-4">
              <div className="w-[70px] h-[70px] relative">
                {/* SVG Icon Container */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    imageRendering: "pixelated",
                    flexShrink: 0,
                    fill: "rgb(0, 0, 0)",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  <div
                    className="w-full h-full"
                    style={{ aspectRatio: "inherit" }}
                  >
                    <img
                      src={MemoriIcon}
                      alt="fokus"
                      className="w-full h-full object-cover object-center"
                      style={{
                        objectFit: "fill",
                        objectPosition: "center center",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="mb-3 flex-1 justify-center items-center ml-[16px]">
              <h3 className="font-raleway font-bold text-[20px] leading-[20px] text-white ">
              Memori
              </h3>
            </div>

            {/* Info Icon Container */}
            <div
              className=" mb-3 flex items-right hover:scale-[1.04]"
              style={{ aspectRatio: "inherit" }}
            >
              <Info className=" text-white" />
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative mb-3">
            {/* Labels under progress bar */}
            <div className="flex justify-between mt-[18px] mb-2">
              <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">
                0
              </p>
              <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white">
                100
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              {/* Progress Bar Container */}
              <div className="h-[9px] bg-white  relative">
                {/* Progress Fill */}
                <div
                  className="absolute top-0 left-0 h-[9px] bg-[#084EC5]"
                  style={{ width: "81.1%" }}
                >
                  {/* Marker at 81.1 */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                    <div className="flex flex-col items-center">
                      <p className="font-raleway font-semibold text-[10px] leading-[10px] text-white bg-transparent mt-5 whitespace-nowrap">
                        81.1
                      </p>
                      <div className="w-px bg-[#0D469B] mt-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" font-raleway text-[30px] mb-[16px] text-white font-bold">
            90 Points
          </div>

          {/* Button */}
          <button className="px-4 py-2 bg-white rounded-md border border-black  hover:scale-[1.04] transition-colors">
            <p className="font-raleway font-bold text-[12px] leading-[12px] text-[#212529] capitalize text-center">
              Lihat detail
            </p>
          </button>
        </div>
      </div>

    </div>
  );
};

export default SkillCard;
