import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import './Skills.css'
import Blast from 'blast-vanilla'
import BlastText from '../BlastText/BlastText'
import Switch from '../Switch/Switch'
import Scroll from '../Scroll/Scroll'
import Techs from '../Techs/Techs'

const Skills = () => {
    const { theme } = useContext(GlobalContext)

    useEffect(() => {
        new Blast('.blast-root', {
          returnGenerated: true,
          delimiter: 'character',
          search: false,
          customClass: '',
          aria: true,
          debug: false,
          name: 'blast'
        })
      }, [theme])

  return (
    <div className={`about ${theme}`}>
        <Switch/>

        <div className='bugFix'></div>

        <div className="page">
            <div className="container home-page">
            <div className="text-zone">
                <BlastText text="skills" className="blast-root" />
                <p className='aboutText' data-aos="fade-up" data-aos-duration="2500">
                    Since I started in the world of web programming 4 years ago I find
                    myself refining my skills.
                    <br/><br/>
                    I had previous experience as a frontend with an Argentine
                    development team and as a programmer analyst for a technology
                    innovation company.
                    <br/><br/>
                    I am able to create web pages that are fast, efficient and intuitive,
                    adaptable to any device.
                    <br/><br/>
                    Visit mi <a href='https://www.linkedin.com/in/andycanalesr/' target='_blank' rel="noreferrer"><span>LinkedIn</span></a> profile for more details or just <Link to={'/contact'}><span>contact me.</span></Link>
                </p>
            </div>
            </div>

            <div className='techsContainer'>
                <Techs/>
            </div>
        </div>

        <Scroll/>
    </div>
  )
}

export default Skills