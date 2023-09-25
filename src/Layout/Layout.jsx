import Header from "../Home/Header";
import {Outlet} from 'react-router-dom'
const Layout = () => {
    return (
        <div>
            
            <div className="container mx-auto left-9"><Header></Header></div>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;