import React from "react";
// import { Shimmer } from 'react-shimmer';

function Shimmer1() {
	//conventional
	return <h1>Loading1</h1>;
}

const Shimmer2 = () => {
	//lambda
	return <h1>Loading2</h1>;
};

const Shimmer3 = () => <h1>Loading3</h1>; //for single expression only

const MyShimmer = () => {
	return (
		<React.Fragment>
			<div className="flex justify-center items-center gap-3 my-8">
				<div className="w-80 h-12 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-full"></div>
				<div className="w-24 h-12 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-full"></div>
			</div>

			<div className="max-w-screen-xl mx-auto px-6 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-12 mt-6">
				{Array(20)
					.fill("")
					.map((_, indx) => (
						<div
							key={indx}
							className="w-72 flex flex-col px-3 m-0">
							<div className="w-full h-48 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-3xl mb-3"></div>
							<div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-md w-3/5 mb-3"></div>
							<div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-md w-4/5 mb-2"></div>
							<div className="h-4 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-md w-4/5"></div>
						</div>
					))}
			</div>
		</React.Fragment>
	);
};

export default MyShimmer;
