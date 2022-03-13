import ProjectSolo from './ProjectSolo'
import data from '../data'
import { Link } from 'react-router-dom'
import museum from '../assets/museum.jpg'
import '../stylesheets/Projects.css'

const Projects = () => {
  const card = data.map(project => (
    <Link to={'#'} className='link'>
      <img src={project.img} alt='' className='project-card' />
    </Link>
  ))

  return <section className='cards cards-container'>{card}</section>
}
export default Projects
