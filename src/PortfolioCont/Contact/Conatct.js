import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section className='contact-section'>
            <h1 className='section-title'>Contact Me</h1>

            <div className='contact-container container-grid'>
                <div className='contact-content'>
                    <h2>Talk to me</h2>

                    <div className='contact-info'>
                        <div className='contact-card'>
                            <i className="fa fa-envelope contact-card-icon"></i>
                            <h3 className='contact-card-title'>Email</h3>
                            <span className='contact-card-data'>user@gmail.com</span>
                            <a href='mailto:sparth9643.com' className='contact-button primary-btn'>Write Me</a>
                        </div>

                        <div className='contact-card'>
                            <i className='fa fa-telegram contact-card-icon'></i>
                            <h3 className='contact-card-title'>Telegram</h3>
                            <span className='contact-card-data'>parth2365</span>
                            <a href='https://t.me/parth2365' className='contact-button primary-btn'>Write Me</a>
                        </div>

                        <div className='contact-card'>
                            <i className='fa fa-linkedin contact-card-icon'></i>
                            <h3 className='contact-card-title'>LinkedIn</h3>
                            <span className='contact-card-data'>Parth9643</span>
                            <a href='https://www.linkedin.com/in/parthshukla9643/' className='contact-button primary-btn'>Write Me</a>
                        </div>
                    </div>
                </div>

                <div className='contact-content'>
                    <h3 className='contact-title'>Message Me</h3>

                    <form action="" className='contact-form'>
                        <div className='contact-form-grid'>
                            <label className='contact-form-tag' htmlFor="name">Name</label>
                            <input className='contact-form-input' type="text" name='name' placeholder='Write Your Name' />
                        </div>

                        <div className='contact-form-grid'>
                            <label className='contact-form-tag' htmlFor="email">Email</label>
                            <input className='contact-form-input' type="email" name='email' placeholder='Write Your Email' />
                        </div>

                        <div className='contact-form-grid'>
                            <label className='contact-form-tag' htmlFor="message">Message</label>
                            <textarea className='contact-form-input' name="message" cols="30" rows="10" placeholder='Write Your Message'></textarea>
                        </div>

                        <button className='contact-button contact-form-button primary-btn'>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
