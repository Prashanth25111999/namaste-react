import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import ErrorRoute from "./components/ErrorRoute";
import RestaurantMenu from "./components/RestaurantMenu";
const About = lazy(() => import("./components/About"));

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
                element: <Suspense fallback={<h1>Loading...!</h1>}><About /></Suspense>
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

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import ErrorRoute from "./components/ErrorRoute";
// import RestaurantMenu from "./components/RestaurantMenu";

// const AppLayout = () => {
//     return (
//         <>
//             <Header />

//             <Routes>
//                 <Route path="/" element={<Body />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/restaurantMenu/:resId" element={<RestaurantMenu />} />
//                 <Route path="*" element={<ErrorRoute />} /> {/* Handles unknown routes */}
//             </Routes>
//         </>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <Router>
//         <AppLayout />
//     </Router>
// );
