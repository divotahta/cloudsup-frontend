import React from "react";
import { createPortal } from "react-dom";
import FokusIcon from "../../../../assets/images/skillcard/fokus.svg";
import KeseimbanganIcon from "../../../../assets/images/skillcard/keseimbangan.svg";
import KetangkasanIcon from "../../../../assets/images/skillcard/ketangkasan.svg";
import KoordinasiIcon from "../../../../assets/images/skillcard/koordinasi.svg";
import MemoriIcon from "../../../../assets/images/skillcard/memori.svg";
import WaktuIcon from "../../../../assets/images/skillcard/waktureaksi.svg";

// import { Info, LucideInfo } from "lucide-react";

type IconTooltipProps = {
  text: string;
  maxWidth?: number;
  iconColor?: string;
  iconSize?: number;
  tooltipBgColor?: string;
  tooltipTextColor?: string;
};

const IconTooltip: React.FC<IconTooltipProps> = ({
  text,
  maxWidth = 300,
  iconColor = "#FFFFFF",
  iconSize = 24,
  tooltipBgColor = "#454545",
  tooltipTextColor = "#FFFFFF",
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [position, setPosition] = React.useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const updatePosition = React.useCallback(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({
        top: rect.top - 12,
        left: rect.left + rect.width / 2,
      });
    }
  }, []);

  React.useEffect(() => {
    if (!isHovered) {
      return;
    }

    updatePosition();

    const handleScrollOrResize = () => {
      updatePosition();
    };

    window.addEventListener("scroll", handleScrollOrResize, true);
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize, true);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [isHovered, updatePosition]);

  const tooltip =
    isHovered && typeof document !== "undefined"
      ? createPortal(
          <div
            style={{
              position: "fixed",
              top: position.top,
              left: position.left,
              transform: "translate(-50%, -100%)",
              zIndex: 9999,
              pointerEvents: "none",
            }}
          >
            <div
              className="px-3 py-2 rounded-lg shadow-lg text-xs font-raleway text-center"
              style={{
                maxWidth,
                backgroundColor: tooltipBgColor,
                color: tooltipTextColor,
              }}
            >
              {text}
            </div>
            <div
              className="mx-auto mt-[-4px] w-2 h-2 rotate-45"
              style={{
                backgroundColor: tooltipBgColor,
              }}
            />
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <div
        ref={triggerRef}
        className="relative z-50 flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full transition-transform duration-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        tabIndex={0}
        aria-label="Informasi skill"
      >
        <svg
          width={`${iconSize}px`}
          height={`${iconSize}px`}
          viewBox="0 0 24 24"
          fill={iconColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z"></path>
        </svg>
      </div>
      {tooltip}
    </>
  );
};

const SkillCard: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-[24px]">
      <div className="w-full h-full">
        {/* Fokus Card */}
        <div className="bg-gradient-to-tr from-[#0066FF] to-[#0784cc] rounded-lg p-[18px] relative overflow-hidden">
          {/* Icon Container */}
          <div className="flex flex-row items-center">
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
            <div className="flex flex-row items-center">
              {/* Title */}
              <div className="mb-3 flex-1 justify-center items-center ml-[16px]">
                <h3 className="font-raleway font-bold text-[20px]  text-white ">
                  Fokus
                </h3>
              </div>

              {/* Info Icon Container */}
              <div className="relative z-50 mb-3 flex items-left ml-[16px]">
                <IconTooltip
                  text="Kemampuan untuk berkonsentrasi pada detail lingkungan permainan sambil secara efektif mencapai tujuannya."
                  iconSize={30}
                />
              </div>
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
          <div className="flex flex-row items-center">
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
            <div className="flex flex-row items-center">
              {/* Title */}
              <div className="mb-3 flex-1 justify-center items-center ml-[16px]">
                <h3 className="font-raleway font-bold text-[20px] leading-[20px] text-white ">
                  Koordinasi Tangan & Mata
                </h3>
              </div>

              {/* Info Icon Container */}
              <div className=" mb-3 flex items-right ml-[16px]">
                <IconTooltip
                  text="Kemampuan tubuh untuk mengintegrasikan informasi visual secara mulus dengan gerakan tangan, memungkinkan tindakan yang presisi dan terkoordinasi dalam permainan."
                  iconSize={30}
                />
              </div>
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
          <div className="flex flex-row items-center">
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
            <div className="flex flex-row items-center ">
              {/* Title */}
              <div className="mb-3 flex-1 ml-[16px]">
                <h3 className="font-raleway font-bold text-[20px] text-white">
                  Rata-rata Waktu Reaksi
                </h3>
              </div>

              {/* Info Icon Container */}
              <div className=" mb-3 flex ml-[16px]">
                <IconTooltip
                  text="Kemampuan untuk mendeteksi dan merespons rangsangan/isyarat yang disajikan di lingkungan permainan secara cepat, memastikan reaksi yang tepat waktu dan efisien terhadap berbagai tantangan."
                  iconSize={30}
                />
              </div>
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
          <div className="flex flex-row  items-center">
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
            <div className="flex flex-row items-center">
              {/* Title */}
              <div className="mb-3 flex-1  items-center ml-[16px]">
                <h3 className="font-raleway font-bold text-[20px]  text-white ">
                  Keseimbangan
                </h3>
              </div>

              {/* Info Icon Container */}
              <div className=" mb-3 flex items-right ml-[16px]">
                <IconTooltip
                  text="Kemampuan untuk menjaga stabilitas dan kontrol atas gerakan serta postur tubuh, bahkan saat melakukan tugas yang kompleks atau menuntut fisik di dalam permainan."
                  iconSize={30}
                />
              </div>
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
          <div className="flex flex-row items-center">
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
            <div className="flex flex-row items-center">
              {/* Title */}
              <div className="mb-3 flex-1 items-center ml-[16px]">
                <h3 className="font-raleway font-bold text-[20px] leading-[20px] text-white ">
                  Ketangkasan
                </h3>
              </div>

              {/* Info Icon Container */}
              <div className=" mb-3 flex items-right ml-[16px]">
                <IconTooltip
                  text="Kemampuan untuk menggerakkan atau memposisikan tubuh Anda dengan cepat dan akurat dengan koordinasi, memungkinkan respons yang cepat dan tepat terhadap perubahan situasi dalam permainan."
                  iconSize={30}
                />
              </div>
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
          <div className="flex flex-row items-center">
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
            <div className="flex flex-row items-center">
              {/* Title */}
              <div className="mb-3 flex-1 items-center ml-[16px]">
                <h3 className="font-raleway font-bold text-[20px] text-white">
                  Memori
                </h3>
              </div>

              {/* Info Icon Container */}
              <div className=" mb-3 flex ml-[16px]">
                <IconTooltip
                  text="Kemampuan untuk secara efisien menyandikan, menafsirkan, menyimpan, dan mengambil informasi yang ditemui selama bermain game, memfasilitasi retensi dan pemanfaatan pengetahuan serta strategi terkait game."
                  iconSize={30}
                />
              </div>
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
