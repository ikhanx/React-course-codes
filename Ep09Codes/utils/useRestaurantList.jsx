import {useState, useEffect} from 'react';
import { RESLIS_URL } from './constants';

const useRestaurantList = () => {
    const [resList, setResList] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async ()=> {
        const data = await fetch( RESLIS_URL);

        const json = await data.json();

        console.log("STATUS:", data.status);

        console.log("RESPONSE:", json);

        setResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants??[]);

    }

    return resList;
}

export default useRestaurantList;