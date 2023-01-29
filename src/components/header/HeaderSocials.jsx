import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import './HeaderSocials.css'


const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href = "https://www.linkedin.com/in/alexanderjfranco/" target="_blank"><AiOutlineLinkedin className='header_socials-icon'/></a>
        <a href = "https://github.com/AlexanderJFranco" target="_blank"><BsGithub className='header_socials-icon'/></a>
    </div>
  )
}

export default HeaderSocials