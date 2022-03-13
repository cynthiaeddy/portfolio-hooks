import ProjectSolo from './ProjectSolo'
import data from '../data'
import { Link } from 'react-router-dom'
import museum from '../assets/museum.jpg'

const Projects = () => {
  const singleProject = data.map((project, idx) => {
    return (
      <ProjectSolo
        key={idx}
        id={idx}
        img={project.img}
        link={project.link}
        copy={project.copy}
        frontendLink={project.frontendLink}
        backendLink={project.backendLink}
      />
    )
  })
  return (
    <>
      <section className='cards cards-container'>
        <img src={museum} />
      </section>
    </>
  )
}
export default Projects
