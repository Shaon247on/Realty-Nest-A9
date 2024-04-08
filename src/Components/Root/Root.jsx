import { Outlet } from "react-router-dom";
import Header from "../Elements/Header";
import Footer from "../Elements/Footer"
const Root = () => {
    return (
        <div className="">
            <Header className="mb-8"></Header>
            <Outlet className="max-w-6xl mx-auto mt-16"></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;