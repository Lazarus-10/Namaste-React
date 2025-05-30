import {IMG_CDN_BASE_URL} from "../utils/constants"

const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId, id}) => {
    return(
        <div className="card">
            <img src={IMG_CDN_BASE_URL + cloudinaryImageId} alt="Restaurant Logo" />
            <h2>{name}</h2>
            <h4>{cuisines?.slice(0, 3).join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
        </div>
    );
};

export default RestaurantCard;