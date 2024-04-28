import './index.scss';
import Strings from '../../strings/Strings';

const AboutMe =  () => {
    return (
        <>
            <div id='aboutMe' className='header globalFontColor'>
                ABOUT ME
            </div>
            <div className='aboutMeText'>
                    {Strings.about}
            </div>
        </>
    )
}

export default AboutMe;