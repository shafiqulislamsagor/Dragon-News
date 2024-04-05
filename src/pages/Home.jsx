import Menubar from "../components/Menubar";
import NewsHading from "../components/NewsHading";

const Home = () => {
    return (
        <div className="w-[95%] lg:w-5/6 mx-auto">
            <NewsHading/>
            <Menubar/>
            
        </div>
    );
};

export default Home;