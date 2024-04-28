import './index.scss';
import Strings from '../../strings/Strings';
import Tacoma from '../../assets/images/tacoma-wa.png'

const Greeting = () => {
    return (
        <div id='greeting' className='greetingContainer'>
            <div className='greetingText globalFontColor'>
                {Strings.aboutShort}
            </div>
            <img className='image' src={Tacoma} />
        </div>
    )
};

export default Greeting;