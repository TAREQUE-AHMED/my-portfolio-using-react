import React from 'react'
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi'

function Nav() {
  return (
    <nav>
      <a href="@"><AiOutlineHome></AiOutlineHome></a>
      <a href='#about'><AiOutlineUser></AiOutlineUser></a>
      <a href='#experience'><BiBook></BiBook></a>
      <a href='#services'><RiServiceLine></RiServiceLine></a>
      <a href='#contact'><BiMessageSquareDetail></BiMessageSquareDetail></a>
    </nav>
  )
}

export default Nav;