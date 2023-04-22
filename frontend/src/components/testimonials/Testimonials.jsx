import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/about_me.jpg'
import AVTR2 from '../../assets/about_me.jpg'
import AVTR3 from '../../assets/about_me.jpg'
import AVTR4 from '../../assets/about_me.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Temporibus aliquid soluta ipsum fugiat! Neque accusamus aliquid odio saepe corporis! Quam!'
  }, {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Temporibus aliquid soluta ipsum fugiat! Neque accusamus aliquid odio saepe corporis! Quam!'
  }, {
    avatar: AVTR3,
    name: 'Ted Ned',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Temporibus aliquid soluta ipsum fugiat! Neque accusamus aliquid odio saepe corporis! Quam!'
  }, {
    avatar: AVTR4,
    name: 'Gaynor',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Temporibus aliquid soluta ipsum fugiat! Neque accusamus aliquid odio saepe corporis! Quam!'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}
              </small>
            </SwiperSlide>)
        }
        )}
      </Swiper>

    </section >
  )
}

export default Testimonials