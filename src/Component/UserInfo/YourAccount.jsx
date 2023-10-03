import React from 'react'

import { Link, Outlet } from "react-router-dom";

import './userInfo.css';
export default function YourAccount() {


    return (
        <>
            <div className='container-fluid p-0'>
                <ul className="nav shadow-sm nav-last">
                    <li className="nav-item li-nav">
                        {/* <NavLink to='kids' className="nav-link text-dark ancor">Kids & Baby</NavLink> */}
                    </li>
                </ul>



                <Outlet />
            </div>


        </>
    )
}


