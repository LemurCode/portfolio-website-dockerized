import React from 'react'
import './about.css'
import ME from '../../assets/about_me.jpg'
import IFDS from '../../assets/IFDS_White.webp'
import IBM from '../../assets/IBM.png'
import RBC from '../../assets/RBC.png'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <img src={IFDS} alt="IFDS" className='.about__icon' />
                            <div>
                                <h5>Fullstack Developer</h5>
                                <small>IFDS group</small>
                            </div>

                        </article>
                        <article className="about__card">
                            <img src={IBM} alt="IBM" className='.about__icon' />
                            <div>
                                <h5>Fullstack Developer</h5>
                                <small>IBM</small>
                            </div>
                        </article>
                        <article className="about__card">
                            <img src={RBC} alt="RBC" className='.about__icon' />
                            <div>
                                <h5>Automated QA</h5>
                                <small>RBC</small>
                            </div>
                        </article>

                    </div>
                    <p>Throughout my career, I have been fortunate to gain exposure to a wide range of software development areas, including front-end, back-end, automated QA, and UI/UX design. These experiences have all taken place in professional settings, enabling me to develop a well-rounded skill set.</p>
                    <p>In addition to my technical abilities, I credit my success to my strong communication skills. I am adept at translating complex technical concepts into easy-to-understand language, which enables me to effectively communicate with stakeholders at all levels.</p>
                    <p>I am excited to bring the wealth of knowledge and experience that I have gained from working in fast-paced organizations to better serve you.</p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>

        </section>
    )
}

export default About