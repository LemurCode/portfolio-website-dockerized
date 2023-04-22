import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import experiences from '../../configs/experiences.json'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">

          <h3>Frontend Development</h3>
          <div className="experience__content">
            {experiences.frontend ? experiences.frontend.map(x => <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>{x.name}</h4>
                <small className='text-light'>{x.level}</small>
              </div>
            </article>) : null}
          </div>
        </div>
        {/* End of frontend */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {experiences.backend ? experiences.backend.map(x => <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>{x.name}</h4>
                <small className='text-light'>{x.level}</small>
              </div>
            </article>) : null}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Automation</h3>
          <div className="experience__content">
            {experiences.automation ? experiences.automation.map(x => <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>{x.name}</h4>
                <small className='text-light'>{x.level}</small>
              </div>
            </article>) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience