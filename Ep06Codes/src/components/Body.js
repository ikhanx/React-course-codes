import RestaurantCard from "./RestaurantCard";
import restaurantList from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"

const Body = () => {
  const [restaurants, setRestaurant] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {

        
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9352403&lng=77.624532&carousel=true&third_party_vendor=1"
      );

      console.log("STATUS:", data.status);

      const json = await data.json();

      console.log("RESPONSE:", json);
      setRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants??[]);
      
      setfilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants??[]);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  //Conditional rendering
  // if(restaurants.length == 0){
  //   return <Shimmer/>
  // }



  return restaurants.length==0 ? <Shimmer/> : (
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
            setRestaurant(filteredRestaurantList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantList={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
