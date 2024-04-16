import { Link, useLoaderData } from 'react-router-dom'
import moment from 'moment';
import { useState } from 'react';

const Blogs = () => {

    const data = useLoaderData()
    console.log(data)
    const [viewMore, setViewMore] = useState(6)
    const handleViewMore = () => {
        setViewMore(data.length)
    }

    return (
        <section className="bg-base text-gray-100 pt-[74px]">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <Link rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-[#231F20e6]">
                    <img src={data[4].sub_img} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{data[4].estate_title}</h3>
                        <span className="text-xs text-gray-400">{moment(data[4].last_update_date).format('MMMM Do, YYYY')}</span>
                        <p>{data[4].description}</p>
                    </div>
                </Link>
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        data.slice(0, viewMore).map(prop => <>
                            <Link to={`/${prop.id}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-[#231F20b3]">
                                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500" src={prop.sub2_img} />
                                <div className="p-6 space-y-2">
                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{prop.estate_title}</h3>
                                    <span className="text-xs text-gray-400">{moment(prop.last_update_date).format('MMMM Do, YYYY')}</span>
                                    <p>{prop.description.slice(0, 200)}.</p>
                                </div>
                            </Link>
                        </>)
                    }
                </div>
                {
                    viewMore > 6 ? <span></span> :
                        <div className="flex justify-center">
                            <button onClick={handleViewMore} type="button" className="btn bg-gradient-to-t from-[#8E793E] to-[#AD974F] border-0 hover:bg-gradient-to-t  hover:from-[#725f3a] hover:to-[#ac9b65] text-white">Load more posts...</button>
                        </div>
                }
            </div>
        </section>
    );
};

export default Blogs;