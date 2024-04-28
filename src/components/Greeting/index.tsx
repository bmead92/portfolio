import './index.scss';
import Strings from '../../strings/Strings';
import Tacoma from '../../assets/images/tacoma-wa.png'

const Greeting = () => {
    return (
        <div id='greeting' className='greetingContainer'>
            <div className='greetingText globalFontColor'>
                {Strings.aboutShort}
            </div>
            {/* TODO: Update to a gallery of images*/}
            {/* TODO: Keep size static, dynamically present with media queries */}
            <div className='imageContainer'>
                <img className='greetingImage' src={Tacoma} />
            </div>
        </div>
    )
};

export default Greeting;