import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <section className="flex items-center h-full p-16 bg-gray-900 text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn&apos;t find this page.</p>
                    <p className="mt-4 mb-8 text-gray-400">But don&apos;t worry, you can find plenty of other things on our homepage.</p>
                    <Link to='/'><button className="btn w-56 bg-gradient-to-t from-[#8E793E] to-[#AD974F] border-0 hover:bg-gradient-to-t hover:from-[#55482b] hover:to-[#a89a6c] text-white px-10">Beck to Homepage</button></Link>
                </div>
            </div>
        </section>
    );
};

export default PageNotFound;