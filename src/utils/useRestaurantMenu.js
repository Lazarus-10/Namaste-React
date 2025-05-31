import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";


const useRestaurantMenu = (resId) => {
   const [hasError, setHasError] = useState(false);
   const [resInfo, setResInfo] = useState(null);

   useEffect(()=>{   
      fetchRestaurantMenu();
   }, [resId]);

   // const fetchRestaurantMenu = async () => {
   async function fetchRestaurantMenu(){
      try{
         const restaurantData = await fetch(MENU_API_URL + resId);
         if (!restaurantData.ok) {
				throw new Error(`HTTP error! Status: ${data.status}`);
			}
         const jsonResData = await restaurantData.json();
         setResInfo(jsonResData.data);
         setHasError(false);
      }catch(error){
         console.log("Failed to fetch menu: " + error);
         setHasError(true);
      }
   }
   return [resInfo, hasError];
};

export default useRestaurantMenu;