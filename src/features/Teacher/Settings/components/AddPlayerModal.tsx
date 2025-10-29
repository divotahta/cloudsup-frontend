type AddPlayerModalProps = {
	open: boolean;
	onClose: () => void;
	onSave?: () => void;
};

import { useState } from 'react';
import AvatarPickerModal from './AvatarPickerModal';

export default function AddPlayerModal({ open, onClose, onSave }: AddPlayerModalProps) {
	if (!open) return null;

	const [isAvatarOpen, setIsAvatarOpen] = useState(false);
	const [avatar, setAvatar] = useState<string | undefined>(undefined);

	return (
		<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] opacity-100 transition-opacity duration-200 ease-in-out">
			<div className="relative w-[900px] max-w-[90%] bg-white rounded-2xl border border-[#0066FF] shadow-[8px_8px_0_0_#084EC5] flex flex-col overflow-hidden opacity-100 transform scale-100 translate-y-0 transition-[opacity,transform] duration-200">
				<button aria-label="Close" onClick={onClose} className="absolute top-4 right-4 w-6 h-6 bg-transparent border-0 p-0 cursor-pointer text-[#8C8C8C] opacity-70 transition-opacity duration-200 z-10 hover:opacity-100">
					<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>
				<div className="p-6 flex flex-col gap-6">
					<div className="flex flex-col gap-4 text-center px-6">
						<h3 className="font-['Raleway'] font-bold text-[24px] text-[#0066FF] leading-[31.92px] m-0">Tambahkan Detail Pemain</h3>
						<p className="font-['Raleway'] font-medium text-[14px] text-[#262626] leading-[19.6px] m-0">Isi detail pemain baru di bawah ini.</p>
					</div>
					<div className="flex flex-row gap-6 items-start">
						<div className="flex flex-col items-center gap-4 w-[220px] shrink-0">
							<div className="w-[220px] h-[220px] rounded-full bg-[#F0F0F0] flex items-center justify-center text-[#BFBFBF] overflow-hidden">
								{avatar ? (
									<img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
								) : (
									<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
										<circle cx="12" cy="7" r="4"></circle>
									</svg>
								)}
							</div>
							<button onClick={() => setIsAvatarOpen(true)} className="font-['Raleway'] text-[14px] font-bold text-[#0066FF] bg-transparent border-0 p-0 cursor-pointer w-full text-center hover:underline transition-colors">Edit Avatar</button>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 grow">
							<div>
								<div className="flex flex-col gap-2 font-['Raleway']">
									<label>
										<span className="font-bold text-[14px] text-[#262626] tracking-[0.4px] leading-5 inline">Nama Depan</span>
										<span className="font-bold text-[14px] text-[#E82D2F] tracking-[0.4px] leading-5 inline ml-[2px]">*</span>
									</label>
									<div className="relative w-full h-14">
										<input type="text" placeholder="Masukkan nama depan" className="w-full h-full px-5 py-4 rounded-lg border border-[#BFBFBF] box-border font-medium text-[16px] text-[#262626] leading-[1.5em] outline-none transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-white shadow-none" />
									</div>
								</div>
								<p className="m-0 font-['Raleway'] font-normal text-[12px] text-[#E82D2F] tracking-[0.4px] leading-4 pl-1 opacity-0 max-h-0 overflow-hidden transition-[opacity,max-height,margin-top] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></p>
							</div>
							<div>
								<div className="flex flex-col gap-2 font-['Raleway']">
									<label>
										<span className="font-bold text-[14px] text-[#262626] tracking-[0.4px] leading-5 inline">Nama Belakang</span>
										<span className="font-normal text-[12px] text-[#BFBFBF] tracking-[0.4px] leading-5 inline ml-1">(Opsional)</span>
									</label>
									<div className="relative w-full h-14">
										<input type="text" placeholder="Masukkan nama belakang" className="w-full h-full px-5 py-4 rounded-lg border border-[#BFBFBF] box-border font-medium text-[16px] text-[#262626] leading-[1.5em] outline-none transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-white shadow-none" />
									</div>
								</div>
								<p className="m-0 font-['Raleway'] font-normal text-[12px] text-[#E82D2F] tracking-[0.4px] leading-4 pl-1 opacity-0 max-h-0 overflow-hidden transition-[opacity,max-height,margin-top] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></p>
							</div>
							<div>
								<div className="flex flex-col gap-2 font-['Raleway']">
									<label>
										<span className="font-bold text-[14px] text-[#262626] tracking-[0.4px] leading-5 inline">Nomor Absen</span>
										<span className="font-bold text-[14px] text-[#E82D2F] tracking-[0.4px] leading-5 inline ml-[2px]">*</span>
									</label>
									<div className="relative w-full h-14">
										<input type="text" placeholder="Contoh: 12" className="w-full h-full px-5 py-4 rounded-lg border border-[#BFBFBF] box-border font-medium text-[16px] text-[#262626] leading-[1.5em] outline-none transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-white shadow-none" />
									</div>
								</div>
								<p className="m-0 font-['Raleway'] font-normal text-[12px] text-[#E82D2F] tracking-[0.4px] leading-4 pl-1 opacity-0 max-h-0 overflow-hidden transition-[opacity,max-height,margin-top] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></p>
							</div>
							<div className="min-w-0 w-full">
								<div className="flex flex-col gap-2 font-['Raleway'] relative">
									<label>
										<span className="font-bold text-[14px] text-[#262626] tracking-[0.4px] leading-5 inline">Pilih Jenis Hambatan</span>
										<span className="font-bold text-[14px] text-[#E82D2F] tracking-[0.4px] leading-5 inline ml-[2px]">*</span>
									</label>
									<div className="relative w-full h-14">
										<div className="w-full h-full pr-10 pl-5 py-4 rounded-lg border border-[#BFBFBF] box-border font-medium text-[16px] text-[#262626] leading-[1.5em] outline-none transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer bg-white overflow-hidden text-ellipsis whitespace-nowrap">
											<span className="text-[#BFBFBF]">Pilih dari daftar</span>
										</div>
										<div className="absolute right-5 top-1/2 -translate-y-1/2 rotate-0 w-5 h-5 pointer-events-none text-[#BFBFBF] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center">
											<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
												<polyline points="6 9 12 15 18 9"></polyline>
											</svg>
										</div>
										{/* Daftar opsi disembunyikan (display: none) sesuai desain */}
									</div>
								</div>
								<p className="m-0 font-['Raleway'] font-normal text-[12px] text-[#E82D2F] tracking-[0.4px] leading-4 pl-1 opacity-0 max-h-0 overflow-hidden transition-[opacity,max-height,margin-top] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></p>
							</div>
							<div>
								<div className="flex flex-col gap-2 font-['Raleway']">
									<label>
										<span className="font-bold text-[14px] text-[#262626] tracking-[0.4px] leading-5 inline">Alamat Email</span>
										<span className="font-normal text-[12px] text-[#BFBFBF] tracking-[0.4px] leading-5 inline ml-1">(Opsional)</span>
									</label>
									<div className="relative w-full h-14">
										<input type="text" placeholder="Contoh: email@gmail.com" className="w-full h-full px-5 py-4 rounded-lg border border-[#BFBFBF] box-border font-medium text-[16px] text-[#262626] leading-[1.5em] outline-none transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-white shadow-none" />
									</div>
								</div>
								<p className="m-0 font-['Raleway'] font-normal text-[12px] text-[#E82D2F] tracking-[0.4px] leading-4 pl-1 opacity-0 max-h-0 overflow-hidden transition-[opacity,max-height,margin-top] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></p>
							</div>
							<div>
								<div className="flex flex-col gap-2 font-['Raleway']">
									<label>
										<span className="font-bold text-[14px] text-[#262626] tracking-[0.4px] leading-5 inline">Password</span>
										<span className="font-normal text-[12px] text-[#BFBFBF] tracking-[0.4px] leading-5 inline ml-1">(Opsional)</span>
									</label>
									<div className="relative w-full h-14">
										<input type="password" placeholder="Masukkan password" className="w-full h-full pr-12 pl-5 py-4 rounded-lg border border-[#BFBFBF] box-border font-medium text-[16px] text-[#262626] leading-[1.5em] outline-none transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-white shadow-none" />
										<button type="button" className="absolute right-5 top-1/2 -translate-y-1/2 bg-transparent border-0 cursor-pointer p-0 flex items-center justify-center text-[#BFBFBF] transition-colors duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] w-5 h-5">
											<svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
												<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
												<circle cx="12" cy="12" r="3"></circle>
											</svg>
										</button>
									</div>
								</div>
								<p className="m-0 font-['Raleway'] font-normal text-[12px] text-[#E82D2F] tracking-[0.4px] leading-4 pl-1 opacity-0 max-h-0 overflow-hidden transition-[opacity,max-height,margin-top] duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"></p>
							</div>
						</div>
					</div>
					<div className="flex gap-6 mt-4">
						<button onClick={onClose} className="flex-1 p-4 rounded-lg border border-[#262626] font-['Raleway'] font-bold text-[14px] leading-4 cursor-pointer transition-[transform,opacity] duration-[450ms] ease-[cubic-bezier(0.34,2,0.64,1)] bg-white text-[#262626] scale-100 opacity-100 active:scale-95">Batal</button>
						<button disabled className="flex-1 p-4 rounded-lg border-0 font-['Raleway'] font-bold text-[14px] leading-4 cursor-not-allowed transition-[transform,opacity] duration-[450ms] ease-[cubic-bezier(0.34,2,0.64,1)] bg-[#0066FF] text-white scale-100 opacity-50">Simpan</button>
					</div>
				</div>
			</div>
			<AvatarPickerModal open={isAvatarOpen} onClose={() => setIsAvatarOpen(false)} selected={avatar} onSelect={(url) => setAvatar(url)} />
		</div>
	);
}


