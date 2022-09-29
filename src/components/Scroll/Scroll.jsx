import React, { useContext, useEffect } from 'react'
import './Scroll.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from '../../context/GlobalStateContext'

const Scroll = () => {

  const { theme } = useContext(GlobalContext)

  useEffect(() => {
  }, [theme])
  

  return (
    <div className={`scroll ${theme}`}>
      <div className='scrollItem'>
        <div className='scrollText'>
          Scroll down
        </div>
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
      <div className='scrollItem'>
        <div className='scrollText'>
          Scroll down
        </div>
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
    </div>
  )
}

export default Scroll