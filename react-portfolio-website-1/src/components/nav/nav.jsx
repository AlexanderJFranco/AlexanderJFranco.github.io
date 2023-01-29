import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {HiInformationCircle} from 'react-icons/hi'
import {GiNotebook} from 'react-icons/gi'
import {RiServiceFill} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>

      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><HiInformationCircle/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiNotebook/></a>
      <a href='#services' onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><AiFillMessage/></a>

    </nav>
  )
}

export default Nav