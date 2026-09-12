import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props)=>{
    const {restaurantList} = props;

    const{
      name,
      cuisines,
      avgRating,
      deliveryTime,
      cloudinaryImageId
    } = restaurantList?.info;


    return (
        <div className="res-card">
           <img
        src={ CDN_URL +
          cloudinaryImageId
        }
        alt={restaurantList.info.name}
        className="restaurant-logo"
      />

            <h3>{restaurantList.info.name}</h3>
            <h4 className="txt">{cuisines.join(", ")}</h4>
            <h4 className="txt">Rating: {avgRating}</h4>
            <h4>Delivery Time : {deliveryTime + " mins"}</h4>
        </div>
    )
}

export default RestaurantCard;