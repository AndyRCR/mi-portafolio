import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'

const Layout = () => {
  return (
    <div style={{height: '100vh'}}>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout