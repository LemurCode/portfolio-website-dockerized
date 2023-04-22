import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import personalLinks from '../../configs/personalLinks.json'


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_n0i7fop',
            'template_k1dyf32',
            form.current,
            'eIAn23pd2TCVsruVj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    {personalLinks.email ? <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>{personalLinks.email}</h5>
                        <a href={`mailto:${personalLinks.email}`}
                            target="_blank">Send a message</a>
                    </article> : null}

                    {personalLinks.messenger ? <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Henry Lu</h5>
                        <a href="http://m.me/https://www.facebook.com/henry.lu.503"
                            target="_blank">Send a message</a>
                    </article> : null}

                    {personalLinks.whatsapp ? <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>{personalLinks.whatsapp}</h5>
                        <a href={`https://api.whatsapp.com/send?phone=${personalLinks.whatsapp}`}
                            target="_blank">Send a message</a>
                    </article> : null}

                    {personalLinks.whatsapp ? <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>{personalLinks.whatsapp}</h5>
                        <a href={`https://api.whatsapp.com/send?phone=${personalLinks.whatsapp}`}
                            target="_blank">Send a message</a>
                    </article> : null}


                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact