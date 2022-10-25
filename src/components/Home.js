import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Layanan from "./Layanan/Layanan";
import Artikel from "./Artikel/Artikel";
import Important from "./Important/Important";
import Alur from "./Alur/Alur";
import Faq from "./Faq/Faq";
import Logo from "./Logo/Logo";

const Home = () => {
	const [artikel, setArtikel] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [isResponded, setResponded] = useState();
	const getArtikel = async () => {
		const data = await fetch("https://apiig.adityaariizkyy.my.id/sjw", {
			mode: "cors",
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const response = await data.json();
		setResponded(response.meta.status);
		if (response.body.length !== 0) {
			setArtikel(response.body);
			setLoading(false);
		}
	};
	useEffect(() => {
		getArtikel();
		document.title = "SJW FILKOM | Saling Jaga Warga FILKOM";
	});

	return (
		<>
			<Navbar />
			<Hero />
			{isResponded && <Artikel posts={artikel} isLoading={isLoading} />}
			<Layanan />
			<Important />
			<Alur />
			<Faq />
			<Logo />
		</>
	);
};

export default Home;
