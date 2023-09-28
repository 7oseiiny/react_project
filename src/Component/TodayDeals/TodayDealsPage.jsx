import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

export default function TodayDealsPage() {
    return (

        <div className='container-fluid p-0'>
            <ul className="nav shadow-sm">
                <li className="nav-item">
                    <NavLink to='' className="nav-link text-dark fw-bolder" >Todays Deals</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='coupons' className="nav-link text-dark">Coupons</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}
