import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

import personalLinks from '../../configs/personalLinks.json'

import pages from '../../configs/pages.json'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>HENRY LU</a>

      <ul className="permalinks">
        {pages.includes('About') ? <li>
          <a href='#about'>About</a>
        </li> : null}
        {pages.includes('Experience') ? <li>
          <a href='#experience'>Experience</a>
        </li> : null}
        {pages.includes('Services') ? <li>
          <a href='#services'>Services</a>
        </li> : null}
        {pages.includes('Portfolio') ? <li>
          <a href='#portfolio'>Portfolio</a>
        </li> : null}
        {pages.includes('Testimonials') ? <li>
          <a href='#testimonials'>Testimonials</a>
        </li> : null}
        {pages.includes('Contact') ? <li>
          <a href='#contact'>Contact</a>
        </li> : null}
        <li>
          <a href='#'>Home</a>
        </li>






      </ul>

      <div className="footer__socials">
        {personalLinks.linkedin ? <a href={personalLinks.linkedin}><BsLinkedin /></a> : null}
        {personalLinks.github ? <a href={personalLinks.github}><FaGithub /></a> : null}
      </div>

      <div className="footer__copyright">
        <small>Copyright &copy; {new Date().getFullYear()} Henry Lu.  All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer