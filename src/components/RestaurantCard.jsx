import {IMG_CDN_BASE_URL} from "../constants"

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