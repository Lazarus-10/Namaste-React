import { useParams } from "react-router-dom"
import ErrorPage from "./ErrorPage";
import { IMG_CDN_BASE_URL } from "../utils/constants";
import MyShimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
   var param = useParams();

   const [resInfo, hasError] = useRestaurantMenu(param?.id);

   if(hasError){
		return <ErrorPage />;
	}

   const {
      name = "Unknown Restaurant",
      cuisines = [],
      costForTwoMessage = "Cost for Two: Unknown",
      cloudinaryImageId = "",
      avgRating = "N/A",
      sla = {},
      badges = {},
      aggregatedDiscountInfo = {},
      areaName = "Unknown Area",
      totalRatingsString = "No ratings",
   } = resInfo?.cards[2]?.card?.card?.info || {};


   const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

   // if (resInfo === null) return <ShimmerMenu />;

   return (!resInfo) ? <MyShimmer /> : (
      <div className="menu">
         <div>
            <h1>Restaurant id: {param.id}</h1>
            <h2>{name}</h2>
            <img src={IMG_CDN_BASE_URL + cloudinaryImageId} alt="Restaurant Image" />
            <h3>avgRating: {avgRating}</h3>
         </div>
         <div>
            <h1>Menu</h1>
            <ul>
               {categories?.map((category, catIndex) =>
                  category?.card?.card?.itemCards?.map((item, itemIndex) => (
                     <li key={`${catIndex}-${itemIndex}`}>
                     {item?.card?.info?.name}
                     </li>
                  ))
               )}
            </ul>
         </div>
      </div>
   );
};

export default RestaurantMenu;