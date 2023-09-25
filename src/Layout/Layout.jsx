import Header from "../Home/Header";
import {Outlet} from 'react-router-dom'
const Layout = () => {
    return (
        <div>
            
            <div className="container left-9 fixed"><Header></Header></div>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;