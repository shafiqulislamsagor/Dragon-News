import { useContext } from "react";
import { CreateContextApi } from "./context/ContextApi";
import { Outlet } from "react-router-dom";
import Theme from "./components/Theme";
import Title from "./components/Title";

const Roots = () => {
    const ContextInfo = useContext(CreateContextApi)
    console.log(ContextInfo);
    return (
        <div>
            <div className="absolute right-3 lg:right-5 top-3 lg:top-5">
                <Theme />
            </div>
            <Title />
            
            <Outlet />
        </div>
    );
};

export default Roots;