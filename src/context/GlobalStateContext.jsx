import React, { useState } from 'react'
import { createContext } from 'react'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'

export const GlobalContext = createContext()

const GlobalStateContext = ({children}) => {

  emailjs.init("adA-jRKohY9c3pLXE")

    const [isLoading, setIsLoading] = useState(false)
    const [loaderState, setLoaderState] = useState(1)
    const [change, setChange] = useState(true)
    const [theme, setTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
    const [activeNavbar, setActiveNavbar] = useState(false)
    const [mail, setMail] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    const verifyFields = () =>{
      setIsLoading(true)
      if(mail.name !== '' && mail.email !== '' && mail.subject !== '' && mail.subject !== ''){
        emailjs.send('service_62hcb8h', 'template_nec1jlb', mail)
          .then(function (response) {
              Swal.fire(
                  'Nice!',
                  `I'll reply as soon as possible`,
                  'success'
              )

              setMail({
                name: '',
                email: '',
                subject: '',
                message: ''
              })
          }, function (error) {
              Swal.fire(
                  'An error occurred with the server :/',
                  `Please try again`,
                  'error'
              )
          }).then(() => setIsLoading(false))
      }else{
        Swal.fire(
          'Information',
          'All fields are required',
          'info'
        )
        setIsLoading(false)
      }
    }

    const emptyFields = () => setMail({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

  return (
    <GlobalContext.Provider
    value = {{
        theme, setTheme,
        activeNavbar, setActiveNavbar,
        mail, setMail, verifyFields, emptyFields,
        loaderState, setLoaderState,
        change, setChange,
        isLoading, setIsLoading
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext