import React from "react";
// import { Shimmer } from 'react-shimmer';

function Shimmer1() { //conventional
	return <h1>Loading1</h1>;
}

const Shimmer2 = () => { //lambda
	return <h1>Loading2</h1>;
};

const Shimmer3 = () => <h1>Loading3</h1>; //for single expression only


const MyShimmer = () => {
	return (
		<React.Fragment>
			<div className="search-container shimmer-search">
				<div className="shimmer-input"></div>
				<div className="shimmer-button"></div>
			</div>
		 	<div className="restaurant-list"> 
				{Array(20)
					.fill("")
					.map((_, indx) => (
						<div key={indx} className="shimmer-card">
							<div className="shimmer-img"></div>
							<div className="shimmer-line short"></div>
							<div className="shimmer-line"></div>
							<div className="shimmer-line"></div>
						</div>)
						)
				}
			</div>
		</React.Fragment>
		)
}


// const ShimmerCard = () => (
//   <div className="card" style={{ width: 200 }}>
//     <Shimmer width={200} height={150} />       {/* Image Placeholder */}
//     <div style={{ marginTop: 10 }}>
//       <Shimmer width={120} height={12} />      {/* Title line */}
//       <Shimmer width={180} height={10} style={{ marginTop: 6 }} />
//       <Shimmer width={140} height={10} style={{ marginTop: 6 }} />
//     </div>
//   </div>
// );


// const MyShimmer = () => {
// 	return <div className="restaurant-list"> 
// 			{Array(20)
// 				.fill("")
// 				.map((_, indx) => (
// 					<ShimmerCard key={indx} />
// 				))
// 			}
// 	</div>
// }


export default MyShimmer;
