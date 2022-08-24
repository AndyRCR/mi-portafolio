import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalStateContext'
import Switch from '../Switch/Switch'
import BlastText from '../BlastText/BlastText'
import './Contact.css'

const Contact = () => {

    const { theme } = useContext(GlobalContext)

    useEffect(() => {
    }, [theme])

    return (
        <div className={`contact ${theme}`}>
            <Switch />

            <div className="page">
                <div className="container home-page-4">
                    <div className="text-zone">
                        <BlastText text="contact" className="blast-root" />
                        <p className='contactText' data-aos="fade-up" data-aos-duration="2500">
                            I'm interested in both, freelance opportunities and job offers. However,
                            if you have any other requests or questions, feel free to use the form.
                        </p>
                    </div>
                </div>
                <form data-aos="fade-up" data-aos-duration="2500">
                    <div className='formLine'>
                        <input type="text" name='name' placeholder='Name' required />
                        <input type="email" name='email' placeholder='Email' required />
                    </div>
                    <div className='formLine'>
                        <input type="text" name='subject' placeholder='Subject' required />
                    </div>
                    <div className='formLine'>
                        <textarea name="message" placeholder='Message' required></textarea>
                    </div>
                    <div className='buttonContainer'>
                        <button type="submit">
                            Let's go!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact