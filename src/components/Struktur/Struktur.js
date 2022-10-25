import React from "react";
import styles from "./Struktur.module.css";

const Struk = () => {
	return (
		<div className={`${styles.container}`} id="struktur">
			<div className="container flex justify-center flex-col py-16">
				<h1 className="font-bold text-xl md:text-3xl lg:text-4xl">
					{" "}
					Struktur Konselor Sebaya{" "}
				</h1>
				<img
					className="pt-4 xsm3:pt-6"
					alt="missing struktur"
					src="https://res.cloudinary.com/kuhakuni/image/upload/v1661527511/ajwm20hqkg4sqhosmxrt.png"
				></img>
			</div>
		</div>
	);
};
export default Struk;
