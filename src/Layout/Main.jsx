import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/NavBar/Navbar";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <Outlet></Outlet>


            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;