import React from 'react'
import './footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href ='#' className='footer_logo'>Alexander James Franco</a>

      <ul className='permaLinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://www.linkedin.com/in/alexanderjfranco/'>
          <AiOutlineLinkedin/>
        </a>
        <a href='https://github.com/AlexanderJFranco'>
          <BsGithub/>
        </a>
      </div>
    </footer>
  )
}

export default Footer