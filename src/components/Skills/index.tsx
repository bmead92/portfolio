import './index.scss';
import { skills } from '../../content';

const Skills = () => (
    <section id="skills" className="section">
        <div className="container">
            <span className="sectionEyebrow">Skills</span>
            <h2 className="sectionTitle">Tools I work with</h2>

            <div className="skillsGrid">
                {skills.map((group) => (
                    <div className="skillGroup" key={group.group}>
                        <h3>{group.group}</h3>
                        <ul className="tagList">
                            {group.items.map((item) => (
                                <li className="tag skillTag" key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
