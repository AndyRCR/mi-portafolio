import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import Scroll from '../Scroll/Scroll'
import Switch from '../Switch/Switch'
import Blast from 'blast-vanilla'
import BlastText from '../BlastText/BlastText'
import './About.css'
import ThreeSphere from '../ThreeSphere/ThreeSphere'

const About = () => {
  const { theme } = useContext(GlobalContext)

  useEffect(() => {
    return () => {
      new Blast('.blast-root', {
        returnGenerated: true,
        delimiter: 'character',
        search: false,
        customClass: '',
        aria: true,
        debug: false,
        name: 'blast'
      })
    }
  }, [theme])

  return (
    <div className={`about ${theme}`}>
      <Switch/>

      <div className='bugFix'></div>

      <div className="page">
        <div className="container home-page">
          <div className="text-zone">
            <BlastText text="about" className="blast-root" />
            <p className='aboutText' data-aos="fade-up" data-aos-duration="2500">
              I'm a full-stack developer located in Peru. I'm passionate about
              programming and impressing with amazing, intuitive and efficient
              web pages.
              <br/><br/>
              I consider myself a very enthusiastic and resilient person, always
              willing to face new challenges and projects. I also love to travel and
              produce music, and my dream is to be able to live programming in
              conjunction with these activities.
              <br/><br/>
              I am more involved in frontend development but in the same way I
              can deal with and adapt to any technology related to the web.
              <br/><br/>
              Just ask me "How?" and I'll answer you "Let's start"
              <br/><br/>
              <Link to={'/contact'}><span>Let's start!</span></Link>
            </p>
          </div>
        </div>

        <div className='threeContainer'>
          <ThreeSphere/>
        </div>
      </div>

      <Scroll/>
    </div>
  )
}

export default About