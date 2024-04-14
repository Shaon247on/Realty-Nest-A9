import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form"
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { registerAuth, profileUpdate, setUser } = useContext(AuthContext)
   

    const onSubmit = (data) => {
        const { name, email, photo, password } = data
        const patternPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        const patternPhotoURL = /\.(jpeg|jpg|gif|png|bmp)$/i
        setError('')
        setSuccess('')

        if (!patternPassword.test(password)) {
            return setError('Kindly provide at least a uppercase, a lowercase & 6 digits of password')
        }
        if(!patternPhotoURL.test(photo)){
            return setError ('Kindly Provide a Valid photo URL')
        }        
        registerAuth(email, password)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                const notify = () => toast.success('Account successfully registered');
                notify()
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
            .then(() => {
                 profileUpdate(name, photo);
            })            
    }
    return (
        <div className="bg-animated p-0 md:p-20 lg:p-20 pt-4 md:pt-[18px]">
            <Toaster
            position="top-right"
            reverseOrder={true}
            />
            <div className="text-center mt-[75px] lg:mt-[23px]">
                <p className="text-3xl md:text-5xl font-bold text-[#AD974F]">Register Now</p>
            </div>
            <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row h-[800px] md:h-[950px] lg:h-[600px] mx-auto bg-base-200 items-center gap-2 mt-[23px] rounded-none md:rounded-b-lg lg:rounded-xl overflow-hidden px-7 justify-end md:justify-end lg:justify-between p-0 md:p-5 lg:p-5">
                <div className=" shrink-0 lg:w-1/2 lg:h-[500px] bg-base-100 md:px-0 lg:px-10">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label w-80">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name='name'
                                type="text"
                                placeholder="your name"
                                className="input input-bordered"
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className="text-red-500 mt-2">This field is required</span>}
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
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-500 mt-2">This field is required</span>}
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
                                {...register("photo")}
                            />
                            {errors.photo && <span className="text-red-500 mt-2">This field is required</span>}

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
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className="text-red-500 mt-2">This field is required</span>}
                            <label className="label">
                                <p>Already have an account, <Link to='/login' className="text-blue-500 underline">Login Now</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#262626] text-white text-lg font-bold">Register </button>
                        </div>
                        <div className="mt-3">
                            {
                                error === "Firebase: Error (auth/email-already-in-use)." ? <p className="text-red-500">Your account is already registered</p> : <p className="text-red-500">{error}</p>

                            }
                            {
                                success && <p className="text-green-500">{success}</p>

                            }
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