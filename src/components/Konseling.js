import React, { useEffect } from "react";
import Fungsi from "./Fungsi/Fungsi";
import HeroKonseling from "./Hero/HeroKonseling";
import { NavbarKonseling } from "./Navbar/Navbar";
import Pendaftaran from "./Pendaftaran/Pendaftaran";
import Tentang from "./Tentang/Tentang";
import Peran from "./Peran/Peran";
import Struk from "./Struktur/Struktur";
import Logo from "./Logo/Logo";

const Konseling = () => {
	useEffect(() => {
		document.title = "SJW FILKOM | Konseling Sebaya FILKOM";
	});
	return (
		<>
			<NavbarKonseling />
			<HeroKonseling />
			<Tentang />
			<Fungsi />
			<Peran />
			<Struk />
			<Pendaftaran />
			<Logo />
		</>
	);
};

export default Konseling;
