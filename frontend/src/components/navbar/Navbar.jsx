import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {plusRound} from 'react-icons-kit/ionicons/plusRound'
import { navicon } from 'react-icons-kit/fa/navicon'
import {ic_close} from 'react-icons-kit/md/ic_close'
import Icon from "react-icons-kit";
import { authContext } from "../context/authContext/AuthContext";


const Navbar = () => {
    const hovertext = 'hover:bg-black hover:text-white rounded-md font-medium transition-all ease-in-out duration-300';

    const [isExpanded, setIsExpanded] = useState(false);
    const { logoutUserAction, token } = useContext(authContext);

    const handletoggleButton = () => {
        setIsExpanded(!isExpanded);
    }

    const handleLogoutButton = () => {
        logoutUserAction();
    }


    return <div className="flex justify-center">
        <nav className="py-2.5 w-11/12 flex flex-row justify-evenly items-center shadow-md fixed bg-white/90 border border-black/25 mt-3 rounded-full z-10 backdrop-blur-sm text-base">

            {/* WEBSITE VIEW */}
            <div className="px-5 lg:px-0 flex items-center w-4/5 transition-all duration-100">
                <NavLink to='/' className={({ isActive }) =>
              isActive ? "rounded-full w-12 border-4 border-black" : "rounded-full w-12 border-2 border-black hover:border-4"
            }>
                    <img src="https://i.pinimg.com/564x/29/41/c6/2941c655abb63d0571595b655c682863.jpg" alt="Logo" className="rounded-full"/>
                </NavLink>

                <ul className={`items-center justify-evenly w-1/3 lg:flex hidden lg:px-0`}>
                    <li>
                        <NavLink className={`p-1 px-2 transition-colors  ${hovertext}`} to='/'>Home</NavLink>
                    </li>
                    {token &&  <> 
                    <li>
                        <NavLink className={`p-1 px-2 transition-colors  ${hovertext}`} to='/accounts'>Accounts</NavLink>
                    </li>
                    <li>
                        <NavLink className={`p-1 px-2 transition-colors  ${hovertext}`} to='/dashboard'>Dashboard</NavLink>
                        </li>
                    </>}
                    {!token && <>
                        <li>
                            <NavLink className={`p-1 px-2 transition-colors  ${hovertext}`} to='/login'>Login</NavLink>
                        </li>
                        <li>
                            <NavLink className={`p-1 px-2 transition-colors  ${hovertext}`} to='/register'>Register</NavLink>
                        </li>
                    </>}
                </ul>

                {token && <button className="hover:bg-indigo-500 p-1 px-2 rounded-md transition-colors hover:text-white font-medium hover:ripple-bg-indigo-300 lg:flex hidden" onClick={handleLogoutButton}>Logout</button>}
            </div>

            <div className=" flex items-center">
                {/* COMMON */}
                <Link className="text-center bg-indigo-500 py-2 rounded-md  font-mediums hover:ripple-bg-indigo-300 lg:px-3 px-1 pr-2 text-white lg:text-base text-base font-medium capitalize whitespace-nowrap" to={`${token ? '/dashboard/accounts/create' :'/login'}`}>
                    <Icon icon={plusRound} size={25} className="pr-1 pb-0"></Icon>
                    account
                </Link>

                {/* MOBILE VIEW */}
                <div className="lg:hidden text-white px-5 cursor-pointer">
                    <button onClick={handletoggleButton}>
                        {!isExpanded ?
                            <Icon icon={navicon} size={28} className="text-black"></Icon>
                            :
                            <Icon icon={ic_close} size={28} className="bg-black rounded-full"></Icon>
                        }
                    </button>
                    <aside className={`${isExpanded? '-translate-x-0 ease-out duration-500' : 'translate-x-full'} transition-transform w-full top-20 left-0 absolute duration-200 ease-in`}>
                    {isExpanded && 
                        <div className={`absoulte z-20 left-0 top-0 w-full bg-black/60 flex flex-row p-5 px-6 backdrop-blur-md rounded-xl`}>
                            <ul className={`flex flex-col items-end justify-between w-full h-36`}>
                                <li>
                                    <NavLink className={`p-1 px-2 transition-colors  ${hovertext}`} to='/'>Home</NavLink>
                                </li>
                                {token && <>
                                    <li>
                                    <NavLink className={`p-1 px-2 transition-colors  ${hovertext}`} to='/accounts'>Accounts</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={`p-1 px-2 transition-colors  ${hovertext}`} to='/dashboard'>Dashboard</NavLink>
                                    </li>
                                </>}
                                {!token && <>
                                    <li>
                                        <NavLink className={`p-1 px-2 transition-colors  ${hovertext}`} to='/login'>Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={`p-1 px-2 transition-colors  ${hovertext}`} to='/register'>Register</NavLink>
                                    </li>
                                </>}
                            </ul>
                        </div>
                    }
                    </aside>
                </div>

            </div>
        </nav>
    </div>;
};

export default Navbar;
