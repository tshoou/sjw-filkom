import React from "react";

const Hero = () => {
	const URL =
		"http://res.cloudinary.com/kuhakuni/image/upload/v1656081912/mdfpxqqt6nqvqqbic8vx.png";
	const hero = {
		minHeight: "90vh",
		background: `url(${URL}) center center / cover no-repeat`,
	};
	return (
		<div className={`flex text-white items-center`} style={hero}>
			<div className="container lg:grid lg:grid-cols-2 gap-4 my-8 h-screen md:h-auto">
				<h1 className="text-5xl lg:text-7xl leading-normal lg:leading-tight font-bold">
					Coba diubah
				</h1>
				<div className="mt-8">
					<p className="text-xl font-semibold text-justify">
						SJW (Saling Jaga Warga) FILKOM adalah program kerja
						Kementerian Sosling BEM FILKOM yang menyediakan layanan{" "}
						<span className="text-secondary font-bold">
							konseling serta pelaporan
						</span>{" "}
						kekerasan seksual dan perundungan. SJW FILKOM juga
						bekerja sama dengan Kemahasiswaan Fakultas Ilmu Komputer
						untuk memberikan pelayanan terbaik serta menciptakan
						ruang aman dan nyaman bagi mahasiswa dalam mengatasi
						masalah yang dihadapi.
					</p>
					<div className="flex">
						{/* <a
							href="https://forms.gle/6qSj84xn6sXAbsfz6"
							target="blank"
							className="grow mt-10 bg-tertiary hover:bg-quaternary ease-in-out duration-100 font-bold text-base py-5 text-center"
						>
							Daftar yuk!
						</a> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
