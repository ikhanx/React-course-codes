import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import {RES_INFO_URL} from '../../utils/constants'

const RestaurantMenu = () => {
  
  // const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
 
  // useEffect(()=>{
  //     fetchMenu();
  // }, [])

  // const fetchMenu = async () => {
  //   try {
  //   const response = await fetch(
  //     "RES_INFO_URL+{resId}"
  //   );

  //   console.log(response.url);

  //   console.log("Status:", response.status);
  //   console.log("Content-Type:", response.headers.get("content-type"));

  //   const text = await response.text();

  //   console.log("Raw response:", text);

  //   if (!response.ok) {
  //     throw new Error(`HTTP Error: ${response.status}`);
  //   }

  //   if (!response.headers.get("content-type")?.includes("application/json")) {
  //     throw new Error("Response is not JSON");
  //   }

  //   const json = JSON.parse(text);

  //   setResInfo(json.data);

  // } catch (error) {
  //   console.log("ERROR:", error);
  // }
  //}

  return (
    <div className="menu">
       <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
    </div>
  )
}

export default RestaurantMenu;