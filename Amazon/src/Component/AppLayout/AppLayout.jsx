import React from 'react'
import Navbar from '../Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import './AppLayout'
export default function AppLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}
