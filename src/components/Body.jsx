import { useEffect, useState } from "react";
import { RESTAURANT_API_URL, restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, listOfRestaurants) {
	return listOfRestaurants.filter((restaurant) =>
		restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
	);
}
const Body = () => {
	const [searchText, setSearchInput] = useState(""); //To create a state variable
	const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);
	const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);
	useEffect(() => {
		getRestaurants();
	}, []);

	async function getRestaurants() {
		try {
		const data = await fetch(RESTAURANT_API_URL);

		if (!data.ok) {
			throw new Error(`HTTP error! Status: ${data.status}`);
		}

		const json = await data.json();
		const restaurants =
			json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

		setListOfRestaurants(restaurants);
		setFilteredRestaurants(restaurants);
	} catch (error) {
		console.error("Failed to fetch restaurants:", error);
	}
	}

	return (
		<>
			<div className="search-container">
				<input
					type="text"
					className="search-input"
					placeholder="Search"
					value={searchText}
					onChange={(e) => {
						setSearchInput(e.target.value);
						if (!e.target.value.trim()) {
							setFilteredRestaurants(listOfRestaurants);
						}
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							const data = filterData(searchText, listOfRestaurants);
							setFilteredRestaurants(data);
						}
					}}
				/>
				<button
					className="search-btn"
					onClick={() => {
						const data = filterData(searchText, listOfRestaurants);
						setFilteredRestaurants(data);
					}}>
					Search
				</button>
			</div>
			<div className="restaurant-list">
				{filteredRestaurants?.map((restaurant) => {
					const info = restaurant?.info;
					return (
						<RestaurantCard
							key={info.id}
							{...info}
						/>
					);
				})}
			</div>
		</>
	);
};

export default Body;
