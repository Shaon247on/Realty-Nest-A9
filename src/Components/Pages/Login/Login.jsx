import { Link } from "react-router-dom";

const Login = () => {

    return (
        <div className="bg-animated p-0 md:p-20 lg:p-20 pt-[18px]">
            <div className="text-center mt-[10px] lg:mt-[23px]">
                <p className="text-3xl md:text-5xl font-bold text-[#AD974F]">Login Now</p>
            </div>
            <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row border-2 border-red-200 h-[600px] md:h-[900px] lg:h-[400px] mx-auto bg-base-200 items-center gap-2 mt-[23px] rounded-none md:rounded-xl lg:rounded-xl overflow-hidden px-7 justify-end md:justify-center lg:justify-between p-0 md:p-5 lg:p-5">
                <div className="shrink-0 w-[80%] md:w-3/4 lg:w-1/2  lg:h-[400px] bg-base-100 md:px-0 lg:px-10">
                    <form className="lg:p-7">
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
                <div className="w-[86%] lg:w-[2px] h-[2px] lg:h-full bg-[#26262633] mb-7 lg:mb-0">
                </div>
                <div className="lg:h-full">
                    <img src="https://i.ibb.co/Bww2zfy/undraw-Login-re-4vu2-1.png" alt="" className="w-[600px] h-[200px] md:h-[350px] lg:h-[350px]" />
                </div>
            </div>
        </div>
    );
};

export default Login;