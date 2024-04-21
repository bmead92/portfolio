import './index.css'
import about from '../../strings/strings.json';
const About = () => {
    return (
        <div className='about'>
            {about.about}
        </div>
    )
};

export default About;