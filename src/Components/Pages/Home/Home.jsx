import Banner from "../../Sections/Banner";
import {useLoaderData} from "react-router-dom";
import BestOffers from "../../Sections/BestOffers";
const Home = () => {

    const data = useLoaderData()
    console.log(data)

    return (
        <div className="">       
            <div className="z-0">
                <Banner props={data}></Banner>
            </div>    
            <div className="bg-red-500 px-20 z-0">
                <BestOffers></BestOffers>
                
            </div>
        </div>
    );
};

export default Home;