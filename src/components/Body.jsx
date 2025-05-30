import { useEffect, useState } from "react";
import { RESTAURANT_API_URL } from "../utils/constants.js";
import RestaurantCard from "./RestaurantCard.jsx";
import Shimmer from "./Shimmer.jsx";
import ErrorPage from "./ErrorPage.jsx";
import { Link } from "react-router-dom";

const Body = () => {
	const [searchText, setSearchInput] = useState(""); //To create a state variable
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [hasError, setHasError] = useState(false);
	
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
				json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
					?.restaurants;
			setListOfRestaurants(restaurants);
			setFilteredRestaurants(restaurants);
			setHasError(false); // <----- Reset error state here
		} catch (error) {
			console.log("Failed to fetch restaurants:", error);
			setHasError(true);
		}
	}

	const handleSearch = (e) => {
		const searchedRestaurant = listOfRestaurants.filter((restaurant) =>
			restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
		);
		setFilteredRestaurants(searchedRestaurant);
	};

	if(hasError){
		return <ErrorPage onRetry={getRestaurants} />;
	}

	return listOfRestaurants.length === 0 ? ( 
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
			<div className="restaurant-list">
				{ filteredRestaurants?.length === 0 ? (
					<h1>No restaurant found with the name "{searchText}"</h1>
				) : (
					filteredRestaurants?.map((restaurant) => {
						const info = restaurant?.info;
						return (
							<Link to={"/restaurant/" + info.id} key={info.id}>
								<RestaurantCard {...info} />
							</Link>
						);
					})
				)};
			</div>
		</>
	);
};

export default Body;
