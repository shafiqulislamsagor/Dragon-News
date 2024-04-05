import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots />,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/profile',
                element: <Profile/>
            }
        ]
    },
]);

export default router;