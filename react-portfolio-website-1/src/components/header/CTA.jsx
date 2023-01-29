import React from 'react'
import Resume from '../../assets/Header.pdf'

const CTA = () => {
  return (

      
    <div className='cta'>

      
        <a href={Resume}m className='btn'>View Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA