import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { GiShower } from "react-icons/gi";
import { IoBedOutline } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';


const Banner = () => {


    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            className='max-w-[100%]  text-[#AD974F]'
            navigation
            loop
            speed={800}
            effect="fade"
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className='flex flex-col gap-6 group md:left-[0px] relative mr-16 shadow-lg text-white p-6 h-[650px] md:h-[600px] w-full overflow-hidden'>
                    <div className='absolute inset-0 bg-family bg-no-repeat bg-cover bg-center bg-siz' />
                    <div className='absolute inset-0 bg-black opacity-60'/>
                    <div className='relative top-24 space-y-5 px-6 lg:pl-28'>
                        <h2 className='text-white text-3xl md:text-6xl font-Josefin'>Single Family House</h2>
                        <p className='md:w-[500px] text-lg text-[#9F9F9F]'>Experience the epitome of suburban living with our exceptional selection of single-family homes. Each residence offers a perfect blend of comfort, style, and functionality, featuring spacious layouts and upscale finishes.......</p>
                        <div>
                            <p className='text-2xl font-semibold font'><span className='font-bold '>Area:</span> 1800 sq ft</p>
                            <div className='flex gap-4 mt-4 text-2xl'>
                                <div className='flex gap-2 items-center bg-slate-400/15 rounded-2xl px-3 py-1'>
                                    <IoBedOutline></IoBedOutline>
                                    <p>3</p>
                                </div>
                                <div className='flex gap-2 items-center bg-slate-400/15 rounded-2xl px-3 py-1'>
                                    <GiShower></GiShower>
                                    <p>2</p>
                                </div>
                            </div>
                        </div>
                        <Link className="btn bg-gradient-to-t from-[#8E793E] to-[#AD974F] border-0 hover:bg-gradient-to-b hover:from-[#725f3a] hover:to-[#ac9b65] text-white" to='/6'><button >View Details</button></Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col gap-6 group md:left-[0px] relative mr-16 shadow-lg text-white p-6 h-[650px] md:h-[600px] w-full'>
                    <div className='absolute inset-0 bg-rentals bg-no-repeat bg-cover bg-center bg-siz' />
                    <div className='absolute inset-0 bg-black opacity-60 ' />
                    <div className='relative top-24 space-y-5 px-6 lg:pl-28'>
                        <h2 className='text-white text-3xl md:text-6xl font-Josefin'>Vacation Rentals</h2>
                        <p className='md:w-[500px] text-lg text-[#9F9F9F]'>Escape to your dream vacation getaway with our luxurious rental homes. Each meticulously curated property offers a blend of elegance and comfort, featuring spacious living areas, designer furnishings, and state-of-the-art amenities.......</p>
                        <div>
                            <p className='text-2xl font-semibold font'><span className='font-bold'>Area:</span> 3000 sq ft</p>
                            <div className='flex gap-4 mt-4 text-2xl'>
                                <div className='flex gap-2 items-center bg-slate-400/15 rounded-2xl px-3 py-1'>
                                    <IoBedOutline></IoBedOutline>
                                    <p>4</p>
                                </div>
                                <div className='flex gap-2 items-center bg-slate-400/15 rounded-2xl px-3 py-1'>
                                    <GiShower></GiShower>
                                    <p>3</p>
                                </div>
                            </div>
                        </div>
                        <Link className="btn bg-gradient-to-t from-[#8E793E] to-[#AD974F] border-0 hover:bg-gradient-to-b hover:from-[#725f3a] hover:to-[#ac9b65] text-white" to='/2'><button >View Details</button></Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col gap-6 group md:left-[0px] relative mr-16 shadow-lg text-white p-6 h-[650px] md:h-[600px] w-full overflow-hidden '>
                    <div className='absolute inset-0 bg-apartments bg-no-repeat bg-cover  bg-center' />
                    <div className='absolute inset-0 bg-black opacity-60 ' />
                    <div className='relative top-24 space-y-5 px-6 lg:pl-28'>
                        <h2 className='text-white text-3xl md:text-6xl font-Josefin'>Apartment</h2>
                        <p className='md:w-[500px] text-lg text-[#9F9F9F]'>Experience urban living at its finest with our exceptional selection of luxury apartments. These meticulously designed residences boast modern architecture, high-end finishes, and expansive living spaces flooded with natural light. Indulge in the convenience of premium......</p>
                        <div>
                            <p className='text-2xl font-semibold font'><span className='font-bold'>Area:</span> 900 sq ft</p>
                            <div className='flex gap-4 mt-4 text-2xl'>
                                <div className='flex gap-2 items-center bg-slate-400/15 rounded-2xl px-3 py-1'>
                                    <IoBedOutline></IoBedOutline>
                                    <p>2</p>
                                </div>
                                <div className='flex gap-2 items-center bg-slate-400/15 rounded-2xl px-3 py-1'>
                                    <GiShower></GiShower>
                                    <p>1</p>
                                </div>
                            </div>
                        </div>
                        <Link className="btn bg-gradient-to-t from-[#8E793E] to-[#AD974F] border-0 hover:bg-gradient-to-b hover:from-[#725f3a] hover:to-[#ac9b65] text-white" to='/4'><button >View Details</button></Link>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;