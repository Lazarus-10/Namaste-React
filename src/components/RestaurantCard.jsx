import {IMG_CDN_BASE_URL} from "../constants"

//not mandatory to name it as props
//any arguments passed to this functional component will come as a parameter (we called here props)
// ? const RestaurantCard = (props) => {
    
    //since we already know what params are we passing under props, we can destructure on the fly(named should be same as argument passed)
    // ? const RestaurantCard = ({restaurant}) => {
    
    //we can further destructure
    //const {name, cuisines, avgRating, cloudinaryImageId} = restaurant?.card?.card?.info;
    //optional chaining(using ?)

// Object Destructuring
const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId}) => {
    return(
        <div className="card">
            <img src={IMG_CDN_BASE_URL + cloudinaryImageId} alt="Restaurant Logo" />
            <h2>{name}</h2>
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
        </div>
    );
};

export default RestaurantCard;
