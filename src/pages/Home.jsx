import Menubar from "../components/Menubar";
import NewsHading from "../components/NewsHading";
import HomeLayout from "../layout/HomeLayout";

const Home = () => {
    return (
        <div className="w-[95%] lg:w-5/6 mx-auto">
            <NewsHading/>
            <Menubar/>
            <HomeLayout/>
        </div>
    );
};

export default Home;