import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="bg-animated p-20">
            <div className="h-[70vh] mx-auto bg-base-200 flex items-center gap-2 mt-[53px] rounded-xl overflow-hidden px-7 justify-between p-5">
                <div className=" shrink-0 w-1/2 h-[70vh] bg-base-100 px-10">
                    <form className="card-body">
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
                                <p>New to the website, <Link to='/register' className="text-blue-500 underline">Register Now</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#262626] text-white text-lg font-bold">Login</button>
                        </div>
                    </form>
                </div>
                <div className="w-[2px] h-full bg-[#26262633]">

                </div>
                <div className="h-full">
                    <img src="https://i.ibb.co/Bww2zfy/undraw-Login-re-4vu2-1.png" alt="" className="w-[600px] h-[350px]" />
                </div>
            </div>
        </div>
    );
};

export default Login;