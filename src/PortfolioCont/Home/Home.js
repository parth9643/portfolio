import React from 'react'
import Typical from 'react-typical'
import { CSSTransition } from 'react-transition-group';
import './Home.css'

const Home = () => {
    const scrollToInfo = () => {
        const infoSection = document.querySelector('.contact-section');
        if (infoSection) {
            infoSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <CSSTransition in={true} appear={true} timeout={300} classNames="page">
        <div className="page-content">
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
                            <a href='mailto:sparth9643@gmail.com'>
                                <i className='fa fa-envelope '></i>
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
                        <button className='btn primary-btn' onClick={scrollToInfo}>
                            {"  "}
                            Hire Me{" "}
                        </button>
                        <a href='parth shukla resume(7) - Copy.pdf' download='parth shukla resume(7) - Copy.pdf'>
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
    </div>
</CSSTransition>
    )
}

export default Home