import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Layout from '../components/Layout'
import Principal from '../components/Principal/Principal'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'

const Rutas = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Principal/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Rutas