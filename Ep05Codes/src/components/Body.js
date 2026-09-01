
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../../utils/mockData";
import {useState} from "react";

const Body = ()=>{
        
    const [restaurants, setRestaurant] = useState(restaurantList);
    

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() =>{
                    const filteredRestaurantList = restaurants.filter(
                        (res) => res.info.avgRating >= 4.2
                    );
                    setRestaurant(filteredRestaurantList);
                }}

                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                  restaurants.map((restaurant) => (
                     <RestaurantCard key={restaurant.info.id} restaurantList={restaurant}/>
                  ))
                }
            </div>
        </div>
    )
}

export default Body;