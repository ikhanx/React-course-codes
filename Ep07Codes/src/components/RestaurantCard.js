import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props)=>{
    const {restaurantList} = props;

    const{
      name,
      cuisines,
      avgRating,
      cloudinaryImageId
    } = restaurantList?.info;

    const deliveryTime = restaurantList?.info?.sla?.slaString;


    return (
        <div className="res-card">
           <img
        src={ CDN_URL +
          cloudinaryImageId
        }
        alt={name}
        className="restaurant-logo"
      />

            <h3>{name}</h3>
            <h4 className="txt">{cuisines.join(", ")}</h4>
            <h4 className="txt">Rating: {avgRating}</h4>
            <h4>Delivery Time : {deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;