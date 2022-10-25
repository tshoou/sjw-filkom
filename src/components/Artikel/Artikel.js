import React from "react";
import ArtikelCard from "./ArtikelCard";
import SkeletonArtikel from "./SkeletonArtikel";

const skeletons = [...new Array(3)].map((_, idx) => (
	<SkeletonArtikel key={idx} />
));

const Kabar = ({ posts, isLoading }) => {
	posts = posts.slice(0, 3);

	return (
		<div
			className="bg-secondary flex flex-row flex-wrap justify-around py-24 "
			id="artikel"
		>
			{isLoading
				? skeletons
				: posts.map((post, index) => {
						return (
							<ArtikelCard
								link={post.LinkMedia}
								isLoading={isLoading}
								thumbnail={post.ThumbnailSrc}
								caption={post.Caption.split("\n\n")[0]}
								date={post.Tanggal}
								key={index}
							/>
						);
				  })}

			<div className="bg-tertiary flex flex-col mt-4 lg:flex-row lg:w-full lg:mx-2 lg:h-56 xl:flex-col xl:w-44 xl:h-full">
				<p className="text-center md:text-left mx-auto text-3xl font-semibold text-white w-3/4 my-24">
					Lihat Artikel Lainnya!
				</p>

				<a
					href="https://www.instagram.com/explore/tags/sjwfilkom/"
					target="_blank"
					rel="noreferrer"
				>
					<div className="text-8xl text-center md:text-left hover:text-white animate-bounce text-secondary mx-10 lg:my-20 lg:ml-auto xl:my-9 xl:mx-8">
						<i className="bi bi-arrow-right-circle-fill"></i>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Kabar;
