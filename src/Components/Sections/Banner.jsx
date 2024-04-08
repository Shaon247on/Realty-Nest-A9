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
import 'swiper/css/effect-fade'

const Banner = () => {


    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            className='max-w-[90%] lg:max-w-[100%] border-2 border-red-300 '
            navigation
            effect="fade"
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className='flex flex-col gap-6 group md:left-[0px] relative mr-16 shadow-lg text-white p-6 h-[600px] w-full overflow-hidden cursor-pointer'>
                    <div className='absolute inset-0 bg-family bg-no-repeat bg-cover bg-center bg-siz' />
                    <div className='absolute inset-0 bg-black opacity-60 ' />
                    <div className='relative top-40 space-y-5 pl-28'>
                        <h2 className='text-white text-6xl font-Josefin'>Single Family House</h2>
                        <p className='md:w-[500px] text-lg'>Experience the epitome of suburban living with our exceptional selection of single-family homes. Each residence offers a perfect blend of comfort, style, and functionality, featuring spacious layouts and upscale finishes. From gourmet kitchens to tranquil outdoor spaces, every detail is thoughtfully crafted......</p>
                        <div>
                            <p className='text-2xl font-semibold font'><span className='font-bold'>Area:</span> 1000 sq ft</p>
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
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col gap-6 group md:left-[0px] relative mr-16 shadow-lg text-white p-6 h-[600px] w-full overflow-hidden cursor-pointer'>
                    <div className='absolute inset-0 bg-rentals bg-no-repeat bg-cover bg-center bg-siz' />
                    <div className='absolute inset-0 bg-black opacity-60 ' />
                    <div className='relative top-40 space-y-5 pl-28'>
                        <h2 className='text-white text-6xl font-Josefin'>Vacation Rentals</h2>
                        <p className='md:w-[500px] text-lg'>Escape to your dream vacation getaway with our luxurious rental homes. Each meticulously curated property offers a blend of elegance and comfort, featuring spacious living areas, designer furnishings, and state-of-the-art amenities. Whether you're seeking a beachfront retreat, a secluded mountain cabin, or a chic urban loft......</p>
                        <div>
                            <p className='text-2xl font-semibold font'><span className='font-bold'>Area:</span> 1000 sq ft</p>
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
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col gap-6 group md:left-[0px] relative mr-16 shadow-lg text-white p-6 h-[600px] w-full overflow-hidden cursor-pointer'>
                    <div className='absolute inset-0 bg-apartments bg-no-repeat bg-cover bg-center bg-siz' />
                    <div className='absolute inset-0 bg-black opacity-60 ' />
                    <div className='relative top-40 space-y-5 pl-28'>
                        <h2 className='text-white text-6xl font-Josefin'>Apartment</h2>
                        <p className='md:w-[500px] text-lg'>Experience urban living at its finest with our exceptional selection of luxury apartments. These meticulously designed residences boast modern architecture, high-end finishes, and expansive living spaces flooded with natural light. Indulge in the convenience of premium amenities such as fitness centers, swimming pools......</p>
                        <div>
                            <p className='text-2xl font-semibold font'><span className='font-bold'>Area:</span> 1000 sq ft</p>
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
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;