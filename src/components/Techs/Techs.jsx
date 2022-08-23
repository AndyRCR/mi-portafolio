import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import './Techs.css'

const Techs = () => {
    const { theme } = useContext(GlobalContext)

    useEffect(() => {
    }, [theme])

    return (
        <div className={`techs ${theme}`}>
            <div data-aos="fade-left" data-aos-duration="2500">
                <h3>Frontend</h3>
                <div className='frontend'>
                    <div className='techItem'>
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/html.png" alt="html" />
                        <p>HTML5</p>
                    </div>
                    <div className='techItem'>
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/css.png" alt="css" />
                        <p>CSS3</p>
                    </div>
                    <div className='techItem'>
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/js.png" alt="js" />
                        <p>JavaScript</p>
                    </div>
                    <div className='techItem'>
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/react.png" alt="react" />
                        <p>React</p>
                    </div>
                    <div className='techItem'>
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/three.png" alt="three" />
                        <p>Three.js</p>
                    </div>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="2500" data-aos-delay="500">
                <h3>Backend</h3>
                <div className='backend'>
                    <div className="techItem">
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/java.png" alt="Java" />
                        <p>Java</p>
                    </div>
                    <div className="techItem">
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/node.png" alt="Node" />
                        <p>Node</p>
                    </div>
                    <div className="techItem">
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/mongo.png" alt="MongoDB" />
                        <p>MongoDB</p>
                    </div>
                    <div className="techItem">
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/mysql.png" alt="MySQL" />
                        <p>MySQL</p>
                    </div>
                    <div className="techItem">
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/aws.png" alt="AWS" />
                        <p>AWS</p>
                    </div>
                </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="2500" data-aos-delay="1000">
                <h3>Extra</h3>
                <div className='extra'>
                    <div className="techItem">
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/git.png" alt="Git" />
                        <p>Git</p>
                    </div>
                    <div className="techItem">
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/postman.png" alt="Postman" />
                        <p>Postman</p>
                    </div>
                    <div className="techItem">
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/figma.png" alt="Figma" />
                        <p>Figma</p>
                    </div>
                    <div className="techItem">
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/adobexd.png" alt="Adobe XD" />
                        <p>Adobe XD</p>
                    </div>
                    <div className="techItem">
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/photoshop.png" alt="Photoshop" />
                        <p>Photoshop</p>
                    </div>
                    <div className="techItem">
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/vegas.png" alt="Vegas Pro" />
                        <p>Vegas Pro</p>
                    </div>
                    <div className="techItem">
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/gds.png" alt="Google Data Studio" />
                        <p>Google Data<br />Studio</p>
                    </div>
                    <div className="techItem">
                        <img src="https://andyrcr-portfolio.s3.sa-east-1.amazonaws.com/icons/techs/excel.png" alt="Excel" />
                        <p>Excel</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techs