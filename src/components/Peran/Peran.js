import React from "react";
import styles from "./Peran.module.css";
import LayananCard from "../Layanan/LayananCard";
const Layanan = () => {
	return (
		<>
			<div className={`${styles.container}`} id="layanan">
				<div className="container pt-14">
					<div className="flex justify-center">
						<div className="grow leading-tight text-2xl md:text-3xl lg:text-4xl p-8 font-bold text-center text-white bg-secondary">
							Peran Konselor Sebaya
						</div>
					</div>
					<div className="grid lg:grid-cols-2 gap-4 mt-8">
						<LayananCard
							title={"Sebagai Konselor"}
							content={
								"Menjadi pendengar yang aktif di sesi konseling dengan mahasiswa."
							}
						/>
						<LayananCard
							title={"Sebagai Edukator"}
							content={"Mengedukasi seputar kesehatan mental."}
						/>
						<LayananCard
							title={"Sebagai Inisiator"}
							content={
								" Mencari strategi untuk meningkatkan mental health awareness."
							}
						/>
						<LayananCard
							title={"Sebagai Role Model"}
							content={"Menjadi agen mental health awareness."}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Layanan;
