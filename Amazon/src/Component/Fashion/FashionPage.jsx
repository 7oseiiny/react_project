import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
export default function FashionPage() {
  return (
    <>
    
    
    
    <div className='container-fluid p-0'>
            <ul className="nav shadow-sm">
                <li className="nav-item">
                    <NavLink to='' className="nav-link text-dark fw-bolder" >Amazon Fashion</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='kids' className="nav-link text-dark">Kids & Baby</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='men' className="nav-link text-dark">Men</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    
    
    </>
  )
}
