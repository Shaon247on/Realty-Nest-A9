import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="bg-animated p-20">
            <div className="h-screen  mx-auto bg-base-200 flex items-center gap-2 mt-[53px] rounded-xl overflow-hidden px-7 justify-between p-10">
                <div className=" shrink-0 w-1/2 h-[70vh] bg-base-100 px-8 ">
                    <form className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="your photo URL" className="input input-bordered" required />
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
                        <div className="form-control mt-6 ">
                            <button className="btn bg-[#262626] text-white text-lg font-bold">Register</button>
                        </div>
                    </form>
                </div>
                <div className="w-[2px] h-full bg-[#26262633]">

                </div>
                <div className="h-full flex items-center">
                    <img src="https://i.ibb.co/vBwjC9X/undraw-Join-re-w1lh.png" alt="" className="w-[500px]"/>
                </div>
            </div>
        </div>
    );
};

export default Register;