import Banner from "../../Sections/Banner";
import { useLoaderData } from "react-router-dom";
import BestOffers from "../../Sections/BestOffers";
import ExploreProperty from "../../Sections/ExploreProperty";
import {Helmet} from "react-helmet";

const Home = () => {

    const data = useLoaderData()

    return (
        <div className=" mb-20">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Realty Nest || Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
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