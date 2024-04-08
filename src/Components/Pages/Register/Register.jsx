import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="bg-animated p-0 md:p-20 lg:p-20 pt-4 md:pt-[18px]">
            <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row  md:h-[900px] lg:h-[70vh] mx-auto bg-base-200 items-center gap-2 mt-[53px] rounded-none md:rounded-sm lg:rounded-xl overflow-hidden px-7 justify-center lg:justify-between p-0 md:p-5 lg:p-5">
                <div className=" shrink-0 w-1/2 h-[70vh] bg-base-100 md:px-0 lg:px-10">
                    <form className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p>Already have an account, <Link to='/login' className="text-blue-500 underline">Login Now</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#262626] text-white text-lg font-bold">Register </button>
                        </div>
                    </form>
                </div>
                <div className="w-[86%] lg:w-[2px] h-[2px] lg:h-full bg-[#26262633] mb-7 lg:mb-0">
                </div>
                <div className="lg:h-full">
                    <img src="https://i.ibb.co/vBwjC9X/undraw-Join-re-w1lh.png" alt="" className="w-[200px] md:w-[600px] h-[200px] md:h-[350px] lg:h-[350px]" />
                </div>
            </div>
        </div>
    );
};

export default Register;