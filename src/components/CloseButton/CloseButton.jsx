import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import './CloseButton.css'
import { useEffect } from 'react'

const CloseButton = () => {

    const {activeNavbar, setActiveNavbar, theme} = useContext(GlobalContext)

    useEffect(() => {
    }, [theme])
    

  return (
    <>
        <div className={!activeNavbar ? `menuIconContainer ${theme}` : `menuIconContainer activeIconContainer ${theme}`}>
            <FontAwesomeIcon
            onClick={() => setActiveNavbar(!activeNavbar)}
            className='menuIcon'
            icon={activeNavbar ? faClose : faBars}/>
        </div>
    </>
  )
}

export default CloseButton