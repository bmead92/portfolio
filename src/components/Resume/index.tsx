import './index.scss';


const Resume = () => {
    const resumeSource = 'portfolio/public/BryceMeadorsResume.pdf';
    return (
        <div className='resumeContainer'>
            <h1 className='resumeHeaderText'>RESUME</h1>
            {/* TODO: UPDATE TO LINK */}
            <a
                className='downloadResumeButtonText'
                href={resumeSource}
                download='BryceMeadorsResume.pdf'
            >Download my resume</a>
        </div>
    )
}

export default Resume;