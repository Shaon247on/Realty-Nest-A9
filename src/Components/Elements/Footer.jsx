import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

// React Icon input
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="footer justify-around p-10 bg-[#231F20] text-neutral-content text-[14px] ">
                <nav>
                    <Link to='/'><button className="btn btn-ghost text-lg md:text-2xl font-bold pl-0">Realty <span className="text-[#AD974F]">Nest</span></button></Link>
                    <p className="w-[200px]">Realty Nest is a premier real estate firm dedicated to delivering exceptional.....</p>
                    <Link to='/contact-us'><button className="flex items-center gap-2 hover:text-[#AD974F] duration-[400ms]">Read More <IoIosArrowForward></IoIosArrowForward></button>
                    </Link>
                </nav>
                <nav >
                    <h6 className="footer-title">Company</h6>
                    <Link to='/contact-us' className="hover:text-[#AD974F] duration-[400ms]">Contact Us</Link>
                    <Link className="hover:text-[#AD974F] duration-[400ms]">Properties</Link>
                    <Link to='/blogs' className="hover:text-[#AD974F] duration-[400ms]">Blogs</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">Newsletter Subscribe</h6>
                    <form className="flex items-center gap-4">
                        <div>
                            <input type="email" className="bg-[#231F20] border h-[45px] md:w-[180px] lg:w-[250px] rounded-sm pl-4" placeholder="your email" />
                        </div>
                        <input type="submit" className="btn w-24 md:w-24 rounded-sm lg:w-36 bg-gradient-to-t from-[#8E793E] to-[#AD974F] border-0 hover:bg-gradient-to-t hover:from-[#55482b] hover:to-[#a89a6c] text-white px-2 lg:px-10" />
                    </form>
                    <div>
                        <h1>Don&apos;t forget to follow us on: </h1>
                        <div className="flex items-center gap-4 mt-5">
                            <FaFacebookF className="hover:text-[#AD974F] duration-[400ms]"></FaFacebookF>
                            <FaInstagram className="hover:text-[#AD974F] duration-[400ms]"></FaInstagram>
                            <FaTwitter className="hover:text-[#AD974F] duration-[400ms]"></FaTwitter>
                            <FaLinkedin className="hover:text-[#AD974F] duration-[400ms]"></FaLinkedin>
                        </div>
                    </div>
                </nav>
            </footer>
            <div>
                <div className="footer px-10 py-4 border-t bg-gray-400 text-base-content border-base-300">
                    <aside className="items-center grid-flow-col">
                        <img src="https://i.ibb.co/ys3tmH4/Untitled-design.png" alt=""  className="w-[50px] h-[50px]"/>
                        <p>Realty Nest<br />Providing reliable tech since 2012</p>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-[#AD974F] duration-[400ms]"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-[#AD974F] duration-[400ms]"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:text-[#AD974F] duration-[400ms]"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Footer;