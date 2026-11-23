import './index.scss';
import { experience, profile } from '../../content';
import { DownloadIcon } from '../Icons';

const Experience = () => (
    <section id="experience" className="section">
        <div className="container">
            <div className="experienceHeading">
                <div>
                    <span className="sectionEyebrow">Experience</span>
                    <h2 className="sectionTitle">Where I've worked</h2>
                </div>
                <a className="btn btnGhost btnSmall" href={profile.resume} target="_blank" rel="noreferrer">
                    <DownloadIcon /> Full résumé (PDF)
                </a>
            </div>

            <ol className="timeline">
                {experience.map((job) => (
                    <li className="job" key={`${job.company}-${job.dates}`}>
                        <div className="jobDates">{job.dates}</div>
                        <div className="jobBody">
                            <h3 className="jobRole">{job.role}</h3>
                            <p className="jobCompany">{job.company}</p>
                            <ul className="jobHighlights">
                                {job.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    </section>
);

export default Experience;
