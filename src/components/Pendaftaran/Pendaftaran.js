import React from "react";

const Pendaftaran = () => {
	return (
		<>
			<div className="bg-primary text-white" id="pendaftaran">
				<div className="container py-16">
					<h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-10">
						Pendaftaran Calon Konselor Sebaya
					</h1>
					<div className="mb-8">
						<div className="flex gap-x-5 font-bold text-lg md:text-xl lg:text-2xl mb-3">
							<p>a.</p>
							<p>Persyaratan Calon Konselor Sebaya</p>
						</div>
						<ol className="list-decimal list-outside ml-14 font-semibold text-base md:text-lg lg:text-xl">
							<li className="mb-2">
								Merupakan mahasiswa aktif FILKOM UB
							</li>
							<li className="mb-2">
								Merupakan seorang pendengar yang baik dan
								memiliki rasa empati yang tinggi.
							</li>
							<li className="mb-2">
								Memiliki kepercayaan diri dalam berkomunikasi
								dengan seseorang.
							</li>
							<li className="mb-2">
								Dapat menguasai emosi dalam dirinya sehingga
								dapat merefleksikan kepada klien.
							</li>
							<li className="mb-2">
								Memahami kode etik bimbingan konseling serta
								pemahaman mengenai kepribadian seseorang.
							</li>
							<li className="mb-2">
								Memiliki kejujuran yang tinggi, yaitu sifat
								terbuka, open minded, dan objektif.
							</li>
							<li className="mb-2">
								Memiliki jiwa psikologis yang baik dan berjiwa
								profesionalitas.
							</li>
							<li className="mb-2">
								Mampu menciptakan suasana yang akrab dan nyaman
								dengan klien.
							</li>
						</ol>
					</div>
					<div className="mb-8">
						<div className="flex gap-x-5 font-bold text-lg md:text-xl lg:text-2xl mb-3">
							<p>b.</p>
							<p>Ketentuan Berkas Calon Konselor Sebaya</p>
						</div>
						<ol className="list-decimal list-outside ml-14 font-semibold text-base md:text-lg lg:text-xl">
							<li className="mb-2">
								Form <span className="italic">checklist.</span>
							</li>
							<li className="mb-2">
								Form pendaftaran{" "}
								<span className="italic">online.</span>
							</li>
							<li className="mb-2">
								<span className="italic">Soft file</span> foto
								diri ukuran 4x6 dengan pakaian berwarna putih.
							</li>
							<li className="mb-2">
								Surat pernyataan komitmen bermaterai 10000.
							</li>
							<li className="mb-2">Scan KTM/KTMS.</li>
						</ol>
					</div>
					<div className="mb-8">
						<div className="flex gap-x-5 font-bold text-lg md:text-xl lg:text-2xl mb-3">
							<p>c.</p>
							<p>Cara Daftar Calon Konselor Sebaya</p>
						</div>
						<ol className="list-decimal list-outside ml-14 font-semibold text-base md:text-lg lg:text-xl">
							<li className="mb-2">
								Membuka website Konseling Sebaya dan melakukan
								pendaftaran dengan menekan tombol "Daftar".
							</li>
							<li className="mb-2">
								Unduh dan isi berkas di{" "}
								<a
									href="https://bit.ly/OprecRekanMelangkah"
									target={"_blank"}
									rel={"noreferrer"}
									className={"hover:underline"}
								>
									https://bit.ly/OprecRekanMelangkah
								</a>
							</li>
							<li className="mb-2">
								Unggah berkas pendaftaran ke dalam Google Drive
								pribadi (akses Google Drive wajib
								shareable/public). Dengan format folder :{" "}
								<span className="font-bold">
									Peer Counselor_Nama Lengkap_Prodi_Angkatan
								</span>
							</li>
							<li className="mb-2">
								Tautkan link shareable Google Drive pada form
								yang telah disediakan.
							</li>
							<li className="mb-2">
								Mengikuti rangkaian seleksi yang dilaksanakan.
							</li>
							<li className="mb-2">
								Menunggu hasil seleksi dan pengumuman.
							</li>
							<li className="mb-2">
								Peserta yang lolos mengikuti pelatihan.
							</li>
							<li className="mb-2">
								Peserta aktif menjabat menjadi konselor sebaya.
							</li>
						</ol>
					</div>
				</div>
			</div>
		</>
	);
};

export default Pendaftaran;
