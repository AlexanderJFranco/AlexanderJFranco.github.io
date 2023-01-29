import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const services = () => {
  return (
    <section id = 'services'>
      <h5>A Bit More About Me</h5>
      <h2>My Perspectives</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>Software Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Productivity is a necessity in times of such rapid growth. I hope to apply my experience and skills in challenging fields to bring service to users they never knew they could have.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Software is the focal point of connecting across the world in so many ways and I wish to help connect individuals, be it with others or resources.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>There is no limitation to Software. The furthest reaches of our creative minds can come to fruition through software development. I plan to use my knowledge to assist in the development of creative and practical ideas accessible for all to use.</p>
            </li>
           
          </ul>
        </article>
       
        <article className='service'>
          <div className='service_head'>
            <h3>Front-End Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>End User experience is vital, one must understand that design is as important to code as it's functionality. I hope to bring intuitive interfaces to Users to provide a pleasant experience for any customer.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Many applications possess unparalleled availability, typically accessible from our fingertips at a moments notice. As such, it should be functional for all users. Accessibility is crucial for any successful project, and I hope to bring necessary resources to all in need.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>The end user experience must be thoroughly designed and tested, I hope to provide a high quality of front end design to software to maintain customer interest and provide seamless interactions with back end resources.</p>
            </li>
            
          </ul>
        </article>
        

        <article className='service'>
          <div className='service_head'>
            <h3>Back End Development</h3>
          </div>

          <ul className='service_list'>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>I desire to help maintain server side logic to prove the best functionality between the front and back ends of software.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Data management is important for both user and developers, as such I hold myself to maintain best practices associated with any data and all data utilized by a project.</p>
            </li>
            <li>
              <AiOutlineCheck className='service_list-icon'/>
              <p>Interaction between different software is imperative in this day and age, and I want to expose myself to the implementation and development of API to assist in the fields dependence on the resource.</p>
            </li>
          </ul>
        </article>


      </div>
      </section>
  )
}

export default services