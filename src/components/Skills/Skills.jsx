import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import './Skills.css'
import BlastText from '../BlastText/BlastText'
import Switch from '../Switch/Switch'
import Techs from '../Techs/Techs'

const Skills = () => {
    const { theme } = useContext(GlobalContext)

    useEffect(() => {
    }, [theme])

    return (
        <div className={`about ${theme}`} style={{overflowX: 'hidden'}}>
            <Switch />

            <div className='bugFix'></div>

            <div className="page">
                <div className="container home-page-2">
                    <div className="text-zone">
                        <BlastText text="skills" className="blast-root" />
                        <p className='aboutText' data-aos="fade-up" data-aos-duration="2500">
                            Since I started in the world of web programming 4 years ago I find
                            myself refining my skills.
                            <br /><br />
                            I had previous experience as a frontend with an Argentine
                            development team and as a programmer analyst for a technology
                            innovation company.
                            <br /><br />
                            I'm able to create web pages that are fast, efficient and intuitive,
                            adaptable to any device.
                            <br /><br />
                            Visit mi <a href='https://www.linkedin.com/in/andycanalesr/' target='_blank' rel="noreferrer"><span>LinkedIn</span></a> profile for more details or just <Link to={'/contact'}><span>contact me.</span></Link>
                        </p>
                    </div>
                </div>

                <div className='techsContainer'>
                    <Techs />
                </div>
            </div>
        </div>
    )
}

export default Skills