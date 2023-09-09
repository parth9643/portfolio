import React from 'react'
import Typical from 'react-typical'
import './Home.css'

const Home = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icons'>
                            <a href='https://github.com/parth9643'>
                                <i className='fa fa-github '></i>
                            </a>
                            <a href='https://www.linkedin.com/in/parthshukla9643/'>
                                <i className='fa fa-linkedin '></i>
                            </a>
                            <a href='https://leetcode.com/PS_9643/'>
                                <i className='fa fa-link '></i>
                            </a>
                            <a href='https://www.instagram.com/parth2365/'>
                                <i className='fa fa-instagram '></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                           
                            Hello, I'm <span className='highlight-text'>Parth Shukla👋
                            </span>
                        </span>
                    </div>
                    <div className='profile-details-roles'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Web Developer 🧑‍💻", 1000,
                                        "MERN Stack Developer 😎", 1000,
                                        "Competitive Programmer 🖥️", 1000,
                                        "Team Leader 😁", 1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Master of creating applications that excel in both front-end and back-end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            {"  "}
                            Hire Me{" "}
                        </button>
                        <a href='parth shukla resume(7).pdf' download='parth shukla resume(7).pdf'>
                            <button className='btn highlighted-btn'>Download Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-pic'>
                <div className='profile-pic-bag'>
                </div>
            </div>
            </div>
            

        </div>
    )
}

export default Home
