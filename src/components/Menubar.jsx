import { NavLink } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import { FaSignInAlt } from 'react-icons/fa';
import { FaFileSignature } from "react-icons/fa6";
import 'react-awesome-button/dist/styles.css';


const Menubar = () => {
    const menu = <>
        <li className="flex">
            <NavLink to='/' rel="noopener noreferrer" className={({ isActive }) => !isActive ? 'flex items-center px-4 -mb-1 border-b-2' : 'flex items-center px-4 -mb-1 border-b-2 text-violet-600 border-violet-600'}>Home</NavLink>
        </li>
        <li className="flex">
            <NavLink to='/about' rel="noopener noreferrer" className={({ isActive }) => !isActive ? 'flex items-center px-4 -mb-1 border-b-2' : 'flex items-center px-4 -mb-1 border-b-2 text-violet-600 border-violet-600'} >About</NavLink>
        </li>
        <li className="flex">
            <NavLink to='/profile' rel="noopener noreferrer" className={({ isActive }) => !isActive ? 'flex items-center px-4 -mb-1 border-b-2' : 'flex items-center px-4 -mb-1 border-b-2 text-violet-600 border-violet-600'}>Profile</NavLink>
        </li>
    </>
    return (
        <header className="p-4 text-gray-100">



            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                </div>
                <div className="navbar bg-base-100">

                    <div className="navbar-center flex-1 hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 items-stretch space-x-3 lg:flex">
                            {menu}
                        </ul>
                    </div>
                    <div className="navbar-end gap-2">
                        <AwesomeButton type="primary" before={<FaSignInAlt/>}>Sign In</AwesomeButton>
                        <AwesomeButton type="twitter" before={<FaFileSignature/>}>Sign Up</AwesomeButton>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Menubar;