import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer"
import {Link} from "react-router-dom";
import useRestaurantList from "../../utils/useRestaurantList";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const restaurants = useRestaurantList();
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
      setfilteredRestaurants(restaurants);
  }, [restaurants])
  

  //Conditional rendering
  // if(restaurants.length == 0){
  //   return <Shimmer/>
  // }

  const onlineData = useOnlineStatus();

  if(onlineData === false) return <h1>Looks like a you're offline!! please check your internet connection</h1>


  if(restaurants.length==0){
    return <Shimmer/>;
  }

  
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input className="search-box" type="text" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button onClick={ ()=>{
            const filteredRestaurants = restaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()) );
            setfilteredRestaurants(filteredRestaurants);
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurantList = restaurants.filter(
              (res) => res.info.avgRating >= 4.2,
            );
            setfilteredRestaurants(filteredRestaurantList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
          key={restaurant.info.id}
          to={"/restaurants/"+ restaurant.info.id }>
          <RestaurantCard
            restaurantList={restaurant}
          />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
