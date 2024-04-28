import './index.scss';
import Strings from '../../strings/Strings';
import Collapsible from 'react-collapsible';
const AboutMe =  () => {
    return (
        <Collapsible className='aboutMeText collapsible' trigger='About Me'>
        <div id='aboutMe' className='aboutMeText'>
            {Strings.about}
        </div>
        </Collapsible>
    )
}

export default AboutMe;