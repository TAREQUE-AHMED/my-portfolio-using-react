import React from 'react'
import './About.css'
import me from '../../assets/images/tareque (3).jpg'
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

function About() {
  return (
    <section id="about">
      <h5>Get In Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={me} alt=''/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ Months Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>50+ Clients WorldWide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>60+ Projects Completed</small>
            </article>
          </div>
          <p>As a Junior Front-End developer involved in making several projects. I have the right mixing skills, knowledge, patience and inspiration customers excited about my service. How do I do it ? Simply, Strong communication with clients, great dedication to details, dedication to providing satisfaction of 100% and above all, sincere love for what I do.</p>
<a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

   </section>
  )
}

export default About