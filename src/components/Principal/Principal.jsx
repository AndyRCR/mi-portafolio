import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalStateContext'
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Switch from '../Switch/Switch'
import BlastText from '../BlastText/BlastText'
import Scroll from '../Scroll/Scroll'
import ThreeSphere from '../ThreeSphere/ThreeSphere'
import Carousel from '../Carousel/Carousel'
import './Principal.css'

const Principal = () => {
  const { theme } = useContext(GlobalContext)

  useEffect(() => {
  }, [theme])

  return (
    <div className='rootContainer'>
      <Switch />
      <Fullpage>
        <FullPageSections>
          <FullpageSection>
            <div className={`principal ${theme}`}>
              <div className="page">
                <div className="container home-page-1">
                  <div className="text-zone">
                    <BlastText text="main" className="blast-root" />
                    <h2 data-aos="fade-up" data-aos-duration="2500">Full Stack Developer / Analyst Programmer</h2>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="2000" className='initialArrowContainer'>
                  <FontAwesomeIcon className='initialIcon' icon={faArrowDown}/>
                  <p>Let's start! Scroll down</p>
                  <FontAwesomeIcon className='initialIcon' icon={faArrowDown}/>
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
            </div>
          </FullpageSection>

          <FullpageSection>
            <div className={`about ${theme}`}>
              <div className='bugFix'></div>

              <div className="page">
                <div className="container home-page-2">
                  <div className="text-zone">
                    <BlastText text="about" className="blast-root" />
                    <p className='aboutText' data-aos="fade-up" data-aos-duration="2500">
                      I am a student soon to finish my degree in Systems Engineering, with a great
                      interest in the area of full-stack web development. I love to imagine things
                      and translate them into code, just ask me "How?" and I'll answer you "Let's start" 😉.
                      <br /><br />
                      <Link to={'/about'}><span>Know me better here.</span></Link>
                      <br /><br />
                      Among my main skills is the MERN stack (MySQL/MongoDB, Express, React and
                      Node), Three.js, Selenium, etc.
                      <br /><br />
                      <Link to={'/skills'}><span>See my techs stack here.</span></Link>
                    </p>
                  </div>
                </div>

                <div className='threeContainer'>
                  <ThreeSphere />
                </div>
              </div>

              <Scroll />
            </div>
          </FullpageSection>

          <FullpageSection>
            <div className={`projects ${theme}`}>
              <div className='bugFix'></div>

              <div className="page">
                <div className="container home-page-3">
                  <div className="text-zone">
                    <BlastText text="projects" className="blast-root" />
                    <p className='projectsText' data-aos="fade-up" data-aos-duration="2500">
                      Latest developed projects, see more about them
                      <Link to={'/projects'}><span> here.</span></Link>
                    </p>
                  </div>
                </div>

                <Carousel />
              </div>

              <Scroll />
            </div>
          </FullpageSection>

          <FullpageSection>
            <div className={`contact ${theme}`}>
              <div className="page">
                <div className="container home-page-4">
                  <div className="text-zone">
                    <BlastText text="contact" className="blast-root" />
                    <p className='contactText' data-aos="fade-up" data-aos-duration="2500">
                      I'm interested in both, freelance opportunities and job offers. However,
                      if you have any other requests or questions, feel free to use the form.
                    </p>
                  </div>
                </div>
                <form data-aos="fade-up" data-aos-duration="2500">
                  <div className='formLine'>
                    <input type="text" name='name' placeholder='Name' required />
                    <input type="email" name='email' placeholder='Email' required />
                  </div>
                  <div className='formLine'>
                    <input type="text" name='subject' placeholder='Subject' required />
                  </div>
                  <div className='formLine'>
                    <textarea name="message" placeholder='Message' required></textarea>
                  </div>
                  <div className='buttonContainer'>
                    <button type="submit">
                      Let's go!
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  )
}

export default Principal