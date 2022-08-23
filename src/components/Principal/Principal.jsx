import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Switch from '../Switch/Switch'
import './Principal.css'
import Blast from 'blast-vanilla'
import BlastText from '../BlastText/BlastText'
import Scroll from '../Scroll/Scroll'

const Principal = () => {
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
    <div className={`principal ${theme}`}>
      <Switch />

      <div className="page">
        <div className="container home-page">
          <div className="text-zone">
            <BlastText text="main" className="blast-root" />
            <h2 data-aos="fade-up" data-aos-duration="2500">Full Stack Developer / Analyst Programmer</h2>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2500" className='buttonContainer'>
          <button>
            Contact me
          </button>
        </div>
      </div>

      <div className='imageContainer' data-aos="fade-up" data-aos-duration="2500" data-aos-offset="-500">
        <img id='profileImage' src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/andy.png" alt="andy canales portfolio" />
        <div className='techsLogos'>
          <img id='mongodb' src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/mongo.png" alt="mongodb" />
          <img id='express' src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/express.png" alt="express" />
          <img id='react' src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/react.png" alt="react" />
          <img id='node' src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/node.png" alt="node" />
        </div>
      </div>

      <Scroll />
    </div>
  )
}

export default Principal