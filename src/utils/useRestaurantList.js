import { RESTAURANT_API_URL } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantList = () => {
   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
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
			setHasError(false); 
		} catch (error) {
			console.log("Failed to fetch restaurants:", error);
			setHasError(true);
		}
	}

   return [listOfRestaurants, filteredRestaurants, setFilteredRestaurants, hasError];
}
export default useRestaurantList;