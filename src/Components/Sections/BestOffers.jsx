import { useLoaderData } from 'react-router-dom'
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
        <div className='w-[90%] p-6' >
            <h1>Best offers this week</h1>
            <p>Unlock your dream home with our exclusive offer this week! Enjoy unbeatable discounts on property prices, making homeownership more affordable than ever.</p>
            <div className='grid grid-cols-4 gap-2 border-2 border-green-700 h-[600px] '>
                {
                    datas.slice(0, 5).map((data, index) =>
                        <div key={index}
                            className={`${imageClasses[index]} relative overflow-hidden `}>
                            <div className='w-full h-full absolute right-2 flex flex-col outline-dashed  space-y-2 z-10'>
                                <h1 className='shadow-2xl text-2xl text-white font-bold '>{data.location}</h1>
                                <p className='text-white font-bold text-[18px]'>{data.price}$</p>
                            </div>
                            <div className='w-full h-full absolute flex flex-col items-startz-10'>
                                <h3 className='text-lg font-bold '>{data.simple_address}</h3>
                                <h3 className='text-[16px] font-semibold '>{data.full_address}</h3>
                            </div>
                            <div className='absolute w-full h-full z-0'>
                                <img
                                    key={index}
                                    src={data.img}
                                    className='w-full h-full object-cover z-10' />
                            </div>
                            <div className=' absolute overflow-clip p-5 z-20 border-2 border-red-600 w-full h-full flex justify-end bottom-6'>
                                <button className="btn bg-gradient-to-t from-[#8E793E] to-[#AD974F] border-0 hover:bg-gradient-to-b hover:from-[#6b5d41] hover:to-[#ac9b65] text-white">View Details</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default BestOffers;