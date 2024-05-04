import './index.scss';
import Strings from '../../strings/Strings';
import {Document, Page} from 'react-pdf';

const Resume = () => {
    const resumeSource = '/BryceMeadorsResume.pdf';
    return (
        <div id='resume' className='resumeContainer'>
            <h1 className='resumeHeader globalFontColor'>{`RESUM${Strings.accentedE.uppercase}`}</h1>
            {/* TODO: Render PDF here*/}
            {/* <>
            <Document file={resumeSource}>
                <Page pageNumber={1}>

                </Page>
            </Document>
            </> */}
            <div className='downloadButtonContainer'>
                <h3 className='resumeDownloadLabel globalFontColor'>
                    {Strings.resumeDownloadLabel}
                </h3>
                <a
                    className='downloadResumeButtonText'
                    href={resumeSource}
                    download='BryceMeadorsResume.pdf'
                >
                    <button className='downloadResumeButton'>
                        {`DOWNLOAD RESUM${Strings.accentedE.uppercase}`}
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Resume;