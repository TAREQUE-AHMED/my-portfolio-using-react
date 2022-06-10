import React from 'react'
import './Portfolio.css'
import IMG from '../../assets/images/img1.png';
import img1 from '../../assets/images/coff1.png';
import img2 from '../../assets/images/lap1.png';
import img3 from '../../assets/images/varsi1.png';
import img4 from '../../assets/images/panda.png';
import img5 from '../../assets/images/amnt.png';

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>Mt Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG} alt=''/>
          </div>
          <h3>This site about laptop and client</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/TAREQUE-AHMED/laptop-bazar.git' className='btn'>GitHub</a>
          <a href='https://jocular-praline-420a93.netlify.app/' className='btn btn-primary'>Live Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img1} alt=''/>
          </div>
          <h3>This site said about coffee house</h3>
          <div className='portfolio__item-cta'>
            <a href=' https://github.com/TAREQUE-AHMED/coffee-house.git' className='btn'>GitHub</a>
          <a href=' https://incredible-tulumba-e22a3c.netlify.app/' className='btn btn-primary'>Live Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img2} alt=''/>
          </div>
          <h3>This is laptop parts warehouse</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/TAREQUE-AHMED/warehouse-menufacture-website.git' className='btn'>GitHub</a>
          <a href='https://laptop-manufacture.firebaseapp.com/' className='btn btn-primary'>Live Site</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img3} alt=''/>
          </div>
          <h3>This page say about a university</h3>
          <div className='portfolio__item-cta'>
             <a href='https://github.com/TAREQUE-AHMED/project03.git' className='btn'>GitHub</a>
          <a href='https://tareque-ahmed.github.io/project03/' className='btn btn-primary'>Live Site</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img4} alt=''/>
          </div>
          <h3>You can see here different type of product</h3>
          <div className='portfolio__item-cta'>
             <a href='https://github.com/TAREQUE-AHMED/panda-commerce.git' className='btn'>GitHub</a>
          <a href='https://sleepy-noether-72bbc5.netlify.app/' className='btn btn-primary'>Live Site</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={img5} alt=''/>
          </div>
          <h3>This is a monthly cost calculation webpage</h3>
          <div className='portfolio__item-cta'>
             <a href='https://github.com/TAREQUE-AHMED' className='btn'>GitHub</a>
          <a href='https://clever-shannon-2e85a3.netlify.app/' className='btn btn-primary'>Live Site</a>
         </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio