export default function AccountDetails() {
  return (
    <div className="w-auto  flex-col grid grid-cols-2 gap-[12px]">
      <div className="flex items-center justify-start bg-[#EDF8FF] rounded-xl">
        <div className="w-auto justify-center items-center ml-7 bg-[#EDF8FF] rounded-xl">
          <div className="flex flex-row items-center ">
            <div className="w-20 h-20 rounded-full bg-[#084EC5] flex items-center justify-center text-[#084EC5]">
              <p className="text-white font-bold text-4xl leading-[48px]">D</p>
            </div>
            <div className="flex flex-col items-start gap-1 ml-4">
              <p className="text-[#084EC5] text-[18px] font-medium">
                Tenaga Pendidik
              </p>
              <p className="text-[#262626] text-[24px] font-bold">Dina Mustawati</p>
              <p className="text-[#0052CC] text-[18px] font-bold">
                SLB Negeri Jember
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-auto flex flex-col p-[24px] bg-[#EDF8FF] rounded-xl">
        <p className="text-[#0066FF] font-bold text-[16px] text-left mb-2">
          Detail Akun
        </p>
        <div className="flex flex-col gap-[12px]">
          <div className="flex flex-row justify-between gap-1">
            <p className="text-[#262626] font- text-[16px]">Nama Lengkap</p>
            <p className="text-[#262626] font-normal text-[16px]">Dina Mustawati</p>
          </div>
          <div className="flex flex-row justify-between gap-1">
            <p className="text-[#262626] font-bold text-[16px]">Email</p>
            <p className="text-[#262626] font-normal text-[16px]">dinamustawati27@gmail.com</p>
          </div>
          <div className="flex flex-row justify-between gap-1">
            <p className="text-[#262626] font-bold text-[16px]">Password</p>
            <p className="text-[#262626] font-normal text-[16px]">•••••••••••••••••</p>
          </div>
        </div>
        <div className=" hover:outline-none border-none items-end flex flex-col">
          <button className="w-auto text-right font-bold text-[14px] text-[#0066FF] transition-colors bg-transparent border-none hover:underline">
            Ganti Password
          </button>
        </div>
      </div>
    </div>
  );
}
