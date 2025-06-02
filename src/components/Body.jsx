import { useEffect, useState } from "react";
import { RESTAURANT_API_URL } from "../utils/constants.js";
import RestaurantCard from "./RestaurantCard.jsx";
import Shimmer from "./Shimmer.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import NoInternetPage from "./NoInternetPage.jsx";
import NoResults from "./NoResults.jsx";
import useRestaurantList from "../utils/useRestaurantList.js";

const Body = () => {
	const [searchText, setSearchInput] = useState(""); //To create a state variable

	const [
		listOfRestaurants, 
		filteredRestaurants,
		setFilteredRestaurants,
		hasError
	] = useRestaurantList();
	
	if (hasError) {
		return <ErrorPage />;
	}

	const handleSearch = (e) => {
		const searchedRestaurant = listOfRestaurants.filter((restaurant) =>
			restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
		);
		setFilteredRestaurants(searchedRestaurant);
	};

	return listOfRestaurants?.length === 0 ? (
		<Shimmer />
	) : (
		<>
			<div className="flex justify-center items-center gap-3 my-8">
				<input
					type="text"
					className="py-3 px-4 w-80 border-solid border-[1px] border-inherit rounded-full outline-none transition-colors duration-400 focus:border-[#ff6f00]"
					placeholder="Search Restaurants..."
					value={searchText}
					onChange={(e) => {
						setSearchInput(e.target.value);
						if (!e.target.value.trim()) {
							setFilteredRestaurants(listOfRestaurants);
						}
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							handleSearch(e);
						}
					}}
				/>
				<button
					className="px-5 py-2.5 bg-[#ff6f00] text-white text-base font-normal rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#e65c00]"
					onClick={(e) => {
						handleSearch(e);
					}}>
					Search
				</button>
			</div>
			{filteredRestaurants?.length === 0 ? (
				<NoResults searchText={searchText} />
			) : (
				<div class="max-w-screen-xl mx-auto px-6 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-12 mt-6">
					{filteredRestaurants?.map((restaurant) => {
						return (
							<Link className="text-inherit hover:cursor-pointer transition-transform duration-400 hover:scale-95"
								to = {"/restaurant/" + restaurant?.info?.id}
								key={restaurant?.info?.id}>
								<RestaurantCard resData={restaurant} />
							</Link>
						);
					})}
				</div>
			)}
		</>
	);
};

export default Body;
