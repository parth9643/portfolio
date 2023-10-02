import React from 'react'
import './Footer.css'

function Footer() {


    return (
        <div className="footer" >
            <p >
                Made by "Parth Shukla" ❤️
            </p>
            <div className='colz'>
                <div className='colz-icons'>

                    <a href='mailto:sparth9643@gmail.com'>
                        <i className='fa fa-envelope '></i>
                    </a>
                    <a href='https://github.com/parth9643'>
                        <i className='fa fa-github '></i>
                    </a>
                    <a href='https://www.linkedin.com/in/parthshukla9643/'>
                        <i className='fa fa-linkedin '></i>
                    </a>
                    <a href='https://leetcode.com/PS_9643/'>
                        <i className='fa fa-link '></i>
                    </a>

                    <a href='https://t.me/parth2365'>
                        <i className='fa fa-telegram '></i>
                    </a>
                    <a href='https://www.instagram.com/parth2365/'>
                        <i className='fa fa-instagram '></i>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Footer