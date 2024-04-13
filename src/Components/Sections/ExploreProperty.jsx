import Cards from "./Cards";
import PropTypes from 'prop-types';

const ExploreProperty = ({data}) => {
    return (
        <div>
            <div className='text-center mt-28'>
                <h1 className="text-2xl md:text-4xl font-bold mb-5">Discover Our Properties</h1>
                <p className="w-[260px] text-[13px] md:text-base md:w-[620px] mx-auto text-[#231F20B3] mb-10">Explore a curated collection of residential and commercial properties tailored to diverse lifestyles and budgets. Find your perfect home or investment opportunity today.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    data.map(prop => <Cards key={prop.id} prop={prop}></Cards>)
                }
            </div>
        </div>
    );
};
ExploreProperty.propTypes = {
    data: PropTypes.array.isRequired
}

export default ExploreProperty;