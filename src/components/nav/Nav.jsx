import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { FaRegHandshake } from 'react-icons/fa'
import { TbMessages } from 'react-icons/tb'
import { useState } from 'react'

import pages from '../../configs/pages.json'
const Nav = () => {
    const [activeNav, setActive] = useState('#')
    return (
        <nav>
            <a href="#"
                onClick={() => setActive('#')}
                className={activeNav === '#' ? 'active' : ''}
            >
                <AiOutlineHome />
            </a >

            {pages.includes('About') ? <a href="#about"
                onClick={() => setActive('#about')}
                className={activeNav === '#about' ? 'active' : ''}
            >
                <AiOutlineUser />
            </a> : null}
            {pages.includes('Experience') ? <a href="#experience"
                onClick={() => setActive('#experience')}
                className={activeNav === '#experience' ? 'active' : ''}
            >
                <BiBook />
            </a> : null}
            {pages.includes('Services') ? <a href="#services"
                onClick={() => setActive('#services')}
                className={activeNav === '#services' ? 'active' : ''}>
                <FaRegHandshake /></a> : null}
            {pages.includes('Contact') ? <a href="#contact"
                onClick={() => setActive('#contact')}
                className={activeNav === '#contact' ? 'active' : ''}>
                <TbMessages /></a> : null}





        </nav >
    )
}

export default Nav