import { useContext } from "react";
import { CreateContextApi } from "./context/ContextApi";
import { Outlet } from "react-router-dom";
import TitleHeader from "./components/TitleHeader";

const Roots = () => {
    const ContextInfo = useContext(CreateContextApi)
    console.log(ContextInfo);
    return (
        <div>
            <TitleHeader/>
            <Outlet/>
        </div>
    );
};

export default Roots;