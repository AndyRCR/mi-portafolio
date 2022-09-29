import React from 'react'
import { Outlet } from 'react-router-dom'
import CloseButton from './CloseButton/CloseButton'
import Loader from './Loader/Loader'
import Navbar from './Navbar/Navbar'

const Layout = () => {
  return (
    <div style={{height: '100vh'}}>
        <CloseButton/>
        <Loader/>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout