import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Switch from '../Switch/Switch'
import BlastText from '../BlastText/BlastText'
import './Projects.css'

const Projects = () => {

  const { theme } = useContext(GlobalContext)

  useEffect(() => {
  }, [theme])

  return (
    <div className={`projects ${theme}`}>
      <Switch />

      <div className="page">
        <div className="container home-page">
          <div className="text-zone">
            <BlastText text="projects" className="blast-root" />
          </div>
        </div>

        <div className='projectsContainer'>
          <div className='projectsLine'>
            <div className="projectItem" data-aos="zoom-in" data-aos-duration="2500">
              <h3>La Tienda Pe'</h3>
              <div>
                <a href="https://la-tienda-pe-andyrcr.vercel.app/" target='_blank' rel="noreferrer">
                  <video src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/tiendape_reduced.mp4" autoPlay loop muted />
                </a>
                <p>
                  First project in React, developed for the
                  final presentation of the React course
                  at Coderhouse.
                </p>
              </div>
              <p>
                Technologies used: React, Cloud
                Firestore, Material-UI, EmailJS
              </p>
            </div>

            <div className="projectItem" data-aos="zoom-in" data-aos-duration="2500" data-aos-delay="600">
              <h3>Foxbel Music Player</h3>
              <div>
                <a href="https://foxbel-music-player-andyrcr.vercel.app/" target='_blank' rel="noreferrer">
                  <video src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/foxbel_reduced.mp4" autoPlay loop muted />
                </a>
                <p>
                  Music player with responsive design,
                  made with the Deezer API.
                </p>
              </div>
              <p>
                Technologies used: React,
                Material-UI, Deezer API
              </p>
            </div>

            <div className="projectItem" data-aos="zoom-in" data-aos-duration="2500">
              <h3>Weather Admin Panel</h3>
              <div>
                <a href="https://weather-app-andyrcr.vercel.app/" target='_blank' rel="noreferrer">
                  <video src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/weatherapp_reduced.mp4" autoPlay loop muted />
                </a>
                <p>
                  Application that simulates an
                  administration panel for a
                  weather forecast page
                </p>
              </div>
              <p>
                Technologies used: React, Cloud
                Firestore, Styled-components,
                Ant Design
              </p>
            </div>
          </div>

          <div className='projectsLine'>
            <div className="projectItem" data-aos="zoom-in" data-aos-duration="2500" data-aos-delay="1000">
              <h3>Peko Cinema</h3>
              <div>
                <a href="https://peko-cinema-andyrcr.vercel.app/" target='_blank' rel="noreferrer">
                  <video src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/peko_reduced.mp4" autoPlay loop muted />
                </a>
                <p>
                  Web app that simulates the flow of
                  buying tickets and extras on the
                  Cineplanet page.
                </p>
              </div>
              <p>
                Technologies used: React, Material-UI,
                AWS S3, Cloud Firestore, EmailJS
              </p>
            </div>

            <div className="projectItem" data-aos="zoom-in" data-aos-duration="2500" data-aos-delay="1000">
              <h3>Untels Landing Page</h3>
              <div>
                <a href="https://untels-lp-andyrcr.vercel.app/" target='_blank' rel="noreferrer">
                  <video src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/untels_reduced.mp4" autoPlay loop muted />
                </a>
                <p>
                  Immersive Landing Page of my university
                  made with a blender model and as a
                  final project for one of my courses.
                </p>
              </div>
              <p>
                Technologies used: React, Three.js,
                AWS S3, Cloud Firestore,
                EmailJS, Blender, Autocad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects