import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
// import './Fashion.css'
export default function VgamesNav() {
  return (
    <>
    
    
    
    <div className='container-fluid p-0'>
            <ul className="nav shadow-sm nav-last">
                <li className="nav-item li-nav">
                    <NavLink to='' className="nav-link text-dark fw-bolder  ancor" >Video Games</NavLink>
                </li>
                <li className="nav-item li-nav">
                    <NavLink to='BestSeller' className="nav-link text-dark ancor">Best Seller</NavLink>
                </li>
                
            </ul>
            <Outlet/>
        </div>
    
    
    </>
  )
}
