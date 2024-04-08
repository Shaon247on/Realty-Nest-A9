import { NavLink } from "react-router-dom";

const Header = () => {
    const navLink = <>
        <li> <NavLink to='/'>Home</NavLink> </li>
        <li> <NavLink to='/login'>Login</NavLink> </li>
        <li> <NavLink to='/register'>Register</NavLink> </li>

    </>
    return (
        <div className="flex justify-between w-full fixed bg-[#262626] text-white px-20 py-3 items-center z-50 shadow-sm opacity-85">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-2xl font-bold">Realty <span className="text-[#AD974F]">Nest</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div>
                <button className="btn bg-gradient-to-t from-[#8E793E] to-[#AD974F] border-0 hover:bg-gradient-to-t hover:from-[#55482b] hover:to-[#a89a6c] text-white px-10">Login</button>
            </div>
        </div>
    );
};

export default Header;