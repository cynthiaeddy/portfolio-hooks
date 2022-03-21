import React from 'react'
import linkedin2 from '../assets/linkedin2.jpg'
import cynthia_eddy_resume from '../assets/cynthia_eddy_resume.pdf'
import '../stylesheets/Projects.css'
import '../stylesheets/AboutMe.css'

const AboutMe = () => {
  return (
    <div className='cards cards-container' id='me-container'>
      <img src={linkedin2} className='my-photo' alt='' />
      <h3>
        I've always had a penchant for creativity. My life has been a continual
        exploration of mediums ranging from textiles and metalsmithing to
        designing for editorial publications, both print and digital. The common
        thread throughout these mediums is the fascination of making the
        abstract tangible. <br /> <br />
        As a Software Developer, my focus is on exploring this medium of
        computer programming - applying my creative and technical
        problem-solving skills, as well as my tenacious spirit. Because of my
        previous work environment, I'm adept at prioritizing key deliverables
        under tight deadlines and collaborating effectively across departments.
      </h3>
      <footer>
        <a href={cynthia_eddy_resume}>
          <h5>view my resume | </h5>
        </a>
        <a href='http://www.cynthiaeddy.com'>
          <h5>view my print and digital portfolio | </h5>
        </a>
        <a href={cynthia_eddy_resume} download>
          <h5> download my resume</h5>
        </a>
      </footer>
    </div>
  )
}

export default AboutMe
