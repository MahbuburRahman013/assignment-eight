import {NavLink} from 'react-router-dom'
const Header = () => {
    return (
        <div className='flex flex-col md:flex-row py-5 gap-y-5 md:gap-y-0 justify-between items-center'>
           
           
           <div><img className='w-40' src="https://i.ibb.co/2dbzKdx/Logo.png" alt="" /></div>
           
           <div className='flex justify-center items-center gap-x-8'>
           <NavLink
               to="/"
               className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "underline text-red-400" : ""
               }
             >
               Home
          </NavLink>

          <NavLink
               to="/Donation"
               className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "underline text-red-400" : ""
               }
             >
               Donation
          </NavLink>

          <NavLink
               to="/Statistics"
               className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "underline text-red-400" : ""
               }
             >
               Statistics
          </NavLink>
           </div>
           

        </div>
    );
};

export default Header;