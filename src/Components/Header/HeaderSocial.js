import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
      <div className='header_socials'>
          <a href='https://linkedin.com'><BsLinkedin></BsLinkedin></a>
          <a href='https://linkedin.com'><FaGithub></FaGithub></a>
          <a href='https://facebook.com'><BsFacebook></BsFacebook></a>
    </div>
  )
}

export default HeaderSocial;