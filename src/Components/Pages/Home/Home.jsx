import Banner from "../../Sections/Banner";
import { useLoaderData } from "react-router-dom";
import BestOffers from "../../Sections/BestOffers";
import ExploreProperty from "../../Sections/ExploreProperty";
const Home = () => {

    const data = useLoaderData()

    return (
        <div className="">
            <div className="z-0">
                <Banner props={data}></Banner>
            </div>
            <div className=" mx-1 md:mx-10 lg:mx-20 z-10">
                <BestOffers></BestOffers>
            </div>
            <div className="mx-1 md:mx-10 lg:mx-20">
                <ExploreProperty data={data}></ExploreProperty>
            </div>
        </div>
    );
};

export default Home;