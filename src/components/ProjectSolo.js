import React from 'react'
import data from '../data'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const ProjectSolo = () => {
  const { title } = useParams()
  console.log(title)

  return (
    <>
      <section className='cards' id='indie-card'>
        <div className='solo-card'>
          <div className='inner-card'>
            {data
              .filter(project => project.title === title)
              .map((project, idx) => {
                return (
                  <div className='inner-card' key={idx}>
                    <Link to={project.link}>
                      <img
                        src={project.img}
                        className='project-solo'
                        alt={project.copy[0]}
                      />
                    </Link>
                    <h3>
                      <strong>{project.copy[0]}</strong>
                      {project.copy[1]}
                    </h3>
                  </div>
                )
              })}
          </div>
        </div>
      </section>
      {/* <div className='inner-card'>
        <a href={props.link}>
          <img src={props.img} className='project-soloe' alt='escape-room' />
        </a>

        <h3>
          <strong>The White Door Escape</strong> is a simple escape game.
          <ul>
            <li>Built with React Hooks and CSS.</li>
          </ul>
        </h3>

        <div className='icons'>
          <a href={props.link}>
            <i className='fas fa-play-circle fa-2x' />
          </a>

          <a href={props.frontendLink}>
            <i className='fab fa-github fa-2x' />
          </a>
        </div>
      </div> */}
    </>
  )
}

export default ProjectSolo
