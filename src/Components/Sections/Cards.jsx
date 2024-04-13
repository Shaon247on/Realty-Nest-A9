import PropTypes from 'prop-types';
import './style-section.css'
import { Link } from 'react-router-dom';
import { LiaVectorSquareSolid } from "react-icons/lia";
import { IoHomeOutline } from "react-icons/io5";
const Cards = ({ prop }) => {
    const { img, Status, id, estate_title, price, simple_address, full_address, Area, bedroom, description } = prop
    return (
        <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-4 md:h-[640px] lg:h-[630px]">
            <div className='overflow-hidden rounded-t-md relative h-[280px] '>
                <img src={img} alt="" className="zoom-effect absolute z-0 object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <p className='bg-[#00000066] text-white font-semibold md:font-bold px-1 md:px-2 py-1 rounded-sm text-[12px] md:text-base z-10 absolute top-2 left-2'>For {Status}</p>
                <h4 className='font-bold text-[18px] bg-white text-black px-2 rounded-sm z10 absolute bottom-2 right-3'>${price}</h4>
            </div>
            <div className="flex flex-col justify-between mt-5 p-2">
                <div className='mb-4 flex-auto h-[260px] lg:h-[240px]'>
                    <h2 className="text-2xl font-semibold tracking-wide mb-3">{estate_title}</h2>
                    <h3 className='text-lg font-semibold'>{simple_address}</h3>
                    <h3 className='text-base text-[#231F2066]'>{full_address}</h3>
                    <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-2'><LiaVectorSquareSolid></LiaVectorSquareSolid> {Area}</p>
                        <p className='flex items-center gap-2'><IoHomeOutline></IoHomeOutline> {bedroom}-Bedroom</p>
                    </div>
                    <p className="dark:text-gray-800 mt-4 flex-grow">{description.slice(0,130)}....</p>
                </div>
                <button className="btn bg-gradient-to-t from-[#8E793E] to-[#AD974F] border-0 hover:bg-gradient-to-b hover:from-[#725f3a] hover:to-[#ac9b65] text-white"><Link to={`/${id}`}>View Details</Link></button>
            </div>
        </div>
    );
};

Cards.propTypes = {
    prop: PropTypes.array.isRequired
}

export default Cards;