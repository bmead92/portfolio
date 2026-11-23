import './index.scss';
import { featuredProjects, otherProjects, Project } from '../../content';
import { ArrowIcon } from '../Icons';

const ProjectLinks = ({ project }: { project: Project }) => (
    <div className="projectLinks">
        {project.links.map((link, i) => (
            <a
                key={link.url}
                className={`btn btnSmall ${i === 0 && project.links.length > 1 ? 'btnGhost' : 'btnPrimary'}`}
                href={link.url}
                target="_blank"
                rel="noreferrer"
            >
                {link.label} <ArrowIcon />
            </a>
        ))}
    </div>
);

const Projects = () => (
    <section id="projects" className="section">
        <div className="container">
            <span className="sectionEyebrow">Projects</span>
            <h2 className="sectionTitle">Things I've built</h2>

            <div className="featuredList">
                {featuredProjects.map((project) => (
                    <article className="featured" key={project.name}>
                        <div className="featuredMedia">
                            <img src={project.image} alt={`${project.name} app screenshot`} loading="lazy" />
                        </div>
                        <div className="featuredBody">
                            <span className="featuredLabel">Android app · 2026</span>
                            <h3>{project.name}</h3>
                            <p>{project.summary}</p>
                            <ul className="tagList">
                                {project.tags.map((t) => (
                                    <li className="tag" key={t}>{t}</li>
                                ))}
                            </ul>
                            <ProjectLinks project={project} />
                        </div>
                    </article>
                ))}
            </div>

            <h3 className="otherTitle">Earlier work</h3>
            <div className="otherGrid">
                {otherProjects.map((project) => (
                    <a
                        className="card"
                        key={project.name}
                        href={project.links[0].url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className={`cardMedia ${project.imageFit === 'contain' ? 'isContain' : ''}`}>
                            <img src={project.image} alt="" loading="lazy" />
                        </div>
                        <div className="cardBody">
                            <h4>
                                {project.name}
                                <ArrowIcon className="cardArrow" />
                            </h4>
                            <p>{project.summary}</p>
                            <ul className="tagList">
                                {project.tags.map((t) => (
                                    <li className="tag" key={t}>{t}</li>
                                ))}
                            </ul>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
