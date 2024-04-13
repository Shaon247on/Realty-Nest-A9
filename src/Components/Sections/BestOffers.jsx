import { useLoaderData } from 'react-router-dom'
import './style-section.css'
const BestOffers = () => {


    const datas = useLoaderData()
    console.log(datas)
    const imageClasses = [
        'col-span-2',
        'col-span-1',
        'col-span-1 row-span-2',
        'col-span-1',
        'col-span-2'
    ]
    return (
        <div className='mt-20'>
            <div className=' text-center'>
                <h1 className='text-4xl font-bold mb-5'>Best offers this week</h1>
                <p className='w-[600px] mx-auto text-[#231F20B3]'>Unlock your dream home with our exclusive offer this week! Enjoy unbeatable discounts on property prices, making homeownership more affordable than ever.</p>
            </div>
            <div className='grid grid-cols-4 gap-2 h-[600px]'>
                {
                    datas.slice(0, 5).map((data, index) =>
                        <div key={index}
                            className={`${imageClasses[index]} relative overflow-hidden`}>
                            <div className=' absolute z-20 bottom-2 right-3 '>
                                <p className='font-bold text-[18px] bg-white text-black px-2 rounded-sm'>${data.price}</p>
                            </div>
                            <div className='absolute bottom-2 left-1 z-20'>
                                <h3 className='text-lg font-bold text-white'>{data.simple_address}</h3>
                                <h3 className='text-[13px] font-semibold text-white'>{data.full_address}</h3>
                            </div>
                            <div className='absolute w-full h-full z-0'>
                                <img
                                    key={index}
                                    src={data.img}
                                    className='w-full h-full object-cover zoom-effect' />
                            </div>
                            <div className=' absolute top-2 left-2 z-20'>
                                <p className='bg-[#00000066] text-white font-bold px-2 py-1 rounded-sm'>For {data.Status}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BestOffers;