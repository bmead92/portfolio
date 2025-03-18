import './index.scss';
import Strings from '../../strings/Strings';
import PdfRenderer from '../pdf/PdfRenderer';
// @ts-ignore
import resume from '../../assets/files/BryceMeadorsResume.pdf';
import Collapsible from 'react-collapsible';

const Resume = () => {
    return (
        <div id='resume' className='header resumeContainer globalFontColor'>
            <Collapsible trigger={`RESUM${Strings.accentedE.uppercase} (Click to expand)`}>
                <PdfRenderer url={resume} />
            </Collapsible>
            
        </div>
    )
}

export default Resume;