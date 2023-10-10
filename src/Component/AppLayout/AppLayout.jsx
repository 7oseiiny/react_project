import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import {Outlet , useLocation } from 'react-router-dom'
import './AppLayout'
import FooterCom from '../footer/footer'
import { useSelector } from "react-redux";
export default function AppLayout() {
  const location = useLocation();
  const unshow = location.pathname === '/login' || location.pathname === '/CreateAccount' || location.pathname === '/order';
let language = useSelector((state) => state.language.language);
  return (
    <div dir={(language=='en'?'ltr':'rtl')}>
    {!unshow && <Navbar  />}
    <Outlet/>
    {!unshow  && <FooterCom />}
    </div>
  )
}
