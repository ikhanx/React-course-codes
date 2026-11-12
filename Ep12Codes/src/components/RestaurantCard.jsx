import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props)=>{
    const {restaurantList} = props;

    const{
      name,
      cuisines,
      avgRating,
      cloudinaryImageId
    } = restaurantList?.info;
     const deliveryTime =  restaurantList?.info?.sla.deliveryTime;


    return (
        <div className="m-4 p-4  w-62.5 bg-green-50 rounded-lg hover:bg-green-100">
           <img
        src={ CDN_URL +
          cloudinaryImageId
        }
        alt={restaurantList.info.name}
        className="rounded-lg"
      />

            <h3 className=" font-bold py-5">{name}</h3>
            <h4 className="txt">{cuisines.join(", ")}</h4>
            <h4 className="txt">Rating: {avgRating}</h4>
            <h4>Delivery Time : {deliveryTime + " mins"}</h4>
        </div>
    )
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-3 p-2 rounded-lg"> Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;