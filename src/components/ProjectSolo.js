import React from 'react'
import data from '../data'
import { useParams } from 'react-router'

const ProjectSolo = () => {
  const { title } = useParams()
  console.log(title)

  return (
    <>
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
