import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import './Techs.css'

/**
 * Techs
 */

import html from '../../assets/icons/techs/html.png'
import css from '../../assets/icons/techs/css.png'
import js from '../../assets/icons/techs/js.png'
import react from '../../assets/icons/techs/react.png'
import three from '../../assets/icons/techs/three.png'

import java from '../../assets/icons/techs/java.png'
import node from '../../assets/icons/techs/node.png'
import mongo from '../../assets/icons/techs/mongo.png'
import mysql from '../../assets/icons/techs/mysql.png'
import express from '../../assets/icons/techs/express.png'

import aws from '../../assets/icons/techs/aws.png'
import firebase from '../../assets/icons/techs/firebase.png'
import git from '../../assets/icons/techs/git.png'
import postman from '../../assets/icons/techs/postman.png'
import figma from '../../assets/icons/techs/figma.png'
import adobexd from '../../assets/icons/techs/adobexd.png'
import photoshop from '../../assets/icons/techs/photoshop.png'
import vegas from '../../assets/icons/techs/vegas.png'
import gds from '../../assets/icons/techs/gds.png'
import excel from '../../assets/icons/techs/excel.png'

const Techs = () => {
    const { theme } = useContext(GlobalContext)

    useEffect(() => {
    }, [theme])

    return (
        <div className={`techs ${theme}`}>
            <div>
                <h3>Frontend</h3>
                <div className='frontend'>
                    <div className='techItem'>
                        <img src={html} alt="html" />
                        <p>HTML5</p>
                    </div>
                    <div className='techItem'>
                        <img src={css} alt="css" />
                        <p>CSS3</p>
                    </div>
                    <div className='techItem'>
                        <img src={js} alt="js" />
                        <p>JavaScript</p>
                    </div>
                    <div className='techItem'>
                        <img src={react} alt="react" />
                        <p>React</p>
                    </div>
                    <div className='techItem'>
                        <img src={three} alt="three" />
                        <p>Three.js</p>
                    </div>
                </div>
            </div>

            <div>
                <h3>Backend</h3>
                <div className='backend'>
                    <div className="techItem">
                        <img src={java} alt="Java" />
                        <p>Java</p>
                    </div>
                    <div className="techItem">
                        <img src={node} alt="Node" />
                        <p>Node</p>
                    </div>
                    <div className="techItem">
                        <img src={mongo} alt="MongoDB" />
                        <p>MongoDB</p>
                    </div>
                    <div className="techItem">
                        <img src={mysql} alt="MySQL" />
                        <p>MySQL</p>
                    </div>
                    <div className="techItem">
                        <img src={express} alt="Express" />
                        <p>Express</p>
                    </div>
                </div>
            </div>

            <div>
                <h3>Extra</h3>
                <div className='extra'>
                    <div className="techItem">
                        <img src={aws} alt="AWS" />
                        <p>AWS</p>
                    </div>
                    <div className="techItem">
                        <img src={firebase} alt="Firebase" />
                        <p>Firebase</p>
                    </div>
                    <div className="techItem">
                        <img src={git} alt="Git" />
                        <p>Git</p>
                    </div>
                    <div className="techItem">
                        <img src={postman} alt="Postman" />
                        <p>Postman</p>
                    </div>
                    <div className="techItem">
                        <img src={figma} alt="Figma" />
                        <p>Figma</p>
                    </div>
                    <div className="techItem">
                        <img src={adobexd} alt="Adobe XD" />
                        <p>Adobe XD</p>
                    </div>
                    <div className="techItem">
                        <img src={photoshop} alt="Photoshop" />
                        <p>Photoshop</p>
                    </div>
                    <div className="techItem">
                        <img src={vegas} alt="Vegas Pro" />
                        <p>Vegas Pro</p>
                    </div>
                    <div className="techItem">
                        <img src={gds} alt="Google Data Studio" />
                        <p>Google Data<br />Studio</p>
                    </div>
                    <div className="techItem">
                        <img src={excel} alt="Excel" />
                        <p>Excel</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techs