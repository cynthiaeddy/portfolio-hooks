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
          {data
            .filter(project => project.title === title)
            .map((project, idx) => {
              return (
                <div className='inner-card' key={idx}>
                  <a href={project.link}>
                    <img
                      src={project.img}
                      className='project-solo'
                      alt={project.copy[0]}
                    />
                  </a>
                  <h3>
                    <strong>{project.copy[0]}</strong>
                    {project.copy[1]}
                    <ul>
                      {project.copy[2].map(lines => {
                        return <li>{lines}</li>
                      })}
                    </ul>
                  </h3>
                  <div className='icons'>
                    <a href={project.link}>
                      <i className='fas fa-play-circle fa-2x' />
                    </a>
                    <a href={project.frontendLink}>
                      <i className='fab fa-github fa-2x' />
                    </a>
                    {project.backendLink ? (
                      <a href={project.backendLink}>
                        <i className='fab fa-github fa-2x' />
                      </a>
                    ) : null}
                  </div>
                </div>
              )
            })}
        </div>
      </section>
    </>
  )
}

export default ProjectSolo
