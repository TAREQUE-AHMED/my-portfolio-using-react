import React from 'react'
import './Footer.css'
import {BsFacebook} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
function Footer() {
  return (
    <footer>
      <ul className='links'>
<li><a href="@">Home</a></li>
<li><a href="about">About</a></li>
<li><a href="#experience">Experience</a></li>
<li><a href="#services">Services</a></li>
<li><a href="#portfolio">Portfolio</a></li>
<li><a href="#testimonials">Testimonials</a></li>
<li><a href="#contact">Contact</a></li>
 <li><a href='#blogs'>Blogs</a></li> 

      </ul>
      <div className='socials__icon'>
        <a href='https://facebook.com'><BsFacebook></BsFacebook></a>
        <a href='https://github.com'><BsGithub></BsGithub></a>
        <a href='https://whatsapp.cim'><BsWhatsapp></BsWhatsapp></a>
      </div>
      <div className='copyright'>
        <small>&copy: ALl right reserved</small>
      </div>
    </footer>
  )
}

export default Footer