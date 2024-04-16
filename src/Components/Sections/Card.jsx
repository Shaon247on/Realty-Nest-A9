import { useLoaderData, useParams } from "react-router-dom";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"
import moment from 'moment';
import ReactStarsRating from 'react-awesome-stars-rating';

// Icons Inputs
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoBedOutline, IoCallOutline, IoLayersOutline, IoEarthOutline } from "react-icons/io5";
import { FaFireAlt, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaRegBuilding } from "react-icons/fa";
import { FaHouseChimney, FaRegEye, FaLocationDot } from "react-icons/fa6";
import { MdOutlineAddReaction } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { LuShowerHead } from "react-icons/lu";
import { SiBandsintown } from "react-icons/si";
import { TiLocationArrowOutline } from "react-icons/ti";

// Map Input
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { useEffect } from "react";
import { Icon } from "leaflet";


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
    const { estate_title, img, side_img, sub_img, sub2_img, price, Area, bedroom, heating, simple_address, Status, last_update_date, rating, react, view, total_floor, bathroom, year_of_build, description, full_address, Zip_code, Country, Coordinate  } = detailedCard

    const onChange = (value) => {
        console.log(value);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [])


      const customIcom =new Icon({
        iconUrl:'https://i.ibb.co/7RcBbhD/location-pin.png',
        iconSize:[38,38]        
      })

    return (
        <div className="pt-[76px]">
            {/* Slider section */}
            <div ref={sliderRef} className="keen-slider bg-meteor">
                <div className="keen-slider__slide number-slide1 overflow-hidden h-[500px] lg:h-[600px] w-auto">
                    <img src={img} alt="" className="w-full h-[700px] object-cover" />
                </div>
                <div className="keen-slider__slide number-slide2 overflow-hidden h-[500px] lg:h-[600px] w-auto">
                    <img src={side_img} alt="" className="w-full h-[700px] object-cover" />
                </div>
                <div className="keen-slider__slide number-slide3 overflow-hidden h-[500px] lg:h-[600px] w-auto">
                    <img src={sub_img} alt="" className="w-full h-[700px] object-cover" />
                </div>
                <div className="keen-slider__slide number-slide4 overflow-hidden h-[500px] lg:h-[600px] w-auto">
                    <img src={sub2_img} alt="" className="w-full h-[700px] object-cover" />
                </div>
            </div>
            {/* details section */}
            <div className="mx-5 md:mx-10 lg:mx-16 mb-10">

                {/* Details header section */}
                <div className="flex flex-col lg:flex-row justify-start lg:justify-between items-start lg:items-center gap-10 md:gap-5 lg:gap-2 mt-5 pb-5 border-b-2">
                    <h2 className="text-4xl text-[#231F20] font-bold font-open w-[180px] text-start">${price}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start lg:items-center justify-start gap-10 lg:gap-8">
                        <div className="flex items-center gap-5 border-r-2 border-l-2">
                            <div><HiOutlineSquares2X2 className="text-4xl"></HiOutlineSquares2X2></div>
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
                        <button className="btn bg-gradient-to-t from-[#8E793E] to-[#AD974F] border-0 hover:bg-gradient-to-b hover:from-[#725f3a] hover:to-[#ac9b65] text-white text-xs">REQUEST A SHOWING</button>
                    </div>
                </div>

                {/* More details section  */}
                <div className="grid lg:grid-cols-7 gap-0 lg:gap-6">
                    <div className="col-span-5 pb-6 lg:pb-12">
                        <div className="border-b py-7">
                            <div className="flex justify-between items-center">
                                <h1 className="text-4xl font-semibold font-open">{simple_address}</h1>
                                <p className=" bg-[#231F20b3] font-medium text-[18px] px-2 text-white">{Status}</p>
                            </div>
                            <div className="mt-3 flex items-start md:items-center justify-between gap-4">
                                <div className="flex flex-col md:flex-row gap-4 items-start lg:items-center">
                                    <h3 className="text-[14px] pr-5 ">{moment(last_update_date).format('MMMM Do, YYYY')}</h3>
                                    < p className="flex flex-col md:flex-row items-start md:items-center gap-4 border-l-0 md:border-l-[1px] border-r-[1px] border-gray-500/30 md:px-4"><ReactStarsRating className="flex" onChange={onChange} value={rating} />{rating}</p>
                                    <div className="flex gap-1 items-center border-r-[1px] border-gray-500/30 md:px-4">
                                        <MdOutlineAddReaction></MdOutlineAddReaction>
                                        <p>{react}</p>
                                    </div>
                                    <div className="flex gap-1 items-center border-r-[1px] border-gray-500/30 md:px-4">
                                        <FaRegEye></FaRegEye>
                                        <p>{view}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>Property ID: {id}</p>
                                </div>
                            </div>
                        </div>

                        {/* Specification section */}
                        <div className="grid gap-6 md:gap-0 grid-cols-1 md:grid-cols-5 mt-6">
                            <div className="col-span-1">
                                <h1 className="font-semibold">Specification</h1>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 border-b col-span-1 md:col-span-4 pb-6">
                                <div className="space-y-4 ">
                                    <div className="flex items-center gap-4">
                                        <IoBedOutline ></IoBedOutline>
                                        <p className="text-gray-500/75 text-[14px]">{bedroom > 1 ? 'Bedrooms:' : 'Bedroom:'}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <HiOutlineSquares2X2 ></HiOutlineSquares2X2>
                                        <p className="text-gray-500/75 text-[14px]">Property size:</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <IoLayersOutline ></IoLayersOutline>
                                        <p className="text-gray-500/75 text-[14px]">Total Floors:</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-[14px] font-semibold">{bedroom}</p>
                                    <p className="text-[14px] font-semibold">{Area}</p>
                                    <p className="text-[14px] font-semibold">{total_floor}</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <LuShowerHead ></LuShowerHead>
                                        <p className="text-gray-500/75 text-[14px]">{bathroom > 1 ? 'Bathrooms:' : 'Bathroom:'}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <FaRegBuilding  ></FaRegBuilding >
                                        <p className="text-gray-500/75 text-[14px]">Year Built:</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <FaFireAlt  ></FaFireAlt >
                                        <p className="text-gray-500/75 text-[14px]">Heating:</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-[14px] font-semibold">{bathroom}</p>
                                    <p className="text-[14px] font-semibold">{year_of_build}</p>
                                    <p className="text-[14px] font-semibold">{heating}</p>
                                </div>
                            </div>
                        </div>

                        {/* Description section */}
                        <div className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-5 mt-6">
                            <div className="col-span-1">
                                <h1 className="font-semibold">Description</h1>
                            </div>
                            <div className="border-b col-span-4 pb-6 ">
                                <p>{description}</p>
                            </div>
                        </div>

                        {/* Location section */}
                        <div className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-5 mt-6">
                            <div className="col-span-1">
                                <h1 className="font-semibold">Location</h1>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 border-b col-span-1 md:col-span-4 pb-6" >
                                <div className="space-y-4 ">
                                    <div className="flex items-center gap-4">
                                        <FaLocationDot></FaLocationDot>
                                        <p className="text-gray-500/75 text-[14px]">Full Address:</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <TiLocationArrowOutline></TiLocationArrowOutline>
                                        <p className="text-gray-500/75 text-[14px]">Zip Code:</p>
                                    </div>
                                </div>
                                <div className="space-y-4 ">
                                    <p className="text-[14px] font-semibold">{full_address}</p>
                                    <p className="text-[14px] font-semibold">{Zip_code}</p>
                                </div>
                                <div className="space-y-4 mt-5 md:mt-0">
                                    <div className="flex items-center gap-4">
                                        <SiBandsintown></SiBandsintown>
                                        <p className="text-gray-500/75 text-[14px]">Simple Address:</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <IoEarthOutline ></IoEarthOutline >
                                        <p className="text-gray-500/75 text-[14px]">Country:</p>
                                    </div>
                                </div>
                                <div className="space-y-4 mt-5 md:mt-0">
                                    <p className="text-[14px] font-semibold">{simple_address}</p>
                                    <p className="text-[14px] font-semibold">{Country}</p>
                                </div>

                                {/* map section */}
                                <div className=" mt-7 col-span-2 md:col-span-4 overflow-hidden flex items-center md:items-start justify-center md:justify-start">
                                    <MapContainer center={Coordinate} zoom={17} scrollWheelZoom={false}>
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                        <Marker position={Coordinate} icon={customIcom}>
                                            <Popup>
                                                {simple_address} <br /> {full_address}
                                            </Popup>
                                        </Marker>
                                    </MapContainer> 
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of left side */}

                    {/* start of right side or contact us section */}
                    <div className="col-span-2 border space-y-3 p-5">
                        <h2 className="text-2xl font-semibold">Contact Info</h2>
                        <div className="flex items-center gap-2">
                            <CgProfile className="text-[18px]"></CgProfile>
                            <p className="text-[14px] text-gray-600/60">The Agency</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <IoCallOutline className="text-[18px]"></IoCallOutline>
                            <p className="text-[14px] text-black hover:text-blue-600 duration-[400ms] cursor-pointer">+880 1400-608970</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <CiMail className="text-[18px]"></CiMail>
                            <p className="text-[14px] text-black hover:text-blue-600 duration-[400ms] cursor-pointer">aminul007.ais@gmail.com</p>
                        </div>
                        <div>
                            <h1 className="font-bold">Contact us with:</h1>
                            <div className="flex items-center gap-6 ml-3 mt-4">
                                <button><FaFacebookF className="text-[18px] text-gray-700/60 hover:text-blue-600 duration-[400ms]"></FaFacebookF></button>
                                <button><FaInstagram className="text-[18px] text-gray-700/60 hover:text-orange-800 duration-[400ms]"></FaInstagram></button>
                                <button><FaTwitter className="text-[18px] text-gray-700/60 hover:text-blue-600 duration-[400ms]"></FaTwitter></button>
                                <button><FaLinkedinIn className="text-[18px] text-gray-700/60 hover:text-blue-600 duration-[400ms]"></FaLinkedinIn></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;