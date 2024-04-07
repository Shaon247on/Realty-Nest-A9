import { Outlet } from "react-router-dom";
import Header from "../Elements/Header";
import Footer from "../Elements/Footer"
const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;