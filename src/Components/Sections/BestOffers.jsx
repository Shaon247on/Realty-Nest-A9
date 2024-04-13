import { useLoaderData } from 'react-router-dom'
const BestOffers = () => {


    const datas = useLoaderData()
    console.log(datas)
    const imageClasses = [
        'col-span-2',
        'col-span-2',
        'col-span-2',
        'col-span-2'
    ]
    return (
        <div className='h-[600px]'>
            <h1>Best offers this week</h1>
            <p>Unlock your dream home with our exclusive offer this week! Enjoy unbeatable discounts on property prices, making homeownership more affordable than ever.</p>
            <div className='grid grid-cols-4'>
                {
                    datas.slice(0,4).map((data, index) => <img
                        key={index}
                        src={data.img}
                        className={`object-cover ${imageClasses[index]} col-span-2`}


                    />
                    )
                }
            </div>
        </div>
    );
};

export default BestOffers;