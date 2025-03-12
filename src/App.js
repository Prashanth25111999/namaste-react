import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorRoute from "./components/ErrorRoute";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorRoute />,
        children:
            [{
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurantMenu/:resId",
                element: <RestaurantMenu />
            }
            ]
    },

])



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />)