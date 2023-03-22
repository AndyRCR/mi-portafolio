import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import logoBlackRecortado from '../../assets/icons/logoBlackRecortado.png'
import logoWhiteRecortado from '../../assets/icons/logoWhiteRecortado.png'
import './Loader.css'

const Loader = () => {

    const {theme, loaderState, setLoaderState, change} = useContext(GlobalContext)

    useEffect(() => {
        setLoaderState(1)
        setTimeout(()=> setLoaderState(2), 1500)
    }, [change])
    

  return (
    <div className={`loader ${theme} ${
        loaderState === 0
        ? ''
        : loaderState === 1
        ? 'first'
        : 'second'
    }`}>
        <div className='loaderImage'>
            <img src={theme === 'dark' ? logoWhiteRecortado : logoBlackRecortado} alt="andy canales spinner" />
        </div>
        <div className="progress-bar">
            <span className="bar">
            <span className="progress"></span>
            </span>
        </div>
        <p>Andy is finishing to coding this section...</p>
    </div>
  )
}

export default Loader