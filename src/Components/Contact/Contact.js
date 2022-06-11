import React from 'react'
import './Contact.css';
import { MdAttachEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4i7bbwr', 'template_sybqclf', form.current, '7oPvnhLvo2127vlOb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h2>Contact with me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdAttachEmail className='icon'></MdAttachEmail>
            <h4>Email</h4>
          <h5>tarequeahmed146@gmail.com</h5>
          <a href='mailto:tarequeahmed146@gmail.com'>Send your message</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='icon'></BsMessenger>
            <h4>Messenger</h4>
          <h5>tareque ahmed nell</h5>
          <a href='https://m.me/mdtareque.ahmed.77'>Send your message</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='icon'></BsMessenger>
            <h4>Messenger</h4>
          <h5>tareque ahmed nell</h5>
          <a href='https://m.me/mdtareque.ahmed.77'>Send your message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Enter Your Name' required></input>
          <input type='email' name='name' placeholder='Enter Your Email' required></input>
          <textarea name='message' rows='6' placeholder='Type your message here' required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact