import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gap0u7b', 'template_1ixrr2c', form.current, 'V6uoZNAyhc9s0qfjV')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
        e.target.reset();

  };


  return (
    <section id = 'contact'>

      

      <h5>Contact Me</h5>
      <h2>Happy To Hear From You</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>AlexanderJFranco@outlook.com</h5>
            <a href='mailto: AlexanderJFranco@outlook.com'>Send A Message</a>
          </article>
        </div>
        {/*End of Contact*/}
        <form ref = {form} onSubmit = {sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact