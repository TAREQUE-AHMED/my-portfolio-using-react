import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs';
function Experience() {
  return (
    <section id='experience'>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
          <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'></BsFillPatchCheckFill>
              <div>
                <h4>HTML</h4>
              <small className='text-align'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'></BsFillPatchCheckFill>
              <div>
                <h4>CSS</h4>
              <small className='text-align'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'></BsFillPatchCheckFill>
              <div>
                <h4>JavaScript</h4>
              <small className='text-align'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'></BsFillPatchCheckFill>
              <div>
                <h4>Bootstrap</h4>
              <small className='text-align'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'></BsFillPatchCheckFill>
              <div>
                 <h4>Tailwind</h4>
              <small className='text-align'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'></BsFillPatchCheckFill>
              <div>
                <h4>React</h4>
              <small className='text-align'>Experienced</small>
              </div>
            </article>
            </div>
        </div>
        {/* Frontend end */}
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'></BsFillPatchCheckFill>
              <div>
                <h4>Node Js</h4>
              <small className='text-align'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'></BsFillPatchCheckFill>
              <div>
                <h4>MongoDB</h4>
              <small className='text-align'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'></BsFillPatchCheckFill>
              <div>
                 <h4>Express</h4>
              <small className='text-align'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill className='experience__details-icon'></BsFillPatchCheckFill>
              <div>
                <h4>Firebase</h4>
              <small className='text-align'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Experience