import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Register = () => {

    const {registerAuth, updateProfile} = useContext(AuthContext)
    
    const handleRegister= (e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, photo, email, password)
        registerAuth(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error);
        })
        updateProfile(name, photo)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error);
        })
    }


    return (
        <div className="bg-animated p-0 md:p-20 lg:p-20 pt-4 md:pt-[18px]">
            <div className="text-center mt-[75px] lg:mt-[23px]">
                <p className="text-3xl md:text-5xl font-bold text-[#AD974F]">Register Now</p>
            </div>
            <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row h-[800px] md:h-[950px] lg:h-[600px] mx-auto bg-base-200 items-center gap-2 mt-[23px] rounded-none md:rounded-b-lg lg:rounded-xl overflow-hidden px-7 justify-end md:justify-end lg:justify-between p-0 md:p-5 lg:p-5">
                <div className=" shrink-0 lg:w-1/2 lg:h-[500px] bg-base-100 md:px-0 lg:px-10">
                    <form onSubmit={handleRegister} className="">
                        <div className="form-control">
                            <label className="label w-80">
                                <span className="label-text">Name</span>
                            </label>
                            <input 
                            name='name'
                            type="text" 
                            placeholder="your name" 
                            className="input input-bordered" 
                            required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input 
                            name='photo'
                            type="text" 
                            placeholder="your photo url" 
                            className="input input-bordered" 
                            required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                            name='email'
                            type="email" 
                            placeholder="email" 
                            className="input input-bordered" 
                            required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                            name='password'
                            type="password" 
                            placeholder="password" 
                            className="input input-bordered" 
                            required />
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
                <div className="lg:h-[400px] ">
                    <img src="https://i.ibb.co/vBwjC9X/undraw-Join-re-w1lh.png" alt="" className="w-[200px] md:w-[400px] lg:w-[600px] h-[200px] md:h-[350px] lg:h-[450px] my-auto" />
                </div>
            </div>
        </div>
    );
};

export default Register;