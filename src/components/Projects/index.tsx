import './index.scss';
import Strings from '../../strings/Strings';
import {Link} from 'react-router-dom';

const Projects = () => {
    return (
        <>
        <h1 className='header globalFontColor'>PROJECTS</h1>
        <div id='projects' className='projectSectionContainer'>
            {Strings.projects.map((project) => {
                return (
                    <div className='projectContainer' key={project.index}>
                        <h2 className='name globalFontColor'> {project.name}</h2>
                        <h3 className='description globalFontColor'>{project.description}</h3>
                        <Link className ='url' to={project.url}>
                            <img className='image' src={project.image} />
                        </Link>
                    </div>
                )
            })}
        </div>
        </>
    )
};

export default Projects;