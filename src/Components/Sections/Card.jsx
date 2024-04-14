import { useLoaderData, useParams } from "react-router-dom";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoBedOutline } from "react-icons/io5";
import { FaFireAlt } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";

const Card = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [sliderRef] = useKeenSlider({
        mode: "free-snap",
        slides: {
            origin: "center",
            perView: 2,
            spacing: 15,
        },
    })
    const detailedCard = data.find(prop => prop.id === id)
    const { estate_title, img, side_img, sub_img, sub2_img, price, Area, bedroom, heating } = detailedCard
    return (
        <div className="pt-[79px]">
            {/* Slider section */}
            <div ref={sliderRef} className="keen-slider bg-meteor">
                <div className="keen-slider__slide number-slide1 overflow-hidden h-[600px] w-auto">
                    <img src={img} alt="" className="w-full h-[700px] object-cover" />
                </div>
                <div className="keen-slider__slide number-slide2 overflow-hidden h-[600px] w-auto">
                    <img src={side_img} alt="" className="w-full h-[700px] object-cover" />
                </div>
                <div className="keen-slider__slide number-slide3 overflow-hidden h-[600px] w-auto">
                    <img src={sub_img} alt="" className="w-full h-[700px] object-cover" />
                </div>
                <div className="keen-slider__slide number-slide4 overflow-hidden h-[600px] w-auto">
                    <img src={sub2_img} alt="" className="w-full h-[700px] object-cover" />
                </div>
            </div>
            {/* details section */}
            <div className="mx-16">
                <div className="flex justify-between items-center gap-2 mt-5 pb-5 border-b-2">
                    <h2 className="text-4xl text-[#231F20] font-bold font-Josefin w-[180px] text-start">${price}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-start gap-8">
                        <div className="flex items-center gap-5 border-r-2 border-l-2">
                            <div className=" w-1 h-[80%] bg-slate-500"></div>
                            <div className="flex">
                                <HiOutlineSquares2X2 className="text-4xl"></HiOutlineSquares2X2>
                            </div>
                            <div>
                                <p className="text-gray-500/85 text-[14px]">Property size:</p>
                                <h3 className="font-bold">{Area}</h3>
                            </div>
                        </div>


                        <div className="flex items-center gap-5 border-r-2">
                            <div><IoBedOutline className="text-4xl"></IoBedOutline></div>
                            <div className="">
                                <p className="text-gray-500/85 text-[14px]">Structure:</p>
                                <h3 className="font-bold">{bedroom} {bedroom > 1 ? 'Bedrooms' : 'Bedroom'}</h3>
                            </div>
                        </div>


                        <div className="flex items-center gap-5 border-r-2">
                            <div><FaFireAlt className="text-4xl"></FaFireAlt></div>
                            <div>
                                <p className="text-gray-500/85 text-[14px]">Heating:</p>
                                <h3 className="font-bold">{heating}</h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-5">
                            <div><FaHouseChimney className="text-4xl"></FaHouseChimney></div>
                            <div>
                                <p className="text-gray-500/85 text-[14px]">House Type:</p>
                                <h3 className="font-bold">{estate_title}</h3>
                            </div>
                        </div>

                    </div>
                    <div className="w-[250px]">
                        <button className="btn bg-gradient-to-t from-[#8E793E] to-[#AD974F] border-0 hover:bg-gradient-to-b hover:from-[#725f3a] hover:to-[#ac9b65] text-white">REQUEST A SHOWING</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;