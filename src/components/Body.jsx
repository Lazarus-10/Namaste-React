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
			<div className="search-container">
				<input
					type="text"
					className="search-input"
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
					className="search-btn"
					onClick={(e) => {
						handleSearch(e);
					}}>
					Search
				</button>
			</div>
			{filteredRestaurants?.length === 0 ? (
				<NoResults searchText={searchText} />
			) : (
				<div className="restaurant-list">
					{filteredRestaurants?.map((restaurant) => {
						const info = restaurant?.info;
						return (
							<Link 
								to = {"/restaurant/" + info?.id}
								key={info?.id}>
								<RestaurantCard {...info} />
							</Link>
						);
					})}
				</div>
			)}
		</>
	);
};

export default Body;
