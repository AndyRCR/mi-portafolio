import React, { useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { GlobalContext } from '../../context/GlobalStateContext'
import AOS from 'aos';
import './Navbar.css'

const Navbar = () => {

  const {theme} = useContext(GlobalContext)

  useEffect(() => {
    AOS.init()
  }, [theme])

  return (
    <div
    className={`navbar ${theme}`}
    data-aos="fade-right"
    data-aos-duration="1500">
        <div className='navbarLogo'>
          <Link to={'/'}>
            <div className='navbarImage'>
            </div>
          </Link>
          <div className='navbarTitle'>
            Web Developer
          </div>
        </div>

        <div className='navbarMenu'>
          <ul>
            <NavLink className='navLink' to={'/about'}>
              <li>About me</li>
            </NavLink>
            <NavLink className='navLink' to={'/skills'}>
              <li>Skills</li>
            </NavLink>
            <NavLink className='navLink' to={'/projects'}>
              <li>Projects</li>
            </NavLink>
            <NavLink className='navLink' to={'/contact'}>
              <li>Contact</li>
            </NavLink>
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