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
        console.log(photo)
        if(!patternPhotoURL.test(photo)){
            return setError ('Kindly Provide a Valid photo URL')
        }
         photoUpdate(photo)
        .then(result=>{
            console.log(result.user)
            setUser(result.user)            
        })
        .catch(error=>{
            console.error(error);
        })
    }
    const handleNameUpload = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        console.log(name)
        if(name.length > 17){
           return setError("Name should be under 17 character")
        }

        nameUpdate(name)
        .then(result=>{
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error=>{
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
            <div className="bg-meteor h-[600px] flex justify-center pt-14 ">
                <div className="flex flex-col items-center justify-center ">
                    <div className="w-[300px] h-[300px] border-[23px] relative border-[#AD974F33] rounded-full mb-[-140px] z-10">
                        <div className="absolute text-[30px] right-[35px] top-[25px]">
                            <button title="Change Photo" className="" onClick={() => document.getElementById('my_modal_1').showModal()}><FaPlusCircle></FaPlusCircle> </button>
                            {/* modal body */}
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
                                            {/* if there is a button in form, it will close the modal */}
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



                    <div className="bg-[#1d1d1d] h-[320px] w-[310px] rounded-lg z-0 pt-40 text-center space-y-4 relative">
                    <div className="absolute text-[25px] right-[35px] bottom-[105px] lg:bottom-[108px] z-50">
                            <button title="Change Name" className="" onClick={() => document.getElementById('my_modal_2').showModal()}> <CiEdit className="text-[#3F372A] font-bold"></CiEdit> </button>
                            {/* modal body */}
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
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn mt-6 bg-[#262626] text-white text-lg font-bold hover:bg-[#555350ee]">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                        <h1 className="text-lg font-medium text-white font-serif">{user.displayName}</h1>
                        <p className="font-medium text-[#96959571] font-serif z-50">{user.email}</p>
                        <div className=" text-[40px] flex justify-center gap-5">
                            <FaGoogle className="hover:bg-slate-400/50 rounded-full"></FaGoogle>
                            <FaGithub className="hover:bg-slate-400/50 rounded-full"></FaGithub>
                            <FaSquareXTwitter className="hover:bg-slate-400/50 rounded-[6px]"></FaSquareXTwitter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;