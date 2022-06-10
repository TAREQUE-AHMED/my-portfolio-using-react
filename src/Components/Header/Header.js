import React from 'react'
import './Header.css'
import CTA from './CTA'
import profile from '../../assets/images/trk.png';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>MD TAREQUE AHMED</h1>
        <h5 className='text-light'>MERN STACK DEVELOPER</h5>
        <CTA></CTA>
        <HeaderSocial></HeaderSocial>
        <div className='profile'>
          <img src={profile} alt='' />
        </div>
        <div>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default Header;
// import React, { useState } from "react"
// import './Header.css';


// const Header = () => {
//   // fixed Header
//   window.addEventListener("scroll", function () {
//     const header = document.querySelector(".header")
//     header.classList.toggle("active", window.scrollY > 100)
//   })
//   // Toogle Menu
//   const [Mobile, setMobile] = useState(false)
//   return (
//     <>
//       <header className='header'>
//         <div className='container d_flex'>
//           <div className='logo'>
//             <img src='' alt='' />
//           </div>

//           <div className='navlink'>
//             <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
//               {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
//               <li>
//                 <a href='#home'>home</a>
//               </li>
//               <li>
//                 <a href='#features'>features</a>
//               </li>
//               <li>
//                 <a href='#portfolio'>portfolio</a>
//               </li>
//               <li>
//                 <a href='#resume'>resume</a>
//               </li>
//               <li>
//                 <a href='#clients'>clients</a>
//               </li>
//               <li>
//                 <a href='#blog'>blog</a>
//               </li>
//               <li>
//                 <a href='#contact'>contact</a>
//               </li>
//             </ul>

//             <button className='toggle' onClick={() => setMobile(!Mobile)}>
//               {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
//             </button>
//           </div>
//         </div>
//       </header>
//     </>
//   )
// }

// export default Header

