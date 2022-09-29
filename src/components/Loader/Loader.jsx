import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
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
        <div className="loaderImage"></div>
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