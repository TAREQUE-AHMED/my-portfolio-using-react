import React from 'react'
import './Testimonials.css'
import client1 from '../../assets/images/1.jpg'
import client2 from '../../assets/images/2.jpg'
import client3 from '../../assets/images/3.jpg'
import client4 from '../../assets/images/4.jpg'
import client5 from '../../assets/images/5.jpg'
import client6 from '../../assets/images/6.jpg'


import {Pagination} from 'swiper';
  import {Swiper, SwiperSlide} from 'swiper/react'
  
  import 'swiper/css';
  import 'swiper/css/pagination';

 

function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
    
      <Swiper className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={45}
        slidesPerView={1}
        pagination={{clickable:true}}
      >
        <SwiperSlide className='testimonials'>
          <div className='client__img'>
            <img src={client1} alt='' />
          </div>
          <h5 className='client__name'>Smith Hang</h5>
            <small className='client__review'>
              I am happy to say that the developer behavior is very good. His work and design pattern attact me lot. I want to say thanks for his beautiful website.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
          <div className='client__img'>
            <img src={client2} alt='' />
            
          </div>
          <h5 className='client__name'>Steve Jobs</h5>
            <small className='client__review'>
              I am happy to say that the developer behavior is very good. His work and design pattern attact me lot. I want to say thanks for his beautiful website.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
          <div className='client__img'>
            <img src={client3} alt='' />
            
          </div>
          <h5 className='client__name'>Marks Jukerbers</h5>
            <small className='client__review'>
              I am happy to say that the developer behavior is very good. His work and design pattern attact me lot. I want to say thanks for his beautiful website.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
          <div className='client__img'>
            <img src={client4} alt='' />
            
          </div>
          <h5 className='client__name'>Brane Lara</h5>
            <small className='client__review'>
              I am happy to say that the developer behavior is very good. His work and design pattern attact me lot. I want to say thanks for his beautiful website.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
          <div className='client__img'>
            <img src={client5} alt='' />
           
          </div>
           <h5 className='client__name'>Don Badman</h5>
            <small className='client__review'>
              I am happy to say that the developer behavior is very good. His work and design pattern attact me lot. I want to say thanks for his beautiful website.
            </small>
        </SwiperSlide>
        <SwiperSlide className='testimonials'>
          <div className='client__img'>
            <img src={client6} alt='' />
            
          </div>
          <h5 className='client__name'>Michel Richard</h5>
            <small className='client__review'>
              I am happy to say that the developer behavior is very good. His work and design pattern attact me lot. I want to say thanks for his beautiful website.
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials