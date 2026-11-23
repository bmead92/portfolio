import './index.scss';
import { about, education } from '../../content';
import Tacoma from '../../assets/images/tacoma-wa.png';

const About = () => (
    <section id="about" className="section">
        <div className="container">
            <span className="sectionEyebrow">About</span>
            <h2 className="sectionTitle">From Army aviation to full-stack engineering</h2>

            <div className="aboutGrid">
                <div className="aboutText">
                    {about.map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}

                    <h3 className="educationTitle">Education</h3>
                    <ul className="educationList">
                        {education.map((e) => (
                            <li key={e.title}>
                                <div>
                                    <strong>{e.title}</strong>
                                    <span>{e.detail}</span>
                                </div>
                                <time>{e.dates}</time>
                            </li>
                        ))}
                    </ul>
                </div>

                <figure className="aboutPhoto">
                    <img src={Tacoma} alt="Mount Rainier at sunset over Tacoma, Washington" loading="lazy" />
                    <figcaption>Based in Tacoma, Washington</figcaption>
                </figure>
            </div>
        </div>
    </section>
);

export default About;
