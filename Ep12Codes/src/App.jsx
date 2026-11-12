import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error"; 
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import userContext from "../utils/userContext";
import {Provider} from "react-redux";
import appStore from "../utils/appStore";

// Chunking
// Code splitting
// Dynamic Bundling
// lazy loading
// on demand loading
// dynamic import  these are different names of this concept


const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () =>{
   const[userName, setUserName] = useState("user")

   useEffect(()=> {
       // Suppose api is called to get info 
       const data = {
        name: "Imran Khan"
       }
       setUserName(data.name);
    },[])

    return (
        <Provider store={appStore}>
       <userContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="app">
            <Header />
            <Outlet/>
        </div>
        </userContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            }, 
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>
            }
        ]
    }

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)