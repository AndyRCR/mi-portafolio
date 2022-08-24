import React, { useState } from 'react'
import { createContext } from 'react'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'

export const GlobalContext = createContext()

const GlobalStateContext = ({children}) => {

  emailjs.init("uf1ocX0CxNZspgi0V")

    const [theme, setTheme] = useState('light')
    const [activeNavbar, setActiveNavbar] = useState(false)
    const [mail, setMail] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    const verifyFields = () =>{
      if(mail.name !== '' && mail.email !== '' && mail.subject !== '' && mail.subject !== ''){
        emailjs.send('service_4gfz4ub', 'template_lkdxwqs', {...mail})
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
          })
      }else{
        Swal.fire(
          'Information',
          'All fields are required',
          'info'
        )
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
        mail, setMail, verifyFields, emptyFields
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStateContext