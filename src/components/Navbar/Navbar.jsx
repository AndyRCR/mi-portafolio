import React, { useContext, useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { GlobalContext } from '../../context/GlobalStateContext'
import AOS from 'aos';
import './Navbar.css'

const Navbar = () => {

  const { theme, activeNavbar, setActiveNavbar, emptyFields, setLoaderState, setChange, change } = useContext(GlobalContext)

  const navigate = useNavigate()

  useEffect(() => {
    AOS.init()
  }, [theme, activeNavbar])

  return (
    <div
      className={`${!activeNavbar ? 'navbar' : 'navbar activeNavbar'} ${theme}`}
      data-aos="fade-right"
      data-aos-delay="1500">
      <div className='navbarLogo'>
        <div
        className='navbarImage'
        onClick={() => {
          setChange(!change)
          setLoaderState(0)
          setTimeout(()=>navigate('/'), 500)
          setActiveNavbar(false)
          emptyFields()
        }}>
        </div>
        <div className='navbarTitle'>
          Web Developer
        </div>
      </div>

      <div className='navbarMenu'>
        <ul>
          <li onClick={() => {
            setChange(!change)
            setLoaderState(0)
            setTimeout(()=>navigate('/about'), 500)
            setActiveNavbar(false)
            emptyFields()
          }}>
            About me
          </li>
          <li onClick={() => {
            setChange(!change)
            setLoaderState(0)
            setTimeout(()=>navigate('/skills'), 500)
            setActiveNavbar(false)
            emptyFields()
          }}>
            Skills
          </li>
          <li onClick={() => {
            setChange(!change)
            setLoaderState(0)
            setTimeout(()=>navigate('/projects'), 500)
            setActiveNavbar(false)
            emptyFields()
          }}>
            Projects
          </li>
          <li onClick={() => {
            setChange(!change)
            setLoaderState(0)
            setTimeout(()=>navigate('/contact'), 500)
            setActiveNavbar(false)
            emptyFields()
          }}>
            Contact
          </li>
        </ul>
      </div>

      <div className='navbarSocial'>
        <a href='https://www.linkedin.com/in/andycanalesr/' target='_blank' rel="noreferrer">
          <FontAwesomeIcon className='navbarIcon' icon={faLinkedin} />
        </a>
        <a href="https://github.com/AndyRCR" target='_blank' rel="noreferrer">
          <FontAwesomeIcon className='navbarIcon' icon={faGithub} />
        </a>
        <a href="https://twitter.com/RubenCanalesR" target='_blank' rel="noreferrer">
          <FontAwesomeIcon className='navbarIcon' icon={faTwitter} />
        </a>
      </div>
    </div>
  )
}

export default Navbar