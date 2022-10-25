import React from "react";

const SkeletonKabar = () => {
	return (
		<div className="w-80 h-auto border-grey-200 ">
			<div>
				<div className="bg-grey-200 px-24 py-[158px] mt-4 animate-pulse"></div>
			</div>
			<div className="border-solid border-grey-200 border-2 pt-8 pb-10 px-4">
				<div className="bg-grey-200 rounded-md py-1 px-12 mt-5 animate-pulse"></div>
				<div className="bg-grey-200 rounded-md py-1 px-12 mt-6 animate-pulse"></div>
				<div className="bg-grey-200 rounded-md py-1 px-12 mt-6 animate-pulse"></div>
			</div>
		</div>
	);
};

export default SkeletonKabar;
