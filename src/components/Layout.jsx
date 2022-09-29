import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalStateContext'
import CloseButton from './CloseButton/CloseButton'
import Loader from './Loader/Loader'
import Navbar from './Navbar/Navbar'

const Layout = () => {

  const { loaderState } = useContext(GlobalContext)

  return (
    <div style={{height: '100vh', overflowY: loaderState === 1 ? 'hidden' : 'visible'}}>
        <CloseButton/>
        <Loader/>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Layout