import React from "react"
import { Typewriter } from "react-simple-typewriter"
import img from '../../assets/images/trk.JPG'
import './Home.css'

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Tareque Ahmed</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Professional Developer.", " Designer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>As a Junior Front-End developer involved in making several projects. I have the right mixing skills, knowledge, patience and inspiration customers excited about my service.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
                          </div>
                          <div className='col_1'>
                              <h4>MY RESUME</h4>
                <button className='btn_shadow'>Download Resume
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={img} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
