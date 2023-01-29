import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/P2.jpg'

const header = () => {



  return (
    <header>
      <div className="container header_container">
        <h5>Introducing</h5>
        <h1>Alexander Franco</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        

          <div className='me'>
          <img src={ME} alt = "me"/>
        </div>
        

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
      <div class="custom-shape-divider-top-1675007211">
      <div class="custom-shape-divider-top-1675007254">
      <div class="custom-shape-divider-top-1675007443">
      <div class="custom-shape-divider-top-1675009221">
      <div class="custom-shape-divider-top-1675020907">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
</div>
</div>
</div>
</div>
    </header>
    
  )
}

export default header