import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import {Outlet, useLocation} from 'react-router-dom'
import './AppLayout'
import FooterCom from '../footer/footer'
export default function AppLayout() {

  
  useEffect(()=>{},[useLocation()])
  return (
    <>
    <div style={{display:`${window.location.pathname.includes('order')?'none':'block'}`}}><Navbar/></div>
    <Outlet/>
    <div style={{display:`${window.location.pathname.includes('order')?'none':'block'}`}}><FooterCom /></div>
    
    </>
  )
}
