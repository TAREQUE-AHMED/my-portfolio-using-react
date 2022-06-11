import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI Design</h3>
          </div>
          <ul className='service__list'>
            <li> 
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Creating and enforcing a style guide – or visual language</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Designing the interactivity of each user interface (UI) element.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Creating animations.</p>
            </li>
            
          </ul>
        </article>
        {/* END OF UI */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li> 
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Ecommerce Applications</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Custom Web Applications.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'></BiCheck>
              <p>we professionally design.</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Website Maintenance.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Mern Stack Development</h3>
          </div>
          <ul className='service__list'>
            <li> 
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Enterprise Application Development</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Custom Application Development</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'></BiCheck>
              <p>Web Application Development</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'></BiCheck>
              <p>eCommerce Application Development</p>
            </li>
          </ul>
        </article>
        {/* END OF Mern Stack Development */}
      </div>
    </section>
  )
}

export default Services