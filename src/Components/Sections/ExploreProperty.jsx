import { useState } from "react";
import Cards from "./Cards";
import PropTypes from 'prop-types';

const ExploreProperty = ({data}) => {
    const [viewMore, setViewMore] = useState(6)
    const handleViewMore = () => {
        setViewMore(data.length)
    }
    return (
        <div>
            <div className='text-center mt-28'>
                <h1 className="text-2xl md:text-4xl font-bold mb-5">Explore Our Properties</h1>
                <p className="w-[320px] text-[13px] md:text-base md:w-[620px] mx-auto text-[#231F20B3] mb-10">Explore a curated collection of residential and commercial properties tailored to diverse lifestyles and budgets. Find your perfect home or investment opportunity today.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    data.slice(0,viewMore).map(prop => <Cards key={prop.id} prop={prop}></Cards>)
                }
            </div>
            <div className="mt-10">
                {
                    viewMore > 6 ? <span></span> :
                        <div className="flex justify-center">
                            <button onClick={handleViewMore} type="button" className="btn bg-gradient-to-t from-[#8E793E] to-[#AD974F] border-0 hover:bg-gradient-to-t  hover:from-[#725f3a] hover:to-[#ac9b65] text-white">Load More</button>
                        </div>
                }
            </div>
        </div>
    );
};
ExploreProperty.propTypes = {
    data: PropTypes.array.isRequired
}

export default ExploreProperty;