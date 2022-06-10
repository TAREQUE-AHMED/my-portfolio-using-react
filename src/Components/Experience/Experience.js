import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs';
function Experience() {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>

        </div>
        <div className='experience__backend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience_details'>
              <BsFillPatchCheckFill></BsFillPatchCheckFill>
              <h4>HTML</h4>
              <small className='text-align'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill></BsFillPatchCheckFill>
              <h4>HTML</h4>
              <small className='text-align'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill></BsFillPatchCheckFill>
              <h4>HTML</h4>
              <small className='text-align'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill></BsFillPatchCheckFill>
              <h4>HTML</h4>
              <small className='text-align'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill></BsFillPatchCheckFill>
              <h4>HTML</h4>
              <small className='text-align'>Experienced</small>
            </article>
            <article className='experience_details'>
              <BsFillPatchCheckFill></BsFillPatchCheckFill>
              <h4>HTML</h4>
              <small className='text-align'>Experienced</small>
            </article>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Experience