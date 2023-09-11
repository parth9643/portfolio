import React from 'react';
import './Project.css';
import Project1 from '../projectsImg/Project1.png';
import Project2 from '../projectsImg/Project2.png';
import Project3 from '../projectsImg/Project3.png';
import Project4 from '../projectsImg/Project4.png';

const Project = () => {
    return (
        <div>
            <div className='project'>
                <div className='project-header'>
                    <h1>Projects</h1>
                </div>
                <div className='project-container'>
                    <div className='project-box color-container'>
                        <div className='project-img'>
                            <img src={Project1} alt='project-img' />
                        </div>
                        <div className='project-details'>
                            <h3 className='project-title'>Gym Website</h3>
                            <p>Project made by React JS, seamlessly integrating an API to provide users
                            with up-to-date fitness exercises and resources. It showcases a commitment to with real-time content updates</p>
                            <div className='profile-options'>
                                <button className='btn primary-btn'>
                                    <a href='https://github.com/parth9643/Gym-Project'>Github</a>
                                </button>
                                <button className='btn highlighted-btn'>
                                    <a href='https://6478f8fd2ab9730ed0ad6019--chic-figolla-69e3f5.netlify.app/'>Website</a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='project-box'>
                        <div className='project-img'>
                            <img src={Project2} alt='project-img' />
                        </div>
                        <div className='project-details'>
                            <h3 className='project-title'>Ai Gift Shop</h3>
                            <p>Optimizing product recommendations and streamlining inventory management.
                            It also enhancing the customer experience and driving business growth. Project Made by ReactJS</p>
                            <div className='project-links'>
                                <div className='profile-options'>
                                    <button className='btn primary-btn'>
                                        <a href='https://github.com/parth9643/aigiftshop'>Github</a>
                                    </button>
                                    <button className='btn highlighted-btn'>
                                        <a href='https://aigiftshop.vercel.app/'>Website</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project-box'>
                        <div className='project-img'>
                            <img src={Project3} alt='project-img' />
                        </div>
                        <div className='project-details'>
                            <h3 className='project-title'>E-commerce</h3>
                            <p>Designed and built an E-commerce Website using HTML, CSS,
                            and JS, featuring a vast product catalog, personalized recommendations</p>
                            <div className='project-links'>
                                <div className='profile-options'>
                                    <button className='btn primary-btn'>
                                        <a href='https://github.com/parth9643/E-commerce'>Github</a>
                                    </button>
                                    <button className='btn highlighted-btn'>
                                        <a href='https://parthecommerce.netlify.app/'>Website</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className='project-box'>
                        <div className='project-img'>
                            <img src={Project4} alt='project-img' />
                        </div>
                        <div className='project-details'>
                            <h3 className='project-title'>Tech Blog</h3>
                            <p>Created a Tech Blog Website with a sleek and responsive design
                            using HTML, CSS, and Bootstrap. The site offers diverse tech topics, expert insights, and tutorials
                            to engage and inform readers</p>
                            <div className='project-links'>
                                <div className='profile-options'>
                                    <button className='btn primary-btn'>
                                        <a href='https://github.com/parth9643/codezone.github.io'>Github</a>
                                    </button>
                                    <button className='btn highlighted-btn'>
                                        <a href='https://darling-dasik-0b0c7d.netlify.app/'>Website</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
