import React from "react";
import styles from "./Alur.module.css";
const Alur = () => {
	return (
		<>
			<div
				className={`${styles.container}  pb-10 pt-12 px-6 sm:px-16 md:px-28 lg:px-40 xl:px-64`}
			>
				<h1 className="text-tertiary text-center font-bold text-xl pb-3 sm:text-xl md:text-3xl lg:text-5xl">
					Alur Pendaftaran
				</h1>
				<p className="text-center text-primary font-semibold text-base md:text-xl lg:text-2xl">
					Yuk, mulai buka suara sama masalah yang kamu alami
				</p>

				<div className="bg-primary py-12 mt-5 text-white font-semibold text-sm flex justify-center">
					<img
						src="/assets/img/alur.png"
						className="flex place-self-center md:pl-12 scale-125 pl-16 md:scale-100"
						alt="missing logo"
					></img>
				</div>
			</div>
		</>
	);
};
export default Alur;
