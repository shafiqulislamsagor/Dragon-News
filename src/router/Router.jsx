import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Roots />,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    },
]);

export default router;