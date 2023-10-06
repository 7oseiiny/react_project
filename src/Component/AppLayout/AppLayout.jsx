import React from 'react'
import Navbar from '../Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import './AppLayout'
import FooterCom from '../footer/footer'
import { useSelector } from "react-redux";
export default function AppLayout() {
let language = useSelector((state) => state.language.language);

  return (
    <div dir={(language=='en'?'ltr':'rtl')}>
    <Navbar/>
    <Outlet/>
    <FooterCom />
    </div>
  )
}
