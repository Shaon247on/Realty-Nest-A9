import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="">
            <div className="bg-meteor h-[600px] flex justify-center pt-14">
                <div className="flex flex-col items-center justify-center ">
                    <div className="w-[300px] h-[300px] border-[23px]  border-[#AD974F33] rounded-full mb-[-140px] z-10">
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
            <div className=" text-center mx-28">
                <h1>User Details</h1>
            </div>
        </div>
    );
};

export default Profile;