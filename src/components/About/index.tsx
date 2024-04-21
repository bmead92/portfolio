import './index.scss';
import Strings from '../../strings/Strings';
import Tacoma from '../../assets/images/tacoma-wa.png'

const About = () => {
    return (
        <div className='aboutContainer'>
            <div className='about'>
                {Strings.aboutShort}
            </div>
            <img className='image' src={Tacoma} />
        </div>
    )
};

export default About;