import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots";
import Home from "../pages/Home";
import About from "../pages/About";
import Profile from "../pages/Profile";
import LogIn from "../signIn/LogIn";
import Register from "../signIn/Register";
import PrivetRoutes from "../Privet/PrivetRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots />,
        children:[
            {
                path:'/',
                element:<PrivetRoutes><Home/></PrivetRoutes>
            },
            {
                path:'/about',
                element:<PrivetRoutes><About/></PrivetRoutes>
            },
            {
                path:'/profile',
                element: <PrivetRoutes><Profile/></PrivetRoutes>
            },
            {
                path: '/login',
                element:<LogIn/>
            },
            {
                path:'/register',
                element:<Register/>
            }
        ]
    },
]);

export default router;