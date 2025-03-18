import './index.scss';
import Strings from '../../strings/Strings';
import PdfRenderer from '../pdf/PdfRenderer';
import resume from '../../assets/files/BryceMeadorsResume.pdf';
import Collapsible from 'react-collapsible';

const Resume = () => {
    return (
        <div id='resume' className='resumeContainer globalFontColor'>
            <h1 className='resumeHeader'>{`RESUM${Strings.accentedE.uppercase}`}</h1>
            <Collapsible trigger={`View Resum${Strings.accentedE.lowercase}`}>
            <PdfRenderer url={resume} /></Collapsible>
            
        </div>
    )
}

export default Resume;