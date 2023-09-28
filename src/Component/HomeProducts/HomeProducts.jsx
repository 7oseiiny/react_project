import React from 'react'
import { Outlet , NavLink } from 'react-router-dom'

export default function HomeProducts() {
  return (
    <div className='container-fluid p-0'>
            <ul className="nav shadow-sm">
                <li className="nav-item">
                    <NavLink to='' className="nav-link text-dark fw-bolder" >Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='Decor' className="nav-link text-dark">Home Decor</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
  )
}
