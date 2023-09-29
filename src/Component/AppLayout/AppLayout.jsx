import React from 'react'
import Navbar from '../Navbar/Navbar'
import {Outlet , useLocation } from 'react-router-dom'
import './AppLayout'
import FooterCom from '../footer/footer'
export default function AppLayout() {
  const location = useLocation();
  const unshow = location.pathname === '/login' || location.pathname === '/CreateAccount';
  return (
    <>
    <div>
    {!unshow && <Navbar />}
    <Outlet/>
    {!unshow  && <FooterCom />}
    </div>
    </>
  )
}
