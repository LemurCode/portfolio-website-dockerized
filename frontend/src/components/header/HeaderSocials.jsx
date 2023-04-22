import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'

import personalLinks from '../../configs/personalLinks.json'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            {personalLinks.linkedin ? <a href={personalLinks.linkedin} target="_blank"><BsLinkedin /></a> : null}
            {personalLinks.github ? <a href={personalLinks.github} target="_blank"><FaGithub /></a> : null}
            {personalLinks.dribbble ? <a href={personalLinks.dribbble} target="_blank"><FiDribbble /></a> : null}
        </div>
    )
}

export default HeaderSocials