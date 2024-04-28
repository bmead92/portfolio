import './index.scss';
import Strings from '../../strings/Strings';
const Resume = () => {
    const resumeSource = 'portfolio/public/BryceMeadorsResume.pdf';
    return (
        <div id='resume' className='resumeContainer'>
            <h1 className='globalFontColor'>{`RESUM${Strings.accentedE.uppercase}`}</h1>
            {/* TODO: Render PDF here*/}
            <a
                className='downloadResumeButtonText'
                href={resumeSource}
                download='BryceMeadorsResume.pdf'
            >
                <button className='downloadResumeButton'>
                    {`Download my resum${Strings.accentedE.lowercase}`}
                </button>
            </a>
        </div>
    )
}

export default Resume;