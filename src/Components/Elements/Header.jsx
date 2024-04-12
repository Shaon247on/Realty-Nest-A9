import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
    const navLink = <>
        <li> <NavLink to='/'>Home</NavLink> </li>
        <li> <NavLink to='/login'>Login</NavLink> </li>
        <li> <NavLink to='/register'>Register</NavLink> </li>
    </>

    const { logOut, user } = useContext(AuthContext)
    console.log(user)
    
    const [userData, setUserData] = useState('')
    useEffect( ()=>{
        setUserData(user)
    },[user])
    

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log('user log out', result)
            })
            .catch(error => {
                console.error(error);
            })

    }

    return (
        <div className="flex justify-between w-full fixed bg-[#262626] text-white px-2 lg:px-20 py-3 items-center z-50 shadow-sm opacity-85">
            <div className="flex items-center">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-lg md:text-2xl font-bold">Realty <span className="text-[#AD974F]">Nest</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <div>
                    {
                        user ? <>
                            <details className="dropdown dropdown-end">
                                <summary ><img title={userData?.displayName} src={userData?.photoURL} alt="" className="avatar object-cover w-[44px] h-[44px] rounded-full" /></summary>
                                <div className="p-2 shadow menu text-black dropdown-content z-[1] bg-gradient-to-t from-[#8E793E] to-[#AD974F] opacity-100 rounded-box w-[250px] md:w-[500px]">
                                    {/* profile details */}
                                    <div className="p-4 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800 w-[210px] md:w-[400px]">
                                        <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                                            <img src={userData?.photoURL} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <div>
                                                <h2 className="text-lg lg:text-2xl font-semibold">{userData?.displayName}</h2>
                                                <span className="text-sm dark:text-gray-600"></span>
                                            </div>
                                            <span className="flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                                    <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                                </svg>
                                                <span className="dark:text-gray-600 text-base md:text-lg font-medium">{user.email}</span>
                                            </span>
                                            <div className="space-y-1">

                                                <span className="flex items-center space-x-2">
                                                    <Link to='/profile' href="#" role="button" className="inline-block rounded-full bg-zinc-500 text-black  shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] hover:bg-zinc-600 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-zinc-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] active:bg-zinc-700 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] px-6 pb-2 pt-2.5 text-xs font-extrabold uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0">Update Profile</Link></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </details>
                        </> :
                            <><samp></samp></>
                    }
                </div>
                <div>
                    {
                        user ? <>
                            <button onClick={handleSignOut} className="btn w-16 md:w-32 lg:w-36 bg-gradient-to-t from-[#8E793E] to-[#AD974F] border-0 hover:bg-gradient-to-t hover:from-[#55482b] hover:to-[#a89a6c] text-white px-10"><Link to='/login'>Sign Out</Link></button>

                        </> :
                            <button className="btn bg-gradient-to-t from-[#8E793E] to-[#AD974F] border-0 hover:bg-gradient-to-t hover:from-[#55482b] hover:to-[#a89a6c] text-white px-10"> <Link to='/login'>Login</Link> </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;