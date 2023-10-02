import React from 'react'
import './Contact.css'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CSSTransition } from 'react-transition-group';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create an object with form data
    const formData = {
      name,
      email,
      message,
    };

    try {
      // Send a POST request to your backend to save the data
      const response = await fetch('http://localhost:5000/api/v1/getallUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Data saved successfully!');
        // Clear form inputs after successful submission
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setName('');
        setEmail('');
        setMessage('');
        // Handle errors, e.g., display an error message
        console.error('Email id already exist ');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleSubmit1 = () => {
    // Get the values of the form fields
    const formData = {
      // Replace these with your actual form field values
      name,
      email,
      message,
    };
    


    // Check if all required fields are filled
    if (formData.name && formData.email && formData.message) {
      // Perform your form submission logic here

      // After successful submission, display a toast
      toast.success('Message sent successfully!');
    }
  };




  return (
    <CSSTransition in={true} appear={true} timeout={300} classNames="page">
      <div className="page-content">
        <section className='contact-section'>
          <h1 className='section-title'>Contact Me</h1>

          <div className='contact-container container-grid'>
            <div className='contact-content'>
              <h2>Talk to me</h2>

              <div className='contact-info'>
                <div className='contact-card'>
                  <i className="fa fa-envelope contact-card-icon"></i>
                  <h3 className='contact-card-title'>Email</h3>
                  <span className='contact-card-data'>sparth9643@gmail.com</span>
                  <a href='mailto:sparth9643@gmail.com' className='contact-button primary-btn'>Write Me</a>
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


              <form action="" className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-grid">
                  <label className="contact-form-tag" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="contact-form-input"
                    type="text"
                    name="name"
                    placeholder="Write Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="contact-form-grid">
                  <label className="contact-form-tag" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="contact-form-input"
                    type="email"
                    name="email"
                    placeholder="Write Your Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="contact-form-grid">
                  <label className="contact-form-tag" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="contact-form-input"
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Write Your Message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <button onClick={handleSubmit1}
                  className="contact-button contact-form-button primary-btn"
                  type="submit"
                >
                  Send Message
                </button>

                <ToastContainer />



              </form>
            </div>
          </div>
        </section>
      </div>
    </CSSTransition>
  )
}

export default Contact
