import React from 'react'
import Navbar from '../Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import './AppLayout'
import FooterCom from '../footer/footer'
export default function AppLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <FooterCom />
    </>
  )
}
