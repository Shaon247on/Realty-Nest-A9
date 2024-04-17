import { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

const Profile = () => {
    const { user, loading, photoUpdate, setUser, nameUpdate } = useContext(AuthContext)

    const [error, setError] = useState('')

    const handlePhotoUpload = (e) => {
        e.preventDefault()
        setError('')
        const patternPhotoURL = /\.(jpeg|jpg|gif|png|bmp)$/i
        const photo = e.target.photo.value
        if (!patternPhotoURL.test(photo)) {
            return setError('Kindly Provide a Valid photo URL')
        }
        photoUpdate(photo)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                window.location.reload()
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleNameUpload = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        console.log(name)
        if (name.length > 17) {
            return setError("Name should be under 17 character")
        }

        nameUpdate(name)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                window.location.reload()
            })
            .catch(error => {
                console.error(error);
            })
    }

    if (loading) {
        return <div className="w-full h-[600px] flex justify-center items-center bg-meteor">
            <span className="loading loading-infinity w-[140px] mx-auto text-[#8E793E]"></span>
        </div>
    }
    return (
        <div className="">
            <div className="bg-meteor h-[640px] flex justify-center pt-14 ">
                <div className="flex flex-col items-center justify-center ">
                    <div className="w-[300px] h-[300px] border-[23px] relative border-[#AD974F33] rounded-full mb-[-140px] z-10">
                        <div className="absolute text-[30px] right-[35px] top-[25px]">
                            <button title="Upload Photo" className="hover:bg-slate-400/90 duration-[400ms] ease-in-out rounded-full" onClick={() => document.getElementById('my_modal_1').showModal()}><FaPlusCircle></FaPlusCircle> </button>
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box bg-wave">
                                    <h3 className="font-bold text-3xl text-center text-white">Change Profile Photo</h3>
                                    <form onSubmit={handlePhotoUpload}>
                                        <div className="form-control mt-3">
                                            <label className="label">
                                                <span className="label-text font-semibold text-[18px] text-white">Photo URL</span>
                                            </label>
                                            <input
                                                name='photo'
                                                type="text"
                                                placeholder="your photo url"
                                                className="input input-bordered bg-gray-300"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-[18px] text-red-600">{error}</p>
                                        </div>
                                        <button className="btn mt-6 bg-[#262626] text-white text-lg font-bold hover:bg-[#575757ee]">Update</button>
                                    </form>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn mt-6 bg-[#262626] text-white text-lg font-bold hover:bg-[#555350ee]">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                        <div className=" border-[15px]  border-[#8E793E] rounded-full">
                            <img alt="" className="  w-[300px] h-[225px] rounded-full ring-2 ring-offset-4 dark:bg-[#8E793E] dark:ring-[#AD974F] dark:ring-offset-gray-100" src={user.photoURL} />
                        </div>
                    </div>



                    <div className="bg-[#1d1d1d] h-[350px] w-[310px] rounded-lg z-0 pt-40 text-center space-y-4 relative">
                        <div className="absolute text-[25px] right-[35px] bottom-[139px] lg:bottom-[139px] z-50">
                            <button title="Change Name" className="hover:bg-slate-400/50 duration-[400ms] ease-in-out rounded-full p-1" onClick={() => document.getElementById('my_modal_2').showModal()}> <CiEdit className="text-[#3F372A] font-bold"></CiEdit> </button>
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box bg-wave">
                                    <h3 className="font-bold text-3xl text-center text-white">Change Profile Name</h3>
                                    <form onSubmit={handleNameUpload} className="text-start">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-white font-semibold">Your Name</span>
                                            </label>
                                            <input
                                                name='name'
                                                type="text"
                                                placeholder="your updated name"
                                                className="input input-bordered"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-[18px] text-red-400">{error}</p>
                                        </div>
                                        <button className="btn bg-[#262626] mt-6 text-white text-lg font-bold">Update </button>
                                    </form>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            <button className="btn mt-6 bg-[#262626] text-white text-lg font-bold hover:bg-[#555350ee]">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                        <h1 className="text-lg font-medium text-white font-serif">{user.displayName}</h1>
                        <p className="font-medium text-[#96959571] font-serif z-50">{user.email}</p>
                        <p title={user.photoURL} className="cursor-pointer font-medium text-[#96959571] font-serif z-50">{user.photoURL.slice(0, 35)}...</p>
                        <div className=" text-[40px] flex justify-center gap-5">
                            <FaGoogle className="hover:bg-slate-400/50 duration-[400ms] ease-in-out rounded-full"></FaGoogle>
                            <FaGithub className="hover:bg-slate-400/50 duration-[400ms] ease-in-out rounded-full"></FaGithub>
                            <FaSquareXTwitter className="hover:bg-slate-400/50 duration-[400ms] ease-in-out rounded-[6px]"></FaSquareXTwitter>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1>User</h1>
                </div>
                <div>
                    <form>
                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-medium">Profile</p>
                                <p className="text-xs">Adipisci fuga autem eum!</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="username" className="text-sm">Username</label>
                                    <input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="website" className="text-sm">Website</label>
                                    <input id="website" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="bio" className="text-sm">Bio</label>
                                    <textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"></textarea>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="bio" className="text-sm">Photo</label>
                                    <div className="flex items-center space-x-2">
                                        <img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 dark:bg-gray-500 rounded-full dark:bg-gray-300" />
                                        <button type="button" className="px-4 py-2 border rounded-md dark:border-gray-800">Change</button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;