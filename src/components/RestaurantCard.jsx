import { IMG_CDN_BASE_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
	const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
		resData?.info;
	return (
		<>
			<div className="bg-white rounded-xl shadow-md overflow-hidden max-w-full cursor-pointer flex flex-col group">
        <div className="relative">
          <img
            className="w-full h-48 object-cover border-b border-gray-200"
            src={IMG_CDN_BASE_URL + cloudinaryImageId}
            alt="Restaurant Logo"
          />
        </div>
      </div>

			<div className="ms-2 bg-inherit overflow-hidden w-72 cursor-pointer flex flex-col">
				<div className="pt-2 flex-grow flex flex-col">
					{/* Restaurant Name with truncation */}
					<h3 className="text-lg font-bold mb-2 text-ellipsis overflow-hidden whitespace-nowrap">
						{name}
					</h3>

					{/* Cuisines with word break and ellipsis */}
					<p className="text-sm text-gray-600 mb-3 overflow-hidden text-ellipsis whitespace-nowrap break-words">
						{cuisines.join(", ")}
					</p>

					<div className="mt-auto flex items-center text-sm text-gray-700">
						<span
							className={`font-bold text-white py-0.5 px-1.5 rounded mr-2 ${
								avgRating >= 4.4
									? "bg-green-500"
									: avgRating >= 3.8
									? "bg-orange-500"
									: "bg-red-500"
							}`}>
							{avgRating} ★
						</span>
						<span className="text-gray-400 mx-2">|</span>
						<span className="font-medium">{sla.slaString}</span>
						<span className="text-gray-400 mx-2">|</span>
						<span className="font-medium">{costForTwo}</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default RestaurantCard;
