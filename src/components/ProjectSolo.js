import React from 'react'
import data from '../data'
import { useParams } from 'react-router'

const ProjectSolo = () => {
  const { title } = useParams()
  console.log(title)

  return (
    <>
      <section className='cards' id='indie-card'>
        <div className='card-backdrop'>
          {data
            .filter(project => project.title === title)
            .map((proj, idx) => {
              return (
                <div className='inner-card' key={idx}>
                  <a href={proj.link}>
                    <img
                      src={proj.img}
                      className='project-solo'
                      alt={proj.copy[0]}
                    />
                  </a>
                  <h3>
                    <strong>{proj.copy[0]}</strong>
                    {proj.copy[1]}
                    <ul>
                      {proj.copy[2].map((lines, idx) => {
                        return <li key={idx}>{lines}</li>
                      })}
                    </ul>
                  </h3>
                  <div className='icons'>
                    <a href={proj.link}>
                      <i className='fas fa-play-circle fa-2x' />
                    </a>
                    <a href={proj.frontendLink}>
                      <i className='fab fa-github fa-2x' />
                    </a>
                    {proj.backendLink ? (
                      <a href={proj.backendLink}>
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
