import React from "react";
import SkeletonArtikel from "./SkeletonArtikel";

const KabarCard = (props) => {
	const thumbnail = `https://bib.actionsack.com/imageproxy?url=${encodeURIComponent(
		props.thumbnail
	)})`;

	return (
		<>
			{props.isLoading ? (
				<SkeletonArtikel />
			) : (
				<div
					className="flex flex-col content-center w-80 mt-4 md:hover:scale-105 transition-all hover:shadow"
					id="artikel"
				>
					<a href={`${props.link}`} target="_blank" rel="noreferrer">
						<img
							src={thumbnail}
							alt="missing thumbnail"
							className="max-h-80 w-full object-cover"
						></img>
						<div className="bg-primary text-center py-8 font-semibold h-40">
							<p className="text-secondary mb-2">{props.date}</p>
							<p className="text-white text-xl text-ellipsis overflow-hidden px-4 line-clamp-3">
								{props.caption}
							</p>
						</div>
					</a>
				</div>
			)}
		</>
	);
};

export default KabarCard;
