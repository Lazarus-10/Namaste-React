import { useState } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurantList) {
	return restaurantList.filter((restaurant) =>
		restaurant?.card?.card?.info?.name
			?.toLowerCase()
			.includes(searchText.toLowerCase())
	);
}
const Body = () => {
	//searchInput is a local state variable
	const [searchText, setSearchInput] = useState(""); //To create a state variable
	const [toggleSwtich, setToggleSwitch] = useState("ON");
	const [restaurants, setRestaurants] = useState(restaurantList);
	// useState() JS function returning array [variable, function to upate the state variable]
	return (
		<>
			{/* { <div className="restaurant-list">
            <RestaurantCard restaurant = {restaurantList[0]}/>
            <RestaurantCard restaurant = {restaurantList[1]}/>
            and so on
        </div>  } */}
			{/* e.target.value means what is the value in the search field at this moment */}
			<div className="search-container">
				<input
					type="text"
					className="search-input"
					placeholder="Search"
					value={searchText}
					onChange={(e) => {
						setSearchInput(e.target.value);
						console.log(searchText);
						if (!e.target.value.trim()) {
							//bring the whole menu on searchClear
							setRestaurants(restaurantList);
						}
					}}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							// handleSearch(); //can create to use at multiple places
							const data = filterData(searchText, restaurantList);
							setRestaurants(data);
						}
					}}
				/>
				<button
					className="search-btn"
					onClick={() => {
						//need to filter data
						const data = filterData(searchText, restaurantList);
						setRestaurants(data);
					}}>
					Search
				</button>
				<button
					onClick={() => {
						if (toggleSwtich === "ON") {
							setToggleSwitch("OFF");
						} else {
							setToggleSwitch("ON");
						}
					}}>
					Toggle - {toggleSwtich}
				</button>
			</div>
			<div className="restaurant-list">
				{/* either pass as named props or spread all key-vallue pair inside info while passing */}
				{/* <RestaurantCard name={restaurantList[0].card?.card?.info?.name} cuisines={restaurantList[0].card?.card?.info?.cuisines}/> */}

				{/* <RestaurantCard {...restaurantList[0].card?.card?.info} />
            <RestaurantCard {...restaurantList[1].card?.card?.info} />
            <RestaurantCard {...restaurantList[2].card?.card?.info} />
            and so on
            <RestaurantCard {...restaurantList[14].card?.card?.info} /> 
            */}

				{/* BEST WAY */}
				{restaurants.map((restaurant) => {
					const info = restaurant?.card?.card?.info;
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
