import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Switch from '../Switch/Switch'
import BlastText from '../BlastText/BlastText'
import './Contact.css'
import { useLocation } from 'react-router-dom'
import { BeatLoader } from 'react-spinners'

const Contact = () => {

    const {pathname} = useLocation()
    const { theme, mail, setMail, verifyFields, isLoading } = useContext(GlobalContext)

    const handleChange = (e) =>{
        const { name, value } = e.target
        setMail({
            ...mail,
            [name]: value
        })
    }

    useEffect(() => {
    }, [theme])

    return (
        <div className={`contact ${theme}`}>
            {pathname === '/contact' && <Switch />}

            <div className="page">
                <div className="container home-page-4">
                    <div className="text-zone">
                        <BlastText text="contact" className="blast-root" />
                        <p className='contactText'>
                            I'm interested in both, freelance opportunities and job offers. However,
                            if you have any other requests or questions, feel free to use the form.
                        </p>
                    </div>
                </div>
                <form>
                    <div className='formLine'>
                        <input value={mail.name} onChange={handleChange} type="text" name='name' placeholder='Name' required />
                        <input value={mail.email} onChange={handleChange} type="email" name='email' placeholder='Email' required />
                    </div>
                    <div className='formLine'>
                        <input value={mail.subject} onChange={handleChange} type="text" name='subject' placeholder='Subject' required />
                    </div>
                    <div className='formLine'>
                        <textarea value={mail.message} onChange={handleChange} name="message" placeholder='Message' required></textarea>
                    </div>
                    <div className='buttonContainer'>
                        <div className='button' onClick={() => {
                            if(!isLoading) verifyFields()
                        }}>
                            {isLoading ? (
                                <BeatLoader color='#fff' />
                            ):<>Let's go!</>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact