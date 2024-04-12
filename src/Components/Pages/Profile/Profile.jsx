import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";

const Profile = () => {
    const { user, loading, photoUpdate, setUser } = useContext(AuthContext)


    const handlePhotoUpload = (e) => {
        e.preventDefault()
        const photo = e.target.photo.value
        console.log(photo)
         photoUpdate(photo)
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
                            <button className="" onClick={() => document.getElementById('my_modal_1').showModal()}><FaPlusCircle></FaPlusCircle> </button>
                            {/* modal body */}
                            <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-3xl text-center">Change Profile Photo</h3>
                                    <form onSubmit={handlePhotoUpload}>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Photo URL</span>
                                            </label>
                                            <input
                                                name='photo'
                                                type="text"
                                                placeholder="your photo url"
                                                className="input input-bordered"
                                            />
                                        </div>
                                        <button className="btn bg-[#262626] text-white text-lg font-bold">Register </button>
                                    </form>
                                    <div className="modal-action">
                                        <form method="dialog">
                                            {/* if there is a button in form, it will close the modal */}
                                            <button className="btn">Close</button>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
                        </div>
                        <div className=" border-[15px]  border-[#8E793E] rounded-full">
                            <img alt="" className="  w-[300px] h-[225px] rounded-full ring-2 ring-offset-4 dark:bg-[#8E793E] dark:ring-[#AD974F] dark:ring-offset-gray-100" src={user.photoURL} />
                        </div>
                    </div>
                    <div className="bg-[#1d1d1d] h-[300px] w-[310px] rounded-lg z-0 pt-40 text-center space-y-4">
                        <h1 className="text-lg font-medium text-white font-serif">{user.displayName}</h1>
                        <p className="font-medium text-[#96959571] font-serif">{user.email}</p>
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