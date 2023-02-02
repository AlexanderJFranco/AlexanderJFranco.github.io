import React from 'react'
import './about.css'
import {HiBriefcase} from 'react-icons/hi'
import {HiUserGroup} from 'react-icons/hi'
import {HiOutlineChartBar} from 'react-icons/hi'
import ME from '../../assets/me__.png'

const About = () => {
  return (

    

    <section id ='about'>
      

      <h5>Get To Know Me</h5>
      <h2>Introductions</h2>

      

<div className="container about_container">
  <div className='about_me'>
    <div className="about_me-image">
      <img src = {ME} alt ="About Image"/>
    </div>
  </div>

    <div className='about_content'>
      <div className='about_cards'>
        <article className='about_card'>
          <HiBriefcase className='about_icon'/>
          <h5>Education</h5>
          <small>BS In Computer Science at Florida State University</small>
        </article>

        <article className='about_card'>
          <HiUserGroup className='about_icon'/>
          <h5>Experience</h5>
          <small>2 Years As Customer Facing Software Implementation Engineer</small>
        </article>

        <article className='about_card'>
          <HiOutlineChartBar className='about_icon'/>
          <h5>Projects</h5>
          <small>Several Projects both completed and in development</small>
        </article>
      </div>
      <p>My name is Alexander Franco. I am a proud graduate of Florida State University's Computer Science Bachelors program. Since a young age I have always been intrigued by inventive characters in film and media, an interest that would eventually 
        bring me to pursue a career in what I believe to be the pinnacle of inventive thinking: Computer Science. In a field so vast and ever-expanding it can be hard to share what you are about with a simple resume, so I hope that this website can help 
        you get to know me a bit more. I am by no means the perfect developer, but I believe few people can provide the unerring attention to both code and team members that I can. I care about the things I do and those I work with, and believe that any
        workplace that holds these same values is bound to produce great things.</p>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
</div>

    </section>
  )
}

export default About