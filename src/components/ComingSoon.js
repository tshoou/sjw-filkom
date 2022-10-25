import React from "react";
import { NavbarComingSoon as Navbar } from "./Navbar/Navbar";

const ComingSoon = () => {
	return (
		<>
			<Navbar />
			<div
				className="text-primary"
				style={{
					background:
						"linear-gradient(102.71deg, rgba(172, 66, 77, 0.08) 38.33%, rgba(49, 51, 108, 0.08) 73.7%)",
				}}
			>
				<div className="container py-5 flex flex-col md:flex-row gap-4 md:justify-around justify-center items-center">
					<h1 className="font-bold text-2xl sm:text-5xl lg:text-7xl text-center md:text-left">
						Coming Soon
					</h1>
					<img
						src="/assets/img/comingsoon.svg"
						className="md:max-h-[70vh] w-2/3 sm:w-auto"
						alt="Coming soon"
					/>
				</div>
			</div>
		</>
	);
};

export default ComingSoon;
